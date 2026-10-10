import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics",
  description: "Explore information regarding Logistics at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/logistics",
  },
  openGraph: {
    title: "Logistics | Plexuspharmaco GmbH",
    description: "Explore information regarding Logistics at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/logistics",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Logistics - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
