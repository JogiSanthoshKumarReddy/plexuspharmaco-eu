import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description: "Learn how Plexus Pharmaco embeds Quality by Design (QbD) across all global manufacturing and supply chain operations.",
  alternates: {
    canonical: "/quality-assurance",
  },
  openGraph: {
    title: "Quality Assurance | Plexus Pharmaco Europe",
    description: "Learn how Plexus Pharmaco embeds Quality by Design (QbD) across all global manufacturing and supply chain operations.",
    url: "/quality-assurance",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Quality Assurance - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
