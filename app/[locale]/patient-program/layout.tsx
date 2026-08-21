import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Program",
  description: "Explore information regarding Patient Program at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/patient-program",
  },
  openGraph: {
    title: "Patient Program | Plexuspharmaco Europe",
    description: "Explore information regarding Patient Program at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/patient-program",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Patient Program - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
