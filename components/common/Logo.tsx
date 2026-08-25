import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Plexus Pharmaco"
        width={300}
        height={80}
        priority
        className="w-[250px] md:w-[300px] h-auto object-contain"
      />
    </Link>
  );
}