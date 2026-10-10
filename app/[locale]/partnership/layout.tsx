import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership",
  description: "Explore information regarding Partnership at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/partnership",
  },
  openGraph: {
    title: "Partnership | Plexuspharmaco GmbH",
    description: "Explore information regarding Partnership at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/partnership",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Partnership - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
