// app/services/components/ServiceCategories/ServiceCategories.tsx
import "./ServiceCategories.css";

const categories = [
  {
    name: "HVAC Maintenance & Repair",
    description: "Air conditioning, ventilation and refrigeration systems for homes, offices and industries.",
    icon: "icon-service",
  },
  {
    name: "Electrical Services",
    description: "Installation, fault finding and repairs for residential and commercial electrical systems.",
    icon: "icon-management",
  },
  {
    name: "Plumbing Services",
    description: "Leak repairs, pipework, bathrooms, kitchens and complete plumbing maintenance.",
    icon: "icon-tap",
  },
  {
    name: "Cleaning & Janitorial",
    description: "Residential, office and post-construction cleaning with professional teams.",
    icon: "icon-headphones",
  },
  {
    name: "Pest Control",
    description: "Safe and effective pest control solutions for homes, businesses and institutions.",
    icon: "icon-security",
  },
  {
    name: "CCTV & Security Systems",
    description: "CCTV, access control and surveillance system installation and maintenance.",
    icon: "icon-computer-1",
  },
];

export default function ServiceCategories() {
  return (
    <section className="services-grid">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">More Solutions</span>
          <h2 className="section-title__title">
            Complete Facility Management Services
          </h2>
          <p className="section-title__text">
            Beyond machine repair, Primal Facilities Management provides end-to-end
            facility services tailored for homes, apartments, offices, hotels and
            industrial clients in Nairobi and across Kenya.
          </p>
        </div>

        <div className="row">
          {categories.map((service, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              key={index}
            >
              <div className="services-grid__card">
                <div className="services-grid__icon">
                  <span className={service.icon}></span>
                </div>
                <h3 className="services-grid__title">{service.name}</h3>
                <p className="services-grid__text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
