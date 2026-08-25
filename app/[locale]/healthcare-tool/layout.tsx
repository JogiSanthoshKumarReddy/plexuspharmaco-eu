import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Tool",
  description: "Explore information regarding Healthcare Tool at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/healthcare-tool",
  },
  openGraph: {
    title: "Healthcare Tool | Plexus Pharmaco Europe",
    description: "Explore information regarding Healthcare Tool at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/healthcare-tool",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Tool - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
