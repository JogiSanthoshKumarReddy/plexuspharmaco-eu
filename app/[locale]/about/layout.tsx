import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Plexuspharmaco, a global pharmaceutical company dedicated to innovation, quality, and improving patient outcomes worldwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Plexuspharmaco Europe",
    description: "Learn about Plexuspharmaco, a global pharmaceutical company dedicated to innovation, quality, and improving patient outcomes worldwide.",
    url: "/about",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "About - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
