import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import HeaderHTML from "@/components/layout/HeaderHTML";
import FooterHTML from "@/components/layout/FooterHTML";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Plexuspharmaco GmbH",
  description:
    "Global Pharmaceutical, Nutraceutical and Medical Device Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {/* Next.js 13+ automatically hoists <link> tags to the document head */}
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="/assets/vendors/aos/aos.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.css" />
        <link rel="stylesheet" href="/assets/vendors/fancybox/fancybox.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/nice-select/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/thm-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/recoleta-fonts/stylesheet.css" />
        
        <link rel="stylesheet" href="/assets/css/module-css/01-header-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/02-banner-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/03-about-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/04-fact-counter-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/05-testimonial-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/06-partner-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/07-footer-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/08-blog-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/09-breadcrumb-section.css" />
        <link rel="stylesheet" href="/assets/css/module-css/10-contact.css" />
        <link rel="stylesheet" href="/assets/css/module-css/11-services-section.css" />
        
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <div className="page-wrapper">
          <HeaderHTML />
          {children}
          <FooterHTML />
        </div>

        <Script src="/assets/vendors/jquery/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/aos/aos.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/countdown/jquery.countdown.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/fancybox/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/isotope/isotope.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jarallax/jarallax.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/nice-select/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/odometer/odometer.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/swiper/swiper.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/wow/wow.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/extra-scripts/extra-scripts.js" strategy="lazyOnload" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
        <Script src="/assets/js/plexus-init.js" strategy="lazyOnload" />
        
        {/* Google Translate Scripts */}
        <Script id="google-translate-init" strategy="lazyOnload">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: 'en,de,fr,es,ru',
                  autoDisplay: false
                },
                'google_translate_element'
              );
            }
          `}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="lazyOnload" />
        <Script id="google-translate-custom" strategy="lazyOnload">
          {`
            (function () {
              // Hide the Google Translate banner bar - stops polling once hidden
              var _hideBarInterval = setInterval(function() {
                var iframe = document.querySelector('.goog-te-banner-frame');
                if (iframe) {
                  iframe.style.display = 'none';
                  document.body.style.top = '0px !important';
                }
                // Also force body top to 0 regardless
                if (document.body) {
                  document.body.style.top = '0px';
                }
              }, 250);
              // Stop after 30 seconds to prevent infinite polling
              setTimeout(function() { clearInterval(_hideBarInterval); }, 30000);
            })();

            function changeLanguage(lang) {
              var attempts = 0;
              var interval = setInterval(function() {
                attempts++;
                var select = document.querySelector('.goog-te-combo');
                if (select) {
                  select.value = lang;
                  select.dispatchEvent(new Event('change'));
                  clearInterval(interval);
                } else if (attempts > 50) {
                  // Give up after 5 seconds if Google Translate hasn't loaded
                  clearInterval(interval);
                  console.warn('Google Translate not available');
                }
              }, 100);
            }
            window.changeLanguage = changeLanguage;
          `}
        </Script>
      </body>
    </html>
  );
}