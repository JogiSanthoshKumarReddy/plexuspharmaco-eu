import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Platforms",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
