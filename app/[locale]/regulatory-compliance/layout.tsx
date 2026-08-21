import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory Compliance",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
