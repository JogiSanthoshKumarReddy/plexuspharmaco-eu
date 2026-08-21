import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Community",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
