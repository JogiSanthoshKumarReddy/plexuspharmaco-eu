import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Development",
  description: "Explore our robust R&D engine dedicated to complex generics, novel drug delivery systems, and advanced therapeutics.",
  alternates: {
    canonical: "/research-development",
  },
  openGraph: {
    title: "Research Development | Plexus Pharmaco Europe",
    description: "Explore our robust R&D engine dedicated to complex generics, novel drug delivery systems, and advanced therapeutics.",
    url: "/research-development",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Research Development - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
