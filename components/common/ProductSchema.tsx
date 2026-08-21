import Script from "next/script";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductSchema({ product }: { product: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": "https://plexuspharmaco.eu/pharma/assets/images/696f65db8cb34.png",
    "description": product.description,
    "material": product.ingredients?.map((ing: any) => `${ing.name} (${ing.dosage})`).join(', '),
    "brand": {
      "@type": "Brand",
      "name": "Plexuspharmaco"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0.00",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Plexuspharmaco Europe"
      }
    }
  };

  return (
    <Script
      id={`product-schema-${product.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
