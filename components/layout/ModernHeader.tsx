"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    const win = window as unknown as { changeLanguage?: (l: string) => void };
    if (typeof win.changeLanguage === 'function') {
      win.changeLanguage(lang);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-5"
      }`}
    >
      {/* Top Bar for Language Switcher (Optional, hidden on mobile for cleaner UI) */}
      <div className="hidden lg:flex justify-end items-center px-8 pb-2 border-b border-slate-100">
        <div id="google_translate_element" className="hidden"></div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <Globe className="w-4 h-4" />
          <button onClick={() => changeLanguage("en")} className="hover:text-brand-700 transition-colors">English</button>
          <button onClick={() => changeLanguage("de")} className="hover:text-brand-700 transition-colors">German</button>
          <button onClick={() => changeLanguage("fr")} className="hover:text-brand-700 transition-colors">French</button>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-50">
            <Image 
              src="/pharma/assets/images/696f65db8cb34.png" 
              alt="Plexuspharmaco Logo" 
              width={200}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-brand-900 font-medium hover:text-brand-600 transition-colors">
              Home
            </Link>
            
            {navigation.map((nav, idx) => (
              <div 
                key={idx} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-brand-900 font-medium hover:text-brand-600 transition-colors py-2">
                  {nav.title}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white rounded-xl shadow-xl border border-slate-100 transition-all duration-200 overflow-hidden ${
                    activeDropdown === idx ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-4"
                  }`}
                >
                  <div className="py-2">
                    {nav.items.map((item, i) => (
                      <Link 
                        key={i} 
                        href={item.href}
                        className="block px-6 py-3 text-sm text-brand-700 hover:bg-brand-50 hover:text-brand-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/business-enquiry" 
              className="bg-brand-700 hover:bg-brand-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden overflow-y-auto pt-24 pb-8 px-6 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-brand-900 border-b border-slate-100 pb-4">
            Home
          </Link>
          
          {navigation.map((nav, idx) => (
            <div key={idx} className="flex flex-col gap-2 border-b border-slate-100 pb-4">
              <div className="text-lg font-bold text-brand-900 mb-2">{nav.title}</div>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-brand-100">
                {nav.items.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-brand-700 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-6 mt-auto">
            <Link 
              href="/business-enquiry" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-brand-700 text-white py-4 rounded-xl font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
