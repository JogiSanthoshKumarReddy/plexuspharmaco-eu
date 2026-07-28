import Link from "next/link";

export default function ResearchDevelopmentPage() {
  const sections = [
    {
      title: "Research & Development Capabilities",
      href: "/research",
      description:
        "Explore our advanced pharmaceutical R&D capabilities, from molecule discovery to clinical-stage development.",
      icon: "icon-microscope",
    },
    {
      title: "Manufacturing Capabilities",
      href: "/manufacture-capability",
      description:
        "World-class manufacturing infrastructure aligned with WHO-GMP, EU-GMP, and other international standards.",
      icon: "icon-flask",
    },
    {
      title: "Quality Assurance & Compliance",
      href: "/quality-assurance",
      description:
        "Robust QA systems ensuring product safety, efficacy, and regulatory compliance across all markets.",
      icon: "icon-badge",
    },
    {
      title: "White Labeling & Contract Manufacturing",
      href: "/contract-manufacturing",
      description:
        "End-to-end CMO/CDMO services tailored to your regulatory environment and product specifications.",
      icon: "icon-factory",
    },
    {
      title: "Technology Platforms",
      href: "/technology-platforms",
      description:
        "Proprietary technology platforms driving differentiated formulations with enhanced therapeutic performance.",
      icon: "icon-dna",
    },
    {
      title: "Regulatory Compliance",
      href: "/regulatory-compliance",
      description:
        "Dedicated regulatory affairs support for submissions, registrations, and ongoing compliance monitoring.",
      icon: "icon-document",
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="breadcrumb-style1">
        <div
          className="breadcrumb-style1-bg bg-background-area"
          style={{
            background:
              "url(/assets/images/breadcrumb/breadcrumb-1.jpg) center center / cover no-repeat",
          }}
        />
        <div className="breadcrumb-style1__shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
          <img className="float-bob-y" src="/assets/images/shapes/breadcrumb-style1__shape1.png" alt="shape" />
        </div>
        <div className="breadcrumb-style1__shape2 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
          <img className="float-bob-x" src="/assets/images/shapes/breadcrumb-style1__shape2.png" alt="shape" />
        </div>
        <div className="breadcrumb-style1__shape3 wow slideInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
          <img className="rotatescale" src="/assets/images/shapes/breadcrumb-style1__shape3.png" alt="shape" />
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
                  <h2>R&D, Manufacturing &amp; Quality</h2>
                </div>
                <div className="breadcrumb-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active">R&D, Manufacturing &amp; Quality</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-2 pb-3 quick-explore">
              <h6 className="fw-bold text-white mb-1 text-start border-bottom d-inline-block pb-1">
                Quick Explore
              </h6>
              <div className="d-md-flex d-block gap-1 justify-content-start position-relative">
                <ul>
                  <li className="mt-0 pt-0 text-start">
                    <Link href="/research" className="text-white">
                      Research &amp; Development
                    </Link>
                  </li>
                  <li className="mt-0 pt-0 text-start">
                    <Link href="/quality-assurance" className="text-white">
                      Quality Assurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hub content */}
      <section className="service-style1 pt-5 pb-5">
        <div className="container">
          <div className="inner-title text-center mb-5">
            <h2>Our R&D, Manufacturing &amp; Quality Capabilities</h2>
            <p className="mt-2">
              Plexuspharmaco combines advanced research, world-class manufacturing and rigorous quality
              systems to deliver compliant, high-quality healthcare solutions globally.
            </p>
          </div>
          <div className="row">
            {sections.map((section) => (
              <div key={section.href} className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div
                  className="single-service-style1 h-100"
                  style={{
                    border: "1px solid #e8e8e8",
                    borderRadius: "4px",
                    padding: "30px 24px",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  <div className="title mb-2">
                    <h4>{section.title}</h4>
                  </div>
                  <p className="mb-3" style={{ color: "#666" }}>
                    {section.description}
                  </p>
                  <Link
                    href={section.href}
                    className="btn-one"
                    style={{ display: "inline-block" }}
                  >
                    <span className="txt">Learn More</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
