"use client";
import { motion } from "framer-motion";
import { FileText, Download, ShieldCheck, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function FinancialReportPage() {
  const reports = [
    { year: "2023", title: "Annual Financial Report", type: "PDF", size: "4.2 MB" },
    { year: "2023", title: "ESG & Sustainability Report", type: "PDF", size: "5.1 MB" },
    { year: "2022", title: "Annual Financial Report", type: "PDF", size: "3.8 MB" },
    { year: "2022", title: "Q4 Earnings Release", type: "PDF", size: "1.2 MB" },
  ];

  return (
    <div className="modern-page-wrapper bg-white min-h-screen pb-24">
      <BreadcrumbHero 
        title="Financial Reports"
        paths={[{ name: "Investors", href: "/investor-relation" }, { name: "Financial Reports" }]}
        bgImage="/assets/images/breadcrumb/event-bg.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-700" />
                <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">IFRS & GAAP Compliant</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Transparent and Auditable Financial Reporting
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Plexus Group of Companies adheres to the highest international accounting and reporting standards, ensuring transparency, accuracy, and regulatory compliance.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                In alignment with global sustainability expectations, we integrate ESG reporting frameworks to provide insights on environmental, social, and governance initiatives, demonstrating our commitment to responsible and sustainable business practices.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px]"
            >
              <Image 
                src="/assets/images/resources/finance.png"
                alt="Financial Report"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Reports Download Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h3 className="text-3xl font-bold text-brand-900 mb-3">Document Library</h3>
              <p className="text-slate-600">Download our latest financial and sustainability reports.</p>
            </div>
            <Link href="/investor-relation" className="text-brand-700 font-bold hover:text-brand-900 flex items-center gap-2 mt-4 md:mt-0 transition-colors">
              Back to Investor Relations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, idx) => (
              <motion.a
                href="/business-enquiry"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{report.year}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-50 text-brand-700">{report.type}</span>
                    </div>
                    <h4 className="font-bold text-brand-900 group-hover:text-brand-700 transition-colors">{report.title}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-400 hidden sm:block">{report.size}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-900 group-hover:bg-brand-50 transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
