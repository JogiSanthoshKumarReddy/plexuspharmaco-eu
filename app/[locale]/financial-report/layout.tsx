import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Report",
  description: "Explore information regarding Financial Report at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/financial-report",
  },
  openGraph: {
    title: "Financial Report | Plexus Pharmaco Europe",
    description: "Explore information regarding Financial Report at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/financial-report",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Financial Report - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
