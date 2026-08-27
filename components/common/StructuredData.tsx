import Script from "next/script";

export default function StructuredData({ locale = 'en' }: { locale?: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Plexuspharmaco Europe",
    "url": `${baseUrl}/${locale}`,
    "logo": `${baseUrl}/pharma/assets/images/696f65db8cb34.png`,
    "description": "A globally focused Healthcare company committed to building sustainable value through regulatory-compliant, high-quality healthcare solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49 1525 5460529",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/plexuspharmaco"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
