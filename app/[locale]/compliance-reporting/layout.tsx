import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Reporting",
  description: "Explore information regarding Compliance Reporting at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/compliance-reporting",
  },
  openGraph: {
    title: "Compliance Reporting | Plexuspharmaco Europe",
    description: "Explore information regarding Compliance Reporting at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/compliance-reporting",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Compliance Reporting - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
