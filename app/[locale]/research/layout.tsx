import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "Explore Plexuspharmaco's cutting-edge R&D, clinical support, and formulation development capabilities.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
