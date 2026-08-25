
"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Ship } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";
import GlobalPresenceMap from "@/components/home/GlobalPresenceMap";
import CompanyStats from "@/components/home/CompanyStats";

export default function GlobalOfficePage() {
  const offices = [
    {
      id: "germany",
      title: "European Headquarters",
      country: "Germany",
      company: "Plexus Pharmaco GmbH",
      address: "Frankenstr. 34, 96146 Altendorf, Germany",
      phone: "+49 152 1304 8766",
      email: "info@plexuspharmaco.com",
      image: "/assets/images/pharma_hero_corporate.png",
      capabilities: "Corporate Strategy, EU Regulatory Affairs, European Distribution"
    },
  ];

  const exportMarkets = [
    { region: "European Union", volume: "35%", status: "Direct Subsidiary Operations" },
    { region: "Asia Pacific", volume: "30%", status: "Regional HQs & Joint Ventures" },
    { region: "Middle East & Africa", volume: "20%", status: "Strategic Distribution Partners" },
    { region: "Latin America", volume: "15%", status: "Contract Manufacturing Partners" }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Global Presence & Logistics"
        paths={[{ name: "Corporate", href: "/" }, { name: "Global Offices" }]}
        bgImage="/assets/images/pharma_hero_corporate.png"
      />

      {/* Global Interactive Map Section */}
      <GlobalPresenceMap />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6"
          >
            A Borderless Approach to Healthcare
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-light"
          >
            With our European headquarters in Germany, Plexus Pharmaco maintains a robust, highly integrated global supply chain designed to support our partners in regulated and emerging markets worldwide.
          </motion.p>
        </div>

        {/* Global Stats */}
        <CompanyStats />

        <div className="mt-24 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-12 text-center">Our Strategic Global Hubs</h2>
          {/* Office Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <motion.div 
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              >
                {/* Office Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={office.image}
                    alt={office.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-900/40 group-hover:bg-brand-900/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-900 font-bold text-sm shadow-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-500" /> {office.country}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-900 mb-2">{office.title}</h3>
                  <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-lg mb-6">
                    {office.company}
                  </div>

                  <div className="space-y-4 text-sm text-slate-600 mb-8 flex-grow">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-brand-700 transition-colors font-medium">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-brand-700 transition-colors font-medium">{office.email}</a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Hub Capabilities</p>
                    <p className="text-sm font-medium text-brand-900">{office.capabilities}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Distribution Network & Export Markets */}
        <div className="flex flex-col lg:flex-row gap-12 mt-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white rounded-[2rem] p-10 lg:p-12 border border-slate-100 shadow-sm"
          >
            <Ship className="w-12 h-12 text-brand-700 mb-6" />
            <h3 className="text-3xl font-bold text-brand-900 mb-6">Robust Export Network</h3>
            <p className="text-slate-600 leading-relaxed font-light mb-8">
              Plexus Pharmaco leverages a highly optimized, temperature-controlled global logistics network ensuring our products reach distributors, hospitals, and pharmacies rapidly without compromising product integrity.
            </p>
            <div className="space-y-4">
              {exportMarkets.map((market, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div>
                    <h4 className="font-bold text-brand-900">{market.region}</h4>
                    <p className="text-xs text-slate-500">{market.status}</p>
                  </div>
                  <div className="text-xl font-black text-brand-700">{market.volume}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative min-h-[400px] rounded-[2rem] overflow-hidden shadow-xl"
          >
            <Image 
              src="/assets/images/pharma_hero_mfg.png"
              alt="Global Supply Chain Logistics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent flex items-end p-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Unbroken Cold Chain</h3>
                <p className="text-brand-100">End-to-end digital tracking ensuring API and product viability across all borders.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
