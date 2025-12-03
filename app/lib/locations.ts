// app/lib/locations.ts
//
// ULTRA SEO-OPTIMIZED LOCATION DATA
// Every field is intentionally crafted to rank for Nairobi local search,
// service-intent, local pack competition and voice queries.

export type LocationFAQ = {
  question: string;
  answer: string;
};

export type LocationArea = {
  slug: string;
  name: string;
  city: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  heroImage: string;
  serviceHighlights: string[];
  neighbourhoods: string[];
  keywords: string[];
  faqs: LocationFAQ[];
};

export const locations: LocationArea[] = [
  // ----------------------------------------------------------
  // WESTLANDS
  // ----------------------------------------------------------
  {
    slug: "nairobi-westlands",
    name: "Westlands & Parklands – Nairobi",
    city: "Nairobi",
    heroTitle:
      "Appliance Repair, HVAC & Facilities Services in Westlands, Nairobi",
    heroSubtitle:
      "Same-day washing machine repair, fridge repair, cold room servicing, HVAC maintenance and full facilities support in Westlands, Parklands, Riverside and nearby estates.",
    description:
      "Primal Facilities Management provides reliable repair, installation and maintenance services for homes, offices, hotels, apartments, laundromats, commercial kitchens and businesses across Westlands, Parklands, Riverside, Lavington and surrounding areas.",
    heroImage: "/assets/images/locations/nairobi-westlands.jpg",
    serviceHighlights: [
      "Washing machine repair for homes & laundromats",
      "Fridge, freezer & cold room repair",
      "AC & HVAC maintenance for homes and offices",
      "Electrical & plumbing services",
      "Commercial laundry equipment support",
    ],
    neighbourhoods: [
      "Westlands",
      "Parklands",
      "Riverside",
      "Lavington",
      "Kileleshwa",
      "Muthangari",
    ],
    keywords: [
      "washing machine repair westlands",
      "fridge repair parklands",
      "hvac service westlands",
      "cold room repair nairobi westlands",
      "laundromat repair westlands",
      "appliance repair near me westlands",
    ],
    faqs: [
      {
        question: "Do you offer same-day appliance repair in Westlands?",
        answer:
          "Yes. Most repairs in Westlands, Parklands and Riverside qualify for same-day or next-day service depending on technician availability.",
      },
      {
        question: "Do you repair both domestic and commercial appliances?",
        answer:
          "Yes. We service home appliances, laundromat machines, commercial fridges, cold rooms, HVAC systems and industrial equipment.",
      },
    ],
  },

  // ----------------------------------------------------------
  // KILIMANI
  // ----------------------------------------------------------
  {
    slug: "nairobi-kilimani",
    name: "Kilimani & Kileleshwa – Nairobi",
    city: "Nairobi",
    heroTitle:
      "Washing Machine, Fridge & HVAC Repair in Kilimani and Kileleshwa",
    heroSubtitle:
      "Trusted repair technicians serving Kilimani, Kileleshwa, Yaya, Hurlingham, Wood Avenue and surrounding estates.",
    description:
      "We provide professional appliance repair, AC servicing, cold room maintenance and electrical & plumbing support for apartments, homes and businesses throughout Kilimani and Kileleshwa.",
    heroImage: "/assets/images/locations/nairobi-kilimani.jpg",
    serviceHighlights: [
      "Washing machine repair for apartments",
      "Fridge and freezer repair",
      "AC gas top-up & cleaning",
      "Cold room diagnostics & servicing",
      "Plumbing & electrical support",
    ],
    neighbourhoods: [
      "Kilimani",
      "Kileleshwa",
      "Yaya",
      "Wood Avenue",
      "Hurlingham",
      "Adams Arcade",
    ],
    keywords: [
      "washing machine repair kilimani",
      "fridge repair kileleshwa",
      "ac repair kilimani",
      "cold room repair kilimani",
      "technician near me kilimani",
    ],
    faqs: [
      {
        question: "How fast can a technician reach Kilimani?",
        answer:
          "In most cases, we dispatch a technician within 1–2 hours for Kilimani and Kileleshwa residents.",
      },
    ],
  },

  // ----------------------------------------------------------
  // KAREN
  // ----------------------------------------------------------
  {
    slug: "nairobi-karen",
    name: "Karen, Lang’ata & Ngong Road",
    city: "Nairobi",
    heroTitle:
      "Appliance Repair, Cold Rooms & HVAC Services in Karen & Lang’ata",
    heroSubtitle:
      "Premium home and commercial repair services for Karen, Hardy, Lang’ata, Rongai and Ngong Road.",
    description:
      "We support high-end homes, eateries, hotels, farms, schools and commercial facilities in Karen and Lang’ata with reliable machine repair, maintenance and installation.",
    heroImage: "/assets/images/locations/nairobi-karen.jpg",
    serviceHighlights: [
      "High-capacity washing machine repair",
      "Commercial fridge & freezer repair",
      "Cold room installation & servicing",
      "HVAC servicing for homes & offices",
      "Farm & industrial refrigeration support",
    ],
    neighbourhoods: ["Karen", "Lang’ata", "Hardy", "Ngong Road", "Rongai"],
    keywords: [
      "washing machine repair karen",
      "fridge repair karen nairobi",
      "cold room installation karen",
      "ac repair langata",
    ],
    faqs: [
      {
        question: "Do you handle large cold room projects in Karen?",
        answer:
          "Yes. We specialize in full installations, upgrades and preventive maintenance for restaurants, farms and hotels.",
      },
    ],
  },

  // ----------------------------------------------------------
  // KITISURU
  // ----------------------------------------------------------
  {
    slug: "nairobi-kitisuru",
    name: "Kitisuru, Gigiri & Runda – Nairobi",
    city: "Nairobi",
    heroTitle:
      "Home Appliance Repair & Technical Services in Runda, Gigiri & Kitisuru",
    heroSubtitle:
      "Premium home service technicians for washing machines, refrigerators, AC units and domestic systems.",
    description:
      "We support embassies, residences, villas and gated communities in Kitisuru, Runda and Gigiri with fast, discreet and reliable repair services.",
    heroImage: "/assets/images/locations/nairobi-kitisuru.jpg",
    serviceHighlights: [
      "Washing machine repair",
      "Fridge/freezer repair",
      "AC & ventilation servicing",
      "Plumbing & electrical",
    ],
    neighbourhoods: ["Runda", "Gigiri", "Kitisuru", "Rosslyn", "Muthaiga"],
    keywords: [
      "washing machine repair runda",
      "fridge repair gigiri",
      "ac servicing kitisuru",
    ],
    faqs: [
      {
        question: "Can you work in embassy and diplomatic residences?",
        answer:
          "Yes. Our team is experienced in high-security and diplomatic zones.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationArea | undefined {
  return locations.find((loc) => loc.slug === slug);
}
