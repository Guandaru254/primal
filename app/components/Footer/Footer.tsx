"use client";

import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">

          {/* LOGO + ABOUT */}
          <div className="footer-col footer-about">
            <Image
              src="/assets/images/resources/primal.png"
              alt="Primal FM Logo"
              width={140}
              height={70}
              className="footer-logo"
            />

            <p className="footer-text">
              Reliable and professional facility management services across HVAC, 
              electricals, plumbing, cleaning, and landscaping.
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
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li>HVAC & Air Conditioning</li>
              <li>Electrical Installations</li>
              <li>Plumbing Maintenance</li>
              <li>Cleaning & Landscaping</li>
              <li>Building Repairs</li>
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
                <a href="tel:+254712345678">+254 712 345 678</a>
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
        <p>© {new Date().getFullYear()} Primal Facilities Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
