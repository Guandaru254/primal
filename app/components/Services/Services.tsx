"use client";

import Image from "next/image";
import "./Services.css";

const services = [
  {
    image: "/assets/images/backgrounds/hvac.png",
    title: "HVAC Maintenance & Repair",
    text: "Servicing and maintaining air conditioning, ventilation, and refrigeration systems for optimal efficiency.",
  },
  {
    image: "/assets/images/services/electrician.jpg",
    title: "Electrical & Plumbing Services",
    text: "Expert installation, repair, and maintenance of electrical and plumbing systems.",
  },
  {
    image: "/assets/images/services/cleaning.jpg",
    title: "Cleaning & Janitorial Services",
    text: "High-quality cleaning services tailored to homes, offices, and commercial spaces.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        
        <p className="services-subtitle">OUR SERVICES</p>

        <h2 className="services-title">Our Efficient Solutions</h2>

        <p className="services-intro">
          We offer a full range of facility management services designed 
          to keep your property running smoothly.
        </p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={450}
                  height={300}
                  className="service-image"
                />

              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <a className="service-btn" href="/services">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
