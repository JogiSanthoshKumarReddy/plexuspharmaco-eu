import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Community",
  description: "Explore information regarding Health Community at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/health-community",
  },
  openGraph: {
    title: "Health Community | Plexuspharmaco Europe",
    description: "Explore information regarding Health Community at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/health-community",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Health Community - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
