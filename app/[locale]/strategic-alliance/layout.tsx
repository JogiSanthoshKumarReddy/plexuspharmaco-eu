import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Alliance",
  description: "Explore information regarding Strategic Alliance at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/strategic-alliance",
  },
  openGraph: {
    title: "Strategic Alliance | Plexuspharmaco Europe",
    description: "Explore information regarding Strategic Alliance at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/strategic-alliance",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Strategic Alliance - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
