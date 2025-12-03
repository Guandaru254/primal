import type { Metadata } from "next";

// GLOBAL STYLES
import "./styles/fixnix.css";
import "./styles/fixnix-responsive.css";
import "./globals.css";

// GLOBAL COMPONENTS
import Navbar from "./components/UI/Navbar";
import WhatsAppButton from "./components/UI/WhatsAppButton";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GLOBAL NAVIGATION BAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}

        {/* GLOBAL FLOATING WHATSAPP BUTTON */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
