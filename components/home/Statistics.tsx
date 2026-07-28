import Container from "@/components/common/Container";

const stats = [
  { value: "500", label: "Register Products", desc: "Our Company Register Products" },
  { value: "45", label: "Global Footprints", desc: "Our Global Footprints" },
  { value: "250", label: "Happy Customers", desc: "Our Happy Customers" },
];

export default function Statistics() {
  return (
    <section className="relative bg-[#f4f5f8] py-24 overflow-hidden border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border-b-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-bold text-[#00173c] mb-4 flex items-center">
                {stat.value}
                <span className="text-blue-600 ml-1">+</span>
              </div>
              <h6 className="text-xl font-bold text-gray-800 mb-2">{stat.label}</h6>
              <p className="text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}