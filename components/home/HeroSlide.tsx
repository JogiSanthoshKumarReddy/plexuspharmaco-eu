import Link from "next/link";
import Image from "next/image";

type HeroSlideProps = {
  title: string;
  image: string;
  button: string;
  buttonHref: string;
};

export default function HeroSlide({
  title,
  image,
  button,
  buttonHref,
}: HeroSlideProps) {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#00173c]/50" /> {/* Overlay */}

      {/* Floating Shapes */}
      <Image src="/images/shapes/shape1.png" alt="shape" width={100} height={100} className="absolute top-[10%] right-[10%] animate-pulse opacity-50 hidden md:block" />
      <Image src="/images/shapes/shape2.png" alt="shape" width={80} height={80} className="absolute top-[20%] left-[15%] animate-bounce opacity-60 hidden md:block" />
      <Image src="/images/shapes/shape3.png" alt="shape" width={120} height={120} className="absolute bottom-[20%] right-[15%] animate-bounce opacity-50 hidden md:block" />
      <Image src="/images/shapes/shape4.png" alt="shape" width={60} height={60} className="absolute bottom-[30%] left-[20%] animate-pulse opacity-70 hidden md:block" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white flex flex-col items-center">
        <h2
          className="text-4xl font-bold md:text-6xl lg:text-7xl leading-tight mb-8 drop-shadow-lg"
          dangerouslySetInnerHTML={{ __html: title.replace("Global Pharmaceutical Solutions", "Global Pharmaceutical <br/> Solutions") }}
        />

        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 rounded-full bg-[#1b73e8] px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#1b73e8] shadow-[0_10px_20px_rgba(27,115,232,0.3)]"
        >
          {button}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1b73e8] transition-colors group-hover:bg-[#1b73e8] group-hover:text-white">
            +
          </span>
        </Link>
      </div>
    </div>
  );
}