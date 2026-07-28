export default function FooterHTML() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<footer class="footer-style1">
   <div class="footer-style1__shape1 wow slideInDown" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-x" src="/assets/images/shapes/footer_shape1.png" alt="">
   </div>
   <div class="footer-style1__shape2 wow slideInUp" data-wow-delay="300ms" data-wow-duration="2500ms">
      <img class="float-bob-y" src="/assets/images/shapes/footer_shape2.png" alt="">
   </div>
   <div class="footer-style1__shape3 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="rotatescale" src="/assets/images/shapes/footer_shape3.png" alt="">
   </div>
   <div class="footer-style1__shape4 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-right" src="/assets/images/shapes/footer_shape4.png" alt="">
   </div>
   <div class="footer-style1__shape5 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-x" src="/assets/images/shapes/footer_shape5.png" alt="">
   </div>
   <!--Start Footer Main-->
   <div class="footer-main footer-main--style2">
      <div class="container-fluid">
         <div class="row">
            <!--Start Single Footer Widget-->
            <div class="col-xl-4 col-lg-6 col-md-6 single-widget wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
               <div class="single-footer-widget marbtm">
                  <div class="title">
                     <h3>About Plexuspharmaco </h3>
                  </div>
                  <div class="our-company-info">
                     <div class="text">
                        <p>Plexuspharmaco is a globally focused pharmaceutical company committed to
                           building sustainable value through regulatory-compliant, high-quality healthcare
                           solutions. By leveraging strategic manufacturing partnerships and an international
                           distribution network, we address both regulated and emerging markets while
                           maintaining a strong focus on operational excellence, innovation, and long-term
                           stakeholder value.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <!--End single footer widget-->
            <div class="col-xl-4 col-lg-6 col-md-6 single-widget wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
               <div class="single-footer-widget martop">
                  <div class="title">
                     <h3>Head <span class="ff">Office</span>:</h3>
                  </div>
                  <div class="footer-widget-contact-info">
                     <div class="text">
                        <h5 class="text-white">Plexuspharmaco GmbH</h5>
                        <p>Plexuspharmaco GmbH Frankenstr. 34 96146, Altendorf Germany.</p>
                     </div>
                     <div class="title mt-3">
                        <h3>India <span class="ff">Offices</span>:</h3>
                     </div>
                     <div class="text">
                        <h5 class="text-white">Plexus Biogenix LLP</h5>
                        <p>Janapath, 217 Sadashiv Peth, Pune – 411030 (MS), India.</p>
                     </div>
                     <div class="text">
                        <h5 class="text-white">Plexus Biocare Pvt. Ltd.</h5>
                        <p>Sankruti Sankul, Zashi Rani Chowk, Sitabuldi, Nagpur – 440012 (MS), India.</p>
                     </div>
                  </div>
               </div>
            </div>
            <!--Start single footer widget-->
            <div class="col-xl-4 col-lg-6 col-md-6 single-widget wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
               <div class="single-footer-widget martop">
                  <div class="title">
                     <h3>Contact Information</h3>
                  </div>
                  <div class="footer-widget-contact-info">
                     <ul>
                        <li><a href="mailto:info@plexuspharmaco.com">info@plexuspharmaco.com</a></li>
                        <li><a href="tel:+91 7304159520">+91 7304159520</a></li>
                        <li><a href="tel:+49 152 1304 8766">+49 152 1304 8766</a></li>
                     </ul>
                     <!-- Right: Social Icons -->
                     <div class="mobile-nav__social mt-3">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="fab fa-linkedin me-2"></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="fab fa-youtube me-2 social-icon"></a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="fab fa-x-twitter me-2"></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="fa-brands fa-facebook me-2"></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="fab fa-instagram social-icon"></a>
                     </div>
                  </div>
               </div>
            </div>
            <!--End single footer widget-->
         </div>
      </div>
   </div>
   <!--End Footer Main-->
   <!--Start Footer Bottom-->
   <div class="footer-bottom">
      <div class="container-fluid">
         <div class="bottom-inner d-block">
            <div class="row">
               <!-- Left: Copyright -->
               <div class="copyright-text text-white col-md-9">
                  © Copyright 2026                  <a href="/./" class="text-white">Plexuspharmaco</a>
                  - All Rights Reserved.
               </div>
               <div class="copyright-text text-white col-md-3 d-flex ">
                  <a href="/terms-condition" class="text-white me-3">Terms &amp; Condition</a>
                  <a href="/privacy-policy" class="text-white me-3">Privacy Policy</a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!--End Footer Bottom-->
</footer>
` }} />
  );
}