import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Office",
  description: "Explore information regarding Global Office at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/global-office",
  },
  openGraph: {
    title: "Global Office | Plexus Pharmaco Europe",
    description: "Explore information regarding Global Office at Plexus Pharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/global-office",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Global Office - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
