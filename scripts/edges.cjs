const fs = require('fs');
const { execSync } = require('child_process');

function findEdges() {
  execSync('convert public/hero-mockup-raw.png -canny 0x1+10%+30% edges.png');
  execSync('convert edges.png -resize 64x80 txt: > edges.txt');
  console.log('Edge detection generated.');
}

findEdges();
