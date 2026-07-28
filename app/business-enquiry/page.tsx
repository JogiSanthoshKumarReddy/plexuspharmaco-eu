"use client";
import React, { useState } from "react";
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';

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
      <BreadcrumbSection
        title="Business Enquiry"
        bgImage="/assets/images/breadcrumb/enquiry-bg.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact & Support" },
          { label: "Business Enquiry" },
        ]}
        quickExplore={[
          { label: "Compliance & Reporting", href: "/compilance-reporting" },
          { label: "Global Offices", href: "/global-office" },
        ]}
      />
      <section className="main-contact-form-area" id="b-enquiry">
        <div className="container">
          <div className="inner-title text-center">
            <h2>
              Reach out to us for <br />
              business collaborations and opportunities
            </h2>
          </div>

          <div className="row justify-content-center form-margin">
            <div className="col-xl-8 border p-5">
              <div className="contact-form p-0">
                {submitted ? (
                  <div className="text-center py-5">
                    <h3 className="text-success mb-3">Thank You!</h3>
                    <p>
                      Your business enquiry has been submitted successfully. Our
                      team will get back to you shortly.
                    </p>
                    <button
                      className="btn-one mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      <span className="txt">Submit Another Enquiry</span>
                    </button>
                  </div>
                ) : (
                  <form
                    id="contact-form"
                    name="contact_form"
                    className="default-form2"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <label className="form-label">Full Name</label>
                            <input
                              type="text"
                              name="form_name"
                              id="formName"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <label className="form-label">Company Name</label>
                            <input
                              type="text"
                              name="company_name"
                              id="companyName"
                              placeholder="Company Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <label className="form-label">Email Address</label>
                            <input
                              type="email"
                              name="form_email"
                              id="formEmail"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <label className="form-label">Country</label>
                            <input
                              type="text"
                              name="form_country"
                              id="formCountry"
                              placeholder="Country"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 mb-3">
                        <div className="form-group">
                          <div className="input-box">
                            <label className="form-label" htmlFor="inquiryType">Inquiry Type</label>
                            <select
                              className="form-select"
                              id="inquiryType"
                              name="inquiry_type"
                              aria-label="Select inquiry type"
                              required
                            >
                              <option value="">Select Inquiry Type</option>
                              <option value="licensing">Licensing</option>
                              <option value="distribution">Distribution</option>
                              <option value="manufacturing">Manufacturing</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="form-group">
                          <label className="form-label">Message box</label>
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              id="formMessage"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-xl-12 text-center">
                        <div className="button-box">
                          <button
                            className="btn-one"
                            type="submit"
                            disabled={loading}
                          >
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
