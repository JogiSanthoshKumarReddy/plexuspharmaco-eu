const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        const errors = [];
        const logs = [];

        page.on('console', msg => {
            if (msg.type() === 'error') errors.push(msg.text());
            else logs.push(msg.text());
        });

        page.on('pageerror', err => {
            errors.push(err.toString());
        });

        const targetUrl = 'http://localhost:3000/' + (process.argv[2] || '');
        console.log("Navigating to " + targetUrl);
        await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });
        
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
        console.log("Screenshot saved to screenshot.png");

        fs.writeFileSync('page_errors.json', JSON.stringify({ errors, logs }, null, 2));
        console.log("Logs saved to page_errors.json");

        await browser.close();
    } catch (e) {
        console.error("Puppeteer script failed:", e);
    }
})();
