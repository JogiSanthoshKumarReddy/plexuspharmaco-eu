import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life",
  description: "Explore information regarding Life at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/life",
  },
  openGraph: {
    title: "Life | Plexuspharmaco GmbH",
    description: "Explore information regarding Life at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/life",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Life - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
