type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ResearchFeature({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
        <Icon className="h-7 w-7 text-blue-700" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-slate-600 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}