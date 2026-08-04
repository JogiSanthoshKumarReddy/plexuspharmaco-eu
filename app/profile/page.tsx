"use client";
import { motion } from "framer-motion";
import { MapPin, Building2, Globe2, ArrowRight } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function ProfilePage() {
  const regions = [
    {
      title: "India",
      type: "HO & Manufacturing",
      facilities: ["Plexus Biogenix LLP", "Plexus Biocare Pvt. Ltd."],
      image: "/assets/images/india.jpg"
    },
    {
      title: "Germany",
      type: "HO & Manufacturing",
      facilities: ["Frankenstr 34, 96146", "Altendorf, Germany"],
      image: "/assets/images/germany.png"
    },
    {
      title: "Turkey",
      type: "HO & Manufacturing",
      facilities: ["Mimar Sinan Mahallesi", "Sultanbeyli, Istanbul"],
      image: "/assets/images/turkey.jpg"
    },
    {
      title: "Poland",
      type: "JV Manufacturing",
      facilities: ["EU-GMP Certified Facility", "Solid & Liquid Orals"],
      image: "/assets/images/poland.png"
    },
    {
      title: "Spain",
      type: "JV Manufacturing",
      facilities: ["Advanced Injectables", "Dermo-Cosmetics Hub"],
      image: "/assets/images/spain.webp"
    },
    {
      title: "United States",
      type: "JV Manufacturing",
      facilities: ["FDA-Approved Facility", "Specialized Formulations"],
      image: "/assets/images/us.png"
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Country Profiles"
        paths={[{ name: "Global Markets", href: "/" }, { name: "Country Profiles" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/10 border border-brand-900/20 mb-6 shadow-sm"
          >
            <Globe2 className="w-4 h-4 text-brand-900" />
            <span className="text-sm font-bold text-brand-900 uppercase tracking-widest">Global Integrated Footprint</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight"
          >
            Worldwide Manufacturing & Supply Continuity
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-6"
          >
            Plexuspharmaco operates a globally integrated footprint supporting compliant manufacturing, regional market access, and supply continuity. The Group owns manufacturing facilities in Germany, Turkey, and India, complemented by joint-venture manufacturing sites in Poland, Spain, and the United States.
          </motion.p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image 
                  src={region.image}
                  alt={region.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {region.title}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sm font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100 w-fit">
                  <Building2 className="w-4 h-4" />
                  {region.type}
                </div>
                
                <ul className="space-y-3">
                  {region.facilities.map((facility, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-slate-600">
                      <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
