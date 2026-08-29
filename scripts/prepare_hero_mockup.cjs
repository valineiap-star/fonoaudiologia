const { execSync } = require('child_process');
const fs = require('fs');

function prepare() {
  const source = 'src/assets/images/fono_bundle_mockup_1788025267480.jpg';
  
  console.log('Generating ultra-clean hero mockup...');
  
  // 1. Flood fill pure white from all 4 corners with smooth threshold so background is seamless pure white #FFFFFF
  execSync(`convert ${source} -fuzz 5% -fill white -draw "color 0,0 floodfill" -draw "color 1199,0 floodfill" -draw "color 0,895 floodfill" -draw "color 1199,895 floodfill" public/hero-mockup.png`);
  
  // 2. Also create a transparent version where outer white is made transparent without touching inner elements
  // We do BFS floodfill from boundaries only so interior screens and white cards remain 100% solid!
  execSync('convert public/hero-mockup.png raw.rgba');
  const buffer = fs.readFileSync('raw.rgba');
  const width = 1200;
  const height = 896;
  
  const isBg = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let qHead = 0;
  let qTail = 0;
  
  for (let x = 0; x < width; x++) {
    queue[qTail++] = x;
    isBg[x] = 1;
    const bIdx = (height - 1) * width + x;
    queue[qTail++] = bIdx;
    isBg[bIdx] = 1;
  }
  for (let y = 0; y < height; y++) {
    const lIdx = y * width;
    if (!isBg[lIdx]) {
      queue[qTail++] = lIdx;
      isBg[lIdx] = 1;
    }
    const rIdx = y * width + (width - 1);
    if (!isBg[rIdx]) {
      queue[qTail++] = rIdx;
      isBg[rIdx] = 1;
    }
  }

  while (qHead < qTail) {
    const curr = queue[qHead++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);
    
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
          
          // Pure white or near white background only
          if (r >= 250 && g >= 250 && b >= 250) {
            isBg[nIdx] = 1;
            queue[qTail++] = nIdx;
          }
        }
      }
    }
  }

  const outBuffer = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const pIdx = i * 4;
    outBuffer[pIdx] = buffer[pIdx];
    outBuffer[pIdx + 1] = buffer[pIdx + 1];
    outBuffer[pIdx + 2] = buffer[pIdx + 2];
    outBuffer[pIdx + 3] = isBg[i] === 1 ? 0 : 255;
  }

  fs.writeFileSync('clean.rgba', outBuffer);
  execSync('convert -size 1200x896 -depth 8 clean.rgba public/hero-mockup-cutout.png');
  
  try {
    fs.unlinkSync('raw.rgba');
    fs.unlinkSync('clean.rgba');
  } catch (e) {}

  console.log('Finished preparing hero-mockup.png and hero-mockup-cutout.png!');
}

prepare();
