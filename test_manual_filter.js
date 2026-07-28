const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3000/product-catalogue', { waitUntil: 'networkidle0' });

    console.log("Forcing filter manually:");
    const visibleProducts = await page.evaluate(() => {
        document.getElementById('subcategorySelect').selectedIndex = 1;
        // manually call filterProductsClient
        window.filterProductsClient();
        
        const cols = document.querySelectorAll('#productResults .col-xl-4');
        const visible = [];
        cols.forEach(col => {
            if (col.style.display !== 'none') {
                visible.push(col.querySelector('.blog-title').innerText);
            }
        });
        return visible;
    });
    console.log("Visible after manual filter:", visibleProducts);
    
    await browser.close();
})();
