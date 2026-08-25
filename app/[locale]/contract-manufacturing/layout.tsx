import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description: "Explore information regarding Contract Manufacturing at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/contract-manufacturing",
  },
  openGraph: {
    title: "Contract Manufacturing | Plexus Pharmaco Europe",
    description: "Explore information regarding Contract Manufacturing at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/contract-manufacturing",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Contract Manufacturing - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
