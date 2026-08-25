import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Discover our commitment to environmental responsibility, green chemistry, and sustainable pharmaceutical manufacturing.",
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Sustainability | Plexus Pharmaco Europe",
    description: "Discover our commitment to environmental responsibility, green chemistry, and sustainable pharmaceutical manufacturing.",
    url: "/sustainability",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Sustainability - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
