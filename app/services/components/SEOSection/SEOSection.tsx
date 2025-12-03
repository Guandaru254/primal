// app/services/components/SEOSection/SEOSection.tsx
import "./SEOSection.css";

export default function SEOSection() {
  return (
    <section className="services-seo">
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="col-lg-6">
            <h2>Machine Repair & Facilities Management in Nairobi, Kenya</h2>
            <p>
              Primal Facilities Management provides professional{" "}
              <strong>machine repair</strong> and{" "}
              <strong>facility management services</strong> to homes, apartments,
              businesses and industries in Nairobi and across Kenya.
            </p>
            <p>
              Our technicians are experienced in washing machine repair, fridge and
              freezer repair, cold room installation and maintenance, industrial
              laundry equipment, pumps, motors and more.
            </p>
          </div>

          {/* Right */}
          <div className="col-lg-6">
            <h3>Why clients choose Primal</h3>
            <ul className="services-seo__list">
              <li>Fast response within Nairobi and neighbouring areas</li>
              <li>Trained and certified technical team</li>
              <li>Genuine spare parts and reliable workmanship</li>
              <li>Custom maintenance plans for homes, hotels and industries</li>
              <li>Transparent pricing and customer-first support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
