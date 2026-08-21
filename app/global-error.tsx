"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
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
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 font-sans">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-red-200">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Application Error</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A critical error occurred. Our engineering team has been notified.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => reset()}
                className="px-8 py-3 bg-[#1E3A8A] text-white font-bold rounded-xl hover:bg-[#1e40af] transition-colors shadow-lg"
              >
                Reload Application
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
