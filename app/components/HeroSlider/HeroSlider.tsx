"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./HeroSlider.css";

const slides = [
  {
    image: "/assets/images/backgrounds/hvac.jpg",
    title: "Reliable & Professional Facility Management Services",
    subtitle: "HVAC, Electricals, Plumbing, Cleaning & Landscaping",
  },
  {
    image: "/assets/images/backgrounds/electrical.jpg",
    title: "Exceptional Electrical Installation & Maintenance",
    subtitle: "Trusted Technicians, Fast Response",
  },
  {
    image: "/assets/images/backgrounds/cleaning.jpg",
    title: "Professional Cleaning, Gardening & Office Care",
    subtitle: "Experienced, Efficient & Affordable",
  },
];

export default function HeroSlider() {
  return (
    <section className="hero-slider-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect="fade"
        autoplay={{ delay: 4500 }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>

                <a href="/contact" className="hero-btn">
                  Discover More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
