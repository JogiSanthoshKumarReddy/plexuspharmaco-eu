import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Explore information regarding Profile at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "Profile | Plexus Pharmaco Europe",
    description: "Explore information regarding Profile at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/profile",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Profile - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
