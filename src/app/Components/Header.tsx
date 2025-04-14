"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-2 border-b border-gray-200 font-sans text-sm text-gray-800">
      <div className="flex items-center">
        <span className="font-bold text-gray-700">
          Sell Your Leads
          <span role="img" aria-label="rupee" className="ml-1 text-yellow-500">
            ₹
          </span>
        </span>
      </div>
      <div>
        <span className="font-bold text-gray-700">+91-7888875553</span>
      </div>
    </header>
  );
};

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative font-sans text-base border-b border-gray-100">
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <span className="font-bold text-xl text-purple-700 flex items-baseline">
            leadbuddy
            <span className="text-[8px] font-normal ml-1">TM</span>
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex justify-center items-center grow list-none mx-5 space-x-8">
          <li><Link href="/" className="text-purple-700 font-bold">Home</Link></li>

          <li className="relative text-gray-800 cursor-pointer flex items-center font-medium" onClick={toggleDropdown}>
            Property Leads <span className="text-xs ml-1">▼</span>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link href="/long-term">Long-Term Inquiry Leads</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link href="/recent-inquiry">Recent Inquiry Leads</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link href="/fresh-inquiry">Fresh Inquiry Leads</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link href="/leadcostcalculator">Calculate your Lead Cost</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/hni" className="text-gray-800 font-normal">HNI Leads (Acquisition)</Link></li>
          <li><Link href="/audience" className="text-gray-800 font-normal">Audience Reach Program</Link></li>
          <li><Link href="/contact" className="text-gray-800 font-normal">Contact Us</Link></li>
          <li><Link href="/blog" className="text-gray-800 font-normal">Blog</Link></li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Pricing Button */}
        <div className="hidden md:block shrink-0">
          <Link href="/pricing">
            <button className="bg-purple-700 text-white px-5 py-2 rounded font-bold text-sm hover:bg-purple-800 transition">
              Pricing
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="fixed top-16 left-0 w-full bg-white z-50 border-t border-gray-200 shadow-md flex flex-col md:hidden">
          <li className="px-4 py-3 hover:bg-gray-100"><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li className="px-4 py-3 hover:bg-gray-100" onClick={toggleDropdown}>
            Property Leads
            {isDropdownOpen && (
              <ul className="pl-4">
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/long-term" onClick={closeMenu}>Long-Term Inquiry Leads</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/recent-inquiry" onClick={closeMenu}>Recent Inquiry Leads</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/fresh-inquiry" onClick={closeMenu}>Fresh Inquiry Leads</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/leadcostcalculator" onClick={closeMenu}>Calculate your Lead Cost</Link></li>
              </ul>
            )}
          </li>
          <li className="px-4 py-3 hover:bg-gray-100"><Link href="/hni" onClick={closeMenu}>HNI Leads (Acquisition)</Link></li>
          <li className="px-4 py-3 hover:bg-gray-100"><Link href="/audience" onClick={closeMenu}>Audience Reach Program</Link></li>
          <li className="px-4 py-3 hover:bg-gray-100"><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
          <li className="px-4 py-3 hover:bg-gray-100"><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
          <li className="px-4 py-3 hover:bg-gray-100"><Link href="/pricing" onClick={closeMenu}>Pricing</Link></li>
        </ul>
      )}
    </nav>
  );
};

const AppHeader = () => {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  );
};

export default AppHeader;
