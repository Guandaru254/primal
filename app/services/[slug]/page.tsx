import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import "./slug.css";

// Generate static paths
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: `${service.name} | Primal Facilities Management`,
    description: service.shortDescription,
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      url: `https://primalfacilitiesmanagement.co.ke/services/${service.slug}`,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <main className="service-single-page">

      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <Link href="/">Home</Link> <span>/</span>
        <Link href="/services">Services</Link> <span>/</span>
        <span className="current">{service.name}</span>
      </nav>

      {/* HERO SECTION */}
      <section className="service-single-hero">
        <div className="hero-left">
          <p className="hero-kicker">Primal Service</p>
          <h1>{service.name}</h1>
          <p className="hero-subtitle">{service.shortDescription}</p>

          <ul className="hero-bullets">
            {service.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <a href="/contact" className="hero-btn">Book a Technician</a>
        </div>

        <div className="hero-right">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="hero-img"
          />
        </div>
      </section>

      {/* KEYWORDS */}
      <div className="service-keywords">
        {service.keywords.map((kw) => (
          <span key={kw} className="keyword-pill">{kw}</span>
        ))}
      </div>

      {/* WHAT WE OFFER */}
      <section className="offer-box">
        <h2>What We Offer</h2>
        <ul className="offer-list">
          {service.offer.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <h2>Frequently Asked Questions</h2>

        {service.faq.map((f: any, i: number) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA BOX */}
      <div className="detail-cta-box">
        <h3>Need This Service?</h3>
        <p>Our technicians are available anywhere in Nairobi for fast, reliable support.</p>
        <a href="/contact" className="detail-cta-btn">Book a Technician</a>
      </div>

    </main>
  );
}
