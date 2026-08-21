import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Enquiry",
  description: "Partner with Plexuspharmaco. Contact our global business development team for distribution, licensing, and manufacturing inquiries.",
  alternates: {
    canonical: "/business-enquiry",
  },
  openGraph: {
    title: "Business Enquiry | Plexuspharmaco Europe",
    description: "Partner with Plexuspharmaco. Contact our global business development team for distribution, licensing, and manufacturing inquiries.",
    url: "/business-enquiry",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Business Enquiry - Plexuspharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
