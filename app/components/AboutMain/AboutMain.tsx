"use client";

import "./AboutMain.css";

export default function AboutMain() {
  return (
    <section className="about-main">
      <div className="container">
        <div className="about-grid">

          <div className="about-img-box">
            <img src="/assets/images/resources/about.jpg" alt="About us" />
          </div>

          <div className="about-text-box">
            <h2>We Provide Professional Facility Management Solutions</h2>

            <p>
              Primal Facilities Management is a trusted provider of HVAC,
              electrical, plumbing, and cleaning services. With years of
              experience and a highly trained workforce, we ensure high-quality
              service delivery tailored to commercial, industrial, and
              residential clients.
            </p>

            <p>
              Our commitment to reliability, customer satisfaction, and safety
              has positioned us as a leading facilities service company.
            </p>

            <ul className="about-list">
              <li>✔ Certified & experienced professionals</li>
              <li>✔ Fast response & reliable maintenance</li>
              <li>✔ Affordable & transparent pricing</li>
              <li>✔ High-quality workmanship guaranteed</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
