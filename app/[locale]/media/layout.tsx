import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
  description: "Read the latest corporate news, press releases, and media updates from Plexus Pharmaco.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media | Plexus Pharmaco Europe",
    description: "Read the latest corporate news, press releases, and media updates from Plexus Pharmaco.",
    url: "/media",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Media - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
