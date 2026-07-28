export default function ComplianceReportingPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section class="breadcrumb-style1">
   <div class="breadcrumb-style1-bg bg-background-area" data-bg="/assets/images/breadcrumb/enquiry-bg.jpg">
   </div>
   <div class="breadcrumb-style1__shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-y" src="/assets/images/shapes/breadcrumb-style1__shape1.png" alt="shape">
   </div>
   <div class="breadcrumb-style1__shape2 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-x" src="/assets/images/shapes/breadcrumb-style1__shape2.png" alt="shape">
   </div>
   <div class="breadcrumb-style1__shape3 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class=" rotatescale" src="/assets/images/shapes/breadcrumb-style1__shape3.png" alt="shape">
   </div>
   <div class="breadcrumb-style1__shape4 wow slideInDown" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob" src="/assets/images/shapes/breadcrumb-style1__shape4.png" alt="shape">
   </div>
   <div class="breadcrumb-style1__shape5 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-right" src="/assets/images/shapes/breadcrumb-style1__shape5.png" alt="shape">
   </div>
   <div class="container">
      <div class="row align-items-center">
         <div class="col-md-6">
            <div class="inner-content">
               <div class="title">
                  <h2>Compliance and Reporting</h2>
               </div>
               <div class="breadcrumb-menu">
                  <ul>
                     <li><a href="/">Home</a></li>
                     <li class="active">Contact &amp; Support</li>
                     <li class="active">Compliance and Reporting</li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-md-6 pt-2 pb-3 quick-explore">
            <h6 class="fw-bold text-white mb-1 text-start border-bottom d-inline-block pb-1">Quick Explore</h6>
            <div class="d-md-flex d-block gap-1 justify-content-start position-relative">
               <ul>
                  <li class="mt-0 pt-0 text-start"><a href="/business-enquiry" class="text-white">Business Inquiry Form
                     </a>
                  </li>
                  <li class="mt-0 pt-0 text-start"><a href="/global-office" class="text-white">Global Offices
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="main-contact-form-area" id="compilance">
   <div class="container">
      <div class="inner-title text-center">
         <h2>Reporting Form</h2>
      </div>
      <!-- /.inner-title -->
      <div class="row justify-content-center form-margin">
         <div class="col-xl-7 border p-5">
            <div class="contact-form p-0">
               <form id="contact-form" name="contact_form" class="default-form2" action="assets/inc/sendmail.php" method="post">
                  <div class="row">
                     <div class="col-xl-6">
                        <div class="form-group">
                           <div class="input-box">
                              <label class="form-label">Name</label>
                              <input type="text" name="form_name" id="formName" placeholder="Name" required="">
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6">
                        <div class="form-group">
                           <div class="input-box">
                              <label class="form-label">Email Address</label>
                              <input type="text" name="form_name" id="formName" placeholder="Email Address" required="">
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6">
                        <div class="form-group">
                           <div class="input-box">
                              <label class="form-label">Subject</label>
                              <input type="text" name="form_name" id="formName" placeholder="Subject" required="">
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6">
                        <div class="form-group">
                           <div class="input-box">
                              <label class="form-label">File Upload</label>
                              <input type="file" name="form_name" class="border p-2 w-100" id="formName" placeholder="Subject" required="">
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-12">
                        <div class="form-group">
                           <label class="form-label">Message</label>
                           <div class="input-box">
                              <textarea name="form_message" id="formMessage" placeholder="Message" required=""></textarea>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-12">
                        <div class="form-group">
                           <div class="g-recaptcha pb-3 mt-3" data-sitekey="6LfCGrcsAAAAAJmecSf8KKOlmSGcREaPvcCxObp1"></div>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-xl-12 text-center">
                        <div class="button-box">
                           <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="">
                           <button class="btn-one" type="submit" data-loading-text="Please wait...">
                           <span class="txt">
                           submit 
                           </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="py-5 bg-light">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
               <div class="card-body p-4 rounded">
                  <h4 class="mb-4 text-center fw-semibold">
                     Compliance Contact Information
                  </h4>
                  <!-- Compliance Officer Email -->
                  <div class="d-flex align-items-start mb-3">
                     <div class="me-3 text-secondary fs-4">
                        <i class="fa fa-envelope"></i>
                     </div>
                     <div>
                        <h5 class="mb-1 fw-semibold">Compliance <span class="ff">Officer</span></h5>
                        <a href="mailto:compliance@companyname.com" class="text-decoration-none text-danger">
                        compliance@companyname.com
                        </a>
                     </div>
                  </div>
                  <hr>
                  <!-- Official Reporting Channel -->
                  <div class="d-flex align-items-start mb-3">
                     <div class="me-3 text-secondary fs-4">
                        <i class="fa fa-envelope"></i>
                     </div>
                     <div>
                        <h5 class="mb-1 fw-semibold"><span class="ff">Official</span> Reporting Channel</h5>
                        <a href="mailto:ethics@companyname.com" class="text-decoration-none text-danger">
                        ethics@companyname.com
                        </a>
                     </div>
                  </div>
                  <hr>
                  <!-- Disclaimer -->
                  <div class="d-flex align-items-start">
                     <div class="me-3 text-muted fs-4">
                        <i class="fa fa-info-circle"></i>
                     </div>
                     <div>
                        <h5 class="mb-1 fw-semibold">Disclaimer</h5>
                        <p class="mb-0 text-muted small">
                           All reports submitted through this channel are treated with
                           strict confidentiality and reviewed in accordance with
                           applicable laws and internal company policies. Retaliation
                           against individuals raising concerns in good faith is
                           strictly prohibited.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
` }} />
  );
}
