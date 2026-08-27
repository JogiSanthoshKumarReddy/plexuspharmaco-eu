import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relation",
  description: "Access financial reports, corporate presentations, and investor updates for Plexuspharmaco Europe.",
  alternates: {
    canonical: "/investor-relation",
  },
  openGraph: {
    title: "Investor Relation | Plexuspharmaco Europe",
    description: "Access financial reports, corporate presentations, and investor updates for Plexuspharmaco Europe.",
    url: "/investor-relation",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Investor Relation - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
