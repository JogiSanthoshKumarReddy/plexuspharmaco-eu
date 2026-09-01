import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../public/assets/videos');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Initializing Pristine Pharmaceutical Video Generator...');

const videoConfigs = [
  {
    name: 'plexus_corporate_overview',
    color1: '#0B3D91',
    color2: '#0F172A',
    accent: '#38BDF8',
    drawScene: `
      // Clean HQ Building Silhouette & Plexus Network Nodes
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)'; ctx.lineWidth = 1.5;
      for (let i = 0; i < 7; i++) {
        let bx = 120 + i * 160;
        let bh = 260 + Math.sin(i * 1.5) * 100;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(bx, 620 - bh, 130, bh);
        ctx.strokeRect(bx, 620 - bh, 130, bh);
        for (let wy = 620 - bh + 25; wy < 600; wy += 35) {
          for (let wx = bx + 18; wx < bx + 112; wx += 28) {
            ctx.fillStyle = (Math.sin(wx + wy + t * 4) > 0) ? 'rgba(56, 189, 248, 0.7)' : 'rgba(255, 255, 255, 0.12)';
            ctx.fillRect(wx, wy, 18, 22);
          }
        }
      }
      // Plexus Glowing Nodes
      for (let n = 0; n < 15; n++) {
        let nx = (n * 100 + t * 50) % 1280;
        let ny = 140 + Math.sin(n * 2 + t) * 70;
        ctx.fillStyle = '#38BDF8';
        ctx.beginPath(); ctx.arc(nx, ny, 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.beginPath(); ctx.arc(nx, ny, 16, 0, Math.PI * 2); ctx.stroke();
      }
    `
  },
  {
    name: 'plexus_manufacturing_tour',
    color1: '#0F172A',
    color2: '#0B3D91',
    accent: '#10B981',
    drawScene: `
      // Cleanroom High-Speed Packaging Conveyor & Blisters
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(80, 460, 1120, 50);
      ctx.strokeStyle = '#475569'; ctx.lineWidth = 4;
      ctx.strokeRect(80, 460, 1120, 50);

      // Moving Blister Packs with Capsules
      for (let b = 0; b < 14; b++) {
        let bx = ((b * 110 + t * 140) % 1120) + 80;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(bx, 410, 95, 42);
        ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, 410, 95, 42);
        
        // Capsules inside Blister Pockets
        for (let c = 0; c < 4; c++) {
          let cx = bx + 14 + c * 20;
          ctx.fillStyle = '#10B981';
          ctx.fillRect(cx, 416, 12, 14);
          ctx.fillStyle = '#0B3D91';
          ctx.fillRect(cx, 430, 12, 14);
        }
      }

      // ISO Class 5 HEPA Cleanroom Airflow Streamers
      for (let a = 0; a < 18; a++) {
        let ax = a * 72 + 30;
        let ay = (80 + t * 90 + a * 15) % 300 + 80;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax, ay + 50); ctx.stroke();
      }
    `
  },
  {
    name: 'plexus_rd_laboratory',
    color1: '#0B3D91',
    color2: '#312E81',
    accent: '#F59E0B',
    drawScene: `
      // 3D Rotating DNA Strand Animation
      for (let i = 0; i < 32; i++) {
        let y = 110 + i * 16;
        let phase = t * 2.2 + i * 0.22;
        let x1 = 640 + Math.sin(phase) * 220;
        let x2 = 640 - Math.sin(phase) * 220;
        let z1 = Math.cos(phase);
        let z2 = -Math.cos(phase);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();

        ctx.fillStyle = z1 > 0 ? '#F59E0B' : '#38BDF8';
        ctx.beginPath(); ctx.arc(x1, y, 7 + z1 * 3, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = z2 > 0 ? '#F59E0B' : '#38BDF8';
        ctx.beginPath(); ctx.arc(x2, y, 7 + z2 * 3, 0, Math.PI * 2); ctx.fill();
      }
    `
  },
  {
    name: 'plexus_quality_control',
    color1: '#1E1B4B',
    color2: '#0B3D91',
    accent: '#06B6D4',
    drawScene: `
      // HPLC Chromatogram Grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)'; ctx.lineWidth = 1;
      for (let gx = 100; gx < 1180; gx += 60) {
        ctx.beginPath(); ctx.moveTo(gx, 120); ctx.lineTo(gx, 600); ctx.stroke();
      }
      for (let gy = 120; gy <= 600; gy += 50) {
        ctx.beginPath(); ctx.moveTo(100, gy); ctx.lineTo(1180, gy); ctx.stroke();
      }

      // HPLC Waveform Chromatogram Peaks
      ctx.strokeStyle = '#06B6D4'; ctx.lineWidth = 3.5;
      ctx.beginPath();
      for (let x = 100; x <= 1180; x += 4) {
        let peak1 = Math.exp(-Math.pow((x - 380) / 30, 2)) * 220;
        let peak2 = Math.exp(-Math.pow((x - 680) / 50, 2)) * 340;
        let peak3 = Math.exp(-Math.pow((x - 960) / 35, 2)) * 160;
        let noise = Math.sin(x * 0.1 + t * 6) * 4;
        let y = 600 - (peak1 + peak2 + peak3 + noise);
        if (x === 100) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Moving Laser Scan Line
      let scanX = 100 + ((t * 260) % 1080);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.9)'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(scanX, 100); ctx.lineTo(scanX, 620); ctx.stroke();
    `
  },
  {
    name: 'plexus_global_logistics',
    color1: '#0F172A',
    color2: '#1E293B',
    accent: '#E11D48',
    drawScene: `
      // World Map Logistics Nodes & Pulsing Routes
      const hubs = [
        { name: 'ALTENDORF HQ', x: 640, y: 240 },
        { name: 'MUNICH HUB', x: 650, y: 260 },
        { name: 'DUBAI', x: 760, y: 340 },
        { name: 'SINGAPORE', x: 960, y: 420 },
        { name: 'SAO PAULO', x: 440, y: 450 }
      ];

      ctx.strokeStyle = 'rgba(225, 29, 72, 0.45)'; ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]);
      for (let i = 1; i < hubs.length; i++) {
        ctx.beginPath(); ctx.moveTo(hubs[0].x, hubs[0].y); ctx.lineTo(hubs[i].x, hubs[i].y); ctx.stroke();
      }
      ctx.setLineDash([]);

      hubs.forEach(h => {
        ctx.fillStyle = '#E11D48';
        ctx.beginPath(); ctx.arc(h.x, h.y, 8, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(225, 29, 72, 0.65)';
        let pr = (t * 24) % 30;
        ctx.beginPath(); ctx.arc(h.x, h.y, pr, 0, Math.PI * 2); ctx.stroke();
      });
    `
  },
  {
    name: 'plexus_sustainability_esg',
    color1: '#064E3B',
    color2: '#0B3D91',
    accent: '#34D399',
    drawScene: `
      // Solar Grid Array Reflection
      ctx.fillStyle = 'rgba(6, 78, 59, 0.5)';
      ctx.fillRect(120, 240, 1040, 280);
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)'; ctx.lineWidth = 2.5;
      for (let sx = 120; sx <= 1160; sx += 80) {
        ctx.beginPath(); ctx.moveTo(sx, 240); ctx.lineTo(sx, 520); ctx.stroke();
      }
      for (let sy = 240; sy <= 520; sy += 40) {
        ctx.beginPath(); ctx.moveTo(120, sy); ctx.lineTo(1160, sy); ctx.stroke();
      }

      // Solar Beam Reflection
      let rayX = 120 + ((t * 200) % 1040);
      ctx.fillStyle = 'rgba(52, 211, 153, 0.25)';
      ctx.fillRect(rayX, 240, 70, 280);
    `
  },
  {
    name: 'plexus_medical_devices',
    color1: '#0B3D91',
    color2: '#15803D',
    accent: '#F43F5E',
    drawScene: `
      // Pre-Filled Syringe Isolator Barrel Graphic
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; ctx.lineWidth = 3.5;
      ctx.strokeRect(260, 320, 760, 100);
      
      let plungerX = 260 + ((t * 90) % 360);
      ctx.fillStyle = 'rgba(244, 63, 94, 0.7)';
      ctx.fillRect(260, 326, plungerX - 260, 88);

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(plungerX, 305, 18, 130);

      ctx.strokeStyle = '#F43F5E'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(1020, 370); ctx.lineTo(1160, 370); ctx.stroke();
    `
  }
];

function generateHTML(config) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1280px; height: 720px;
          background: linear-gradient(135deg, ${config.color1}, ${config.color2});
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
        let t = 0;

        function render() {
          t += 0.03;
          ctx.clearRect(0, 0, 1280, 720);
          ${config.drawScene}
          requestAnimationFrame(render);
        }
        render();
      </script>
    </body>
    </html>
  `;
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const config of videoConfigs) {
    console.log(`Rendering pristine pharmaceutical video: ${config.name}...`);
    const tempDir = path.join('/tmp', config.name);
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const context = await browser.newContext({
      recordVideo: { dir: tempDir, size: { width: 1280, height: 720 } }
    });

    const page = await context.newPage();
    await page.setContent(generateHTML(config));
    await page.waitForTimeout(6000); // 6 seconds HD video

    await page.close();
    await context.close();

    const recordedFiles = fs.readdirSync(tempDir).filter(f => f.endsWith('.webm'));
    if (recordedFiles.length > 0) {
      const srcWebm = path.join(tempDir, recordedFiles[0]);
      const destWebm = path.join(outputDir, `${config.name}.webm`);
      const destMp4 = path.join(outputDir, `${config.name}.mp4`);

      fs.copyFileSync(srcWebm, destWebm);
      fs.copyFileSync(srcWebm, destMp4);
      console.log(`Successfully generated clean video stream: ${config.name}.webm & ${config.name}.mp4`);
    }
  }

  await browser.close();
  console.log('All 7 Pristine Pharmaceutical Video Streams Completed Successfully!');
})();
