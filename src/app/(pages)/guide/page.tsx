import React from 'react';

const LeadGenerationPage = () => {
  return (
    <div className="bg-purple-600 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
            The Best Lead Generation Service for Indian Real Estate Agents: Why Choose LeadBuddy?
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            In the highly competitive world of Indian real estate, staying ahead of the curve requires innovative strategies and reliable tools. Lead generation has become a cornerstone for success, allowing real estate agents to connect with potential clients effectively.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Replace with your actual image */}
          <img src="/images/hero-illustration.png" alt="Lead Generation Illustration" className="max-w-md" />
        </div>
      </div>

      {/* Topics Section */}
      <div className="bg-purple-700 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Topics</h2>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-2 font-semibold">
            Lead Generation
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              {/* Replace with your actual image */}
              <img src="/images/card-illustration-1.png" alt="Card 1 Illustration" className="max-h-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              The Best Lead Generation Service for Indian Real Estate Agents: Why Choose LeadBuddy?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In the highly competitive world of Indian real estate, staying ahead of the curve requires innovative strategies and reliable tools. Lead generation has become a cornerstone for success, allowing real estate agents to connect with potential clients effectively.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              {/* Replace with your actual image */}
              <img src="/images/card-illustration-2.png" alt="Card 2 Illustration" className="max-h-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Why Old Inquiries Can Still Be Gold: Purchasing Long-Term Property Leads from LeadBuddy
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Why Old Inquiries Can Still Be Gold: Purchasing Long-Term Property Leads from LeadBuddy. In the fast-moving world of real estate, agents and brokers often chase fresh leads, believing that newer inquiries have higher conversion potential.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              {/* Replace with your actual image */}
              <img src="/images/card-illustration-3.png" alt="Card 3 Illustration" className="max-h-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              LeadBuddy Pricing Guide: Choosing the Right Property Lead Package for Your Budget
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Finding the right property leads is crucial for real estate success. Whether you’re an agent, broker, or developer, investing in high-quality property leads can significantly impact your conversion rates.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-purple-800 py-4 text-center text-sm text-gray-300">
        <p>&copy; 2025 LeadBuddy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LeadGenerationPage;