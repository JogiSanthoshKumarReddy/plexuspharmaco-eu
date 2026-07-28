import Container from "@/components/common/Container";

type PageBannerProps = {
  title: string;
  description?: string;
};

export default function PageBanner({
  title,
  description,
}: PageBannerProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
      <Container>
        <h1 className="text-4xl font-bold lg:text-5xl">{title}</h1>

        {description && (
          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}