import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "Explore information regarding Research & Development at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research & Development | Plexuspharmaco GmbH",
    description: "Explore information regarding Research & Development at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/research",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Research & Development - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
