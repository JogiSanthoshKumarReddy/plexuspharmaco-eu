"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { homepageData } from "@/data/homepage";

const slides = [
  { id: 1, image: "/assets/images/pharma_hero_lab.png" },
  { id: 2, image: "/assets/images/pharma_hero_mfg.png" },
  { id: 3, image: "/assets/images/pharma_hero_corporate.png" },
];

export default function HeroSection() {
  const { title, subtitle } = homepageData.hero;
  const [currentSlide, setCurrentSlide] = useState(0);
  const params = useParams();
  const locale = params?.locale || 'en';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-900 touch-pan-y">
      {/* Background Image Slider with Parallax and Overlay */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority={currentSlide === 0}
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-900/20" />
        </motion.div>
      </AnimatePresence>

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
            <Link href={`/${locale}/about`} className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              Discover Our Company
            </Link>
            <Link href={`/${locale}/business-enquiry`} className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === idx ? "bg-accent-500 w-8" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
