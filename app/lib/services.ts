// app/lib/services.ts

export type FAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  shortDescription: string;
  heroImage: string;
  keywords: string[];
  bullets: string[];
  offer: string[];
  faq: FAQ[];
};

export const services: Service[] = [
  {
    slug: "washing-machine-repair",
    name: "Washing Machine Repair (Home & Commercial)",
    heroTitle: "Professional Washing Machine Repair in Nairobi",
    heroSubtitle:
      "Fast, reliable repair for home, commercial, and industrial washing machines across Nairobi and Kenya.",
    shortDescription:
      "We repair top-load, front-load, semi-automatic, fully-automatic, and industrial washing machines for homes, laundromats, hotels, and hospitals.",
    heroImage: "/assets/images/services/washing-machine.jpg",

    keywords: [
      "washing machine repair nairobi",
      "washing machine technician kenya",
      "laundromat machine repair kenya",
      "commercial washing machine repair",
      "washer repair near me",
    ],

    bullets: [
      "Diagnosis and repair of all major washing machine brands",
      "Support for domestic, commercial, and industrial machines",
      "Emergency response for laundromats and hotels",
      "Preventive maintenance plans to reduce downtime",
    ],

    offer: [
      "Full system diagnostics for electrical, mechanical, and drainage issues",
      "Drum, belt, bearing, and motor repair",
      "PCB and control panel troubleshooting",
      "Water inlet and drainage system repair",
      "Industrial washer servicing for laundromats and institutions",
      "Installation and commissioning of new machines",
    ],

    faq: [
      {
        q: "Do you repair both domestic and commercial washing machines?",
        a: "Yes. We handle home machines as well as heavy-duty commercial units for laundromats, hotels, hostels, and institutions.",
      },
      {
        q: "Which areas do you cover?",
        a: "We serve all Nairobi areas including Westlands, Kilimani, Karen, Syokimau, Runda, Thika Road, and surrounding towns.",
      },
      {
        q: "Do you offer emergency repairs?",
        a: "Yes. High-usage businesses such as laundromats and hotels get priority same-day call-outs when possible.",
      },
    ],
  },

  {
    slug: "fridge-and-freezer-repair",
    name: "Fridge & Freezer Repair",
    heroTitle: "Expert Fridge & Freezer Repair in Nairobi",
    heroSubtitle:
      "Professional refrigerator and freezer repair for homes, restaurants, supermarkets, and cold storage businesses.",
    shortDescription:
      "We repair single-door, double-door, chest freezers, display fridges, and commercial cold storage units.",
    heroImage: "/assets/images/services/fridge.jpg",

    keywords: [
      "fridge repair nairobi",
      "freezer repair nairobi",
      "refrigerator technician kenya",
      "cold room repair kenya",
      "fridge gas refill nairobi",
    ],

    bullets: [
      "Fast diagnosis for cooling, gas, and thermostat issues",
      "Commercial cold storage and supermarket fridges",
      "Original or high-quality compatible spare parts",
      "On-site repair anywhere in Nairobi",
    ],

    offer: [
      "Gas refilling (R134a, R600a, R410, R22)",
      "Compressor replacement and repair",
      "Thermostat and sensor replacement",
      "Cooling system leak detection and sealing",
      "Ice buildup and defrost system repair",
      "Commercial freezer and display fridge support",
    ],

    faq: [
      {
        q: "My fridge is running but not cooling, can you fix it?",
        a: "Yes. Common causes include gas leaks, compressor failure, clogged capillary tubes, or faulty thermostats.",
      },
      {
        q: "Do you service commercial cold rooms?",
        a: "Absolutely. We work with restaurants, butcheries, supermarkets, and hotels that depend on cold storage.",
      },
    ],
  },

  {
    slug: "cold-room-installation-and-repair",
    name: "Cold Room Installation & Repair",
    heroTitle: "Cold Room Installation & Repair in Nairobi & Kenya",
    heroSubtitle:
      "Professional cold room design, installation, upgrade, and repair for businesses requiring reliable cold storage.",
    shortDescription:
      "We support food businesses, pharma, hotels, and industrial facilities with end-to-end cold room solutions.",
    heroImage: "/assets/images/services/cold-room.jpg",

    keywords: [
      "cold room installation kenya",
      "cold room repair nairobi",
      "cold storage solutions kenya",
      "commercial refrigeration kenya",
    ],

    bullets: [
      "Custom cold room design based on your storage capacity",
      "New installations, upgrades, and refits",
      "Gas charging, leak detection, and sealing",
      "24/7 support for mission-critical systems",
    ],

    offer: [
      "Cold room panel installation (PUF panels)",
      "Evaporator & condenser installation/repair",
      "Refrigeration piping and insulation",
      "Compressor and motor replacement",
      "Temperature control system setup",
      "Preventive cold room maintenance contracts",
    ],

    faq: [
      {
        q: "Can you upgrade an existing cold room instead of replacing it?",
        a: "Yes. We inspect your current unit and recommend whether an upgrade or full replacement is more cost-effective.",
      },
      {
        q: "Do you support clients outside Nairobi?",
        a: "Yes. For medium and large cold room projects, we serve clients countrywide.",
      },
    ],
  },

  {
    slug: "industrial-machine-repair",
    name: "Industrial Machine Repair & Maintenance",
    heroTitle: "Industrial Machine Repair for Kenyan Businesses",
    heroSubtitle:
      "Reliable repair and maintenance for heavy-duty industrial equipment across factories and production facilities.",
    shortDescription:
      "We maintain and repair industrial laundry machines, HVAC systems, pumps, motors, and other heavy-duty machines.",
    heroImage: "/assets/images/services/industrial.jpg",

    keywords: [
      "industrial machine repair kenya",
      "factory maintenance nairobi",
      "industrial equipment servicing",
    ],

    bullets: [
      "Scheduled preventive maintenance",
      "Emergency breakdown response",
      "Support for motors, pumps, belts, and controls",
      "Long-term service contracts for industry",
    ],

    offer: [
      "Motor rewinding & replacement",
      "Pump overhauls & repairs",
      "Industrial dryer repair",
      "Hydraulic & pneumatic system servicing",
      "Control panel & automation troubleshooting",
      "Heavy-duty machine installation",
    ],

    faq: [
      {
        q: "Do you provide maintenance contracts?",
        a: "Yes. We offer monthly, quarterly, and annual plans tailored to your equipment and usage.",
      },
    ],
  },

  {
    slug: "hvac-maintenance-and-repair",
    name: "HVAC Maintenance & Repair",
    heroTitle: "HVAC Maintenance & Repair in Nairobi",
    heroSubtitle:
      "Reliable HVAC servicing for homes, offices, malls, and industrial environments across Kenya.",
    shortDescription:
      "We service split ACs, VRF systems, ventilation units, cooling towers, and building-wide HVAC.",
    heroImage: "/assets/images/services/hvac.jpg",

    keywords: [
      "ac repair nairobi",
      "hvac servicing kenya",
      "vrf system repair kenya",
      "air conditioning maintenance nairobi",
    ],

    bullets: [
      "Full AC cleaning, gas top-up, and leak checks",
      "Commercial building HVAC maintenance",
      "Filter replacement and indoor air quality testing",
      "Energy-efficiency optimization",
    ],

    offer: [
      "VRF/VRV system diagnostics",
      "AC installation (home & commercial)",
      "AC chemical cleaning",
      "Ductwork cleaning & maintenance",
      "HVAC electrical testing",
      "Cooling tower servicing",
    ],

    faq: [
      {
        q: "How often should my AC be serviced?",
        a: "Homes: once per year. Offices: every 3–6 months due to higher usage.",
      },
    ],
  },

  {
    slug: "electrical-and-plumbing-services",
    name: "Electrical & Plumbing Services",
    heroTitle: "Professional Electrical & Plumbing Services",
    heroSubtitle:
      "Safe, compliant electrical installations and plumbing repair services for homes, offices, and businesses.",
    shortDescription:
      "From wiring to leak repair, we provide full-service electrical and plumbing solutions.",
    heroImage: "/assets/images/services/plumbing.jpg",

    keywords: [
      "electrician nairobi",
      "plumber nairobi",
      "electrical installation kenya",
      "pipe repair nairobi",
    ],

    bullets: [
      "New electrical installations and upgrades",
      "Socket, lighting, and distribution board work",
      "Leak detection and pipe repair",
      "Bathroom and kitchen plumbing installations",
    ],

    offer: [
      "Fuse board upgrades",
      "Lighting installation (LED, spotlights)",
      "Power backup system installation",
      "Drain cleaning and unblocking",
      "Water heater installation & repair",
      "Bathroom & kitchen renovation plumbing",
    ],

    faq: [
      {
        q: "Do you provide electrical compliance checks?",
        a: "Yes. We inspect wiring, grounding, breakers, and load safety.",
      },
    ],
  },

  {
    slug: "commercial-laundry-equipment",
    name: "Commercial Laundry Equipment Supply & Support",
    heroTitle:
      "Commercial Laundry Equipment for Laundromats & Hotels",
    heroSubtitle:
      "Installation, repair, and maintenance of commercial laundry equipment across Kenya.",
    shortDescription:
      "Ideal for laundromats, hotels, hostels, hospitals, and high-volume laundry operations.",
    heroImage: "/assets/images/services/laundry.jpg",

    keywords: [
      "commercial laundry machines kenya",
      "laundromat equipment nairobi",
      "industrial dryer kenya",
    ],

    bullets: [
      "Installation & commissioning of new equipment",
      "Preventive maintenance & breakdown repair",
      "Operator training & support",
      "Spare parts sourcing",
    ],

    offer: [
      "Washer extractor installation",
      "Commercial dryer servicing",
      "Folding & ironing machine setup",
      "Laundry room layout planning",
      "Maintenance contracts for institutions",
    ],

    faq: [
      {
        q: "Can you help me set up a new laundromat?",
        a: "Yes. We assist with equipment selection, layout, installation, and long-term support.",
      },
    ],
  },

  {
    slug: "cleaning-and-janitorial-services",
    name: "Cleaning & Janitorial Services",
    heroTitle: "Professional Cleaning & Janitorial Services",
    heroSubtitle:
      "Reliable cleaning teams for residential, commercial, and industrial spaces.",
    shortDescription:
      "From deep cleaning to daily office cleaning contracts, we ensure spotless and hygienic environments.",
    heroImage: "/assets/images/services/cleaning.jpg",

    keywords: [
      "office cleaning nairobi",
      "house cleaning services kenya",
      "janitorial services nairobi",
    ],

    bullets: [
      "Office and commercial cleaning",
      "Post-construction & move-in cleaning",
      "Deep upholstery & carpet cleaning",
      "Eco-friendly products available",
    ],

    offer: [
      "Daily office cleaning",
      "Home deep cleaning",
      "Carpet & upholstery cleaning",
      "Sanitization and disinfection",
      "Estate & apartment common area cleaning",
    ],

    faq: [
      {
        q: "Do you provide regular office cleaning staff?",
        a: "Yes. We offer dedicated teams on daily, weekly, or monthly schedules.",
      },
    ],
  },
];

// Fetch by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
