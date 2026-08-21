const fs = require('fs');

const dataPath = './data/products.json';
const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
let modified = 0;

for (let p of products) {
  if (p.description && p.description.includes('formulation scientifically designed for optimal')) {
    const ingredients = p.ingredients.map(i => i.name);
    let ingrText = ingredients.join(' and ');
    if (ingredients.length > 2) {
      const last = ingredients.pop();
      ingrText = ingredients.join(', ') + ', and ' + last;
    }
    
    // Capitalize first letter of product name for sentence context
    let formattedName = p.name;
    // e.g. "PLEXWELL MEN MULTIVITAMIN" -> "Plexwell Men Multivitamin" (optional, but wait they are already all-caps in name field)
    // Actually, we can just say "A high-quality formulation featuring..."
    p.description = `A high-quality formulation featuring ${ingrText}.`;
    modified++;
  }
}

fs.writeFileSync(dataPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Updated ${modified} generic descriptions to be unique and concise.`);
