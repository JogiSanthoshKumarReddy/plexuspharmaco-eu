const fs = require('fs');

const dataPath = './data/products.json';
const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
let modifiedCount = 0;

for (let p of products) {
  let changed = false;
  
  if (p.name && /plexwell/i.test(p.name)) {
    p.name = p.name.replace(/plexwell/ig, 'PlexWell');
    changed = true;
  }
  
  if (p.description && /plexwell/i.test(p.description)) {
    p.description = p.description.replace(/plexwell/ig, 'PlexWell');
    changed = true;
  }
  
  // also check category if there's any
  if (p.category && /plexwell/i.test(p.category)) {
    p.category = p.category.replace(/plexwell/ig, 'PlexWell');
    changed = true;
  }

  if (changed) {
    modifiedCount++;
  }
}

fs.writeFileSync(dataPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Normalized PlexWell typography across ${modifiedCount} products in the database.`);
