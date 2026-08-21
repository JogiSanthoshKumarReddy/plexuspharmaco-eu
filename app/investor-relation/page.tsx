
"use client";
import { motion } from "framer-motion";
import { LineChart, BarChart3, TrendingUp, Download, FileText, Landmark, Users2, ShieldAlert } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import CompanyStats from "@/components/home/CompanyStats";
import Image from "next/image";

export default function InvestorRelationPage() {
  const reports = [
    { year: "2026", title: "Q2 2026 Financial Results", type: "PDF", size: "4.2 MB" },
    { year: "2026", title: "Annual Sustainability & ESG Report", type: "PDF", size: "12.5 MB" },
    { year: "2025", title: "Annual Report 2025", type: "PDF", size: "8.1 MB" },
    { year: "2025", title: "Corporate Governance Statement", type: "PDF", size: "2.3 MB" }
  ];

  const pillars = [
    {
      title: "Transparent Communication",
      icon: TrendingUp,
      description: "Timely disclosures and data-driven insights that highlight our operational performance and long-term value creation."
    },
    {
      title: "Disciplined Strategy",
      icon: LineChart,
      description: "A combination of strong governance, disciplined risk management, and evidence-based business strategy."
    },
    {
      title: "Sustainable Growth",
      icon: BarChart3,
      description: "Empowering investors to engage meaningfully with our vision for science-driven healthcare innovation and global expansion."
    }
  ];

  const governance = [
    { icon: Landmark, title: "Board of Directors", description: "Oversight by industry veterans ensuring fiduciary responsibility and strategic alignment." },
    { icon: ShieldAlert, title: "Risk Management", description: "Enterprise-wide risk frameworks mitigating regulatory, financial, and operational risks." },
    { icon: Users2, title: "Shareholder Rights", description: "Absolute commitment to equitable treatment and transparent voting rights for all shareholders." }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Investor Relations"
        paths={[{ name: "Investors", href: "/" }, { name: "Investor Relations" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      <CompanyStats />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-brand-100"
            >
              <Image 
                src="/assets/images/pharma_hero_corporate.png"
                alt="Corporate Governance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Driving Value Through Scientific Leadership
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Plexuspharmaco’s Investor Relations framework is built on a foundation of transparency, accountability, and trust, financial discipline, and a clear vision for the future of global healthcare.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                As we aggressively expand our manufacturing footprint and advance our robust R&D pipeline, we remain deeply committed to delivering sustainable, long-term returns for our shareholders while fulfilling our primary mission: improving patient lives globally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-4xl font-black text-brand-700 mb-2">€450M+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">Annual Revenue</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-4xl font-black text-brand-700 mb-2">15%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">YoY Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Corporate Governance */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-6">Corporate Governance</h2>
            <p className="text-lg text-slate-600">Rigorous oversight and ethical business practices are the cornerstones of our operational philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governance.map((gov, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <gov.icon className="w-12 h-12 text-brand-700 mb-6" />
                <h4 className="text-xl font-bold text-brand-900 mb-4">{gov.title}</h4>
                <p className="text-slate-600 font-light">{gov.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Reports Downloads */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 pb-8">
            <div>
              <h3 className="text-3xl font-bold text-brand-900 mb-2">Financial Reports & Filings</h3>
              <p className="text-slate-500">Download our latest performance metrics and governance disclosures.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, idx) => (
              <a
                href="/assets/pdfs/dummy.pdf"
                download
                key={idx}
                className="block group"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 hover:bg-white"
                >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 text-accent-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-900 mb-1 group-hover:text-brand-600 transition-colors">{report.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
                      <span>{report.year}</span>
                      <span>•</span>
                      <span>{report.type}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-700 group-hover:bg-brand-900 group-hover:text-white transition-colors flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
