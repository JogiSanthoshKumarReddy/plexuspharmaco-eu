import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory Compliance",
  description: "Explore information regarding Regulatory Compliance at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/regulatory-compliance",
  },
  openGraph: {
    title: "Regulatory Compliance | Plexuspharmaco GmbH",
    description: "Explore information regarding Regulatory Compliance at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/regulatory-compliance",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Regulatory Compliance - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
