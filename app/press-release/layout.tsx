import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Release",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
