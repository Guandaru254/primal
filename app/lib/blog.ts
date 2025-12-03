// app/lib/blog.ts

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string, e.g. "2025-01-01"
  readTimeMinutes: number;
  tags: string[];
  heroImage: string;
  body: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-preventive-maintenance-saves-money-in-nairobi",
    title: "Why Preventive Maintenance Saves Money in Nairobi Facilities",
    excerpt:
      "Waiting for machines to break is expensive. Preventive maintenance keeps your assets running, extends lifespan and protects your cash flow.",
    date: "2025-01-01",
    readTimeMinutes: 7,
    tags: ["preventive maintenance", "facilities", "nairobi"],
    heroImage: "/assets/images/blog/preventive-maintenance.jpg",
    body: [
      "Many Nairobi businesses still wait for equipment to fail before calling a technician. It feels cheaper in the short term, but the hidden costs of downtime, emergency call-outs and premature replacement quickly add up.",
      "Preventive maintenance flips the script. Instead of reacting to breakdowns, you schedule inspections and servicing before problems become critical. This approach is standard in mature facilities management environments around the world — and Kenyan businesses are rapidly adopting it.",
      "For laundry equipment, fridges, cold rooms and HVAC systems, regular servicing improves efficiency and reduces energy consumption. A poorly maintained machine uses more power, works harder and fails sooner.",
      "Another often overlooked benefit is predictability. When maintenance is planned, you can choose times that don’t disrupt operations — for example early mornings, off-peak days or scheduled shutdowns.",
      "The right maintenance partner will build an asset register, track service history and highlight when replacement is more sensible than repeated repair. Over a 3–5 year horizon this kind of visibility has a huge impact on your budget.",
      "If you’re running a laundromat, hotel, restaurant or industrial facility in Nairobi, preventive maintenance is no longer a nice-to-have. It is one of the simplest ways to protect your revenue and reputation."
    ]
  },
  {
    slug: "commercial-fridge-maintenance-checklist-kenya",
    title: "Commercial Fridge Maintenance Checklist for Kenyan Businesses",
    excerpt:
      "Use this simple fridge and freezer maintenance checklist to avoid stock loss, product spoilage and emergency call-outs.",
    date: "2025-01-02",
    readTimeMinutes: 8,
    tags: ["fridge repair", "checklist", "cold storage"],
    heroImage: "/assets/images/blog/commercial-fridge.jpg",
    body: [
      "Whether you run a butchery in Umoja, a supermarket in Westlands or a hotel in Naivasha, your commercial fridges and freezers are mission-critical assets. A single failure can wipe out stock worth hundreds of thousands of shillings.",
      "Daily visual checks should be your first line of defence. Look for ice build-up, water leaks, unusual noises and doors that don’t close properly. Ask your staff to report temperature fluctuations immediately.",
      "Weekly tasks include cleaning door gaskets, checking internal lighting and verifying that products are not blocking air vents. Poor air circulation forces the compressor to work harder and reduces cooling performance.",
      "At least once a month, schedule a more detailed inspection. Condenser coils should be cleaned, drain lines checked and temperature logbooks reviewed. If you notice frequent defrost cycles or large temperature swings, call a technician.",
      "Finally, build a relationship with a qualified cold room and fridge repair company. They can perform quarterly or bi-annual deep maintenance, check gas levels and advise when equipment is nearing end of life.",
      "Having a clear checklist empowers your team and reduces the risk of nasty surprises during a busy weekend service."
    ]
  },
  {
    slug: "laundromat-setup-guide-nairobi",
    title: "Laundromat Setup Guide for Nairobi Entrepreneurs",
    excerpt:
      "Thinking of starting a laundromat in Nairobi? Here’s a practical guide covering location, equipment, utilities and maintenance.",
    date: "2025-01-03",
    readTimeMinutes: 10,
    tags: ["laundromat", "commercial laundry", "startup"],
    heroImage: "/assets/images/blog/laundromat-setup.jpg",
    body: [
      "Demand for professional laundry services continues to grow across Nairobi estates such as Kilimani, Ruaka, Syokimau and Thika Road. Busy professionals, young families and student populations value convenience over washing at home.",
      "The first major decision is location. Look for areas with dense housing, secure parking and reliable water supply. Proximity to apartments and offices will reduce your marketing costs and attract repeat customers.",
      "Your choice of machines is the second big decision. Commercial-grade washers and dryers handle higher volumes, use less water per kilo and last significantly longer than domestic units. They also integrate laundry payment systems, stacking options and advanced diagnostics.",
      "Don’t forget to budget for hot water systems, drainage, ventilation and adequate power supply. A professional site assessment will flag issues such as low water pressure, unstable voltage and insufficient floor drainage.",
      "A laundromat only makes money when machines are running. Preventive maintenance contracts, real-time fault reporting and staff training are essential parts of your setup plan.",
      "With the right planning and support, a Nairobi laundromat can become a strong recurring-income business that scales with additional branches."
    ]
  },
  {
    slug: "cold-room-design-mistakes-to-avoid",
    title: "5 Cold Room Design Mistakes Kenyan Businesses Should Avoid",
    excerpt:
      "Cold rooms are long-term investments. Avoid these common design mistakes that lead to high power bills and unstable temperatures.",
    date: "2025-01-04",
    readTimeMinutes: 9,
    tags: ["cold room", "design", "energy efficiency"],
    heroImage: "/assets/images/blog/cold-room-design.jpg",
    body: [
      "A well-designed cold room should provide stable temperatures, efficient energy use and reliable operation for many years. Unfortunately, many installations across Kenya suffer from basic design mistakes.",
      "The first mistake is undersizing. Choosing a smaller capacity to cut costs often leads to overworked compressors and poor temperature control. It’s better to design for your peak load plus some growth.",
      "Second, door design matters. Poorly sealed doors, lack of air curtains and excessive door openings allow warm, humid air into the room. This causes ice build-up, slippery floors and high power consumption.",
      "Third, placing condensers and compressors in poorly ventilated areas restricts heat rejection. Over time, this shortens the life of your equipment.",
      "Insulation quality is another critical factor. Inadequate panel thickness, poor joint sealing and incorrect floor insulation will all show up in your electricity bill.",
      "Working with an experienced cold room contractor, rather than a general electrician or fundi, ensures these issues are addressed at design stage — not after you’ve invested in stock."
    ]
  },
  {
    slug: "hvac-maintenance-plan-for-office-buildings",
    title: "Creating an HVAC Maintenance Plan for Nairobi Office Buildings",
    excerpt:
      "Comfortable, healthy offices depend on reliable air-conditioning. Here’s how to build a practical HVAC maintenance plan.",
    date: "2025-01-05",
    readTimeMinutes: 8,
    tags: ["hvac", "office", "maintenance plan"],
    heroImage: "/assets/images/blog/hvac-office.jpg",
    body: [
      "In Nairobi’s rapidly growing commercial hubs such as Upper Hill and Westlands, modern office buildings rely heavily on HVAC systems to keep employees comfortable and productive.",
      "An effective maintenance plan begins with an asset register. Document every indoor unit, outdoor unit, fan coil, ventilation fan and control panel, including location and capacity.",
      "Next, set service intervals based on usage. Heavily used open-plan offices and call centres may require quarterly deep cleaning, while boardrooms and lightly used spaces can be serviced less frequently.",
      "Your plan should include filter replacement, coil cleaning, drain flushing, refrigerant checks and verification of control settings. These actions improve air quality and reduce energy consumption.",
      "Finally, agree clear response times with your service provider for fault calls. A simple breakdown in a server room or trading floor can be extremely costly.",
      "Treat your HVAC system as part of your core business infrastructure, not an afterthought. The result is happier staff and fewer disruptions."
    ]
  },
  {
    slug: "facility-management-checklist-for-nairobi-landlords",
    title: "Facility Management Checklist for Nairobi Landlords",
    excerpt:
      "Own an apartment block, mall or office building? Use this facilities checklist to stay ahead of repairs and tenant complaints.",
    date: "2025-01-06",
    readTimeMinutes: 9,
    tags: ["facility management", "landlords", "checklist"],
    heroImage: "/assets/images/blog/landlord-checklist.jpg",
    body: [
      "Landlords and property managers in Nairobi juggle many responsibilities: collecting rent, managing service charges, resolving tenant issues and coordinating repairs.",
      "A simple but structured facilities checklist makes the job easier. Start with shared services such as lifts, pumps, generators, fire equipment, lighting and security systems.",
      "For each asset, define inspection frequency, responsible party and escalation process. For example, water pumps may require weekly checks while generators need monthly test runs.",
      "Include common areas like stairwells, lobbies, parking and rooftop spaces. Small issues such as flickering lights, loose handrails or blocked drains can quickly become safety hazards.",
      "Communicate your maintenance schedule to tenants so they know what to expect. Transparency builds trust and reduces conflict when access is required for repairs.",
      "Working with a professional facilities management partner allows you to outsource day-to-day technical issues while you focus on occupancy and long-term asset value."
    ]
  },
  {
    slug: "safety-tips-for-commercial-laundry-rooms",
    title: "Safety Tips for Commercial Laundry Rooms in Kenya",
    excerpt:
      "High-volume laundry rooms mix water, heat, electricity and chemicals. Here’s how to keep your team and equipment safe.",
    date: "2025-01-07",
    readTimeMinutes: 7,
    tags: ["laundry safety", "osha", "commercial laundry"],
    heroImage: "/assets/images/blog/laundry-safety.jpg",
    body: [
      "Commercial laundry operations in hotels, hospitals and laundromats expose staff to a range of safety risks — from slippery floors and hot surfaces to heavy lifting and chemical handling.",
      "Clear walkways and non-slip flooring reduce the risk of falls. Any leaks from machines or plumbing should be reported and fixed immediately.",
      "Train staff to use proper lifting techniques when handling laundry bags, chemical drums or spare parts. Where possible, use trolleys instead of manual carrying.",
      "Dryers and irons operate at high temperatures. Guards, warning signs and lock-out procedures prevent accidental burns during maintenance.",
      "Finally, invest in regular equipment servicing. Malfunctioning thermostats, blocked vents and damaged wiring are not just reliability issues — they are safety concerns too.",
      "A safe laundry room protects your staff, your customers and your reputation."
    ]
  },
  {
    slug: "how-to-reduce-energy-costs-in-your-building",
    title: "How to Reduce Energy Costs in Your Building Without Major Renovations",
    excerpt:
      "You don’t need a full refurbishment to cut your energy bill. Small, well-planned actions can deliver big savings.",
    date: "2025-01-08",
    readTimeMinutes: 8,
    tags: ["energy efficiency", "buildings", "cost saving"],
    heroImage: "/assets/images/blog/energy-saving.jpg",
    body: [
      "Electricity is one of the largest controllable expenses in Kenyan commercial buildings. The good news is that many savings can be unlocked without major capital projects.",
      "Start by understanding your load profile. When is consumption highest? Which equipment runs 24/7? Sub-metering for lifts, pumps, common lighting and tenants reveals where to focus.",
      "Simple changes like adjusting AC set-points, installing motion sensors in corridors and using LED lighting often deliver fast payback.",
      "Planned maintenance of motors, pumps, fridges and HVAC systems reduces friction and improves efficiency. Dirty filters and coils force equipment to work harder.",
      "Finally, create awareness among occupants. Clear signage, guidelines for switching off unused equipment and regular communication all contribute to a culture of energy responsibility.",
      "Over time, these small actions compound into meaningful monthly savings."
    ]
  },
  {
    slug: "signs-your-washing-machine-needs-professional-service",
    title: "6 Signs Your Washing Machine Needs Professional Service",
    excerpt:
      "Strange noises, leaks and poor cleaning performance are warnings. Here’s when to call a technician before serious damage occurs.",
    date: "2025-01-09",
    readTimeMinutes: 6,
    tags: ["washing machine repair", "diagnostics"],
    heroImage: "/assets/images/blog/washing-machine-signs.jpg",
    body: [
      "Most washing machines give early warning signs before complete failure. Paying attention to these signals can save you from flooded floors and ruined laundry.",
      "Unusual noises during spin cycles often indicate bearing wear, loose drums or foreign objects trapped in the tub.",
      "Water leaks around the door or at the back of the machine may be caused by damaged seals, loose hoses or blocked filters.",
      "If clothes come out still dirty or full of detergent, your machine may have a failing pump, blocked inlet valves or sensor problems.",
      "Repeated error codes, tripping breakers and burning smells are all serious red flags. Switch off the machine and call a qualified technician immediately.",
      "Addressing issues early usually costs less than waiting for a catastrophic failure."
    ]
  },
  {
    slug: "what-to-look-for-in-a-facility-management-partner",
    title: "What to Look for in a Facility Management Partner in Kenya",
    excerpt:
      "The right FM partner acts like an extension of your team. Here are key questions to ask before you sign a contract.",
    date: "2025-01-10",
    readTimeMinutes: 9,
    tags: ["facility management", "outsourcing", "contracts"],
    heroImage: "/assets/images/blog/fm-partner.jpg",
    body: [
      "Outsourcing facilities management gives you access to specialised expertise without building an internal technical department from scratch.",
      "When evaluating providers, ask how they manage technicians, vehicles, spare parts and response times. A strong FM partner will have clear processes, not just individual fundis.",
      "Look for transparent reporting: service tickets, asset registers, maintenance plans and cost breakdowns. Data is essential for budgeting and decision-making.",
      "Health and safety should never be negotiable. Confirm that the provider trains staff, uses proper PPE and complies with Kenyan regulations.",
      "Finally, evaluate cultural fit. You want a partner that communicates clearly, understands your business priorities and treats your tenants or guests with respect.",
      "A thoughtful selection process sets the foundation for a long-term, trusted relationship."
    ]
  },
  {
    slug: "deep-cleaning-vs-regular-cleaning-for-offices",
    title: "Deep Cleaning vs Regular Cleaning: What Nairobi Offices Need",
    excerpt:
      "Daily cleaning keeps offices presentable, but periodic deep cleaning protects health, assets and brand image.",
    date: "2025-01-11",
    readTimeMinutes: 7,
    tags: ["cleaning services", "offices", "hygiene"],
    heroImage: "/assets/images/blog/deep-cleaning.jpg",
    body: [
      "Most office cleaning contracts focus on daily tasks: sweeping, mopping, dusting and emptying bins. These are important, but they don’t address dirt that slowly builds up over months.",
      "Deep cleaning tackles areas that routine work misses — carpets, upholstery, air vents, high surfaces, behind equipment and washroom fixtures.",
      "In Nairobi’s dusty environment, air vents and AC filters quickly accumulate particles that can trigger allergies and reduce air quality.",
      "Spilled drinks, food crumbs and everyday wear gradually stain carpets and office chairs. Professional extraction restores appearance and extends lifespan.",
      "For high-traffic washrooms, descaling and steam cleaning are essential to keep surfaces hygienic and odour-free.",
      "Combining daily cleaning with quarterly or bi-annual deep cleaning gives your staff and visitors a consistently professional environment."
    ]
  },
  {
    slug: "plumbing-issues-that-signal-bigger-problems",
    title: "Plumbing Issues That Signal Bigger Problems in Your Building",
    excerpt:
      "Dripping taps and slow drains might look minor, but they often point to deeper plumbing and water-pressure issues.",
    date: "2025-01-12",
    readTimeMinutes: 6,
    tags: ["plumbing", "buildings", "maintenance"],
    heroImage: "/assets/images/blog/plumbing-issues.jpg",
    body: [
      "Water is one of the most damaging forces in any building. Small leaks, if ignored, can cause structural damage, mould growth and high water bills.",
      "Persistent low pressure on upper floors may indicate partially blocked pipes, undersized pumps or tank problems.",
      "Brown or discoloured water can point to rusting pipes or sediment build-up in storage tanks.",
      "Repeated blockages in the same stack suggest poor pipe design, sagging sections or foreign objects lodged in the line.",
      "Whenever you see damp patches on walls or ceilings, act fast. Hidden leaks spread silently and are more expensive to repair the longer they are ignored.",
      "Regular inspection and timely repairs keep your building safe and protect your investment."
    ]
  },
  {
    slug: "how-to-prepare-for-a-facility-audit",
    title: "How to Prepare Your Building for a Facility Audit",
    excerpt:
      "A facility audit doesn’t have to be stressful. With the right preparation, it becomes a powerful planning tool.",
    date: "2025-01-13",
    readTimeMinutes: 8,
    tags: ["audit", "facility management", "planning"],
    heroImage: "/assets/images/blog/facility-audit.jpg",
    body: [
      "Facility audits provide a snapshot of your building’s condition, risks and future budget requirements.",
      "Start by gathering existing documentation: floor plans, equipment manuals, previous maintenance reports and warranty information.",
      "During the audit, engineers will inspect mechanical, electrical and plumbing systems as well as life-safety equipment such as fire alarms and extinguishers.",
      "Be honest about known issues. Hiding problems only delays solutions and can increase risk.",
      "After the audit, prioritise findings into urgent safety issues, near-term repairs and long-term upgrades. This structure helps you build a realistic CAPEX and OPEX plan.",
      "A good audit turns vague concerns into actionable data you can use to protect your asset value."
    ]
  },
  {
    slug: "benefits-of-outsourced-cleaning-for-small-offices",
    title: "Benefits of Outsourced Cleaning for Small Nairobi Offices",
    excerpt:
      "Even small teams benefit from professional cleaning support. Here’s why outsourcing beats casual arrangements.",
    date: "2025-01-14",
    readTimeMinutes: 6,
    tags: ["cleaning", "small business", "outsourcing"],
    heroImage: "/assets/images/blog/small-office-cleaning.jpg",
    body: [
      "Many small offices in Nairobi rely on casual cleaners paid in cash. While this may seem flexible, it often leads to inconsistent quality and HR risk.",
      "Professional cleaning companies provide trained staff, supervision and backup when someone is absent.",
      "They also supply the right tools and chemicals for different surfaces, reducing damage to floors, furniture and electronics.",
      "Clear contracts define scope, frequency and standards, which helps avoid misunderstandings.",
      "For business owners, outsourcing cleaning frees up time to focus on clients and growth rather than day-to-day housekeeping issues.",
      "The end result is a more professional workspace that better reflects your brand."
    ]
  },
  {
    slug: "emergency-vs-planned-maintenance-what-is-the-difference",
    title: "Emergency vs Planned Maintenance: What’s the Difference?",
    excerpt:
      "Both types of maintenance are necessary, but too much emergency work is a warning sign for your facility.",
    date: "2025-01-15",
    readTimeMinutes: 7,
    tags: ["maintenance", "planning", "strategy"],
    heroImage: "/assets/images/blog/emergency-vs-planned.jpg",
    body: [
      "Emergency maintenance happens when something fails unexpectedly and operations are disrupted. It is often stressful, expensive and poorly documented.",
      "Planned maintenance is scheduled in advance based on manufacturer recommendations, usage patterns and risk.",
      "A healthy facility will still experience occasional emergencies, but the majority of work should be planned.",
      "Tracking the ratio between emergency and planned tasks is a powerful KPI. If more than half your work is reactive, it’s time to review your maintenance strategy.",
      "Shifting towards planned maintenance requires asset registers, service calendars and reliable partners — but the payoff in reduced downtime is significant.",
      "Over time, you’ll notice fewer breakdowns, smoother budgeting and less stress for your operations team."
    ]
  },
  {
    slug: "how-to-choose-the-right-generator-size",
    title: "How to Choose the Right Generator Size for Your Building",
    excerpt:
      "Blackouts are still a reality in Kenya. Choosing the right generator size keeps your site running without overspending.",
    date: "2025-01-16",
    readTimeMinutes: 9,
    tags: ["generator", "backup power", "engineering"],
    heroImage: "/assets/images/blog/generator-sizing.jpg",
    body: [
      "Generators are major investments, and oversizing or undersizing both have consequences.",
      "Start by listing critical loads: lifts, pumps, lighting, servers, security systems and selected sockets. Decide what must run during an outage and what can wait.",
      "An electrical engineer will calculate total kVA, account for starting currents and diversity, then recommend an appropriate generator size.",
      "Undersized sets struggle to start motors and may trip frequently. Oversized sets run lightly loaded, which can cause wet-stacking and inefficient fuel use.",
      "Consider fuel storage, ventilation, noise control and automatic transfer switches as part of the design.",
      "A correctly sized and well-maintained generator provides reliable backup power without unnecessary operating costs."
    ]
  },
  {
    slug: "hvac-and-indoor-air-quality-in-nairobi",
    title: "HVAC and Indoor Air Quality in Nairobi Workplaces",
    excerpt:
      "Good indoor air quality supports employee health, focus and comfort — especially in congested urban areas.",
    date: "2025-01-17",
    readTimeMinutes: 8,
    tags: ["hvac", "air quality", "health"],
    heroImage: "/assets/images/blog/indoor-air-quality.jpg",
    body: [
      "Nairobi’s air can contain dust, vehicle emissions and other pollutants that infiltrate buildings through open windows, doors and ventilation systems.",
      "Properly maintained HVAC systems filter and condition this air to create a healthier indoor environment.",
      "Dirty filters and ducts recirculate contaminants, leading to allergies, headaches and general discomfort.",
      "Regular inspection of filters, coils and drain pans prevents mould growth and unpleasant odours.",
      "In open-plan offices and call centres, consistent air quality supports concentration and reduces sick days.",
      "Investing in HVAC maintenance is therefore both a health measure and a productivity strategy."
    ]
  },
  {
    slug: "reasons-your-cold-room-keeps-forming-ice",
    title: "5 Reasons Your Cold Room Keeps Forming Ice",
    excerpt:
      "Ice on floors and ceilings is not normal. It’s a sign that warm, moist air is entering your cold room.",
    date: "2025-01-18",
    readTimeMinutes: 7,
    tags: ["cold room", "troubleshooting"],
    heroImage: "/assets/images/blog/cold-room-ice.jpg",
    body: [
      "While a little frost near evaporator coils is expected, heavy ice on floors, ceilings and door frames is a warning sign.",
      "Common causes include damaged door gaskets, doors left open during loading, missing air curtains and frequent forklift traffic.",
      "Poor defrost settings or faulty sensors can also contribute to ice build-up.",
      "Excess ice reduces airflow, forces the system to work harder and can create safety hazards for staff.",
      "A cold room specialist will check seals, defrost cycles, fan operation and drainage to address the root cause.",
      "Fixing ice problems early protects your equipment and improves energy efficiency."
    ]
  },
  {
    slug: "how-to-brief-a-technician-for-faster-repairs",
    title: "How to Brief a Technician for Faster, Better Repairs",
    excerpt:
      "Clear information before a site visit helps technicians arrive prepared — and gets you back online faster.",
    date: "2025-01-19",
    readTimeMinutes: 5,
    tags: ["repairs", "communication", "technicians"],
    heroImage: "/assets/images/blog/brief-technician.jpg",
    body: [
      "When you call for service, the information you provide determines how well the technician can prepare.",
      "Share the equipment type, brand, model and approximate age. Describe the fault, any error codes and when it started.",
      "Explain how the fault is affecting your operations. This helps the service provider prioritise the call.",
      "If possible, send photos or short videos showing error messages, leaks or unusual noises.",
      "Good communication before, during and after the visit leads to faster diagnostics and fewer repeat trips.",
      "Over time, your equipment history builds up, allowing technicians to spot patterns and recommend long-term solutions."
    ]
  },
  {
    slug: "why-documentation-matters-in-facility-management",
    title: "Why Documentation Matters in Facility Management",
    excerpt:
      "From asset registers to SOPs, good documentation is the backbone of professional facilities management.",
    date: "2025-01-20",
    readTimeMinutes: 8,
    tags: ["documentation", "fm processes"],
    heroImage: "/assets/images/blog/fm-documentation.jpg",
    body: [
      "Many facilities rely on the memory of one or two key individuals who ‘know how things work’. This is risky when people change roles or leave the organisation.",
      "Documentation turns individual knowledge into organisational knowledge.",
      "Asset registers, O&M manuals, wiring diagrams, valve schedules and maintenance logs all contribute to safer, more efficient operations.",
      "Standard operating procedures (SOPs) guide technicians through common tasks and help new team members ramp up quickly.",
      "In the event of an incident or insurance claim, good records demonstrate that you have taken reasonable steps to maintain your equipment.",
      "Building a documentation culture takes time, but it is one of the most valuable upgrades you can make to your facility."
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
