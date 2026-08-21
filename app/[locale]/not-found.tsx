"use client";

import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  // Extract locale from pathname if it exists (e.g. /de/something -> de), else default to en
  const pathParts = pathname ? pathname.split('/') : [];
  const locale = (pathParts.length > 1 && ['en', 'de', 'fr', 'es'].includes(pathParts[1])) ? pathParts[1] : 'en';

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-slate-50">
      <div className="relative mb-8">
        {/* Subtle decorative background blur */}
        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
        <h1 className="relative text-9xl font-bold text-slate-900 tracking-tighter drop-shadow-sm font-outfit">
          404
        </h1>
      </div>
      
      <h2 className="text-3xl font-bold text-slate-900 mb-4 font-outfit">
        Page Not Found
      </h2>
      
      <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
        <Link 
          href={`/${locale}`}
          className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        
        <button 
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.history.back();
            }
          }}
          className="group flex items-center justify-center gap-2 bg-white text-slate-700 hover:text-primary hover:bg-slate-50 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm border border-slate-200 w-full sm:w-auto"
        >
          <span>Go Back</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
