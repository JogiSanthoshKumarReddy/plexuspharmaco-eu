import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
