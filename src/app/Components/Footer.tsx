import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define link data separately for clarity and maintainability
const companyLinks = [
  { href: "/aboutus", text: "About Us" },
  { href: "/guide", text: "Real Estate Business Guide" },

  { href: "/leadsquality", text: "Leads Quality" },
  { href: "/sources", text: "Our Lead Sources" },
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/terms", text: "Terms & Conditions" },
  { href: "/disclaimer", text: "Disclaimer" },
  { href: "/sitemap", text: "Sitemap" },
  { href: "/careers", text: "Careers @ LeadBuddy" },
  { href: "/vendor", text: "Vendor Login" },
  { href: "/contact", text: "Contact Us" },
];

const serviceLinks = [
  {
    href: "/real-estate-property-leads-for-brokers-real-estate-agents",
    text: "Real Estate - Property Leads for Brokers/Real-Estate Agents",
  },
  {
    href: "/real-estate-property-leads-for-real-estate-marketing-agency",
    text: "Real Estate - Property Leads for Real Estate Marketing Agency",
  },
  {
    href: "/real-estate-property-leads-for-real-estate-builder-developers",
    text: "Real Estate - Property Leads for Real Estate Builder/Developers",
  },
  {
    href: "/hni-data-acquisition-as-a-broker",
    text: "HNI Data Acquisition as a Broker",
  },
  {
    href: "/property-price-negotiation-services",
    text: "Property Price Negotiation Services",
  },
];

const locationLinks = [
  "Mumbai",
  "Thane",
  "Navi Mumbai",
  "Mira-Bhayandar",
  "Pune",
  "Bengaluru (Bangalore)",
  "Noida/Greater Noida",
  "Delhi",
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-8 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-y-6">
        {/* Company */}
        <div className="w-1/2 md:w-1/3">
          <h4 className="font-bold mb-3 text-gray-900">COMPANY</h4>
          {companyLinks.map((link) => (
            <Link
              key={link.href} // Use href as key assuming it's unique
              href={link.href}
              className="block mb-2 hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="w-1/2 md:w-1/3 pr-4">
          <h4 className="font-bold mb-3 text-gray-900">SERVICES</h4>
          {serviceLinks.map((link) => (
            <Link
              key={link.href} // Use href as key assuming it's unique
              href={link.href}
              className="block mb-2 hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Locations */}
        <div className="w-full md:w-1/3">
          <h4 className="font-bold mb-3 text-gray-900">LOCATIONS</h4>
          {locationLinks.map((city) => {
            // Generate the href slug from the city name
            const citySlug = city
              .toLowerCase()
              .replace(/\s+|\/|[()]/g, "-") // Replace spaces, slashes, parentheses with hyphens
              .replace(/-+/g, "-"); // Replace multiple hyphens with a single one

            return (
              <Link
                key={city} // Use city name as key assuming it's unique
                href={`/${citySlug}-leads`}
                className="block mb-2 hover:underline"
              >
                Real Estate - Property Leads in {city}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-5 text-center">
        <div className="flex justify-center items-center mb-2">
          <Image
            src="/leadbuddy-logo.png"
            alt="Leadbuddy Logo"
            width={28}
            height={28}
            className="mr-2"
          />
          <span className="font-bold text-gray-900">leadbuddy</span>
          <span className="ml-2 text-gray-700">Property Inquiry Leads</span>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} LeadBuddy™ All Rights Reserved.
        </p>{" "}
        {/* Dynamic Year */}
      </div>
    </footer>
  );
};

export default Footer;
