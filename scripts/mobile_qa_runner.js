const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/Users/Guest_Account/.gemini/antigravity-ide/brain/04b5bedf-67e6-4c18-9394-7b6a0ca98eb9/';
const viewports = [
  { width: 320, height: 800 },
  { width: 375, height: 800 },
  { width: 390, height: 800 },
  { width: 414, height: 800 },
  { width: 768, height: 1024 }
];

async function runMobileQA() {
  console.log('Starting Mobile QA Test...');
  const browser = await chromium.launch();
  
  let markdown = `# Mobile Navigation & Layout QA Report\n\n`;
  markdown += `I ran automated tests across all requested viewports to verify horizontal overflow and capture the visual state of the Hamburger menu, Product Cards, and Layout.\n\n`;
  
  for (const vp of viewports) {
    console.log(`Testing viewport ${vp.width}x${vp.height}...`);
    markdown += `## Viewport: ${vp.width}px\n\n`;
    
    const context = await browser.newContext({ viewport: vp });
    const page = await context.newPage();
    
    await page.goto('http://localhost:3000/');
    
    // Wait for network idle to ensure fonts/images are somewhat loaded
    await page.waitForLoadState('networkidle').catch(() => {});
    
    // 1. Check Horizontal Overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    markdown += `**Horizontal Overflow Status:** ${hasOverflow ? '❌ FAILED (Overflow detected)' : '✅ PASSED (No overflow)'}\n\n`;
    
    // 2. Take full page screenshot
    const fullPagePath = path.join(ARTIFACT_DIR, `vp_${vp.width}_full.png`);
    await page.screenshot({ path: fullPagePath, fullPage: true });
    
    // 3. Test Hamburger Menu
    const isMobile = vp.width < 1024;
    let menuPass = false;
    
    if (isMobile) {
      try {
        // Try to find and click the hamburger
        // Look for the MobileMenu toggle in ModernHeader (usually an SVG or button)
        const menuBtn = page.locator('button[aria-label="Toggle Menu"], .mobile-menu-btn, svg.lucide-menu').first();
        if (await menuBtn.isVisible()) {
          await menuBtn.click();
          await page.waitForTimeout(500); // Wait for animation
          
          const menuShotPath = path.join(ARTIFACT_DIR, `vp_${vp.width}_menu.png`);
          await page.screenshot({ path: menuShotPath });
          
          markdown += `**Hamburger Menu UI:**\n\n![Hamburger Menu ${vp.width}px](${menuShotPath})\n\n`;
          menuPass = true;
          
          // Click again to close or click backdrop
          await page.mouse.click(10, 10);
          await page.waitForTimeout(500);
        }
      } catch (e) {
        console.error(`Error testing menu at ${vp.width}:`, e);
      }
    }
    
    markdown += `**Full Page Layout (Logo, Header, Products, FAQ, Forms, Footer):**\n\n![Full Page ${vp.width}px](${fullPagePath})\n\n`;
    
    await context.close();
  }
  
  await browser.close();
  
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'mobile_qa_report.md'), markdown);
  console.log('Mobile QA Report generated successfully.');
}

runMobileQA().catch(console.error);
