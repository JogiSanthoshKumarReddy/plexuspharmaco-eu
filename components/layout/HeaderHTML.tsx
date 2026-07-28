"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeaderHTML() {
  return (
    <>
      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                X
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/pharma/assets/images/696f65db8cb34.png"
                        width="200px"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="content-box pt-0">
                    <ul className="menu-3" id="menuAccordion">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <a href="#">Company</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseCompany"
                          aria-expanded="false"
                          aria-controls="collapseCompany"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseCompany"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/about">About us</Link>
                            </li>
                            <li>
                              <Link href="/corporate-governance">
                                Company Governance
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Product Catalogue</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseProducts"
                          aria-expanded="false"
                          aria-controls="collapseProducts"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseProducts"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/product-catalogue">
                                All Products
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-catalogue">
                                Nutraceutical formulations
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-catalogue">
                                Medical devices
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-catalogue">
                                Pharmaceuticals
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">R&D, Manufacturing, and Quality</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseRD"
                          aria-expanded="false"
                          aria-controls="collapseRD"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseRD"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/research-development">
                                Research and Development Capabilities
                              </Link>
                            </li>
                            <li>
                              <Link href="/manufacture-capability">
                                Manufacturing capabilities
                              </Link>
                            </li>
                            <li>
                              <Link href="/quality-assurance">
                                Quality assurance and compliance
                              </Link>
                            </li>
                            <li>
                              <Link href="/contract-manufacturing">
                                White labeling and Contract Manufacturing
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Global footprints</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseGlobal"
                          aria-expanded="false"
                          aria-controls="collapseGlobal"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseGlobal"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/presence">Global Presence</Link>
                            </li>
                            <li>
                              <Link href="/joint-venture">
                                Joint venture activities
                              </Link>
                            </li>
                            <li>
                              <Link href="/partnership">
                                Partnership opportunities
                              </Link>
                            </li>
                            <li>
                              <Link href="/distributorship">
                                Distributorship and agency
                              </Link>
                            </li>
                            <li>
                              <Link href="/strategic-alliance">
                                Strategic Collaborations
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Corporate Social Responsibilities (CSR)</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseCSR"
                          aria-expanded="false"
                          aria-controls="collapseCSR"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseCSR"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/health-community">
                                Community initiatives
                              </Link>
                            </li>
                            <li>
                              <Link href="/sustainability">
                                Environment and sustainability
                              </Link>
                            </li>
                            <li>
                              <Link href="/ethical-standard">
                                Ethical standards
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">News and Media</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNews"
                          aria-expanded="false"
                          aria-controls="collapseNews"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseNews"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/press-release">Press releases</Link>
                            </li>
                            <li>
                              <Link href="/media">Media coverages</Link>
                            </li>
                            <li>
                              <Link href="/event">Events and Conferences</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseCareers"
                          aria-expanded="false"
                          aria-controls="collapseCareers"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseCareers"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/life">
                                Life at Plexuspharmaco GmbH
                              </Link>
                            </li>
                            <li>
                              <Link href="/job-opening">Job Openings</Link>
                            </li>
                            <li>
                              <Link href="/internship">
                                Internships and Trainings
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Investors</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseInvestors"
                          aria-expanded="false"
                          aria-controls="collapseInvestors"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseInvestors"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/investor-relation">
                                Investor Relationship
                              </Link>
                            </li>
                            <li>
                              <Link href="/financial-report">
                                Financial Reports
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Contact and Support</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseContact"
                          aria-expanded="false"
                          aria-controls="collapseContact"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapseContact"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/global-office">Global Offices</Link>
                            </li>
                            <li>
                              <Link href="/business-enquiry">
                                Business Inquiry Form
                              </Link>
                            </li>
                            <li>
                              <Link href="/compilance-reporting">
                                Compliance and Reporting
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">For Patients</a>
                        <span
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePatients"
                          aria-expanded="false"
                          aria-controls="collapsePatients"
                          className="has-menu3 collapse-trigger-icon"
                        ></span>
                        <div
                          className="collapse"
                          data-bs-parent="#menuAccordion"
                          id="collapsePatients"
                        >
                          <ul className="has-menu3-dropdown ps-2">
                            <li>
                              <Link href="/patient-program">
                                Patient Support Program
                              </Link>
                            </li>
                            <li>
                              <Link href="/healthcare-tool">
                                Healthcare Professional Tools
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header main-header-style2">
        <div className="main-header-style2__top">
          <div className="container-fluid">
            <div className="main-header-style2__top-inner d-flex justify-content-end align-items-center ">
              <div
                id="google_translate_element"
                style={{ display: "none" }}
              ></div>
              <div className="d-flex align-items-center gap-3 language-switcher p-1">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (typeof (window as any).changeLanguage === 'function') (window as any).changeLanguage("en"); }}
                  title="English (UK)"
                >
                  <img src="/assets/images/uk.png" alt="English" />
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (typeof (window as any).changeLanguage === 'function') (window as any).changeLanguage("de"); }}
                  title="German"
                >
                  <img src="/assets/images/germany.png" alt="German" />
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (typeof (window as any).changeLanguage === 'function') (window as any).changeLanguage("fr"); }}
                  title="French"
                >
                  <img src="/assets/images/french.png" alt="French" />
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (typeof (window as any).changeLanguage === 'function') (window as any).changeLanguage("es"); }}
                  title="Spanish"
                >
                  <img src="/assets/images/spain.png" alt="Spanish" />
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); if (typeof (window as any).changeLanguage === 'function') (window as any).changeLanguage("ru"); }}
                  title="Russian"
                >
                  <img src="/assets/images/rusian.png" alt="Russian" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className="main-menu main-menu-style2">
          <div className="main-menu__wrapper clearfix">
            <div className="">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu-style2__left">
                  <div className="logo-box-style2 col-md-6 col-6">
                    <Link href="/">
                      <img
                        src="/pharma/assets/images/696f65db8cb34.png"
                        width="400px"
                        alt="logo"
                        title=""
                      />
                    </Link>
                  </div>
                  <div className="main-menu-box col-md-6 col-6 text-center">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="row d-block d-md-none">
                      <div className="col-md-12">
                        <ul className="main-menu__list">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li className="dropdown">
                            <a href="#">Company</a>
                            <ul>
                              <li>
                                <Link href="/about">About us</Link>
                              </li>
                              <li>
                                <Link href="/corporate-governance">
                                  Company Governance
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="/product-catalogue">
                              Product Catalogue
                            </Link>
                            <ul>
                              <li>
                                <Link href="/product-catalogue">
                                  All Products
                                </Link>
                              </li>
                              <li>
                                <Link href="/product-catalogue">
                                  Nutraceutical formulations
                                </Link>
                              </li>
                              <li>
                                <Link href="/product-catalogue">
                                  Medical devices
                                </Link>
                              </li>
                              <li>
                                <Link href="/product-catalogue">
                                  Pharmaceuticals
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">R&D, Manufacturing, and Quality</a>
                            <ul>
                              <li>
                                <Link href="/research-development">
                                  Research and Development Capabilities
                                </Link>
                              </li>
                              <li>
                                <Link href="/manufacture-capability">
                                  Manufacturing capabilities
                                </Link>
                              </li>
                              <li>
                                <Link href="/quality-assurance">
                                  Quality assurance and compliance
                                </Link>
                              </li>
                              <li>
                                <Link href="/contract-manufacturing">
                                  White labeling and Contract Manufacturing
                                </Link>
                              </li>
                              <li>
                                <Link href="/technology-platforms">
                                  Technology Platforms
                                </Link>
                              </li>
                              <li>
                                <Link href="/regulatory-compliance">
                                  Regulatory Compliance
                                </Link>
                              </li>
                              <li>
                                <Link href="/intellectual-property">
                                  Intellectual Property
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Global footprints</a>
                            <ul>
                              <li>
                                <Link href="/presence">Global Presence</Link>
                              </li>
                              <li>
                                <Link href="/joint-venture">
                                  Joint venture activities
                                </Link>
                              </li>
                              <li>
                                <Link href="/partnership">
                                  Partnership opportunities
                                </Link>
                              </li>
                              <li>
                                <Link href="/distributorship">
                                  Distributorship and agency
                                </Link>
                              </li>
                              <li>
                                <Link href="/strategic-alliance">
                                  Strategic Collaborations
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">
                              Corporate Social Responsibilities (CSR)
                            </a>
                            <ul>
                              <li>
                                <Link href="/health-community">
                                  Community initiatives
                                </Link>
                              </li>
                              <li>
                                <Link href="/sustainability">
                                  Environment and sustainability
                                </Link>
                              </li>
                              <li>
                                <Link href="/ethical-standard">
                                  Ethical standards
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">News and Media</a>
                            <ul>
                              <li>
                                <Link href="/press-release">
                                  Press releases
                                </Link>
                              </li>
                              <li>
                                <Link href="/media">Media coverages</Link>
                              </li>
                              <li>
                                <Link href="/event">
                                  Events and Conferences
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Careers</a>
                            <ul>
                              <li>
                                <Link href="/life">
                                  Life at Plexuspharmaco GmbH
                                </Link>
                              </li>
                              <li>
                                <Link href="/job-opening">Job Openings</Link>
                              </li>
                              <li>
                                <Link href="/internship">
                                  Internships and Trainings
                                </Link>
                              </li>
                              <li>
                                <Link href="/gallery">Photo Gallery</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Investors</a>
                            <ul>
                              <li>
                                <Link href="/investor-relation">
                                  Investor Relationship
                                </Link>
                              </li>
                              <li>
                                <Link href="/financial-report">
                                  Financial Reports
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Contact and Support</a>
                            <ul>
                              <li>
                                <Link href="/global-office">
                                  Global Offices
                                </Link>
                              </li>
                              <li>
                                <Link href="/business-enquiry">
                                  Business Inquiry Form
                                </Link>
                              </li>
                              <li>
                                <Link href="/compilance-reporting">
                                  Compliance and Reporting
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">For Patients</a>
                            <ul>
                              <li>
                                <Link href="/patient-program">
                                  Patient Support Program
                                </Link>
                              </li>
                              <li>
                                <Link href="/healthcare-tool">
                                  Healthcare Professional Tools
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-menu-style2__right">
                  <div className="side-content-button d-none d-md-block">
                    <div className="navSidebar-button">
                      <ul className="clearfix">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <ul className="clearfix">
                        <li className="color"></li>
                        <li className="color"></li>
                        <li className="color"></li>
                      </ul>
                      <ul className="clearfix">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricky-header--style2 stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times-circle"></i>
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="/pharma/assets/images/696f65db8cb34.png"
                width="200px"
                alt="Plexuspharmaco"
              />
            </Link>
          </div>
          <div className="mobile-nav__container"></div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:info@plexuspharmaco.com">
                info@plexuspharmaco.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+91 7304159520">+91 7304159520</a>
            </li>
          </ul>
          <div className="mobile-nav__social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="fab fa-linkedin me-2"
            ></a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="fab fa-youtube me-2 social-icon"
            ></a>
            <a
              href="https://x.com/"
              target="_blank"
              className="fab fa-x-twitter me-2"
            ></a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="fa-brands fa-facebook me-2"
            ></a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="fab fa-instagram social-icon"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}
