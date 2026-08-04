"use client";
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronRight, X, Info } from 'lucide-react';
import products from '@/data/products.json';
import BreadcrumbHero from '@/components/common/BreadcrumbHero';

export default function ProductCataloguePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Extract unique categories
  const categories = ["All Products", ...Array.from(new Set(products.map(p => p.category)))];

  // Helper to map categories to our beautiful AI generated images
  const getProductImage = (category: string) => {
    const nutraCategories = ["KID’S HEALTH", "VITAMINS", "SUPPLEMENTS", "NUTRACEUTICALS"];
    if (nutraCategories.some(cat => category.toUpperCase().includes(cat))) {
      return "/assets/images/ai/product_nutra_1785826451390.png";
    }
    return "/assets/images/ai/product_pharma_1785826440640.png";
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Product Catalogue"
        paths={[{ name: "Products", href: "/product-catalogue" }, { name: "Catalogue" }]}
        bgImage="/assets/images/ai/modern_pharma_lab.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-12">
        
        {/* Intro Section */}
        <div className="max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm"
          >
            <Info className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Global Healthcare Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">Explore Our Advanced Therapies</h2>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
            At Plexus Group, we develop integrated pharmaceutical solutions using proprietary technology platforms 
            to enhance therapeutic performance, dosing efficiency, and patient adherence. Our portfolio spans 
            across multiple therapeutic indications targeting unmet global healthcare needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-brand-900 font-bold w-full justify-center"
            >
              <Filter className="w-5 h-5" /> Filter Products
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
                <h3 className="text-2xl font-bold text-brand-900">Filters</h3>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-brand-900 hover:bg-slate-200 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sticky top-28">
                <h3 className="text-lg font-bold text-brand-900 mb-6 border-b border-slate-100 pb-4">Therapeutic Categories</h3>
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
                placeholder="Search products by name or therapeutic area..."
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
                <h3 className="text-2xl font-bold text-brand-900">{activeCategory}</h3>
                <p className="text-slate-500 mt-2 font-medium">Showing {filteredProducts.length} premium solutions</p>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              <AnimatePresence mode="popLayout">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-3xl overflow-hidden hover-lift group flex flex-col h-full bg-white border border-slate-100"
                  >
                    {/* Image Header */}
                    <div className="relative h-64 bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center overflow-hidden border-b border-slate-100">
                      <Image 
                        src={getProductImage(product.category)}
                        alt={product.name}
                        fill
                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
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
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {product.description}
                      </p>
                      
                      {/* Ingredients Section (Hover Reveal) */}
                      <div className="mt-auto flex flex-col gap-6">
                        <div className="pt-6 border-t border-slate-100">
                          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Ingredients</h5>
                          <div className="flex flex-wrap gap-2">
                            {product.ingredients.slice(0, 3).map((ing: { name: string; dosage: string }, idx: number) => (
                              <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                                {ing.name} <span className="text-slate-400 ml-1">({ing.dosage})</span>
                              </span>
                            ))}
                            {product.ingredients.length > 3 && (
                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand-50 text-brand-700 border border-brand-100">
                                +{product.ingredients.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        <Link href={`/product-catalogue/${product.id}`} className="w-full py-3 px-4 bg-brand-50 hover:bg-brand-900 text-brand-700 hover:text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-brand-100 hover:border-brand-900">
                          View Full Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
              <div className="flex justify-center mb-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="px-8 py-4 bg-brand-900 hover:bg-brand-800 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  Load More Products ({filteredProducts.length - visibleCount} remaining)
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
                <h3 className="text-2xl font-bold text-brand-900 mb-4">No products found</h3>
                <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
                  We couldn&apos;t find any products matching &quot;{searchQuery}&quot; in {activeCategory}. Please try adjusting your search terms.
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All Products"); setVisibleCount(12); }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
