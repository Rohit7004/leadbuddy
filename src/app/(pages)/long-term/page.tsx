'use client';

import React from 'react';
import Link from 'next/link';

const LongTermPropertyLeads = () => {
  return (
    <div className="font-sans text-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="text-center py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Patience Pays: Worth the Wait, Long-Term Property Inquiry Leads
        </h1>
        <p className="text-lg mb-6">
          Optimize long-term growth through strategic lead nurturing of Long-Term Inquiries Leads.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/leadcostcalculator">
            <button className="w-full sm:w-auto flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 bg-white hover:shadow-md transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
              Calculate Your Lead Cost
            </button>
          </Link>

          <Link href="/leadform">
            <button className="border border-gray-300 rounded-md px-4 py-2 bg-white hover:shadow-md transition">
              I'm Interested! →
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 py-8">
        <div className="lg:w-3/5 space-y-4">
          {[
            ["Matured Needs", "Their needs might have evolved, making them ready to act."],
            ["Reduced Competition", "Fewer agents might be competing for their attention now."],
            ["Better Prepared Buyers", "Leads are often more informed and ready to make decisions."],
            ["Lead Warmth", "Time can turn cold leads into warm ones, ready to engage."],
            ["Follow-Up Impact", "Effective follow-ups can convert previously undecided inquiries."],
            ["Cost Efficiency", "Typically less expensive to nurture existing leads than to acquire new ones."],
            ["Higher Profit Margins", "Longer-term leads often result in higher-value transactions."],
          ].map(([title, desc], idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-purple-600 text-xl mr-3">✓</span>
              <p><strong>{title}:</strong> {desc}</p>
            </div>
          ))}
        </div>

        {/* Updated Metric Cards */}
        <div className="lg:w-2/5 grid grid-cols-2 gap-4">
          {[
            {
              value: "₹ 5",
              label: "Avg. Cost/Lead",
              desc: "Long-Term Leads"
            },
            {
              value: "₹ 9,999",
              label: "Billing Amount",
              desc: "Minimum Order value"
            },
            {
              value: "6–12",
              label: "Months",
              desc: "Inquiry Timeline"
            },
          ].map(({ value, label, desc }, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl text-center shadow-sm border-t-4 border-purple-300">
              <p className="text-3xl font-bold text-gray-800">{value}</p>
              <p className="text-sm font-medium text-gray-600 mt-1">{label}</p>
              <div className="mt-2 text-purple-700 font-semibold">{desc}</div>
            </div>
          ))}

          <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm border-t-4 border-purple-300 flex flex-col items-center justify-center">
            <div className="relative w-16 h-16">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-purple-300"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-purple-700"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="87, 100"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
                87%
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 font-medium">Avg. Quality</p>
          </div>
        </div>
      </div>

      <div className="py-8 space-y-6">
        <h2 className="text-xl font-semibold">Unlocking the Potential of Long-Term Property Inquiry Leads: A Comprehensive Guide for Real Estate Professionals</h2>
        <p>
          In the highly competitive field of real estate, long-term property inquiry leads are a very good opportunity...
        </p>

        <h3 className="text-lg font-semibold">Long-Term Leads Are Valuable</h3>
        <p>
          Long-term leads are inquiries that were not converted at the moment but with potential to become a buyer...
        </p>

        <h3 className="text-lg font-semibold">Key Strategies to Develop Long-Term Leads</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Personalized Re-Engagement:</strong> Revisit the first interaction...</li>
          <li><strong>Educational Outreach:</strong> Position yourself as a resource...</li>
          <li><strong>Regular Follow-Up:</strong> Keep a follow-up schedule systematized...</li>
          <li><strong>Leverage Technology:</strong> Use technology to smooth the lead nurturing process...</li>
          <li><strong>Feedback Mechanism:</strong> The message should encourage feedback...</li>
        </ol>

        <h3 className="text-lg font-semibold">Practical Tips for Effective Lead Management</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Segment Your Leads:</strong> All your long-term leads are not the same...</li>
          <li><strong>Exclusive Information:</strong> It gives the first availability of information to the leads...</li>
          <li><strong>Develop a Content Strategy:</strong> Create content to discuss frequently asked questions...</li>
        </ul>

        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>
          To real estate professionals, long-term property inquiry leads aren't just cold contacts...
        </p>
        <p>
          Such a focus helps close leads into customers through bespoke strategies made for their needs and desires...
        </p>
      </div>
    </div>
  );
};

export default LongTermPropertyLeads;
