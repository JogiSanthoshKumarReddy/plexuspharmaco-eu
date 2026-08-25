import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biocare",
  description: "Explore information regarding Biocare at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/sub/biocare",
  },
  openGraph: {
    title: "Biocare | Plexus Pharmaco Europe",
    description: "Explore information regarding Biocare at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/sub/biocare",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Biocare - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
