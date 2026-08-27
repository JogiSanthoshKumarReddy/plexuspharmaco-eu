import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Floating Shapes */}
      <Image src="/images/shapes/about-shape1.png" alt="shape" width={200} height={400} className="absolute left-0 top-1/4 animate-pulse opacity-50 hidden lg:block" />
      <Image src="/images/shapes/about-shape2.png" alt="shape" width={200} height={400} className="absolute right-0 bottom-0 animate-pulse opacity-50 hidden lg:block" />
      
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <div className="relative h-[250px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/about/about-1.jpg"
                    alt="Plexuspharmaco"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-[250px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/about/about-3.jpg"
                    alt="Liposomals"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative h-[450px] overflow-hidden rounded-lg shadow-lg mt-12">
                <Image
                  src="/images/about/about-2.jpg"
                  alt="Oncology Germany"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            {/* Experience Box Overlay */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white shadow-xl shadow-blue-600/30 border-[6px] border-white z-10 animate-pulse">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-xs text-center font-medium">Years<br/>Experience</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10">
            <h2 className="text-[40px] font-bold text-[#00173c] leading-[1.2] mb-6">
              About Plexuspharmaco<br />
              <span className="text-blue-600">Connecting Science to Global Well-Being</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                Plexuspharmaco GmbH is a Germany-based pharmaceutical organization committed to delivering high-quality, evidence-based, and accessible healthcare solutions worldwide. Operating to the highest standards of scientific rigor, quality assurance, and regulatory compliance, we partner globally to bring trusted pharmaceuticals, nutraceuticals, liposomal formulations, medical devices, and dermo-cosmetic products to diverse markets.
              </p>
              <p>
                Our integrated model spans product development, regulatory expertise, global distribution, and strategic partnerships, enabling sustainable value creation for healthcare systems and improved patient outcomes across regions.
              </p>
              <p>
                To learn more, please explore our website for seamless navigation and comprehensive information on our global execution capabilities.
              </p>
              
              <p className="mt-6 italic font-medium text-gray-800">
                Driven by excellence, transparency, and long-term collaboration, Plexuspharmaco GmbH stands as a reliable partner in Advancing Global Health through innovation and technology.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1b73e8] px-8 py-4 font-bold text-white transition-all hover:bg-[#00173c] shadow-[0_10px_20px_rgba(27,115,232,0.3)] group"
            >
              About More
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1b73e8] transition-colors group-hover:bg-white">
                +
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}