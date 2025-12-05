import type { Metadata } from "next";

// GLOBAL STYLES
import "./styles/fixnix.css";
import "./styles/fixnix-responsive.css";
import "./globals.css";

// GLOBAL COMPONENTS
import Navbar from "./components/UI/Navbar";
import WhatsAppButton from "./components/UI/WhatsAppButton";
import CallButton from "./components/UI/CallButton";
import Footer from "./components/UI/Footer";

export const metadata: Metadata = {
  title: "Primal Facilities Management",
  description: "Reliable and professional facility management services in Kenya.",

  openGraph: {
    title: "Primal Facilities Management",
    description:
      "Leading provider of repair, installation and maintenance services in Nairobi & Kenya.",
    url: "https://primalfacilitiesmanagement.co.ke/",
    type: "website",
  },

  // ⭐ ADDING LOCAL BUSINESS NAP SCHEMA DIRECTLY IN METADATA
  other: {
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Primal Facilities Management",
      "description": "Reliable appliance, electrical, HVAC, plumbing & facility management services in Nairobi.",
      "url": "https://primalfacilitiesmanagement.co.ke",
      "image": "https://primalfacilitiesmanagement.co.ke/assets/images/logo/primal.png",
      "telephone": "+254714045217",
      "email": "info@primalfacilitiesmanagement.co.ke",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Muthithi Road, Westlands",
        "addressLocality": "Nairobi",
        "addressRegion": "Nairobi County",
        "postalCode": "00100",
        "addressCountry": "KE"
      },

      "priceRange": "KSh",
      "areaServed": [
        "Westlands", "Kilimani", "Kileleshwa", "Lavington", "Karen", "Langata",
        "South B", "South C", "Parklands", "Runda", "Embakasi", "Utawala",
        "Ngong Road", "Industrial Area", "Nairobi CBD", "Roysambu", "Kasarani"
      ],

      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    })
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* NAVIGATION */}
        <Navbar />

        {/* MAIN PAGE CONTENT */}
        {children}

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* FLOATING ACTION BUTTONS */}
        <div className="fab-container">
          <CallButton />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
