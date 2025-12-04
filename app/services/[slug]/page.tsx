import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import "./service-slug.css";

/* -------------------------------------------------------------
   STATIC PARAMS (ASYNC FOR NEXT 15+)
------------------------------------------------------------- */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* -------------------------------------------------------------
   SEO METADATA (ASYNC REQUIRED)
------------------------------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} | Primal Facilities Management`,
    description: service.shortDescription,
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

/* -------------------------------------------------------------
   PAGE COMPONENT
------------------------------------------------------------- */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <main className="service-single-page">

      {/* BREADCRUMBS */}
      <nav className="breadcrumbs">
        <Link href="/">Home</Link> <span>/</span>
        <Link href="/services">Services</Link> <span>/</span>
        <span className="current">{service.name}</span>
      </nav>

      {/* HERO */}
      <section className="service-single-hero">
        <div className="hero-left">
          <p className="hero-kicker">PRIMAL SERVICE</p>

          <h1>{service.name}</h1>
          <p className="hero-subtitle">{service.shortDescription}</p>

          <ul className="hero-bullets">
            {service.bullets.map((b, i) => (
              <li key={i}>{b}</li>
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
      <section className="service-keywords">
        {service.keywords.map((k) => (
          <span key={k} className="keyword-pill">{k}</span>
        ))}
      </section>

      {/* OFFER */}
      <section className="offer-box">
        <h2>What We Offer</h2>

        <ul className="offer-list">
          {service.offer.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </section>

      {/* APPLIANCES HANDLED */}
      {service.appliances && (
        <section className="offer-box">
          <h2>Appliances We Handle</h2>

          <ul className="offer-list">
            {service.appliances.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      <section className="service-faq">
        <h2>Frequently Asked Questions</h2>

        {service.faq.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <div className="detail-cta-box">
        <h3>Need Fast & Reliable Service?</h3>
        <p>Our technicians are available across all Nairobi estates.</p>
        <a href="/contact" className="detail-cta-btn">Book a Technician</a>
      </div>
    </main>
  );
}
