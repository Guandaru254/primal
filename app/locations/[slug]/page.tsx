import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/lib/locations";
import "./location-slug.css";

/* STATIC PARAMS */
export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

/* METADATA */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) return {};

  return {
    title: `${loc.name} Technicians | Appliance, Plumbing, Electrical`,
    description: `Same-day service in ${loc.name}. Estates served include: ${loc.estates
      .slice(0, 8)
      .join(", ")}.`,
    openGraph: {
      title: `${loc.name} Technicians`,
      description: `Full service coverage across ${loc.name}.`,
      images: [{ url: loc.heroImage }],
    },
  };
}

/* PAGE UI */
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
              We provide same-day technicians across <strong>{loc.name}</strong>,
              covering all estates, access roads, and landmark zones including
              {` ${loc.estates[0]} and ${loc.landmarks[0]}.`}
            </p>

            <ul className="location-hero-bullets">
              {loc.serviceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="location-hero-cta">
              <a href="/contact" className="primary-btn">Book Technician</a>
              <a href="/services" className="ghost-btn">View Services</a>
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

      {/* MAIN CONTENT */}
      <section className="location-content">
        <div className="location-main">

          <h2>Estates & Neighborhoods in {loc.name}</h2>
          <ul className="location-areas-list">
            {loc.estates.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <h2>Main Roads & Routes</h2>
          <ul className="location-areas-list">
            {loc.roads.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h2>Landmarks in {loc.name}</h2>
          <ul className="location-areas-list">
            {loc.landmarks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>

          <h2>Services Available</h2>
          <ul className="location-services-list">
            {loc.serviceHighlights.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

        </div>

        {/* SIDEBAR */}
        <aside className="location-aside">

          {/* TOP ESTATES */}
          <div className="card">
            <h3>Top Estates</h3>
            <ul className="location-areas-list">
              {loc.estates.slice(0, 12).map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>

          {/* TAGS — UPDATED */}
          <div className="card">
            <h3>Tags</h3>
            <ul className="keyword-list">
              {loc.keywords.map((kw) => (
                <li key={kw}>{kw}</li>
              ))}
            </ul>
          </div>

          {/* CTA FIXED */}
          <div className="card contact-card">
            <h3>Need a Technician?</h3>
            <p>We offer same-day service in {loc.name}.</p>
            <a href="/contact" className="primary-btn sidebar-btn">Book Now</a>
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
