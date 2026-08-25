import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import ModernHeader from "@/components/layout/ModernHeader";
import ModernFooter from "@/components/layout/ModernFooter";
import RouteChangeHandler from "@/components/common/RouteChangeHandler";
import StructuredData from "@/components/common/StructuredData";
import CookieBanner from "@/components/common/CookieBanner";
import ScriptManager from "@/components/common/ScriptManager";
import Script from "next/script";

// Import modern UI fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-outfit", display: "swap" });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu';

  return {
    title: {
      default: "Plexus Pharmaco Europe | Global Healthcare Solutions",
      template: "%s | Plexus Pharmaco Europe",
    },
    description: "A globally focused pharmaceutical company committed to building sustainable value through regulatory-compliant, high-quality healthcare solutions.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
    },
    openGraph: {
      title: "Plexus Pharmaco Europe",
      description: "Regulatory-compliant, high-quality healthcare solutions.",
      url: `${baseUrl}/${locale}`,
      siteName: "Plexus Pharmaco",
      images: [
        {
          url: "/pharma/assets/images/696f65db8cb34.png",
          width: 1200,
          height: 630,
          alt: "Plexus Pharmaco Logo",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Plexus Pharmaco Europe",
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
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, interactive-widget=resizes-content" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased bg-white text-slate-900`}>
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script id="google-translate-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
          window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,de,fr,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
          }
        ` }} /> 
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <StructuredData locale={locale} />
        <div className="flex flex-col min-h-screen">
          <RouteChangeHandler />
          <ModernHeader />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <ModernFooter locale={locale} />
          <CookieBanner />
          <ScriptManager />
        </div>
      </body>
    </html>
  );
}