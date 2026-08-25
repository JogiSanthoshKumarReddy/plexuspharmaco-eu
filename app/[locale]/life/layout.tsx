import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life",
  description: "Explore information regarding Life at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/life",
  },
  openGraph: {
    title: "Life | Plexus Pharmaco Europe",
    description: "Explore information regarding Life at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/life",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Life - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
