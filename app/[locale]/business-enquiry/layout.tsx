import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Enquiry",
  description: "Partner with Plexus Pharmaco. Contact our global business development team for distribution, licensing, and manufacturing inquiries.",
  alternates: {
    canonical: "/business-enquiry",
  },
  openGraph: {
    title: "Business Enquiry | Plexus Pharmaco Europe",
    description: "Partner with Plexus Pharmaco. Contact our global business development team for distribution, licensing, and manufacturing inquiries.",
    url: "/business-enquiry",
    images: [
      {
        url: "/assets/images/pharma_hero_corporate.png",
        width: 1200,
        height: 630,
        alt: "Business Enquiry - Plexus Pharmaco Europe",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
