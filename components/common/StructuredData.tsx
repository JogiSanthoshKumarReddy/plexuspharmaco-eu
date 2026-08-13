import Script from "next/script";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Plexuspharmaco Europe",
    "url": "https://plexuspharmaco.eu",
    "logo": "https://plexuspharmaco.eu/pharma/assets/images/696f65db8cb34.png",
    "description": "A globally focused pharmaceutical company committed to building sustainable value through regulatory-compliant, high-quality healthcare solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 742 225 1805",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["English", "German", "French"]
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
