import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../public/assets/pdfs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Brand Colors
const NAVY = [11, 61, 145];       // #0b3d91
const SLATE_DARK = [30, 41, 59];  // #1e293b
const SLATE_MUTED = [100, 116, 139]; // #64748b
const LIGHT_BG = [248, 250, 252]; // #f8fafc
const BORDER_COLOR = [226, 232, 240];

// Helper: Add Standard Header and Footer
function addHeaderFooter(doc, title, docRef) {
  const totalPages = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Top Brand Bar
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, pageWidth, 12, 'F');
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('PLEXUSPHARMACO GmbH  |  EUROPEAN HEADQUARTERS', 14, 8);
    
    if (docRef) {
      doc.setFont('helvetica', 'normal');
      doc.text(`DOC REF: ${docRef}`, pageWidth - 14, 8, { align: 'right' });
    }

    // Bottom Footer
    doc.setDrawColor(...BORDER_COLOR);
    doc.setLineWidth(0.5);
    doc.line(14, pageHeight - 14, pageWidth - 14, pageHeight - 14);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...SLATE_MUTED);
    doc.text('© 2026 Plexuspharmaco GmbH. All rights reserved. Confidential & Proprietary Document.', 14, pageHeight - 8);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - 14, pageHeight - 8, { align: 'right' });
  }
}

// Helper: Title Section
function addTitleBlock(doc, title, subtitle, category = 'OFFICIAL DOCUMENT') {
  const pageWidth = doc.internal.pageSize.getWidth();
  
  doc.setFillColor(...LIGHT_BG);
  doc.rect(14, 20, pageWidth - 28, 28, 'F');
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(1.5);
  doc.line(14, 20, 14, 48);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...NAVY);
  doc.text(category.toUpperCase(), 20, 27);

  doc.setFontSize(16);
  doc.setTextColor(...SLATE_DARK);
  doc.text(title, 20, 36);

  if (subtitle) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...SLATE_MUTED);
    doc.text(subtitle, 20, 43);
  }
}

// 1. GENERATE FINANCIAL & INVESTOR REPORTS
function generateFinancialReport(filename, title, subtitle, period, docRef, metrics = []) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  addTitleBlock(doc, title, subtitle, 'FINANCIAL & INVESTOR REPORT');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('1. Executive Overview', 14, 58);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...SLATE_DARK);
  const overviewText = `Plexuspharmaco GmbH reports strong financial results for ${period}. Our continued expansion across key European markets, coupled with disciplined capital allocation and investments in high-barrier pharmaceutical R&D, has positioned the organization for sustainable growth. All figures comply with International Financial Reporting Standards (IFRS).`;
  const splitOverview = doc.splitTextToSize(overviewText, pageWidth - 28);
  doc.text(splitOverview, 14, 65);

  let currentY = 65 + (splitOverview.length * 5) + 6;

  if (metrics.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    doc.text('2. Financial Performance Summary', 14, currentY);
    currentY += 6;

    autoTable(doc, {
      startY: currentY,
      head: [['Financial Metric', 'Current Period', 'Prior Period', 'YoY Growth / Change']],
      body: metrics,
      headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold', fontSize: 9 },
      bodyStyles: { textColor: SLATE_DARK, fontSize: 8.5 },
      alternateRowStyles: { fillColor: LIGHT_BG },
      margin: { left: 14, right: 14 }
    });

    currentY = doc.lastAutoTable.finalY + 12;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('3. Strategic Highlights & Outlook', 14, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...SLATE_DARK);
  const highlights = [
    '• Accelerated European market penetration across EU Member States.',
    '• Expanded GMP manufacturing capabilities and validated cold-chain logistics networks.',
    '• Robust investment in bioequivalence (BE) studies and dossier preparation.',
    '• Zero material non-compliance events recorded across all audit cycles.'
  ];
  highlights.forEach(h => {
    doc.text(h, 14, currentY);
    currentY += 5.5;
  });

  currentY += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text('Corporate Governance & Disclaimer', 14, currentY);
  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...SLATE_MUTED);
  const disclaimer = 'This document contains audited corporate and financial disclosures prepared for shareholders, regulatory authorities, and financial partners. Forward-looking statements involve known risks and uncertainties.';
  doc.text(doc.splitTextToSize(disclaimer, pageWidth - 28), 14, currentY);

  addHeaderFooter(doc, title, docRef);
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, Buffer.from(doc.output('arraybuffer')));
  console.log(`Generated: ${filename}`);
}

// 2. GENERATE BRAND GUIDELINES & MEDIA KITS
function generateBrandGuidelines() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  addTitleBlock(doc, 'Plexuspharmaco Brand Guidelines', 'Official Identity & Communications Standards 2026', 'BRAND & COMMUNICATIONS');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('1. Brand Mission & Values', 14, 58);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...SLATE_DARK);
  const mission = 'Plexuspharmaco represents precision, pharmaceutical integrity, and science-led innovation. Our brand identity reflects our dedication to advancing healthcare solutions across global markets.';
  doc.text(doc.splitTextToSize(mission, pageWidth - 28), 14, 65);

  let currentY = 82;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('2. Primary Brand Color Palette', 14, currentY);
  currentY += 6;

  autoTable(doc, {
    startY: currentY,
    head: [['Color Name', 'HEX Code', 'RGB Value', 'Primary Usage']],
    body: [
      ['Plexus Navy Blue', '#0B3D91', 'RGB(11, 61, 145)', 'Primary Brand, Headers, Badges'],
      ['Slate Dark', '#1E293B', 'RGB(30, 41, 59)', 'Headings, Primary Body Text'],
      ['Accent Cyan / Teal', '#00A896', 'RGB(0, 168, 150)', 'Highlights, Interactive Buttons'],
      ['Slate Muted', '#64748B', 'RGB(100, 116, 139)', 'Subtitles, Secondary Information'],
      ['Background Light', '#F8FAFC', 'RGB(248, 250, 252)', 'Card Containers, Section Backgrounds']
    ],
    headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { textColor: SLATE_DARK, fontSize: 8.5 },
    margin: { left: 14, right: 14 }
  });

  currentY = doc.lastAutoTable.finalY + 12;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('3. Logo Usage Rules', 14, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...SLATE_DARK);
  const logoRules = [
    '• Always maintain a minimum clear space equal to the height of the "P" emblem around the logo.',
    '• Do not stretch, rotate, or alter the color proportions of the official emblem.',
    '• For dark backgrounds, use the approved white/inverted logo vector format.',
    '• Contact press@plexuspharmaco.eu for official high-resolution vector assets (SVG, EPS, PNG).'
  ];
  logoRules.forEach(r => {
    doc.text(r, 14, currentY);
    currentY += 5.5;
  });

  addHeaderFooter(doc, 'Plexuspharmaco Brand Guidelines', 'DOC-BRAND-2026-V1');
  fs.writeFileSync(path.join(outputDir, 'Plexuspharmaco_Corporate_Brand_Guidelines.pdf'), Buffer.from(doc.output('arraybuffer')));
  console.log('Generated: Plexuspharmaco_Corporate_Brand_Guidelines.pdf');
}

// 3. GENERATE MEDIA KITS
function generateMediaKit(filename, title, subtitle, docRef, items = []) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  addTitleBlock(doc, title, subtitle, 'MEDIA & PRESS ASSETS');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('Asset Overview & Usage Conditions', 14, 58);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...SLATE_DARK);
  const text = 'These official assets are provided for accredited journalists, news publications, and industry partners. All media contents remain the intellectual property of Plexuspharmaco GmbH.';
  doc.text(doc.splitTextToSize(text, pageWidth - 28), 14, 65);

  autoTable(doc, {
    startY: 78,
    head: [['Asset Name', 'Format / Resolution', 'Description', 'Access Link']],
    body: items,
    headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { textColor: SLATE_DARK, fontSize: 8.5 },
    alternateRowStyles: { fillColor: LIGHT_BG },
    margin: { left: 14, right: 14 }
  });

  addHeaderFooter(doc, title, docRef);
  fs.writeFileSync(path.join(outputDir, filename), Buffer.from(doc.output('arraybuffer')));
  console.log(`Generated: ${filename}`);
}

// 4. GENERATE COMPLIANCE & POLICY DOCUMENTS
function generateComplianceDoc(filename, title, subtitle, docRef, sections = []) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  addTitleBlock(doc, title, subtitle, 'REGULATORY & COMPLIANCE');

  let currentY = 56;
  sections.forEach((sec, idx) => {
    if (currentY > 240) {
      doc.addPage();
      currentY = 25;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    doc.text(`${idx + 1}. ${sec.heading}`, 14, currentY);
    currentY += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...SLATE_DARK);
    const splitBody = doc.splitTextToSize(sec.content, pageWidth - 28);
    doc.text(splitBody, 14, currentY);
    currentY += (splitBody.length * 4.5) + 6;
  });

  addHeaderFooter(doc, title, docRef);
  fs.writeFileSync(path.join(outputDir, filename), Buffer.from(doc.output('arraybuffer')));
  console.log(`Generated: ${filename}`);
}

// 5. GENERATE INDIVIDUAL PRODUCT SPECIFICATION PDF
function generateProductSpecPDF(product) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  addTitleBlock(
    doc,
    product.name,
    `Category: ${product.category}  |  Product Specification Sheet`,
    'PRODUCT SPECIFICATION & DOSSIER'
  );

  let currentY = 56;

  // Description Block
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('1. Product Description & Overview', 14, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...SLATE_DARK);
  const desc = product.description || `${product.name} is a premium formulation manufactured in accordance with strict European Good Manufacturing Practice (GMP) standards.`;
  const splitDesc = doc.splitTextToSize(desc, pageWidth - 28);
  doc.text(splitDesc, 14, currentY);
  currentY += (splitDesc.length * 5) + 8;

  // Key Features
  if (product.features && product.features.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    doc.text('2. Quality & Commercial Features', 14, currentY);
    currentY += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...SLATE_DARK);
    product.features.forEach(f => {
      doc.text(`• ${f}`, 14, currentY);
      currentY += 5;
    });
    currentY += 6;
  }

  // Active Ingredients Table
  if (product.ingredients && product.ingredients.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    doc.text('3. Active Ingredients & Composition', 14, currentY);
    currentY += 6;

    const tableBody = product.ingredients.map(i => [i.name, i.dosage, i.dv || '-']);

    autoTable(doc, {
      startY: currentY,
      head: [['Active Component', 'Amount Per Serving', '% Daily Value (DV)']],
      body: tableBody,
      headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold', fontSize: 9 },
      bodyStyles: { textColor: SLATE_DARK, fontSize: 8.5 },
      alternateRowStyles: { fillColor: LIGHT_BG },
      margin: { left: 14, right: 14 }
    });

    currentY = doc.lastAutoTable.finalY + 10;
  }

  // Specifications Grid
  if (currentY > 230) {
    doc.addPage();
    currentY = 25;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('4. Regulatory & Commercial Specifications', 14, currentY);
  currentY += 6;

  autoTable(doc, {
    startY: currentY,
    head: [['Parameter', 'Specification Standard']],
    body: [
      ['Dosage Form / Delivery', product.category || 'Pharmaceutical / Nutraceutical'],
      ['Quality Certificate', 'Certificate of Analysis (CoA), GMP, Free Sale Certificate (FSC)'],
      ['Regulatory Dossier', 'CTD / eCTD Format Available Upon Request'],
      ['Storage Conditions', 'Store below 25°C in a dry place, protected from direct sunlight'],
      ['Shelf Life / Stability', '24 to 36 Months (Accelerated & Real-Time Stability Data Available)']
    ],
    headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { textColor: SLATE_DARK, fontSize: 8.5 },
    margin: { left: 14, right: 14 }
  });

  addHeaderFooter(doc, product.name, `DOC-SPEC-${product.id.substring(0, 12).toUpperCase()}`);
  const filename = `Plexuspharmaco_Product_Spec_${product.id}.pdf`;
  fs.writeFileSync(path.join(outputDir, filename), Buffer.from(doc.output('arraybuffer')));
}

// 6. GENERATE FULL CATALOGUE PDF
function generateFullCataloguePDF(products) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  addTitleBlock(
    doc,
    'Plexuspharmaco Product Catalogue 2026',
    'Comprehensive Portfolio of Pharmaceuticals, Nutraceuticals & Healthcare Solutions',
    'FULL PRODUCT CATALOGUE'
  );

  let currentY = 56;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text('About Plexuspharmaco Product Line', 14, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...SLATE_DARK);
  const intro = `Plexuspharmaco GmbH offers a portfolio of high-quality finished pharmaceutical dosage forms (FDFs), nutraceuticals, pediatric formulas, and specialized healthcare products. All products are manufactured in compliance with strict EU-GMP, ISO, and global regulatory standards.`;
  doc.text(doc.splitTextToSize(intro, pageWidth - 28), 14, currentY);
  currentY += 18;

  const tableBody = products.map((p, idx) => [
    (idx + 1).toString(),
    p.name,
    p.category,
    p.ingredients && p.ingredients.length > 0 ? p.ingredients.map(i => i.name).join(', ') : 'Standard Formulation'
  ]);

  autoTable(doc, {
    startY: currentY,
    head: [['#', 'Product Name', 'Category', 'Key Ingredients']],
    body: tableBody,
    headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold', fontSize: 8.5 },
    bodyStyles: { textColor: SLATE_DARK, fontSize: 7.5 },
    alternateRowStyles: { fillColor: LIGHT_BG },
    margin: { left: 14, right: 14 }
  });

  addHeaderFooter(doc, 'Plexuspharmaco Product Catalogue 2026', 'DOC-CATALOGUE-2026');
  fs.writeFileSync(path.join(outputDir, 'Plexuspharmaco_Product_Catalogue_2026.pdf'), Buffer.from(doc.output('arraybuffer')));
  console.log('Generated: Plexuspharmaco_Product_Catalogue_2026.pdf');
}

// MAIN EXECUTION
function main() {
  console.log('Starting PDF Generation...');

  // Financial & Investor Reports
  generateFinancialReport(
    'financial-report-2026.pdf',
    'Q2 2026 Financial Results & Operational Performance',
    'Plexuspharmaco GmbH - Half-Year Corporate Disclosure',
    'Q2 2026',
    'FIN-2026-Q2',
    [
      ['Gross Revenue', '€48.5 Million', '€41.2 Million', '+17.7%'],
      ['Operating Profit (EBITDA)', '€12.8 Million', '€10.1 Million', '+26.7%'],
      ['R&D Expenditure', '€6.4 Million', '€5.2 Million', '+23.0%'],
      ['Net Profit Margin', '18.4%', '16.5%', '+1.9%']
    ]
  );
  generateFinancialReport('Plexuspharmaco_Q2_2026_Financial_Results.pdf', 'Q2 2026 Financial Results', 'Plexuspharmaco GmbH', 'Q2 2026', 'FIN-2026-Q2', [
    ['Gross Revenue', '€48.5 Million', '€41.2 Million', '+17.7%'],
    ['Operating Profit (EBITDA)', '€12.8 Million', '€10.1 Million', '+26.7%'],
    ['R&D Expenditure', '€6.4 Million', '€5.2 Million', '+23.0%']
  ]);

  generateFinancialReport(
    'esg-report-2026.pdf',
    'Annual Sustainability & ESG Report 2026',
    'Environmental, Social, and Governance Commitments',
    'FY 2025/2026',
    'ESG-2026-01',
    [
      ['Carbon Footprint Reduction', '-22.4% CO2e', '-15.1% CO2e', '+7.3% Improvement'],
      ['Recyclable Packaging Ratio', '94.2%', '88.0%', '+6.2%'],
      ['Renewable Energy Usage', '81.5%', '72.0%', '+9.5%']
    ]
  );
  generateFinancialReport('Plexuspharmaco_ESG_Report_2026.pdf', 'Annual Sustainability & ESG Report 2026', 'Plexuspharmaco GmbH', '2026', 'ESG-2026-01');

  generateFinancialReport(
    'annual-report-2025.pdf',
    'Annual Report 2025: Expanding Horizons in Global Healthcare',
    'Plexuspharmaco GmbH - Full Year Operational Overview',
    'FY 2025',
    'AR-2025-FULL',
    [
      ['Annual Revenue', '€168.2 Million', '€142.0 Million', '+18.45%'],
      ['Active International Markets', '42 Countries', '35 Countries', '+7 Markets'],
      ['Registered Product Dossiers', '185 Dossiers', '152 Dossiers', '+33 Dossiers']
    ]
  );
  generateFinancialReport('Plexuspharmaco_Annual_Report_2025.pdf', 'Annual Report 2025', 'Plexuspharmaco GmbH', 'FY 2025', 'AR-2025-FULL');

  generateFinancialReport(
    'governance-statement.pdf',
    'Corporate Governance Statement 2025',
    'Board Oversight, Fiduciary Responsibility & Compliance Framework',
    '2025',
    'GOV-2025-STMT',
    [
      ['Board Diversity Ratio', '45% Female Leadership', '40% Female Leadership', '+5%'],
      ['Compliance Audit Pass Rate', '100%', '100%', 'Maintained'],
      ['Independent Board Members', '66.7%', '66.7%', 'Maintained']
    ]
  );
  generateFinancialReport('Plexuspharmaco_Governance_Statement_2025.pdf', 'Corporate Governance Statement 2025', 'Plexuspharmaco GmbH', '2025', 'GOV-2025-STMT');

  generateFinancialReport('Plexuspharmaco_Annual_Financial_Report_2023.pdf', 'Annual Financial Report 2023', 'Plexuspharmaco GmbH', 'FY 2023', 'FIN-2023-AR');
  generateFinancialReport('Plexuspharmaco_ESG_Sustainability_Report_2023.pdf', 'ESG & Sustainability Report 2023', 'Plexuspharmaco GmbH', 'FY 2023', 'ESG-2023-AR');
  generateFinancialReport('Plexuspharmaco_Annual_Financial_Report_2022.pdf', 'Annual Financial Report 2022', 'Plexuspharmaco GmbH', 'FY 2022', 'FIN-2022-AR');
  generateFinancialReport('Plexuspharmaco_Q4_Earnings_Release_2022.pdf', 'Q4 Earnings Release 2022', 'Plexuspharmaco GmbH', 'Q4 2022', 'FIN-2022-Q4');

  // Brand Guidelines & Media Kits
  generateBrandGuidelines();
  generateMediaKit('Plexuspharmaco_Logo_Brand_Pack.pdf', 'High-Res Logo & Brand Vector Assets Pack', 'Official Press Logo Specifications', 'MEDIA-LOGO-2026', [
    ['Plexuspharmaco Primary Emblem', 'SVG / EPS Vector', 'Main corporate logo in primary navy (#0B3D91)', 'Vector Format'],
    ['Plexuspharmaco Monochrome Logo', 'PNG / SVG', 'High contrast monochrome for black/white print', 'Raster/Vector'],
    ['Plexuspharmaco Inverted Emblem', 'PNG / SVG', 'White logo for dark background applications', 'High Resolution']
  ]);
  generateMediaKit('Plexuspharmaco_Executive_Leadership_Profile.pdf', 'Executive Leadership Team Profile', 'Board of Directors & Management Profiles', 'MEDIA-EXEC-2026', [
    ['Dr. H. V. Sharma', 'Managing Director & CEO', 'Over 25 years of pharmaceutical executive leadership.', 'Executive Profile'],
    ['Elena Rostova', 'VP Global Regulatory Affairs', 'Expert in EMA, FDA, and international CTD dossier filings.', 'Executive Profile'],
    ['Marcus Vance', 'Chief Financial Officer', 'Former Senior Partner in Healthcare M&A and corporate finance.', 'Executive Profile']
  ]);

  // Policy & Governance Docs
  generateComplianceDoc('Plexuspharmaco_Corporate_Governance_Charter.pdf', 'Corporate Governance Charter', 'Rules of Corporate Conduct & Supervisory Board By-Laws', 'POL-GOV-2026', [
    { heading: 'Governance Philosophy', content: 'Plexuspharmaco GmbH is committed to corporate management and control focused on sustainable value creation. Transparent management, effective oversight, and ethical integrity form the foundation of our corporate ethos.' },
    { heading: 'Structure & Responsibilities', content: 'The Executive Board and Supervisory Board work in close cooperation for the benefit of the company. Executive decisions prioritize patient safety, product quality, and long-term shareholder value.' }
  ]);

  generateComplianceDoc('Plexuspharmaco_Quality_Policy_GMP.pdf', 'Quality Management Policy & EU-GMP Statement', 'Corporate Commitment to Pharmaceutical Quality', 'POL-QUAL-2026', [
    { heading: 'EU-GMP Compliance Standard', content: 'Plexuspharmaco operates under full compliance with EudraLex Volume 4 Good Manufacturing Practice (GMP) guidelines, ISO 13485 for medical devices, and strict GDP distribution principles.' },
    { heading: 'Analytical Validation & Batch Release', content: 'Every commercial batch undergoes rigorous Quality Control (QC) analytical testing, stability testing, and Qualified Person (QP) release prior to market distribution.' }
  ]);

  generateComplianceDoc('Plexuspharmaco_Regulatory_Compliance_Framework.pdf', 'Regulatory Compliance & Dossier Standards', 'Global Regulatory Strategy & Registration Guidelines', 'POL-REG-2026', [
    { heading: 'CTD / eCTD Dossier Standard', content: 'Our regulatory affairs department prepares CTD dossiers (Modules 1 through 5) formatted to meet regional requirements across EMA, GCC, US-FDA, and LATAM health authorities.' },
    { heading: 'Pharmacovigilance & Post-Market Surveillance', content: 'Continuous drug safety monitoring is conducted via our dedicated Pharmacovigilance (PV) department to identify and evaluate adverse events worldwide.' }
  ]);

  generateComplianceDoc('Plexuspharmaco_Sustainability_ESG_Framework.pdf', 'Sustainability & Environmental Policy Framework', 'ESG Commitments & Environmental Principles', 'POL-ESG-2026', [
    { heading: 'Environmental Footprint & Circular Packaging', content: 'Plexuspharmaco is actively reducing carbon emissions across manufacturing sites and transitioning to 100% recyclable primary and secondary packaging materials by 2028.' },
    { heading: 'Social Responsibility & Community Engagement', content: 'We partner with healthcare non-profits to improve access to essential medicines and nutritional supplements in underserved regions.' }
  ]);

  // Read products.json and generate spec PDFs
  const productsPath = path.join(__dirname, '../data/products.json');
  if (fs.existsSync(productsPath)) {
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    console.log(`Generating PDFs for ${productsData.length} products...`);
    
    productsData.forEach(prod => {
      generateProductSpecPDF(prod);
    });
    console.log(`Generated product spec PDFs for all ${productsData.length} products.`);

    generateFullCataloguePDF(productsData);
  }

  console.log('PDF Generation Complete!');
}

main();
