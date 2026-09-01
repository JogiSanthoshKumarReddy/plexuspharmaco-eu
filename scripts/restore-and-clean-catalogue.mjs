import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/products.json');

// Read current products
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Check if any original items were stored or can be recovered
const tempPath = '/tmp/original_products.json';
if (fs.existsSync(tempPath)) {
  const orig = JSON.parse(fs.readFileSync(tempPath, 'utf8'));
  const currentIds = new Set(products.map(p => p.id));
  orig.forEach(item => {
    if (!currentIds.has(item.id)) {
      products.push(item);
    }
  });
}

console.log(`Auditing catalog across ${products.length} total products...`);

// 15 Standard Category Normalization Map
const CATEGORY_MAP = {
  // Re-map wrong categories (Audit Directive)
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

const normalizeCategory = (cat, id) => {
  if (CATEGORY_MAP[id]) return CATEGORY_MAP[id];
  if (!cat) return "General Wellness";

  const c = cat.toLowerCase();
  if (c.includes('kid') || c.includes('pediatric')) return "Kid's Health";
  if (c.includes('men\'s') || c.includes('mens') || c.includes('erecti') || c.includes('manstru')) return "Men's Health";
  if (c.includes('women\'s') || c.includes('womens') || c.includes('menopause') || c.includes('ladylove') || c.includes('pcos') || c.includes('pregna')) return "Women's Health";
  if (c.includes('pouch') || c.includes('wellness pouch')) return "Wellness Pouches";
  if (c.includes('omega')) return "Omega Supplements";
  if (c.includes('iron') || c.includes('ferrolyte')) return "Iron & Blood Health";
  if (c.includes('age-slow') || c.includes('ageslow')) return "Age-Slow Complex";
  if (c.includes('vit c') || c.includes('vitamin c')) return "Vitamin C Supplements";
  if (c.includes('vit d') || c.includes('vitamin d')) return "Vitamin D3 Supplements";
  if (c.includes('calcium') || c.includes('osteomax')) return "Calcium & OsteoMax";
  if (c.includes('beauty') || c.includes('skin') || c.includes('acne') || c.includes('collagen') || c.includes('hair') || c.includes('niacinamide')) return "Beauty Supplements";
  if (c.includes('somna') || c.includes('sleep')) return "Sleep (Somna-Matrix)";
  if (c.includes('ophtha') || c.includes('eye') || c.includes('vision')) return "Eye/Vision Supplements";
  if (c.includes('cough') || c.includes('cofcare')) return "Herbal Cough Remedies";
  if (c.includes('biotic') || c.includes('inuflora')) return "Pre-, Pro- & Post-Biotics";

  return "General Wellness";
};

let verifiedCount = 0;
let fallbackCount = 0;

const cleanedProducts = products.map(p => {
  let name = p.name || '';

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

  name = name.trim().replace(/\s+/g, ' ');

  const category = normalizeCategory(p.category, p.id);

  // Extract detected pack size variants
  const packMatches = name.match(/\b(N10|N20|N28|N30|N60|N100|150ml|200ml|30ml|60s|180 capsules)\b/gi) || [];
  const packSizes = packMatches.length > 0 ? Array.from(new Set(packMatches.map(m => m.toUpperCase()))) : ["N30", "N60"];

  // Image verification & fallback
  let image = p.image;
  let imageValid = false;

  if (image) {
    const relPath = image.startsWith('/') ? image.slice(1) : image;
    const fullPath = path.join(__dirname, '../public', relPath);
    if (fs.existsSync(fullPath)) {
      imageValid = true;
      verifiedCount++;
    }
  }

  if (!imageValid) {
    // High-res fallback based on category
    const nutraCategories = ["Kid's Health", "Vitamin C Supplements", "Vitamin D3 Supplements", "Beauty Supplements", "Pre-, Pro- & Post-Biotics", "Sleep (Somna-Matrix)"];
    if (nutraCategories.includes(category)) {
      image = "/assets/images/pharma_product_nutra.png";
    } else {
      image = "/assets/images/pharma_product_pharma.png";
    }
    fallbackCount++;
  }

  return {
    ...p,
    name,
    category,
    image,
    packSizes
  };
});

console.log(`Catalogue Restoration Complete! Total SKUs: ${cleanedProducts.length}`);
console.log(`Verified Product Images: ${verifiedCount}`);
console.log(`Category Fallback Images Applied: ${fallbackCount}`);

// Category statistics
const stats = {};
cleanedProducts.forEach(p => {
  stats[p.category] = (stats[p.category] || 0) + 1;
});
console.log('Final Category Taxonomy Distribution:', stats);

// Save data/products.json
fs.writeFileSync(productsPath, JSON.stringify(cleanedProducts, null, 2), 'utf8');
console.log('Saved clean catalog to data/products.json!');
