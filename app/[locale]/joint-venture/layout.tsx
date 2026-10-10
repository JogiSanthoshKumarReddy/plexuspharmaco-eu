import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joint Venture",
  description: "Explore information regarding Joint Venture at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/joint-venture",
  },
  openGraph: {
    title: "Joint Venture | Plexuspharmaco GmbH",
    description: "Explore information regarding Joint Venture at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/joint-venture",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Joint Venture - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
