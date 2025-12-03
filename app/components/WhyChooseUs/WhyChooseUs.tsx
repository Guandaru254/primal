"use client";

import Image from "next/image";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-wrapper">
      <div className="why-container">
        
        {/* Section Header */}
        <p className="why-sub">WHY CHOOSE US</p>

        <h2 className="why-title">
          At Primal Facilities Management
        </h2>

        <p className="why-intro">
          We go beyond simple maintenance — we are a trusted partner dedicated to ensuring your facility runs smoothly, 
          efficiently, and safely. Here’s why our clients trust us:
        </p>

        {/* Feature Grid */}
        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">
              <Image src="/assets/icons/badge.svg" width={40} height={40} alt="Customer Satisfaction" />
            </div>
            <h4>Commitment to Customer Satisfaction</h4>
            <p>
              We prioritize customer needs by providing reliable support, personalized service,
              and exceptional attention to detail.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Image src="/assets/icons/solution.svg" width={40} height={40} alt="One Stop Solution" />
            </div>
            <h4>One-Stop Solution for All Facility Needs</h4>
            <p>
              From HVAC and electricals to cleaning, security, pest control & more —
              we provide complete facility management under one roof.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Image src="/assets/icons/home.svg" width={40} height={40} alt="Trusted by Homes" />
            </div>
            <h4>Trusted by Homes & Businesses</h4>
            <p>
              Our reputation is built on professionalism and dependability. We ensure every property we manage
              remains well-maintained and operational.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Image src="/assets/icons/eco.svg" width={40} height={40} alt="Eco-friendly Solutions" />
            </div>
            <h4>High-Quality Equipment & Eco-Friendly Solutions</h4>
            <p>
              We use advanced tools and modern, eco-friendly products ensuring quality results
              while maintaining a safer environment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
