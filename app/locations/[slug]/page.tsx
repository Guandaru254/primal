// app/locations/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../locations.css";
import { getLocationBySlug, locations } from "@/lib/locations";
import { notFound } from "next/navigation";

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

// Dynamic metadata for SEO
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location not found | Primal Facilities Management",
    };
  }

  const title = `${location.heroTitle} | Primal Facilities Management`;
  const description =
    location.description ||
    `Primal Facilities Management provides repair, maintenance and facility services in ${location.name}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Primal Facilities Management – ${location.name}`,
    areaServed: location.neighbourhoods,
    description: location.description,
    url: `https://primalfacilitiesmanagement.co.ke/locations/${location.slug}`,
    serviceArea: {
      "@type": "AdministrativeArea",
      name: location.city,
    },
  };

  return (
    <main className="location-single-page">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/locations">Locations</Link>
        <span>/</span>
        <span>{location.name}</span>
      </nav>

      {/* HERO */}
      <section className="location-hero">
        <div className="location-hero-inner">
          <div className="location-hero-left">
            <p className="eyebrow">SERVICE AREA</p>
            <h1>{location.heroTitle}</h1>
            <p className="hero-subtitle">{location.heroSubtitle}</p>

            <ul className="location-hero-bullets">
              {location.serviceHighlights.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="location-hero-cta">
              <Link href="/contact" className="primary-btn">
                Book a Technician
              </Link>
              <Link href="/services" className="ghost-btn">
                View all services
              </Link>
            </div>
          </div>

          <div className="location-hero-right">
            <div className="location-hero-image">
              <Image
                src={location.heroImage}
                alt={location.name}
                fill
                className="location-hero-img"
              />
            </div>
            <div className="location-hero-tag">
              <p>Neighbourhoods covered</p>
              <p>{location.neighbourhoods.slice(0, 3).join(" • ")} + more</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="location-content">
        <div className="location-main">
          <h2>Local Facilities & Machine Support in {location.name}</h2>
          <p>{location.description}</p>

          <h3>Typical clients in this area</h3>
          <ul className="location-clients">
            <li>Homes & gated communities</li>
            <li>Office buildings & co-working spaces</li>
            <li>Hotels, restaurants & lounges</li>
            <li>Laundromats, dry cleaners & commercial laundries</li>
            <li>Factories, warehouses & light industry (where applicable)</li>
          </ul>

          <h3>Popular services in {location.city}</h3>
          <ul className="location-services-list">
            <li>Washing machine and tumble dryer repair</li>
            <li>Fridge, freezer and cold room repair & maintenance</li>
            <li>HVAC and AC servicing for residential and commercial buildings</li>
            <li>Electrical and plumbing fault finding & upgrades</li>
            <li>Commercial laundry equipment supply & support</li>
          </ul>
        </div>

        <aside className="location-aside">
          <div className="card">
            <h3>Neighbourhoods we cover</h3>
            <ul className="location-areas-list">
              {location.neighbourhoods.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p className="small-note">
              If your estate is near these areas, contact us and we’ll confirm coverage.
            </p>
          </div>

          <div className="card">
            <h3>SEO Keywords (for this area)</h3>
            <ul className="keyword-list">
              {location.keywords.map((kw) => (
                <li key={kw}>{kw}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      {location.faqs.length > 0 && (
        <section className="location-faq">
          <h2>Frequently Asked Questions in {location.city}</h2>
          <div className="faq-list">
            {location.faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
