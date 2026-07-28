const fs = require('fs');

const offcanvasHTML = `
      <!-- Start sidebar widget content -->
      <div class="xs-sidebar-group info-group info-sidebar">
      <div class="xs-overlay xs-bg-black"></div>
      <div class="xs-sidebar-widget">
         <div class="sidebar-widget-container">
            <div class="widget-heading">
               <a href="#" class="close-side-widget">X</a>
            </div>
            <div class="sidebar-textwidget">
               <div class="sidebar-info-contents">
                  <div class="content-inner">
                     <div class="logo">
                        <a href="/">
                        <img src="/pharma/assets/images/696f65db8cb34.png" width="200px" alt="logo" />
                        </a>
                     </div>
                     <div class="content-box pt-0">
                        <ul class="menu-3" id="menuAccordion">
                           <li>
                              <a href="/">Home</a>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseCompany" role="button" aria-expanded="false" aria-controls="collapseCompany" class="has-menu3">
                              Company
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseCompany">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/about">About us</a></li>
                                    <li><a href="/corporate-governance">Company Governance</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseProducts" role="button" aria-expanded="false" aria-controls="collapseProducts" class="has-menu3">
                              Product Catalogue
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseProducts">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/product-catalogue">All Products</a></li>
                                    <li><a href="/product-catalogue">Nutraceutical formulations</a></li>
                                    <li><a href="/product-catalogue">Medical devices</a></li>
                                    <li><a href="/product-catalogue">Pharmaceuticals</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseRD" role="button" aria-expanded="false" aria-controls="collapseRD" class="has-menu3">
                              R&D, Manufacturing, and Quality
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseRD">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/research-development">Research and Development Capabilities</a></li>
                                    <li><a href="/manufacture-capability">Manufacturing capabilities</a></li>
                                    <li><a href="/quality-assurance">Quality assurance and compliance</a></li>
                                    <li><a href="/contract-manufacturing">White labeling and Contract Manufacturing</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseGlobal" role="button" aria-expanded="false" aria-controls="collapseGlobal" class="has-menu3">
                              Global footprints
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseGlobal">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/presence">Global Presence</a></li>
                                    <li><a href="/joint-venture">Joint venture activities</a></li>
                                    <li><a href="/partnership">Partnership opportunities</a></li>
                                    <li><a href="/distributorship">Distributorship and agency</a></li>
                                    <li><a href="/strategic-alliance">Strategic Collaborations</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseCSR" role="button" aria-expanded="false" aria-controls="collapseCSR" class="has-menu3">
                              Corporate Social Responsibilities (CSR)
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseCSR">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/health-community">Community initiatives</a></li>
                                    <li><a href="/sustainability">Environment and sustainability</a></li>
                                    <li><a href="/ethical-standard">Ethical standards</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseNews" role="button" aria-expanded="false" aria-controls="collapseNews" class="has-menu3">
                              News and Media
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseNews">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/press-release">Press releases</a></li>
                                    <li><a href="/media">Media coverages</a></li>
                                    <li><a href="/event">Events and Conferences</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseCareers" role="button" aria-expanded="false" aria-controls="collapseCareers" class="has-menu3">
                              Careers
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseCareers">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/life">Life at Plexuspharmaco GmbH</a></li>
                                    <li><a href="/job-opening">Job Openings</a></li>
                                    <li><a href="/internship">Internships and Trainings</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseInvestors" role="button" aria-expanded="false" aria-controls="collapseInvestors" class="has-menu3">
                              Investors
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseInvestors">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/investor-relation">Investor Relationship</a></li>
                                    <li><a href="/financial-report">Financial Reports</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapseContact" role="button" aria-expanded="false" aria-controls="collapseContact" class="has-menu3">
                              Contact and Support
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapseContact">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/global-office">Global Offices</a></li>
                                    <li><a href="/business-enquiry">Business Inquiry Form</a></li>
                                    <li><a href="/compilance-reporting">Compliance and Reporting</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <a data-bs-toggle="collapse" href="#collapsePatients" role="button" aria-expanded="false" aria-controls="collapsePatients" class="has-menu3">
                              For Patients
                              </a>
                              <div class="collapse" data-bs-parent="#menuAccordion" id="collapsePatients">
                                 <ul class="has-menu3-dropdown ps-2">
                                    <li><a href="/patient-program">Patient Support Program</a></li>
                                    <li><a href="/healthcare-tool">Healthcare Professional Tools</a></li>
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
      <!-- End sidebar widget content -->
`;

let content = fs.readFileSync('components/layout/HeaderHTML.tsx', 'utf8');

// Insert offcanvasHTML right after `<div dangerouslySetInnerHTML={{ __html: \``
content = content.replace(/<div dangerouslySetInnerHTML=\{\{ __html: \`/, '<div dangerouslySetInnerHTML={{ __html: `\n' + offcanvasHTML);

fs.writeFileSync('components/layout/HeaderHTML.tsx', content, 'utf8');
console.log('Offcanvas added successfully.');
