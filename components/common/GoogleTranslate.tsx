"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Prevent multiple injections
    if (document.getElementById("google-translate-script")) return;

    // Define the initialization callback
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        { 
          pageLanguage: "en", 
          includedLanguages: "en,de,fr,es",
          autoDisplay: false 
        },
        "google_translate_element"
      );
    };

    // Inject the Google Translate script dynamically after hydration
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" style={{ display: "none", visibility: "hidden" }}></div>;
}
