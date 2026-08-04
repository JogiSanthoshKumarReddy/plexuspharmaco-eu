"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

export default function NewsletterCTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-brand-50/50 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-accent-500/5 rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="container-padding relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-brand-900 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden border border-brand-700/50"
        >
          {/* Internal background image for texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
            <Image 
              src="/assets/images/ai/hero_slide_2.png" 
              alt="Texture" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Stay Ahead in Global Healthcare
              </h2>
              <p className="text-lg text-brand-100/90 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Subscribe to our corporate newsletter for exclusive insights into our research pipeline, regulatory updates, and global market expansions.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
              <form className="relative flex flex-col sm:flex-row gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your corporate email address" 
                  className="w-full px-8 py-5 rounded-xl sm:rounded-r-none sm:rounded-l-2xl border-none focus:ring-4 focus:ring-accent-500/30 text-brand-900 placeholder:text-slate-400 font-medium text-lg shadow-inner outline-none transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="px-8 py-5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl sm:rounded-l-none sm:rounded-r-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 flex-shrink-0"
                >
                  Subscribe <Send className="w-5 h-5" />
                </button>
              </form>
              <p className="text-brand-200/60 text-xs mt-4 text-center lg:text-left">
                By subscribing, you agree to our Privacy Policy and consent to receive corporate communications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
