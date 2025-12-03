"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./HeroSlider.css";

const slides = [
  {
    image: "/assets/images/backgrounds/facility-management-main.jpeg",
    title: "Reliable Facility Management for Homes & Businesses",
    subtitle:
      "Cleaning, electrical, HVAC, plumbing & landscaping — delivered by certified technicians.",
    area: "Nairobi & Kiambu"
  },
  {
    image: "/assets/images/backgrounds/hvac-main.jpg",
    title: "Professional HVAC Installation, Repair & Maintenance",
    subtitle:
      "Air-conditioning, ventilation & cooling solutions for residential, commercial & industrial buildings.",
    area: "Westlands, Kilimani & Surrounds"
  },
  {
    image: "/assets/images/backgrounds/electrical-services.jpg",
    title: "Trusted Electrical Installation & Emergency Repairs",
    subtitle:
      "Safe wiring, power backup, lighting, fault-finding & ongoing maintenance.",
    area: "Karen, Thika Road & Industrial Parks"
  },
  {
    image: "/assets/images/backgrounds/cleaning-services-2.jpg",
    title: "Professional Cleaning, Office Care & Janitorial Services",
    subtitle:
      "Daily office cleaning, deep cleans & move-in cleaning tailored to your facility.",
    area: "CBD, Upper Hill & Corporate Offices"
  }
];

export default function HeroSlider() {
  return (
    <section className="hero-slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* UNIQUE CONTENT WRAPPER PER SLIDE */}
              <div className="hero-text-box" key={slide.title}>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <p className="hero-area">Serving {slide.area}</p>

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
