import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Opening",
  description: "Explore information regarding Job Opening at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/job-opening",
  },
  openGraph: {
    title: "Job Opening | Plexuspharmaco Europe",
    description: "Explore information regarding Job Opening at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/job-opening",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Job Opening - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
