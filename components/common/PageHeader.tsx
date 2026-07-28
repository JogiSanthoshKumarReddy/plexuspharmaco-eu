import Link from "next/link";

type PageHeaderProps = {
  title: string;
  breadcrumbUrl: string;
  quickExplore?: { name: string; href: string }[];
};

export default function PageHeader({ title, breadcrumbUrl, quickExplore }: PageHeaderProps) {
  const parts = breadcrumbUrl.split("/").filter(Boolean);

  return (
    <section className="relative py-20 lg:py-28 bg-[#f4f5f8] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/images/shapes/breadcrumb-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 z-0 animate-bounce">
        <img src="/images/shapes/breadcrumb-style1__shape1.png" alt="shape" />
      </div>
      <div className="absolute bottom-10 left-1/4 z-0 animate-pulse">
        <img src="/images/shapes/breadcrumb-style1__shape2.png" alt="shape" />
      </div>
      <div className="absolute top-1/2 left-1/2 z-0 animate-spin-slow">
        <img src="/images/shapes/breadcrumb-style1__shape3.png" alt="shape" />
      </div>
      <div className="absolute top-10 right-1/4 z-0 animate-bounce">
        <img src="/images/shapes/breadcrumb-style1__shape4.png" alt="shape" />
      </div>
      <div className="absolute bottom-10 right-10 z-0 animate-pulse">
        <img src="/images/shapes/breadcrumb-style1__shape5.png" alt="shape" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}.</h2>
            </div>
            <div>
              <ul className="flex items-center space-x-2 text-sm font-medium text-white">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                {parts.map((part, index) => {
                  const titleCase = part.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
                  return (
                    <li key={part} className="flex items-center space-x-2">
                      <span className="text-gray-400">/</span>
                      <span className="text-blue-400">{titleCase}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          
          {quickExplore && quickExplore.length > 0 && (
            <div className="md:w-1/2 mt-8 md:mt-0 pt-2 pb-3 flex flex-col md:items-end">
              <h6 className="font-bold text-white mb-2 text-start">Quick Explore</h6>
              <div className="flex gap-4">
                <ul className="flex flex-col gap-2 border-t border-white/20 pt-2">
                  {quickExplore.map((item) => (
                    <li key={item.name} className="text-start">
                      <Link href={item.href} className="text-white hover:text-blue-400 transition-colors">
                        {item.name}
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
