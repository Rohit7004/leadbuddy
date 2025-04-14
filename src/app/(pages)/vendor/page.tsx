"use client";
// pages/vendor-login.tsx OR app/vendor-login/page.tsx
import React, { useState, FormEvent, JSX } from 'react';
import Head from 'next/head'; // Optional: For setting page title

export default function VendorLogin(): JSX.Element {
  // State for input fields with TypeScript types
  const [vendorId, setVendorId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Type the event parameter for the handler
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your login logic here
    console.log('Login attempt with:', { vendorId, password });
    // Replace with actual API call or authentication logic
    alert('Login logic needs to be implemented!');
  };

  return (
    <>
      {/* Optional: Set the page title */}
      <Head>
        <title>Vendor Login</title>
        <meta name="description" content="Vendor login page" />
      </Head>

      {/* Main container: full height, flexbox centering, light gray background, padding */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">

        {/* Login Box: White background, rounded corners, shadow, padding, max width, responsive width */}
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md sm:p-8">

          {/* Title */}
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
            Vendor Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Vendor ID Field Group */}
            <div className="mb-4">
              <label htmlFor="vendorId" className="mb-1 block text-sm font-medium text-gray-700">
                Vendor ID
              </label>
              <input
                type="text"
                id="vendorId"
                value={vendorId}
                onChange={(e) => setVendorId(e.target.value)}
                placeholder="Enter your Vendor ID"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              />
            </div>

            {/* Password Field Group */}
            <div className="mb-6"> {/* Increased margin bottom before button */}
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>

          {/* Links below the form */}
          <div className="mt-6 text-center text-sm">
            <a href="#" className="mx-1 font-medium text-purple-600 hover:text-purple-500">
              Forgot your password?
            </a>
            <span className="text-gray-400">|</span> {/* Separator */}
            <a href="#" className="mx-1 font-medium text-purple-600 hover:text-purple-500">
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </>
  );
}