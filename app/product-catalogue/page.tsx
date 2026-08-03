"use client";
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronRight, X } from 'lucide-react';
import products from '@/data/products.json';
import BreadcrumbHero from '@/components/common/BreadcrumbHero';

export default function ProductCataloguePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique categories
  const categories = ["All Products", ...Array.from(new Set(products.map(p => p.category)))];

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
        bgImage="/assets/images/breadcrumb/breadcrumb-2.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-12">
        
        {/* Intro Section */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Explore Our Advanced Therapies</h2>
          <p className="text-lg text-brand-600 leading-relaxed">
            At Plexus Group, we develop integrated pharmaceutical solutions using proprietary technology platforms 
            to enhance therapeutic performance, dosing efficiency, and patient adherence. Our portfolio spans 
            across multiple therapeutic indications targeting unmet global healthcare needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-brand-900 font-medium w-full justify-center"
            >
              <Filter className="w-5 h-5" /> Filter Products
            </button>
          </div>

          {/* Sidebar / Categories */}
          <div className={`
            fixed inset-0 z-50 bg-white/80 backdrop-blur-sm transition-all duration-300 lg:static lg:bg-transparent lg:backdrop-blur-none lg:z-auto lg:w-1/4 lg:block
            ${isMobileFiltersOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}
          `}>
            <div className={`
              absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 transition-transform duration-300 lg:static lg:w-full lg:shadow-none lg:p-0 lg:translate-x-0
              ${isMobileFiltersOpen ? "translate-x-0" : "translate-x-full"}
            `}>
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="text-xl font-bold text-brand-900">Filters</h3>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 text-slate-500 hover:text-brand-900">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-28">
                <h3 className="text-lg font-bold text-brand-900 mb-4 border-b border-slate-100 pb-4">Categories</h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => { setActiveCategory(cat); setIsMobileFiltersOpen(false); }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                          activeCategory === cat 
                            ? "bg-brand-50 text-brand-700 shadow-inner" 
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-900"
                        }`}
                      >
                        {cat}
                        {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
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
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-8 flex items-center gap-4">
              <Search className="w-6 h-6 text-slate-400 ml-2" />
              <input 
                type="text"
                placeholder="Search products by name or therapeutic area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-brand-900 placeholder:text-slate-400 text-lg py-2 outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Results Header */}
            <div className="mb-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-brand-900">{activeCategory}</h3>
                <p className="text-slate-500 mt-1">Showing {filteredProducts.length} products</p>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                  >
                    <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center">
                      {/* Image placeholder handling */}
                      <Image 
                        src={product.image.includes('placeholder') ? '/assets/images/resources/no-image.jpg' : product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-700 border border-brand-100">
                        {product.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-brand-900 mb-3 line-clamp-2">{product.name}</h4>
                      <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-grow">
                        {product.description}
                      </p>
                      
                      <button className="w-full py-3 px-4 bg-brand-50 hover:bg-brand-900 text-brand-700 hover:text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                        View Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center shadow-sm">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-2">No products found</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                We couldn&apos;t find any products matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All Products"); }}
                className="mt-6 px-6 py-2 bg-brand-50 text-brand-700 font-medium rounded-lg hover:bg-brand-100 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
