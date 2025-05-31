'use client'; // Only if using client components

import React from 'react';
import LeadSection from './components/LeadSection';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>LeadBuddy | High-Quality Real Estate Leads</title>
        <meta
          name="description"
          content="Get verified, high-converting real estate leads tailored to your market and business goals. Save time, close more deals."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com" />
        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="LeadBuddy | Real Estate Leads" />
        <meta
          property="og:description"
          content="Grow your business with exclusive, qualified leads from LeadBuddy."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
      </Head>

      <main role="main" className="homepage-container">
        <section role="region" aria-labelledby="lead-title" className="py-8">
          <h1 id="lead-title" className="text-3xl font-bold text-center mb-6">
            Get Exclusive Real Estate Leads Today
          </h1>
          <LeadSection />
        </section>
      </main>
    </>
  );
};

export default HomePage;
