"use client";
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronRight, X, Info, Download } from 'lucide-react';
import products from '@/data/products.json';
import BreadcrumbHero from '@/components/common/BreadcrumbHero';
import enDict from '@/messages/en.json';

export default function ProductCatalogueClient({ locale }: { locale: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  // Get initial state from URL or defaults
  const initialSearch = searchParams?.get('search') || "";
  const initialCategory = searchParams?.get('category') || "All Products";
  const initialSegment = searchParams?.get('segment') || null;

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSegment, setActiveSegment] = useState<string | null>(initialSegment);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync state to URL without reloading
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (activeCategory && activeCategory !== "All Products") params.set('category', activeCategory);
    if (activeSegment) params.set('segment', activeSegment);
    
    // We use router.replace to avoid filling up the history stack on every keystroke
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchQuery, activeCategory, activeSegment, pathname, router]);

  // Filter products by segment first
  const segmentProducts = useMemo(() => {
    if (!activeSegment) return [];
    return products.filter(p => p.segment === activeSegment || (!p.segment && activeSegment === 'Pharmaceuticals')); // Default old products to Pharmaceuticals
  }, [activeSegment]);

  // Extract unique categories for the active segment
  const categories = useMemo(() => {
    return ["All Products", ...Array.from(new Set(segmentProducts.map(p => p.category)))];
  }, [segmentProducts]);

  // Helper to map categories to our product images
  const getProductImage = (category: string) => {
    const nutraCategories = ["KID’S HEALTH", "VITAMINS", "SUPPLEMENTS", "NUTRACEUTICALS"];
    if (nutraCategories.some(cat => category.toUpperCase().includes(cat))) {
      return "/assets/images/pharma_product_nutra.png";
    }
    return "/assets/images/pharma_product_pharma.png";
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return segmentProducts.filter(p => {
      const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, segmentProducts]);

  const dict = enDict.catalogue; // In a real app, pick dictionary based on locale prop

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title={dict.title}
        paths={[{ name: "Products", href: `/${locale}/product-catalogue` }, { name: dict.breadcrumb }]}
        bgImage="/assets/images/pharma_hero_lab.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-12">
        
        {/* Intro Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-12 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-4 shadow-sm">
              <Info className="w-4 h-4 text-brand-700" />
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">{dict.global_portfolio}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-3 leading-tight">{dict.explore_therapies}</h2>
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
              {dict.description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="/assets/pdfs/Plexuspharmaco_Product_Catalogue_2026.pdf" 
              download="Plexuspharmaco_Product_Catalogue_2026.pdf"
              className="inline-flex items-center gap-3 px-6 py-4 bg-brand-900 hover:bg-brand-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 text-accent-400" /> Download Full Catalogue (PDF)
            </a>
          </div>
        </motion.div>

        {!activeSegment ? (
          /* Segments Landing Page */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { id: 'Nutraceuticals', title: 'Nutraceuticals', desc: 'Premium dietary supplements and natural health products.', icon: '/assets/images/pharma_product_nutra.png' },
              { id: 'Medical Devices', title: 'Medical Devices', desc: 'Advanced medical technology and diagnostic tools.', icon: '/assets/images/pharma_product_pharma.png' },
              { id: 'Pharmaceuticals', title: 'Pharmaceuticals', desc: 'Prescription medications and therapeutic treatments.', icon: '/assets/images/pharma_product_pharma.png' },
            ].map(segment => (
              <button 
                key={segment.id}
                onClick={() => { setActiveSegment(segment.id); setActiveCategory('All Products'); setVisibleCount(12); }}
                className="group flex flex-col items-center p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center"
              >
                <div className="w-32 h-32 mb-8 relative bg-brand-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Image src={segment.icon} alt={segment.title} fill className="object-contain p-6 mix-blend-multiply" />
                </div>
                <h3 className="text-3xl font-bold text-brand-900 mb-4 group-hover:text-brand-700">{segment.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{segment.desc}</p>
                <div className="mt-8 px-6 py-3 bg-brand-50 text-brand-700 rounded-full font-bold group-hover:bg-brand-900 group-hover:text-white transition-colors flex items-center gap-2">
                  View Catalogue <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Back to segments button */}
            <div className="w-full lg:hidden mb-4">
              <button onClick={() => setActiveSegment(null)} className="text-brand-600 font-bold flex items-center gap-2 hover:text-brand-900">
                <ChevronRight className="w-5 h-5 rotate-180" /> Back to Categories
              </button>
            </div>
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-brand-900 font-bold w-full justify-center"
            >
              <Filter className="w-5 h-5" /> {dict.filter_products}
            </button>
          </div>

          {/* Sidebar / Categories */}
          <div className={`
            fixed inset-0 z-50 bg-brand-900/40 backdrop-blur-sm transition-all duration-300 lg:static lg:bg-transparent lg:backdrop-blur-none lg:z-auto lg:w-1/4 lg:block
            ${isMobileFiltersOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}
          `}>
            <div className={`
              absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-6 transition-transform duration-300 lg:static lg:w-full lg:shadow-none lg:p-0 lg:translate-x-0
              ${isMobileFiltersOpen ? "translate-x-0" : "translate-x-full"}
            `}>
              <div className="flex justify-between items-center mb-8 lg:hidden">
                <h3 className="text-2xl font-bold text-brand-900">{dict.filters}</h3>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-brand-900 hover:bg-slate-200 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sticky top-28">
                <h3 className="text-lg font-bold text-brand-900 mb-6 border-b border-slate-100 pb-4">{dict.therapeutic_categories}</h3>
                <ul className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => { setActiveCategory(cat); setIsMobileFiltersOpen(false); setVisibleCount(12); }}
                        className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                          activeCategory === cat 
                            ? "bg-brand-50 text-brand-700 shadow-sm border border-brand-100" 
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-900 border border-transparent"
                        }`}
                      >
                        <span className="line-clamp-2">{cat}</span>
                        {activeCategory === cat ? (
                          <ChevronRight className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-slate-400" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="w-full lg:w-3/4">
            
            {/* Search Bar */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-2 mb-8 flex items-center gap-4 transition-all focus-within:shadow-md focus-within:border-brand-300">
              <div className="pl-6">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <input 
                type="text"
                placeholder={dict.search_placeholder}
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(12); }}
                className="w-full bg-transparent border-none focus:ring-0 text-brand-900 font-medium placeholder:text-slate-400 placeholder:font-normal text-lg py-4 outline-none"
              />
              {searchQuery && (
                <div className="pr-4">
                  <button onClick={() => { setSearchQuery(""); setVisibleCount(12); }} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Results Header */}
            <div className="mb-8 flex justify-between items-end border-b border-slate-200 pb-4">
              <div>
                <button onClick={() => setActiveSegment(null)} className="hidden lg:flex text-brand-600 font-bold items-center gap-2 hover:text-brand-900 mb-4 bg-brand-50 px-4 py-2 rounded-lg w-fit transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-180" /> Back to Main Categories
                </button>
                <h3 className="text-3xl font-bold text-brand-900 mb-2">{activeSegment} <span className="text-slate-300 mx-2">|</span> {activeCategory}</h3>
                <p className="text-slate-500 font-medium">
                  {dict.showing} {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length} {dict.premium_solutions}
                </p>
              </div>
            </div>

            {/* Smooth Product Grid Transition */}
            <motion.div 
              key={`${activeSegment}-${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
            >
              {filteredProducts.slice(0, visibleCount).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
                  className="glass-card rounded-3xl overflow-hidden hover-lift group flex flex-col h-full bg-white border border-slate-100"
                >
                  {/* Image Header */}
                  <div className="relative h-72 bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center overflow-hidden border-b border-slate-100">
                    <Image 
                      src={product.image || getProductImage(product.category)}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={idx < 6}
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand-700 shadow-sm border border-slate-100 shadow-brand-900/5">
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Content Body */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-700 transition-colors line-clamp-2">
                      {product.name}
                    </h4>
                    {product.description ? (
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {product.description}
                      </p>
                    ) : (
                      <p className="text-slate-400 italic text-sm leading-relaxed mb-6">
                        Product details pending verification.
                      </p>
                    )}
                    
                    {/* Ingredients Section */}
                    <div className="mt-auto flex flex-col gap-6">
                      <div className="pt-6 border-t border-slate-100">
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{dict.key_ingredients}</h5>
                        {product.ingredients && product.ingredients.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {product.ingredients.slice(0, 3).map((ing: { name: string; dosage: string }, idx: number) => (
                              <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                                {ing.name} <span className="text-slate-400 ml-1">({ing.dosage})</span>
                              </span>
                            ))}
                            {product.ingredients.length > 3 && (
                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand-50 text-brand-700 border border-brand-100">
                                +{product.ingredients.length - 3} {dict.more}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm italic text-slate-400">Ingredients pending verification.</span>
                        )}
                      </div>
                      <Link href={`/${locale}/product-catalogue/${product.id}`} className="w-full py-3 px-4 bg-brand-50 hover:bg-brand-900 text-brand-700 hover:text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-brand-100 hover:border-brand-900">
                        {dict.view_full_details} <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
              <div className="flex justify-center mb-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="px-8 py-4 bg-brand-900 hover:bg-brand-800 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  {dict.load_more} ({Math.min(12, filteredProducts.length - visibleCount)} {dict.remaining})
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-3xl p-16 text-center shadow-sm border border-slate-100"
              >
                <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-brand-300" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-4">{dict.no_products_found}</h3>
                <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
                  {dict.no_products_desc} &quot;{searchQuery}&quot; {dict.in} {activeCategory}. {dict.adjust_search}
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All Products"); setVisibleCount(12); }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  {dict.clear_filters}
                </button>
              </motion.div>
            )}

          </div>
        </div>
        )}
      </div>
    </div>
  );
}
