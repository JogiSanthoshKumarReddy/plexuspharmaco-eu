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
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formType: "Business Enquiry Form",
    }
  });

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
    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100 relative overflow-hidden">
      {/* Success Overlay */}
      <div 
        className={`absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center transition-all duration-500 ${
          isSuccess ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
        <h3 className="text-3xl font-bold text-brand-900 mb-2">Message Sent!</h3>
        <p className="text-brand-600 text-center max-w-sm">
          Thank you for reaching out to Plexuspharmaco. Our team will get back to you shortly.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-900 mb-2">Send us a Message</h2>
        <p className="text-brand-600">Fill out the form below and our global team will respond promptly.</p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-100">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="form_name" className="block text-sm font-medium text-brand-900 mb-2">Full Name *</label>
            <input 
              id="form_name"
              {...register("form_name")}
              placeholder="John Doe"
              className={`w-full px-5 py-3 rounded-xl border ${errors.form_name ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500"} focus:ring-2 focus:outline-none transition-all`}
            />
            {errors.form_name && <p className="mt-1 text-sm text-red-500">{errors.form_name.message}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-brand-900 mb-2">Company Name (Optional)</label>
            <input 
              id="company_name"
              {...register("company_name")}
              placeholder="Acme Corp"
              className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="form_email" className="block text-sm font-medium text-brand-900 mb-2">Email Address *</label>
            <input 
              id="form_email"
              {...register("form_email")}
              type="email"
              placeholder="john@example.com"
              className={`w-full px-5 py-3 rounded-xl border ${errors.form_email ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500"} focus:ring-2 focus:outline-none transition-all`}
            />
            {errors.form_email && <p className="mt-1 text-sm text-red-500">{errors.form_email.message}</p>}
          </div>

          {/* Country Field */}
          <div>
            <label htmlFor="form_country" className="block text-sm font-medium text-brand-900 mb-2">Country *</label>
            <input 
              id="form_country"
              {...register("form_country")}
              placeholder="Germany"
              className={`w-full px-5 py-3 rounded-xl border ${errors.form_country ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500"} focus:ring-2 focus:outline-none transition-all`}
            />
            {errors.form_country && <p className="mt-1 text-sm text-red-500">{errors.form_country.message}</p>}
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiry_type" className="block text-sm font-medium text-brand-900 mb-2">Type of Inquiry *</label>
          <select 
            id="inquiry_type"
            {...register("inquiry_type")}
            className={`w-full px-5 py-3 rounded-xl border bg-white ${errors.inquiry_type ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500"} focus:ring-2 focus:outline-none transition-all`}
          >
            <option value="">Select an option</option>
            <option value="Distribution">Distribution Partnership</option>
            <option value="Contract Manufacturing">Contract Manufacturing (CMO/CDMO)</option>
            <option value="Licensing">In-Licensing / Out-Licensing</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.inquiry_type && <p className="mt-1 text-sm text-red-500">{errors.inquiry_type.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form_message" className="block text-sm font-medium text-brand-900 mb-2">Message *</label>
          <textarea 
            id="form_message"
            {...register("form_message")}
            rows={4}
            className={`w-full px-5 py-3 rounded-xl border resize-none ${errors.form_message ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500"} focus:ring-2 focus:outline-none transition-all`}
            placeholder="How can we help you?"
          ></textarea>
          {errors.form_message && <p className="mt-1 text-sm text-red-500">{errors.form_message.message}</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-10 py-4 bg-brand-900 hover:bg-brand-800 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
