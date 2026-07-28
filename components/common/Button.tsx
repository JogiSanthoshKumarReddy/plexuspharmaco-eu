import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href = "#",
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center rounded-md px-6 py-3 font-semibold transition",
        variant === "primary"
          ? "bg-blue-700 text-white hover:bg-blue-800"
          : "border border-white text-white hover:bg-white hover:text-blue-900"
      )}
    >
      {children}
    </Link>
  );
}