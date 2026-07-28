const fs = require('fs');
let html = fs.readFileSync('app/business-enquiry/raw.html', 'utf-8');
html = html.replace(/class=/g, 'className=')
           .replace(/for=/g, 'htmlFor=')
           .replace(/<img(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'))
           .replace(/<br>/g, '<br />')
           .replace(/<input(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'))
           .replace(/<!--[\s\S]*?-->/g, '')
           .replace(/style="display:none;"/g, 'style={{display: "none"}}')
           .replace(/\srequired=""/g, ' required')
           .replace(/\sselected=""/g, ' defaultValue');

const component = `
"use client";
import React, { useState } from 'react';

export default function BusinessEnquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: \`\${submitted ? "<div class='text-center p-5'><h3>Thank you for your enquiry! We will get back to you soon.</h3></div>" : ""}\` }}>
       {!submitted && (
           <form onSubmit={handleSubmit}>
              {/* Insert form html here */}
           </form>
       )}
    </div>
  )
}
`;
// Wait, I can just replace dangerouslySetInnerHTML with the actual JSX.
const jsxContent = `
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BusinessEnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div>
      <section className="breadcrumb-style1">
         <div className="breadcrumb-style1-bg bg-background-area" data-bg="/assets/images/breadcrumb/enquiry-bg.jpg">
         </div>
         <div className="breadcrumb-style1__shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img className="float-bob-y" src="/assets/images/shapes/breadcrumb-style1__shape1.png" alt="shape" />
         </div>
         <div className="breadcrumb-style1__shape2 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img className="float-bob-x" src="/assets/images/shapes/breadcrumb-style1__shape2.png" alt="shape" />
         </div>
         <div className="breadcrumb-style1__shape3 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img className=" rotatescale" src="/assets/images/shapes/breadcrumb-style1__shape3.png" alt="shape" />
         </div>
         <div className="breadcrumb-style1__shape4 wow slideInDown" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img className="float-bob" src="/assets/images/shapes/breadcrumb-style1__shape4.png" alt="shape" />
         </div>
         <div className="breadcrumb-style1__shape5 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img className="float-bob-right" src="/assets/images/shapes/breadcrumb-style1__shape5.png" alt="shape" />
         </div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6">
                  <div className="inner-content">
                     <div className="title">
                        <h2>Business Enquiry</h2>
                     </div>
                     <div className="breadcrumb-menu">
                        <ul>
                           <li><Link href="/">Home</Link></li>
                           <li className="active">Contact &amp; Support</li>
                           <li className="active">Business Enquiry</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 pt-2 pb-3 quick-explore">
                  <h6 className="fw-bold text-white mb-1 text-start border-bottom d-inline-block pb-1">Quick Explore</h6>
                  <div className="d-md-flex d-block gap-1 justify-content-start position-relative">
                     <ul>
                        <li className="mt-0 pt-0 text-start"><Link href="/compilance-reporting" className="text-white">Compliance &amp; Reporting
                           </Link>
                        </li>
                        <li className="mt-0 pt-0 text-start"><Link href="/global-office" className="text-white">Global Offices
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="main-contact-form-area" id="b-enquiry">
         <div className="container">
            <div className="inner-title text-center">
               <h2>Reach out to us for <br />business collaborations and opportunities</h2>
            </div>
            
            <div className="row justify-content-center form-margin">
               <div className="col-xl-8 border p-5">
                  <div className="contact-form p-0">
                    {submitted ? (
                        <div className="text-center py-5">
                            <h3 className="text-success mb-3">Thank You!</h3>
                            <p>Your business enquiry has been submitted successfully. Our team will get back to you shortly.</p>
                            <button className="btn-one mt-4" onClick={() => setSubmitted(false)}>
                                <span className="txt">Submit Another Enquiry</span>
                            </button>
                        </div>
                    ) : (
                     <form id="contact-form" name="contact_form" className="default-form2" onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-xl-6">
                              <div className="form-group">
                                 <div className="input-box">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="form_name" id="formName" placeholder="Full Name" required />
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-6">
                              <div className="form-group">
                                 <div className="input-box">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" name="company_name" id="companyName" placeholder="Company Name" required />
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-6">
                              <div className="form-group">
                                 <div className="input-box">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" name="form_email" id="formEmail" placeholder="Email Address" required />
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-6">
                              <div className="form-group">
                                 <div className="input-box">
                                    <label className="form-label">Country</label>
                                    <input type="text" name="form_country" id="formCountry" placeholder="Country" required />
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-12 mb-3">
                              <div className="form-group">
                                 <div className="input-box">
                                    <label className="form-label">Inquiry Type</label>
                                    <select className="form-select" aria-label="Default select example" required>
                                       <option value="">Select Inquiry Type</option>
                                       <option value="1">Licensing</option>
                                       <option value="2">Distribution</option>
                                       <option value="3">Manufacturing</option>
                                       <option value="4">Other</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-12">
                              <div className="form-group">
                                 <label className="form-label">Message box</label>
                                 <div className="input-box">
                                    <textarea name="form_message" id="formMessage" placeholder="Message" required></textarea>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-xl-12 text-center">
                              <div className="button-box">
                                 <button className="btn-one" type="submit" disabled={loading}>
                                    <span className="txt">
                                       {loading ? "Submitting..." : "submit now"}
                                    </span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                    )}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
`;
fs.writeFileSync('app/business-enquiry/page.tsx', jsxContent);
