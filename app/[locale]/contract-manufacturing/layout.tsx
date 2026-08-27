import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description: "Explore information regarding Contract Manufacturing at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/contract-manufacturing",
  },
  openGraph: {
    title: "Contract Manufacturing | Plexuspharmaco Europe",
    description: "Explore information regarding Contract Manufacturing at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/contract-manufacturing",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Contract Manufacturing - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
