import Image from "next/image";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import ResearchFeature from "./ResearchFeature";

import { researchFeatures } from "@/data/researchDevelopment";

export default function ResearchDevelopment() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Research & Development"
          title="Driving Innovation Through Scientific Excellence"
          description="Our research and development team focuses on innovation, regulatory compliance and technology advancement to deliver high-quality healthcare products."
        />

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative h-[520px] overflow-hidden rounded-2xl">
            <Image
              src="/images/home/research.jpg"
              alt="Research Laboratory"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            {researchFeatures.map((item) => (
              <ResearchFeature
                key={item.title}
                {...item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}