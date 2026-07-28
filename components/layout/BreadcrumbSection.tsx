import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type QuickExploreItem = {
  label: string;
  href: string;
};

type BreadcrumbSectionProps = {
  title: string;
  bgImage?: string;
  breadcrumbs: BreadcrumbItem[];
  quickExplore?: QuickExploreItem[];
};

/**
 * BreadcrumbSection — Reusable page header/breadcrumb component.
 * Replaces the 20-line copy-paste pattern found in every inner page.
 *
 * Usage:
 *   <BreadcrumbSection
 *     title="About Us"
 *     bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
 *     breadcrumbs={[
 *       { label: "Home", href: "/" },
 *       { label: "Company" },
 *       { label: "About Us" },
 *     ]}
 *     quickExplore={[
 *       { label: "Our Team", href: "#team" },
 *       { label: "Corporate Governance", href: "/corporate-governance" },
 *     ]}
 *   />
 */
export default function BreadcrumbSection({
  title,
  bgImage = "/assets/images/breadcrumb/breadcrumb-1.jpg",
  breadcrumbs,
  quickExplore,
}: BreadcrumbSectionProps) {
  return (
    <section className="breadcrumb-style1">
      <div
        className="breadcrumb-style1-bg bg-background-area"
        style={{
          background: `url(${bgImage}) center center / cover no-repeat`,
        }}
      />
      <div
        className="breadcrumb-style1__shape1 wow slideInLeft"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="float-bob-y"
          src="/assets/images/shapes/breadcrumb-style1__shape1.png"
          alt="shape"
        />
      </div>
      <div
        className="breadcrumb-style1__shape2 wow slideInUp"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="float-bob-x"
          src="/assets/images/shapes/breadcrumb-style1__shape2.png"
          alt="shape"
        />
      </div>
      <div
        className="breadcrumb-style1__shape3 wow slideInUp"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="rotatescale"
          src="/assets/images/shapes/breadcrumb-style1__shape3.png"
          alt="shape"
        />
      </div>
      <div
        className="breadcrumb-style1__shape4 wow slideInDown"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="float-bob"
          src="/assets/images/shapes/breadcrumb-style1__shape4.png"
          alt="shape"
        />
      </div>
      <div
        className="breadcrumb-style1__shape5 wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="float-bob-right"
          src="/assets/images/shapes/breadcrumb-style1__shape5.png"
          alt="shape"
        />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="inner-content">
              <div className="title">
                <h2>{title}</h2>
              </div>
              <div className="breadcrumb-menu">
                <ul>
                  {breadcrumbs.map((crumb, i) => {
                    const isLast = i === breadcrumbs.length - 1;
                    return (
                      <li key={i} className={isLast ? "active" : ""}>
                        {crumb.href && !isLast ? (
                          <Link href={crumb.href}>{crumb.label}</Link>
                        ) : (
                          crumb.label
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {quickExplore && quickExplore.length > 0 && (
            <div className="col-md-6 pt-2 pb-3 quick-explore">
              <h6 className="fw-bold text-white mb-1 text-start border-bottom d-inline-block pb-1">
                Quick Explore
              </h6>
              <div className="d-md-flex d-block gap-1 justify-content-start position-relative">
                <ul>
                  {quickExplore.map((item) => (
                    <li key={item.href} className="mt-0 pt-0 text-start">
                      <Link href={item.href} className="text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
