export interface Product {
  id: string;
  category: string;
  name: string;
  image?: string;
  advertImage?: string;
  supplementFactsImage?: string;
  galleryImages?: string[];
  description: string;
  ingredients: { name: string; dosage: string; dv?: string }[];
  features: string[];
  faqs?: { question: string; answer: string }[];
  origin?: string;
  storage?: string;
  regulatoryCompliance?: string;
}
