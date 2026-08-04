import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function TermsConditionPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Terms & Conditions"
        paths={[{ name: "Company", href: "/about" }, { name: "Terms & Conditions" }]}
        bgImage="/assets/images/ai/hero_slide_2.png"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 prose prose-brand max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Plexuspharmaco Group. These Terms and Conditions govern your use of our website and services. By accessing our platform, you agree to comply with and be bound by these terms.
          </p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>
            All content, trademarks, logos, and intellectual property displayed on this website are the property of Plexuspharmaco Group unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
          
          <h2>3. Use of Information</h2>
          <p>
            The information provided on this website is for general informational purposes only. It is not intended as medical advice or instructions on the use of our pharmaceutical products. Always consult a qualified healthcare professional.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            Plexuspharmaco Group shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your access to, or use of, this website or its content.
          </p>

          <h2>5. Updates and Modifications</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website following any changes indicates your acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
}
