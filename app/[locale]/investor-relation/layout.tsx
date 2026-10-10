import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relation",
  description: "Access financial reports, corporate presentations, and investor updates for Plexuspharmaco GmbH.",
  alternates: {
    canonical: "/investor-relation",
  },
  openGraph: {
    title: "Investor Relation | Plexuspharmaco GmbH",
    description: "Access financial reports, corporate presentations, and investor updates for Plexuspharmaco GmbH.",
    url: "/investor-relation",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Investor Relation - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
