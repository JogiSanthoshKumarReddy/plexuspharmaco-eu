import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distributorship",
  description: "Explore information regarding Distributorship at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/distributorship",
  },
  openGraph: {
    title: "Distributorship | Plexuspharmaco Europe",
    description: "Explore information regarding Distributorship at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/distributorship",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Distributorship - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
