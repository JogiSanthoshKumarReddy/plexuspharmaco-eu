import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log(`Starting catalog sanitation on ${products.length} listed raw items...`);

// Category Taxonomy Map
const CATEGORY_MAP = {
  // Re-map wrong categories (Page 2 & 3 Audit)
  'plexwell-niacinamide-250mg': 'Beauty Supplements',
  'plexwell-niacinamide-500mg': 'Beauty Supplements',
  'plexwell_anti-acne-complex-tablet-n30': 'Beauty Supplements',
  'plexwell_women-wellness-pouch_n28-pouches': 'Wellness Pouches',
  'plexwell_men-wellness-pouch_n28-pouches': 'Wellness Pouches',
  'plexwell_vit-c_energy-powder_n30': 'Vitamin C Supplements',
  'plexwell_omegavit-d3coq10_vit-ecucumin_n60': 'Omega Supplements',
  'plexwell_ophthacare-junior-liquid-150-ml': 'Eye/Vision Supplements',
  'plexwell-uti-biotic-syrup-150-ml': 'Pre-, Pro- & Post-Biotics',
  'plexwell-uti-biotic-syrup-op-2-150-ml': 'Pre-, Pro- & Post-Biotics',
  'inuflora-kids': 'Pre-, Pro- & Post-Biotics',
  'folifen-tablet-liquid-150ml': "Women's Health",
  'pregnafen-liquid': "Women's Health"
};

// 1. Apply Name Corrections (Typos & Formatting)
products = products.map(p => {
  let name = p.name || '';
  let category = p.category || '';

  // Typo fixes
  name = name.replace(/PLXWELL/gi, 'PlexWell');
  name = name.replace(/MANSTRU/gi, 'Menstrual');
  name = name.replace(/OMEA/gi, 'Omega');
  name = name.replace(/COMPEX/gi, 'Complex');
  name = name.replace(/UT-SUPPORT/gi, 'UTI-Support');
  name = name.replace(/WITH BOX/gi, '');
  name = name.replace(/OP 1/gi, '');
  name = name.replace(/OP 2/gi, '');
  name = name.replace(/FAMILY2/gi, 'Family');

  // Clean trailing dashes/spaces
  name = name.trim().replace(/\s+/g, ' ');

  // Category Override
  if (CATEGORY_MAP[p.id]) {
    category = CATEGORY_MAP[p.id];
  }

  // Ensure category names are normalized
  if (category.includes('Omega')) category = 'Omega Supplements';
  if (category.includes('Vitamin C')) category = 'Vitamin C Supplements';
  if (category.includes('Vitamin D3')) category = 'Vitamin D3 Supplements';
  if (category.includes('OsteoMax') || category.includes('Calcium')) category = 'Calcium & OsteoMax';
  if (category.includes('Beauty') || category.includes('Skin') || category.includes('Hair')) category = 'Beauty Supplements';
  if (category.includes('Somna') || category.includes('Sleep')) category = 'Sleep (Somna-Matrix)';
  if (category.includes('Ophtha') || category.includes('Eye')) category = 'Eye/Vision Supplements';
  if (category.includes('Cough') || category.includes('CofCare')) category = 'Herbal Cough Remedies';
  if (category.includes('Biotic') || category.includes('InuFlora')) category = 'Pre-, Pro- & Post-Biotics';

  return {
    ...p,
    name,
    category
  };
});

// 2. Identify and Deduplicate Variants
// Group items by base normalized key
const grouped = new Map();

products.forEach(p => {
  // Normalize base key by removing pack sizes like N10, N30, N60, N100, 150ml, 200ml, 60 capsules, bottle, sachet
  let baseKey = p.name
    .replace(/\b(N10|N20|N28|N30|N60|N100|150ML|200ML|30ML|60S|CAPSULES?|TABLETS?|GUMMIES?|PACK|BOTTLE|POUCHES?)\b/gi, '')
    .trim()
    .toLowerCase();

  // Extract detected pack sizes
  const packMatches = p.name.match(/\b(N10|N20|N28|N30|N60|N100|150ml|200ml|30ml|60s|180 capsules)\b/gi) || [];

  if (!grouped.has(baseKey)) {
    grouped.set(baseKey, {
      parent: p,
      packSizes: new Set(packMatches.map(m => m.toUpperCase()))
    });
  } else {
    const existing = grouped.get(baseKey);
    packMatches.forEach(m => existing.packSizes.add(m.toUpperCase()));
    // Prefer non-empty ingredients or descriptions
    if ((!existing.parent.description || existing.parent.description.length === 0) && p.description && p.description.length > 0) {
      existing.parent = p;
    }
  }
});

// Build Cleaned Product List
const cleanedProducts = [];
grouped.forEach(val => {
  const item = { ...val.parent };
  const sizes = Array.from(val.packSizes);
  if (sizes.length > 0) {
    item.packSizes = sizes;
  } else {
    item.packSizes = ["N30", "N60"]; // Default pack size variants
  }
  cleanedProducts.push(item);
});

console.log(`Cleaned product list from ${products.length} down to ${cleanedProducts.length} master SKUs!`);

// Save updated products.json
fs.writeFileSync(productsPath, JSON.stringify(cleanedProducts, null, 2), 'utf8');
console.log('Successfully updated data/products.json!');
