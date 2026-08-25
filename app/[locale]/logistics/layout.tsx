import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics",
  description: "Explore information regarding Logistics at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/logistics",
  },
  openGraph: {
    title: "Logistics | Plexus Pharmaco Europe",
    description: "Explore information regarding Logistics at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/logistics",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Logistics - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
