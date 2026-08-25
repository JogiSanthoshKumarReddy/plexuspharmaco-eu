import Container from "@/components/common/Container";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-blue-700 font-semibold uppercase">
              About Us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              A Trusted Pharmaceutical Partner
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Plexus Pharmaco GmbH provides innovative pharmaceutical,
              nutraceutical and medical device solutions with a strong
              commitment to research, quality, manufacturing excellence
              and global healthcare partnerships.
            </p>
          </div>

          <div className="h-[450px] rounded-xl bg-slate-200 flex items-center justify-center">
            Company Image
          </div>
        </div>
      </Container>
    </section>
  );
}