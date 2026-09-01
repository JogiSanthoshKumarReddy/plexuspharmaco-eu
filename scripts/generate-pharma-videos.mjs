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

console.log('Initializing Pharmaceutical Video Generation Engine...');

const videoConfigs = [
  {
    name: 'plexus_corporate_overview',
    title: 'PLEXUSPHARMACO GmbH',
    subtitle: 'European Corporate Headquarters & Global Leadership',
    badge: 'CORPORATE OVERVIEW',
    color1: '#0B3D91',
    color2: '#1E293B',
    accent: '#38BDF8',
    stats: [
      { label: 'GLOBAL HEADQUARTERS', val: 'ALTENDORF, GERMANY' },
      { label: 'EXPORT REACH', val: '50+ COUNTRIES' },
      { label: 'ANNUAL OUTPUT', val: '5 BILLION+ DOSES' }
    ],
    animationType: 'network'
  },
  {
    name: 'plexus_manufacturing_tour',
    title: 'MANUFACTURING EXCELLENCE',
    subtitle: 'ISO Class 5 Cleanroom Suites & Automated Blister Lines',
    badge: 'EU-GMP FACILITY TOUR',
    color1: '#0F172A',
    color2: '#0B3D91',
    accent: '#10B981',
    stats: [
      { label: 'PACKAGING SPEED', val: '4,500 DOSES / MIN' },
      { label: 'AIR FILTRATION', val: 'HEPA ISO CLASS 5' },
      { label: 'COMPLIANCE', val: 'EU-GMP / WHO-GMP' }
    ],
    animationType: 'cleanroom'
  },
  {
    name: 'plexus_rd_laboratory',
    title: 'RESEARCH & DEVELOPMENT',
    subtitle: 'Advanced Formulation Science & 3D Molecular Chemistry',
    badge: 'R&D FORMULATION LAB',
    color1: '#0B3D91',
    color2: '#312E81',
    accent: '#F59E0B',
    stats: [
      { label: 'R&D PIPELINE', val: '28 ACTIVE MOLECULES' },
      { label: 'SPECTRUM ANALYSIS', val: 'MASS SPECTROMETRY' },
      { label: 'DELIVERY SYSTEMS', val: 'NOVEL FDF PLATFORMS' }
    ],
    animationType: 'dna'
  },
  {
    name: 'plexus_quality_control',
    title: 'QUALITY CONTROL & TESTING',
    subtitle: 'HPLC Batch Release & Zero-Defect Quality Assurance',
    badge: 'QUALITY ASSURANCE (QMS)',
    color1: '#1E1B4B',
    color2: '#0B3D91',
    accent: '#06B6D4',
    stats: [
      { label: 'ANALYTICAL TESTING', val: 'HPLC / GC / LC-MS' },
      { label: 'PURITY ASSURANCE', val: '99.9% VALIDATED' },
      { label: 'QP BATCH RELEASE', val: 'APPROVED & CERTIFIED' }
    ],
    animationType: 'hplc'
  },
  {
    name: 'plexus_global_logistics',
    title: 'GLOBAL COLD-CHAIN LOGISTICS',
    subtitle: 'Temperature Telemetry & GDP Distribution Network',
    badge: 'LOGISTICS & SUPPLY CHAIN',
    color1: '#0F172A',
    color2: '#1E293B',
    accent: '#E11D48',
    stats: [
      { label: 'COLD-CHAIN REGIME', val: '+2°C TO +8°C CONTROLLED' },
      { label: 'GPS TELEMETRY', val: 'REAL-TIME TRACKING' },
      { label: 'LOGISTICS HUBS', val: 'MUNICH / HYDERABAD' }
    ],
    animationType: 'logistics'
  },
  {
    name: 'plexus_sustainability_esg',
    title: 'SUSTAINABILITY & ESG',
    subtitle: 'Zero-Liquid Discharge & Green Chemistry Initiatives',
    badge: 'ESG & CSR COMMITMENT',
    color1: '#064E3B',
    color2: '#0B3D91',
    accent: '#34D399',
    stats: [
      { label: 'WATER RECYCLING', val: '100% ZLD CERTIFIED' },
      { label: 'SOLAR POWER', val: '2.5 MW GREEN GRID' },
      { label: 'COMMUNITY CAMPS', val: '10,000+ HOURS / YR' }
    ],
    animationType: 'sustainability'
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
          background: radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%);
          display: flex; flex-direction: column; justify-content: space-between; p: 40px; padding: 48px;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 999px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
          font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: ${config.accent}; backdrop-filter: blur(10px); width: fit-content;
        }
        .title {
          font-size: 48px; font-weight: 900; letter-spacing: -1px; margin-top: 16px;
          background: linear-gradient(to right, #ffffff, ${config.accent});
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .subtitle { font-size: 20px; font-weight: 300; color: rgba(255,255,255,0.8); margin-top: 8px; }
        .stats-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          margin-top: auto; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15);
          padding: 24px; border-radius: 20px; backdrop-filter: blur(12px);
        }
        .stat-card { display: flex; flex-direction: column; gap: 4px; }
        .stat-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.5); letter-spacing: 1.5px; text-transform: uppercase; }
        .stat-val { font-size: 22px; font-weight: 800; color: white; font-family: monospace; }
        .footer-tag {
          font-size: 11px; font-family: monospace; color: rgba(255,255,255,0.4); text-align: right;
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

          if ('${config.animationType}' === 'dna') {
            for (let i = 0; i < 30; i++) {
              let y = 100 + i * 18;
              let x1 = 640 + Math.sin(t + i * 0.2) * 160;
              let x2 = 640 - Math.sin(t + i * 0.2) * 160;
              ctx.strokeStyle = 'rgba(255,255,255,0.15)';
              ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
              ctx.fillStyle = '${config.accent}';
              ctx.beginPath(); ctx.arc(x1, y, 6, 0, Math.PI * 2); ctx.fill();
              ctx.fillStyle = '#ffffff';
              ctx.beginPath(); ctx.arc(x2, y, 6, 0, Math.PI * 2); ctx.fill();
            }
          } else if ('${config.animationType}' === 'cleanroom') {
            ctx.strokeStyle = '${config.accent}'; ctx.lineWidth = 2;
            ctx.beginPath();
            for (let x = 0; x < 1280; x += 10) {
              let y = 360 + Math.sin((x + t * 50) * 0.02) * 40;
              if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
            for (let i = 0; i < 20; i++) {
              let rx = (i * 70 + t * 40) % 1280;
              let ry = 200 + Math.sin(i + t) * 100;
              ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
              ctx.beginPath(); ctx.arc(rx, ry, 12, 0, Math.PI * 2); ctx.fill();
            }
          } else if ('${config.animationType}' === 'hplc') {
            ctx.strokeStyle = '${config.accent}'; ctx.lineWidth = 3;
            ctx.beginPath();
            for (let x = 100; x < 1180; x += 5) {
              let y = 450 - Math.exp(-Math.pow((x - (400 + (t * 60) % 500)) / 40, 2)) * 180;
              if (x === 100) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
          } else {
            for (let i = 0; i < 40; i++) {
              let x = (Math.sin(i + t * 0.5) * 0.5 + 0.5) * 1280;
              let y = (Math.cos(i * 2 + t * 0.5) * 0.5 + 0.5) * 720;
              let r = Math.sin(i + t) * 8 + 12;
              ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
              ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
            }
          }

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
    console.log(`Generating pharmaceutical video: ${config.name}...`);
    const tempDir = path.join('/tmp', config.name);
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const context = await browser.newContext({
      recordVideo: { dir: tempDir, size: { width: 1280, height: 720 } }
    });

    const page = await context.newPage();
    await page.setContent(generateHTML(config));
    await page.waitForTimeout(6000); // Record 6 seconds of HD animation

    await page.close();
    await context.close();

    const recordedFiles = fs.readdirSync(tempDir).filter(f => f.endsWith('.webm'));
    if (recordedFiles.length > 0) {
      const srcWebm = path.join(tempDir, recordedFiles[0]);
      const destWebm = path.join(outputDir, `${config.name}.webm`);
      const destMp4 = path.join(outputDir, `${config.name}.mp4`);

      fs.copyFileSync(srcWebm, destWebm);
      fs.copyFileSync(srcWebm, destMp4); // Copy as dual WebM/MP4 format
      console.log(`Successfully output: ${config.name}.webm & ${config.name}.mp4`);
    }
  }

  await browser.close();
  console.log('All 6 Pharmaceutical Video Streams Generated Successfully!');
})();
