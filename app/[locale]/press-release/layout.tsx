import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Release",
  description: "Explore information regarding Press Release at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/press-release",
  },
  openGraph: {
    title: "Press Release | Plexuspharmaco Europe",
    description: "Explore information regarding Press Release at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/press-release",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Press Release - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
