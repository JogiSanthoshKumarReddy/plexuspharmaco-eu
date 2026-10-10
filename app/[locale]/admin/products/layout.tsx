import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore information regarding Products at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/admin/products",
  },
  openGraph: {
    title: "Products | Plexuspharmaco GmbH",
    description: "Explore information regarding Products at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/admin/products",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Products - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
