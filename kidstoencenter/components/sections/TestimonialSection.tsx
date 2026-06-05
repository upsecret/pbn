"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "KidsTown has been an absolute lifesaver for our family! My kids love going there and I always feel at ease knowing they are safe and having fun. The staff is incredibly caring and attentive.",
    author: "Sarah M. — Highlands Ranch",
  },
  {
    text: "I love that I can just walk in without an appointment. The staff is always so welcoming, and my daughter never wants to leave! It's the perfect solution for busy parents like me.",
    author: "Jessica L. — Parker",
  },
  {
    text: "We've been using KidsTown for two years now and it's amazing. The activities keep my son engaged, and the staff treats every child like family. Highly recommend to any parent!",
    author: "Mike T. — Smoky Hill",
  },
  {
    text: "The after-hours care option is a game changer! I can work late knowing my kids are being well taken care of in a safe and fun environment. Thank you KidsTown!",
    author: "Amanda R. — Highlands Ranch",
  },
  {
    text: "My twins have been going to KidsTown for months and they absolutely love it. The preschool program has helped them develop so much. I can't say enough great things about this place!",
    author: "Chris & Diane K. — Parker",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-6" style={{ color: "#43A047" }}>"</div>
        <h2 className="text-2xl font-bold text-white mb-10">What Parents Are Saying</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="px-8 md:px-16">
                <p className="text-gray-200 text-lg leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-green-400 font-semibold">— {t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
