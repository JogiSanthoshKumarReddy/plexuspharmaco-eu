type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <Icon className="h-8 w-8 text-blue-700" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}