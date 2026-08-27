import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property",
  description: "Explore information regarding Intellectual Property at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/intellectual-property",
  },
  openGraph: {
    title: "Intellectual Property | Plexuspharmaco Europe",
    description: "Explore information regarding Intellectual Property at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/intellectual-property",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Intellectual Property - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
