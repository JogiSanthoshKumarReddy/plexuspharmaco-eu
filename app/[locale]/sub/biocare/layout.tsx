import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biocare",
  description: "Explore information regarding Biocare at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/sub/biocare",
  },
  openGraph: {
    title: "Biocare | Plexuspharmaco GmbH",
    description: "Explore information regarding Biocare at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/sub/biocare",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Biocare - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
