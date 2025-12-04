import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/lib/locations";
import "./location-slug.css";

/* ----------------------------- */
/*   GENERATE STATIC PATHS       */
/* ----------------------------- */
export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

/* ----------------------------- */
/*      DYNAMIC METADATA         */
/* ----------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) return {};

  return {
    title: `${loc.name} Technicians & Facility Services | Primal FM`,
    description: `${loc.name} service area — appliance repair, plumbing, electrical, HVAC, cleaning, CCTV, and home maintenance. Coverage includes ${loc.neighbourhoods
      .slice(0, 6)
      .join(
        ", "
      )}. Same-day technicians near you in ${loc.name}.`,
    openGraph: {
      title: `${loc.name} Services`,
      description: `Full coverage in ${loc.name}. Estates: ${loc.neighbourhoods
        .slice(0, 6)
        .join(", ")}. Roads, landmarks, appliances, and services.`,
      images: [{ url: loc.heroImage }],
    },
  };
}

/* ----------------------------- */
/*           PAGE UI             */
/* ----------------------------- */
export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) return notFound();

  return (
    <main className="location-single-page">

      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <Link href="/">Home</Link> <span>/</span>
        <Link href="/locations">Locations</Link> <span>/</span>
        <span className="current">{loc.name}</span>
      </nav>

      {/* HERO */}
      <section className="location-hero">
        <div className="location-hero-inner">
          <div className="location-hero-left">
            <h1>{loc.name} Service Area</h1>

            <p className="location-hero-desc">
              We provide same-day technicians and full facility management
              services across <strong>{loc.name}</strong> — covering all major
              estates, roads, business centres and residential zones.
              Whether you’re in <strong>{loc.neighbourhoods[0]}</strong> or near{" "}
              <strong>{loc.landmarks[0]}</strong>, our team arrives fast.
            </p>

            <ul className="location-hero-bullets">
              {loc.serviceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="location-hero-cta">
              <a href="/contact" className="primary-btn">
                Book a Technician
              </a>
              <a href="/services" className="ghost-btn">
                View All Services
              </a>
            </div>
          </div>

          <div className="location-hero-right">
            <div className="location-hero-image">
              <Image
                src={loc.heroImage}
                alt={loc.name}
                fill
                className="location-hero-img"
              />
            </div>
            <div className="location-hero-tag">Serving {loc.city}</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="location-content">
        {/* MAIN LEFT CONTENT */}
        <div className="location-main">

          {/* Areas Covered */}
          <h2>Areas We Cover in {loc.name}</h2>
          <p>
            Our technicians cover every corner of <strong>{loc.name}</strong>,
            reaching both residential apartments and commercial premises. Below
            is a breakdown of estates, neighbourhood clusters, access roads and
            landmark zones we serve.
          </p>

          <h3>Neighbourhoods & Estates</h3>
          <ul className="location-areas-list">
            {loc.neighbourhoods.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <h3>Main Roads & Access Routes</h3>
          <ul className="location-areas-list">
            {loc.roads.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h3>Popular Landmarks</h3>
          <ul className="location-areas-list">
            {loc.landmarks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>

          {/* SERVICES SECTION */}
          <h2>Services We Provide in {loc.name}</h2>
          <p>
            Whether you need urgent repairs, routine maintenance or commercial
            facility management, Primal FM provides all essential services in{" "}
            {loc.name}.
          </p>

          <ul className="location-services-list">
            {loc.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {/* APPLIANCES SECTION */}
          <h2>Appliances We Repair in {loc.name}</h2>
          <p>
            We repair <strong>92+ home & commercial appliances</strong>. This makes our
            service coverage the most complete in the region. Popular requests in{" "}
            {loc.name} include:
          </p>

          <ul className="location-services-list two-column">
            <li>Washing machines</li>
            <li>Cookers & ovens</li>
            <li>Fridges & freezers</li>
            <li>Water dispensers</li>
            <li>AC repair & servicing</li>
            <li>Microwaves</li>
            <li>TV mounting & setup</li>
            <li>Dishwashers</li>
            <li>Electrical troubleshooting</li>
            <li>Instant showers</li>
            <li>Borehole & booster pumps</li>
            <li>CCTV systems</li>
          </ul>

          <p className="near-me-box">
            Searching for <strong>{loc.name} technicians near me</strong>?  
            You’re in the right place. We guarantee fast arrival, genuine parts,
            and professional repairs.
          </p>

          {/* CLIENT TYPES */}
          <h2>Typical Clients in {loc.name}</h2>
          <ul className="location-clients">
            {loc.clientTypes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="location-aside">

          {/* SUB-AREAS CARD */}
          <div className="card">
            <h3>Full Service Coverage</h3>
            <ul className="location-areas-list">
              {loc.neighbourhoods.slice(0, 12).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* KEYWORDS */}
          <div className="card">
            <h3>SEO Keywords</h3>
            <ul className="keyword-list">
              {loc.keywords.map((kw) => (
                <li key={kw}>{kw}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT BOX */}
          <div className="card contact-card">
            <h3>Need a Technician?</h3>
            <p>
              We offer same-day support in {loc.name}.  
              Call us now for urgent assistance.
            </p>
            <a href="/contact" className="primary-btn">
              Book Now
            </a>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="location-faq">
        <h2>{loc.name} – Frequently Asked Questions</h2>

        <div className="faq-list">
          {loc.faq.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
