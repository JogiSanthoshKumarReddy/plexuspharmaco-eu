"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight, Clock } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Link from "next/link";

export default function JobOpeningPage() {
  const jobs = [
    {
      title: "Submission / Documentation Officer",
      department: "Regulatory Affairs",
      location: "Global HQ",
      type: "Full-Time",
      description: "Play a key role in ensuring regulatory dossiers and documentation are accurate, complete, and submitted on time.",
    },
    {
      title: "Accounts Executive / Accountant",
      department: "Finance",
      location: "Global HQ",
      type: "Full-Time",
      description: "Maintain accurate financial records and support the finance team in day-to-day accounting operations.",
    },
    {
      title: "Regulatory / Liaison Officer (Corporate Compliance)",
      department: "Corporate Governance",
      location: "Global HQ",
      type: "Full-Time",
      description: "Ensure seamless compliance with corporate and regulatory requirements across jurisdictions.",
    },
    {
      title: "Medical Content Writer",
      department: "Medical Affairs",
      location: "Global HQ",
      type: "Full-Time",
      description: "Transform complex scientific and medical information into clear, engaging, and compliant content for a global audience.",
    },
    {
      title: "Export & Logistics Coordinator",
      department: "Supply Chain",
      location: "Logistics Hub",
      type: "Full-Time",
      description: "Manage international shipments, documentation, and supply chain coordination.",
    },
    {
      title: "International Business Development Manager",
      department: "Business Development",
      location: "Global HQ",
      type: "Full-Time",
      description: "Drive global partnerships, licensing opportunities, and market expansion.",
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Job Openings"
        paths={[{ name: "Careers", href: "#" }, { name: "Job Openings" }]}
        bgImage="/assets/images/breadcrumb/event-bg.jpg"
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
            Shape the Future of Healthcare
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            At Plexus Group of Companies, our people are at the heart of every innovation and achievement. We invite talented, motivated professionals to join our global teams, contribute to transformative healthcare solutions, and grow in a culture of excellence, collaboration, and purpose-driven impact.
          </motion.p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                  <Briefcase className="w-4 h-4" />
                  {job.department}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-700 transition-colors">
                {job.title}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center mb-8 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{job.type}</span>
                </div>
              </div>
              
              <Link href="/business-enquiry" className="inline-flex justify-center items-center gap-2 w-full px-6 py-3 bg-brand-50 text-brand-900 rounded-xl font-bold hover:bg-brand-900 hover:text-white transition-colors mt-auto">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
