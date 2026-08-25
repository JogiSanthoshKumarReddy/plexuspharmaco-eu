import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event",
  description: "Explore information regarding Event at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/event",
  },
  openGraph: {
    title: "Event | Plexus Pharmaco Europe",
    description: "Explore information regarding Event at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/event",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Event - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
