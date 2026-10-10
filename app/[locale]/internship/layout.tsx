import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship",
  description: "Explore information regarding Internship at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/internship",
  },
  openGraph: {
    title: "Internship | Plexuspharmaco GmbH",
    description: "Explore information regarding Internship at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/internship",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Internship - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
