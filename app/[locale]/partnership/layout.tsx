import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership",
  description: "Explore information regarding Partnership at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/partnership",
  },
  openGraph: {
    title: "Partnership | Plexus Pharmaco Europe",
    description: "Explore information regarding Partnership at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/partnership",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Partnership - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
