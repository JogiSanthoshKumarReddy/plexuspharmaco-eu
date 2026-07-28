type Props = {
  number: string;
  title: string;
};

export default function StatCard({
  number,
  title,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-5xl font-bold text-blue-700">
        {number}
      </h3>

      <p className="mt-4 text-lg font-medium text-slate-700">
        {title}
      </p>
    </div>
  );
}