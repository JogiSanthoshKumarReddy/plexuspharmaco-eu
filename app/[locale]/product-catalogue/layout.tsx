import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description: "Explore Plexus Pharmaco's comprehensive portfolio of high-quality, regulatory-compliant pharmaceutical and nutraceutical products.",
  alternates: {
    canonical: "/product-catalogue",
  },
  openGraph: {
    title: "Product Catalogue | Plexus Pharmaco Europe",
    description: "Explore Plexus Pharmaco's comprehensive portfolio of high-quality, regulatory-compliant pharmaceutical and nutraceutical products.",
    url: "/product-catalogue",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Product Catalogue - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
