import BreadcrumbHero from "@/components/common/BreadcrumbHero";

export default function CookiePolicyPage() {
  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Cookie Policy"
        paths={[{ name: "Company", href: "/about" }, { name: "Cookie Policy" }]}
        bgImage="/assets/images/pharma_hero_lab.png"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 prose prose-brand max-w-none prose-h2:text-primary prose-h2:font-outfit prose-h2:text-2xl prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-accent-600 hover:prose-a:text-accent-700">
          
          <p className="lead text-lg font-medium text-slate-800">
            This Cookie Policy explains how Plexuspharmaco GmbH (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies on our website <a href="https://plexuspharmaco.eu">plexuspharmaco.eu</a>. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <hr className="my-8 border-slate-100" />

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Plexuspharmaco GmbH) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics, interactive content, and advertising).
          </p>

          <h2>2. Categories of Cookies We Use</h2>

          <h3>2.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or filling in forms.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>plexus_cookie_consent</code></td>
                  <td>Stores your cookie consent preferences (strictly necessary, analytical, marketing)</td>
                  <td>Persistent (localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2.2 Analytical / Performance Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. These cookies are only activated if you give your explicit consent.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>_ga</code></td>
                  <td>Google Analytics</td>
                  <td>Distinguishes unique users by assigning a randomly generated number as a client identifier</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td><code>_ga_*</code></td>
                  <td>Google Analytics</td>
                  <td>Used to persist session state</td>
                  <td>2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2.3 Marketing / Targeting Cookies</h3>
          <p>
            These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. These cookies are only activated if you give your explicit consent.
          </p>
          <p>
            Currently, we do not use marketing cookies. If this changes in the future, this policy will be updated accordingly and your consent will be requested.
          </p>

          <h2>3. How to Manage Your Cookie Preferences</h2>
          <p>
            When you first visit our website, a cookie consent banner will appear allowing you to:
          </p>
          <ul>
            <li><strong>Accept All</strong> — enables all cookie categories</li>
            <li><strong>Reject All</strong> — disables all non-essential cookies (only strictly necessary cookies remain active)</li>
            <li><strong>Manage Preferences</strong> — allows you to selectively enable or disable analytical and marketing cookies</li>
          </ul>
          <p>
            You can change your preferences at any time by clearing your browser&apos;s local storage for this website, which will cause the consent banner to reappear on your next visit.
          </p>

          <h2>4. Browser-Level Cookie Controls</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can typically set your browser to:
          </p>
          <ul>
            <li>Block all cookies</li>
            <li>Accept only first-party cookies</li>
            <li>Delete cookies when you close the browser</li>
            <li>Browse in &quot;private&quot; or &quot;incognito&quot; mode</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may impact your experience on our website. Some features may not function properly without strictly necessary cookies.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            Our website integrates the following third-party services that may set their own cookies:
          </p>
          <ul>
            <li><strong>Google Analytics</strong> — web analytics service provided by Google LLC. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>Google Translate</strong> — translation widget provided by Google LLC, which may set session cookies for language preferences.</li>
          </ul>

          <h2>6. Legal Basis</h2>
          <p>
            Our use of cookies is based on the following legal frameworks:
          </p>
          <ul>
            <li><strong>Strictly necessary cookies:</strong> Legitimate interest (Art. 6(1)(f) GDPR) — required for the website to function</li>
            <li><strong>Analytical and marketing cookies:</strong> Consent (Art. 6(1)(a) GDPR) — only activated upon your explicit opt-in</li>
          </ul>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us:
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-4">
            <strong>Plexuspharmaco GmbH</strong><br />
            Frankenstr. 34<br />
            96146 Altendorf, Germany<br /><br />
            <strong>Email:</strong> <a href="mailto:info@plexuspharmaco.eu">info@plexuspharmaco.eu</a><br />
            <strong>Phone:</strong> <a href="tel:+4915255460529">+49 1525 5460529</a>
          </div>

          <hr className="my-8 border-slate-100" />
          <p className="text-sm text-slate-400">
            Last updated: September 2026
          </p>
        </div>
      </div>
    </div>
  );
}
