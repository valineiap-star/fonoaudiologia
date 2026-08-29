const fs = require('fs');
const { execSync } = require('child_process');

function processMockup() {
  console.log('1. Upscaling and exporting raw pixels...');
  // Upscale to 1280x1600 with Lanczos filter and unsharp mask for crystal clarity
  execSync('convert public/hero-mockup-raw.png -filter Lanczos -resize 1280x1600 -unsharp 0x1.0+0.8+0.02 raw_up.rgba');
  
  const width = 1280;
  const height = 1600;
  const buffer = fs.readFileSync('raw_up.rgba');
  
  console.log(`Buffer size: ${buffer.length} bytes (expected ${width * height * 4})`);
  
  // Sample background colors from top corners
  const bgSamples = [];
  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 30; x++) {
      const idx = (y * width + x) * 4;
      bgSamples.push([buffer[idx], buffer[idx+1], buffer[idx+2]]);
    }
    for (let x = width - 30; x < width; x++) {
      const idx = (y * width + x) * 4;
      bgSamples.push([buffer[idx], buffer[idx+1], buffer[idx+2]]);
    }
  }
  
  const avgBg = [0, 0, 0];
  bgSamples.forEach(c => {
    avgBg[0] += c[0];
    avgBg[1] += c[1];
    avgBg[2] += c[2];
  });
  avgBg[0] /= bgSamples.length;
  avgBg[1] /= bgSamples.length;
  avgBg[2] /= bgSamples.length;
  
  console.log('Average background color:', avgBg.map(Math.round));
  
  function colorDist(r, g, b, bg) {
    const dr = r - bg[0];
    const dg = g - bg[1];
    const db = b - bg[2];
    // Perceptually weighted distance
    return Math.sqrt(0.3 * dr * dr + 0.59 * dg * dg + 0.11 * db * db);
  }

  // BFS Flood-fill from outer boundaries ONLY
  // This guarantees that interior white pages, screens, and diagrams will NEVER be made transparent!
  const isBg = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let qHead = 0;
  let qTail = 0;
  
  // Seed queue with border pixels
  for (let x = 0; x < width; x++) {
    // Top border
    queue[qTail++] = x;
    isBg[x] = 1;
    // Bottom border
    const bIdx = (height - 1) * width + x;
    queue[qTail++] = bIdx;
    isBg[bIdx] = 1;
  }
  for (let y = 0; y < height; y++) {
    // Left border
    const lIdx = y * width;
    if (!isBg[lIdx]) {
      queue[qTail++] = lIdx;
      isBg[lIdx] = 1;
    }
    // Right border
    const rIdx = y * width + (width - 1);
    if (!isBg[rIdx]) {
      queue[qTail++] = rIdx;
      isBg[rIdx] = 1;
    }
  }

  // Distance threshold for background
  const BG_THRESHOLD = 32;

  while (qHead < qTail) {
    const curr = queue[qHead++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);
    
    // Check 4 neighbors
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];
    
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!isBg[nIdx]) {
          const pIdx = nIdx * 4;
          const r = buffer[pIdx];
          const g = buffer[pIdx + 1];
          const b = buffer[pIdx + 2];
          
          const dist = colorDist(r, g, b, avgBg);
          if (dist < BG_THRESHOLD) {
            isBg[nIdx] = 1;
            queue[qTail++] = nIdx;
          }
        }
      }
    }
  }

  console.log(`Flood fill completed. Background pixels identified: ${qTail}`);

  // Create smooth alpha mask with anti-aliasing feather
  const alphaMask = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    if (isBg[i] === 1) {
      alphaMask[i] = 0.0;
    } else {
      alphaMask[i] = 1.0;
    }
  }

  // Feather edges slightly for ultra-smooth optical boundary (3x3 box blur on transition edges)
  const smoothedAlpha = new Float32Array(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (alphaMask[idx] === 1.0) {
        // Check if on border of background
        let hasBgNeighbor = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (alphaMask[(y + dy) * width + (x + dx)] === 0.0) {
              hasBgNeighbor = true;
              break;
            }
          }
          if (hasBgNeighbor) break;
        }
        
        if (hasBgNeighbor) {
          // Semi-transparent smooth edge
          let sum = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              sum += alphaMask[(y + dy) * width + (x + dx)];
            }
          }
          smoothedAlpha[idx] = sum / 9.0;
        } else {
          smoothedAlpha[idx] = 1.0;
        }
      } else {
        smoothedAlpha[idx] = 0.0;
      }
    }
  }

  // Apply alpha and despill edge fringing
  const outBuffer = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const pIdx = i * 4;
    const alpha = smoothedAlpha[i];
    
    let r = buffer[pIdx];
    let g = buffer[pIdx + 1];
    let b = buffer[pIdx + 2];

    // If semi-transparent edge, despill the background tint
    if (alpha > 0.01 && alpha < 0.99) {
      // Remove beige background contribution
      r = Math.min(255, Math.max(0, Math.round((r - avgBg[0] * (1 - alpha)) / alpha)));
      g = Math.min(255, Math.max(0, Math.round((g - avgBg[1] * (1 - alpha)) / alpha)));
      b = Math.min(255, Math.max(0, Math.round((b - avgBg[2] * (1 - alpha)) / alpha)));
    }

    outBuffer[pIdx] = r;
    outBuffer[pIdx + 1] = g;
    outBuffer[pIdx + 2] = b;
    outBuffer[pIdx + 3] = Math.round(alpha * 255);
  }

  fs.writeFileSync('clean_up.rgba', outBuffer);
  
  console.log('2. Converting raw RGBA to PNG with ImageMagick...');
  execSync('convert -size 1280x1600 -depth 8 clean_up.rgba -background none public/hero-mockup.png');
  execSync('convert -size 1280x1600 -depth 8 clean_up.rgba -background none public/hero-mockup-transparent.png');
  
  // Cleanup temp files
  try {
    fs.unlinkSync('raw_up.rgba');
    fs.unlinkSync('clean_up.rgba');
  } catch (e) {}

  console.log('3. Complete! hero-mockup.png is now high-resolution and perfectly clean.');
}

processMockup();
