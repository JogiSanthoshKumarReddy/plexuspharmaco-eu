"use client";
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronRight, X, FlaskConical, Target, Activity, CheckCircle2 } from 'lucide-react';
import products from '@/data/products.json';
import BreadcrumbHero from '@/components/common/BreadcrumbHero';

export default function PipelinePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All Categories");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique categories
  const categories = ["All Categories", ...Array.from(new Set(products.map(p => p.category)))];

  // Filter pipeline data (for now we use products JSON, you could substitute a pipeline.json)
  const filteredPipeline = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === "All Categories" || p.category === activeCategory;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="R&D Pipeline"
        paths={[{ name: "Innovation", href: "/" }, { name: "Pipeline" }]}
        bgImage="/assets/images/ai/hero_slide_2.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-12">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Pipeline / Under Development</h2>
            <p className="text-lg text-brand-600 leading-relaxed mb-4">
              At Plexus Group of Companies, our development pipeline reflects a forward-looking, science-led approach to building a strong and sustainable future portfolio. Ongoing R&D initiatives focus on formulation enhancement, differentiated delivery systems, and lifecycle value creation across key therapeutic segments.
            </p>
            <p className="text-lg text-brand-600 leading-relaxed">
              Guided by Quality by Design (QbD) principles and regulatory foresight, our pipeline emphasizes improved bioavailability, stability, safety, and patient-centric performance while ensuring global compliance readiness.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-brand-100">
              <Image 
                src="/assets/images/resources/pipeline.jpg"
                alt="Pharma Pipeline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* Development Phases Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {[
            { phase: "Phase I", icon: FlaskConical, desc: "Discovery & Early Formulation" },
            { phase: "Phase II", icon: Target, desc: "Clinical Safety & Dosage" },
            { phase: "Phase III", icon: Activity, desc: "Efficacy & Large Scale Trials" },
            { phase: "Regulatory", icon: CheckCircle2, desc: "Filing & Market Approval" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-900 mb-1">{item.phase}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-brand-900 font-medium w-full justify-center"
            >
              <Filter className="w-5 h-5" /> Filter Pipeline
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
                <h3 className="text-lg font-bold text-brand-900 mb-4 border-b border-slate-100 pb-4">Therapeutic Areas</h3>
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

          {/* Pipeline Data Area */}
          <div className="w-full lg:w-3/4">
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-8 flex items-center gap-4">
              <Search className="w-6 h-6 text-slate-400 ml-2" />
              <input 
                type="text"
                placeholder="Search pipeline candidates..."
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-brand-900">{activeCategory} Candidates</h3>
              <p className="text-slate-500 mt-1">Found {filteredPipeline.length} active programs</p>
            </div>

            {/* Pipeline List View (Different from Product Grid to signify R&D) */}
            <div className="flex flex-col gap-4">
              <AnimatePresence mode="popLayout">
                {filteredPipeline.map((program) => (
                  <motion.div
                    key={program.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="w-full md:w-32 h-32 bg-slate-50 rounded-xl flex items-center justify-center p-4 border border-slate-100 flex-shrink-0">
                         <Image 
                          src={program.image.includes('placeholder') ? '/assets/images/resources/no-image.jpg' : program.image}
                          alt={program.name}
                          width={80}
                          height={80}
                          className="object-contain mix-blend-multiply"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-100 mb-3">
                          {program.category}
                        </div>
                        <h4 className="text-xl font-bold text-brand-900 mb-2">{program.name}</h4>
                        <p className="text-slate-600 line-clamp-2 text-sm">{program.description}</p>
                      </div>

                      {/* Mock Progress Bar for Pipeline Phase */}
                      <div className="w-full md:w-48 flex-shrink-0 mt-4 md:mt-0">
                        <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                          <span>Phase II</span>
                          <span>Phase III</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          {/* Use consistent progress based on id length to avoid impurity */}
                          <div className={`h-full bg-accent-500 rounded-full`} style={{ width: `${Math.min(90, Math.max(30, program.id.length * 5))}%` }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredPipeline.length === 0 && (
                <div className="py-24 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-slate-100">
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <Search className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-2">No programs found</h3>
                  <p className="text-slate-500 max-w-md">
                    We couldn&apos;t find any development programs matching &quot;{searchQuery}&quot;.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
