// app/locations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./locations.css";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Areas & Locations | Primal Facilities Management",
  description:
    "Primal Facilities Management serves Nairobi (Westlands, Karen, Industrial Area, CBD and more) plus selected clients in Mombasa with repair, maintenance and facility services.",
};

export default function LocationsPage() {
  return (
    <main className="locations-page">
      {/* HERO */}
      <section className="locations-hero">
        <div className="locations-hero-inner">
          <div className="locations-hero-content">
            <p className="eyebrow">LOCATIONS</p>
            <h1>
              Service Coverage in <span>Nairobi & Beyond</span>
            </h1>
            <p className="hero-subtitle">
              We focus on Nairobi’s key residential, commercial and industrial
              hubs – with project-based support for selected clients across Kenya.
            </p>

            <div className="locations-badges">
              <span>Nairobi – Westlands & CBD</span>
              <span>Industrial Area & Mombasa Road</span>
              <span>Karen, Ngong Road & Lang’ata</span>
              <span>Mombasa (selected clients)</span>
            </div>
          </div>

          <div className="locations-hero-visual">
            <div className="hero-map-card">
              <Image
                src="/assets/images/backgrounds/kenya-map-overlay.jpg"
                alt="Primal FM service coverage map in Kenya"
                fill
                className="hero-map-image"
              />
            </div>
            <div className="hero-stat-card">
              <p className="stat-label">Same-day in Nairobi*</p>
              <p className="stat-value">Core Estates Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS LIST */}
      <section className="locations-list-section">
        <div className="locations-header">
          <p className="eyebrow">WHERE WE WORK</p>
          <h2>Key Service Areas</h2>
          <p>
            Explore our main locations below. Each page explains the neighbourhoods
            we cover, typical clients and the services available in that area.
          </p>
        </div>

        <div className="locations-rows">
          {locations.map((location, index) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className={`location-row ${index % 2 === 1 ? "reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="location-image">
                <Image
                  src={location.heroImage}
                  alt={location.name}
                  fill
                  className="location-img"
                />
              </div>

              {/* CONTENT */}
              <div className="location-info">
                <p className="location-city">{location.city}</p>
                <h3>{location.name}</h3>

                <p className="location-desc">{location.heroSubtitle}</p>

                <ul className="location-bullets">
                  {location.serviceHighlights.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="location-footer">
                  <span className="learn-more">View location details ↗</span>
                  <div className="location-tags">
                    {location.neighbourhoods.slice(0, 3).map((area) => (
                      <span key={area}>{area}</span>
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
