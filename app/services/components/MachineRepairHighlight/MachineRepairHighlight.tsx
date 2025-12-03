// app/services/components/MachineRepairHighlight/MachineRepairHighlight.tsx
import "./MachineRepairHighlight.css";

export default function MachineRepairHighlight() {
  return (
    <section className="machine-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT: Text */}
          <div className="col-lg-6">
            <span className="machine-section__tag">Core Service</span>
            <h2 className="machine-section__title">
              Professional Machine Repair & Maintenance
            </h2>
            <p className="machine-section__intro">
              We specialize in <strong>machine repair services</strong> for both households
              and commercial clients in Nairobi and across Kenya. Our certified
              technicians diagnose and repair a wide range of equipment quickly
              and professionally.
            </p>

            <div className="machine-section__columns">
              <ul>
                <li>Household & commercial washing machines</li>
                <li>Fridges, freezers & display coolers</li>
                <li>Cold rooms & refrigeration systems</li>
                <li>Dryers & laundry equipment</li>
              </ul>
              <ul>
                <li>Industrial & hotel laundry machines</li>
                <li>Motors, pumps & compressors</li>
                <li>Preventive maintenance contracts</li>
                <li>Emergency on-site repairs</li>
              </ul>
            </div>

            <div className="machine-section__cta-row">
              <a href="/contact" className="machine-section__btn">
                Book a Technician
              </a>
              <p className="machine-section__note">
                Same-day service available within Nairobi and surrounding areas.
              </p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="col-lg-6">
            <div className="machine-section__image-wrapper">
              <img
                src="/assets/images/services/maintenance.jpg"
                alt="Machine repair and maintenance services in Nairobi"
                className="machine-section__image"
              />
              <div className="machine-section__badge">
                <span className="machine-section__badge-number">10+</span>
                <span className="machine-section__badge-text">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
