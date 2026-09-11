const fs = require('fs');
const path = './data/products.json';

const products = JSON.parse(fs.readFileSync(path, 'utf8'));
let count = 0;

products.forEach(p => {
  if (p.storage && p.storage.includes('deg C')) {
    p.storage = p.storage.replace(/deg C/g, '°C');
    count++;
  }
});

fs.writeFileSync(path, JSON.stringify(products, null, 2));
console.log(`Replaced 'deg C' with '°C' in ${count} products.`);
