const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3000/product-catalogue', { waitUntil: 'networkidle0' });

    console.log("Checking texts:");
    const info = await page.evaluate(() => {
        const subCatSelect = document.getElementById('subcategorySelect');
        subCatSelect.selectedIndex = 1;
        const subCatText = subCatSelect.options[subCatSelect.selectedIndex].text.toLowerCase();
        
        const card = document.querySelector('#productResults .col-xl-4 .single-blog-style1');
        const title = (card.querySelector('.blog-title')?.innerText || '').toLowerCase();
        const category = (card.querySelector('.category-box span')?.innerText || '').toLowerCase();
        
        return { subCatText, title, category, matchCat: category.includes(subCatText) };
    });
    console.log(info);
    
    await browser.close();
})();
