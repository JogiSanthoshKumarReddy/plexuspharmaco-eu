"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X } from "lucide-react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: "/assets/images/g1.jpg", alt: "Corporate Facility" },
    { id: 2, src: "/assets/images/g2.jpg", alt: "Manufacturing Plant" },
    { id: 3, src: "/assets/images/g3.jpg", alt: "Laboratory" },
    { id: 4, src: "/assets/images/g4.jpg", alt: "Team Collaboration" },
    { id: 5, src: "/assets/images/g5.jpg", alt: "Logistics Hub" },
    { id: 6, src: "/assets/images/g6.jpg", alt: "Research Center" },
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Our Gallery"
        paths={[{ name: "Careers", href: "/" }, { name: "Gallery" }]}
        bgImage="/assets/images/ai/corporate_governance.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            Inside Plexuspharmaco
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities, research laboratories, and the dedicated teams driving global healthcare innovation.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform scale-75 group-hover:scale-100 shadow-xl"
                >
                  <Expand className="w-5 h-5 text-brand-900" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-300 transition-colors bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage}
                alt="Enlarged gallery image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
