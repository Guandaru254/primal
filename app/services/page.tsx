// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./services.css";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Primal Facilities Management",
  description:
    "Professional repair, maintenance & installation services in Nairobi for washing machines, fridges, cold rooms, HVAC, industrial machines, electrical, plumbing & more.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <div className="hero-content">
            <p className="eyebrow">SERVICES</p>

            <h1>
              Our <span>Efficient Solutions</span>
            </h1>

            <p className="hero-subtitle">
              Repair · Maintenance · Installation for homes, businesses & industry across Kenya.
            </p>

            <div className="hero-tags">
              <span>Washing Machines</span>
              <span>Fridges</span>
              <span>Cold Rooms</span>
              <span>HVAC</span>
              <span>Industrial</span>
              <span>Electrical</span>
              <span>Plumbing</span>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Image
              src="/assets/images/backgrounds/laundry-service.jpg"
              alt="Technician repairing laundry equipment"
              fill
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* SERVICES LIST (One per row SaaS layout) */}
      <section className="services-section">
        <div className="services-header">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Specialised Repair & Maintenance Services</h2>
          <p>
            From household appliances to industrial systems, Primal Facilities Management provides reliable technical support.
          </p>
        </div>

        <div className="services-rows">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`service-row ${index % 2 === 1 ? "reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="service-image">
                <Image
                  src={service.heroImage}
                  alt={service.name}
                  fill
                  className="service-img"
                />
              </div>

              {/* TEXT */}
              <div className="service-info">
                <p className="service-kicker">PRIMAL SERVICE</p>
                <h3>{service.name}</h3>

                <p className="service-desc">{service.shortDescription}</p>

                <ul className="service-bullets">
                  {service.bullets.slice(0, 3).map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="service-footer">
                  <span className="learn-more">Learn more ↗</span>

                  <div className="service-tags">
                    {service.keywords.slice(0, 2).map((kw) => (
                      <span key={kw}>{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
