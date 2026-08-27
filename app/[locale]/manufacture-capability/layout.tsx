import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacture Capability",
  description: "Discover our WHO and EU GMP-certified global manufacturing network and high-precision production facilities.",
  alternates: {
    canonical: "/manufacture-capability",
  },
  openGraph: {
    title: "Manufacture Capability | Plexuspharmaco Europe",
    description: "Discover our WHO and EU GMP-certified global manufacturing network and high-precision production facilities.",
    url: "/manufacture-capability",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Manufacture Capability - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
