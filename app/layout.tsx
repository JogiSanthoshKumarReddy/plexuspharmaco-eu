import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ModernHeader from "@/components/layout/ModernHeader";
import ModernFooter from "@/components/layout/ModernFooter";
import RouteChangeHandler from "@/components/common/RouteChangeHandler";
import StructuredData from "@/components/common/StructuredData";
import Script from "next/script";

// Import modern UI fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Plexuspharmaco Europe | Global Healthcare Solutions",
    template: "%s | Plexuspharmaco Europe",
  },
  description: "A globally focused pharmaceutical company committed to building sustainable value through regulatory-compliant, high-quality healthcare solutions.",
  metadataBase: new URL('https://plexuspharmaco.eu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Plexuspharmaco Europe",
    description: "Regulatory-compliant, high-quality healthcare solutions.",
    url: "https://plexuspharmaco.eu",
    siteName: "Plexuspharmaco",
    images: [
      {
        url: "/pharma/assets/images/696f65db8cb34.png",
        width: 1200,
        height: 630,
        alt: "Plexuspharmaco Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plexuspharmaco Europe",
    description: "Global Healthcare Solutions and Advanced Therapies.",
    images: ["/pharma/assets/images/696f65db8cb34.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased bg-white text-slate-900`}>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,de,fr,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
          }
          window.changeLanguage = function(lang) {
            var cookieStr = '/en/' + lang;
            document.cookie = 'googtrans=' + cookieStr + '; path=/';
            document.cookie = 'googtrans=' + cookieStr + '; path=/; domain=' + window.location.hostname;
            window.location.reload();
          }
        ` }} />
        <StructuredData />
        <div className="flex flex-col min-h-screen">
          <RouteChangeHandler />
          <ModernHeader />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <ModernFooter />
        </div>
      </body>
    </html>
  );
}