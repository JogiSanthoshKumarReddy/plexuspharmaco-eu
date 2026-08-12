"use client";
import { motion } from "framer-motion";
import { Megaphone, Calendar } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";


export default function PressReleasePage() {
  const releases = [
    {
      title: "Plexuspharmaco Group Expands Global Footprint Across 45+ Countries",
      date: "02-02-2026",
      summary: "Plexuspharmaco Group of Companies announced continued expansion across more than 45 regulated and semi-regulated markets spanning Europe, Asia, Africa, LATAM, GCC, and CIS regions. The Group's integrated operating model combines Pharmaceutical FDF, Nutraceuticals, Liposomal Supplements, niche Medical Devices, Dermo-cosmetics, and Human Placenta products. Supported by WHO-GMP, EU-GMP, US FDA and internationally compliant manufacturing networks, the expansion reinforces regulatory confidence and supply reliability. Strategic SBUs in Europe, Africa, Australia, and Latin America strengthen regional execution and market access. This milestone reflects Plexuspharmaco Group's long-term commitment to global healthcare accessibility, quality, and compliance."
    },
    {
      title: "Plexus Group Strengthens Manufacturing Capabilities in Europe, Turkey, and India",
      date: "02-02-2026",
      summary: "Plexuspharmaco Group confirmed the continued strengthening of its manufacturing infrastructure through owned facilities in Germany, Turkey, and India. These sites support pharmaceutical FDFs, Nutraceuticals, Liposomal Supplements, Dermo-cosmetics, niche Medical Devices, Human Placenta preparations, and specialty healthcare products under validated quality systems. The Group also operates JV manufacturing units in Poland, Spain, and the United States, enabling scalable global supply. All facilities function under robust Pharmaceutical Quality Management Systems aligned with international regulatory frameworks. This integrated manufacturing strategy enhances flexibility, inspection readiness, and global partner confidence."
    },
    {
      title: "Formation of Plexus Biogenix LLP and Plexus Biocare Pvt. Ltd.",
      date: "02-02-2026",
      summary: "Plexuspharmaco Group announced the incorporation of Plexus Biogenix LLP and Plexus Biocare Pvt. Ltd. as part of its strategic growth roadmap. Plexus Biogenix LLP focuses on global trade, commercial operations, and international expansion initiatives. Plexus Biocare Pvt. Ltd. is dedicated to manufacturing, CMO/CDMO services, white labeling, and advanced packaging solutions. These entities enhance operational depth, supply chain resilience, and customer-centric execution. The move underscores Plexus Group's commitment to scalable, compliant, and sustainable global growth."
    },
    {
      title: "Plexuspharmaco Acquires Strategic Partnerships for Patented Medical Devices",
      date: "02-02-2026",
      summary: "Plexuspharmaco Group announced the acquisition of strategic partnerships covering patented medical devices for surgical and aesthetic applications. The portfolio includes Class I, II, and III devices, expanding the Group's presence in regulated medical technology segments. These partnerships complement Plexuspharmaco's Pharmaceutical and Nutraceutical portfolio, enabling integrated therapy solutions. All medical devices are supported by regulatory documentation, quality oversight, and lifecycle compliance frameworks. This milestone reinforces Plexuspharmaco's position as a diversified healthcare solutions provider."
    },
    {
      title: "Plexuspharmaco Reaffirms Commitment to Quality, Ethics, and Global Compliance",
      date: "02-02-2026",
      summary: "Plexuspharmaco Group reiterated its commitment to operating under WHO-GMP, EU-GMP, FDA, MHRA, and ICH-aligned regulatory standards. Quality assurance, ethical business practices, and patient safety remain central to all Group operations. Robust governance structures ensure transparency, audit readiness, and regulatory sustainability. Continuous innovation and research-driven development support long-term healthcare impact. This commitment positions Plexuspharmaco as a trusted global partner for regulators, investors, and healthcare stakeholders."
    },
    {
      title: "Plexuspharmaco Celebrates 100+ Years of Collective Industry Experience",
      date: "02-02-2026",
      summary: "Plexuspharmaco Group has secured NAFDAC approval for its food supplements manufacturing unit in Nigeria, marking a key milestone for the company and local consumers. The state-of-the-art facility is now authorized to produce EU-quality tablets, capsules, soft gels, powders, and liquid formulations, all adhering to the highest international standards. This approval reflects Plexuspharmaco's unwavering commitment to quality and safety. With a diverse portfolio designed to support nutrition and overall wellness, the company is set to elevate Nigeria's nutraceutical industry. This launch comes at a time of growing demand for preventive healthcare, offering consumers trusted, world-class supplements for healthier lives."
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Press Releases"
        paths={[{ name: "News & Media", href: "/media" }, { name: "Press Releases" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6 shadow-sm"
          >
            <Megaphone className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Official Announcements</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Corporate News & Updates
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Stay informed with the latest official announcements and corporate developments from Plexuspharmaco Group. This section highlights key milestones, global expansions, strategic partnerships, manufacturing advancements, and governance initiatives across our integrated healthcare ecosystem.
          </motion.p>
        </div>

        {/* Press Releases Feed */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {releases.map((release, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card hover-lift p-6 md:p-8 rounded-2xl group flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 w-fit px-3 py-1 rounded-full border border-slate-100">
                  <Calendar className="w-4 h-4 text-brand-500" />
                  {release.date}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {release.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {release.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
