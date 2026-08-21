const { chromium } = require('playwright');
const fs = require('fs');

const routes = [
  { name: 'About', path: '/about' },
  { name: 'Governance', path: '/corporate-governance' },
  { name: 'CSR', path: '/sustainability' },
  { name: 'News', path: '/press-release' },
  { name: 'Investors', path: '/investor-relation' },
  { name: 'Careers', path: '/job-opening' },
  { name: 'Products', path: '/product-catalogue' },
  { name: 'R&D', path: '/research-development' },
  { name: 'Manufacturing', path: '/manufacture-capability' },
  { name: 'Quality', path: '/quality-assurance' },
  { name: 'Regulatory', path: '/regulatory-compliance' },
  { name: 'Contact', path: '/business-enquiry' }
];

async function testRoutes() {
  console.log('Starting automated route testing...');
  const browser = await chromium.launch();
  
  let markdownTable = `| Page | Desktop | Mobile | Links | Content | Status |\n| :--- | :---: | :---: | :---: | :---: | :--- |\n`;
  
  for (const route of routes) {
    const url = `http://localhost:3000${route.path}`;
    let desktopPass = false;
    let mobilePass = false;
    let linksPass = false;
    let contentPass = false;
    let statusMsg = 'Passed';
    
    try {
      // Test Desktop
      const desktopContext = await browser.newContext({ viewport: { width: 1280, height: 720 } });
      const desktopPage = await desktopContext.newPage();
      const desktopRes = await desktopPage.goto(url, { waitUntil: 'domcontentloaded' });
      
      if (desktopRes && desktopRes.status() === 200) {
        desktopPass = true;
        
        // Test Content (Does it have an h1?)
        const h1Count = await desktopPage.locator('h1').count();
        if (h1Count > 0) contentPass = true;
        
        // Test Links (Does it have internal links?)
        const linkCount = await desktopPage.locator('a[href^="/"]').count();
        if (linkCount > 0) linksPass = true;
      } else {
        statusMsg = `Failed (${desktopRes ? desktopRes.status() : 'No response'})`;
      }
      await desktopContext.close();
      
      // Test Mobile
      const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 } });
      const mobilePage = await mobileContext.newPage();
      const mobileRes = await mobilePage.goto(url, { waitUntil: 'domcontentloaded' });
      
      if (mobileRes && mobileRes.status() === 200) {
        mobilePass = true;
      }
      await mobileContext.close();
      
    } catch (e) {
      statusMsg = `Error: ${e.message.split('\\n')[0]}`;
    }
    
    const formatCheck = (passed) => passed ? '✅' : '❌';
    markdownTable += `| **${route.name}** | ${formatCheck(desktopPass)} | ${formatCheck(mobilePass)} | ${formatCheck(linksPass)} | ${formatCheck(contentPass)} | ${statusMsg} |\n`;
    console.log(`Tested ${route.name}: ${statusMsg}`);
  }
  
  await browser.close();
  
  fs.writeFileSync('route_testing_automated.md', markdownTable);
  console.log('\\nAutomated Markdown Table Generated:\\n');
  console.log(markdownTable);
}

testRoutes().catch(console.error);
