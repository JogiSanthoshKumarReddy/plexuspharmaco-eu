"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

// Form Schema Definition
const contactSchema = z.object({
  form_name: z.string().min(2, "Name is required (at least 2 characters)"),
  company_name: z.string().optional(),
  form_email: z.string().email("Please enter a valid email address"),
  form_country: z.string().min(2, "Country is required"),
  inquiry_type: z.string().min(1, "Please select an inquiry type"),
  form_message: z.string().min(10, "Message must be at least 10 characters long"),
  formType: z.string(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formType: "Business Enquiry Form",
      inquiry_type: "",
    }
  });

  const selectedInquiry = watch("inquiry_type");

  const inquiryOptions = [
    "Distribution Partnership",
    "Contract Manufacturing",
    "Product Sourcing & Supply",
    "Regulatory Affairs",
    "Other"
  ];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100 relative overflow-hidden group">
      {/* Background Hover Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-50 rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-100/50 transition-colors duration-700" />

      {/* Success Overlay */}
      <div 
        className={`absolute inset-0 bg-white/95 backdrop-blur-md z-10 flex flex-col items-center justify-center transition-all duration-500 ${
          isSuccess ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="w-24 h-24 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-brand-900 mb-3 tracking-wide">Message Sent!</h3>
        <p className="text-slate-600 text-center max-w-md font-light leading-relaxed">
          Thank you for reaching out to Plexuspharmaco. Our global team will get back to you shortly.
        </p>
      </div>

      <div className="mb-10 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-4 tracking-tight">Send us a Message</h2>
        <p className="text-slate-600 font-light text-lg">Fill out the form below and our global team will respond promptly.</p>
      </div>

      {errorMessage && (
        <div className="mb-8 p-5 rounded-2xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Field */}
          <div>
            <label htmlFor="form_name" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Full Name *</label>
            <input 
              id="form_name"
              {...register("form_name")}
              placeholder="John Doe"
              className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_name ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all`}
            />
            {errors.form_name && <p className="mt-2 text-sm text-red-500">{errors.form_name.message}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company_name" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Company Name (Optional)</label>
            <input 
              id="company_name"
              {...register("company_name")}
              placeholder="Acme Corp"
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-brand-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="form_email" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Email Address *</label>
            <input 
              id="form_email"
              {...register("form_email")}
              type="email"
              placeholder="john@example.com"
              className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_email ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all`}
            />
            {errors.form_email && <p className="mt-2 text-sm text-red-500">{errors.form_email.message}</p>}
          </div>

          {/* Country Field */}
          <div>
            <label htmlFor="form_country" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Country *</label>
            <input 
              id="form_country"
              {...register("form_country")}
              placeholder="Germany"
              className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_country ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all`}
            />
            {errors.form_country && <p className="mt-2 text-sm text-red-500">{errors.form_country.message}</p>}
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Type of Inquiry *</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {inquiryOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setValue("inquiry_type", option, { shouldValidate: true })}
                className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all text-left ${
                  selectedInquiry === option 
                    ? "bg-brand-50 border-brand-500 text-brand-900 shadow-[0_0_0_1px_rgba(30,58,138,1)]" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-brand-300 hover:bg-slate-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {errors.inquiry_type && <p className="mt-3 text-sm text-red-500">{errors.inquiry_type.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="form_message" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Message *</label>
          <textarea 
            id="form_message"
            {...register("form_message")}
            rows={5}
            placeholder="How can we help you?"
            className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_message ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all resize-none`}
          />
          {errors.form_message && <p className="mt-2 text-sm text-red-500">{errors.form_message.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 bg-brand-900 hover:bg-brand-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
