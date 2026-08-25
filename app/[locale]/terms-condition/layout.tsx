import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Condition",
  description: "Explore information regarding Terms Condition at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/terms-condition",
  },
  openGraph: {
    title: "Terms Condition | Plexus Pharmaco Europe",
    description: "Explore information regarding Terms Condition at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/terms-condition",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Terms Condition - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
