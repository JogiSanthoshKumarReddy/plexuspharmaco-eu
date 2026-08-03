"use client";
import { motion } from "framer-motion";
import { Shield, Target, FileSignature, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function IntellectualPropertyPage() {
  const principles = [
    {
      title: "Strategic Asset Management",
      icon: Target,
      description: "IP is managed to safeguard innovation while supporting long-term business sustainability."
    },
    {
      title: "Ethical Collaboration Models",
      icon: Shield,
      description: "Structured documentation and knowledge management ensure innovation remains secure and compliant."
    },
    {
      title: "Purpose-Driven Protection",
      icon: FileSignature,
      description: "Protection is used to reinforce patient benefit, quality consistency, and regulatory confidence."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Intellectual Property"
        paths={[{ name: "Innovation", href: "/research-development" }, { name: "Intellectual Property" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Protecting Innovation with Integrity and Foresight
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Intellectual Property (IP) at Plexus Group is managed as a strategic asset that safeguards innovation while supporting long-term business sustainability. 
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our IP approach focuses on protecting proprietary formulations, platform technologies, and differentiated development processes, aligned with global regulatory and commercial frameworks.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Every innovation is evaluated not only for its novelty, but also for its clinical relevance, manufacturability, regulatory robustness, and market viability.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/research-development" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-xl font-medium hover:bg-brand-800 transition-colors">
                  View Innovation Hub <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/img/i3.jpg"
                alt="Pharma IP"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => (
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

      </div>
    </div>
  );
}
