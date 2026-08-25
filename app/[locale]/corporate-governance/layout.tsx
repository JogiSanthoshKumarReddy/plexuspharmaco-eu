import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Governance",
  description: "Review Plexus Pharmaco's corporate governance frameworks, ethical standards, and leadership principles.",
  alternates: {
    canonical: "/corporate-governance",
  },
  openGraph: {
    title: "Corporate Governance | Plexus Pharmaco Europe",
    description: "Review Plexus Pharmaco's corporate governance frameworks, ethical standards, and leadership principles.",
    url: "/corporate-governance",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Corporate Governance - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
