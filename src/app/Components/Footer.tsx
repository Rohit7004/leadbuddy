import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-8 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-y-6">
        {/* Company */}
        <div className="w-1/2 md:w-1/3 ">
          <h4 className="font-bold mb-3 text-gray-900">COMPANY</h4>
          {[
            'About Us',
            'Real Estate Business Guide',
            'Leads Quality',
            'Our Lead Sources',
            'Privacy Policy',
            'Terms & Conditions',
            'Disclaimer',
            'Sitemap',
            'Careers @ LeadBuddy',
            'Vendor Login',
            'Contact Us',
          ].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/\s+|@/g, '-').replace(/[()]/g, '').replace(/-+/g, '-')}`}
              className="block mb-2 hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="w-1/2 md:w-1/3 pr-4">
          <h4 className="font-bold mb-3 text-gray-900">SERVICES</h4>
          {[
            'Real Estate - Property Leads for Brokers/Real-Estate Agents',
            'Real Estate - Property Leads for Real Estate Marketing Agency',
            'Real Estate - Property Leads for Real Estate Builder/Developers',
            'HNI Data Acquisition as a Broker',
            'Property Price Negotiation Services',
          ].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/\s+|\/|@/g, '-').replace(/[()]/g, '').replace(/-+/g, '-')}`}
              className="block mb-2 hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Locations */}
        <div className="w-full md:w-1/3">
          <h4 className="font-bold mb-3 text-gray-900">LOCATIONS</h4>
          {[
            'Mumbai',
            'Thane',
            'Navi Mumbai',
            'Mira-Bhayandar',
            'Pune',
            'Bengaluru (Bangalore)',
            'Noida/Greater Noida',
            'Delhi',
          ].map((city, i) => (
            <Link
              key={i}
              href={`/${city.toLowerCase().replace(/\s+|\/|[()]/g, '-').replace(/-+/g, '-')}-leads`}
              className="block mb-2 hover:underline"
            >
              Real Estate - Property Leads in {city}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-5 text-center">
        <div className="flex justify-center items-center mb-2">
          <Image src="/leadbuddy-logo.png" alt="Leadbuddy Logo" width={28} height={28} className="mr-2" />
          <span className="font-bold text-gray-900">leadbuddy</span>
          <span className="ml-2 text-gray-700">Property Inquiry Leads</span>
        </div>
        <p className="text-xs text-gray-500">© 2023 LeadBuddy™ All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
