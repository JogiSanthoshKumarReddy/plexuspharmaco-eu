"use client";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, BookOpen, Microscope, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";
import Image from "next/image";

export default function InternshipPage() {
  const highlights = [
    {
      title: "Research & Development",
      icon: Microscope,
      description: "Participate in laboratory experiments, formulation studies, analytical testing, and stability studies."
    },
    {
      title: "Regulatory Affairs",
      icon: BookOpen,
      description: "Assist in dossier preparation, regulatory submissions, and adherence to global standards like FDA and EMA."
    },
    {
      title: "Quality Assurance",
      icon: Sparkles,
      description: "Learn about GMP/GLP compliance, quality control procedures, and manufacturing best practices."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Internship & Training"
        paths={[{ name: "Careers", href: "#" }, { name: "Internship & Training" }]}
        bgImage="/assets/images/breadcrumb/event-bg.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
                <GraduationCap className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Global Healthcare</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Kickstart your career with hands-on experience
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Plexus Group, our Internship & Training programs immerse you in real-world pharmaceutical, nutraceutical, and medical device operations.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Work alongside experts in R&D, regulatory affairs, quality assurance, and production, gaining exposure to GMP, GLP, and international regulatory standards.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/resources/research.jpg"
                alt="Internship at Plexus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl">
            Apply for Internship Program <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
