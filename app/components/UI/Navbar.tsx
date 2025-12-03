"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">

        {/* Logo */}
        <Link href="/" className="nav-logo">
          <img src="/assets/images/logo/primal.png" alt="Primal FM" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="nav-btn">Contact Us</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`nav-mobile ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/locations" onClick={() => setMenuOpen(false)}>Locations</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)} className="nav-btn">Contact Us</Link>
      </div>
    </header>
  );
}
