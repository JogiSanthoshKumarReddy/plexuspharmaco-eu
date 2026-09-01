import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const videosDir = path.join(__dirname, '../public/assets/videos');
const imagesDir = path.join(__dirname, '../public/assets/images/videos');

if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate valid, playable WebM/MP4 structure or copy existing valid video streams
const videoFiles = [
  { name: 'plexus_corporate_overview.mp4', src: 'friday.mp4' },
  { name: 'plexus_manufacturing_tour.mp4', src: 'Big_Buck_Bunny_1080_10s_1MB.mp4' },
  { name: 'plexus_rd_laboratory.mp4', src: 'flower.mp4' },
  { name: 'plexus_quality_control.mp4', src: 'friday.mp4' },
  { name: 'plexus_global_logistics.mp4', src: 'Big_Buck_Bunny_1080_10s_1MB.mp4' },
  { name: 'plexus_sustainability_esg.mp4', src: 'flower.mp4' }
];

console.log('Structuring pharmaceutical video assets...');

videoFiles.forEach(item => {
  const destPath = path.join(videosDir, item.name);
  const srcPath = path.join(videosDir, item.src);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Configured video asset: ${item.name}`);
  }
});

// Copy poster thumbnails
const posters = [
  { name: 'poster_corporate.jpg', src: '../pharma_hero_corporate.png' },
  { name: 'poster_mfg.jpg', src: '../pharma_hero_mfg.png' },
  { name: 'poster_lab.jpg', src: '../pharma_hero_lab.png' },
  { name: 'poster_quality.jpg', src: '../pharma_quality_control.png' },
  { name: 'poster_logistics.jpg', src: '../pharma_hero_corporate.png' },
  { name: 'poster_esg.jpg', src: '../resources/finance.png' }
];

posters.forEach(p => {
  const destPath = path.join(imagesDir, p.name);
  const srcPath = path.join(imagesDir, p.src);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Configured poster thumbnail: ${p.name}`);
  }
});

console.log('Video Asset Engine initialization complete!');
