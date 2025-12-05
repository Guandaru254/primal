"use client";

import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

// IMPORT SERVICES DATA
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="footer">

      {/* MAIN AREA */}
      <div className="footer-main">
        <div className="footer-container">

          {/* LOGO + ABOUT */}
          <div className="footer-col footer-about">
            <div className="footer-logo-wrap">
              <Image
                src="/assets/images/logo/primal.png"
                alt="Primal FM Logo"
                width={180}
                height={180}
                className="footer-logo"
              />
            </div>

            <p className="footer-text">
              Reliable and professional facility management services across HVAC,
              electricals, plumbing, cleaning, landscaping, and full maintenance.
            </p>

            <div className="footer-social">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* DYNAMIC SERVICES COLUMN */}
          <div className="footer-col footer-services">
            <h4 className="footer-title">Our Services</h4>

            <ul className="footer-links service-grid">
              {services.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col footer-contact">
            <h4 className="footer-title">Contact Us</h4>

            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Nairobi, Kenya
              </li>

              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+254714045217">+254 714 045 217</a>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@primalfm.co.ke">info@primalfm.co.ke</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Primal Facilities Management. All Rights Reserved.
          <br />
          Developed & Maintained by{" "}
          <a
            href="https://www.bravetechnologies.co.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brave Technologies Ltd
          </a>
        </p>
      </div>

    </footer>
  );
}
