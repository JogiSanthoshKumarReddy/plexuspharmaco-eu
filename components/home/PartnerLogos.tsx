import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "Plexuspharmaco GmbH", link: "https://www.plexuspharmaco.eu/" },
  { name: "Plexus Biogenix LLP", link: "/sub/biogenix" },
  { name: "Plexus Biocare Pvt. Ltd.", link: "/sub/biocare" },
];

export default function PartnerLogos() {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <Container>
        <div className="flex flex-col items-center">
          <Image src="/images/shapes/sec-title-shape.png" alt="shape" width={80} height={20} className="mb-8" />
          
          <div className="w-full">
            {/* Carousel simulation using CSS flex / grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="flex justify-center p-4">
                  <Link 
                    href={partner.link} 
                    target={partner.link.startsWith("http") ? "_blank" : undefined}
                    className="text-xl font-bold text-[#888888] hover:text-[#1b73e8] transition-colors text-center font-['Open_Sans']"
                  >
                    {partner.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
