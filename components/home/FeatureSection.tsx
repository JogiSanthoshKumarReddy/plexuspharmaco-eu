"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  linkText?: string;
  linkHref?: string;
  reverse?: boolean;
}

export default function FeatureSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  linkText,
  linkHref,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-padding">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold tracking-wider uppercase mb-2 border border-brand-100">
              {subtitle}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              {description}
            </p>
            
            {linkText && linkHref && (
              <div className="pt-4">
                <Link href={linkHref} className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 group">
                  {linkText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
