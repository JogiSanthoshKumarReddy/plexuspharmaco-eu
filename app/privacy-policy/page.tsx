import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function PrivacyPolicyPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Privacy Policy"
        paths={[{ name: "Company", href: "/about" }, { name: "Privacy Policy" }]}
        bgImage="/assets/images/breadcrumb/breadcrumb-2.jpg"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 prose prose-brand max-w-none">
          <h2>1. Privacy Commitment</h2>
          <p>
            Plexuspharmaco Group is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you visit our website or interact with our services.
          </p>
          
          <h2>2. Information Collection</h2>
          <p>
            We may collect personal data such as your name, email address, contact number, and professional details when you voluntarily submit information through our inquiry forms, job applications, or newsletter subscriptions.
          </p>
          
          <h2>3. Use of Data</h2>
          <p>
            Your information is used solely to respond to your inquiries, process applications, and improve our services. We do not sell or share your personal data with third parties for marketing purposes without your explicit consent.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement robust technical and organizational measures to ensure the security of your data against unauthorized access, alteration, disclosure, or destruction, in compliance with global data protection regulations including GDPR.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data stored by us. To exercise these rights, please contact our compliance team at <strong>info@plexuspharmaco.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
