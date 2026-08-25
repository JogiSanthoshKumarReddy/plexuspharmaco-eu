import Script from "next/script";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductSchema({ product }: { product: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu'}${product.image}`,
    "description": product.description,
    "material": product.ingredients?.map((ing: { name: string, dosage: string }) => `${ing.name} (${ing.dosage})`).join(', '),
    "brand": {
      "@type": "Brand",
      "name": "Plexus Pharmaco"
    },
    "category": product.category
  };

  return (
    <Script
      id={`product-schema-${product.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
