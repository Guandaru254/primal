// app/services/components/ServicesHero/ServicesHero.tsx
import "./ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero__overlay">
        <div className="container">
          <div className="services-hero__content">
            <h1 className="services-hero__title">Our Services</h1>
            <p className="services-hero__subtitle">
              Expert machine repair & facility management services in Nairobi and across Kenya.
            </p>

            <div className="services-hero__breadcrumb">
              <a href="/" className="services-hero__breadcrumb-link">
                Home
              </a>
              <span className="services-hero__breadcrumb-separator">/</span>
              <span className="services-hero__breadcrumb-current">Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
