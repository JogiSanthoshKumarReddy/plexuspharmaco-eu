const fs = require('fs');
const path = './data/products.json';

const products = JSON.parse(fs.readFileSync(path, 'utf8'));

const prodId = 'plexwell-naturals-baby-vitamin-d3-drops';
const p = products.find(prod => prod.id === prodId);

if (p) {
  p.packSizes = ["20ml and 50ml"];
  p.features = [
    "20ml Pack~330 Daily Doses | Nearly a 1-Year Supply: Emphasizes the massive economic value and convenience of the 20 mL pack size.",
    "The 400 IU dose.",
    "100% Tasteless & Odorless.",
    "Pure MCT Oil Carrier.",
    "Zero sugar, zero alcohol, zero preservatives, and free from the top 8 common allergens."
  ];
  p.ingredients = [
    { name: "Vitamin D3 (as Cholecalciferol)", dosage: "10 mcg (400 IU)", dv: "67%" }
  ];
  p.storage = "At room temperature below 25 deg C. Shelf life: 3 years.";
  p.faqs = [
    {
      question: "Why does my baby or child need Vitamin D3?",
      answer: "Vitamin D is important for normal growth and development of bones in children. It also contributes to the normal function of the immune system and helps the body absorb and use calcium and phosphorus effectively."
    },
    {
      question: "How much Vitamin D3 does each serving provide?",
      answer: "A serving of 2 drops provides 10 mcg (400 IU) of Vitamin D3. The concentrated drop format makes it easy to provide Vitamin D3 without giving a large volume of liquid."
    },
    {
      question: "How should I give PlexWell Naturals Baby Vitamin D3 Drops?",
      answer: "The serving size is 2 drops (approximately 0.06 mL). Administer the drops according to the directions on the product label. For infants and young children, consult your pediatrician or healthcare professional regarding individual Vitamin D requirements, particularly if your child is already receiving Vitamin D from other supplements or fortified foods."
    },
    {
      question: "What other ingredients are in the Vitamin D3 Drops?",
      answer: "The formula is intentionally simple. In addition to Vitamin D3, it contains organic fractionated coconut (MCT) oil as the carrier and natural mixed tocopherols as antioxidants to help maintain the freshness and stability of the oil."
    }
  ];

  fs.writeFileSync(path, JSON.stringify(products, null, 2));
  console.log('Successfully updated Baby D3 Drops data!');
} else {
  console.log('Product not found! Check the ID.');
}
