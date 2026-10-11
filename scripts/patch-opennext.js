const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js');

if (!fs.existsSync(targetFile)) {
  console.log('[patch-opennext] Target file not found, skipping patch.');
  process.exit(0);
}

let content = fs.readFileSync(targetFile, 'utf8');
let modified = false;

// 1. Add preview-props to manifests glob if not present
if (content.includes('**/{*-manifest,required-server-files,prefetch-hints}.json')) {
  content = content.replace(
    '**/{*-manifest,required-server-files,prefetch-hints}.json',
    '**/{*-manifest,required-server-files,prefetch-hints,preview-props}.json'
  );
  modified = true;
}

// 2. Add preview-props to fallback list if not present
if (content.includes('p.endsWith("prefetch-hints")') && !content.includes('p.endsWith("preview-props")')) {
  content = content.replace(
    'p.endsWith("prefetch-hints")) {',
    'p.endsWith("prefetch-hints") ||\n        p.endsWith("preview-props")) {'
  );
  modified = true;
}

if (modified) {
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('[patch-opennext] Successfully patched load-manifest.js for preview-props.json compatibility');
} else {
  console.log('[patch-opennext] load-manifest.js is already patched or pattern did not match');
}
