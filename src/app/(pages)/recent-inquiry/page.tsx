'use client';

import React from 'react';
import Link from 'next/link';

const InfoCard = ({ title, subtitle, description }) => (
  <div className="bg-gray-100 p-5 rounded text-center">
    <p className="text-xl font-bold">{title}</p>
    <p className="text-sm">{subtitle}</p>
    <p>{description}</p>
  </div>
);

const BulletPoint = ({ text }) => (
  <div className="flex items-start gap-2 mb-4">
    <span className="text-xl text-purple-700">✓</span>
    <p dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">{children}</h2>
);

const RecentPropertyLeads = () => {
  return (
    <div className="font-sans text-gray-800 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-3">
          Recent Property Leads: The Key to Engaging High-Intent Buyers and Closing More Deals
        </h1>
        <p className="text-lg mb-6">
          Maximizing Conversions: The Power of Recent Inquiry Leads.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/leadcostcalculator">
            <button className="border border-gray-300 px-5 py-2 rounded bg-white hover:shadow">
              <span className="mr-2">🧮</span> Calculate Your Lead Cost
            </button>
          </Link>
          <button className="border border-gray-300 px-5 py-2 rounded bg-white hover:shadow">
            I'm Interested! →
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          {[
            '<strong>High Buyer Intent:</strong> Leads are actively searching for properties, making them more likely to convert quickly.',
            '<strong>Fresh Opportunities:</strong> Recent inquiries reflect current interest, allowing immediate engagement.',
            '<strong>Shorter Sales Cycle:</strong> Prospects are often further along in their decision-making, reducing the time to close a deal.',
            '<strong>Focused Outreach:</strong> You can tailor your approach based on recent interest, ensuring more relevant communication.',
            '<strong>Less Cold Calling:</strong> With active leads, the need for time-consuming cold outreach is reduced.',
            '<strong>Higher Engagement Rates:</strong> Recent inquiries typically result in better response rates compared to older leads.',
            '<strong>Competitive Advantage:</strong> Acting quickly on recent inquiries allows you to engage buyers before competitors.'
          ].map((text, i) => (
            <BulletPoint key={i} text={text} />
          ))}
        </div>

        <div className="lg:w-2/5 grid grid-cols-2 gap-4">
          <InfoCard title="₹ 45" subtitle="Avg. Cost/Lead" description="Recent Inquiry Leads" />
          <InfoCard title="₹ 34,999" subtitle="Billing Amount" description="Minimum Order value" />
          <InfoCard title="1-3" subtitle="Months" description="Inquiry Timeline" />
          <div className="bg-gray-100 p-5 rounded flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-purple-700 text-white text-xl font-bold flex items-center justify-center">
              95%
            </div>
            <p className="mt-2">Avg. Quality</p>
          </div>
        </div>
      </div>

      <div className="text-black mt-10">
        <SectionTitle>Maximize Your Success with Recent Property Inquiry Leads</SectionTitle>
        <p>
          Are you looking for a way to accelerate your real estate business? Recent property inquiry leads provide you with high-intent prospects who are actively seeking properties. By utilizing these leads, agents, brokers, developers, and marketing firms can close deals faster and more efficiently. Learn how to turn these inquiries into profitable conversions with our expert tips and insights.
        </p>

        <SectionTitle>Unlock the Value of Recent Inquiry Property Leads</SectionTitle>
        <p>
          In the fast-paced world of real estate, staying ahead of the competition requires not only sharp skills but also the right resources. One of the most effective ways to gain a competitive edge is by leveraging <strong>Recent Inquiry Property Leads</strong>. These leads represent individuals who have shown interest in purchasing property within the last few weeks or months—making them a goldmine for agents, brokers, developers, and marketing firms alike.
        </p>

        <SectionTitle>Who Benefits Most From Recent Inquiry Leads?</SectionTitle>
        <h3 className="text-xl font-semibold mt-6">Agents and Brokers:</h3>
        <p>
          For real estate agents and brokers, these leads can fast-track your success. Rather than spending time chasing cold leads, you can focus on clients who are actively searching for properties.
        </p>

        <h3 className="text-xl font-semibold mt-6">Developers:</h3>
        <p>
          Property developers benefit from recent leads by gaining insights into what potential buyers are currently seeking. This helps fine-tune your offerings and marketing strategies.
        </p>

        <h3 className="text-xl font-semibold mt-6">Marketing Firms:</h3>
        <p>
          With recent inquiry leads, marketing firms can design personalized campaigns that resonate more effectively with prospective buyers.
        </p>

        <SectionTitle>Practical Tips for Maximizing Recent Inquiry Leads</SectionTitle>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Follow Up Quickly and Consistently:</strong> Respond promptly to engage leads before competitors do.</li>
          <li><strong>Personalize Your Outreach:</strong> Tailor communication based on property preferences and locations.</li>
          <li><strong>Nurture Leads With Relevant Information:</strong> Keep them engaged with valuable content like guides or listings.</li>
          <li><strong>Leverage Technology for Better Management:</strong> Use CRM tools to automate and track follow-ups.</li>
          <li><strong>Understand Buyer Motivations:</strong> Discover what drives your leads and address those needs in your pitch.</li>
          <li><strong>Stay Competitive With Exclusive Offers:</strong> Provide unique incentives to increase conversion.</li>
        </ul>

        <SectionTitle>Common Challenges and How to Overcome Them</SectionTitle>
        <h4 className="font-semibold mt-4">Patience and Persistence:</h4>
        <p>
          Not all leads convert immediately—maintain consistent contact without being pushy.
        </p>
        <h4 className="font-semibold mt-4">Provide Value Without Pressure:</h4>
        <p>
          Share useful content that builds trust, even if the lead isn’t ready to act right away.
        </p>

        <SectionTitle>Why Contacting Us for Recent Inquiry Leads is Your Next Best Step</SectionTitle>
        <p>
          Recent inquiry property leads are a powerful tool for real estate professionals. They offer direct access to high-intent prospects, helping you improve conversion rates and grow your business.
        </p>
        <p>
          We specialize in high-quality, actionable property leads tailored to agents, developers, and marketing professionals looking to scale faster.
        </p>
      </div>
    </div>
  );
};

export default RecentPropertyLeads;
