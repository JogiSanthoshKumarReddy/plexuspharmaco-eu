import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiries",
  description: "Explore information regarding Inquiries at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
  alternates: {
    canonical: "/admin/inquiries",
  },
  openGraph: {
    title: "Inquiries | Plexuspharmaco Europe",
    description: "Explore information regarding Inquiries at Plexuspharmaco Europe, delivering high-quality healthcare solutions globally.",
    url: "/admin/inquiries",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Inquiries - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
