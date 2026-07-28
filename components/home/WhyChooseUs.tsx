import Container from "@/components/common/Container";
import FeatureCard from "./FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted Healthcare Partner Across Global Markets
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We combine scientific innovation, quality manufacturing and
            international partnerships to deliver healthcare solutions that
            meet the highest standards.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}