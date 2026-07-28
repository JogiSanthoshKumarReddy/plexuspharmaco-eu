const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const baseUrl = 'https://www.plexuspharmaco.com/';

const downloadAsset = (urlPath, destPath) => {
  return new Promise((resolve, reject) => {
    const url = baseUrl + urlPath;
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    
    if (fs.existsSync(destPath)) {
      return resolve();
    }

    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else {
        file.close();
        fs.unlink(destPath, () => reject(`Failed with status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(destPath, () => reject(err));
    });
  });
};

const run = async () => {
  console.log('Fetching homepage to get asset lists...');
  const response = await fetch(baseUrl);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const cssPaths = [];
  $('link[rel="stylesheet"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('assets/')) {
      cssPaths.push(href);
    }
  });

  const jsPaths = [];
  $('script').each((i, el) => {
    const src = $(el).attr('src');
    if (src && src.startsWith('assets/')) {
      jsPaths.push(src);
    }
  });
  
  // Download fonts if referenced in CSS - this might be tricky, we'll just download the CSS and see.
  // Actually, wait, some CSS files might reference fonts like `../fonts/...`.
  // We'll just download the CSS and JS for now.
  
  console.log(`Found ${cssPaths.length} CSS files and ${jsPaths.length} JS files.`);
  
  for (const assetPath of [...cssPaths, ...jsPaths]) {
    const destPath = path.join(__dirname, 'public', assetPath);
    try {
      await downloadAsset(assetPath, destPath);
      console.log(`Downloaded ${assetPath}`);
    } catch (e) {
      console.error(`Failed to download ${assetPath}: ${e}`);
    }
  }
  
  console.log('Assets fetched.');
};

run();
