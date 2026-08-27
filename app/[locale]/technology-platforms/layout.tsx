import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Platforms",
  description: "Explore information regarding Technology Platforms at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/technology-platforms",
  },
  openGraph: {
    title: "Technology Platforms | Plexuspharmaco Europe",
    description: "Explore information regarding Technology Platforms at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/technology-platforms",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Technology Platforms - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
