"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, Globe, Factory, PackageSearch, ShieldCheck, HelpCircle, Briefcase, Paperclip, X } from "lucide-react";

// Form Schema Definition
const contactSchema = z.object({
  form_name: z.string().min(2, "Name is required (at least 2 characters)"),
  company_name: z.string().optional(),
  annual_revenue: z.string().optional(),
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
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formType: "Business Enquiry Form",
      inquiry_type: "",
    }
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const role = searchParams?.get("role");
    if (role) {
      setValue("inquiry_type", "Careers");
      setValue("form_message", `Role Application: ${role}\n\n`);
    } else {
      // If there is no role param, reset to default state if it was previously set to Careers
      const currentInquiry = control._formValues.inquiry_type;
      if (currentInquiry === "Careers") {
        setValue("inquiry_type", "");
        setValue("form_message", "");
      }
    }
  }, [searchParams, setValue, control]);

  const selectedInquiry = useWatch({ control, name: "inquiry_type" });

  const inquiryOptions = [
    { title: "Distribution Partnership", desc: "Expand our global reach", icon: Globe },
    { title: "Contract Manufacturing", desc: "End-to-end CMO services", icon: Factory },
    { title: "Product Sourcing", desc: "Supply chain & API sourcing", icon: PackageSearch },
    { title: "Regulatory Affairs", desc: "Compliance & submissions", icon: ShieldCheck },
    { title: "Careers", desc: "Join our global team", icon: Briefcase },
    { title: "Other", desc: "General inquiries", icon: HelpCircle }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size must be less than 5MB");
        return;
      }
      setResumeFile(file);
      setErrorMessage("");
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value as string);
      });

      if (selectedInquiry === "Careers" && resumeFile) {
        formData.append("resume", resumeFile);
      }

      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(responseData?.message || "Failed to submit form");
      }

      setIsSuccess(true);
      reset();
      setResumeFile(null);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error: unknown) {
      setErrorMessage((error as Error).message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[2rem] p-10 lg:p-16 border border-slate-100 shadow-xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-brand-900 mb-4">Message Sent Successfully</h3>
        <p className="text-slate-600 text-lg">Thank you for reaching out to Plexuspharmaco. Our team will review your inquiry and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900">
          <Globe className="w-6 h-6" />
        </div>
        <p className="text-brand-900 font-bold uppercase tracking-wider text-sm">
          Global Operations
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
              placeholder="e.g. Alex Smith"
              className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_name ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-base text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all`}
            />
            {errors.form_name && <p className="mt-2 text-sm text-red-500">{errors.form_name.message}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company_name" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Company Name (Optional)</label>
            <input 
              id="company_name"
              {...register("company_name")}
              placeholder="e.g. Your Company Ltd"
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-base text-brand-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* Annual Revenue Field */}
          <div>
            <label htmlFor="annual_revenue" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Annual Revenue (Optional)</label>
            <select 
              id="annual_revenue"
              {...register("annual_revenue")}
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-base text-brand-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 focus:bg-white focus:outline-none transition-all appearance-none"
            >
              <option value="">Select Revenue Range</option>
              <option value="Under $1M">Under $1M</option>
              <option value="$1M - $10M">$1M - $10M</option>
              <option value="$10M - $50M">$10M - $50M</option>
              <option value="Over $50M">Over $50M</option>
            </select>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="form_email" className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Email Address *</label>
            <input 
              id="form_email"
              {...register("form_email")}
              type="email"
              placeholder="e.g. alex@example.com"
              className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_email ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-base text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all`}
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
              className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_country ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-base text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all`}
            />
            {errors.form_country && <p className="mt-2 text-sm text-red-500">{errors.form_country.message}</p>}
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Type of Inquiry *</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inquiryOptions.map((option) => (
              <button
                key={option.title}
                type="button"
                onClick={() => setValue("inquiry_type", option.title, { shouldValidate: true })}
                className={`p-5 rounded-2xl border transition-all text-left group flex flex-col gap-3 ${
                  selectedInquiry === option.title 
                    ? "bg-brand-50 border-brand-500 shadow-[0_0_0_1px_rgba(30,58,138,1)]" 
                    : "bg-white border-slate-200 hover:border-brand-300 hover:shadow-md"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  selectedInquiry === option.title 
                    ? "bg-brand-500 text-white" 
                    : "bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-700"
                }`}>
                  <option.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold transition-colors ${selectedInquiry === option.title ? "text-brand-900" : "text-slate-700 group-hover:text-brand-900"}`}>
                    {option.title}
                  </h4>
                  <p className={`text-xs mt-1 transition-colors ${selectedInquiry === option.title ? "text-brand-700" : "text-slate-500"}`}>
                    {option.desc}
                  </p>
                </div>
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
            placeholder={selectedInquiry === "Careers" ? "Please provide a brief cover letter and a link to your resume/LinkedIn profile..." : "How can we help you?"}
            className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.form_message ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-500 focus:ring-brand-500/20"} text-base text-brand-900 placeholder-slate-400 focus:ring-4 focus:bg-white focus:outline-none transition-all resize-none mb-4`}
          />
          {errors.form_message && <p className="mt-2 text-sm text-red-500 mb-4">{errors.form_message.message}</p>}

          {/* Conditional Resume Upload Field for Careers */}
          {selectedInquiry === "Careers" && (
            <div className="mt-6 border-2 border-dashed border-slate-200 rounded-xl p-6 bg-slate-50/50 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-brand-300 transition-all">
              {!resumeFile ? (
                <>
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-3">
                    <Paperclip className="w-5 h-5" />
                  </div>
                  <h4 className="text-brand-900 font-bold mb-1">Attach Resume / CV</h4>
                  <p className="text-sm text-slate-500 mb-4">PDF, DOC, or DOCX (Max 5MB)</p>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-brand-900 font-medium rounded-lg hover:bg-slate-50 hover:border-brand-300 transition-all shadow-sm">
                    <span>Browse Files</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                </>
              ) : (
                <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-lg border border-brand-200 shadow-sm w-full max-w-md">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <Paperclip className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-bold text-brand-900 truncate">{resumeFile.name}</p>
                    <p className="text-xs text-slate-500">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setResumeFile(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
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
