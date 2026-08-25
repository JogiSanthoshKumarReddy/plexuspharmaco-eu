"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-1.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-brand-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Build a Healthier Future Together?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 mb-10 leading-relaxed font-light"
          >
            Partner with Plexus Pharmaco to leverage our global manufacturing footprint, regulatory expertise, and globally integrated supply chain. 
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link 
              href="/business-enquiry" 
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/product-catalogue" 
              className="px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold rounded-xl transition-all duration-300 w-full sm:w-auto justify-center flex items-center"
            >
              View Our Products
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
