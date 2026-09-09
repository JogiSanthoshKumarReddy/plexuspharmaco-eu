import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/products.json');

const rawProducts = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Helper to find existing item or create new default
const existingMap = new Map();
rawProducts.forEach(p => existingMap.set(p.id, p));

function makeProduct({ id, name, category, segment = "Nutraceuticals", description, ingredients = [], packSizes = ["N30", "N60"] }) {
  if (existingMap.has(id)) {
    const existing = existingMap.get(id);
    return {
      ...existing,
      name: name || existing.name,
      category: category || existing.category,
      segment: segment || existing.segment,
    };
  }
  return {
    id,
    segment,
    category,
    name,
    image: "/assets/images/pharma_product_nutra.png",
    description: description || `High-quality ${name} formulated for optimal health and wellness.`,
    ingredients,
    features: [
      "Manufactured under certified quality systems.",
      "Subject to strict quality control.",
      "Available for commercial partnership."
    ],
    packSizes
  };
}

// DEFINITION OF MASTER CATALOGUE LIST ACCORDING TO USER SPECIFICATION
const masterList = [];

// 1. KID’S HEALTH (6 products)
const cat1 = "PLEXWELL NATURALS KID’S HEALTH";
masterList.push(
  makeProduct({ id: "plexwell-naturals-eassichew-kids-chewable-multivitamin-tablet", name: "PLEXWELL NATURALS EASSiCHEW KIDS CHEWABLE MULTIVITAMIN TABLET", category: cat1 }),
  makeProduct({ id: "plexwell-naturals-junior-multivitamin-gummies", name: "PLEXWELL NATURALS JUNIOR MULTIVITAMIN GUMMIES", category: cat1 }),
  makeProduct({ id: "plexwell-naturals-junior-multivitamin-liquid", name: "PLEXWELL NATURALS JUNIOR MULTIVITAMIN LIQUID", category: cat1 }),
  makeProduct({ id: "plexwell-naturals-baby-multivitamin-drops", name: "PLEXWELL NATURALS BABY MULTIVITAMIN DROPS", category: cat1 }),
  makeProduct({ id: "plexwell-naturals-baby-vitamin-d3-drops", name: "PLEXWELL NATURALS BABY VITAMIN D3 DROPS", category: cat1 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-gummies", name: "PLEXWELL NATURALS VITAMIN D3+ GUMMIES", category: cat1 })
);

// 2. MEN’S HEALTH (14 products)
const cat2 = "PLEXWELL NATURALS MEN’S HEALTH";
masterList.push(
  makeProduct({ id: "plexwell-naturals-men-multivitamin", name: "PLEXWELL NATURALS MEN MULTIVITAMIN TAB", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-men-50-multivitamin", name: "PLEXWELL NATURALS MEN 50+ MULTIVITAMIN TAB", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-men-70-multivitamin", name: "PLEXWELL NATURALS MEN 70+ MULTIVITAMIN POWDER", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-men-70-multivitamin-spray", name: "PLEXWELL NATURALS MEN 70+ MULTIVITAMIN SPRAY", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-ferti-men", name: "PLEXWELL NATURALS MEN FERTi-PRO TABLET", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-prosti-men", name: "PLEXWELL NATURALS MEN PROSTi-PRO SOFTGEL", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-erecti-men-n100", name: "PLEXWELL NATURALS MEN ERECTi-PRO CAPSULE N100", category: cat2, packSizes: ["N100"] }),
  makeProduct({ id: "plexwell-naturals-erecti-men-n10", name: "PLEXWELL NATURALS MEN ERECTi-PRO CAPSULE N10", category: cat2, packSizes: ["N10"] }),
  makeProduct({ id: "plexwell-naturals-regainox-capsule", name: "PLEXWELL NATURALS REGAINOX CAPSULE", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-regainox-gummies", name: "PLEXWELL NATURALS REGAINOX GUMMIES", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-relaunch-capsule", name: "PLEXWELL NATURALS RELAUNCH CAPSULE", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-hair-pro-complex-capsule", name: "PLEXWELL NATURALS MEN HAIR-PRO COMPLEX CAPSULE", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-hair-pro-complex-effervescent", name: "PLEXWELL NATURALS MEN HAIR-PRO COMPLEX EFFERVESCENT", category: cat2 }),
  makeProduct({ id: "plexwell-naturals-hair-pro-scalp-serum", name: "PLEXWELL NATURALS HAIR-PRO SCALP SERUM", category: cat2 })
);

// 3. WOMEN’S HEALTH (14 products)
const cat3 = "PLEXWELL NATURALS WOMEN’S HEALTH";
masterList.push(
  makeProduct({ id: "plexwell-naturals-women-multivitamin", name: "PLEXWELL NATURALS WOMEN CAPSULE", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-women-50-multivitamin", name: "PLEXWELL NATURALS WOMEN 50+ CAPSULE", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-women-70-multivitamin", name: "PLEXWELL NATURALS WOMEN 70+ POWDER", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-menopause-day-support", name: "PLEXWELL NATURALS MENOPAUSE DAY SUPPORT", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-menopause-night-support", name: "PLEXWELL NATURALS MENOPAUSE NIGHT SUPPORT", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-menstrual-support", name: "PLEXWELL NATURALS MENSTRUAL SUPPORT", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-uti-support", name: "PLEXWELL NATURALS UTI- SUPPORT", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-pcos-support", name: "PLEXWELL NATURALS PCOS SUPPORT", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-ferti-women", name: "PLEXWELL NATURALS WOMEN FERTi-PRO", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-pregna-women1", name: "PLEXWELL NATURALS PREGNANCY SUPPORT Tri-1", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-pregna-women2", name: "PLEXWELL NATURALS PREGNANCY SUPPORT Tri-2", category: cat3 }),
  makeProduct({ id: "plexwell-naturals-pregna-women3", name: "PLEXWELL NATURALS PREGNANCY SUPPORT Tri-3", category: cat3 }),
  makeProduct({ id: "plxwell-naturals-ladylove-capsule-n10", name: "PLXWELL LADYLOVE CAPSULE N10", category: cat3, packSizes: ["N10"] }),
  makeProduct({ id: "plxwell-naturals-ladylove-capsule-n30", name: "PLXWELL LADYLOVE CAPSULE N30", category: cat3, packSizes: ["N30"] })
);

// 4. MEN & WOMEN WELLNESS POUCHES
const cat4 = "MEN & WOMEN WELLNESS POUCHES";
masterList.push(
  makeProduct({ id: "plexwell-men-wellness-pouch-n28-pouches", name: "PlexWell MEN WELLNESS POUCH N28 POUCHES", category: cat4 }),
  makeProduct({ id: "plexwell-women-wellness-pouch-n28-pouches", name: "PlexWell WOMEN WELLNESS POUCH N28 POUCHES", category: cat4 })
);

// 5. PLEXWELL OMEGA FAMILY (15 products)
const cat5 = "PLEXWELL NATURALS OMEGA FAMILY";
masterList.push(
  makeProduct({ id: "plexwell-naturals-omega-syrup-200ml", name: "PLEXWELL NATURALS OMEGA SYRUP 200ml", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-syrup-150ml", name: "PLEXWELL NATURALS OMEGA SYRUP 150ml", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-codliver-oil-with-multi-vitamins-200ml", name: "PLEXWELL NATURALS CODLIVER OIL WITH MULTI VITAMINS 200ml", category: cat5 }),
  makeProduct({ id: "plexwell-s-natural-seniomega-syrup-200ml", name: "PLEXWELL SENIOMEGA SYRUP 200ml", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-vegan-omega-softgel", name: "PLEXWELL NATURALS VEGAN OMEGA SOFTGEL", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-krill-oil-softgel", name: "PLEXWELL NATURALS KRILL OIL SOFTGEL", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-gummies-adults", name: "PLEXWELL NATURALS OMEGA GUMMIES ADULTS", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-gummies-kids", name: "PLEXWELL NATURALS OMEGA GUMMIES FOR KIDS", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-3-6-9-5-in-1-formula", name: "PLEXWELL NATURALS OMEGA 3-6-9 5in1 FORMULA", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-ultra-omega-15x4-blister", name: "PLEXWELL ULTRA OMEGA 15x4 BLISTER", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-ultra-omega-n60-bottle", name: "PLEXWELL ULTRA OMEGA N60 BOTTLE", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-probiotics-curcumin-softgel", name: "PLEXWELL NATURALS OMEGA + Probiotics + Curcumin SOFTGEL", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-vit-e-softgel", name: "PLEXWELL NATURALS OMEGA + VIT E SOFTGEL", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-vit-d3-vit-e-coq10-curcumin-softgel", name: "PLEXWELL NATURALS OMEGA + VIT D3 + VIT E + CoQ10 + CURCUMIN SOFTGEL", category: cat5 }),
  makeProduct({ id: "plexwell-naturals-omega-softgel", name: "PLEXWELL NATURALS OMEGA-α SOFTGEL", category: cat5 })
);

// 6. FERROLYTE FAMILY (5 products)
const cat6 = "FERROLYTE FAMILY";
masterList.push(
  makeProduct({ id: "ferrolyte-sr-capsule", name: "FERROLYTE SR CAPSULE", category: cat6 }),
  makeProduct({ id: "ferrolyte-liquid-200ml", name: "FERROLYTE LIQUID 200ML", category: cat6 }),
  makeProduct({ id: "ferrolyte-liquid-plus-200ml", name: "FERROLYTE LIQUID PLUS 200ML", category: cat6 }),
  makeProduct({ id: "ferrolyte-gummies-for-kids", name: "FERROLYTE GUMMIES FOR KIDS", category: cat6 }),
  makeProduct({ id: "ferrolyte-eassichew-tablets-for-kids", name: "FERROLYTE EASSiCHEW TABLETS FOR KIDS", category: cat6 })
);

// 7. ANTI-AGING AGESLOW COMPLEX (6 products)
const cat7 = "ANTI-AGING AGESLOW COMPLEX";
masterList.push(
  makeProduct({ id: "age-slow-caps", name: "AGE-SLOW CAPS", category: cat7 }),
  makeProduct({ id: "age-slow-caps-70-age", name: "AGE-SLOW CAPS 70+ AGE", category: cat7 }),
  makeProduct({ id: "age-slow-complex-bitter-drops", name: "AGE-SLOW COMPLEX BITTER DROPS", category: cat7 }),
  makeProduct({ id: "age-slow-complex-gummies", name: "AGE-SLOW COMPLEX GUMMIES", category: cat7 }),
  makeProduct({ id: "age-slow-compex-powder", name: "AGE-SLOW COMPEX POWDER", category: cat7 }),
  makeProduct({ id: "age-slow-complex-shots", name: "AGE-SLOW COMPLEX SHOTS", category: cat7 })
);

// 8. PLEXWELL VITAMIN C SUPPLEMENT’S (4 products)
const cat8 = "PLEXWELL NATURALS VITAMIN C SUPPLEMENT’S";
masterList.push(
  makeProduct({ id: "plexwell-naturals-vit-c-tab", name: "PLEXWELL NATURALS VIT C+ TAB", category: cat8 }),
  makeProduct({ id: "plexwell-naturals-vit-c-effervescent", name: "PLEXWELL NATURALS VIT C+ EFFERVESCENT", category: cat8 }),
  makeProduct({ id: "plexwell-naturals-vit-c-gummies", name: "PLEXWELL NATURALS VIT C+ GUMMIES", category: cat8 }),
  makeProduct({ id: "plexwell-naturals-vit-c-powder-sachet", name: "PLEXWELL NATURALS VIT C+ POWDER SACHET", category: cat8 })
);

// 9. PLEXWELL VIT D3 SUPPLEMENT’S (10 products)
const cat9 = "PLEXWELL NATURALS VITAMIN D3 SUPPLEMENT’S";
masterList.push(
  makeProduct({ id: "plexwell-naturals-vitamin-d3-baby-drops", name: "PLEXWELL NATURALS VIT D3 BABY DROPS", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-gummies", name: "PLEXWELL NATURALS VIT D3 GUMMIES", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-tablets-for-kids-4-10-y", name: "PLEXWELL NATURALS VIT D3 TABLETS FOR KIDS 4-10 Y", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-multivitamin-syrup-3-15-y", name: "PLEXWELL NATURALS VIT D3+ MULTIVITAMIN SYRUP 3-15 Y", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-tablet-for-teens", name: "PLEXWELL Vit D3 TABLET FOR TEENS", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-5000-iu", name: "PLEXWELL NATURALS VIT D3 5000 IU ADULT", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-10000-iu", name: "PLEXWELL NATURALS VIT D3 10000 IU ADULT", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-20000-iu", name: "PLEXWELL NATURALS VIT D3 20000 IU ADULT", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-effervescent", name: "PLEXWELL NATURALS VIT D3+ EFFERVESCENT", category: cat9 }),
  makeProduct({ id: "plexwell-naturals-vitamin-d3-cod-liver-oil-omega-3-softgel", name: "PLEXWELL NATURALS VIT D3+ COD LIVER OIL + OMEGA 3 SOFTGEL", category: cat9 })
);

// 10. PLEXWELL CALCIUM + OTHER SUPPLEMENT’S (6 products)
const cat10 = "PLEXWELL NATURALS CALCIUM + OTHER SUPPLEMENT’S";
masterList.push(
  makeProduct({ id: "plexwell-naturals-kidcal-syrup-200ml", name: "PLEXWELL NATURALS KIDCAL SYRUP 200ML", category: cat10 }),
  makeProduct({ id: "plexwell-naturals-osteomax-liquid-200ml", name: "PLEXWELL NATURALS OSTEOMAX LIQUID 200ML", category: cat10 }),
  makeProduct({ id: "plexwell-naturals-osteomax-effervescent", name: "PLEXWELL NATURALS OSTEOMAX EFFERVESCENT", category: cat10 }),
  makeProduct({ id: "plexwell-naturals-osteomax-softgel", name: "PLEXWELL NATURALS OSTEOMAX+ SOFTGEL", category: cat10 }),
  makeProduct({ id: "plexwell-naturals-osteomax-tablet", name: "PLEXWELL NATURALS OSTEOMAX TABLET", category: cat10 }),
  makeProduct({ id: "plexwell-naturals-osteomax-gummies-for-kids", name: "PLEXWELL NATURALS OSTEOMAX GUMMIES FOR KIDS", category: cat10 })
);

// 11. PLEXWELL BEAUTY SUPPLEMENT’S (9 products)
const cat11 = "PLEXWELL NATURALS BEAUTY SUPPLEMENT’S";
masterList.push(
  makeProduct({ id: "plexwell-naturals-hair-skin-and-nails", name: "PLEXWELL NATURALS HAIR, SKIN AND NAILS TABLETS", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-beauty-pouch-for-her", name: "PLEXWELL NATURALS BEAUTY POUCH FOR HER", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-beauty-collagen-matrix-powder", name: "PLEXWELL NATURALS BEAUTY COLLAGEN MATRIX POWDER", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-beauty-collagen-matrix-capsule", name: "PLEXWELL NATURALS BEAUTY COLLAGEN MATRIX CAPSULE", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-beauty-skin-clear-matrix-capsule", name: "PLEXWELL NATURALS BEAUTY SKIN-CLEAR MATRIX CAPSULE", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-beauty-glow-matrix-capsule", name: "PLEXWELL NATURALS BEAUTY GLOW-MATRIX CAPSULE", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-niacinamide-250mg-tablet", name: "PLEXWELL NATURALS NIACINAMIDE 250MG TABLET", category: cat11 }),
  makeProduct({ id: "plexwell-niacinamide-500mg-tablet", name: "PLEXWELL NIACINAMIDE 500MG TABLET", category: cat11 }),
  makeProduct({ id: "plexwell-naturals-anti-acne-complex-tablet", name: "PLEXWELL NATURALS ANTI ACNE COMPLEX TABLET", category: cat11 })
);

// 12. PLEXWELL SLEEP SUPPLEMENT’S (3 products)
const cat12 = "PLEXWELL NATURALS SLEEP SUPPLEMENT’S";
masterList.push(
  makeProduct({ id: "plexwell-naturals-somna-matrix-capsule", name: "PLEXWELL NATURALS SOMNA-MATRIX CAPSULE", category: cat12 }),
  makeProduct({ id: "plexwell-naturals-somna-matrix-gummies", name: "PLEXWELL NATURALS SOMNA-MATRIX GUMMIES", category: cat12 }),
  makeProduct({ id: "plexwell-naturals-somna-matrix-spray", name: "PLEXWELL NATURALS SOMNA-MATRIX SPRAY", category: cat12 })
);

// 13. PLEXWELL EYE/VISION SUPPLEMENT’S (5 products)
const cat13 = "PLEXWELL NATURALS EYE/VISION SUPPLEMENT’S";
masterList.push(
  makeProduct({ id: "plexwell-naturals-ophthacare-junior-syrup", name: "PLEXWELL NATURALS OPHTHACARE JUNIOR SYRUP", category: cat13 }),
  makeProduct({ id: "plexwell-naturals-ophthacare-capsule", name: "PLEXWELL NATURALS OPHTHACARE CAPSULE", category: cat13 }),
  makeProduct({ id: "plexwell-naturals-ophthacare-age-60-capsule", name: "PLEXWELL NATURALS OPHTHACARE AGE 60+ CAPSULE", category: cat13 }),
  makeProduct({ id: "plexwell-naturals-ophthacare-gummies", name: "PLEXWELL NATURALS OPHTHACARE GUMMIES", category: cat13 }),
  makeProduct({ id: "plexwell-naturals-ophthacare-effervescent", name: "PLEXWELL NATURALS OPHTHACARE EFFERVESCENT", category: cat13 })
);

// 14. PLEXWELL COUGH REMEDIES (HERBAL) (4 products)
const cat14 = "PLEXWELL NATURALS COUGH REMEDIES (HERBAL)";
masterList.push(
  makeProduct({ id: "plexwell-naturals-cough-care-junior", name: "PLEXWELL NATURALS COUGH-CARE JUNIOR", category: cat14 }),
  makeProduct({ id: "plexwell-naturals-cough-care-adult", name: "PLEXWELL NATURALS COUGH-CARE", category: cat14 }),
  makeProduct({ id: "plexwell-naturals-cough-care-day-sachet", name: "PLEXWELL NATURALS COUGH-CARE DAY SACHET", category: cat14 }),
  makeProduct({ id: "plexwell-naturals-cough-care-night-sachet", name: "PLEXWELL NATURALS COUGH-CARE NIGHT SACHET", category: cat14 })
);

// 15. PLEXWELL PRE- PRO- AND POST-BIOTICS (6 products)
const cat15 = "PLEXWELL NATURALS PRE- PRO- AND POST-BIOTICS";
masterList.push(
  makeProduct({ id: "plexwell-naturals-digesmart-kids-gummies", name: "PLEXWELL NATURALS KIDS DIGESMART GUMMIES", category: cat15 }),
  makeProduct({ id: "plexwell-naturals-diacare-oral-sachet", name: "PLEXWELL NATURALS DIACARE ORAL SACHET", category: cat15 }),
  makeProduct({ id: "plexwell-naturals-tri-biotic-gummies", name: "PLEXWELL NATURALS TRI-BIOTIC GUMMIES", category: cat15 }),
  makeProduct({ id: "plexwell-naturals-flora-balance-capsule", name: "PLEXWELL NATURALS FLORA BALANCE CAPSULE", category: cat15 }),
  makeProduct({ id: "plexwell-naturals-uti-biotic-capsule", name: "PLEXWELL NATURALS UTI-BIOTIC CAPSULE", category: cat15 }),
  makeProduct({ id: "plexwell-naturals-uti-biotic-syrup-150ml", name: "PLEXWELL NATURALS UTI-BIOTIC SYRUP 150ml", category: cat15 })
);

// SINGLE INGREDIENTS FOOD SUPPLEMENTS
const singleIngredients = rawProducts.filter(p => p.category === "SINGLE INGREDIENTS FOOD SUPPLEMENTS");
masterList.push(...singleIngredients);

// SPECIAL BLEND NUTRACEUTICALS
const specialBlends = rawProducts.filter(p => p.category === "SPECIAL BLEND NUTRACEUTICALS");
masterList.push(...specialBlends);

console.log(`Total Master Products Count: ${masterList.length}`);

// Calculate breakdown by category
const categoryCounts = {};
masterList.forEach(p => {
  categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
});
console.log("Category Distribution:", categoryCounts);

fs.writeFileSync(productsPath, JSON.stringify(masterList, null, 2), 'utf8');
console.log("Successfully wrote updated products to data/products.json!");
