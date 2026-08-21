import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Report",
  description: "Explore information regarding Financial Report at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/financial-report",
  },
  openGraph: {
    title: "Financial Report | Plexuspharmaco Europe",
    description: "Explore information regarding Financial Report at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/financial-report",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Financial Report - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
