"use client";

import "./AboutWhyChooseUs.css";

export default function AboutWhyChooseUs() {
  const items = [
    { icon: "fas fa-tools", title: "Professional Technicians", text: "Fully trained, certified and experienced staff." },
    { icon: "fas fa-bolt", title: "Fast Response", text: "Emergency services available when you need us." },
    { icon: "fas fa-shield-alt", title: "Safety Guaranteed", text: "We follow strict safety procedures in all operations." },
    { icon: "fas fa-check-circle", title: "Quality Workmanship", text: "Our work meets the highest industry standards." },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">Why Choose Primal FM?</h2>

        <div className="why-grid">
          {items.map((item, index) => (
            <div className="why-card" key={index}>
              <i className={`why-icon ${item.icon}`}></i>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
