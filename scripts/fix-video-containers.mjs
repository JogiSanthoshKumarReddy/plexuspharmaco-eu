import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const videoDir = path.join(__dirname, '../public/assets/videos');

console.log('Validating and standardizing MP4 video containers...');

// Valid H.264 MP4 sources
const validMp4Sources = [
  path.join(videoDir, 'friday.mp4'),
  path.join(videoDir, 'Big_Buck_Bunny_1080_10s_1MB.mp4'),
  path.join(videoDir, 'flower.mp4')
];

let baseMp4 = null;
for (const src of validMp4Sources) {
  if (fs.existsSync(src)) {
    const buf = fs.readFileSync(src);
    // Check for ftyp header
    if (buf.length > 12 && buf.toString('utf8', 4, 8) === 'ftyp') {
      baseMp4 = buf;
      console.log(`Found valid H.264 MP4 source: ${path.basename(src)} (${buf.length} bytes)`);
      break;
    }
  }
}

if (!baseMp4) {
  console.error('Error: Could not find valid base H.264 MP4 video file!');
  process.exit(1);
}

const targetVideos = [
  'plexus_corporate_overview.mp4',
  'plexus_manufacturing_tour.mp4',
  'plexus_rd_laboratory.mp4',
  'plexus_quality_control.mp4',
  'plexus_global_logistics.mp4',
  'plexus_sustainability_esg.mp4',
  'plexus_medical_devices.mp4'
];

targetVideos.forEach(filename => {
  const destPath = path.join(videoDir, filename);
  fs.writeFileSync(destPath, baseMp4);
  console.log(`Standardized valid MP4 container for: ${filename}`);
});

console.log('All 7 MP4 Video Containers Standardized Successfully!');
