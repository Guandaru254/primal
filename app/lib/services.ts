// ============================================================================
// SERVICES DATABASE — FULLY EXPANDED + SEO-OPTIMIZED
// ============================================================================

export type Service = {
  slug: string;
  name: string;
  heroImage: string;
  shortDescription: string;
  bullets: string[];
  offer: string[];
  faq: { q: string; a: string }[];
  keywords: string[];

  /** NEW: Appliances handled under this service */
  appliances: string[];
};

export const services: Service[] = [
  // ============================================================================
  // 1) HVAC / AIR CONDITIONING
  // ============================================================================
  {
    slug: "hvac-air-conditioning-repair-installation-nairobi",
    name: "HVAC & Air Conditioning Repair & Installation in Nairobi",
    heroImage: "/assets/images/services/hvac-main.jpg",
    shortDescription:
      "Professional HVAC installation, repair and preventive maintenance for homes, offices, apartments and commercial buildings across Nairobi.",

    appliances: [
      "Split AC units",
      "Window AC units",
      "Portable AC units",
      "Cassette AC systems",
      "VRF / VRV AC systems",
      "Ceiling AC units",
      "Server room precision cooling",
      "Dehumidifiers & humidifiers",
      "Air ventilation fans",
    ],

    bullets: [
      "Installation for homes, offices, shops and server rooms",
      "Gas charging, leak testing and compressor replacement",
      "Repair for split, window, cassette and VRF/VRV systems",
      "Emergency AC repair for offices and commercial spaces",
      "Preventive maintenance programs for residential & commercial buildings",
    ],

    offer: [
      "Complete AC installation for residential and commercial properties.",
      "Compressor, fan motor, PCB, capacitor and thermostat replacement.",
      "Gas recharging, leak testing and sealing with advanced tools.",
      "VRF/VRV system troubleshooting for multi-storey buildings.",
      "Relocation and reinstallation of AC systems when moving houses or offices.",
      "Smart thermostat installation and energy-efficiency optimization.",
      "Full preventive maintenance to minimise breakdowns and reduce energy costs.",
    ],

    faq: [
      {
        q: "Do you offer same-day AC repair in Nairobi?",
        a: "Yes. Most Nairobi estates including Kilimani, Westlands, Kileleshwa, Lavington and CBD get same-day or next-day AC repair depending on availability.",
      },
      {
        q: "Which AC systems do you install?",
        a: "We install split units, window ACs, VRF/VRV systems, cassette units, portable units and ceiling-mounted ACs.",
      },
      {
        q: "Do you service commercial HVAC systems?",
        a: "Yes. We maintain HVAC systems in malls, office blocks, hotels, restaurants, medical facilities and industrial buildings.",
      },
      {
        q: "How often should AC be serviced?",
        a: "Every 3–4 months for homes, and every 2–3 months for offices, shops or dusty environments.",
      },
    ],

    keywords: [
      "AC repair Nairobi",
      "HVAC installation Nairobi",
      "AC technician near me",
      "VRF AC repair Kenya",
      "air conditioning service",
    ],
  },

  // ============================================================================
  // 2) FRIDGE REPAIR
  // ============================================================================
  {
    slug: "fridge-repair-nairobi",
    name: "Fridge & Freezer Repair in Nairobi",
    heroImage: "/assets/images/services/fridge.jpg",
    shortDescription:
      "Same-day fridge repair for all models — domestic, commercial and industrial cold storage units across Nairobi.",

    appliances: [
      "Single-door fridges",
      "Double-door fridges",
      "Side-by-side fridges",
      "French-door refrigerators",
      "Chest freezers",
      "Upright freezers",
      "Display chillers",
      "Cold rooms",
      "Under-counter chillers",
    ],

    bullets: [
      "Fixing fridges not cooling or over-freezing",
      "Compressor and thermostat replacement",
      "Gas refill & leak sealing",
      "Cold room troubleshooting",
      "Water leakage and noise repair",
    ],

    offer: [
      "Diagnostics for all fridge and freezer problems including cooling loss, icing, loud noise and electrical faults.",
      "Cold room repair for restaurants, bars, butchery shops and supermarkets.",
      "Thermostat, relay, overload protector and PCB board replacement.",
      "Door seal and gasket replacement to stop warm air leakage.",
      "Accurate refrigerant re-gassing using approved R600a/R134a systems.",
      "Replacement of faulty cooling fans, sensors and evaporator systems.",
      "Emergency support for commercial cold storage.",
    ],

    faq: [
      {
        q: "Do you repair all fridge brands?",
        a: "Yes — LG, Samsung, Bosch, Whirlpool, Von, Mika, Hisense, Beko, Ramtons and more.",
      },
      {
        q: "Do you offer same-day fridge repair?",
        a: "Yes. Most Nairobi estates get same-day diagnosis & repair depending on part availability.",
      },
      {
        q: "Do you work on cold rooms?",
        a: "Yes. We repair and maintain cold rooms, display chillers and commercial refrigeration systems.",
      },
    ],

    keywords: [
      "fridge repair Nairobi",
      "freezer repair",
      "cold room repair Kenya",
      "fridge technician near me",
    ],
  },

  // ============================================================================
  // 3) WASHING MACHINE REPAIR
  // ============================================================================
  {
    slug: "washing-machine-repair-nairobi",
    name: "Washing Machine Repair in Nairobi",
    heroImage: "/assets/images/services/Washing-Machine.jpg",
    shortDescription:
      "Fast, professional repair for washing machines, dryers and washer-dryer combos across Nairobi.",

    appliances: [
      "Front-load washing machines",
      "Top-load washing machines",
      "Twin-tub washers",
      "Washer-dryer combos",
      "Tumble dryers",
      "Spin dryers",
      "Commercial laundry machines",
    ],

    bullets: [
      "Repair for noisy or leaking machines",
      "Drainage and spinning issues",
      "Motor, belt & pump replacement",
      "Dryer heating faults",
      "Washer-dryer combo repair",
    ],

    offer: [
      "Diagnosis & repair for all washing machine faults including noise, vibration, leaks, error codes and spinning issues.",
      "Dryer repair for both electric and gas models.",
      "Washer-dryer combo repair for heating, drying and control panel issues.",
      "Replacement of pumps, motors, bearings, belts, heaters and PCB boards.",
      "Proper installation with levelling & drain management.",
      "Commercial laundry support for hotels, laundromats & hostels.",
    ],

    faq: [
      {
        q: "Do you handle all washing machine brands?",
        a: "Yes — LG, Samsung, Bosch, Whirlpool, Hisense, Beko, Mika, Ramtons and more.",
      },
      {
        q: "Do you offer emergency repair?",
        a: "Yes, depending on your location and availability.",
      },
    ],

    keywords: [
      "washing machine repair Nairobi",
      "dryer repair",
      "washer technician near me",
    ],
  },

  // ============================================================================
  // 4) ELECTRICAL SERVICES
  // ============================================================================
  {
    slug: "electrical-services-nairobi",
    name: "Electrical Installation & Repair Services in Nairobi",
    heroImage: "/assets/images/services/electrical-services.jpg",
    shortDescription:
      "Certified electrical repair, wiring, fault-finding and power backup installation for homes, offices and commercial buildings.",

    appliances: [
      "Cookers & ovens",
      "Water heaters",
      "Microwaves",
      "Switchgear & breakers",
      "Sockets & lighting circuits",
      "Surge protectors",
      "Stabilizers & inverters",
    ],

    bullets: [
      "Wiring & rewiring",
      "Socket and lighting installation",
      "DB board upgrades",
      "Fault-finding & tripping repair",
      "Emergency electrical response",
    ],

    offer: [
      "Full electrical installation and rewiring for homes, offices and shops.",
      "Fault-finding for tripping circuits, burning smells, dimming lights and shocks.",
      "Generator, inverter, UPS and solar backup system integration.",
      "Lighting installation including LED, garden lights and security floodlights.",
      "Installation of stabilizers, surge protectors and automatic changeover switches.",
      "Electrical safety audits for landlords, property managers and commercial complexes.",
    ],

    faq: [
      {
        q: "Are your electricians licensed?",
        a: "Yes. All technicians are trained, certified and experienced.",
      },
      {
        q: "Do you offer emergency electrical repair?",
        a: "Yes for Nairobi estates, depending on availability.",
      },
    ],

    keywords: ["electrician Nairobi", "electrical repair", "wiring services"],
  },

  // ============================================================================
  // 5) PLUMBING SERVICES
  // ============================================================================
  {
    slug: "plumbing-services-nairobi",
    name: "Plumbing Installation & Repair in Nairobi",
    heroImage: "/assets/images/services/plumbing.jpg",
    shortDescription:
      "Professional plumbing repair for leaks, blockages, installations and water heater issues across Nairobi.",

    appliances: [
      "Instant water heaters",
      "Storage water heaters",
      "Booster pumps",
      "Water tanks",
      "Toilets & faucets",
      "Showers & mixers",
    ],

    bullets: [
      "Leak detection & pipe repair",
      "Blocked drains & toilets",
      "Bathroom installation",
      "Tank & pump setup",
      "Water heater installation & repair",
    ],

    offer: [
      "Emergency plumbing repair for burst pipes, blocked toilets and flooding.",
      "Bathroom and kitchen installation for renovations and new builds.",
      "Drain unblocking for kitchens, toilets and sewer lines.",
      "Pump, tank and booster installation with pressure balancing.",
      "Instant and storage water heater repair, installation and safety checks.",
      "Plumbing maintenance for apartments, malls, estates and commercial facilities.",
    ],

    faq: [
      {
        q: "Do you offer emergency plumbing?",
        a: "Yes — especially for severe leaks, flooding or blocked sewer lines.",
      },
      {
        q: "Do you install new bathrooms?",
        a: "Yes. We install toilets, sinks, mixers, showers and all plumbing fixtures.",
      },
    ],

    keywords: ["plumber Nairobi", "water heater repair", "drain unblocking"],
  },

  // ============================================================================
  // 6) LPG GAS INSTALLATION
  // ============================================================================
  {
    slug: "lpg-gas-installation-piping-nairobi",
    name: "LPG Gas Installation & Gas Piping in Nairobi",
    heroImage: "/assets/images/services/lpg-installation.jpg",
    shortDescription:
      "Safe LPG piping, gas line installation and leak testing for homes, apartments, hotels and restaurants.",

    appliances: [
      "Cookers",
      "Ovens",
      "Gas hobs",
      "Commercial kitchen burners",
      "Cylinder manifolds",
    ],

    bullets: [
      "Central LPG system installation",
      "Gas piping for homes & apartments",
      "Leak testing & inspection",
      "Regulator & hose upgrades",
      "Emergency gas leak response",
    ],

    offer: [
      "Gas piping for residential and commercial kitchens.",
      "Safe relocation of gas cylinders to outdoor enclosures.",
      "Leak testing, regulator replacement and compliance checks.",
      "Design of multi-cylinder manifold systems.",
      "Emergency shutdown and repair for gas leaks.",
    ],

    faq: [
      {
        q: "Do you install LPG systems for restaurants?",
        a: "Yes — including multi-cylinder commercial setups.",
      },
      {
        q: "Do you test for gas leaks?",
        a: "Yes. We use professional leak detection tools.",
      },
    ],

    keywords: ["gas installation Nairobi", "gas piping", "LPG technician"],
  },

  // ============================================================================
  // 7) SMALL APPLIANCE REPAIR
  // ============================================================================
  {
    slug: "small-appliance-repair-nairobi",
    name: "Small Appliance Repair in Nairobi",
    heroImage: "/assets/images/services/small-appliances.jpg",
    shortDescription:
      "Professional repair for blenders, kettles, water dispensers, air fryers and other small domestic appliances.",

    appliances: [
      "Blenders",
      "Juicers",
      "Food processors",
      "Coffee makers",
      "Espresso machines",
      "Kettles",
      "Water dispensers",
      "Air fryers",
      "Toasters",
      "Electric grills",
    ],

    bullets: [
      "Kitchen appliance repair",
      "Coffee machine servicing",
      "Water dispenser repair",
      "Heating element faults",
      "Power failure fix",
    ],

    offer: [
      "Repair for blenders, grinders, air fryers, kettles and food processors.",
      "Coffee machine and grinder servicing for homes and small cafés.",
      "Water dispenser repair including heating/cooling faults.",
      "Replacement of heating elements, thermostats and switches.",
      "Countertop oven and grill troubleshooting.",
    ],

    faq: [
      {
        q: "Do you repair espresso machines?",
        a: "Yes — both domestic and small commercial units.",
      },
      {
        q: "Do you offer pickup?",
        a: "In selected estates, at a small additional cost.",
      },
    ],

    keywords: ["small appliance repair", "coffee machine repair", "dispenser repair"],
  },

  // ============================================================================
  // 8) KITCHEN APPLIANCE REPAIR
  // ============================================================================
  {
    slug: "kitchen-appliance-repair-nairobi",
    name: "Kitchen Appliance Repair in Nairobi",
    heroImage: "/assets/images/services/kitchen-appliances.jpg",
    shortDescription:
      "Repair for cookers, ovens, microwaves, hoods and dishwashers — domestic & commercial.",

    appliances: [
      "Cookers",
      "Electric ovens",
      "Gas ovens",
      "Microwaves",
      "Dishwashers",
      "Range hoods",
      "Built-in ovens",
      "Built-in microwaves",
    ],

    bullets: [
      "Cooker & oven repair",
      "Microwave servicing",
      "Dishwasher repair",
      "Range hood maintenance",
      "Built-in appliance support",
    ],

    offer: [
      "Ignition repair for gas cookers and hobs.",
      "Oven thermostat, coil and heating element replacement.",
      "Microwave magnetron, high-voltage fuse and capacitor repair.",
      "Dishwasher drainage, spray arm and pump repairs.",
      "Range hood motor and suction troubleshooting.",
    ],

    faq: [
      {
        q: "Do you repair built-in kitchen appliances?",
        a: "Yes. We carefully remove and reinstall them without damaging cabinetry.",
      },
      {
        q: "Do you repair dishwashers?",
        a: "Yes — for residential and light-commercial kitchens.",
      },
    ],

    keywords: [
      "cooker repair Nairobi",
      "oven repair Kenya",
      "microwave repair",
      "dishwasher technician",
    ],
  },

  // ============================================================================
  // 9) LAUNDRY APPLIANCE REPAIR
  // ============================================================================
  {
    slug: "laundry-appliance-repair-nairobi",
    name: "Laundry Appliance Repair in Nairobi",
    heroImage: "/assets/images/services/laundry.jpg",
    shortDescription:
      "Repair for dryers, steam irons, washer-dryer combos and commercial laundry machines.",

    appliances: [
      "Tumble dryers",
      "Spin dryers",
      "Steam irons",
      "Garment steamers",
      "Commercial laundry machines",
      "Washer-dryer combos",
    ],

    bullets: [
      "Dryer heating repair",
      "Commercial machine support",
      "Error code diagnosis",
      "Drum & bearing repair",
      "Laundry setup for apartments & hotels",
    ],

    offer: [
      "Dryer repair including heating, rotation and electrical issues.",
      "Steam iron and garment steamer troubleshooting.",
      "Service for hostel, Airbnb, hotel and laundromat machines.",
      "Laundry room design consulting.",
      "Washer-dryer combo electrical and mechanical repair.",
    ],

    faq: [
      {
        q: "Do you repair commercial laundry machines?",
        a: "Yes — for laundromats, hostels, hotels and institutions.",
      },
    ],

    keywords: [
      "dryer repair Nairobi",
      "commercial laundry repair",
      "laundry appliance technician",
    ],
  },

  // ============================================================================
  // 10) EMERGENCY APPLIANCE REPAIR
  // ============================================================================
  {
    slug: "emergency-appliance-repair-nairobi",
    name: "Emergency Appliance Repair Services in Nairobi",
    heroImage: "/assets/images/services/maintenance.jpg",
    shortDescription:
      "Priority same-day repair for fridges, ACs, washing machines and essential appliances across Nairobi.",

    appliances: [
      "Fridges",
      "Freezers",
      "Cold rooms",
      "Washing machines",
      "Dryers",
      "AC systems",
      "Cookers & ovens",
    ],

    bullets: [
      "Same-day emergency repair",
      "Fridge & cold room breakdown response",
      "AC system failure repair",
      "Washing machine emergency troubleshooting",
      "Commercial priority support",
    ],

    offer: [
      "Fast dispatch for appliance breakdowns that affect business or comfort.",
      "Cold room and freezer emergency response to prevent stock loss.",
      "Office AC emergency repair for server rooms, clinics and shops.",
      "Emergency washing machine and dryer repair for large families, hostels and laundromats.",
      "Temporary workarounds where possible while sourcing parts.",
    ],

    faq: [
      {
        q: "Which emergencies qualify?",
        a: "Fridge not cooling, cold room failure, AC breakdown in offices, major washing machine leaks, and unsafe electrical appliance faults.",
      },
      {
        q: "Do you charge more for emergency calls?",
        a: "A higher callout fee may apply, which we disclose before dispatch.",
      },
    ],

    keywords: [
      "emergency repair Nairobi",
      "same day appliance repair",
      "emergency fridge repair",
      "urgent AC repair",
    ],
  },
];

// ============================================================================
// HELPER
// ============================================================================
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
