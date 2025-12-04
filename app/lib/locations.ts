// app/lib/locations.ts

export interface Location {
  slug: string;
  name: string;
  city: string;

  // HERO / LIST PAGE
  heroImage: string;
  heroSubtitle: string;

  // Copy blocks used on slug page
  intro: string;       // short intro about the area
  overview: string;    // 1–2 sentences more context

  // Area structure
  neighbourhoods: string[]; // main estates / neighbourhoods
  areas: string[];          // micro-areas / nearby spots
  roads: string[];          // key roads & access routes
  landmarks: string[];      // local landmarks / malls / hubs

  // Services & clients
  services: string[];           // services available in this location
  serviceHighlights: string[];  // 3–4 bullets for the list page
  clientTypes: string[];        // typical clients

  // Appliances / systems to plug into “near me” SEO
  appliances: string[];

  // SEO keyword support (used in slug page “keywords” section)
  keywords: string[];

  // FAQs (location-specific)
  faq: { q: string; a: string }[];
}

/* =========================================================
   MASTER LOCATIONS ARRAY (12 CORE AREAS)
========================================================= */

export const locations: Location[] = [
  // 1. WESTLANDS
  {
    slug: "westlands",
    name: "Westlands & Parklands",
    city: "Nairobi",
    heroImage: "/assets/images/services/facility-management-main.jpg",
    heroSubtitle:
      "Fast appliance repair, HVAC service and facility management for apartments, offices and hotels in Westlands and Parklands.",

    intro:
      "Westlands is one of Nairobi’s busiest mixed-use districts – packed with apartments, offices, hotels and malls that rely on working appliances and reliable facility support.",
    overview:
      "Our technicians handle everything from home appliances in apartment blocks to full-scale maintenance for commercial buildings and hospitality properties across Westlands and Parklands.",

    neighbourhoods: [
      "Westlands",
      "Parklands",
      "Muthithi Road area",
      "Brookside",
      "Riverside",
      "Sarit Centre environs",
    ],
    areas: [
      "Raphta Road",
      "General Mathenge",
      "Waiyaki Way service lanes",
      "School Lane",
      "Lantana Road",
      "Westlands CBD",
      "Ring Road Parklands",
    ],
    roads: [
      "Waiyaki Way",
      "Ring Road Westlands",
      "Muthithi Road",
      "Chiromo Road",
      "Mkungu Close",
      "General Mathenge Road",
    ],
    landmarks: [
      "Sarit Centre",
      "Westgate Mall",
      "Oval",
      "Lions Place",
      "ABC Place",
      "9 West",
      "Parklands Mosque",
    ],

    services: [
      "Washing machine repair in Westlands",
      "Fridge and freezer repair",
      "Dishwasher and kitchen appliance repair",
      "HVAC, AC and ventilation services",
      "Electrical fault-finding and rewiring",
      "Plumbing repairs and leak fixing",
      "CCTV and security system installation",
      "Home and office cleaning services",
      "Landscaping and compound maintenance",
      "Emergency same-day repair services",
    ],
    serviceHighlights: [
      "Same-day appliance repair for apartments and Airbnbs in Westlands.",
      "Full facilities support for offices, co-working spaces and malls.",
      "24/7 emergency response for critical breakdowns and power issues.",
    ],
    clientTypes: [
      "Apartment blocks & gated communities",
      "Corporate offices & business parks",
      "Hotels, Airbnbs & serviced apartments",
      "Restaurants, cafés & cloud kitchens",
      "Clinics, labs and small hospitals",
    ],

    appliances: [
      "Washing machines",
      "Washer-dryer combos",
      "Fridges & freezers",
      "Water dispensers",
      "Ovens & cookers",
      "Microwaves",
      "Dishwashers",
      "Tumble dryers",
      "Air conditioners (split & window)",
      "Cold rooms & chillers",
    ],

    keywords: [
      "appliance repair Westlands",
      "washing machine repair Westlands near me",
      "fridge repair Westlands",
      "HVAC services Westlands",
      "electrician in Westlands Nairobi",
      "plumber in Westlands",
      "facility management Westlands",
      "AC repair Westlands Nairobi",
    ],

    faq: [
      {
        q: "Do you offer same-day appliance repairs in Westlands?",
        a: "Yes. For most calls received before midday, we can dispatch a technician to Westlands or Parklands on the same day for diagnosis and repair.",
      },
      {
        q: "Which buildings and apartments in Westlands do you cover?",
        a: "We serve all apartments, offices and commercial buildings across Westlands and Parklands, including areas around Sarit Centre, Westgate, General Mathenge, Raphta Road and Waiyaki Way.",
      },
      {
        q: "Can you support both my apartment and my office in Westlands?",
        a: "Yes. Many clients use us for home appliances as well as office HVAC, electrical, plumbing and routine facility maintenance within the Westlands area.",
      },
    ],
  },

  // 2. KILIMANI
  {
    slug: "kilimani",
    name: "Kilimani & Yaya Centre Area",
    city: "Nairobi",
    heroImage: "/assets/images/services/appliance-services.jpg",
    heroSubtitle:
      "Professional appliance repair, AC services and facility management for apartments, Airbnbs and offices in Kilimani.",

    intro:
      "Kilimani is a high-demand residential and commercial hub with modern apartments, Airbnbs and mixed-use buildings that need fast, reliable technical support.",
    overview:
      "We provide same-day repair for washing machines, fridges, cookers and ACs across Kilimani, plus ongoing maintenance for offices, clinics and hospitality properties.",

    neighbourhoods: [
      "Kilimani Estate",
      "Yaya Centre area",
      "Hurlingham",
      "Wood Avenue",
      "Lenana Road apartments",
      "Denis Pritt Road",
    ],
    areas: [
      "Yaya Centre",
      "Prestige Plaza area",
      "Argwings Kodhek Road",
      "Riara Road",
      "Rose Avenue",
      "Kindaruma Road",
      "Junction Mall catchment",
    ],
    roads: [
      "Argwings Kodhek Road",
      "Ngong Road (Kilimani stretch)",
      "Lenana Road",
      "Denis Pritt Road",
      "Kirichwa Road",
      "Riara Road",
    ],
    landmarks: [
      "Yaya Centre",
      "Prestige Plaza",
      "Junction Mall (nearby)",
      "Adams Arcade",
      "Hurlingham shopping centre",
    ],

    services: [
      "Washing machine repair in Kilimani",
      "Fridge, freezer and cold-room repair",
      "Cooker, oven and microwave repair",
      "Air conditioner installation & servicing",
      "Electrical troubleshooting and repairs",
      "Plumbing leak repair and bathroom fixes",
      "CCTV, Wi-Fi and low-voltage cabling",
      "Apartment and Airbnb cleaning services",
      "Fumigation and pest control",
      "Facility management for blocks & offices",
    ],
    serviceHighlights: [
      "Same-day appliance repair for Kilimani apartments and Airbnbs.",
      "Full technical support for clinics, salons and small offices.",
      "Flexible maintenance contracts for landlords and property managers.",
    ],
    clientTypes: [
      "Apartment residents & Airbnb hosts",
      "Property managers & landlords",
      "Clinics, labs & wellness centres",
      "Restaurants, cafés & coffee shops",
      "Schools, churches and NGOs",
    ],

    appliances: [
      "Front-load and top-load washing machines",
      "Washer-dryer combos",
      "Fridges, freezers & wine coolers",
      "Cookers, ovens & microwaves",
      "Dishwashers",
      "Tumble dryers",
      "Split & window AC units",
      "Water heaters and instant showers",
    ],

    keywords: [
      "appliance repair in Kilimani",
      "washing machine repair Kilimani near me",
      "fridge repair Kilimani Nairobi",
      "AC installation Kilimani",
      "electrician Kilimani Nairobi",
      "plumber Kilimani",
      "facility management Kilimani",
      "Airbnb appliance repair Kilimani",
    ],

    faq: [
      {
        q: "How fast can you attend to a breakdown in Kilimani?",
        a: "Kilimani is one of our core estates. In most cases, we can schedule same-day visits and respond within a few hours, depending on traffic and workload.",
      },
      {
        q: "Do you repair appliances inside Airbnbs and serviced apartments?",
        a: "Yes. We regularly support Airbnb hosts and serviced apartments in Kilimani with urgent repairs for washing machines, fridges, cookers and AC units.",
      },
      {
        q: "Can you provide ongoing maintenance for my apartment block?",
        a: "We offer tailored facility management plans covering common-area lighting, pumps, generators, CCTV, cleaning and routine appliance checks for multi-unit buildings.",
      },
    ],
  },

  // 3. LAVINGTON
  {
    slug: "lavington",
    name: "Lavington & Kileleshwa",
    city: "Nairobi",
    heroImage: "/assets/images/services/hvac-services.jpg",
    heroSubtitle:
      "High-end appliance repair, AC maintenance and home services for Lavington and Kileleshwa residents.",

    intro:
      "Lavington and Kileleshwa are premium residential neighbourhoods with townhouses, gated estates and modern apartments that require careful handling of appliances and systems.",
    overview:
      "Our team offers discreet, professional service for homes, embassies and diplomatic residences, with genuine parts and manufacturer-level care.",

    neighbourhoods: [
      "Lavington Green area",
      "James Gichuru Road estates",
      "Gitanga Road apartments",
      "Kileleshwa",
      "Valley Arcade environs",
    ],
    areas: [
      "Lavington Mall area",
      "Valley Arcade",
      "Gitanga Road corridors",
      "Riara / Makindi area (nearby)",
    ],
    roads: [
      "James Gichuru Road",
      "Gitanga Road",
      "Othaya Road",
      "Kabarnet Road",
      "Kandara Road",
    ],
    landmarks: [
      "Lavington Mall",
      "Valley Arcade Shopping Centre",
      "Lavington Green",
      "Braeburn Schools cluster",
    ],

    services: [
      "Built-in kitchen appliance repair",
      "Washing machine & dryer repair",
      "Fridge, freezer and wine cooler repair",
      "AC servicing and filter cleaning",
      "Electrical panel and wiring checks",
      "Water heater & pressure pump repair",
      "Plumbing maintenance and leak fixing",
      "Swimming pool pump & filtration repair",
      "Home cleaning, deep cleaning & move-in cleans",
    ],
    serviceHighlights: [
      "Careful, tidy work suitable for high-end homes and embassies.",
      "Appointment-based visits with clear communication and timing.",
      "Trusted long-term relationships with landlords and estate managers.",
    ],
    clientTypes: [
      "Townhouses & gated communities",
      "Embassies & diplomatic residences",
      "Private villas & family homes",
      "Premium apartment blocks",
    ],

    appliances: [
      "Integrated ovens & cookers",
      "Built-in dishwashers",
      "Washer-dryer towers",
      "Side-by-side & French-door fridges",
      "Wine coolers",
      "Pool pumps and filters",
      "Split AC units",
      "Pressure pumps & water heaters",
    ],

    keywords: [
      "appliance repair Lavington",
      "washing machine repair Lavington near me",
      "fridge repair Lavington",
      "AC servicing Lavington",
      "dishwasher repair Lavington",
      "pool pump repair Lavington",
      "electrician Lavington",
    ],

    faq: [
      {
        q: "Do you work with embassy and diplomatic residences in Lavington?",
        a: "Yes. We have experience working with diplomatic households and follow strict confidentiality and security protocols when on site.",
      },
      {
        q: "Can you schedule maintenance when we are away from home?",
        a: "We can coordinate with your house manager, caretaker or estate office to carry out work while you are away, as long as proper access is arranged in advance.",
      },
      {
        q: "Do you support preventive maintenance for Lavington homes?",
        a: "Yes. We offer preventive checks for washing machines, fridges, AC units and electrical systems to reduce the risk of emergency breakdowns.",
      },
    ],
  },

  // 4. KAREN
  {
    slug: "karen",
    name: "Karen & Lang’ata",
    city: "Nairobi",
    heroImage: "/assets/images/services/pool-servicing.jpg",
    heroSubtitle:
      "Comprehensive home maintenance, appliance repair and facility support for Karen and Lang’ata residents.",

    intro:
      "Karen and Lang’ata feature spacious homes, gated communities and lifestyle properties that depend on dependable power, water and comfort systems.",
    overview:
      "We support family homes, farms, lodges and institutions across Karen, Lang’ata and Hardy with appliances, HVAC, plumbing and outdoor maintenance.",

    neighbourhoods: [
      "Karen Plains",
      "Hardy",
      "Miotoni",
      "Bogani",
      "Lang’ata Estates",
    ],
    areas: [
      "Karen Shopping Centre",
      "The Hub Karen environs",
      "Bomas of Kenya area",
      "Galleria Mall area",
    ],
    roads: [
      "Ngong Road (Karen stretch)",
      "Lang’ata Road",
      "Karen Road",
      "Bogani Road",
      "Miotoni Road",
    ],
    landmarks: [
      "The Hub Karen",
      "Galleria Mall",
      "Bomas of Kenya",
      "Karen Country Club",
      "Hillcrest & Banda schools",
    ],

    services: [
      "Kitchen and laundry appliance repair",
      "Washing machine and dryer servicing",
      "Fridge, freezer and cold room repair",
      "AC installation and maintenance",
      "Solar water heater support",
      "Borehole pump and pressure system repair",
      "Plumbing, drainage and septic solutions",
      "Pool cleaning and equipment repair",
      "Landscaping and grounds maintenance",
    ],
    serviceHighlights: [
      "Full-property maintenance support for Karen homes and estates.",
      "Outdoor systems expertise – pools, pumps and borehole equipment.",
      "Ideal for busy families, estates and institutions in Karen & Lang’ata.",
    ],
    clientTypes: [
      "Private homes & gated communities",
      "Schools and training centres",
      "Lodges, hotels & retreats",
      "Churches, NGOs and institutions",
    ],

    appliances: [
      "Large-capacity washing machines",
      "Tumble dryers",
      "Chest & upright freezers",
      "Side-by-side fridges",
      "Pool pumps & filters",
      "Borehole pumps",
      "Solar water heaters",
      "Diesel and petrol generators",
    ],

    keywords: [
      "appliance repair Karen",
      "washing machine repair Karen near me",
      "fridge repair Karen Nairobi",
      "pool cleaning services Karen",
      "borehole pump repair Karen",
      "AC installation Karen",
      "home maintenance Karen",
    ],

    faq: [
      {
        q: "Do you cover outlying areas like Hardy and Dagoretti Road?",
        a: "Yes. We regularly serve Hardy, Karen Plains, Dagoretti Road and nearby areas, depending on access and scheduling.",
      },
      {
        q: "Can you manage both indoor and outdoor systems?",
        a: "We handle appliances, AC, electrical and plumbing indoors, plus outdoor systems like pools, irrigation pumps and lighting for Karen properties.",
      },
      {
        q: "Do you offer maintenance contracts for Karen estates?",
        a: "Yes. We can design a custom maintenance schedule for estates, schools or lodges, with agreed call-out times and response SLAs.",
      },
    ],
  },

  // 5. SOUTH B
  {
    slug: "south-b",
    name: "South B & Bellevue",
    city: "Nairobi",
    heroImage: "/assets/images/services/laundry.jpg",
    heroSubtitle:
      "Affordable, fast appliance and home repair services for South B apartments and estates.",

    intro:
      "South B is packed with apartments, hostels and family homes that rely on dependable washing machines, fridges and cookers.",
    overview:
      "Our technicians provide pocket-friendly, same-day repair services for South B residents, students and small businesses.",

    neighbourhoods: [
      "South B Estate",
      "Golden Gate",
      "Bellevue area",
      "Hazina Estate",
    ],
    areas: [
      "Bellevue South C junction area",
      "Mombasa Road service lanes",
      "Kapiti estate environs",
    ],
    roads: [
      "Mombasa Road (Bellevue section)",
      "Muhoho Avenue",
      "South B access roads",
    ],
    landmarks: [
      "Capital Centre Mall",
      "Nextgen Mall (nearby)",
      "Bellevue cinema area",
    ],

    services: [
      "Washing machine repair in South B",
      "Fridge and freezer repair",
      "Cooker, oven and microwave repair",
      "Electrical fault finding & socket repair",
      "Simple plumbing and leak fixing",
      "Small office appliance support",
    ],
    serviceHighlights: [
      "Same-day appliance repair for South B residents.",
      "Budget-friendly pricing with genuine spare parts.",
      "Ideal for students, families and small businesses.",
    ],
    clientTypes: [
      "Families and apartment residents",
      "Students and hostels",
      "Small offices & shops",
      "Airbnb and short-stay units",
    ],

    appliances: [
      "Standard washing machines",
      "Fridges & freezers",
      "Microwaves",
      "Cookers & ovens",
      "Water dispensers",
    ],

    keywords: [
      "washing machine repair South B",
      "appliance repair South B near me",
      "fridge repair South B",
      "electrician South B",
      "plumber South B Nairobi",
    ],

    faq: [
      {
        q: "Do you charge inspection fees in South B?",
        a: "We charge a small diagnostic fee that is waived or discounted when you proceed with the recommended repair.",
      },
      {
        q: "Can you visit hostels and bedsitters?",
        a: "Yes. We regularly repair washing machines and fridges in hostels, bedsitters and small apartments around South B.",
      },
      {
        q: "Which appliances do you not repair?",
        a: "We do not currently handle mobile phones or computers, but we focus on home and commercial appliances like washers, fridges, cookers and ACs.",
      },
    ],
  },

  // 6. SOUTH C
  {
    slug: "south-c",
    name: "South C & Nairobi West",
    city: "Nairobi",
    heroImage: "/assets/images/services/moving-services.jpg",
    heroSubtitle:
      "Reliable appliance, electrical and home services for South C and Nairobi West residents.",

    intro:
      "South C and Nairobi West combine long-established estates with busy new apartments and student housing that need quick technical support.",
    overview:
      "We serve homes, hostels, small hotels and offices across South C and Nairobi West with appliance repair, AC services and facility maintenance.",

    neighbourhoods: [
      "South C Estate",
      "Nairobi West",
      "Mugoya",
      "Kiang’ombe area",
    ],
    areas: [
      "South C shopping centre",
      "Nairobi West shopping centre",
      "Nyayo Stadium area",
    ],
    roads: [
      "Mombasa Road (South C access)",
      "Lang’ata Road (Nyayo section)",
      "Kenya Re / Bellevue link roads",
    ],
    landmarks: [
      "Nyayo Stadium",
      "South C Mosque",
      "Nairobi West Hospital",
    ],

    services: [
      "Washing machine and dryer repair",
      "Fridge and freezer repair",
      "Cooker and oven repair services",
      "AC installation for homes and offices",
      "Electrical repairs and rewiring",
      "Plumbing leaks and drainage issues",
      "Cleaning and post-move cleaning",
    ],
    serviceHighlights: [
      "Fast response for breakdowns in South C and Nairobi West.",
      "Day and evening appointments depending on availability.",
      "Good fit for hostels, student housing and family homes.",
    ],
    clientTypes: [
      "Estates & apartments",
      "Hostels & student housing",
      "Small hotels and lodges",
      "Clinics and private hospitals",
    ],

    appliances: [
      "Washing machines",
      "Fridges & freezers",
      "Ovens & cookers",
      "Microwaves",
      "Water heaters",
      "Split AC units",
    ],

    keywords: [
      "appliance repair South C",
      "washing machine repair South C near me",
      "fridge repair South C",
      "electrician Nairobi West",
      "AC installation South C",
    ],

    faq: [
      {
        q: "Do you work on weekends in South C and Nairobi West?",
        a: "Yes. Weekend slots are available on request, especially for urgent repairs and clients who are not available during weekdays.",
      },
      {
        q: "Can you handle block-wide electrical issues?",
        a: "For shared building systems we coordinate with the caretaker or management to ensure safety and proper authorization before work begins.",
      },
      {
        q: "Do you give receipts and reports for landlords?",
        a: "Yes. We can provide detailed invoices and simple service reports for landlords, agents or management companies.",
      },
    ],
  },

  // 7. PARKLANDS (already partly covered with Westlands, but separate entry)
  {
    slug: "parklands",
    name: "Parklands & Highridge",
    city: "Nairobi",
    heroImage: "/assets/images/services/security.jpg",
    heroSubtitle:
      "Technical support for homes, hospitals, schools and businesses in Parklands and Highridge.",

    intro:
      "Parklands is a high-density mixed neighbourhood with apartments, hospitals, schools and businesses that need reliable appliance and facility care.",
    overview:
      "We provide appliance repair, AC maintenance, electrical and plumbing services to homes and institutions across Parklands and Highridge.",

    neighbourhoods: [
      "1st to 5th Parklands",
      "Highridge",
      "Aga Khan environs",
      "MP Shah environs",
    ],
    areas: [
      "Highridge shopping centre",
      "Diamond Plaza area",
      "Limuru Road junctions",
    ],
    roads: [
      "Limuru Road",
      "Waiyaki Way (near Museum Hill)",
      "Mwanzi Road",
    ],
    landmarks: [
      "Aga Khan Hospital",
      "MP Shah Hospital",
      "Diamond Plaza",
      "Parklands Sports Club",
    ],

    services: [
      "Domestic appliance repair for Parklands flats",
      "Hospital & clinic laundry appliance support",
      "AC installation & maintenance",
      "Kitchen equipment repair for restaurants",
      "Electrical and plumbing call-outs",
    ],
    serviceHighlights: [
      "Experience with hospital, clinic and lab environments.",
      "Strong focus on reliability and uptime for businesses.",
      "Support for multi-unit residential buildings.",
    ],
    clientTypes: [
      "Hospitals & clinics",
      "Schools & colleges",
      "Apartments & flats",
      "Restaurants & food courts",
    ],

    appliances: [
      "Hospital laundry machines",
      "Commercial fridges & freezers",
      "Ice machines",
      "Cookers & ovens",
      "Standard home appliances",
    ],

    keywords: [
      "appliance repair Parklands",
      "laundry machine repair Parklands near me",
      "fridge repair Parklands Nairobi",
      "hospital laundry service Parklands",
    ],

    faq: [
      {
        q: "Do you support hospital and clinic environments?",
        a: "Yes. We have experience working in medical environments and follow strict safety and infection-control guidelines while on site.",
      },
      {
        q: "Can you maintain both home and business equipment?",
        a: "Many Parklands clients use us for both residential appliances and business or institutional equipment within the same area.",
      },
      {
        q: "Do you handle emergency after-hours calls?",
        a: "We can arrange after-hours support for critical equipment on prior agreement, especially for hospitals and essential services.",
      },
    ],
  },

  // 8. CBD & UPPER HILL
  {
    slug: "cbd-upper-hill",
    name: "Nairobi CBD & Upper Hill",
    city: "Nairobi",
    heroImage: "/assets/images/services/core-services-bg.jpg",
    heroSubtitle:
      "Corporate-level facility management, AC and appliance support for offices, banks and hotels in CBD and Upper Hill.",

    intro:
      "Nairobi CBD and Upper Hill concentrate offices, banks, hotels and institutions that require professional, responsive facility services.",
    overview:
      "We support building managers, office tenants and hospitality operators with HVAC, electrical, plumbing and appliance maintenance.",

    neighbourhoods: [
      "Nairobi CBD",
      "Upper Hill",
      "Community area",
      "Kenyatta Avenue & Moi Avenue corridors",
    ],
    areas: [
      "Harambee Avenue",
      "Haile Selassie avenues",
      "Kenyatta National Hospital area",
      "Milimani law courts environs",
    ],
    roads: [
      "Harambee Avenue",
      "Kenyatta Avenue",
      "Uhuru Highway",
      "Ngong Road (start)",
      "Ralph Bunche Road",
    ],
    landmarks: [
      "Kenyatta International Convention Centre (KICC)",
      "Times Tower",
      "Kenyatta National Hospital",
      "Britam Towers (Upper Hill)",
      "Government ministries buildings",
    ],

    services: [
      "VRF / VRV and split AC system maintenance",
      "Server-room and IT cooling support",
      "Office kitchen appliance repair",
      "Commercial laundry support for hotels",
      "Electrical panel, backup and lighting maintenance",
      "Plumbing for offices, washrooms and staff facilities",
      "Full facility management support for buildings",
    ],
    serviceHighlights: [
      "Ideal for property managers and corporate tenants.",
      "Clear reporting, job cards and invoicing for audit trails.",
      "Experience with sensitive office and banking environments.",
    ],
    clientTypes: [
      "Corporate offices and headquarters",
      "Banks and financial institutions",
      "Hotels, lodges & serviced apartments",
      "Government and NGO offices",
    ],

    appliances: [
      "Commercial washers & dryers",
      "Ice machines",
      "Under-counter fridges",
      "Server-room AC units",
      "Office kitchen appliances (microwaves, fridges, kettles)",
    ],

    keywords: [
      "facility management Nairobi CBD",
      "AC maintenance Upper Hill",
      "office appliance repair Nairobi",
      "VRF AC service Nairobi",
    ],

    faq: [
      {
        q: "Can you work under building management and service-level agreements?",
        a: "Yes. We regularly operate under SLAs with building managers and corporate tenants, including scheduled preventive maintenance and emergency call-outs.",
      },
      {
        q: "Do you provide documentation for compliance and audits?",
        a: "We provide quotes, job cards, invoices and simple reports as needed so you can document all work carried out on site.",
      },
      {
        q: "Are your technicians comfortable in secure environments?",
        a: "Yes. Our technicians are trained to follow access controls and security procedures required by banks, government agencies and international organisations.",
      },
    ],
  },

  // 9. INDUSTRIAL AREA & MOMBASA ROAD
  {
    slug: "industrial-area-mombasa-road",
    name: "Industrial Area & Mombasa Road",
    city: "Nairobi",
    heroImage: "/assets/images/services/exhauster-services.jpg",
    heroSubtitle:
      "Heavy-duty appliance, cold-room, HVAC and facility maintenance for factories, warehouses and workshops.",

    intro:
      "Industrial Area and the wider Mombasa Road corridor host factories, warehouses, logistics hubs and workshops that depend on reliable machinery and utilities.",
    overview:
      "We support industrial clients with laundry plants, cold rooms, AC systems, electrical distribution and facility upkeep.",

    neighbourhoods: [
      "Industrial Area",
      "Sameer Park environs",
      "ICD & Embakasi industrial belt",
      "Athi River (by arrangement)",
    ],
    areas: [
      "Enterprise Road corridor",
      "Lunga Lunga Road",
      "Mombasa Road warehouses",
      "Jomo Kenyatta Airport industrial zone",
    ],
    roads: [
      "Enterprise Road",
      "Lunga Lunga Road",
      "Mombasa Road",
      "Airport North Road",
    ],
    landmarks: [
      "Sameer Business Park",
      "ICD depot",
      "JKIA cargo area",
    ],

    services: [
      "Industrial laundry machine repair",
      "Commercial cold room and freezer room repair",
      "Industrial cooker and oven maintenance",
      "Large-scale AC and ventilation systems",
      "Three-phase electrical troubleshooting",
      "Pump, compressor and motor repair",
      "Facility cleaning and yard maintenance",
    ],
    serviceHighlights: [
      "Capability to handle heavy-duty industrial equipment.",
      "On-site troubleshooting to minimise production downtime.",
      "Long-term maintenance partnerships for plants and warehouses.",
    ],
    clientTypes: [
      "Factories and manufacturers",
      "Food processing plants",
      "Hotels and hospitals with central laundries",
      "Logistics hubs and warehouses",
    ],

    appliances: [
      "Industrial washers & dryers",
      "Flatwork ironers",
      "Cold rooms & blast freezers",
      "Industrial ovens & ranges",
      "Compressors & pumps",
    ],

    keywords: [
      "industrial laundry repair Nairobi",
      "cold room repair Industrial Area",
      "factory maintenance Mombasa Road",
      "three phase electrician Nairobi",
    ],

    faq: [
      {
        q: "Do you offer maintenance contracts for factories?",
        a: "Yes. We strongly recommend scheduled preventive maintenance for industrial laundry, cold rooms and HVAC systems to reduce unplanned downtime.",
      },
      {
        q: "Can you support equipment from different brands?",
        a: "We work with most common industrial brands and can advise on sourcing of compatible spare parts when OEM parts are unavailable.",
      },
      {
        q: "How do you handle safety when working in plants?",
        a: "Our technicians follow lock-out and tag-out procedures and coordinate with your safety officer or engineer before working on critical equipment.",
      },
    ],
  },

  // 10. THIKA ROAD & KASARANI
  {
    slug: "thika-road-kasarani",
    name: "Thika Road, Kasarani & Roysambu",
    city: "Nairobi",
    heroImage: "/assets/images/services/laundry-service.jpg",
    heroSubtitle:
      "Student-friendly and family-friendly appliance repair and facility services along Thika Road.",

    intro:
      "The Thika Road corridor is packed with student hostels, apartments and malls that need quick, affordable appliance support.",
    overview:
      "We serve Kasarani, Roysambu, Garden Estate and neighbouring areas with washing machine, fridge and general home services.",

    neighbourhoods: [
      "Roysambu",
      "Kasarani",
      "Clay City",
      "Garden Estate",
      "Zimmerman (by arrangement)",
    ],
    areas: [
      "TRM area",
      "Safari Park Hotel environs",
      "USIU and its hostels",
    ],
    roads: [
      "Thika Superhighway",
      "Kasarani–Mwiki Road",
      "Northern Bypass (Garden Estate stretch)",
    ],
    landmarks: [
      "Thika Road Mall (TRM)",
      "Safari Park Hotel",
      "USIU Africa University",
    ],

    services: [
      "Washing machine repair in Kasarani & Roysambu",
      "Fridge and freezer repair",
      "Cooker and microwave repair",
      "Basic electrical and plumbing services",
      "Hostel and Airbnb appliance support",
    ],
    serviceHighlights: [
      "Affordable pricing suitable for students and young families.",
      "Convenient access via Thika Road and the Northern Bypass.",
      "Strong focus on core appliances – washers, fridges and cookers.",
    ],
    clientTypes: [
      "Student hostels and bedsitters",
      "Families in apartments and maisonettes",
      "Small businesses and shops",
    ],

    appliances: [
      "Single and twin-tub washing machines",
      "Standard fridges & freezers",
      "Microwaves",
      "Cookers & ovens",
      "Water dispensers",
    ],

    keywords: [
      "washing machine repair Kasarani near me",
      "appliance repair Thika Road",
      "fridge repair Roysambu",
      "hostel washing machine repair Nairobi",
    ],

    faq: [
      {
        q: "Do you repair portable twin-tub washing machines?",
        a: "Yes. We repair most common models of twin-tub and fully automatic washing machines used in hostels and apartments along Thika Road.",
      },
      {
        q: "Can we bring small appliances to your workshop?",
        a: "In some cases you can drop off smaller appliances by prior arrangement, but most repairs are done on site for your convenience.",
      },
      {
        q: "Do you have student-friendly rates?",
        a: "We keep our pricing competitive and transparent, and we always share a quote before proceeding with any repair.",
      },
    ],
  },

  // 11. NGONG ROAD & ADAMS
  {
    slug: "ngong-road-adams",
    name: "Ngong Road, Adams & Dagoretti Corner",
    city: "Nairobi",
    heroImage: "/assets/images/services/cleaning-services-2.jpg",
    heroSubtitle:
      "Appliance repair, AC and home services for Ngong Road estates, Adams, Kawangware and Dagoretti Corner.",

    intro:
      "Ngong Road links several busy residential and commercial pockets that rely on working appliances, AC and basic facility support.",
    overview:
      "We serve homes, shops, salons and offices from Adams Arcade through Dagoretti Corner and towards Karen.",

    neighbourhoods: [
      "Adams Arcade area",
      "Dagoretti Corner",
      "Racecourse",
      "Kawangware (selected zones)",
    ],
    areas: [
      "Ngong Road malls and showrooms",
      "Prestige Plaza area",
      "Junction Mall catchment",
    ],
    roads: [
      "Ngong Road",
      "Kabarnet Road",
      "Kabiria Road",
      "Naivasha Road",
    ],
    landmarks: [
      "Adams Arcade",
      "Prestige Plaza",
      "Junction Mall",
    ],

    services: [
      "Appliance repair for homes along Ngong Road",
      "Fridge, freezer and cooler repair for shops",
      "Washing machine repair for apartments and hostels",
      "Electrical and plumbing services",
      "AC installation for offices and salons",
      "Cleaning and move-in/move-out services",
    ],
    serviceHighlights: [
      "Good coverage of Ngong Road estates and side roads.",
      "Suitable for homes, salons, barbershops and small offices.",
      "Flexible scheduling for evenings and weekends where possible.",
    ],
    clientTypes: [
      "Families & apartment residents",
      "Students and hostels",
      "Shops, salons & barbershops",
      "Small offices and clinics",
    ],

    appliances: [
      "Washing machines",
      "Fridges & freezers",
      "Cookers & ovens",
      "Microwaves",
      "Air conditioners for shops and salons",
    ],

    keywords: [
      "appliance repair Ngong Road",
      "washing machine repair Adams Arcade",
      "fridge repair Dagoretti Corner",
      "AC installation Ngong Road",
    ],

    faq: [
      {
        q: "Do you serve both sides of Ngong Road?",
        a: "Yes. We serve estates on both sides of Ngong Road, including Adams, Racecourse, Dagoretti Corner and nearby pockets of Kawangware by arrangement.",
      },
      {
        q: "Can you support my small salon or barbershop?",
        a: "We can maintain your AC units, small fridges, laundry machines and basic electrical systems to keep your business running smoothly.",
      },
      {
        q: "Do you offer deep cleaning services along Ngong Road?",
        a: "Yes. We provide residential and commercial deep cleaning, including end-of-tenancy cleaning and post-renovation cleaning.",
      },
    ],
  },

  // 12. KOMAROCK & EASTLANDS (INCLUDING YOUR OFFICE BASE)
  {
    slug: "komarock-eastlands",
    name: "Komarock, Eastlands & Surrounds",
    city: "Nairobi",
    heroImage: "/assets/images/services/core-services-img-1.jpg",
    heroSubtitle:
      "Home appliance repair and essential facility services for Komarock, Donholm and wider Eastlands.",

    intro:
      "Komarock and Eastlands host thousands of family homes and apartments that rely on working washers, fridges and cookers.",
    overview:
      "Being based in this side of Nairobi, we are well positioned to offer fast response times and reliable repairs across Komarock and Eastlands estates.",

    neighbourhoods: [
      "Komarock Phases 1–3",
      "Donholm",
      "Umoja",
      "Tena",
      "Savanna",
      "Greenfield",
    ],
    areas: [
      "Kangundo Road estates",
      "Outer Ring Road apartments",
      "Mowlem & Kayole (selected)",
    ],
    roads: [
      "Kangundo Road",
      "Outer Ring Road",
      "Spine Road",
    ],
    landmarks: [
      "Komarock Shopping Centre",
      "Greenspan Mall",
      "Eastgate Mall",
    ],

    services: [
      "Washing machine repair in Komarock and Eastlands",
      "Fridge and freezer repair",
      "Cooker, oven and microwave repair",
      "Electrical repairs and rewiring",
      "Basic plumbing and drainage repairs",
      "Home and stairwell cleaning services",
    ],
    serviceHighlights: [
      "Fast response around Komarock due to proximity to our base.",
      "Affordable pricing for families and small landlords.",
      "Good coverage of multiple Eastlands estates.",
    ],
    clientTypes: [
      "Families in flats and maisonettes",
      "Caretakers and estate managers",
      "Small shops and businesses",
      "Hostels and student housing",
    ],

    appliances: [
      "Twin-tub and automatic washing machines",
      "Standard fridges & freezers",
      "Cookers & ovens",
      "Microwaves",
      "Water heaters and instant showers",
    ],

    keywords: [
      "washing machine repair Komarock near me",
      "appliance repair Eastlands Nairobi",
      "fridge repair Donholm",
      "electrician Komarock",
    ],

    faq: [
      {
        q: "Are you based near Komarock?",
        a: "Yes. Our main base is on this side of Nairobi, which allows us to reach Komarock and surrounding estates quickly once a job is booked.",
      },
      {
        q: "Do you handle entire blocks or only individual homes?",
        a: "We support both individual households and estate-wide work arranged through caretakers, landlords or management committees.",
      },
      {
        q: "Can you schedule evening visits for working clients?",
        a: "Subject to availability, we can offer late-day or weekend slots so you don’t have to miss work to get your appliances repaired.",
      },
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

// Used by the slug page to find a single location
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
