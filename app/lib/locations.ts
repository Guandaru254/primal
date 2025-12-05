// ============================================================================
// TYPES
// ============================================================================
export interface FAQItem {
  q: string;
  a: string;
}

export interface Location {
  slug: string;
  name: string;
  city: string;
  heroImage: string;

  estates: string[];
  roads: string[];
  landmarks: string[];

  keywords: string[];
  serviceHighlights: string[];

  faq: FAQItem[];
}

// ============================================================================
// LOCATIONS (20 TOTAL)
// ============================================================================
export const locations: Location[] = [

  // ----------------------------------------------------------------------------------
  // 1. WESTLANDS
  // ----------------------------------------------------------------------------------
  {
    slug: "westlands",
    name: "Westlands",
    city: "Nairobi",
    heroImage: "/assets/images/locations/westlands.jpeg",

    estates: [
      "Brookside Drive",
      "General Mathenge",
      "Rhapta Road",
      "Muthangari",
      "Spring Valley",
      "School Lane",
      "Peponi Road",
      "Riverside",
      "Highridge",
      "Ojijo Road",
      "Chiromo",
      "Waiyaki Way Residences",
      "Westlands CBD",
      "Kangemi Border",
      "Parklands (1st to 5th Avenue)"
    ],

    roads: [
      "Waiyaki Way",
      "Chiromo Road",
      "Peponi Road",
      "Mpaka Road",
      "Rhapta Road",
      "General Mathenge Road",
      "Ring Road Westlands",
      "Ojijo Road",
      "Woodvale Grove",
      "Lower Kabete Road",
      "Westlands Road"
    ],

    landmarks: [
      "Sarit Centre",
      "Westgate Mall",
      "The Mirage",
      "GTC Tower",
      "Ibis Styles Hotel",
      "Kempinski Hotel",
      "ABC Place",
      "One Africa Place",
      "Delta Towers",
      "MP Shah Hospital"
    ],

    keywords: [
      "Westlands appliance repair",
      "Technicians in Westlands",
      "Plumbing Westlands",
      "Electrical repair Westlands",
      "AC repair Westlands",
      "Refrigerator repair Westlands",
      "Cooker repair Westlands"
    ],

    serviceHighlights: [
      "Same-day technician dispatch",
      "Commercial & residential service",
      "Fast appliance diagnostics",
      "Emergency repair availability"
    ],

    faq: [
      { q: "Do you serve all Westlands estates?", a: "Yes, including Riverside, Brookside, Spring Valley and more." },
      { q: "What appliances do you repair?", a: "We repair 92+ appliances including washing machines, fridges, ovens and ACs." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 2. KILIMANI
  // ----------------------------------------------------------------------------------
  {
    slug: "kilimani",
    name: "Kilimani",
    city: "Nairobi",
    heroImage: "/assets/images/locations/kilimani.jpeg",

    estates: [
      "Lenana Road",
      "George Padmore Lane",
      "Wood Avenue",
      "Kindaruma Road",
      "Rose Avenue",
      "Nyeri Road",
      "Kirichwa Road",
      "Kirichwa Lane",
      "Riara Road",
      "Yaya Centre Vicinity",
      "Chania Avenue",
      "Denis Pritt Road",
      "Hurlingham Border",
      "Adams Arcade Border"
    ],

    roads: [
      "Argwings Kodhek Road",
      "Chaka Road",
      "Ring Road Kilimani",
      "Kindaruma Road",
      "Denis Pritt Road",
      "Wood Avenue",
      "Rose Avenue",
      "Lenana Road"
    ],

    landmarks: [
      "Yaya Centre",
      "Prestige Plaza",
      "Adlife Plaza",
      "Junction Mall",
      "CITAM Valley Road",
      "State House Border"
    ],

    keywords: [
      "Kilimani appliance repair",
      "Technicians Kilimani",
      "Fridge repair Kilimani",
      "Washer repair Kilimani",
      "Oven repair Kilimani"
    ],

    serviceHighlights: [
      "Fast apartment response",
      "Premium residential support",
      "Expert fridge and washer repair"
    ],

    faq: [
      { q: "Do you repair appliances in apartments?", a: "Yes — high-rise, serviced residences and townhouses." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 3. LAVINGTON
  // ----------------------------------------------------------------------------------
  {
    slug: "lavington",
    name: "Lavington",
    city: "Nairobi",
    heroImage: "/assets/images/locations/lavington.jpeg",

    estates: [
      "James Gichuru",
      "Gitanga Road",
      "Hatheru Road",
      "Maziwa Road",
      "Riara Road",
      "Ole Odume Road",
      "Muthangari",
      "Valley Arcade",
      "Five Star Estate",
      "Othaya Road"
    ],

    roads: [
      "Gitanga Road",
      "James Gichuru Road",
      "Hatheru Road",
      "Riara Road",
      "Ole Odume Road",
      "Muthangari Road"
    ],

    landmarks: [
      "Lavington Mall",
      "The Junction Mall",
      "Valley Arcade",
      "Riara Schools"
    ],

    keywords: [
      "Lavington technicians",
      "Lavington appliance repair",
      "Cooker repair Lavington"
    ],

    serviceHighlights: [
      "High-end estate service",
      "AC, plumbing, electrical"
    ],

    faq: [
      { q: "Do you repair premium appliances?", a: "Yes — Bosch, Samsung, LG, Whirlpool and more." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 4. KAREN
  // ----------------------------------------------------------------------------------
  {
    slug: "karen",
    name: "Karen",
    city: "Nairobi",
    heroImage: "/assets/images/locations/karen.jpeg",

    estates: [
      "Karen Plains",
      "Hardy",
      "Bogani",
      "Ndeiya",
      "Karen Shopping Centre",
      "Kwenia",
      "Karen End",
      "Langata South Border",
      "Karen Country Club Area",
      "Miotoni",
      "Windy Ridge"
    ],

    roads: [
      "Langata Road",
      "Ngong Road",
      "Bogani Road",
      "Hardy Road",
      "Karen Road",
      "Miotoni Road"
    ],

    landmarks: [
      "Karen Blixen Museum",
      "Galleria Mall",
      "Karen Hospital",
      "The Waterfront Mall"
    ],

    keywords: [
      "Karen appliance repair",
      "Karen electricians",
      "Karen plumbers"
    ],

    serviceHighlights: [
      "Elite home support",
      "Fast service for large homes",
      "Expert AC & appliance repair"
    ],

    faq: [
      { q: "Do you serve gated compounds?", a: "Yes — including Hardy, Miotoni and all townhouse clusters." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 5. RUNDA
  // ----------------------------------------------------------------------------------
  {
    slug: "runda",
    name: "Runda",
    city: "Nairobi",
    heroImage: "/assets/images/locations/runda.jpeg",

    estates: [
      "Runda Gardens",
      "Runda Groove",
      "Runda Mimosa",
      "Runda Evergreen",
      "Gigiri Border",
      "Rosslyn Lone Tree",
      "Roselyn Estate",
      "Limuru Road Residences"
    ],

    roads: [
      "Kiambu Road",
      "Limuru Road",
      "UN Avenue",
      "Runda Grove",
      "Mimosa Road"
    ],

    landmarks: [
      "Village Market",
      "UN Headquarters",
      "Two Rivers Mall",
      "Embassy Row"
    ],

    keywords: [
      "Runda technicians",
      "Runda appliance repair",
      "Runda maintenance"
    ],

    serviceHighlights: [
      "Premium estate service",
      "High-priority dispatch"
    ],

    faq: [
      { q: "Do you work with embassies?", a: "Yes — we support residences and offices." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 6. PARKLANDS
  // ----------------------------------------------------------------------------------
  {
    slug: "parklands",
    name: "Parklands",
    city: "Nairobi",
    heroImage: "/assets/images/locations/parklands.jpeg",

    estates: [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "4th Avenue",
      "Highridge",
      "Ojijo Road",
      "Forest Road Border",
      "Grove Lane",
      "6th Parklands"
    ],

    roads: [
      "Parklands Road",
      "Ojijo Road",
      "Limuru Road",
      "Aga Khan Walk",
      "Grove Lane"
    ],

    landmarks: [
      "MP Shah Hospital",
      "Diamond Plaza",
      "Aga Khan University Hospital",
      "Highridge Shopping Centre"
    ],

    keywords: [
      "Parklands appliance repair",
      "Technicians Parklands"
    ],

    serviceHighlights: [
      "Fast arrival",
      "Commercial & residential repair"
    ],

    faq: [
      { q: "Do you offer emergency service?", a: "Yes." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 7. KASARANI
  // ----------------------------------------------------------------------------------
  {
    slug: "kasarani",
    name: "Kasarani",
    city: "Nairobi",
    heroImage: "/assets/images/locations/kasarani.jpeg",

    estates: [
      "Seasons",
      "Sunton",
      "Clay City",
      "Hunter's",
      "Mwiki",
      "Kasarani Estate",
      "Kenyatta University Border",
      "Thika Road Apartments"
    ],

    roads: [
      "Thika Road",
      "Kasarani Road",
      "Mwiki Road",
      "Clay City Road",
      "Seasons Road"
    ],

    landmarks: [
      "Kasarani Stadium",
      "TRM Mall",
      "Safari Park Hotel"
    ],

    keywords: ["Kasarani repair", "Technician Kasarani"],

    serviceHighlights: [
      "Affordable repairs",
      "Fast service"
    ],

    faq: [
      { q: "Do you serve Mwiki?", a: "Yes." }
    ]
  },

  // ----------------------------------------------------------------------------------
  // 8. ROYSAMBU
  // ----------------------------------------------------------------------------------
  {
    slug: "roysambu",
    name: "Roysambu",
    city: "Nairobi",
    heroImage: "/assets/images/locations/roysambu.jpeg",

    estates: [
      "Thome 1",
      "Thome 2",
      "Thome 3",
      "Seasons",
      "Lumumba Drive",
      "TRM Drive Area"
    ],

    roads: [
      "Thika Road",
      "Lumumba Drive",
      "TRM Drive",
      "Roysambu Road"
    ],

    landmarks: [
      "TRM Mall",
      "Safari Park",
      "Thika Superhighway"
    ],

    keywords: ["Roysambu repair"],

    serviceHighlights: ["Fast service"],

    faq: [{ q: "Do you repair cookers?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 9. RUAKA
  // ----------------------------------------------------------------------------------
  {
    slug: "ruaka",
    name: "Ruaka",
    city: "Nairobi",
    heroImage: "/assets/images/locations/ruaka.jpeg",

    estates: [
      "Rosslyn Riviera",
      "Two Rivers Border",
      "Ruaka Apartments",
      "Ndenderu",
      "Gachie Border"
    ],

    roads: [
      "Limuru Road",
      "Ruaka Road"
    ],

    landmarks: [
      "Two Rivers Mall",
      "Quickmart Ruaka"
    ],

    keywords: ["Ruaka appliance repair"],

    serviceHighlights: ["Fast growing area"],

    faq: [{ q: "Do you serve Ndenderu?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 10. THINDIGUA
  // ----------------------------------------------------------------------------------
  {
    slug: "thindigua",
    name: "Thindigua",
    city: "Nairobi",
    heroImage: "/assets/images/locations/thindigua.jpeg",

    estates: [
      "Kimberley",
      "Thindigua Heights",
      "Kiambu Road Residences"
    ],

    roads: [
      "Kiambu Road",
      "Thindigua Road"
    ],

    landmarks: [
      "Quickmart Thindigua"
    ],

    keywords: ["Thindigua repair"],

    serviceHighlights: ["Reliable technicians"],

    faq: [{ q: "Do you serve Kiambu Road apartments?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 11. RUARAKA / GARDEN ESTATE
  // ----------------------------------------------------------------------------------
  {
    slug: "ruaraka",
    name: "Ruaraka",
    city: "Nairobi",
    heroImage: "/assets/images/locations/ruaraka.jpeg",

    estates: [
      "Garden Estate",
      "Utalii",
      "Balozi",
      "Kenya Breweries Area"
    ],

    roads: [
      "Thika Road",
      "Outer Ring Road",
      "Baba Dogo Road"
    ],

    landmarks: [
      "Garden City Mall",
      "Safari Park"
    ],

    keywords: ["Ruaraka repair"],

    serviceHighlights: ["Commercial + residential"],

    faq: [{ q: "Do you serve Garden Estate?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 12. LANGATA
  // ----------------------------------------------------------------------------------
  {
    slug: "langata",
    name: "Langata",
    city: "Nairobi",
    heroImage: "/assets/images/locations/langata.jpeg",

    estates: [
      "NHC",
      "Onyonka",
      "Southlands",
      "Langata Barracks Area",
      "Deliverance Area",
      "Kona Baridi",
      "Uhuru Gardens"
    ],

    roads: [
      "Langata Road",
      "Magadi Road",
      "Kitengela Road"
    ],

    landmarks: ["Galleria Mall", "Bomas of Kenya"],

    keywords: ["Langata repair"],

    serviceHighlights: ["Strong residential demand"],

    faq: [{ q: "Do you serve Southlands?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 13. SOUTH B
  // ----------------------------------------------------------------------------------
  {
    slug: "south-b",
    name: "South B",
    city: "Nairobi",
    heroImage: "/assets/images/locations/southb.jpeg",

    estates: [
      "Capital Centre Area",
      "Mombasa Road Apartments",
      "Golden Gate",
      "Hazina Estate",
      "Balozi Estate",
      "South B Shopping Centre"
    ],

    roads: [
      "Mombasa Road",
      "Hazina Road",
      "Kapiti Road"
    ],

    landmarks: ["Capital Centre"],

    keywords: ["South B technicians"],

    serviceHighlights: ["High repair demand"],

    faq: [{ q: "Do you serve Golden Gate?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 14. SOUTH C
  // ----------------------------------------------------------------------------------
  {
    slug: "south-c",
    name: "South C",
    city: "Nairobi",
    heroImage: "/assets/images/locations/southc.jpeg",

    estates: [
      "Muhoho Avenue",
      "Bellevue",
      "Akila I",
      "Akila II",
      "South C Estate"
    ],

    roads: ["Muhoho Road", "Mombasa Road"],

    landmarks: ["Bellevue"],

    keywords: ["South C repair"],

    serviceHighlights: ["Affordable, fast"],

    faq: [{ q: "Do you serve Akila?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 15. NAIROBI CBD
  // ----------------------------------------------------------------------------------
  {
    slug: "nairobi-cbd",
    name: "Nairobi CBD",
    city: "Nairobi",
    heroImage: "/assets/images/locations/cbd.jpeg",

    estates: [
      "Upper Hill Border",
      "Ngara Border",
      "Globe Roundabout Area",
      "Railway Area"
    ],

    roads: [
      "Moi Avenue",
      "Kenyatta Avenue",
      "Tom Mboya Street",
      "Haile Selassie",
      "University Way"
    ],

    landmarks: [
      "Kenyatta Avenue",
      "Kencom",
      "Jamia Mall"
    ],

    keywords: ["CBD technicians"],

    serviceHighlights: ["Business repairs"],

    faq: [{ q: "Do you serve offices?", a: "Yes — same-day." }]
  },

  // ----------------------------------------------------------------------------------
  // 16. INDUSTRIAL AREA
  // ----------------------------------------------------------------------------------
  {
    slug: "industrial-area",
    name: "Industrial Area",
    city: "Nairobi",
    heroImage: "/assets/images/locations/industrial.jpeg",

    estates: [
      "Lunga Lunga",
      "Enterprise Road",
      "Addis Ababa Road",
      "Kangundo Road Border"
    ],

    roads: [
      "Enterprise Road",
      "Lunga Lunga Road",
      "Likoni Road",
      "Sheikh Karume Road"
    ],

    landmarks: ["CMC Motors", "Sameer Park"],

    keywords: ["Industrial Area technicians"],

    serviceHighlights: ["Commercial repair"],

    faq: [{ q: "Do you serve factories?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 17. EMBASAKI
  // ----------------------------------------------------------------------------------
  {
    slug: "embakasi",
    name: "Embakasi",
    city: "Nairobi",
    heroImage: "/assets/images/locations/embakasi.jpeg",

    estates: [
      "Pipeline",
      "Tassia",
      "Fedha",
      "Nyayo Estate",
      "Donholm Extension",
      "Savannah",
      "Mukuru kwa Njenga (select zones)"
    ],

    roads: [
      "Airport Road",
      "Outering Road",
      "Fedha Road"
    ],

    landmarks: ["Nyayo Estate Gate A", "Tassia Stage"],

    keywords: ["Embakasi repair"],

    serviceHighlights: ["Fast & affordable"],

    faq: [{ q: "Do you serve Fedha?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 18. UTAWALA
  // ----------------------------------------------------------------------------------
  {
    slug: "utawala",
    name: "Utawala",
    city: "Nairobi",
    heroImage: "/assets/images/locations/utawala.jpeg",

    estates: [
      "Githunguri",
      "Maili Saba",
      "Utawala Church Road",
      "Airways Area",
      "Benedictor",
      "Kincar",
      "Kamulu Border"
    ],

    roads: [
      "Eastern Bypass",
      "Utawala Road",
      "Church Road"
    ],

    landmarks: ["Naivas Utawala"],

    keywords: ["Utawala repair"],

    serviceHighlights: ["Reliable service"],

    faq: [{ q: "Do you serve Kamulu?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 19. RUIRU
  // ----------------------------------------------------------------------------------
  {
    slug: "ruiru",
    name: "Ruiru",
    city: "Nairobi",
    heroImage: "/assets/images/locations/ruiru.jpeg",

    estates: [
      "Githurai 44",
      "Githurai 45",
      "Kahawa Sukari Border",
      "Membley",
      "Ruiru Town"
    ],

    roads: ["Thika Road"],

    landmarks: ["Ruiru Mall"],

    keywords: ["Ruiru repair"],

    serviceHighlights: ["Strong demand"],

    faq: [{ q: "Do you serve Membley?", a: "Yes." }]
  },

  // ----------------------------------------------------------------------------------
  // 20. ONGATA RONGAI
  // ----------------------------------------------------------------------------------
  {
    slug: "rongai",
    name: "Ongata Rongai",
    city: "Nairobi",
    heroImage: "/assets/images/locations/rongai.jpeg",

    estates: [
      "Kware",
      "Tuskys Area",
      "Rimpa",
      "Nkoroi",
      "Makazi Estate"
    ],

    roads: [
      "Magadi Road"
    ],

    landmarks: ["Maasai Mall"],

    keywords: ["Rongai repair"],

    serviceHighlights: ["Affordable & fast"],

    faq: [{ q: "Do you serve Rimpa?", a: "Yes." }]
  }

];

// ============================================================================
// UTIL FUNCTION
// ============================================================================
export function getLocationBySlug(slug: string) {
  return locations.find((loc) => loc.slug === slug);
}
