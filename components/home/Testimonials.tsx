"use client";

import Container from "@/components/common/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mr. Prakash Sonawane",
    review: "Plexuspharmaco exemplifies corporate integrity and scientific excellence. Their commitment to WHO-GMP and EU-GMP standards ensures consistently high quality products. Working with them gives confidence in both regulatory compliance and supply chain reliability, making them a trusted partner across global markets.",
  },
  {
    name: "Mr. Aroos A Careem",
    review: "The team at Plexuspharmaco combines innovation, research-driven development, and ethical business practices. Every product is manufactured under validated processes and audited facilities, providing consistent safety, efficacy, and traceability in line with international standards.",
  },
  {
    name: "Mr. Ushan Peiris",
    review: "Plexuspharmaco’s focus on quality without compromise is remarkable. Their robust compliance frameworks, rigorous audits, and traceable supply chain make them a reliable partner for regulated and emerging markets worldwide.",
  },
  {
    name: "Mr. Munkherdene Battur",
    review: "Partnering with Plexuspharmaco has been seamless. Their end-to-end regulatory services, GMP-compliant manufacturing, and QA systems ensure that products meet global standards while delivering patient-centric solutions across multiple therapeutic areas.",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-4">
             <Image src="/images/shapes/sec-title-shape.png" alt="shape" width={80} height={20} />
          </div>
          <h2 className="text-[40px] font-bold text-[#00173c] leading-tight">
            Our Testimonials<br/>
            <span className="text-blue-600">What Our Global Partners Say About Us</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet !bg-blue-600" }}
            loop
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#f4f5f8] rounded-xl p-8 h-full flex flex-col justify-between border-b-4 border-transparent hover:border-blue-600 transition-colors duration-300 relative shadow-sm">
                  {/* Quote shape abstract representation */}
                  <div className="absolute top-8 right-8 text-blue-200 opacity-50 text-6xl font-serif">"</div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10">
                    {testimonial.review}
                  </p>
                  
                  <div className="flex justify-between items-end mt-auto relative z-10">
                    <div>
                      <h3 className="font-bold text-[#00173c] text-lg">{testimonial.name}</h3>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
