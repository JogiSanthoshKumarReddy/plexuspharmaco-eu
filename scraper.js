const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://www.plexuspharmaco.com';

const pages = [
  '/about',
  '/corporate-governance',
  '/product-catalogue',
  '/pipeline',
  '/manufacture-capability',
  '/quality-assurance',
  '/regulatory-compliance',
  '/contract-manufacturing',
  '/research',
  '/technology-platforms',
  '/intellectual-property',
  '/presence',
  '/profile',
  '/logistics',
  '/licensing',
  '/distributorship',
  '/strategic-alliance',
  '/health-community',
  '/sustainability',
  '/ethical-standard',
  '/press-release',
  '/media',
  '/event',
  '/gallery',
  '/life',
  '/job-opening',
  '/internship',
  '/investor-relation',
  '/financial-report',
  '/global-office',
  '/business-enquiry',
  '/compilance-reporting',
  '/patient-program',
  '/healthcare-tool'
];

// Helper to download an image
const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    // If it's a relative URL on .com
    if (url.startsWith('assets/')) {
      url = baseUrl + '/' + url;
    }
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const processHtmlToJsx = (html) => {
  let jsx = html;
  
  // Replace class with className
  jsx = jsx.replace(/class=/g, 'className=');
  
  // Remove style attributes
  jsx = jsx.replace(/style="[^"]*"/g, '');
  
  // Fix self-closing tags
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
  
  // Replace attributes that JSX complains about
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/autocomplete=/g, 'autoComplete=');
  jsx = jsx.replace(/maxlength=/g, 'maxLength=');
  jsx = jsx.replace(/placeholder=/g, 'placeholder=');
  
  // Fix assets paths for Next.js (from 'assets/images/...' to '/assets/images/...')
  jsx = jsx.replace(/(src|data-bg)="assets\//g, '$1="/assets/');
  
  // Map .html links to Next.js routes
  jsx = jsx.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
  
  return jsx;
};

const scrapePage = async (pagePath) => {
  const url = `${baseUrl}${pagePath}`;
  console.log(`Fetching ${url}...`);

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // We want the breadcrumb section and any content sections between it and the footer
    let contentHtml = '';
    
    const $sections = $('section');
    $sections.each((i, el) => {
      // Exclude footer sections or top bar if they are sections
      const className = $(el).attr('class') || '';
      if (!className.includes('footer') && !className.includes('header')) {
        contentHtml += $.html(el) + '\n';
      }
    });

    if (!contentHtml) {
      console.log(`No sections found for ${pagePath}.`);
      return;
    }

    // Extract images to download
    const imagesToDownload = [];
    $('img', contentHtml).each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.startsWith('assets/')) {
        imagesToDownload.push(src);
      }
    });
    
    $('[data-bg]', contentHtml).each((i, el) => {
      const src = $(el).attr('data-bg');
      if (src && src.startsWith('assets/')) {
        imagesToDownload.push(src);
      }
    });

    // Create the page component
    const jsxContent = processHtmlToJsx(contentHtml);
    
    const componentName = pagePath.replace(/[^a-zA-Z]/g, '') + 'Page';
    const componentCode = `export default function ${componentName}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

    // Save page file
    const routeName = pagePath.replace('/', '');
    const dirPath = path.join(__dirname, 'app', routeName);
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), componentCode);
    console.log(`Created app/${routeName}/page.tsx`);

    // Download images
    for (const imgSrc of imagesToDownload) {
      const localDest = path.join(__dirname, 'public', imgSrc);
      fs.mkdirSync(path.dirname(localDest), { recursive: true });
      if (!fs.existsSync(localDest)) {
        try {
          await downloadImage(imgSrc, localDest);
          console.log(`Downloaded ${imgSrc}`);
        } catch (e) {
          console.error(`Failed to download ${imgSrc}:`, e.message);
        }
      }
    }

  } catch (error) {
    console.error(`Error scraping ${pagePath}:`, error.message);
  }
};

const runScraper = async () => {
  for (const page of pages) {
    await scrapePage(page);
    // Small delay to be polite to the server
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('Scraping completed!');
};

runScraper();
