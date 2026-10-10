import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Condition",
  description: "Explore information regarding Terms Condition at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/terms-condition",
  },
  openGraph: {
    title: "Terms Condition | Plexuspharmaco GmbH",
    description: "Explore information regarding Terms Condition at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/terms-condition",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Terms Condition - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
