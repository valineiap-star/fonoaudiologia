const fs = require('fs');
const { execSync } = require('child_process');

function analyze() {
  execSync('convert public/hero-mockup-raw.png raw.rgba');
  const buffer = fs.readFileSync('raw.rgba');
  const width = 640;
  const height = 800;

  // Let's print the colors of horizontal line at y = 400 across x = 0..639
  const row400 = [];
  for (let x = 0; x < width; x += 10) {
    const idx = (400 * width + x) * 4;
    row400.push(`x=${x}:[${buffer[idx]},${buffer[idx+1]},${buffer[idx+2]}]`);
  }
  console.log('Row 400 samples:\n', row400.join(' '));

  // Let's find the actual outer bounding contours
  // Background at corners:
  const bg = [buffer[0], buffer[1], buffer[2]];
  console.log('Corner 0,0 color:', bg);
}

analyze();
