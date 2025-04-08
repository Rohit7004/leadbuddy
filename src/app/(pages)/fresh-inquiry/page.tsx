'use client';

import React from 'react';
import Link from 'next/link';

const RecentPropertyLeads = () => {
  return (
    <div className="font-sans text-gray-800 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Act Now: Recent Property Inquiry Leads
        </h1>
        <p className="text-lg mb-6">
          Drive immediate results through rapid engagement with high-intent buyers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/leadcostcalculator" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center border border-gray-300 rounded-xl px-5 py-2.5 bg-white hover:shadow-lg transition font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
              Calculate Your Lead Cost
            </button>
          </Link>
          <Link href="/leadform" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-gray-300 rounded-xl px-5 py-2.5 bg-white hover:shadow-lg transition font-medium text-sm">
              I'm Interested! →
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 py-10">
        <div className="lg:w-3/5 space-y-4">
          {[
            ["High Buyer Intent", "Leads are actively searching and ready to engage."],
            ["Fresh Opportunities", "Inquiries reflect current interest, enabling timely response."],
            ["Shorter Sales Cycle", "Prospects are often close to decision-making."],
            ["Focused Outreach", "Approach can be personalized to current buyer needs."],
            ["Higher Engagement", "Better response rates than older or cold leads."],
            ["Less Cold Calling", "Reduces time spent on non-responsive contacts."],
            ["Competitive Advantage", "Quicker response gives an edge over other agents."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex items-start">
              <span className="text-purple-600 text-xl mr-3">✓</span>
              <p><strong>{title}:</strong> {desc}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { value: "₹ 45", label: "Avg. Cost/Lead", desc: "Recent Leads" },
            { value: "₹ 34,999", label: "Billing Amount", desc: "Minimum Order value" },
            { value: "1–3", label: "Months", desc: "Inquiry Timeline" },
          ].map(({ value, label, desc }, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-2xl text-center shadow-sm border-t-4 border-purple-300">
              <p className="text-3xl font-bold text-gray-800">{value}</p>
              <p className="text-sm font-medium text-gray-600 mt-1">{label}</p>
              <div className="mt-2 text-purple-700 font-semibold">{desc}</div>
            </div>
          ))}

          <div className="bg-gray-100 p-6 rounded-2xl text-center shadow-sm border-t-4 border-purple-300 flex flex-col items-center justify-center">
            <div className="relative w-16 h-16">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                <path className="text-purple-300" stroke="currentColor" strokeWidth="4" fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-purple-700" stroke="currentColor" strokeWidth="4" strokeDasharray="95, 100" fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
                95%
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 font-medium">Avg. Quality</p>
          </div>
        </div>
      </div>

      <div className="py-12 space-y-6 text-base leading-relaxed">
        <h2 className="text-xl font-semibold">Recent Property Inquiry Leads: Fast-Tracking Real Estate Success</h2>
        <p>
          In today’s market, speed is key. Recent property inquiry leads offer unmatched potential for real estate professionals looking to close deals quickly.
        </p>

        <h3 className="text-lg font-semibold">Why Recent Leads Matter</h3>
        <p>
          These leads are warm, relevant, and highly motivated—making them ideal for agents, brokers, and developers ready to act.
        </p>

        <h3 className="text-lg font-semibold">Key Engagement Strategies</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Immediate Follow-Up:</strong> Contact within 1–2 hours to stay top of mind.</li>
          <li><strong>Personalized Pitching:</strong> Address their specific property needs.</li>
          <li><strong>CRM Utilization:</strong> Track inquiries, automate outreach, and stay organized.</li>
          <li><strong>Responsive Content:</strong> Share listings, videos, or FAQs tailored to current buyers.</li>
          <li><strong>Feedback Loop:</strong> Ask questions to better align with buyer goals.</li>
        </ol>

        <h3 className="text-lg font-semibold">Tips to Maximize Results</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sort by Urgency:</strong> Prioritize leads showing faster decision timelines.</li>
          <li><strong>Send Timely Updates:</strong> Notify about availability and price changes.</li>
          <li><strong>Leverage Exclusivity:</strong> Provide first-access to new listings.</li>
        </ul>

        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>
          Real estate professionals who act swiftly on recent inquiries convert more leads, shorten sales cycles, and boost profitability.
        </p>
        <p>
          Focused, timely action is the key to unlocking the value of recent property leads.
        </p>
      </div>
    </div>
  );
};

export default RecentPropertyLeads;
