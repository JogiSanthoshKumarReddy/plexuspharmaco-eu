const fs = require('fs');
const path = './data/products.json';

let products = JSON.parse(fs.readFileSync(path, 'utf8'));

// Find duplicates
const prodId = 'plexwell-naturals-vitamin-d3-gummies';

// Keep only the first occurrence
const firstIndex = products.findIndex(p => p.id === prodId);
if (firstIndex !== -1) {
  products = products.filter((p, index) => p.id !== prodId || index === firstIndex);
  
  const p = products[firstIndex];
  p.packSizes = ["N60"];
  p.features = [
    "Kids' Vitamin D3+ Sugar-Free Gummy",
    "The Bone-Building Duo: Vitamin D3 & K2 work together to direct calcium straight to growing bones.",
    "Immune System Support: Helps maintain a healthy, resilient immune defense all year round.",
    "Strong Teeth & Healthy Smiles: Supports optimal dental health and strong tooth enamel development.",
    "Muscle & Skeletal Growth: Promotes healthy muscle function and skeletal strength during growth spurts."
  ];
  p.ingredients = [
    { name: "Vitamin D3 (as Cholecalciferol)", dosage: "15 mcg (600 IU)", dv: "75%" },
    { name: "Vitamin K2 (as Menaquinone-7 / MK-7)", dosage: "20 mcg", dv: "17%" },
    { name: "Vitamin C (as Sodium Ascorbate)", dosage: "15 mg", dv: "17%" },
    { name: "Calcium (as Tricalcium Phosphate)", dosage: "50 mg", dv: "4%" },
    { name: "Magnesium (as Magnesium Citrate or Bisglycinate)", dosage: "20 mg", dv: "5%" },
    { name: "Avocado Fats (from Avocado Oil Powder/Lipids)", dosage: "50 mg", dv: "*" }
  ];
  p.storage = "At room temperature below 25 deg C. Shelf life: 3 years.";
  p.faqs = [
    {
      question: "What are the main benefits of PlexWell Naturals Vitamin D3 + K2 Gummies?",
      answer: "This comprehensive formula combines Vitamin D3, Vitamin K2 (MK-7), Calcium and Magnesium to support normal bone health and muscle function. Vitamin D3 also contributes to normal immune system function and supports the normal absorption and utilization of calcium."
    },
    {
      question: "Why are Vitamin D3 and Vitamin K2 combined in one gummy?",
      answer: "Vitamin D3 and K2 provide complementary nutritional support for bone health. Vitamin D3 supports calcium absorption, while Vitamin K contributes to the maintenance of normal bones. The formula uses Menaquinone-7 (MK-7) as its Vitamin K2 source for a convenient daily combination."
    },
    {
      question: "What is the purpose of avocado fats in the formula?",
      answer: "Each serving contains 50 mg of avocado-derived fats. Because Vitamins D3 and K2 are fat-soluble vitamins, including a lipid component provides a convenient formulation approach for delivering these nutrients together in a gummy."
    },
    {
      question: "How many gummies should I take each day?",
      answer: "The serving size is 2 gummies daily, providing 600 IU (15 mcg) Vitamin D3 and 20 mcg Vitamin K2, along with Vitamin C, Calcium, Magnesium and avocado-derived fats. Each bottle contains 60 gummies, providing a 30-day supply. People taking anticoagulant medication such as warfarin should consult their healthcare professional before using a Vitamin K-containing supplement."
    }
  ];

  // We should also add "Other Ingredients" if possible, but the JSON schema primarily relies on `ingredients` array. 
  // We can add it as a new field, or as a note. Let's add it to `ingredients` as a special row, or to storage string.
  // The user specifies: Other Ingredients: Organic Tapioca Syrup, Organic Cane Sugar, Purified Water, Pectin (plant-derived gelling agent), Natural Flavors, Citric Acid, Sodium Citrate, Natural Colors (Fruit and Vegetable Juices), Fractionated Coconut Oil, Carnauba Wax (to prevent sticking).
  p.otherIngredients = "Organic Tapioca Syrup, Organic Cane Sugar, Purified Water, Pectin (plant-derived gelling agent), Natural Flavors, Citric Acid, Sodium Citrate, Natural Colors (Fruit and Vegetable Juices), Fractionated Coconut Oil, Carnauba Wax (to prevent sticking).";

  fs.writeFileSync(path, JSON.stringify(products, null, 2));
  console.log('Successfully updated D3+ Gummies data and removed duplicate ID!');
} else {
  console.log('Product not found! Check the ID.');
}
