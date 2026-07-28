import Container from "@/components/common/Container";
import BusinessCard from "./BusinessCard";
import { businessDivisions } from "@/data/businessDivisions";
import Image from "next/image";

export default function BusinessDivisions() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-4">
             <Image src="/images/shapes/sec-title-shape.png" alt="shape" width={80} height={20} />
          </div>
          <h2 className="text-[40px] font-bold text-[#00173c] leading-tight">
            Empowering Global Healthcare <br/>Through Trusted Pharma Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {businessDivisions.map((division) => (
            <BusinessCard
              key={division.title}
              {...division}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}