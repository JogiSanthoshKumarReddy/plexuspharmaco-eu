import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biogenix",
  description: "Explore information regarding Biogenix at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/sub/biogenix",
  },
  openGraph: {
    title: "Biogenix | Plexus Pharmaco Europe",
    description: "Explore information regarding Biogenix at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/sub/biogenix",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Biogenix - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
