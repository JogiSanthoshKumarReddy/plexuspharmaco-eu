
"use client";
import { motion } from "framer-motion";
import { Microscope, FlaskConical, ShieldCheck, Factory, Dna, FileCheck, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";

import VideoSectionPlayer from "@/components/common/VideoSectionPlayer";

export default function ResearchDevelopmentHubPage() {
  const sections = [
    {
      title: "Research & Development",
      href: "/research",
      description: "Explore our advanced pharmaceutical R&D capabilities, from molecule discovery to clinical-stage development.",
      icon: Microscope,
    },
    {
      title: "Manufacturing Capabilities",
      href: "/manufacture-capability",
      description: "globally integrated manufacturing infrastructure aligned with WHO-GMP, EU-GMP, and other international standards.",
      icon: Factory,
    },
    {
      title: "Quality Assurance & Compliance",
      href: "/quality-assurance",
      description: "Robust QA systems ensuring product safety, efficacy, and regulatory compliance across all markets.",
      icon: ShieldCheck,
    },
    {
      title: "Contract Manufacturing",
      href: "/contract-manufacturing",
      description: "End-to-end CMO/CDMO services tailored to your regulatory environment and product specifications.",
      icon: FlaskConical,
    },
    {
      title: "Technology Platforms",
      href: "/technology-platforms",
      description: "Proprietary technology platforms driving differentiated formulations with enhanced therapeutic performance.",
      icon: Dna,
    },
    {
      title: "Regulatory Compliance",
      href: "/regulatory-compliance",
      description: "Dedicated regulatory affairs support for submissions, registrations, and ongoing compliance monitoring.",
      icon: FileCheck,
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="R&D, Manufacturing & Quality"
        paths={[{ name: "Innovation", href: "/" }, { name: "R&D Hub" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Integrated Scientific Excellence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            At Plexuspharmaco, our commitment to scientific excellence spans the entire pharmaceutical lifecycle. Explore our core capabilities in research, advanced manufacturing, and rigorous quality assurance.
          </motion.p>
        </div>

        {/* R&D Video Showcase */}
        <VideoSectionPlayer
          videoUrl="/assets/videos/plexus_rd_laboratory.mp4"
          posterUrl="/assets/images/pharma_video_poster_rd.jpg"
          title="Inside Plexuspharmaco Advanced R&D Laboratories"
          subtitle="Discover analytical chemistry, bioequivalence formulation research, and continuous drug delivery innovation."
          badge="R&D Laboratory Video Showcase"
        />

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                <section.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-700 transition-colors">
                {section.title}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow">
                {section.description}
              </p>
              
              <Link href={section.href} className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900 transition-colors mt-auto">
                Explore Capabilities <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
