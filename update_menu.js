const fs = require('fs');
const filePath = 'components/layout/HeaderHTML.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const newMenu = `<ul class="main-menu__list">
    <li><a href="/">Home</a></li>
    <li class="dropdown">
        <a href="#">Company</a>
        <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/corporate-governance">Company Governance</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">Products</a>
        <ul>
            <li><a href="/product-catalogue">Nutraceutical formulations</a></li>
            <li><a href="/product-catalogue">Medical devices</a></li>
            <li><a href="/product-catalogue">Pharmaceuticals</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">R&D, Manufacturing, and Quality</a>
        <ul>
            <li><a href="/research-development">Research and Development Capabilities</a></li>
            <li><a href="/manufacture-capability">Manufacturing capabilities</a></li>
            <li><a href="/quality-assurance">Quality assurance and compliance</a></li>
            <li><a href="/contract-manufacturing">White labeling and Contract Manufacturing</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">Global footprints</a>
        <ul>
            <li><a href="/presence">Global Presence</a></li>
            <li><a href="/joint-venture">Joint venture activities</a></li>
            <li><a href="/partnership">Partnership opportunities</a></li>
            <li><a href="/distributorship">Distributorship and agency</a></li>
            <li><a href="/strategic-alliance">Strategic Collaborations</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">Corporate Social Responsibilities (CSR)</a>
        <ul>
            <li><a href="/health-community">Community initiatives</a></li>
            <li><a href="/sustainability">Environment and sustainability</a></li>
            <li><a href="/ethical-standard">Ethical standards</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">News and Media</a>
        <ul>
            <li><a href="/press-release">Press releases</a></li>
            <li><a href="/media">Media coverages</a></li>
            <li><a href="/event">Events and Conferences</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">Careers</a>
        <ul>
            <li><a href="/life">Life at Plexuspharmaco GmbH</a></li>
            <li><a href="/job-opening">Job Openings</a></li>
            <li><a href="/internship">Internships and Trainings</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">Investors</a>
        <ul>
            <li><a href="/investor-relation">Investor Relationship</a></li>
            <li><a href="/financial-report">Financial Reports</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">Contact and Support</a>
        <ul>
            <li><a href="/global-office">Global Offices</a></li>
            <li><a href="/business-enquiry">Business Inquiry Form</a></li>
            <li><a href="/compilance-reporting">Compliance and Reporting</a></li>
        </ul>
    </li>
    <li class="dropdown">
        <a href="#">For Patients</a>
        <ul>
            <li><a href="/patient-program">Patient Support Program</a></li>
            <li><a href="/healthcare-tool">Healthcare Professional Tools</a></li>
        </ul>
    </li>
</ul>`;

const startIndex = content.indexOf('<ul class="main-menu__list">');
let endIndex = startIndex;
let stack = 0;

for (let i = startIndex; i < content.length; i++) {
    if (content.substr(i, 3) === '<ul') stack++;
    if (content.substr(i, 4) === '</ul') stack--;
    if (stack === 0 && content.substr(i, 5) === '</ul>') {
        endIndex = i + 5;
        break;
    }
}

if (startIndex !== -1 && endIndex !== startIndex) {
    const newContent = content.substring(0, startIndex) + newMenu + content.substring(endIndex);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Menu successfully updated!");
} else {
    console.log("Menu not found.");
}
