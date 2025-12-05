import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/locations";
import "./locations.css";

export const metadata: Metadata = {
  title: "Service Areas in Nairobi | Primal Facilities Management",
  description:
    "Explore Primal Facilities Management service areas across Nairobi: Kilimani, Westlands, Karen, Lavington, Parklands, South B, South C, Lang’ata, Eastlands & more.",
  openGraph: {
    title: "Service Areas in Nairobi",
    description:
      "We provide fast, same-day facility and appliance services across all major Nairobi estates and neighbourhoods.",
    images: ["/assets/images/locations/nairobi.jpeg"],
  },
};

export default function LocationsPage() {
  return (
    <main className="locations-master-page">
      {/* HERO */}
      <section className="loc-hero">
        <div className="loc-hero-inner">
          <div className="loc-hero-left">
            <p className="loc-eyebrow">SERVICE LOCATIONS</p>

            <h1>
              <span>We Cover All Major Nairobi Neighbourhoods</span>
            </h1>

            <p className="loc-hero-desc">
              From Kilimani to Westlands, Karen to South B — our technicians
              reach your home, business or apartment fast. Explore all our
              service areas below.
            </p>

            <div className="loc-hero-tags">
              <span>Same-Day Technicians</span>
              <span>20+ Nairobi Zones</span>
              <span>90+ Appliances Repaired</span>
              <span>For Homes & Businesses</span>
            </div>
          </div>

          <div className="loc-hero-right">
            <div className="loc-map-card">
              <Image
                src="/assets/images/locations/nairobi.jpeg"
                alt="Nairobi coverage map"
                fill
                className="loc-map-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRID OF LOCATIONS */}
      <section className="loc-grid-section">
        <div className="loc-grid-header">
          <p className="loc-eyebrow">WHERE WE OPERATE</p>
          <h2>Our Nairobi Service Coverage</h2>
          <p>
            Click any area to view full details, local estates, nearby roads,
            landmarks and the services available in that neighbourhood.
          </p>
        </div>

        <div className="loc-grid">
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}`} className="loc-card">
              <div className="loc-card-image">
                <Image
                  src={loc.heroImage}
                  alt={loc.name}
                  fill
                  className="loc-card-img"
                />
              </div>

              <div className="loc-card-body">
                <p className="loc-city">{loc.city}</p>
                <h3>{loc.name}</h3>

                {/* NEW DESCRIPTION */}
                <p className="loc-snippet">
                  We provide same-day technicians across {loc.name}, covering all estates,
                  access roads and landmark zones including {loc.estates[0]} and {loc.landmarks[0]}.
                </p>

                <div className="loc-footer">
                  <span className="loc-cta">View Full Coverage ↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
