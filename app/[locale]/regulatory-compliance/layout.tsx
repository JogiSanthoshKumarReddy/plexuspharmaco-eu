import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory Compliance",
  description: "Explore information regarding Regulatory Compliance at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/regulatory-compliance",
  },
  openGraph: {
    title: "Regulatory Compliance | Plexus Pharmaco Europe",
    description: "Explore information regarding Regulatory Compliance at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/regulatory-compliance",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Regulatory Compliance - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
