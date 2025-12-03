"use client";

import Image from "next/image";
import "./IntroductionSection.css";

export default function IntroductionSection() {
  return (
    <section className="intro-wrapper">
      <div className="intro-container">
        
        {/* LEFT SECTION */}
        <div className="intro-left">
          <div className="intro-image">
            <Image
              src="/assets/images/backgrounds/hvac.png"
              alt="Facility Management Access Control"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="goal-box">
            <p className="goal-label">OUR GOAL:</p>
            <h3>
              “To be the leading facilities  
              management company in Kenya &  
              East Africa.”
            </h3>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="intro-right">
          <p className="intro-sub">OUR INTRODUCTION</p>

          <h2 className="intro-title">
            Welcome To The Home Of  
            Quality Facility Management  
            Services
          </h2>

          <div className="intro-features">
            <div className="feature-card">
              <div className="feature-icon">
                <Image
                  src="/assets/icons/fast.svg"
                  alt="Fast Services"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h4>Fast Response & Efficient Services</h4>
                <p>
                  We offer a full range of facility management services 
                  designed to keep your property running smoothly.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Image
                  src="/assets/icons/certified.svg"
                  alt="Certified Technicians"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h4>Experienced & Certified Technicians</h4>
                <p>
                  Our technicians are trained, certified, and experienced 
                  in a wide range of facility management tasks.
                </p>
              </div>
            </div>
          </div>

          <a href="/about" className="intro-btn">Discover More</a>
        </div>
      </div>
    </section>
  );
}
