"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import products from "@/data/products.json";
import { Product } from "@/types/product";

export default function FeaturedKidsProducts() {
  const params = useParams();
  const locale = params?.locale || 'en';

  // Filter only the kids products that have the new WeTransfer images
  const featuredProducts = products.filter(
    (p: Product) =>
      p.category === "Kids Health"
  ).slice(0, 8);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-600 font-bold text-sm tracking-widest uppercase mb-6 border border-accent-100">
              <Star className="w-4 h-4" fill="currentColor" /> Featured Range
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6 leading-tight">
              PlexWell Kids Supplements
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Premium, evidence-based nutritional support designed specifically for pediatric health, wellness, and cognitive development.
            </p>
          </div>
          <Link
            href={`/${locale}/product-catalogue`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-100 text-brand-700 hover:text-white hover:bg-brand-900 hover:border-brand-900 font-bold rounded-xl transition-all duration-300 shadow-sm group whitespace-nowrap"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product: Product, idx: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/${locale}/product-catalogue/${product.id}`}
                className="group block h-full bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                <div className="relative h-64 bg-slate-50/50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-50">
                  <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <Image
                    src={product.image!}
                    alt={product.name}
                    fill
                    className="object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-700 relative z-10"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-brand-600 shadow-sm border border-slate-100">
                      New
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="font-bold text-brand-900 text-lg mb-2 line-clamp-2 group-hover:text-brand-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-light line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
