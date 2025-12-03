import AboutHero from "@/components/AboutHero/AboutHero";
import AboutMain from "@/components/AboutMain/AboutMain";
import AboutExperience from "@/components/AboutExperience/AboutExperience";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import MissionVision from "@/components/MissionVision/MissionVision";
import WhyChooseUsAbout from "@/components/AboutWhyChooseUs/AboutWhyChooseUs";
import Footer from "@/components/Footer/Footer";

import "../about/about.css";


export default function AboutPage() {
  return (
    <>
      {/* =========================
          HERO / BREADCRUMB
      ========================== */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container about-hero-inner">
          <div className="about-hero-breadcrumb">
            <span>Home</span>
            <span className="about-hero-separator">//</span>
            <span>About Us</span>
          </div>

          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Primal Facilities Management
          </p>
        </div>
      </section>

      {/* =========================
          MAIN INTRO SECTION
          (Your trusted partner...)
      ========================== */}
      <section className="about-intro">
        <div className="container about-intro-grid">
          {/* LEFT IMAGES + STATS */}
          <div className="about-intro-left">
            <div className="about-intro-images">
              <div className="about-intro-image primary" />
              <div className="about-intro-image secondary" />
            </div>

            <div className="about-intro-circles">
              <div className="circle-card">
                <div className="circle-value">85%</div>
                <div className="circle-label">Repair</div>
              </div>
              <div className="circle-card">
                <div className="circle-value">95%</div>
                <div className="circle-label">Replace</div>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="about-intro-right">
            <p className="section-kicker">FACILITY MANAGEMENT</p>
            <h2 className="section-title">
              Your Trusted Partner in<br />
              Facility Management
            </h2>

            <p className="about-intro-text">
              Primal Facilities Management is a one-stop solution for all your
              facility maintenance needs. From HVAC servicing to electrical
              repairs, plumbing solutions, cleaning, pest control, and swimming
              pool maintenance, we offer a comprehensive range of services
              designed to keep your property running smoothly.
            </p>

            <p className="about-intro-text">
              We believe in proactive maintenance, helping our clients avoid
              costly breakdowns while ensuring a clean, safe, and fully
              functional environment. Whether you need one-time repairs or a
              long-term maintenance plan, our team is ready to assist.
            </p>

            <ul className="about-intro-highlights">
              <li>We always put quality first</li>
              <li>Customer satisfaction is absolute</li>
              <li>Fast and reliable service delivery</li>
            </ul>

            <a href="/contact" className="primary-btn about-intro-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          EXPERIENCE SECTION
          (We Have Close To 10 Years...)
          -> reusing your AboutExperience component
      ========================== */}
      <AboutExperience />

      {/* =========================
          STATS STRIP
          (10+ / 2k+ / 5k+ / 99%)
      ========================== */}
      <section className="about-stats-strip">
        <div className="container about-stats-grid">
          <div className="about-stat">
            <div className="about-stat-value">10+</div>
            <div className="about-stat-label">Glorious Years</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-value">2k+</div>
            <div className="about-stat-label">Happy Customers</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-value">5k+</div>
            <div className="about-stat-label">Services Complete</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-value">99%</div>
            <div className="about-stat-label">Satisfactions</div>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT SETS US APART
          (skills / progress bars)
      ========================== */}
      <section className="about-skills">
        <div className="container about-skills-grid">
          <div className="about-skills-left">
            <p className="section-kicker">OUR SKILLS &amp; EXPERTISE</p>
            <h2 className="section-title">
              What Sets Primal Facilities<br />
              Management Apart
            </h2>

            <p className="about-skills-text">
              We take pride in our technical expertise, industry experience,
              and commitment to excellence. Our team is composed of highly
              skilled professionals who are dedicated to delivering top-notch
              maintenance and repair solutions for residential, commercial, and
              industrial properties.
            </p>

            <p className="about-skills-text">
              At Primal Facilities Management, we don’t just fix problems –
              we build lasting relationships with our clients by offering
              personalized, responsive, and high-quality services.
            </p>

            <div className="progress-group">
              <div className="progress-label-row">
                <span>Diagnostics</span>
                <span>84%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill diagnostics" />
              </div>
            </div>

            <div className="progress-group">
              <div className="progress-label-row">
                <span>Replacement</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill replacement" />
              </div>
            </div>

            <div className="progress-group">
              <div className="progress-label-row">
                <span>Repair</span>
                <span>86%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill repair" />
              </div>
            </div>
          </div>

          <div className="about-skills-right">
            <div className="about-skills-image" />
            <div className="about-skills-card">
              <p className="about-skills-card-text">
                Our professional services ensure durable and long-lasting
                solutions for your facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHO WE ARE / VISION / MISSION
      ========================== */}
      <section className="about-mission">
        <div className="container">
          <p className="section-kicker">OUR STORY</p>
          <h2 className="section-title text-center">
            Who We Are, Our Vision &amp; Our Mission
          </h2>

          <div className="about-mission-grid">
            <div className="mission-card">
              <h3 className="mission-title">Who We Are</h3>
              <p className="mission-text">
                We provide comprehensive facility management solutions,
                including HVAC Maintenance &amp; Repair, Electrical &amp;
                Plumbing Services, Kitchen &amp; Laundry Appliance
                Servicing, Cleaning &amp; Janitorial Services, Pest Control
                Solutions, Swimming Pool Servicing, Security &amp; Access
                Control, and Fire Safety &amp; Compliance.
              </p>
            </div>

            <div className="mission-card">
              <h3 className="mission-title">Our Vision</h3>
              <p className="mission-text">
                To be a leading provider of innovative and sustainable
                facilities management solutions, enhancing the quality of
                life for our clients and communities.
              </p>
            </div>

            <div className="mission-card">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To deliver exceptional customer service while building strong
                relationships based on trust, reliability, and responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT SUPPORT CTA
      ========================== */}
      <section className="about-contact-cta">
        <div className="about-contact-bg" />
        <div className="container about-contact-inner">
          <p className="section-kicker text-center">CONTACT US</p>
          <h2 className="section-title text-center">
            Get support for your problem
          </h2>
          <p className="about-contact-text">
            Need skilled facility management professionals you can trust?
            Contact Primal Facilities Management today for expert solutions
            tailored to your needs.
          </p>

          <div className="about-contact-grid">
            <div className="contact-card">
              <div className="contact-icon email" />
              <h3 className="contact-title">Send us an email</h3>
              <p className="contact-value">info@primalfacilitiesmanagement.co.ke</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon phone" />
              <h3 className="contact-title">Give us a call</h3>
              <p className="contact-value">0714 045 217</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TESTIMONIALS (reuse)
      ========================== */}
      <section className="about-testimonials">
        <div className="container">
          <p className="section-kicker">OUR HAPPY CLIENTS</p>
          <h2 className="section-title">
            Our Customers Review
          </h2>
        </div>
        <TestimonialsSlider />
      </section>

      <Footer />
    </>
  );
}