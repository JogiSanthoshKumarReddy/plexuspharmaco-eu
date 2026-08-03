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
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-brand-900/80 mix-blend-multiply" />
        
        {/* Animated Shapes (Legacy shapes removed for cleaner UI or replace with CSS shapes if needed) */}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
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
