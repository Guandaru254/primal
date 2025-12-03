"use client";

import CountUp from "react-countup";
import Image from "next/image";
import "./Stats.css";

const stats = [
  {
    icon: "/assets/icons/years.svg",
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    icon: "/assets/icons/clients.svg",
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: "/assets/icons/projects.svg",
    value: 200,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    icon: "/assets/icons/support.svg",
    value: 24,
    suffix: "/7",
    label: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-overlay"></div>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">
              <Image src={item.icon} alt={item.label} width={55} height={55} />
            </div>

            <h2 className="stat-number">
              <CountUp end={item.value} duration={2.5} />{item.suffix}
            </h2>

            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
