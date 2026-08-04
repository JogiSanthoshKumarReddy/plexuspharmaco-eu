"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Plexuspharmaco has been an indispensable partner in our supply chain. Their strict adherence to EU-GMP standards and reliable delivery of critical care medicines has profoundly impacted our hospital network's efficiency.",
    author: "Dr. Elena Rostova",
    role: "Chief Medical Officer",
    organization: "EuroHealth Alliance",
    image: "/assets/images/resources/testi-1.jpg"
  },
  {
    quote: "The strategic licensing agreement with Plexus allowed us to expand our cardiology portfolio significantly. Their regulatory expertise and seamless tech-transfer process are truly world-class.",
    author: "Marcus Chen",
    role: "VP of Global Partnerships",
    organization: "NovaMed Pharmaceuticals",
    image: "/assets/images/resources/testi-2.jpg"
  },
  {
    quote: "Their commitment to sustainability without compromising on pharmaceutical quality is remarkable. Plexus represents the future of responsible, science-driven healthcare manufacturing.",
    author: "Sarah Jenkins",
    role: "Director of Procurement",
    organization: "Global Care Distributors",
    image: "/assets/images/resources/testi-3.jpg"
  }
];

export default function ModernTestimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50 rounded-l-[100px] opacity-50 transform translate-x-1/3" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-900 mb-6"
          >
            Trusted by Healthcare Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Discover how our commitment to uncompromising quality and strategic partnership drives success for organizations across the globe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card hover-lift bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 text-brand-100">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accent-500 text-accent-500" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-10 relative z-10 flex-grow text-lg italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-brand-100 overflow-hidden relative flex-shrink-0 border-2 border-white shadow-sm">
                  {/* Using a placeholder since we might not have actual images, or fallback to an icon */}
                  <Image 
                    src={testimonial.image.includes('placeholder') ? '/assets/images/resources/no-image.jpg' : '/assets/images/resources/no-image.jpg'} 
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                  {/* Fallback initials if image fails/isn't real */}
                  <div className="absolute inset-0 bg-brand-900 text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs font-medium text-brand-600 mt-0.5">{testimonial.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
