"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function GoogleTranslate() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  useEffect(() => {
    const forceTranslate = () => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        if (select.value === locale) return;
        
        if (locale !== "en") {
          select.value = locale;
          select.dispatchEvent(new Event("change"));
        }
      } else {
        setTimeout(forceTranslate, 300);
      }
    };

    if (!document.getElementById("google-translate-script")) {
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

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Start polling to force the translation as soon as the widget loads
    setTimeout(forceTranslate, 500);

  }, [locale]);

  return <div id="google_translate_element" className="opacity-0 absolute -z-50 w-px h-px overflow-hidden pointer-events-none"></div>;
}
