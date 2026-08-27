import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethical Standard",
  description: "Explore information regarding Ethical Standard at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/ethical-standard",
  },
  openGraph: {
    title: "Ethical Standard | Plexuspharmaco Europe",
    description: "Explore information regarding Ethical Standard at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/ethical-standard",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Ethical Standard - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
