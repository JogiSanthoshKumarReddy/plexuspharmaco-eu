import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore information regarding Gallery at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Plexus Pharmaco Europe",
    description: "Explore information regarding Gallery at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/gallery",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Gallery - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
