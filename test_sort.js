const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    try {
        await page.goto('http://localhost:3000/product-catalogue', { waitUntil: 'networkidle0' });
        
        console.log("Selecting 'Men Health'...");
        await page.select('#subcategorySelect', 'Men Health');
        await new Promise(r => setTimeout(r, 1000));
        
        const productsText = await page.evaluate(() => {
            const list = document.getElementById('productResults');
            return list ? list.innerText.substring(0, 500) : 'No products list found';
        });
        
        console.log("Products shown after selecting 'Men Health':");
        console.log(productsText);
        
    } catch (e) {
        console.error("Test failed:", e);
    } finally {
        await browser.close();
    }
})();
