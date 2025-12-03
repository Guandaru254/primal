// app/services/components/CTASection/CTASection.tsx
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="services-cta">
      <div className="container">
        <div className="services-cta__inner">
          <div>
            <h2>Need urgent machine repair or facility support?</h2>
            <p>
              Call us today for fast, reliable and affordable services in Nairobi and across Kenya.
            </p>
          </div>
          <div className="services-cta__actions">
            <a href="tel:0714045217" className="services-cta__btn services-cta__btn--primary">
              Call: 0714 045 217
            </a>
            <a href="/contact" className="services-cta__btn services-cta__btn--outline">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
