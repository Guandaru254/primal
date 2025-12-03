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

      {/* ------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------ */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-left">
            <p className="contact-eyebrow">CONTACT US</p>
            <h1>We're Here to Assist You</h1>
            <p>
              Need repairs, installation or maintenance?  
              Our Nairobi-based technicians are ready to help.
            </p>

            <div className="contact-details">
              <p><strong>Phone:</strong> 0714 045 217</p>
              <p><strong>Email:</strong> info@primalfacilitiesmanagement.co.ke</p>
              <p><strong>Hours:</strong> Mon–Sat, 8am – 6pm</p>
            </div>
          </div>

          <div className="contact-hero-right">
            <Image
              src="/assets/images/backgrounds/contact.jpg"
              alt="Contact Primal Facilities Management"
              fill
              className="contact-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------ */}
      {/* MAIN CONTACT FORM */}
      {/* ------------------------------------ */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <p>Our team will get back to you within minutes.</p>

        <form
          action="https://formsubmit.co/info@primalfacilitiesmanagement.co.ke"
          method="POST"
          className="contact-form"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
          </div>

          <div className="form-row">
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="subject" placeholder="Subject" required />
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
      </section>

      {/* ------------------------------------ */}
      {/* INSTANT QUOTE FORM (NEW) */}
      {/* ------------------------------------ */}
      <section className="instant-quote-section">
        <div className="instant-quote-card">
          <h2>Get an Instant Quote</h2>
          <p>Quick estimates for repairs, installations or maintenance.</p>

          <form
            action="https://formsubmit.co/info@primalfacilitiesmanagement.co.ke"
            method="POST"
            className="instant-quote-form"
          >
            <div className="quote-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="text" name="phone" placeholder="Phone Number" required />
            </div>

            <select name="service" required>
              <option value="">Select a Service</option>
              <option>Washing Machine Repair</option>
              <option>Fridge & Freezer Repair</option>
              <option>Cold Room Installation & Repair</option>
              <option>HVAC Maintenance</option>
              <option>Industrial Machine Repair</option>
              <option>Electrical Services</option>
              <option>Plumbing Services</option>
              <option>Commercial Laundry Equipment</option>
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

      {/* ------------------------------------ */}
      {/* MAP */}
      {/* ------------------------------------ */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.13795556173!2d36.8219461!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1733f5f3ac51%3A0xf1e683e4ad09b834!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </main>
  );
}
