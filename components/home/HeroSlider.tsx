"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroSlide from "./HeroSlide";
import { heroSlides } from "@/data/heroSlides";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <HeroSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}