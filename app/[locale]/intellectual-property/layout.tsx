import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
