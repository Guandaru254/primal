"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      className="testimonial-one__carousel"
    >
      <SwiperSlide>
        <div className="testimonial-one__single">
          <div className="testimonial-one__client-img-box">
            <div className="testimonial-one__client-img">
              <img src="/assets/images/testimonial/testimonial-1-1.jpg" alt="" />
            </div>
          </div>
          <div className="testimonial-one__client-info-box">
            <div className="testimonial-one__quote">
              <span className="icon-quote"></span>
            </div>
            <p className="testimonial-one__text">
              The service was great and exceeded my expectations in terms of time
              and efficiency. The prices are also very reasonable. Would definitely
              recommend.
            </p>
            <div className="testimonial-one__client-info">
              <h3>Linus Makau</h3>
              <p>Laundromat Owner</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Duplicate for more testimonials */}
    </Swiper>
  );
}
