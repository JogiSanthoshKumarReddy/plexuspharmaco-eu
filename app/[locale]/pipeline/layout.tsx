import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline",
  description: "Explore information regarding Pipeline at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/pipeline",
  },
  openGraph: {
    title: "Pipeline | Plexuspharmaco GmbH",
    description: "Explore information regarding Pipeline at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/pipeline",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Pipeline - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
