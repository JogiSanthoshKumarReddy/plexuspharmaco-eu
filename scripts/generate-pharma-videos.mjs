#!/usr/bin/env node
/**
 * Plexuspharmaco EU — Cinematic Pharmaceutical Video Generator (v3)
 *
 * Pipeline:
 *  1. Use Playwright to render a styled HTML overlay PNG for each video
 *     (title, subtitle, badge, cinematic letterbox, transparent bg)
 *  2. Use ffmpeg zoompan to create a smooth cinematic slow-pan from each poster
 *  3. Composite the overlay PNG over the zoompan video using ffmpeg overlay
 *  4. Apply colour grade (eq + colorbalance), vignette, and subtle noise
 *  5. Encode dual output: MP4 (H.264) + WebM (VP9)
 *
 * Result: genuine cinematic 1280×720 @30fps pharmaceutical videos
 */

import { chromium } from 'playwright';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'assets', 'images');
const VID_DIR = path.join(ROOT, 'public', 'assets', 'videos');
const TMP = '/tmp/plexus_v3';

if (!fs.existsSync(VID_DIR)) fs.mkdirSync(VID_DIR, { recursive: true });
if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

// ── Video section configurations ────────────────────────────────────────────
const VIDEOS = [
  {
    name: 'plexus_corporate_overview',
    poster: 'pharma_video_poster_corporate.jpg',
    // Ken-Burns: slow push-in toward executive tower
    zoomEnd: 1.10,
    // Colour grade: warm corporate gold tones
    eq: 'eq=saturation=1.05:contrast=1.06:brightness=0.02:gamma=1.02',
    colorbal: 'colorbalance=rs=0.04:gs=0.01:bs=-0.06',
    // Overlay theme
    accentColor: '#38BDF8',
    badgeColor: '#38BDF8',
    bgColor: 'rgba(5,15,35,0.88)',
    title: 'Plexuspharmaco EU',
    subtitle: 'Pioneering Pharmaceutical Innovation Across Europe',
    badge: 'EU-GMP Certified  ·  50+ Export Markets  ·  WHO-GMP Compliant',
  },
  {
    name: 'plexus_manufacturing_tour',
    poster: 'pharma_video_poster_mfg.jpg',
    zoomEnd: 1.12,
    eq: 'eq=saturation=0.85:contrast=1.08:brightness=-0.03:gamma=0.96',
    colorbal: 'colorbalance=rs=-0.05:gs=0.02:bs=0.08',
    accentColor: '#10B981',
    badgeColor: '#10B981',
    bgColor: 'rgba(5,20,10,0.88)',
    title: 'Manufacturing Excellence',
    subtitle: 'ISO Class 5 Cleanroom  ·  Automated Blister Packaging Lines',
    badge: 'cGMP Certified Facility  ·  4,500 Doses / Min  ·  Robotic Isolator Assembly',
  },
  {
    name: 'plexus_rd_laboratory',
    poster: 'pharma_video_poster_rd.jpg',
    zoomEnd: 1.11,
    eq: 'eq=saturation=0.90:contrast=1.10:brightness=-0.02:gamma=0.97',
    colorbal: 'colorbalance=rs=-0.03:gs=0.05:bs=-0.02',
    accentColor: '#F59E0B',
    badgeColor: '#F59E0B',
    bgColor: 'rgba(20,10,5,0.88)',
    title: 'Research & Development',
    subtitle: 'Analytical Chemistry  ·  Formulation Science  ·  Drug Discovery',
    badge: 'HPLC  ·  Mass Spectrometry  ·  Molecular Research  ·  Clinical Studies',
  },
  {
    name: 'plexus_quality_control',
    poster: 'pharma_video_poster_quality.jpg',
    zoomEnd: 1.09,
    eq: 'eq=saturation=0.80:contrast=1.12:brightness=-0.05:gamma=0.94',
    colorbal: 'colorbalance=rs=-0.06:gs=-0.01:bs=0.10',
    accentColor: '#06B6D4',
    badgeColor: '#06B6D4',
    bgColor: 'rgba(2,12,25,0.88)',
    title: 'Quality Assurance',
    subtitle: 'Batch Release  ·  HPLC Validation  ·  Pharmacopoeial Testing',
    badge: 'ICH Q10 Compliant  ·  EP / USP Standards  ·  99.94% Assay Purity',
  },
  {
    name: 'plexus_global_logistics',
    poster: 'pharma_video_poster_logistics.jpg',
    zoomEnd: 1.10,
    eq: 'eq=saturation=1.05:contrast=1.06:brightness=0.02:gamma=1.02',
    colorbal: 'colorbalance=rs=0.04:gs=0.01:bs=-0.06',
    accentColor: '#F97316',
    badgeColor: '#F97316',
    bgColor: 'rgba(25,10,2,0.88)',
    title: 'Global Distribution',
    subtitle: 'GDP Cold Chain  ·  50+ Markets  ·  Temperature-Controlled Logistics',
    badge: '+2°C to +8°C  ·  24/7 Telemetry  ·  Air & Sea Freight  ·  Last-Mile GDP',
  },
  {
    name: 'plexus_sustainability_esg',
    poster: 'pharma_video_poster_sustainability.jpg',
    zoomEnd: 1.00, // zoom out from 1.10 → 1.00
    zoomStart: 1.10,
    eq: 'eq=saturation=0.92:contrast=1.04:brightness=0.01:gamma=0.98',
    colorbal: 'colorbalance=rs=0.02:gs=0.03:bs=-0.04',
    accentColor: '#34D399',
    badgeColor: '#34D399',
    bgColor: 'rgba(2,15,8,0.88)',
    title: 'Sustainability & ESG',
    subtitle: 'Renewable Energy  ·  Zero-Liquid Discharge  ·  Carbon-Neutral Goals',
    badge: '2.5 MW Solar  ·  ZLD Water Recycling  ·  ISO 14001  ·  Green Manufacturing',
  },
  {
    name: 'plexus_medical_devices',
    poster: 'pharma_video_poster_devices.jpg',
    zoomEnd: 1.12,
    eq: 'eq=saturation=0.85:contrast=1.08:brightness=-0.03:gamma=0.96',
    colorbal: 'colorbalance=rs=-0.05:gs=0.02:bs=0.08',
    accentColor: '#F43F5E',
    badgeColor: '#F43F5E',
    bgColor: 'rgba(20,2,10,0.88)',
    title: 'Medical Devices',
    subtitle: 'Pre-Filled Syringes  ·  Auto-Injectors  ·  Sterile Isolator Assembly',
    badge: 'ISO 13485 Certified  ·  EU MDR Compliant  ·  Class II & III Devices',
  },
];

const W = 1280, H = 720, FPS = 30, DURATION = 15;

// ── Generate an overlay PNG using Playwright ─────────────────────────────
async function renderOverlayPng(browser, cfg, outPng) {
  const { accentColor, badgeColor, bgColor, title, subtitle, badge } = cfg;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: ${W}px; height: ${H}px; background: transparent; overflow: hidden; }

    /* Cinematic letterbox bars */
    .bar { position: absolute; left: 0; width: 100%; height: 62px; background: #000; z-index: 10; }
    .bar-top { top: 0; }
    .bar-bottom { bottom: 0; }

    /* Gradient vignette overlay from sides */
    .vignette {
      position: absolute; inset: 0; z-index: 2;
      background:
        radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%),
        linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.35) 100%),
        linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 75%, rgba(0,0,0,0.7) 100%);
    }

    /* Bottom info panel */
    .panel {
      position: absolute;
      bottom: 62px;
      left: 0; right: 0;
      padding: 28px 60px 32px;
      z-index: 20;
      background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, transparent 100%);
    }

    .badge {
      display: inline-block;
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${badgeColor};
      margin-bottom: 10px;
      padding: 4px 12px;
      border: 1px solid ${badgeColor}55;
      border-radius: 4px;
      background: ${badgeColor}18;
    }

    .title {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 40px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: -0.01em;
      margin-bottom: 10px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.7);
    }

    .subtitle {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 17px;
      font-weight: 400;
      color: rgba(255,255,255,0.80);
      letter-spacing: 0.01em;
      text-shadow: 0 1px 8px rgba(0,0,0,0.6);
    }

    /* Top-right branding mark */
    .brand-mark {
      position: absolute;
      top: 75px;
      right: 50px;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(0,0,0,0.65);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 6px;
      backdrop-filter: blur(10px);
    }
    .brand-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: ${accentColor};
      box-shadow: 0 0 6px ${accentColor};
    }
    .brand-name {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* Accent left rule */
    .accent-rule {
      position: absolute;
      bottom: 62px;
      left: 0;
      width: 4px;
      height: 140px;
      background: linear-gradient(to top, ${accentColor}, transparent);
      z-index: 21;
    }
  </style>
</head>
<body>
  <div class="bar bar-top"></div>
  <div class="bar bar-bottom"></div>
  <div class="vignette"></div>
  <div class="accent-rule"></div>

  <div class="brand-mark">
    <div class="brand-dot"></div>
    <span class="brand-name">Plexuspharmaco EU</span>
  </div>

  <div class="panel">
    <div class="badge">${badge}</div>
    <div class="title">${title}</div>
    <div class="subtitle">${subtitle}</div>
  </div>
</body>
</html>`;

  const page = await browser.newPage();
  await page.setViewportSize({ width: W, height: H });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outPng, type: 'png', omitBackground: true });
  await page.close();
}

// ── Run ffmpeg command synchronously ────────────────────────────────────────
function ffmpeg(args, label) {
  console.log(`  ↳ ${label}`);
  try {
    execSync(`ffmpeg -y ${args} 2>&1`, { stdio: 'pipe', maxBuffer: 32 * 1024 * 1024 });
  } catch (err) {
    const out = err.stdout?.toString() || '';
    const errTxt = out.split('\n').filter(l => l.includes('Error') || l.includes('Invalid') || l.includes('No such')).slice(0, 5).join('\n');
    console.error(`  ✗ ffmpeg error [${label}]:\n${errTxt || out.slice(-500)}`);
    throw err;
  }
}

// ── Main pipeline ────────────────────────────────────────────────────────────
(async () => {
  console.log('\n🎬  Plexuspharmaco EU — Cinematic Video Generator (ffmpeg + Playwright)');
  console.log('══════════════════════════════════════════════════════════════════════\n');

  const browser = await chromium.launch({ headless: true });

  for (const cfg of VIDEOS) {
    const inputImg = path.join(IMG_DIR, cfg.poster);
    if (!fs.existsSync(inputImg)) {
      console.warn(`⚠  Missing poster: ${cfg.poster} — skipping`);
      continue;
    }

    console.log(`▶  Rendering: ${cfg.name}`);

    const overlayPng = path.join(TMP, `${cfg.name}_overlay.png`);
    const tmpZoom = path.join(TMP, `${cfg.name}_zoom.mp4`);
    const outMp4 = path.join(VID_DIR, `${cfg.name}.mp4`);
    const outWebm = path.join(VID_DIR, `${cfg.name}.webm`);

    // 1. Render overlay PNG with text, vignette, letterbox, and branding
    await renderOverlayPng(browser, cfg, overlayPng);
    console.log('  ✓ Overlay PNG rendered');

    const zStart = cfg.zoomStart ?? 1.00;
    const zEnd = cfg.zoomEnd ?? 1.10;
    const frames = FPS * DURATION;

    // 2. zoompan → colour grade → noise → composite overlay → encode MP4
    const vf = [
      // Slow Ken-Burns push from zStart → zEnd
      `zoompan=z='min(zoom+${((zEnd - zStart) / frames).toFixed(6)},${zEnd})':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${H}:fps=${FPS}`,
      // Colour grade
      cfg.eq,
      cfg.colorbal,
      // Subtle film noise for depth/realism
      'noise=alls=5:allf=t+u',
    ].join(',');

    const overlayFilter = `[0:v]${vf}[bg];[1:v]scale=${W}:${H}[ov];[bg][ov]overlay=0:0`;

    ffmpeg(
      `-loop 1 -framerate ${FPS} -i "${inputImg}" -i "${overlayPng}" ` +
      `-filter_complex "${overlayFilter}" ` +
      `-t ${DURATION} ` +
      `-c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart ` +
      `"${outMp4}"`,
      'Encoding MP4 (H.264 + cinematic overlay)'
    );

    // 3. WebM VP9 encode from the MP4
    ffmpeg(
      `-i "${outMp4}" ` +
      `-c:v libvpx-vp9 -crf 35 -b:v 0 -deadline good -cpu-used 2 -pix_fmt yuv420p ` +
      `"${outWebm}"`,
      'Encoding WebM (VP9 for modern browsers)'
    );

    const mp4MB = (fs.statSync(outMp4).size / (1024 * 1024)).toFixed(1);
    const webMB = (fs.statSync(outWebm).size / (1024 * 1024)).toFixed(1);
    console.log(`  ✓ ${cfg.name}.mp4 (${mp4MB} MB)  |  .webm (${webMB} MB)\n`);
  }

  await browser.close();

  // Cleanup
  try { fs.rmSync(TMP, { recursive: true, force: true }); } catch (_) {}

  console.log('══════════════════════════════════════════════════════════════════════');
  console.log('✅  All 7 cinematic pharmaceutical video streams completed!\n');
})();
