import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "Explore information regarding Research & Development at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research & Development | Plexus Pharmaco Europe",
    description: "Explore information regarding Research & Development at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/research",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Research & Development - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
