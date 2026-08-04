"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();

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
      <div id="google_translate_element" className="opacity-0 absolute pointer-events-none w-[1px] h-[1px] overflow-hidden" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-50" aria-label="Plexuspharmaco Home">
            <Image 
              src="/pharma/assets/images/696f65db8cb34.png" 
              alt="Plexuspharmaco Logo" 
              width={200}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${pathname === "/" ? "text-brand-600" : "text-brand-900 hover:text-brand-600"}`}
            >
              Home
            </Link>
            
            {navigation.map((nav, idx) => {
              const isActive = nav.items.some(item => pathname === item.href || pathname.startsWith(item.href + '/'));
              
              return (
                <div 
                  key={idx} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    aria-expanded={activeDropdown === idx}
                    aria-controls={`mega-menu-${idx}`}
                    className={`flex items-center gap-1 font-medium transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-2 ${isActive ? "text-brand-600" : "text-brand-900 hover:text-brand-600"}`}
                  >
                    {nav.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === idx ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  <div 
                    id={`mega-menu-${idx}`}
                    role="menu"
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white rounded-xl shadow-2xl border border-slate-100 transition-all duration-200 overflow-hidden flex ${
                      activeDropdown === idx ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-4"
                    }`}
                  >
                    <div className="w-1/2 bg-slate-50 p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-brand-900 mb-2">{nav.title} Overview</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                          Explore our comprehensive offerings and commitment to advancing global healthcare through innovation and quality.
                        </p>
                      </div>
                      <Link href={nav.items[0]?.href || "/"} className="text-sm text-brand-600 font-bold hover:text-brand-800 transition-colors inline-flex items-center gap-1">
                        View All <ChevronDown className="w-3 h-3 -rotate-90" />
                      </Link>
                    </div>
                    <div className="w-1/2 py-4">
                      {nav.items.map((item, i) => (
                        <Link 
                          key={i} 
                          href={item.href}
                          role="menuitem"
                          className={`block px-6 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:bg-brand-50 ${
                            pathname === item.href 
                              ? "bg-brand-50 text-brand-900 font-bold" 
                              : "text-brand-700 hover:bg-brand-50 hover:text-brand-900"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Contact Button Desktop & Language Dropdown */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div 
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button 
                className="p-2 text-slate-600 hover:text-brand-700 hover:bg-slate-50 rounded-full transition-colors flex items-center gap-1"
                aria-label="Language Selector"
              >
                <Globe className="w-5 h-5" />
                <ChevronDown className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 transition-all duration-200 overflow-hidden ${
                  langDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {[
                    { code: "en", label: "English" },
                    { code: "de", label: "German" },
                    { code: "fr", label: "French" },
                    { code: "es", label: "Spanish" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-brand-700 hover:bg-brand-50 hover:text-brand-900 transition-colors font-medium"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/business-enquiry" 
              className="px-6 py-2.5 bg-brand-900 hover:bg-brand-800 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
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
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`text-xl font-medium border-b border-slate-100 pb-4 ${pathname === "/" ? "text-brand-600" : "text-brand-900"}`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          
          {navigation.map((nav, idx) => (
            <div key={idx} className="flex flex-col gap-2 border-b border-slate-100 pb-4">
              <div className="text-lg font-bold text-brand-900 mb-2">{nav.title}</div>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-brand-100">
                {nav.items.map((item, i) => {
                  const isItemActive = pathname === item.href;
                  return (
                    <Link 
                      key={i} 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-medium ${isItemActive ? "text-brand-900 font-bold" : "text-brand-700"}`}
                      aria-current={isItemActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
            <div className="mb-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2"><Globe className="w-4 h-4"/> Select Language</h4>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { changeLanguage("en"); setMobileMenuOpen(false); }} className="px-4 py-2 bg-slate-50 text-brand-900 font-medium rounded-lg text-sm text-left border border-slate-100">English</button>
                <button onClick={() => { changeLanguage("de"); setMobileMenuOpen(false); }} className="px-4 py-2 bg-slate-50 text-brand-900 font-medium rounded-lg text-sm text-left border border-slate-100">German</button>
                <button onClick={() => { changeLanguage("fr"); setMobileMenuOpen(false); }} className="px-4 py-2 bg-slate-50 text-brand-900 font-medium rounded-lg text-sm text-left border border-slate-100">French</button>
                <button onClick={() => { changeLanguage("es"); setMobileMenuOpen(false); }} className="px-4 py-2 bg-slate-50 text-brand-900 font-medium rounded-lg text-sm text-left border border-slate-100">Spanish</button>
              </div>
            </div>
            
            <Link 
              href="/business-enquiry" 
              className="block w-full text-center bg-brand-700 text-white py-4 rounded-xl font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
