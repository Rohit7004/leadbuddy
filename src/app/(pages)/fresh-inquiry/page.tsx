'use client';

import React from 'react';
import Link from 'next/link';

const PropertyLeads = () => {
  const benefits = [
    {
      title: "Immediate Interest",
      text: "Fresh leads reflect recent inquiries, meaning prospects are actively searching and ready to take action.",
    },
    {
      title: "Higher Conversion Rates",
      text: "Fresh leads typically convert faster, as they represent buyers who are in the decision-making phase.",
    },
    {
      title: "Stronger Engagement",
      text: "These leads are more responsive, allowing for meaningful conversations and better engagement.",
    },
    {
      title: "Optimized Follow-Ups",
      text: "Since inquiries are recent, following up within a short timeframe increases your chances of closing the deal.",
    },
    {
      title: "Competitive Advantage",
      text: "By acting quickly on fresh leads, you gain an edge over competitors who may not respond as rapidly.",
    },
    {
      title: "Time-Efficient",
      text: "Fresh leads save time and effort, reducing the need for nurturing or re-engagement over extended periods.",
    },
  ];

  const stats = [
    { value: "₹ [Call Sales]", label: "Avg. Cost/Lead", desc: "Fresh Inquiry Leads" },
    { value: "₹ 1,49,999", label: "Billing Amount", desc: "Minimum Order value" },
    { value: "1 Day", label: "Live Delivery", desc: "Inquiry Timeline" },
  ];

  return (
    <div className="font-sans text-black px-4 md:px-10 py-8">
      {/* Hero Section */}
      <div className="text-center py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Fresh Property Inquiry Leads: The Key to Faster Sales and Higher Conversions
        </h1>
        <p className="text-lg mb-6">Fresh Leads, Fast Conversions - Elevate Your Sales.</p>
        <div className="flex justify-center flex-wrap gap-4">
          <Link href="/leadcostcalculator">
            <button className="bg-white border border-gray-300 rounded px-4 py-2 flex items-center gap-2 hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8z" />
                <path d="M4 2.5h8v2H4v-2zm0 4h1v1H4v-1zm0 3h1v1H4v-1zm0 3h1v1H4v-1zm3-6h1v1H7v-1zm0 3h1v1H7v-1zm0 3h1v1H7v-1zm3-6h1v1h-1v-1zm0 3h1v1h-1v-1z" />
              </svg>
              Calculate Your Lead Cost
            </button>
          </Link>
          <button className="bg-white border border-gray-300 rounded px-4 py-2 hover:shadow">
            I’m Interested! →
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-3xl mx-auto grid gap-4 text-center">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex items-start justify-center gap-3 text-left">
            <span className="text-purple-700 text-xl font-bold">✔</span>
            <p>
              <strong>{item.title}:</strong> {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto py-10">
  {/* Cost Per Lead */}
  <div className="bg-gray-100 p-6 rounded shadow-sm">
    <p className="text-xl font-bold text-purple-700">₹ [Call Sales]</p>
    <p className="text-sm font-medium text-gray-600 mt-1">Avg. Cost/Lead</p>
    <p className="text-gray-500 text-sm">Fresh Inquiry Leads</p>
  </div>

  {/* Billing Amount */}
  <div className="bg-gray-100 p-6 rounded shadow-sm">
    <p className="text-xl font-bold text-purple-700">₹ 1,49,999</p>
    <p className="text-sm font-medium text-gray-600 mt-1">Billing Amount</p>
    <p className="text-gray-500 text-sm">Minimum Order Value</p>
  </div>

  {/* Delivery Timeline */}
  <div className="bg-gray-100 p-6 rounded shadow-sm">
    <p className="text-xl font-bold text-purple-700">1 Day</p>
    <p className="text-sm font-medium text-gray-600 mt-1">Live Delivery</p>
    <p className="text-gray-500 text-sm">Inquiry Timeline</p>
  </div>

  {/* Average Quality */}
  <div className="bg-purple-100 p-6 rounded shadow-sm flex flex-col items-center justify-center">
    <div className="w-[70px] h-[70px] rounded-full bg-purple-700 text-white text-2xl font-bold flex items-center justify-center mb-2">
      97%
    </div>
    <p className="text-gray-700 text-sm font-medium">Avg. Quality</p>
  </div>
</div>


      {/* Full Article */}
      <div className="py-10 max-w-5xl mx-auto space-y-6 text-justify">
        <h2 className="text-2xl font-bold">
          Why Fresh Inquiry Property Leads are the Best Investment for Agents, Brokers, Developers, and Marketing Firms
        </h2>
        <p>
          If you’re in the real estate industry—whether as an agent, broker, developer, or part of a marketing firm—you already know that generating new business depends on finding quality leads. But not just any leads: Fresh Inquiry Property Leads are the key to unlocking faster sales cycles, more engaged buyers, and higher conversion rates. In this article, we will explore why fresh property leads are a game-changer, provide practical tips on using them effectively, and show you how to purchase them for maximum business growth.
        </p>
        <h3 className="text-xl font-semibold">Why Fresh Property Leads Matter</h3>
        <p>
          Unlike outdated or long-term leads, fresh inquiry property leads come directly from individuals who have recently expressed interest in buying or renting a property. These leads are highly valuable because they reflect current market interest, allowing agents, brokers, and developers to strike while the iron is hot.
        </p>
        <p>
          As someone experienced in real estate, you likely understand the frustration of chasing down old leads that no longer convert. With fresh leads, that issue is minimized, allowing you to focus your energy on prospects who are ready to act, ensuring higher efficiency in your business dealings. Marketing firms that specialize in real estate also benefit by having fresh data to target more effectively, yielding better results for their campaigns.
        </p>

        <h3 className="text-xl font-semibold">The Benefits of Fresh Inquiry Leads for Different Real Estate Professionals</h3>

        <strong>For Agents and Brokers</strong>
        <p>
          Fresh leads mean less time wasted on cold prospects. You can immediately engage with buyers who are eager to hear from you, giving you a competitive edge. Whether you are following up on property inquiries for a specific type of housing or a broader market segment, these leads are primed for conversation.
        </p>

        <strong>For Developers</strong>
        <p>
          As a developer, having access to fresh inquiry leads can significantly impact your ability to sell properties at the right time. This is especially useful when launching new projects. Engaging potential buyers with updated, targeted information about new developments or available units increases the likelihood of securing pre-sales and faster occupancy rates.
        </p>

        <strong>For Marketing Firms</strong>
        <p>
          Fresh property leads provide marketing firms with accurate data for targeting real estate buyers. These leads allow you to create more effective campaigns, optimize ad spend, and deliver more qualified prospects to your clients. By focusing on fresh inquiries, your campaigns can resonate more with your audience, which translates into measurable success for your clients.
        </p>

        <h3 className="text-xl font-semibold">Practical Tips for Using Fresh Inquiry Leads Effectively</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Immediate Follow-Up:</strong> Engage prospects within hours for higher conversion.</li>
          <li><strong>Personalized Communication:</strong> Mention their property type and offer tailored help.</li>
          <li><strong>Leverage Technology:</strong> Use CRMs to automate follow-ups and track progress.</li>
          <li><strong>Consistent Engagement:</strong> Keep in touch with new listings and updates.</li>
          <li><strong>Data Analysis:</strong> Analyze lead sources and optimize future purchases.</li>
        </ul>

        <h3 className="text-xl font-semibold">Why You Should Purchase Fresh Inquiry Property Leads</h3>
        <p>
          Investing in fresh inquiry property leads is not just a tactical move; it’s a strategic decision that can significantly boost your real estate business. When you purchase fresh leads, you’re buying access to ready-to-act buyers, allowing you to reduce the sales cycle and close deals faster. With our expert-curated lead generation system, you can rest assured that you are getting the most valuable, up-to-date prospects.
        </p>

        <p>
          Additionally, by purchasing fresh property leads, you free up your time to focus on what really matters—selling properties and engaging with serious buyers. You’ll have a steady stream of high-quality leads without needing to spend hours generating them yourself.
        </p>

        <h3 className="text-xl font-semibold">Contact Our Sales Team to Get Started</h3>
        <p>
          Ready to take your real estate business to the next level? Contact our sales team today to learn more about how you can purchase fresh inquiry property leads. We’re here to answer any questions you have and provide the insights you need to succeed in today’s competitive market.
        </p>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Fresh property leads are invaluable for agents, brokers, developers, and marketing firms looking to stay competitive and increase their sales. With immediate access to prospective buyers who are genuinely interested, you’ll see faster conversions and greater success. Reach out today and start making the most of the freshest, high-quality leads available.
        </p>
      </div>
    </div>
  );
};

export default PropertyLeads;
