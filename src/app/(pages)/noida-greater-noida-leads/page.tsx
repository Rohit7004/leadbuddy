import React from 'react';
//import './index.css'; // Assuming you have a separate index.css for any global styles or Tailwind directives

// Example SVG icons (replace with your actual icons or a library like react-icons)
const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);


const NoidaPropertyLeadsPage: React.FC = () => {

  // Data for the stat boxes
  const stats = [
    { value: '₹ 10', label: 'Avg. Cost/Lead', type: 'Long-Term Leads' },
    { value: '₹ 85', label: 'Avg. Cost/Lead', type: 'Recent Leads' },
    { value: '[Call Sales]', label: 'Avg. Cost/Lead', type: 'Fresh Leads' },
    { value: '96%', label: '', type: 'Avg. Quality', isCircle: true }, // Flag for special circle style
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <section className="mb-12 md:flex md:items-start md:space-x-12">
          {/* Left Side: Title, Subtitle, Buttons */}
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-800 mb-4 leading-tight">
              Real Estate - Property Leads in Noida & Greater Noida: Verified, High-Intent Buyer Data for Agents, CPs & Builders
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              In today’s competitive property market, staying ahead is crucial. Our high-quality, verified leads in Noida and Greater Noida are precisely what you need to connect with serious buyers and close deals efficiently.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <span>Get Property Leads in Noida & Greater Noida</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="md:w-2/5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-purple-50/50 p-4 rounded-lg text-center border border-purple-100 flex flex-col items-center justify-center ${stat.isCircle ? 'aspect-square' : 'min-h-[110px]'}`} // Make circle square
                >
                  {stat.isCircle ? (
                    // Special styling for the circle
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                      {stat.value}
                    </div>
                  ) : (
                    // Standard stat value styling
                    <div className={`text-3xl font-bold ${stat.value === '[Call Sales]' ? 'text-blue-600' : 'text-slate-800'}`}>
                      {stat.value}
                    </div>
                  )}
                  {stat.label && (
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  )}
                  <div className="text-sm font-medium text-purple-800/90 mt-1">{stat.type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Leads Are the New Currency in Noida Real Estate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Leads Are the New Currency in Noida Real Estate
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the dynamic real estate market of Noida and Greater Noida, success hinges on one critical factor: high-quality leads. Forget cold calls, outdated databases, or unreliable portals. What you need are verified, high-intent leads that translate directly into sales. As the region continues its rapid infrastructural developments and attracts a diverse population seeking modern living spaces, the demand for genuine property seekers is at an all-time high. This makes access to a steady stream of qualified leads not just beneficial but essential for sustained growth and profitability in Noida’s competitive real estate arena.
          </p>
        </section>

        {/* The Noida Challenge: Why Localized Leads Are Crucial */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            The Noida Challenge: Why Localized Leads Are Crucial
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Navigating the property landscape in Noida and Greater Noida presents unique challenges. The market is vast and varied, with different sectors attracting different types of buyers. Generic leads often fall flat because they don’t align with the specific demands of these diverse micro-markets. For instance, a lead interested in a luxury villa in Sector 150 has vastly different expectations from an HNI looking for commercial property in Sector 70. This is where the power of localized, targeted leads comes into play.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Property category (residential, commercial, etc.)</li>
            <li>Buyer intent (first-time homebuyers, investors, end-users)</li>
            <li>Budget range (affordable, mid-range, luxury)</li>
            <li>Area of interest (Sector 75, Pari Chowk, Jaypee Greens, etc.)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            By focusing on these specific criteria, you can connect with prospects who are genuinely interested in what you’re offering, saving you time and resources. Our lead generation engine is built to filter leads based on these requirements—providing localized, targeted, and verified high-intent leads for acquisition—thereby maximizing your conversion potential.
          </p>
        </section>

        {/* Looking for a Real Estate Lead Generation Company in Noida? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Looking for a Real Estate Lead Generation Company in Noida?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your search ends here. We specialize in delivering premium property leads in Noida and Greater Noida that are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Sourced ethically via strategic digital campaigns</li>
            <li>Qualified, ensuring a higher likelihood of conversion</li>
            <li>Targeted at active and motivated buyer segments</li>
            <li>Delivered promptly in a format that’s easy to manage</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Partnering with us means you’re not just getting leads; you’re investing in a streamlined process that fuels your sales pipeline with genuine, interested buyers ready to take the next step.
          </p>
        </section>

        {/* What Makes LeadBuddy Different in Noida? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What Makes LeadBuddy Different in Noida?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In a sea of generic lead providers, we stand out by focusing on quality, relevance, and a deep understanding of the Noida real estate market. Here’s what sets LeadBuddy apart:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Residential leads for every budget in Sector 75, 150, and 137</li>
            <li>Investment property leads across Yamuna Expressway and beyond</li>
            <li>Commercial property inquiries from key business hubs</li>
            <li>Luxury home buyer data in Greater Noida and posh sectors</li>
            <li>Verified leads from digital campaigns targeting TechZone, Alpha 1, Pari Chowk</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Unlike aggregators that provide shared or outdated data, our leads are fresh, exclusive (depending on the plan), and tailored to your specific needs. We ensure that every lead has a higher propensity to convert, saving you valuable time and resources.
          </p>
        </section>

        {/* Real Estate Leads Costs in Noida: What Determines Pricing? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Real Estate Leads Costs in Noida: What Determines Pricing?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The cost of real estate leads in Noida can vary based on several factors, including the type of lead (fresh, recent, long-term), their exclusivity, and urgency. For example, a buyer searching for a ₹1.5 Cr+ property in Sector 150 will likely be a premium lead compared to a general inquiry. Our pricing model is transparent and designed to offer the best value for your investment, ensuring you receive high-quality leads that align with your business objectives and budget.
          </p>
        </section>

        {/* Tiered Cost Model: */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Tiered Cost Model:
          </h2>
          <ul className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed pl-4">
            <li>
              <strong className="font-semibold">Long-Term Leads (6-12 months old)</strong>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4 mt-2">
                <li>Budget-friendly</li>
                <li>Ideal for nurturing leads over time</li>
                <li>Good for exploring future opportunities in Greater Noida West</li>
              </ul>
            </li>
            <li>
              <strong className="font-semibold">Recent Leads (1-3 months old)</strong>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4 mt-2">
                <li>Higher engagement potential</li>
                <li>Suited for immediate follow-ups</li>
                <li>Perfect for properties in Sectors 70-78</li>
              </ul>
            </li>
            <li>
              <strong className="font-semibold">Fresh Leads (Live Delivery)</strong>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4 mt-2">
                <li>Highest conversion probability</li>
                <li>Delivered in real-time (1-day inquiry)</li>
                <li>Best for premium properties and quick closures in Noida Expressway areas</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Lead Format & Delivery: */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Lead Format & Delivery:
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We ensure that you receive leads in a format that’s efficient and actionable, allowing for seamless integration into your CRM or follow-up process. Each lead typically includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Verified mobile number</li>
            <li>Email address (where available)</li>
            <li>Property category (residential, commercial, plot, etc.)</li>
            <li>Preferred location or sector</li>
            <li>Budget range (e.g., 50 Lacs - 1 Crore)</li>
            <li>Lead stage (Hot, Warm, or Cold)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Leads are delivered via:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Email alerts</li>
            <li>SMS notifications</li>
            <li>Real-time dashboard access</li>
            <li>Optional CRM integration</li>
          </ul>
        </section>

        {/* How LeadBuddy Sources Leads in Noida */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How LeadBuddy Sources Leads in Noida
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our lead generation strategy is multi-faceted and designed to capture high-intent buyers actively seeking properties in Noida and Greater Noida. We leverage a combination of cutting-edge digital marketing techniques and in-depth market analysis to ensure the leads you receive are not just numerous but also of the highest quality. Our approach includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Targeted online advertising campaigns (Google Ads, social media ads)</li>
            <li>Search engine optimization (SEO) to attract organic buyer traffic</li>
            <li>Content marketing that educates and attracts potential buyers</li>
            <li>Partnerships with local property portals and influencers</li>
            <li>Data analytics to refine and optimize lead generation processes</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We continuously adapt our strategies based on market trends and buyer behavior to ensure a consistent flow of qualified leads that meet your specific criteria.
          </p>
        </section>

        {/* Lead Sources: */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Lead Sources:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Prospective buyers who fill out inquiry forms on our website or partner sites.</li>
            <li>Individuals who respond to our targeted digital advertising campaigns.</li>
            <li>Users who engage with our property-related content online.</li>
            <li>Referrals and networking within the Noida real estate community.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            All leads are carefully vetted to ensure their authenticity and seriousness, providing you with a reliable source of potential clients.
          </p>
        </section>

        {/* Delivery Options: */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Delivery Options:
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choose the delivery method that best fits your workflow:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Excel Sheet:</strong> Daily or weekly delivery to your inbox for easy import into your systems.</li>
            <li><strong className="font-semibold">WhatsApp Instant Alerts:</strong> Get leads dropped to your number in real-time.</li>
            <li><strong className="font-semibold">CRM Integration:</strong> Seamless integration with popular CRM platforms.</li>
            <li><strong className="font-semibold">Automated SMS:</strong> Instant alerts via SMS to your team.</li>
            <li><strong className="font-semibold">Dedicated Account Manager:</strong> Access to view, tag, follow-up, and track lead performance.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our flexible delivery options are designed to accommodate your team’s structure and workflow—whether you’re a solo agent or a channel partner with a distributed sales team.
          </p>
        </section>

        {/* Lead Structure - What's Inside */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Lead Structure - What's Inside
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gain comprehensive insights with each lead:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Verified Name & Mobile Number</li>
            <li>Area/Location of Interest (e.g., Sector 75, Yamuna Expressway)</li>
            <li>Budget (e.g., 50 Lacs - 1.5 Cr, Above 2 Cr)</li>
            <li>Property Type (Apartment, Villa, Plot, Commercial)</li>
            <li>Source/Campaign (e.g., Google Ads, Social Media)</li>
            <li>Inquiry Date & Time (Crucial for Fresh Leads)</li>
            <li>Lead Stage (New Inquiry, Follow-Up, Site Visit Scheduled)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            This level of detail ensures your team can prioritize and follow up effectively, significantly boosting your conversion rates.
          </p>
        </section>

        {/* Why LeadBuddy Outperforms Other Vendors in Noida */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why LeadBuddy Outperforms Other Vendors in Noida
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our focus is on delivering leads that are not just numbers but genuine opportunities. Here’s how we ensure that LeadBuddy’s leads outperform the competition:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Feature</th>
                  <th className="px-4 py-2 border-b text-left">LeadBuddy</th>
                  <th className="px-4 py-2 border-b text-left">Typical Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Geo-Specific Targeting</td>
                  <td className="px-4 py-2 border-b">Yes (Sector, micro-zone level)</td>
                  <td className="px-4 py-2 border-b">Generic ("NCR-wide" data)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Investor Tagging</td>
                  <td className="px-4 py-2 border-b">Yes (HNI, bulk buyer)</td>
                  <td className="px-4 py-2 border-b">Not Available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Verified Data</td>
                  <td className="px-4 py-2 border-b">96%</td>
                  <td className="px-4 py-2 border-b">Often outdated or purchased in bulk</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Live Inquiry Message Support</td>
                  <td className="px-4 py-2 border-b">Full conversation view</td>
                  <td className="px-4 py-2 border-b">Usually unavailable</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Innovative Outreach Options</td>
                  <td className="px-4 py-2 border-b">Text, WhatsApp, and Email</td>
                  <td className="px-4 py-2 border-b">Primarily call-based</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Lead Delivery Speed</td>
                  <td className="px-4 py-2 border-b">Real-time or daily batches</td>
                  <td className="px-4 py-2 border-b">Weekly or static lists</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Support Team</td>
                  <td className="px-4 py-2">Account manager + strategy calls</td>
                  <td className="px-4 py-2">Usually only tech support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Region-Specific Bonus: Jewar Airport Influence */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Region-Specific Bonus: Jewar Airport Influence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LeadBuddy is one of the only platforms already capturing leads that mention “plot near Jewar Airport” or “investment near Yamuna Expressway.” This search trend has been growing rapidly post-2023, and serious CPs and land consultants are already using LeadBuddy to target:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Early mover advantage in a high-growth corridor</li>
            <li>Targeted leads interested in long-term investments</li>
            <li>Potential for premium property sales in the near future</li>
            <li>Investor interest generated in nearby industrial sectors</li>
          </ul>
        </section>

        {/* Final Thoughts: LeadBuddy Is Built for Noida's Real Estate Landscape */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Final Thoughts: LeadBuddy Is Built for Noida's Real Estate Landscape
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            From resale markets in Sector 76 to luxury launches in Sector 150 and plot demand near Jewar Airport, Noida and Greater Noida are no longer secondary zones—they’re primary growth hubs. What makes success possible here is not just good inventory, but the ability to connect with real, verified, local buyers who are actively searching.
          </p>
        </section>

        {/* Why LeadBuddy Is the Right Fit for You */}
        <section className="py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why LeadBuddy Is the Right Fit for You
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 leading-relaxed pl-4 mb-6">
            <li>Verified and high-intent buyer and renter leads</li>
            <li>Leads segmented by Sector (75, 150, Yamuna Expressway) and budget</li>
            <li>Custom lead nurturing support to maximize conversions</li>
            <li>Scalable solutions that grow with your business</li>
            <li>Dedicated account manager and onboarding support</li>
            <li>Custom lead sourcing for Jewar Airport and NH-91 buyers</li>
          </ul>
          <p className="text-lg font-semibold text-purple-700">
            With our tools and strategic support, your real estate business in Noida is set for unprecedented growth.
          </p>
          <p className="mt-4 text-gray-600">
            Don't get left behind. <a href="#" className="text-purple-600 hover:underline">Request a demo</a> or <a href="#" className="text-purple-600 hover:underline">contact us today</a> to learn more about how LeadBuddy can transform your lead generation process in Noida and Greater Noida.
          </p>
        </section>

      </div>
    </div>
  );
};

export default NoidaPropertyLeadsPage;