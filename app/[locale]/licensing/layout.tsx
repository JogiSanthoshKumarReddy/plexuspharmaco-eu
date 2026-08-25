import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licensing",
  description: "Explore information regarding Licensing at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/licensing",
  },
  openGraph: {
    title: "Licensing | Plexus Pharmaco Europe",
    description: "Explore information regarding Licensing at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/licensing",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Licensing - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
