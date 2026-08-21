"use client";

import React, { useState, useEffect } from 'react';
import { X, Shield, Settings } from 'lucide-react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Consent toggles
  const [analyticalConsent, setAnalyticalConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consentStr = localStorage.getItem('plexus_cookie_consent');
    if (!consentStr) {
      // Small delay to ensure hydration matches and to not block initial paint abruptly
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = { strictlyNecessary: true, analytical: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem('plexus_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const preferences = { strictlyNecessary: true, analytical: false, marketing: false, timestamp: new Date().toISOString() };
    localStorage.setItem('plexus_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    const preferences = { strictlyNecessary: true, analytical: analyticalConsent, marketing: marketingConsent, timestamp: new Date().toISOString() };
    localStorage.setItem('plexus_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Dimmed Background Overlay when Preferences are open */}
      {showPreferences && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm transition-opacity" onClick={() => setShowPreferences(false)} />
      )}

      {/* Main Banner / Preferences Modal */}
      <div 
        className={`fixed z-50 transition-all duration-500 ease-out ${
          showPreferences 
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg rounded-2xl shadow-2xl' 
            : 'bottom-0 left-0 right-0 w-full rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]'
        } bg-white border border-slate-200`}
      >
        {!showPreferences ? (
          // Compact Banner View
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full hidden md:block">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-outfit">We value your privacy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use strictly necessary cookies to make our site work. We'd also like to set analytical and marketing cookies to help us improve it. We won't set optional cookies unless you enable them. For more detailed information, please see our{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 flex-shrink-0">
              <button 
                onClick={() => setShowPreferences(true)}
                className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Preferences
              </button>
              <button 
                onClick={handleRejectAll}
                className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Reject All
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors shadow-md"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Detailed Preferences Modal View
          <div className="p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-slate-900 font-outfit">Cookie Preferences</h3>
              </div>
              <button onClick={() => setShowPreferences(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6 mb-8">
              {/* Strictly Necessary */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Strictly Necessary</h4>
                  <p className="text-xs text-slate-600">These cookies are essential for the website to function properly. They cannot be disabled.</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-11 h-6 bg-primary rounded-full relative opacity-50 cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytical */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Analytical Cookies</h4>
                  <p className="text-xs text-slate-600">Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </div>
                <div className="flex-shrink-0">
                  <button 
                    onClick={() => setAnalyticalConsent(!analyticalConsent)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${analyticalConsent ? 'bg-primary' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${analyticalConsent ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Marketing Cookies</h4>
                  <p className="text-xs text-slate-600">Used to track visitors across websites to allow publishers to display relevant and engaging advertisements.</p>
                </div>
                <div className="flex-shrink-0">
                  <button 
                    onClick={() => setMarketingConsent(!marketingConsent)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${marketingConsent ? 'bg-primary' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${marketingConsent ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button 
                onClick={handleRejectAll}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Reject All
              </button>
              <button 
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
