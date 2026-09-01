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

console.log('Initializing Advanced Photorealistic Pharmaceutical Video Generator...');

const videoConfigs = [
  {
    name: 'plexus_corporate_overview',
    title: 'PLEXUSPHARMACO GmbH',
    subtitle: 'European Headquarters & Global Scientific Leadership',
    badge: 'CORPORATE OVERVIEW',
    color1: '#0B3D91',
    color2: '#0F172A',
    accent: '#38BDF8',
    stats: [
      { label: 'HEADQUARTERS', val: 'ALTENDORF, GERMANY' },
      { label: 'GLOBAL FOOTPRINT', val: '50+ COUNTRIES' },
      { label: 'ANNUAL CAPACITY', val: '5 BILLION+ DOSES' }
    ],
    drawScene: `
      // Draw HQ Building Silhouette & Plexus Nodes
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)'; ctx.lineWidth = 1.5;
      for (let i = 0; i < 6; i++) {
        let bx = 180 + i * 160;
        let bh = 220 + Math.sin(i * 1.5) * 80;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
        ctx.fillRect(bx, 540 - bh, 120, bh);
        ctx.strokeRect(bx, 540 - bh, 120, bh);
        for (let wy = 540 - bh + 20; wy < 520; wy += 30) {
          for (let wx = bx + 15; wx < bx + 105; wx += 25) {
            ctx.fillStyle = (Math.sin(wx + wy + t * 3) > 0) ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(wx, wy, 15, 18);
          }
        }
      }
      // Plexus Network Nodes
      for (let n = 0; n < 12; n++) {
        let nx = (n * 110 + t * 40) % 1280;
        let ny = 160 + Math.sin(n * 2 + t) * 60;
        ctx.fillStyle = '#38BDF8';
        ctx.beginPath(); ctx.arc(nx, ny, 6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.beginPath(); ctx.arc(nx, ny, 14, 0, Math.PI * 2); ctx.stroke();
      }
    `
  },
  {
    name: 'plexus_manufacturing_tour',
    title: 'HIGH-SPEED MANUFACTURING',
    subtitle: 'ISO Class 5 Cleanroom Packaging & Blister Lines',
    badge: 'EU-GMP FACILITY TOUR',
    color1: '#0F172A',
    color2: '#0B3D91',
    accent: '#10B981',
    stats: [
      { label: 'BLISTER PACKAGING', val: '4,500 DOSES / MIN' },
      { label: 'AIR FILTRATION', val: 'HEPA ISO CLASS 5' },
      { label: 'COMPLIANCE', val: 'EU-GMP / WHO-GMP' }
    ],
    drawScene: `
      // Animated Conveyor Belt & Capsule Blisters
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(100, 380, 1080, 40); // Conveyor Belt
      ctx.strokeStyle = '#475569'; ctx.lineWidth = 4;
      ctx.strokeRect(100, 380, 1080, 40);

      // Moving Blister Packs with Capsules
      for (let b = 0; b < 12; b++) {
        let bx = ((b * 120 + t * 120) % 1100) + 100;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(bx, 340, 90, 35);
        ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 1;
        ctx.strokeRect(bx, 340, 90, 35);
        
        // Capsules inside Blister
        for (let c = 0; c < 4; c++) {
          let cx = bx + 12 + c * 20;
          ctx.fillStyle = '#10B981';
          ctx.fillRect(cx, 346, 12, 10);
          ctx.fillStyle = '#0B3D91';
          ctx.fillRect(cx, 356, 12, 10);
        }
      }

      // Cleanroom HEPA Airflow Streamers
      for (let a = 0; a < 15; a++) {
        let ax = a * 85 + 40;
        let ay = (120 + t * 80 + a * 20) % 240 + 100;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax, ay + 40); ctx.stroke();
      }
    `
  },
  {
    name: 'plexus_rd_laboratory',
    title: 'RESEARCH & FORMULATION SCIENCE',
    subtitle: '3D Rotating DNA Helix & Bioequivalence Spectroscopy',
    badge: 'R&D FORMULATION LAB',
    color1: '#0B3D91',
    color2: '#312E81',
    accent: '#F59E0B',
    stats: [
      { label: 'ACTIVE PIPELINE', val: '28 FDF FORMULATIONS' },
      { label: 'STABILITY PROFILE', val: '99.8% VALIDATED' },
      { label: 'SPECTROCOPY', val: 'MASS SPECTROMETRY' }
    ],
    drawScene: `
      // 3D Rotating DNA Strand Animation
      for (let i = 0; i < 28; i++) {
        let y = 140 + i * 14;
        let phase = t * 2 + i * 0.22;
        let x1 = 640 + Math.sin(phase) * 180;
        let x2 = 640 - Math.sin(phase) * 180;
        let z1 = Math.cos(phase);
        let z2 = -Math.cos(phase);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();

        ctx.fillStyle = z1 > 0 ? '#F59E0B' : '#38BDF8';
        ctx.beginPath(); ctx.arc(x1, y, 6 + z1 * 2, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = z2 > 0 ? '#F59E0B' : '#38BDF8';
        ctx.beginPath(); ctx.arc(x2, y, 6 + z2 * 2, 0, Math.PI * 2); ctx.fill();
      }
      
      // Formula Text Box
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
      ctx.fillRect(100, 220, 260, 80);
      ctx.strokeStyle = '#F59E0B'; ctx.lineWidth = 1;
      ctx.strokeRect(100, 220, 260, 80);
      ctx.fillStyle = '#F59E0B'; ctx.font = 'bold 16px monospace';
      ctx.fillText('MOLECULAR FORMULA', 115, 248);
      ctx.fillStyle = '#FFFFFF'; ctx.font = '14px monospace';
      ctx.fillText('C16 H19 N3 O5 S', 115, 275);
    `
  },
  {
    name: 'plexus_quality_control',
    title: 'QUALITY CONTROL & TESTING',
    subtitle: 'HPLC Peak Area Integration & Qualified Person Release',
    badge: 'QUALITY ASSURANCE (QMS)',
    color1: '#1E1B4B',
    color2: '#0B3D91',
    accent: '#06B6D4',
    stats: [
      { label: 'ANALYTICAL QC', val: 'HPLC / GC / LC-MS' },
      { label: 'PURITY ASSAY', val: '99.94% CERTIFIED' },
      { label: 'QP RELEASE', val: 'BATCH APPROVED' }
    ],
    drawScene: `
      // HPLC Chromatogram Graph Background Grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)'; ctx.lineWidth = 1;
      for (let gx = 150; gx < 1130; gx += 50) {
        ctx.beginPath(); ctx.moveTo(gx, 160); ctx.lineTo(gx, 440); ctx.stroke();
      }
      for (let gy = 160; gy <= 440; gy += 40) {
        ctx.beginPath(); ctx.moveTo(150, gy); ctx.lineTo(1130, gy); ctx.stroke();
      }

      // HPLC Waveform Peaks
      ctx.strokeStyle = '#06B6D4'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 150; x <= 1130; x += 4) {
        let peak1 = Math.exp(-Math.pow((x - 420) / 25, 2)) * 160;
        let peak2 = Math.exp(-Math.pow((x - 680) / 45, 2)) * 240;
        let peak3 = Math.exp(-Math.pow((x - 900) / 30, 2)) * 110;
        let noise = Math.sin(x * 0.1 + t * 5) * 3;
        let y = 440 - (peak1 + peak2 + peak3 + noise);
        if (x === 150) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Moving Laser Scan Line
      let scanX = 150 + ((t * 220) % 980);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(scanX, 150); ctx.lineTo(scanX, 450); ctx.stroke();
    `
  },
  {
    name: 'plexus_global_logistics',
    title: 'GDP COLD-CHAIN LOGISTICS',
    subtitle: 'Real-Time Temperature Sensor & GPS Route Tracking',
    badge: 'LOGISTICS & SUPPLY CHAIN',
    color1: '#0F172A',
    color2: '#1E293B',
    accent: '#E11D48',
    stats: [
      { label: 'COLD CHAIN REGIME', val: '+2°C TO +8°C CONTROLLED' },
      { label: 'GPS TELEMETRY', val: 'ACTIVE SENSOR OK' },
      { label: 'LOGISTICS NETWORK', val: 'EU / ASIA / MEA' }
    ],
    drawScene: `
      // World Map Nodes & Pulsing Routes
      const hubs = [
        { name: 'ALTENDORF HQ', x: 620, y: 220 },
        { name: 'MUNICH HUB', x: 630, y: 240 },
        { name: 'DUBAI', x: 740, y: 310 },
        { name: 'SINGAPORE', x: 920, y: 380 },
        { name: 'SAO PAULO', x: 420, y: 410 }
      ];

      // Draw Connections
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.4)'; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
      for (let i = 1; i < hubs.length; i++) {
        ctx.beginPath();
        ctx.moveTo(hubs[0].x, hubs[0].y);
        ctx.lineTo(hubs[i].x, hubs[i].y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Hub Pulses
      hubs.forEach(h => {
        ctx.fillStyle = '#E11D48';
        ctx.beginPath(); ctx.arc(h.x, h.y, 6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(225, 29, 72, 0.6)';
        let pr = (t * 20) % 25;
        ctx.beginPath(); ctx.arc(h.x, h.y, pr, 0, Math.PI * 2); ctx.stroke();
      });

      // Temperature Sensor Telemetry Widget
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(80, 180, 240, 90);
      ctx.strokeStyle = '#E11D48'; ctx.lineWidth = 1;
      ctx.strokeRect(80, 180, 240, 90);
      ctx.fillStyle = '#E11D48'; ctx.font = 'bold 12px monospace';
      ctx.fillText('COLD-CHAIN SENSOR', 95, 205);
      ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 26px monospace';
      ctx.fillText('+4.2°C', 95, 242);
      ctx.fillStyle = '#10B981'; ctx.font = '11px monospace';
      ctx.fillText('TARGET (+2°C to +8°C)', 95, 260);
    `
  },
  {
    name: 'plexus_sustainability_esg',
    title: 'SUSTAINABILITY & ESG',
    subtitle: 'Zero-Liquid Discharge & Solar Energy Grid Monitors',
    badge: 'ESG & CSR COMMITMENT',
    color1: '#064E3B',
    color2: '#0B3D91',
    accent: '#34D399',
    stats: [
      { label: 'WATER RECYCLING', val: '100% ZLD CERTIFIED' },
      { label: 'SOLAR POWER GRID', val: '2.5 MW RENEWABLE' },
      { label: 'CARBON OFFSET', val: '12,500 TONS CO2 / YR' }
    ],
    drawScene: `
      // Solar Panel Reflection Grid
      ctx.fillStyle = 'rgba(6, 78, 59, 0.4)';
      ctx.fillRect(150, 260, 980, 180);
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.3)'; ctx.lineWidth = 2;
      for (let sx = 150; sx <= 1130; sx += 70) {
        ctx.beginPath(); ctx.moveTo(sx, 260); ctx.lineTo(sx, 440); ctx.stroke();
      }
      for (let sy = 260; sy <= 440; sy += 30) {
        ctx.beginPath(); ctx.moveTo(150, sy); ctx.lineTo(1130, sy); ctx.stroke();
      }

      // Solar Reflection Ray
      let rayX = 150 + ((t * 180) % 980);
      ctx.fillStyle = 'rgba(52, 211, 153, 0.2)';
      ctx.fillRect(rayX, 260, 60, 180);

      // Water Purification Cycle Wave
      ctx.strokeStyle = '#34D399'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let wx = 150; wx <= 1130; wx += 10) {
        let wy = 400 + Math.sin(wx * 0.03 + t * 4) * 15;
        if (wx === 150) ctx.moveTo(wx, wy); else ctx.lineTo(wx, wy);
      }
      ctx.stroke();
    `
  },
  {
    name: 'plexus_medical_devices',
    title: 'MEDICAL DEVICES & PLATFORMS',
    subtitle: 'Pre-Filled Syringes & ISO 13485 Compliance Validation',
    badge: 'MEDICAL DEVICE DIVISION',
    color1: '#0B3D91',
    color2: '#15803D',
    accent: '#F43F5E',
    stats: [
      { label: 'DEVICE CATEGORY', val: 'PRE-FILLED SYRINGES & PATCHES' },
      { label: 'STERILIZATION', val: 'ISO 13485 CERTIFIED' },
      { label: 'MARKET APPROVAL', val: 'CE MARK / EU MDR' }
    ],
    drawScene: `
      // Syringe Isolator Barrel Graphic
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; ctx.lineWidth = 3;
      ctx.strokeRect(300, 300, 680, 80);
      
      // Plunger Motion
      let plungerX = 300 + ((t * 80) % 300);
      ctx.fillStyle = 'rgba(244, 63, 94, 0.6)';
      ctx.fillRect(300, 305, plungerX - 300, 70);

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(plungerX, 290, 15, 100);

      // Needle Tip Ray
      ctx.strokeStyle = '#F43F5E'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(980, 340); ctx.lineTo(1100, 340); ctx.stroke();
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
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: white; overflow: hidden; position: relative;
        }
        canvas { position: absolute; inset: 0; z-index: 1; }
        .overlay {
          position: absolute; inset: 0; z-index: 2;
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.65) 100%);
          display: flex; flex-direction: column; justify-content: space-between; padding: 48px;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 999px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.3);
          font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: ${config.accent}; backdrop-filter: blur(10px); width: fit-content;
        }
        .title {
          font-size: 48px; font-weight: 900; letter-spacing: -1px; margin-top: 16px;
          background: linear-gradient(to right, #ffffff, ${config.accent});
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .subtitle { font-size: 20px; font-weight: 300; color: rgba(255,255,255,0.85); margin-top: 8px; }
        .stats-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          margin-top: auto; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.2);
          padding: 24px; border-radius: 20px; backdrop-filter: blur(14px);
        }
        .stat-card { display: flex; flex-direction: column; gap: 4px; }
        .stat-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.55); letter-spacing: 1.5px; text-transform: uppercase; }
        .stat-val { font-size: 20px; font-weight: 800; color: white; font-family: monospace; }
        .footer-tag {
          font-size: 11px; font-family: monospace; color: rgba(255,255,255,0.45); text-align: right;
          letter-spacing: 1px; margin-top: 12px;
        }
      </style>
    </head>
    <body>
      <canvas id="stage" width="1280" height="720"></canvas>
      <div class="overlay">
        <div>
          <div class="badge">${config.badge}</div>
          <div class="title">${config.title}</div>
          <div class="subtitle">${config.subtitle}</div>
        </div>
        <div>
          <div class="stats-grid">
            ${config.stats.map(s => `
              <div class="stat-card">
                <div class="stat-label">${s.label}</div>
                <div class="stat-val">${s.val}</div>
              </div>
            `).join('')}
          </div>
          <div class="footer-tag">© 2026 PLEXUSPHARMACO GmbH • OFFICIAL SCIENTIFIC MEDIA STREAM</div>
        </div>
      </div>

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
    console.log(`Rendering photorealistic pharmaceutical video: ${config.name}...`);
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
      console.log(`Successfully generated: ${config.name}.webm & ${config.name}.mp4`);
    }
  }

  await browser.close();
  console.log('All 7 Photorealistic Pharmaceutical Video Streams Completed Successfully!');
})();
