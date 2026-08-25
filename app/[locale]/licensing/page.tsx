
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileCheck, LogIn, LogOut, ArrowLeftRight, Users } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import Link from "next/link";

export default function LicensingPage() {
  const [activeTab, setActiveTab] = useState("in-licensing");

  const tabs = [
    { id: "in-licensing", label: "In-Licensing", icon: LogIn },
    { id: "out-licensing", label: "Out-Licensing", icon: LogOut },
    { id: "co-marketing", label: "Co-Marketing", icon: ArrowLeftRight },
    { id: "co-development", label: "Co-Development", icon: Users },
  ];

  interface TabContent {
    title: string;
    description: string;
    idealPartner: string[];
    keyFocus?: string[];
    scope?: string;
    image?: string;
  }

  const tabContent: Record<string, TabContent> = {
    "in-licensing": {
      title: "In-Licensing",
      description: "Acquiring rights to market or distribute approved or near-approval products from external partners.",
      idealPartner: [
        "Product owners seeking market expansion",
        "Companies with limited regional presence"
      ],
      scope: "Country-specific or multi-country territories",
      image: "/assets/images/resources/01.jpg"
    },
    "out-licensing": {
      title: "Out-Licensing",
      description: "Granting rights to partners for the commercialization of Plexus-developed technologies or finished products.",
      idealPartner: [
        "Regional market leaders",
        "Companies with strong local distribution networks"
      ],
      scope: "Global or region-specific licensing",
      image: "/assets/images/resources/02.jpg"
    },
    "co-marketing": {
      title: "Co-Marketing & Co-Promotion",
      description: "Collaborative commercialization where both partners leverage their sales forces to maximize market penetration.",
      idealPartner: [
        "Companies aiming to increase product visibility",
        "Partners seeking complementary therapeutic portfolios"
      ],
      scope: "Domestic and international markets",
      image: "/assets/images/resources/03.jpg"
    },
    "co-development": {
      title: "Co-Development",
      description: "Joint investment in the R&D, clinical validation, and regulatory approval of novel formulations.",
      idealPartner: [
        "Innovative biotech or research organizations",
        "Partners seeking to share development risks and rewards"
      ],
      scope: "Early-stage to late-stage clinical assets",
      image: "/assets/images/resources/04.jpg"
    }
  };

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Licensing Opportunities"
        paths={[{ name: "Partnering", href: "/partnership" }, { name: "Licensing" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
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
            <FileCheck className="w-4 h-4 text-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Science & Compliance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Value-Based Licensing Built on Science and Compliance
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 space-y-6 text-left md:text-center"
          >
            <p>
              At Plexus Pharmaco, licensing opportunities are structured as strategic, science-aligned collaborations designed to create long-term value across the pharmaceutical lifecycle. Our licensing philosophy is grounded in technical compatibility, regulatory alignment, and shared governance principles.
            </p>
            <p>
              We adopt a value-based, evidence-driven approach to both in-licensing and out-licensing, focusing on products and technologies with a strong clinical rationale, differentiated formulation or delivery advantages, and scalable commercial potential.
            </p>
          </motion.div>
        </div>

        {/* Tabbed Models Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-brand-900">Types of Licensing Models Offered</h3>
          </div>

          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-brand-900 text-white shadow-xl scale-105"
                    : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xl min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl font-bold text-brand-900 mb-4">{tabContent[activeTab].title}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {tabContent[activeTab].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-brand-900 uppercase tracking-widest text-sm mb-3">Ideal Partner Profile</h4>
                    <ul className="space-y-3">
                      {tabContent[activeTab].idealPartner.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <ArrowRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-900 uppercase tracking-widest text-sm mb-2">Geographic Scope</h4>
                    <p className="text-slate-600">{tabContent[activeTab].scope}</p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src={tabContent[activeTab].image?.includes('placeholder') ? '/assets/images/resources/no-image.jpg' : (tabContent[activeTab].image || '/assets/images/resources/no-image.jpg')}
                      alt={tabContent[activeTab].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/business-enquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl">
            Discuss Licensing Opportunities <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
