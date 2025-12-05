// ============================================================================
// SERVICES DATABASE — EXPANDED, BALANCED & SEO-OPTIMIZED
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
      "Comprehensive HVAC installation, repair and preventive maintenance for homes, apartments, offices and commercial buildings across Nairobi.",

    appliances: [
      "Split AC units",
      "Window AC units",
      "Cassette AC systems",
      "VRF / VRV multi-split systems",
      "Portable AC units",
      "Ceiling & ducted AC units",
      "Server room precision cooling",
      "Ventilation fans & air handlers",
    ],

    bullets: [
      "Expert installation for residential, office and commercial AC systems",
      "Professional gas charging, leak testing and pressure balancing",
      "Repair for split, cassette, window and VRF/VRV AC systems",
      "Fast response for office AC breakdowns and server room cooling failures",
      "Indoor and outdoor unit servicing to improve cooling efficiency",
      "Thermostat, PCB, fan motor and compressor diagnostic & replacement",
      "Scheduled preventive maintenance for homes, buildings and malls",
    ],

    offer: [
      "AC installation for apartments, offices, shops and commercial spaces.",
      "Compressor, fan motor, capacitor and control board replacement.",
      "Leak detection, gas charging and sealing with professional equipment.",
      "Advanced VRF/VRV system troubleshooting for buildings.",
      "AC relocation and reinstallation during office or home moves.",
      "Thermostat upgrades including smart thermostat integration.",
      "Deep cleaning for indoor units, filters and evaporator coils.",
      "Server room cooling system repair with rapid response.",
      "Fan blade, motor and blower replacement.",
      "Preventive maintenance to reduce electricity consumption and breakdowns.",
      "Noise & vibration reduction tuning for AC units.",
      "Outdoor unit installation with anti-vibration and weather protection.",
    ],

    faq: [
      {
        q: "Do you offer same-day AC repair in Nairobi?",
        a: "Yes. Many estates such as Kilimani, Kileleshwa, Westlands and Lavington receive same-day or next-day repair depending on technician availability.",
      },
      {
        q: "Which AC systems do you install?",
        a: "Split ACs, cassette ACs, window units, portable ACs, VRF/VRV systems and ducted ceiling AC units.",
      },
      {
        q: "Do you repair commercial HVAC systems?",
        a: "Yes. We service systems in malls, office blocks, restaurants, clinics, hotels and industrial buildings.",
      },
      {
        q: "How often should AC be serviced?",
        a: "Every 3–4 months for homes, and every 2–3 months for commercial spaces or dusty environments.",
      },
      {
        q: "Do you offer annual maintenance contracts?",
        a: "Yes. We provide AMC packages for offices, apartments, server rooms and commercial buildings.",
      },
    ],

    keywords: [
      "AC repair Nairobi",
      "HVAC technician Kenya",
      "air conditioning installation Nairobi",
      "VRF AC repair",
      "AC gas refill Nairobi",
    ],
  },

  // ============================================================================
  // 2) FRIDGE & FREEZER REPAIR
  // ============================================================================
  {
    slug: "fridge-repair-nairobi",
    name: "Fridge & Freezer Repair in Nairobi",
    heroImage: "/assets/images/services/fridge.jpeg",
    shortDescription:
      "Same-day repair for fridges, freezers, cold rooms and chillers — domestic, commercial and industrial.",

    appliances: [
      "Single-door fridges",
      "Double-door fridges",
      "Side-by-side refrigerators",
      "French-door fridges",
      "Chest freezers",
      "Upright freezers",
      "Display chillers",
      "Cold rooms",
      "Bar coolers & under-counter chillers",
    ],

    bullets: [
      "Repair for fridges not cooling, over-freezing or shutting down",
      "Compressor, thermostat, and sensor replacement",
      "Gas recharge and leak sealing for R600a/R134a systems",
      "Cold room troubleshooting and commercial refrigeration repair",
      "Door gasket replacement for better cooling efficiency",
      "Fan motor, relay and defrost system repair",
      "Emergency response for commercial cold storage failures",
    ],

    offer: [
      "Fridge diagnostics for cooling, freezing and electrical issues.",
      "Cold room repair for hotels, butcheries, bars and supermarkets.",
      "Thermostat, overload protector and defrost heater replacement.",
      "Accurate refrigerant charging with approved gases.",
      "Fan motor, PCB board and evaporator repair.",
      "Ice-build-up removal and drainage flushing.",
      "Door seal and hinge repair to stop warm air leaks.",
      "Noise and vibration troubleshooting.",
      "Commercial freezer restoration with rapid response.",
      "Sensor, damper and airflow control repair.",
      "Temperature calibration for optimal performance.",
    ],

    faq: [
      {
        q: "Do you repair all fridge brands?",
        a: "Yes — including LG, Samsung, Bosch, Whirlpool, Von, Mika, Hisense, Beko, Ramtons and many more.",
      },
      {
        q: "Can you repair commercial cold rooms?",
        a: "Yes. We repair cold rooms, display chillers, island freezers and industrial cooling systems.",
      },
      {
        q: "What causes a fridge not to cool?",
        a: "Common causes include refrigerant leaks, faulty compressors, blocked airflow, dirty coils or defective thermostats.",
      },
      {
        q: "Do you offer emergency response?",
        a: "Yes — especially for commercial cold rooms and freezers storing perishables.",
      },
    ],

    keywords: [
      "fridge repair Nairobi",
      "freezer technician",
      "cold room repair Kenya",
      "fridge gas refill Nairobi",
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
      "Repair, installation and servicing of washing machines, dryers and washer-dryer combos — all brands.",

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
      "Repair for machines not spinning, draining or powering on",
      "Fixing leaks, noise, shaking and vibration problems",
      "Dryer heating issues troubleshooting",
      "Washer-dryer combo electrical and mechanical repair",
      "Error code diagnostics for all brands",
      "Pump, belt, motor and bearing replacement",
    ],

    offer: [
      "Full diagnostics for all washing machine faults.",
      "Dryer repair for heating, rotation and electrical issues.",
      "Replacement of pumps, motors, belts, bearings and heaters.",
      "Drum repair including spider arm and tub issues.",
      "PCB and control panel troubleshooting.",
      "Unblocking drainage systems and removing clogs.",
      "Balancing machines to reduce shaking and noise.",
      "Washer-dryer combo repair for heating and drying problems.",
      "Commercial laundry setup and maintenance.",
      "Installation & levelling for new machines.",
      "Seal, gasket and door mechanism repairs.",
    ],

    faq: [
      {
        q: "Why is my washing machine not spinning?",
        a: "Common causes include faulty motors, damaged belts, blocked pumps or unbalanced loads.",
      },
      {
        q: "Do you repair both front-load and top-load machines?",
        a: "Yes, our technicians handle all models and brands.",
      },
      {
        q: "Why does my dryer not heat?",
        a: "Faulty heating elements, thermostats, thermal fuses or control boards are typical reasons.",
      },
      {
        q: "Do you install washing machines?",
        a: "Yes — including drain connection, levelling and testing.",
      },
    ],

    keywords: [
      "washing machine repair Nairobi",
      "dryer technician Nairobi",
      "washer not spinning repair",
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
      "Safe, certified electrical repair, installation, wiring and fault-finding for homes, offices and commercial spaces.",

    appliances: [
      "Cookers & ovens",
      "Water heaters",
      "Microwaves",
      "Distribution boards",
      "Sockets & lighting",
      "Stabilizers & inverters",
      "Backup power systems",
    ],

    bullets: [
      "Wiring and rewiring for homes, offices and commercial buildings",
      "Socket, switch, lighting and fixture installation",
      "Electrical fault-finding and circuit troubleshooting",
      "Distribution board upgrades and load balancing",
      "Installation of stabilizers, surge protectors and changeover switches",
      "Emergency electrical repair for unsafe faults",
    ],

    offer: [
      "Complete wiring and rewiring for renovations and new builds.",
      "Fixing tripping circuits, power surges and burning smells.",
      "Lighting installation including LED, outdoor and security lights.",
      "Backup power integration — inverters, UPS and generators.",
      "Water heater installation and repair.",
      "Cooker, oven and heavy appliance wiring.",
      "Electrical safety audits for landlords and property managers.",
      "Socket, switch and fuse replacement.",
      "Earthing and grounding for safety.",
      "Distribution board balancing and upgrades.",
      "Commercial electrical maintenance for offices and retail spaces.",
    ],

    faq: [
      {
        q: "Do you offer emergency electrical repair?",
        a: "Yes — especially for burning smells, sparks, tripping circuits or power loss.",
      },
      {
        q: "Do you install backup power systems?",
        a: "Yes. We install UPS, inverters, stabilizers and generators.",
      },
      {
        q: "Can you handle full home rewiring?",
        a: "Yes — including load balancing, DB upgrades and testing.",
      },
    ],

    keywords: ["electrician Nairobi", "electrical wiring", "DB board upgrade"],
  },

  // ============================================================================
  // 5) PLUMBING SERVICES
  // ============================================================================
  {
    slug: "plumbing-services-nairobi",
    name: "Plumbing Installation & Repair in Nairobi",
    heroImage: "/assets/images/services/plumbing.jpg",
    shortDescription:
      "Professional plumbing repair for leaks, blockages, bathrooms, piping and water heating systems.",

    appliances: [
      "Instant showers",
      "Storage water heaters",
      "Booster pumps",
      "Water tanks",
      "Toilets",
      "Faucets & mixers",
    ],

    bullets: [
      "Burst pipe and leak repair",
      "Blocked drain & sewer unblocking",
      "Bathroom and kitchen plumbing installation",
      "Pump and tank installation & balancing",
      "Water heater repair and installation",
      "Emergency response for major leaks",
    ],

    offer: [
      "Leak detection and rapid pipe repair.",
      "Drain unblocking for kitchens, toilets and bathroom lines.",
      "Full bathroom installation including mixers, showers and toilets.",
      "Water heater installation and fault repair.",
      "Pump and tank installation with pressure calibration.",
      "Sewer line clearing and preventive plumbing maintenance.",
      "Tap, mixer and faucet repair or replacement.",
      "Sink and toilet unblocking.",
      "Renovation plumbing for new kitchens and bathrooms.",
      "Outdoor plumbing including tank lines and garden taps.",
    ],

    faq: [
      {
        q: "Do you offer emergency plumbing?",
        a: "Yes — especially for flooding, major leaks or blocked sewer lines.",
      },
      {
        q: "Can you install complete bathrooms?",
        a: "Yes. We install toilets, mixers, showers, sinks and drainage.",
      },
      {
        q: "Do you unblock sewer lines?",
        a: "Yes — using professional equipment.",
      },
    ],

    keywords: ["plumber Nairobi", "water heater repair", "drain unblocking"],
  },

  // ============================================================================
  // 6) LPG INSTALLATION
  // ============================================================================
  {
    slug: "lpg-gas-installation-piping-nairobi",
    name: "LPG Gas Installation & Piping in Nairobi",
    heroImage: "/assets/images/services/lpg.jpeg",
    shortDescription:
      "Safe LPG piping, gas line installation, compliance checks and leak testing for homes and commercial kitchens.",

    appliances: [
      "Cookers",
      "Ovens",
      "Gas hobs",
      "Commercial burners",
      "Cylinder manifolds",
    ],

    bullets: [
      "Residential and commercial LPG piping installation",
      "Gas leak testing and safety inspection",
      "Outdoor cylinder enclosure setup",
      "Regulator, hose and valve replacement",
      "Emergency gas leak repair",
      "Restaurant kitchen LPG system installation",
    ],

    offer: [
      "Full LPG piping for apartments, homes and commercial kitchens.",
      "Leak detection using professional digital tools.",
      "Safe relocation of cylinders to outdoor cages.",
      "Setup of multi-cylinder manifold systems for restaurants.",
      "Regulator, hose and valve upgrade for safety compliance.",
      "Emergency gas leak shutdown and repair.",
      "Gas line pressure balancing and safety certification.",
      "Installation of copper and flexible gas piping systems.",
    ],

    faq: [
      {
        q: "Do you install LPG systems for restaurants?",
        a: "Yes — including manifold design, piping and safety checks.",
      },
      {
        q: "Do you test for gas leaks?",
        a: "Yes — using electronic leak detection equipment.",
      },
      {
        q: "Can you relocate my cylinder outside?",
        a: "Yes. We create secure outdoor compartments and reroute piping safely.",
      },
    ],

    keywords: ["LPG technician Nairobi", "gas piping", "LPG installation service"],
  },

  // ============================================================================
  // 7) SMALL APPLIANCE REPAIR
  // ============================================================================
  {
    slug: "small-appliance-repair-nairobi",
    name: "Small Appliance Repair in Nairobi",
    heroImage: "/assets/images/services/appliance.jpeg",
    shortDescription:
      "Repair for blenders, coffee machines, kettles, water dispensers, air fryers and other kitchen appliances.",

    appliances: [
      "Blenders",
      "Coffee makers",
      "Espresso machines",
      "Kettles",
      "Water dispensers",
      "Air fryers",
      "Toasters",
      "Food processors",
      "Electric grills",
    ],

    bullets: [
      "Blender, grinder and motor repair",
      "Coffee machine descaling and servicing",
      "Water dispenser cooling/heating repair",
      "Heating element and thermostat replacement",
      "Power failure and fuse repair",
      "Kitchen appliance diagnostics for all brands",
    ],

    offer: [
      "Blender and grinder motor repair and blade replacement.",
      "Coffee machine servicing including descaling and pressure cleaning.",
      "Water dispenser repair for cooling, heating and leakage issues.",
      "Air fryer, toaster and kettle electrical repair.",
      "Replacement of motors, fuses, thermostats and switches.",
      "Control panel and sensor troubleshooting.",
      "Countertop oven repair and general diagnostics.",
    ],

    faq: [
      {
        q: "Do you repair espresso machines?",
        a: "Yes — both domestic and small commercial models.",
      },
      {
        q: "Do you offer pickup?",
        a: "Yes — in selected estates for an additional fee.",
      },
      {
        q: "Do you repair all small appliance brands?",
        a: "Yes. We handle all major brands available in Kenya.",
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
    heroImage: "/assets/images/services/kitchen.jpeg",
    shortDescription:
      "Repair and servicing of cookers, ovens, microwaves, dishwashers, range hoods and all built-in appliances.",

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
      "Cooker ignition repair and flame adjustment",
      "Oven thermostat and heating coil replacement",
      "Microwave magnetron and high-voltage repair",
      "Dishwasher drainage and pump troubleshooting",
      "Range hood suction and motor repair",
      "Built-in appliance removal and reinstallation",
    ],

    offer: [
      "Cooker ignition and burner flame repair.",
      "Thermostat, sensor and temperature calibration for ovens.",
      "Microwave repair including magnetron, fuses and capacitors.",
      "Dishwasher repair for drainage, noise and cleaning issues.",
      "Range hood installation and suction performance repair.",
      "Built-in oven and microwave servicing.",
      "Heating element replacement for cookers and ovens.",
      "Electronic control board diagnostics.",
    ],

    faq: [
      {
        q: "Do you repair built-in kitchen appliances?",
        a: "Yes — we safely remove and reinstall appliances without damaging cabinets.",
      },
      {
        q: "Do dishwashers require frequent servicing?",
        a: "Yes. Filters, spray arms and drainage systems should be cleaned regularly.",
      },
      {
        q: "Do you repair gas cookers?",
        a: "Yes — including ignition systems and burner calibration.",
      },
    ],

    keywords: [
      "cooker repair Nairobi",
      "oven technician Kenya",
      "microwave repair service",
      "dishwasher repair Nairobi",
    ],
  },

  // ============================================================================
  // 9) LAUNDRY APPLIANCE REPAIR (NON-WASHING-MACHINE)
  // ============================================================================
  {
    slug: "laundry-appliance-repair-nairobi",
    name: "Laundry Appliance Repair in Nairobi",
    heroImage: "/assets/images/services/washing.jpeg",
    shortDescription:
      "Repair for dryers, steam irons, garment steamers, washer-dryer combos and commercial laundry systems.",

    appliances: [
      "Tumble dryers",
      "Spin dryers",
      "Steam irons",
      "Garment steamers",
      "Commercial laundry dryers",
      "Washer-dryer combos",
    ],

    bullets: [
      "Dryer heating & drum rotation issues",
      "Steam iron thermostat & element repair",
      "Washer-dryer combo troubleshooting",
      "Commercial laundry servicing for hostels & hotels",
      "Bearing, belt & roller replacement",
      "Dryer control board diagnostics",
    ],

    offer: [
      "Dryer repair for heating, rotation and airflow problems.",
      "Commercial laundry dryer maintenance and repair.",
      "Washer-dryer electrical and mechanical troubleshooting.",
      "Steam iron and garment steamer repair.",
      "Drum bearing, belt and roller replacement.",
      "Fuse, thermostat and heating element repair.",
      "Dryer vent cleaning and airflow improvement.",
    ],

    faq: [
      {
        q: "Do you repair commercial dryers?",
        a: "Yes — for hotels, laundromats, hostels and institutions.",
      },
      {
        q: "Why is my dryer not heating?",
        a: "Common causes include faulty heating elements, thermostats, fuses or blocked airflow.",
      },
      {
        q: "Do you repair washer-dryer combos?",
        a: "Yes — we repair both washing and drying components.",
      },
    ],

    keywords: ["dryer repair Nairobi", "laundry technician", "steam iron repair"],
  },

  // ============================================================================
  // 10) EMERGENCY APPLIANCE REPAIR
  // ============================================================================
  {
    slug: "emergency-appliance-repair-nairobi",
    name: "Emergency Appliance Repair Services in Nairobi",
    heroImage: "/assets/images/services/maintenance.jpg",
    shortDescription:
      "Priority same-day repair for essential appliances including fridges, ACs, washers, cold rooms and more.",

    appliances: [
      "Fridges & freezers",
      "Cold rooms",
      "AC systems",
      "Washing machines",
      "Dryers",
      "Cookers & ovens",
    ],

    bullets: [
      "Fast dispatch for urgent appliance failures",
      "Emergency fridge & freezer cooling restoration",
      "Office & server room AC breakdown support",
      "Priority repair for essential home appliances",
      "Commercial emergency response",
      "Temporary workarounds while sourcing parts",
    ],

    offer: [
      "Immediate support for fridge cooling failures.",
      "Cold room temperature restoration to protect stock.",
      "Office and server room AC emergency repair.",
      "Urgent washing machine and dryer repair.",
      "Cooker, oven and essential appliance breakdown repair.",
      "On-site diagnostics with rapid turnaround.",
      "Fault isolation and temporary solutions when needed.",
      "Emergency callouts within Nairobi depending on availability.",
    ],

    faq: [
      {
        q: "Which emergencies qualify?",
        a: "Fridges not cooling, cold room shutdowns, AC failure, major washing machine leaks, and any appliance posing electrical danger.",
      },
      {
        q: "Do you charge extra for emergency callouts?",
        a: "A higher callout fee may apply depending on urgency and location.",
      },
      {
        q: "Do you offer same-day service?",
        a: "Yes, for most Nairobi estates when technicians are available.",
      },
    ],

    keywords: [
      "emergency appliance repair Nairobi",
      "same day repair",
      "urgent fridge repair",
      "emergency AC technician",
    ],
  },
];

// ============================================================================
// HELPER
// ============================================================================
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
