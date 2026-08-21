import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Alliance",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
