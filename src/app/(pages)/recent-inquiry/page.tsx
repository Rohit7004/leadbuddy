'use client';

import React from 'react';
import Link from 'next/link';

type InfoCardProps = {
  value: string;
  label: string;
  desc: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ value, label, desc }) => (
  <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm border-t-4 border-purple-300">
    <p className="text-3xl font-bold text-gray-800">{value}</p>
    <p className="text-sm font-medium text-gray-600 mt-1">{label}</p>
    <div className="mt-2 text-purple-700 font-semibold">{desc}</div>
  </div>
);

type BulletPointProps = {
  text: string;
};

const BulletPoint: React.FC<BulletPointProps> = ({ text }) => (
  <div className="flex items-start gap-2 mb-4">
    <span className="text-xl text-purple-700">✓</span>
    <p dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">{children}</h2>
);

const RecentPropertyLeads: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Recent Property Leads: The Key to Engaging High-Intent Buyers and Closing More Deals
        </h1>
        <p className="text-lg mb-6">
          Maximizing Conversions: The Power of Recent Inquiry Leads.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/leadcostcalculator">
            <button className="w-full sm:w-auto flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 bg-white hover:shadow-md transition">
              🧮 <span className="ml-2">Calculate Your Lead Cost</span>
            </button>
          </Link>
          <button className="border border-gray-300 rounded-md px-4 py-2 bg-white hover:shadow-md transition">
            I'm Interested! →
          </button>
        </div>
      </div>

      {/* Bullet Points & Cards */}
      <div className="flex flex-col lg:flex-row gap-8 py-8">
        <div className="lg:w-3/5 space-y-4">
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
          <InfoCard value="₹ 45" label="Avg. Cost/Lead" desc="Recent Inquiry Leads" />
          <InfoCard value="₹ 34,999" label="Billing Amount" desc="Minimum Order value" />
          <InfoCard value="1–3" label="Months" desc="Inquiry Timeline" />
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
                  strokeDasharray="95, 100"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
                95%
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 font-medium">Avg. Quality</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-black mt-10 space-y-8">
        <div>
          <SectionTitle>Maximize Your Success with Recent Property Inquiry Leads</SectionTitle>
          <p>
            Are you looking for a way to accelerate your real estate business? Recent property inquiry leads provide you with high-intent prospects who are actively seeking properties. By utilizing these leads, agents, brokers, developers, and marketing firms can close deals faster and more efficiently. Learn how to turn these inquiries into profitable conversions with our expert tips and insights.
          </p>
        </div>

        <div>
          <SectionTitle>Unlock the Value of Recent Inquiry Property Leads</SectionTitle>
          <p>
            In the fast-paced world of real estate, staying ahead of the competition requires not only sharp skills but also the right resources. One of the most effective ways to gain a competitive edge is by leveraging <strong>Recent Inquiry Property Leads</strong>. These leads represent individuals who have shown interest in purchasing property within the last few weeks or months—making them a goldmine for agents, brokers, developers, and marketing firms alike.
          </p>
        </div>

        <div>
          <SectionTitle>Who Benefits Most From Recent Inquiry Leads?</SectionTitle>
          <h3 className="text-lg font-semibold mt-4">Agents and Brokers:</h3>
          <p>
            For real estate agents and brokers, these leads can fast-track your success. Rather than spending time chasing cold leads, you can focus on clients who are actively searching for properties.
          </p>

          <h3 className="text-lg font-semibold mt-4">Developers:</h3>
          <p>
            Property developers benefit from recent leads by gaining insights into what potential buyers are currently seeking. This helps fine-tune your offerings and marketing strategies.
          </p>

          <h3 className="text-lg font-semibold mt-4">Marketing Firms:</h3>
          <p>
            With recent inquiry leads, marketing firms can design personalized campaigns that resonate more effectively with prospective buyers.
          </p>
        </div>

        <div>
          <SectionTitle>Practical Tips for Maximizing Recent Inquiry Leads</SectionTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Follow Up Quickly and Consistently:</strong> Respond promptly to engage leads before competitors do.</li>
            <li><strong>Personalize Your Outreach:</strong> Tailor communication based on property preferences and locations.</li>
            <li><strong>Nurture Leads With Relevant Information:</strong> Keep them engaged with valuable content like guides or listings.</li>
            <li><strong>Leverage Technology for Better Management:</strong> Use CRM tools to automate and track follow-ups.</li>
            <li><strong>Understand Buyer Motivations:</strong> Discover what drives your leads and address those needs in your pitch.</li>
            <li><strong>Stay Competitive With Exclusive Offers:</strong> Provide unique incentives to increase conversion.</li>
          </ul>
        </div>

        <div>
          <SectionTitle>Common Challenges and How to Overcome Them</SectionTitle>
          <h4 className="font-semibold mt-4">Patience and Persistence:</h4>
          <p>
            Not all leads convert immediately—maintain consistent contact without being pushy.
          </p>
          <h4 className="font-semibold mt-4">Provide Value Without Pressure:</h4>
          <p>
            Share useful content that builds trust, even if the lead isn’t ready to act right away.
          </p>
        </div>

        <div>
          <SectionTitle>Why Contacting Us for Recent Inquiry Leads is Your Next Best Step</SectionTitle>
          <p>
            Recent inquiry property leads are a powerful tool for real estate professionals. They offer direct access to high-intent prospects, helping you improve conversion rates and grow your business.
          </p>
          <p>
            We specialize in high-quality, actionable property leads tailored to agents, developers, and marketing professionals looking to scale faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentPropertyLeads;
