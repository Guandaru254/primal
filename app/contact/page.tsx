import type { Metadata } from "next";
import Image from "next/image";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Primal Facilities Management",
  description:
    "Contact Primal Facilities Management for professional repair, installation & maintenance services in Nairobi and across Kenya. Call 0714 045 217.",
  openGraph: {
    title: "Contact Primal Facilities Management",
    description:
      "Get in touch with Kenya’s trusted experts in machine repair, HVAC, cold rooms, electrical, plumbing & facilities management.",
    url: "https://primalfacilitiesmanagement.co.ke/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* ---------------------------------------------------- */}
      {/* HERO – IMAGE LEFT, TEXT RIGHT */}
      {/* ---------------------------------------------------- */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          {/* IMAGE SIDE */}
          <div className="contact-hero-media">
            <div className="contact-hero-media-inner">
              <Image
                src="/assets/images/services/electrician.jpg"
                alt="Primal technician working on electrical panel"
                fill
                priority
                className="contact-hero-img"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="contact-hero-copy">
            <p className="contact-eyebrow">CONTACT US</p>
            <h1>We&apos;re Here to Assist You</h1>
            <p className="contact-intro">
              Need repairs, installation or maintenance? Our Nairobi-based
              technicians are ready to help with same-day response across major
              estates.
            </p>

            <div className="contact-details">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+254714045217">0714 045 217</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@primalfacilitiesmanagement.co.ke">
                  info@primalfacilitiesmanagement.co.ke
                </a>
              </p>
              <p>
                <strong>Hours:</strong> Mon–Sat, 8am – 6pm
              </p>
            </div>

            <div className="contact-hero-badges">
              <span>Same-Day Technicians</span>
              <span>Nairobi & Surrounds</span>
              <span>Residential & Commercial</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTACT FORM */}
      {/* ---------------------------------------------------- */}
      <section className="contact-form-section">
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>Your message will be responded to within minutes.</p>

          <form
            action="https://formsubmit.co/info@primalfacilitiesmanagement.co.ke"
            method="POST"
            className="contact-form"
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Your message..."
              required
            ></textarea>

            <button type="submit" className="contact-submit-btn">
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* INSTANT QUOTE FORM */}
      {/* ---------------------------------------------------- */}
      <section className="instant-quote-section">
        <div className="instant-quote-card">
          <div className="instant-quote-header">
            <h2>Get an Instant Quote</h2>
            <p>Quick estimates for repairs, installations or maintenance.</p>
          </div>

          <form
            action="https://formsubmit.co/info@primalfacilitiesmanagement.co.ke"
            method="POST"
            className="instant-quote-form"
          >
            <div className="quote-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>

            <select name="service" required>
              <option value="">Select a Service</option>
              <option>HVAC & Air Conditioning</option>
              <option>Fridge & Freezer Repair</option>
              <option>Washing Machine Repair</option>
              <option>Electrical Services</option>
              <option>Plumbing Services</option>
              <option>Cold Room Installation & Repair</option>
              <option>Commercial Laundry Equipment</option>
              <option>Emergency Appliance Repair</option>
            </select>

            <textarea
              name="details"
              rows={4}
              placeholder="Describe the issue or request..."
              required
            ></textarea>

            <button type="submit" className="instant-quote-btn">
              Get My Quote →
            </button>
          </form>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAP – MUTHITHI ROAD, WESTLANDS */}
      {/* ---------------------------------------------------- */}
      <section className="contact-map-section">
        <div className="contact-map-inner">
          <h2>Find Us in Westlands, Nairobi</h2>
          <p>
            Our technicians are based around Westlands — close to Muthithi Road
            and key commercial hubs for fast dispatch across the city.
          </p>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Muthithi%20Road%20Westlands%20Nairobi&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Primal FM - Muthithi Road Westlands"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
