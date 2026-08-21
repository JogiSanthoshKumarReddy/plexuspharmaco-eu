"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-red-100">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-brand-900 mb-4 tracking-tight">Something went wrong!</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We apologize for the inconvenience. Our team has been notified. You can try recovering the page or returning to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-brand-900 text-white font-medium rounded-xl hover:bg-brand-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-brand-900 font-medium rounded-xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
