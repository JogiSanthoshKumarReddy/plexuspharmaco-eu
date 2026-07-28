import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  href: string;
  icon: string;
  image: string;
};

export default function BusinessCard({
  title,
  href,
  icon,
  image,
}: Props) {
  return (
    <div className="group relative overflow-hidden bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-blue-600">
      {/* Background shape */}
      <div className="absolute right-0 top-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
        <Image src="/images/shapes/service-shape.png" alt="shape" width={150} height={150} />
      </div>

      <div className="p-8">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 relative z-10 shadow-inner group-hover:bg-blue-50 transition-colors">
          <Image src={icon} alt={title} width={48} height={48} className="object-contain" />
        </div>

        <h3 className="mb-6 text-xl font-bold text-[#00173c] leading-tight group-hover:text-blue-600 transition-colors">
          <Link href={href} className="before:absolute before:inset-0">
            {title}
          </Link>
        </h3>
      </div>

      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-4 right-4 z-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:bg-[#00173c]">
            <span className="text-xl leading-none">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}