import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function PrivacyPolicyPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Privacy Policy"
        paths={[{ name: "Company", href: "/about" }, { name: "Privacy Policy" }]}
        bgImage="/assets/images/pharma_hero_lab.png"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 prose prose-brand max-w-none prose-h2:text-primary prose-h2:font-outfit prose-h2:text-2xl prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-accent-600 hover:prose-a:text-accent-700">
          
          <p className="lead text-lg font-medium text-slate-800">
            Plexuspharmaco Group is committed to protecting your privacy and handling your personal data transparently and securely. This Privacy Policy explains how we collect, use, process, and protect your personal data in strict compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679.
          </p>
          <hr className="my-8 border-slate-100" />

          <h2>1. Data Controller</h2>
          <p>
            The controller responsible for processing your personal data on this website is:
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-4">
            <strong>Plexuspharmaco GmbH</strong><br />
            Frankenstr. 34<br />
            96146 Altendorf, Germany<br /><br />
            <strong>Phone:</strong> <a href="tel:+4915255460529">+49 1525 5460529</a><br />
            <strong>Email:</strong> <a href="mailto:info@plexuspharmaco.eu">info@plexuspharmaco.eu</a>
          </div>

          <h2>2. Data Collection: Forms & Inquiries</h2>
          <p>
            We collect and process personal data when you voluntarily interact with our website:
          </p>
          <ul>
            <li><strong>Contact & Inquiry Forms:</strong> When you submit a business inquiry, partnership request, or general contact form, we collect your name, email address, phone number, company name, and the content of your message. This data is processed based on your consent (Art. 6(1)(a) GDPR) and our legitimate interest in fulfilling your request (Art. 6(1)(f) GDPR).</li>
            <li><strong>Direct Communications:</strong> When you reach out to us via email or phone, we process your contact details solely to respond to your inquiry.</li>
          </ul>

          <h2>3. Cookies & Analytics</h2>
          <p>
            Our website uses cookies and similar tracking technologies to ensure technical functionality.
          </p>
          <ul>
            <li><strong>Strictly Necessary Cookies:</strong> Required for basic site functionality (e.g., routing, session management, language preferences). Cannot be disabled.</li>
            <li><strong>Optional Cookies:</strong> If additional third-party analytics or marketing scripts are implemented, we only deploy these non-essential cookies with your explicit consent (Art. 6(1)(a) GDPR).</li>
          </ul>

          <h2>4. Third-Party Services & Data Sharing</h2>
          <p>
            Plexuspharmaco GmbH does not sell, rent, or trade your personal data. We only share data with trusted third-party service providers (such as secure hosting providers) necessary for operating our website. All third-party processors are bound by strict Data Processing Agreements (DPAs) in compliance with GDPR.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data only for as long as is necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or statutory retention requirements (e.g., commercial and tax law retention periods in Germany, which typically range from 6 to 10 years).
          </p>

          <h2>6. Your GDPR Rights</h2>
          <p>
            As a data subject within the European Union, you possess the following explicit rights under the GDPR:
          </p>
          <ul>
            <li><strong>Right to Access (Art. 15):</strong> You have the right to request confirmation as to whether your data is being processed, and access to that data.</li>
            <li><strong>Right to Rectification (Art. 16):</strong> You have the right to request the correction of inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure (Art. 17):</strong> The &quot;right to be forgotten&quot; allows you to request the deletion of your personal data under certain conditions.</li>
            <li><strong>Right to Restrict Processing (Art. 18):</strong> You have the right to request restriction of processing your personal data.</li>
            <li><strong>Right to Data Portability (Art. 20):</strong> You can request a structured, machine-readable copy of your data to transfer to another controller.</li>
            <li><strong>Right to Object (Art. 21):</strong> You may object to the processing of your data based on legitimate interests or direct marketing.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:info@plexuspharmaco.eu">info@plexuspharmaco.eu</a>. You also have the right to lodge a complaint with a supervisory data protection authority in Germany or your country of residence if you believe your rights have been violated.
          </p>
          
          <hr className="my-8 border-slate-100" />
          <p className="text-sm text-slate-500 text-center italic">
            Last Updated: August 2026
          </p>
        </div>
      </div>
    </div>
  );
}
