"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ScriptManager() {
  const [analytical, setAnalytical] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const consentStr = localStorage.getItem('plexus_cookie_consent');
        if (consentStr) {
          const consent = JSON.parse(consentStr);
          setAnalytical(!!consent.analytical);
          setMarketing(!!consent.marketing);
        }
      } catch {
        // parsing error
      }
    };

    // Check on mount
    checkConsent();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'plexus_cookie_consent') {
        checkConsent();
      }
    };

    const handleCustomConsent = () => {
      checkConsent();
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('plexus_consent_updated', handleCustomConsent);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('plexus_consent_updated', handleCustomConsent);
    };
  }, []);

  return (
    <>
      {analytical && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER');
            `}
          </Script>
        </>
      )}

      {marketing && (
        <Script id="marketing-script" strategy="afterInteractive">
          {`
            // Placeholder for Meta Pixel or LinkedIn Insight Tag
            console.log("Marketing scripts initialized.");
          `}
        </Script>
      )}
    </>
  );
}
