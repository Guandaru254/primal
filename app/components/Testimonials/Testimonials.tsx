"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import "./Testimonials.css";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Facility Manager, Apex Towers",
    message:
      "Primal Facilities Management has been an exceptional partner. Their HVAC and electrical teams respond fast, deliver quality work, and always maintain professionalism.",
    image: "/assets/images/testimonials/user1.jpg",
  },
  {
    name: "Sarah Njeri",
    role: "Operations Lead, GreenTech Offices",
    message:
      "The cleaning and landscaping services from Primal FM are top-notch. Our premises have never looked better. Highly recommended!",
    image: "/assets/images/testimonials/user2.jpg",
  },
  {
    name: "Daniel Otieno",
    role: "Director, Urban Homes",
    message:
      "Their plumbing and maintenance services helped us resolve long-standing issues. The team is reliable and experienced.",
    image: "/assets/images/testimonials/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Trusted by businesses, offices, and residential properties across Kenya.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4500 }}
        loop
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonials-slider"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card">
              <div className="testimonial-top">
                <Image
                  src={t.image}
                  width={70}
                  height={70}
                  className="testimonial-img"
                  alt={t.name}
                />
                <div>
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>

              <p className="testimonial-message">“{t.message}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
