"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homepageData } from "@/data/homepage";

export default function HeroSection() {
  const { title, subtitle } = homepageData.hero;

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-brand-900">
      {/* Background Image with Parallax and Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/images/hero-2.jpg"
          alt="Plexuspharmaco Operations"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-transparent" />
      </motion.div>

      {/* Animated Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block mb-6 px-5 py-2 rounded-full glass border-white/20 shadow-xl"
          >
            <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase">
              Global Pharmaceutical Leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl"
          >
            <span className="text-gradient-premium">{title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-2xl text-brand-50 font-light mb-10 leading-relaxed max-w-2xl drop-shadow-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/about" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              Discover Our Company
            </a>
            <a href="/business-enquiry" className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
              Partner With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
