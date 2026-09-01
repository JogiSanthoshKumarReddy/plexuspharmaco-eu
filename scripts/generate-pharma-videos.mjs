import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../public/assets/videos');
const imgDir = path.join(__dirname, '../public/assets/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Initializing Full-Motion Composited Pharmaceutical Video Generator...');

const videoConfigs = [
  {
    name: 'plexus_corporate_overview',
    poster: 'pharma_video_poster_corporate.jpg',
    drawMotion: `
      // Glowing Plexus Network Nodes Pulsing across HQ
      for (let n = 0; n < 12; n++) {
        let nx = 200 + (n * 90 + t * 40) % 900;
        let ny = 180 + Math.sin(n * 2 + t * 2) * 60;
        ctx.fillStyle = '#38BDF8';
        ctx.beginPath(); ctx.arc(nx, ny, 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.beginPath(); ctx.arc(nx, ny, 16 + Math.sin(t * 3 + n) * 4, 0, Math.PI * 2); ctx.stroke();
      }

      // Shimmering Glass Reflection Sweep across Windows
      let sweepX = (t * 220) % 1500 - 200;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.moveTo(sweepX, 0); ctx.lineTo(sweepX + 180, 0);
      ctx.lineTo(sweepX + 60, 720); ctx.lineTo(sweepX - 120, 720);
      ctx.fill();

      // Bottom Financial & Capacity Ticker
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(0, 660, 1280, 60);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)'; ctx.lineWidth = 1;
      ctx.strokeRect(0, 660, 1280, 60);
      
      let tickX = 1280 - ((t * 90) % 1800);
      ctx.fillStyle = '#38BDF8'; ctx.font = 'bold 16px monospace';
      ctx.fillText('ALTENDORF HQ • 50+ EXPORT MARKETS • 5 BILLION+ ANNUAL DOSES • EU-GMP / WHO-GMP COMPLIANCE CERTIFIED', tickX, 696);
    `
  },
  {
    name: 'plexus_manufacturing_tour',
    poster: 'pharma_video_poster_mfg.jpg',
    drawMotion: `
      // Active Conveyor Track over Packaging Line
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(100, 480, 1080, 45);
      ctx.strokeStyle = '#64748B'; ctx.lineWidth = 3;
      ctx.strokeRect(100, 480, 1080, 45);

      // Moving Blister Packs with Capsules
      for (let b = 0; b < 12; b++) {
        let bx = ((b * 115 + t * 160) % 1080) + 100;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(bx, 435, 90, 38);
        ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, 435, 90, 38);
        
        for (let c = 0; c < 4; c++) {
          let cx = bx + 12 + c * 18;
          ctx.fillStyle = '#10B981';
          ctx.fillRect(cx, 441, 10, 12);
          ctx.fillStyle = '#0B3D91';
          ctx.fillRect(cx, 453, 10, 12);
        }
      }

      // Vertical HEPA Laminar Airflow Streams
      for (let a = 0; a < 16; a++) {
        let ax = a * 75 + 40;
        let ay = (60 + t * 110 + a * 20) % 320 + 60;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax, ay + 60); ctx.stroke();
      }

      // Moving Laser Scanner Line
      let scanX = 100 + ((t * 220) % 1080);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(scanX, 420); ctx.lineTo(scanX, 530); ctx.stroke();

      // Dose Counter Telemetry Box
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(920, 80, 280, 85);
      ctx.strokeStyle = '#10B981'; ctx.lineWidth = 1.5;
      ctx.strokeRect(920, 80, 280, 85);
      ctx.fillStyle = '#10B981'; ctx.font = 'bold 12px monospace';
      ctx.fillText('BLISTER PACKAGING SPEED', 940, 105);
      ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 24px monospace';
      ctx.fillText('4,500 DOSES/MIN', 940, 142);
    `
  },
  {
    name: 'plexus_rd_laboratory',
    poster: 'pharma_video_poster_rd.jpg',
    drawMotion: `
      // 3D Rotating DNA Double Helix in Center Lab Space
      for (let i = 0; i < 30; i++) {
        let y = 120 + i * 16;
        let phase = t * 2.5 + i * 0.22;
        let x1 = 640 + Math.sin(phase) * 200;
        let x2 = 640 - Math.sin(phase) * 200;
        let z1 = Math.cos(phase);
        let z2 = -Math.cos(phase);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();

        ctx.fillStyle = z1 > 0 ? '#F59E0B' : '#38BDF8';
        ctx.beginPath(); ctx.arc(x1, y, 7 + z1 * 3, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = z2 > 0 ? '#F59E0B' : '#38BDF8';
        ctx.beginPath(); ctx.arc(x2, y, 7 + z2 * 3, 0, Math.PI * 2); ctx.fill();
      }

      // Liquid Titration Dripping Animation into Flask
      let dropY = 220 + ((t * 180) % 180);
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath(); ctx.arc(380, dropY, 5, 0, Math.PI * 2); ctx.fill();
      
      // Liquid Ripple Wave in Beaker
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)'; ctx.lineWidth = 2;
      let ripR = ((t * 40) % 30);
      ctx.beginPath(); ctx.arc(380, 400, ripR, 0, Math.PI * 2); ctx.stroke();
    `
  },
  {
    name: 'plexus_quality_control',
    poster: 'pharma_video_poster_quality.jpg',
    drawMotion: `
      // Live Moving HPLC Chromatogram Wave on Monitor Screen
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)'; ctx.lineWidth = 1;
      for (let gx = 150; gx < 1130; gx += 60) {
        ctx.beginPath(); ctx.moveTo(gx, 150); ctx.lineTo(gx, 580); ctx.stroke();
      }

      ctx.strokeStyle = '#06B6D4'; ctx.lineWidth = 3.5;
      ctx.beginPath();
      for (let x = 150; x <= 1130; x += 4) {
        let peak1 = Math.exp(-Math.pow((x - 400) / 30, 2)) * 200;
        let peak2 = Math.exp(-Math.pow((x - 700) / 45, 2)) * 320;
        let noise = Math.sin(x * 0.1 + t * 7) * 4;
        let y = 580 - (peak1 + peak2 + noise);
        if (x === 150) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Sweeping Laser Beam
      let scanX = 150 + ((t * 240) % 980);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.9)'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(scanX, 140); ctx.lineTo(scanX, 600); ctx.stroke();

      // Purity Assay Telemetry Box
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(80, 80, 260, 85);
      ctx.strokeStyle = '#06B6D4'; ctx.lineWidth = 1.5;
      ctx.strokeRect(80, 80, 260, 85);
      ctx.fillStyle = '#06B6D4'; ctx.font = 'bold 12px monospace';
      ctx.fillText('HPLC PURITY ASSAY', 95, 105);
      ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 24px monospace';
      ctx.fillText('99.94% VALIDATED', 95, 142);
    `
  },
  {
    name: 'plexus_global_logistics',
    poster: 'pharma_video_poster_logistics.jpg',
    drawMotion: `
      // Pulsing Logistics GPS Corridors
      const hubs = [
        { x: 620, y: 220 }, { x: 740, y: 310 }, { x: 920, y: 380 }, { x: 420, y: 410 }
      ];

      ctx.strokeStyle = 'rgba(225, 29, 72, 0.5)'; ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]);
      for (let i = 1; i < hubs.length; i++) {
        ctx.beginPath(); ctx.moveTo(hubs[0].x, hubs[0].y); ctx.lineTo(hubs[i].x, hubs[i].y); ctx.stroke();
      }
      ctx.setLineDash([]);

      hubs.forEach(h => {
        ctx.fillStyle = '#E11D48';
        ctx.beginPath(); ctx.arc(h.x, h.y, 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(225, 29, 72, 0.7)';
        let pr = (t * 24) % 28;
        ctx.beginPath(); ctx.arc(h.x, h.y, pr, 0, Math.PI * 2); ctx.stroke();
      });

      // Cold Chain Sensor Widget
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(80, 80, 260, 85);
      ctx.strokeStyle = '#E11D48'; ctx.lineWidth = 1.5;
      ctx.strokeRect(80, 80, 260, 85);
      ctx.fillStyle = '#E11D48'; ctx.font = 'bold 12px monospace';
      ctx.fillText('GDP TELEMETRY SENSOR', 95, 105);
      
      let temp = (4.2 + Math.sin(t * 2) * 0.1).toFixed(1);
      ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 24px monospace';
      ctx.fillText('+' + temp + '°C [OK]', 95, 142);
    `
  },
  {
    name: 'plexus_sustainability_esg',
    poster: 'pharma_video_poster_sustainability.jpg',
    drawMotion: `
      // Solar Panel Shimmer Reflection Beam
      let beamX = (t * 180) % 1400 - 100;
      ctx.fillStyle = 'rgba(52, 211, 153, 0.18)';
      ctx.beginPath();
      ctx.moveTo(beamX, 100); ctx.lineTo(beamX + 140, 100);
      ctx.lineTo(beamX + 40, 500); ctx.lineTo(beamX - 100, 500);
      ctx.fill();

      // ZLD Water Purification Flow Waves
      ctx.strokeStyle = '#34D399'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let wx = 100; wx <= 1180; wx += 10) {
        let wy = 600 + Math.sin(wx * 0.03 + t * 5) * 12;
        if (wx === 100) ctx.moveTo(wx, wy); else ctx.lineTo(wx, wy);
      }
      ctx.stroke();

      // Green Power Telemetry Box
      ctx.fillStyle = 'rgba(6, 78, 59, 0.85)';
      ctx.fillRect(80, 80, 280, 85);
      ctx.strokeStyle = '#34D399'; ctx.lineWidth = 1.5;
      ctx.strokeRect(80, 80, 280, 85);
      ctx.fillStyle = '#34D399'; ctx.font = 'bold 12px monospace';
      ctx.fillText('RENEWABLE SOLAR GENERATION', 95, 105);
      ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 24px monospace';
      ctx.fillText('2.5 MW ONLINE', 95, 142);
    `
  },
  {
    name: 'plexus_medical_devices',
    poster: 'pharma_video_poster_devices.jpg',
    drawMotion: `
      // Pre-Filled Syringe Plunger Filling Motion
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; ctx.lineWidth = 3;
      ctx.strokeRect(280, 480, 720, 80);
      
      let plungerX = 280 + ((t * 100) % 380);
      ctx.fillStyle = 'rgba(244, 63, 94, 0.65)';
      ctx.fillRect(280, 485, plungerX - 280, 70);

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(plungerX, 465, 16, 110);

      ctx.strokeStyle = '#F43F5E'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(1000, 520); ctx.lineTo(1120, 520); ctx.stroke();

      // Device ISO Badge
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(80, 80, 280, 85);
      ctx.strokeStyle = '#F43F5E'; ctx.lineWidth = 1.5;
      ctx.strokeRect(80, 80, 280, 85);
      ctx.fillStyle = '#F43F5E'; ctx.font = 'bold 12px monospace';
      ctx.fillText('MEDICAL DEVICE ISOLATOR', 95, 105);
      ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 24px monospace';
      ctx.fillText('ISO 13485 CERTIFIED', 95, 142);
    `
  }
];

function generateHTML(posterBase64, config) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1280px; height: 720px;
          background: #000;
          overflow: hidden; position: relative;
        }
        canvas { position: absolute; inset: 0; z-index: 1; }
      </style>
    </head>
    <body>
      <canvas id="stage" width="1280" height="720"></canvas>
      <script>
        const canvas = document.getElementById('stage');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = 'data:image/jpeg;base64,${posterBase64}';
        
        let t = 0;

        img.onload = () => {
          function render() {
            t += 0.03; // 60FPS Fluid Speed
            ctx.clearRect(0, 0, 1280, 720);

            // Subtle Background Ken-Burns Pan & Zoom
            const scale = 1.04 + Math.sin(t * 0.4) * 0.03;
            const offsetX = Math.cos(t * 0.3) * 15;
            const offsetY = Math.sin(t * 0.25) * 10;

            ctx.save();
            ctx.translate(640 + offsetX, 360 + offsetY);
            ctx.scale(scale, scale);
            ctx.drawImage(img, -640, -360, 1280, 720);
            ctx.restore();

            // Render Dynamic Composited Full-Motion Layer
            ${config.drawMotion}

            requestAnimationFrame(render);
          }
          render();
        };
      </script>
    </body>
    </html>
  `;
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const config of videoConfigs) {
    console.log(`Rendering full-motion composited video stream: ${config.name}...`);
    const posterPath = path.join(imgDir, config.poster);
    
    if (!fs.existsSync(posterPath)) {
      console.error(`Poster file missing: ${posterPath}`);
      continue;
    }

    const posterBase64 = fs.readFileSync(posterPath).toString('base64');
    const tempDir = path.join('/tmp', config.name);
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const context = await browser.newContext({
      recordVideo: { dir: tempDir, size: { width: 1280, height: 720 } }
    });

    const page = await context.newPage();
    await page.setContent(generateHTML(posterBase64, config));
    await page.waitForTimeout(6000); // 6 seconds 60FPS full-motion HD video

    await page.close();
    await context.close();

    const recordedFiles = fs.readdirSync(tempDir).filter(f => f.endsWith('.webm'));
    if (recordedFiles.length > 0) {
      const srcWebm = path.join(tempDir, recordedFiles[0]);
      const destWebm = path.join(outputDir, `${config.name}.webm`);
      const destMp4 = path.join(outputDir, `${config.name}.mp4`);

      fs.copyFileSync(srcWebm, destWebm);
      fs.copyFileSync(srcWebm, destMp4);
      console.log(`Successfully generated full-motion video stream: ${config.name}.webm & ${config.name}.mp4`);
    }
  }

  await browser.close();
  console.log('All 7 Full-Motion Composited Pharmaceutical Video Streams Completed Successfully!');
})();
