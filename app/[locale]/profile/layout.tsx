import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Explore information regarding Profile at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "Profile | Plexuspharmaco GmbH",
    description: "Explore information regarding Profile at Plexuspharmaco GmbH, delivering high-quality healthcare solutions globally.",
    url: "/profile",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Profile - Plexuspharmaco GmbH",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
