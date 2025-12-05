"use client";

import "./FloatingButtons.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254714045217?text=Hello%20Primal%20FM,%20I%20need%20a%20service%20quote."
      className="fab whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/assets/icons/whatsapp.svg" alt="Chat on WhatsApp" />
    </a>
  );
}
