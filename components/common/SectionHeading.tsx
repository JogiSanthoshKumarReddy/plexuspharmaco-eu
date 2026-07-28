type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}