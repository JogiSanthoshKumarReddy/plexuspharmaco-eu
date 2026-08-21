import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function TermsConditionPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Terms & Conditions"
        paths={[{ name: "Company", href: "/about" }, { name: "Terms & Conditions" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 prose prose-brand max-w-none prose-h2:text-primary prose-h2:font-outfit prose-h2:text-2xl prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed">
          
          <p className="lead text-lg font-medium text-slate-800">
            Welcome to the Plexuspharmaco Europe website. By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.
          </p>
          <hr className="my-8 border-slate-100" />

          <h2>1. General Provisions & Acceptance</h2>
          <p>
            These Terms and Conditions govern your use of the website operated by <strong>Plexuspharmaco GmbH</strong>, located at Frankenstr. 34, 96146 Altendorf, Germany. If you do not agree with any part of these terms, you must not use our website or services.
          </p>
          
          <h2>2. Non-Medical Advice Disclaimer</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6 text-amber-900">
            <strong>Important Notice:</strong> The information provided on this website—including details about pharmaceutical products, nutraceuticals, clinical trials, and medical conditions—is for general informational and educational purposes only. 
            <br /><br />
            <strong>It is not intended as a substitute for professional medical advice, diagnosis, or treatment.</strong> You should never delay seeking medical advice, disregard medical advice, or discontinue medical treatment because of information on this website. Always consult a qualified healthcare professional regarding any medical condition or before taking any medication.
          </div>
          
          <h2>3. Forward-Looking Statements</h2>
          <p>
            This website may contain forward-looking statements regarding Plexuspharmaco&apos;s future financial performance, business strategy, product pipeline, and clinical development. These statements involve substantial risks and uncertainties. Actual results or events could differ materially from those projected in forward-looking statements. We undertake no obligation to update any forward-looking statements as a result of new information or future events.
          </p>

          <h2>4. Intellectual Property & Trademarks</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Plexuspharmaco GmbH or its content suppliers and is protected by international copyright and trademark laws. Product names (e.g., PlexWell) are registered trademarks of Plexuspharmaco Group. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>

          <h2>5. Third-Party Links & Resources</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by Plexuspharmaco (such as regulatory authority portals or news outlets). We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Plexuspharmaco shall not be responsible or liable for any damage or loss caused by your use of any such content.
          </p>

          <h2>6. Limitation of Liability & Indemnification</h2>
          <p>
            To the maximum extent permitted by applicable German law, Plexuspharmaco GmbH shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website. By using this site, you agree to indemnify and hold harmless Plexuspharmaco GmbH, its directors, officers, employees, and agents from and against any claims, liabilities, damages, judgments, or expenses arising from your violation of these Terms.
          </p>

          <h2>7. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the <strong>Federal Republic of Germany</strong>, without regard to its conflict of law provisions. You agree that the exclusive place of jurisdiction for any disputes arising out of or relating to these Terms shall be the competent courts in Germany.
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
