import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description: "Explore Plexuspharmaco's comprehensive portfolio of high-quality, regulatory-compliant pharmaceutical and nutraceutical products.",
  alternates: {
    canonical: "/product-catalogue",
  },
  openGraph: {
    title: "Product Catalogue | Plexuspharmaco Europe",
    description: "Explore Plexuspharmaco's comprehensive portfolio of high-quality, regulatory-compliant pharmaceutical and nutraceutical products.",
    url: "/product-catalogue",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Product Catalogue - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
