import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description: "Explore information regarding Contract Manufacturing at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/contract-manufacturing",
  },
  openGraph: {
    title: "Contract Manufacturing | Plexuspharmaco GmbH",
    description: "Explore information regarding Contract Manufacturing at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/contract-manufacturing",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Contract Manufacturing - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
