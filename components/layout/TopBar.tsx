import Container from "../common/Container";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <Container className="flex justify-end items-center py-2 gap-3">
        <div className="flex gap-2 items-center">
          <button className="hover:opacity-80 transition" title="English (UK)">
            <Image src="/images/uk.png" alt="English" width={24} height={16} className="h-4 w-auto rounded-[2px]" />
          </button>
          <button className="hover:opacity-80 transition" title="German">
            <Image src="/images/germany.png" alt="German" width={24} height={16} className="h-4 w-auto rounded-[2px]" />
          </button>
          <button className="hover:opacity-80 transition opacity-50" title="French">
            <Image src="/images/uk.png" alt="French Placeholder" width={24} height={16} className="h-4 w-auto rounded-[2px] hidden" />
          </button>
        </div>
      </Container>
    </div>
  );
}