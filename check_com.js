const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://www.plexuspharmaco.com/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'com_screenshot.png', fullPage: true });
    await browser.close();
})();
