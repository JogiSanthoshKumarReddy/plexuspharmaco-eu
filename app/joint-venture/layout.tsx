import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joint Venture",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
