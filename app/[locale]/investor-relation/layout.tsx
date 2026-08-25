import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relation",
  description: "Access financial reports, corporate presentations, and investor updates for Plexus Pharmaco Europe.",
  alternates: {
    canonical: "/investor-relation",
  },
  openGraph: {
    title: "Investor Relation | Plexus Pharmaco Europe",
    description: "Access financial reports, corporate presentations, and investor updates for Plexus Pharmaco Europe.",
    url: "/investor-relation",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Investor Relation - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
