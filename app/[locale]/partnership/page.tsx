
"use client";
import { motion } from "framer-motion";
import { Handshake, Network, Globe2, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function PartnershipPage() {
  const pillars = [
    {
      title: "Collaborative Innovation",
      icon: Handshake,
      description: "We actively pursue partnership opportunities that align with our strategic vision of delivering innovative healthcare solutions."
    },
    {
      title: "Transparent Framework",
      icon: Network,
      description: "Whether out-licensing breakthrough therapies or exploring co-development, we offer a transparent, agile partnership framework."
    },
    {
      title: "Global Scaling",
      icon: Globe2,
      description: "Our extensive network and regulatory expertise ensure partners can rapidly scale operations and navigate complex markets."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Partnership Opportunities"
        paths={[{ name: "Partnering", href: "/" }, { name: "Opportunities" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-brand-100"
            >
              <Image 
                src="/assets/images/resources/strategy.jpg"
                alt="Strategic Partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 shadow-sm">
                <Handshake className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Growth Together</span>
              </div>
              
              <h2 className="text-4xl font-bold text-brand-900 mb-6 leading-tight">
                Unlocking Global Potential through Strategic Partnerships
              </h2>
              
              <p className="text-lg text-brand-600 mb-6 leading-relaxed">
                We believe that the future of healthcare is collaborative. Plexus Pharmaco actively pursues partnership opportunities that align with our strategic vision of delivering innovative, high-quality healthcare solutions globally.
              </p>
              
              <p className="text-lg text-brand-600 leading-relaxed mb-8">
                Whether you are looking to out-license breakthrough therapies, explore co-development opportunities, or establish robust commercialization agreements, Plexus offers a transparent, agile, and mutually beneficial partnership framework.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Models CTA */}
        <div className="bg-brand-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Explore Our Partnership Models</h3>
            <p className="text-brand-200 text-lg mb-10 leading-relaxed">
              We offer multiple avenues for collaboration across the pharmaceutical value chain. Explore the model that best fits your strategic objectives.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/strategic-alliance" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                Strategic Alliances
              </Link>
              <Link href="/joint-venture" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                Joint Ventures
              </Link>
              <Link href="/licensing" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                Licensing
              </Link>
              <Link href="/contract-manufacturing" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                Contract Manufacturing
              </Link>
              <Link href="/business-enquiry" className="px-6 py-3 bg-white text-brand-900 hover:bg-brand-50 rounded-xl font-bold transition-colors flex items-center gap-2 mt-4 sm:mt-0">
                Contact Partnering Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
