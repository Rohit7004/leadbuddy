"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="font-sans text-base border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo or Brand */}
        <Link href="/" className="text-xl font-bold text-purple-700">
          LeadBuddy
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 list-none">
          <li>
            <Link href="/" className="text-purple-700 font-bold hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/property-leads" className="text-gray-800 font-bold hover:underline">
              Property Leads
            </Link>
          </li>
          <li>
            <Link href="/hni" className="text-gray-800 font-normal hover:underline">
              HNI Leads (Acquisition)
            </Link>
          </li>
          <li>
            <Link href="/pages/audience" className="text-gray-800 font-normal hover:underline">
              Audience Reach Program
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 font-normal hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 font-normal hover:underline">
              About Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-base">
          <li>
            <Link href="/" onClick={closeMenu} className="block hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/property-leads" onClick={closeMenu} className="block hover:underline">
              Property Leads
            </Link>
          </li>
          <li>
            <Link href="/hni" onClick={closeMenu} className="block hover:underline">
              HNI Leads (Acquisition)
            </Link>
          </li>
          <li>
            <Link href="/pages/audience" onClick={closeMenu} className="block hover:underline">
              Audience Reach Program
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="block hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="block hover:underline">
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
