"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowRight, UserPlus, Heart, GraduationCap, TrendingUp, Sparkles, Building2, Coffee, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function JobOpeningPage() {
  const benefits = [
    { icon: Heart, title: "Comprehensive Health", description: "Premium medical, dental, and vision coverage for you and your family." },
    { icon: TrendingUp, title: "Competitive Comp", description: "Top-tier base salaries, performance bonuses, and stock options." },
    { icon: GraduationCap, title: "Continuous Learning", description: "Tuition reimbursement and dedicated time for professional development." },
    { icon: Sparkles, title: "Work-Life Balance", description: "Flexible working hours and generous paid time off (PTO) policies." },
    { icon: Building2, title: "Global Mobility", description: "Opportunities to relocate and work at our global hubs in Europe and Asia." },
    { icon: Coffee, title: "Wellness Programs", description: "On-site gyms, mental health support, and holistic wellness stipends." }
  ];

  const jobs = [
    { 
      title: "Senior Formulation Scientist", 
      dept: "R&D", 
      location: "Altendorf, Germany", 
      type: "Full-Time",
      description: "As a Senior Formulation Scientist, you will lead the development of innovative oral and injectable drug delivery systems. You will collaborate with analytical and clinical teams to ensure new formulations meet international stability and bioavailability standards. The ideal candidate has 7+ years of pharmaceutical formulation experience and a strong background in QbD (Quality by Design)."
    },
    { 
      title: "Regulatory Affairs Manager", 
      dept: "Compliance", 
      location: "Frankfurt, Germany", 
      type: "Full-Time",
      description: "You will be responsible for overseeing global regulatory submissions (EMA, FDA, MHRA). Your role ensures that our expanding portfolio of specialized medicines complies with all international guidelines. This requires deep knowledge of eCTD publishing and life-cycle management of pharmaceutical products."
    },
    { 
      title: "Quality Assurance Lead", 
      dept: "Quality", 
      location: "Berlin, Germany", 
      type: "Full-Time",
      description: "The QA Lead will manage the quality management systems (QMS) across our European manufacturing sites. You will lead internal audits, manage CAPAs, and ensure strict adherence to EU-GMP guidelines to guarantee product safety and efficacy."
    },
    { 
      title: "Global Supply Chain Director", 
      dept: "Logistics", 
      location: "Remote / Europe", 
      type: "Full-Time",
      description: "Drive the strategic optimization of our global pharmaceutical supply chain. You will manage end-to-end logistics, from active pharmaceutical ingredient (API) sourcing to final distribution, ensuring cold-chain integrity and cost efficiency across 45+ countries."
    },
    { 
      title: "Clinical Trial Coordinator", 
      dept: "Clinical", 
      location: "Munich, Germany", 
      type: "Full-Time",
      description: "Coordinate phase II and phase III oncology clinical trials. You will be the primary liaison between clinical research organizations (CROs), hospitals, and internal stakeholders, ensuring data integrity, patient safety, and strict protocol adherence."
    },
    { 
      title: "Summer Internship (Pharma)", 
      dept: "R&D", 
      location: "Altendorf, Germany", 
      type: "Internship",
      description: "A 12-week intensive program designed for rising seniors and recent graduates in life sciences. You will gain hands-on experience in modern laboratory techniques, shadow senior scientists, and present a capstone project to our executive leadership team."
    }
  ];

  const [activeDept, setActiveDept] = useState("All");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const departments = ["All", ...Array.from(new Set(jobs.map(j => j.dept)))];
  const filteredJobs = activeDept === "All" ? jobs : jobs.filter(j => j.dept === activeDept);

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Careers & Culture"
        paths={[{ name: "Corporate", href: "/" }, { name: "Careers" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Build a Career with Purpose
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-light"
          >
            At Plexus Pharmaco, you aren&apos;t just taking a job—you are joining a global mission to extend and improve human life. We foster an inclusive, high-performance culture that empowers our people to innovate, grow, and lead.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-brand-900 mb-10 text-center">Why Join Plexus Pharmaco?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 text-brand-700">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Culture & Learning */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image 
                src="/assets/images/pharma_hero_corporate.png"
                alt="Plexus Pharmaco Culture"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-900 mb-6">A Culture of Excellence & Learning</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We believe our greatest asset is our talent. We invest heavily in our &quot;Future Leaders Program,&quot; providing mentorship from industry veterans, cross-functional rotations, and executive coaching.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you are a seasoned pharmaceutical executive or a recent science graduate entering our robust Internship Program, Plexus Pharmaco offers a defined trajectory for your ambitions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-brand-900 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-500" /> Executive Mentorship</li>
                <li className="flex items-center gap-3 text-brand-900 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-500" /> Cross-Border Assignments</li>
                <li className="flex items-center gap-3 text-brand-900 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-500" /> Advanced Degree Sponsorship</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 pb-8">
            <div>
              <h3 className="text-3xl font-bold text-brand-900 mb-2">Open Positions</h3>
              <p className="text-slate-500">Join our growing global team of innovators.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => {
                  setActiveDept(dept);
                  setExpandedJob(null);
                }}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                  activeDept === dept 
                    ? "bg-brand-900 text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filteredJobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  expandedJob === idx 
                    ? "border-brand-300 shadow-lg bg-white" 
                    : "border-slate-100 bg-slate-50/50 hover:border-brand-200 hover:bg-white cursor-pointer"
                }`}
              >
                {/* Header (Clickable) */}
                <div 
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between"
                  onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                >
                  <div>
                    <h4 className={`text-xl font-bold mb-2 transition-colors ${expandedJob === idx ? "text-brand-700" : "text-brand-900 group-hover:text-brand-600"}`}>
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 font-medium">
                      <span className="bg-slate-200/50 px-2.5 py-1 rounded-md text-slate-600">{job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <div className={`mt-4 sm:mt-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                    expandedJob === idx ? "bg-brand-900 text-white" : "bg-brand-50 text-brand-700"
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedJob === idx ? "rotate-180" : ""}`} />
                  </div>
                </div>
                
                {/* Expandable Body */}
                <AnimatePresence>
                  {expandedJob === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                        <div className="pt-4">
                          <h5 className="font-bold text-brand-900 mb-2">Role Description</h5>
                          <p className="text-slate-600 leading-relaxed mb-8">
                            {job.description}
                          </p>
                          <Link 
                            href={`/business-enquiry?role=${encodeURIComponent(job.title)}`} 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-all shadow-md"
                          >
                            Apply for this role <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Don&apos;t see a role that fits? Send us your resume anyway.</p>
            <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white font-bold rounded-xl hover:bg-brand-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
              <UserPlus className="w-5 h-5" /> Submit General Application
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
