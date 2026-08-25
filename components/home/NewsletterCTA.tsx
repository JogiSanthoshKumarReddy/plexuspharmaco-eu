"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!consent) {
      setStatus("error");
      setErrorMessage("You must agree to the Privacy Policy to subscribe.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Newsletter Subscription",
          email: email
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to subscribe.");
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };
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
              src="/assets/images/pharma_hero_mfg.png" 
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
              <form className="relative flex flex-col sm:flex-row gap-4 sm:gap-0" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address" 
                  className="w-full px-8 py-5 rounded-xl sm:rounded-r-none sm:rounded-l-2xl border-none focus:ring-4 focus:ring-accent-500/30 text-brand-900 placeholder:text-slate-400 font-medium text-lg shadow-inner outline-none transition-all disabled:opacity-50"
                  required
                  disabled={status === "loading" || status === "success"}
                />
                <button 
                  type="submit" 
                  disabled={status === "loading" || status === "success"}
                  className="px-8 py-5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl sm:rounded-l-none sm:rounded-r-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-70"
                >
                  {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"} 
                  {status === "success" ? <CheckCircle2 className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                </button>
              </form>
              
              {status === "error" && (
                <p className="text-red-300 text-sm mt-3 flex items-center justify-center lg:justify-start gap-1">
                  <AlertCircle className="w-4 h-4" /> {errorMessage}
                </p>
              )}
              {status === "success" && (
                <p className="text-green-300 text-sm mt-3 flex items-center justify-center lg:justify-start gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing to our newsletter!
                </p>
              )}
              
              <div className="mt-4 flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="newsletter-consent" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={status === "loading" || status === "success"}
                  className="mt-1 w-4 h-4 rounded border-brand-700/50 text-accent-500 focus:ring-accent-500/50 bg-brand-800"
                />
                <label htmlFor="newsletter-consent" className="text-brand-200/80 text-xs text-left cursor-pointer">
                  I agree that Plexus Pharmaco GmbH may process my email address to send me corporate newsletters. I have read the <Link href="/privacy-policy" className="text-accent-400 hover:underline">Privacy Policy</Link>.
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
