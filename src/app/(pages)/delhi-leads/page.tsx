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


const DelhiPropertyLeadsPage: React.FC = () => {

  // Data for the stat boxes
  const stats = [
    { value: '₹ 10', label: 'Avg. Cost/Lead', type: 'Long-Term Leads' },
    { value: '₹ 85', label: 'Avg. Cost/Lead', type: 'Recent Leads' },
    { value: '[Call Sales]', label: 'Avg. Cost/Lead', type: 'Fresh Leads' },
    { value: '95%', label: '', type: 'Avg. Quality', isCircle: true }, // Flag for special circle style
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <section className="mb-12 md:flex md:items-start md:space-x-12">
          {/* Left Side: Title, Subtitle, Buttons */}
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-800 mb-4 leading-tight">
              High-Intent Real Estate Leads for Agents, CPs & Developers in Delhi
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              LeadBuddy delivers verified leads for agents, brokers, and developers in Delhi. Choose from fresh, recent, or long-term leads for better ROI and faster closings.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <span>Get Property Leads in Delhi</span>
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

        {/* Real Estate – Property Leads in Delhi: Verified, Fresh & High-Intent Buyer Inquiries for Agents, CPs & Builders */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Real Estate – Property Leads in Delhi: Verified, Fresh & High-Intent Buyer Inquiries for Agents, CPs & Builders
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the booming Delhi real estate market, access to the right property leads can mean the difference between average monthly sales and record-breaking closings. Whether you're an independent real estate agent, a broker, a seasoned channel partner (CP), or a builder/developer launching a new project, your growth depends on one critical factor: connecting with verified, high-intent property seekers at the right time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is where LeadBuddy has changed the game in India's digital real estate marketing landscape. By offering a powerful lead generation platform, LeadBuddy helps real estate professionals purchase targeted buyer leads across all segments — including residential, commercial, luxury, land, and investment properties — with full transparency, delivery speed, and conversion potential.
          </p>
        </section>

        {/* Searching for a Real Estate Lead Generation Company in Delhi? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Searching for a Real Estate Lead Generation Company in Delhi?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you're searching online for a property lead provider in Delhi, chances are you're tired of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Wasting time with unverified or outdated databases</li>
            <li>Cold calling hundreds of leads with no results</li>
            <li>Competing with dozens of agents over the same buyer</li>
            <li>Spending heavily on PPC campaigns and digital ads that offer little ROI</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            That’s exactly why thousands of agents, CPs, and builders across Delhi NCR choose LeadBuddy.
          </p>
        </section>

        {/* Why LeadBuddy is the Best Real Estate Vendor in Delhi */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why LeadBuddy is the Best Real Estate Vendor in Delhi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LeadBuddy is not just a data vendor — it’s a performance-driven platform for real estate professionals to access:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Live leads from verified online inquiries</li>
            <li>Pre-segmented property seekers based on intent, location, and budget</li>
            <li>Buyer leads ranging from first-time homebuyers to HNI investors</li>
            <li>CRM/WhatsApp-ready data with real-time delivery</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            With buyers across Delhi exploring everything from affordable flats to luxury villas, LeadBuddy helps you target:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Individuals looking to purchase apartments in East Delhi, South Delhi, or Dwarka</li>
            <li>Investors exploring commercial properties in Noida Extension or Connaught Place</li>
            <li>Families upgrading to ready-to-move bungalows in NCR suburbs</li>
            <li>Buyers Browse for land or plot investments in upcoming development zones</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you're a builder launching a high-rise or a CP managing inventory across 5 projects, LeadBuddy’s lead ecosystem will help you close deals faster, cheaper, and more effectively.
          </p>
        </section>

        {/* Real Estate Leads Cost in Delhi: What’s the Price? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Real Estate Leads Cost in Delhi: What’s the Price?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For those searching for real estate lead cost in India — especially in a premium market like Delhi — here's the good news:
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            LeadBuddy offers tiered pricing based on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>The age of the inquiry (Fresh, Recent, or Long-Term)</li>
            <li>Buyer profile (HNI, investor, first-time buyer)</li>
            <li>Targeted location & property type</li>
            <li>Custom campaign goals</li>
          </ul>
        </section>

        {/* Tiered Cost Model */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Tiered Cost Model:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Long-Term Leads (6–12 Months Old)</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Great for patient follow-up strategies and nurturing undecided seekers.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                <li>Avg. Cost per Lead: ₹5</li>
                <li>Quality Score: 87%</li>
                <li>Minimum Billing: ₹9,999</li>
                <li>Ideal for: Agents focused on resale, older property seekers, and cost-saving outreach</li>
                <li>Lead Format: Verified database with phone/email/intent info</li>
                <li>Lead Type: Residential, Commercial, Plots, etc.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Note: These leads may take time but often lead to high-value purchases with better profit margins.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Recent Leads (1–3 Months Old)</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Buyers are still actively searching, more likely to convert.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                <li>Avg. Cost per Lead: ₹45</li>
                <li>Quality Score: 95%</li>
                <li>Minimum Billing: ₹34,999</li>
                <li>Ideal for: Builders with ready inventory, agents chasing hot inquiries, CPs focused on conversion</li>
                <li>Lead Type: Mostly residential flats, office listings, villas, and commercial inventory</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Tip: Strike while the iron is hot — these seekers are comparing projects and ready to schedule site visits.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Fresh Leads (Live/Real-Time Inquiries)</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Leads delivered within 1–2 days of inquiry.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                <li>Avg. Cost per Lead: ₹100–₹300 (Varies by campaign)</li>
                <li>Quality Score: 97%</li>
                <li>Minimum Billing: ₹1,49,999</li>
                <li>Ideal for: Builders launching new projects, CPs running high-ticket campaigns, or exclusive agents</li>
                <li>Lead Type: High-intent seekers of luxury homes, bungalows, investment plots, commercial projects</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Insight: Expect stronger conversations, higher engagement, and shorter sales cycles.</p>
            </div>
          </div>
        </section>

        {/* LeadBuddy Lead Packages (Delhi Focused) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            LeadBuddy Lead Packages (Delhi Focused)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To make things simple, LeadBuddy offers dedicated packages and plans that cater to every type of real estate professional:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Lead Age</th>
                  <th className="px-4 py-2 border-b text-left">Best For</th>
                  <th className="px-4 py-2 border-b text-left">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Long-Term (6–12 mo)</td>
                  <td className="px-4 py-2 border-b">Individual Agents</td>
                  <td className="px-4 py-2 border-b">Basic verified list, excel delivery</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Recent (1–3 mo)</td>
                  <td className="px-4 py-2 border-b">CPs & Brokers</td>
                  <td className="px-4 py-2 border-b">Mobile-ready data, faster conversion</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Fresh Leads (Live)</td>
                  <td className="px-4 py-2 border-b">Builders & Developers</td>
                  <td className="px-4 py-2 border-b">CRM delivery, segmentation, support</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Custom Sourced</td>
                  <td className="px-4 py-2">High-Value Buyers</td>
                  <td className="px-4 py-2">Custom filters for luxury projects</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">Bonus: Bulk discounts and repeat order loyalty pricing available.</p>
        </section>

        {/* Types of Property Leads Available in Delhi */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Types of Property Leads Available in Delhi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every buyer has a different goal — from purchasing a small 1 BHK in Dwarka to investing in a commercial showroom in Karol Bagh, or even buying a luxury bungalow in South Delhi. That’s why LeadBuddy doesn’t just offer “real estate leads” — it segments every lead by property type, intent, location, and budget range, allowing you to choose what suits your offering best.
          </p>

          {/* Residential Property Leads */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Property Leads</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Residential leads remain the most in-demand segment. These are great for agents, brokers, and builders dealing in:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Flats & Apartments (1BHK, 2BHK, 3BHK)</li>
              <li>Builder Floors</li>
              <li>Villas & Bungalows</li>
              <li>Luxury Homes</li>
              <li>Ready-to-Move Units</li>
              <li>Under-Construction Projects</li>
              <li>Affordable Housing Projects (for first-time homebuyers)</li>
            </ul>
            <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">Popular Residential Buyer Zones in Delhi:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>South Delhi (Greater Kailash, Hauz Khas, Defence Colony) – High-value, luxury inquiries</li>
              <li>Dwarka – Affordable flats, high-demand rental areas</li>
              <li>Rohini – Family-focused buyer base, resale demand</li>
              <li>Patel Nagar, Karol Bagh – Central Delhi with a mix of resale & new launches</li>
              <li>Laxmi Nagar, Mayur Vihar – Budget flats, ideal for brokers & CPs</li>
            </ul>
          </div>

          {/* Commercial Property Leads */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Property Leads</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Perfect for office leasing agents, commercial developers, and investment consultants. These leads include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Office Spaces</li>
              <li>Retail Showrooms</li>
              <li>Co-working Spaces</li>
              <li>Shop Leases</li>
              <li>Commercial Land</li>            </ul>
            <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">Top Commercial Hotspots in Delhi:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Connaught Place (CP) – High-profile office deals</li>
              <li>Karol Bagh & Rajouri Garden – Retail/commercial spaces</li>
              <li>Saket Business District – Co-working & leased offices</li>
              <li>Netaji Subhash Place (NSP) – IT companies and investor buyers</li>
            </ul>
          </div>

          {/* HNI & Investor Leads */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">HNI & Investor Leads</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Looking to sell high-ticket properties like:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Luxury villas</li>
              <li>Independent bungalows</li>
              <li>Farmhouses</li>
              <li>Commercial buildings</li>
              <li>Large plots</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2 mb-2">These clients are often:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>HNIs/UHNIs with clear buying intent</li>
              <li>Exploring exclusive property purchases</li>
              <li>Seeking verified listings through trusted CPs or builders</li>
            </ul>
            <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">With LeadBuddy’s HNI Lead Acquisition Service, you can:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Define filters like location, car ownership, income range, or investment preferences</li>
              <li>Get custom-sourced databases of elite property seekers</li>
              <li>Pay brokerage only after review & verification</li>
              <li>Start targeting through mobile, email, or CRM</li>
            </ul>
          </div>

          {/* Resale & Ready-to-Move Leads */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Resale & Ready-to-Move Leads</h3>
            <p className="text-gray-700 leading-relaxed mb-2">This category attracts buyers who:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Want to move in immediately</li>
              <li>Are seeking distress-sale properties</li>
              <li>Often want to purchase property with a home loan</li>
              <li>Prefer established neighborhoods over new launches</li>
            </ul>
            <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">Common buyer needs:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Verified resale inventory</li>
              <li>Builder floors in local colonies</li>
              <li>Rental income properties</li>
              <li>Resale flats in societies</li>
            </ul>
            <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">Hot resale zones in Delhi:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Vikaspuri</li>
              <li>Janakpuri</li>
              <li>Paschim Vihar</li>
              <li>Lajpat Nagar</li>
              <li>Tilak Nagar</li>
              <li>Model Town</li>
            </ul>
          </div>
        </section>

        {/* LeadBuddy’s Audience Reach Program: Next-Level Property Outreach */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            LeadBuddy’s Audience Reach Program: Next-Level Property Outreach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you’re a builder, marketing agency, or CP with your own inventory and need help reaching live buyers, LeadBuddy’s Audience Reach Program is your best bet.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">What Is It?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A done-for-you digital outreach service that helps you reach active property seekers at half the cost of ads.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">How It Works:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Free Consultation:</strong> Define your property goals, target audience, and localities.</li>
            <li><strong className="font-semibold">Custom Targeting:</strong> Based on income range, locality, project type, and buyer segment.</li>
            <li><strong className="font-semibold">Campaign Activation:</strong> LeadBuddy sends personalized SMS, WhatsApp, or email ads to interested buyers.</li>
            <li><strong className="font-semibold">Performance Reporting:</strong> Weekly delivery reports on clicks, opens, and inquiries.</li>
            <li><strong className="font-semibold">Optimization Support:</strong> Adjust reach, location, message, or frequency for higher ROI.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">Ideal for:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Builders launching projects in South Delhi or Noida</li>
            <li>Realtors with exclusive resale inventory</li>
            <li>Agents with multiple listings in mid- or high-income neighborhoods</li>
          </ul>
        </section>

        {/* Why High-Intent Leads Matter in Delhi’s Property Market */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why High-Intent Leads Matter in Delhi’s Property Market
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not all leads are created equal. In Delhi’s hyper-competitive market, it’s not just about volume — it’s about intent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            LeadBuddy specializes in delivering high-intent leads by filtering users who:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Recently submitted a property inquiry</li>
            <li>Are actively Browse real estate sites</li>
            <li>Clicked on WhatsApp or Facebook ads</li>
            <li>Engaged with project videos or ads online</li>
            <li>Attended a real estate expo or event</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            High-intent = faster closure = higher ROI.
          </p>
        </section>

        {/* How Builders & CPs Scale Faster with LeadBuddy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How Builders & CPs Scale Faster with LeadBuddy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you're a builder launching multiple projects, or a channel partner managing resale, new launches, and investor deals — scalability is your biggest challenge.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You need:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Consistent access to high-intent buyer leads</li>
            <li>Cost-efficient lead generation across property categories</li>
            <li>Automation tools for follow-up, segmentation, and outreach</li>
            <li>Real-time visibility into lead quality and conversions</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            And that’s exactly where LeadBuddy becomes a growth catalyst.
          </p>

          {/* How Builders Grow with LeadBuddy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">How Builders Grow with LeadBuddy</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Whether it’s a pre-launch in South Delhi or a new tower in Dwarka Expressway, builders need exposure and hot leads. Here’s how LeadBuddy helps:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border-b text-left">Builder Needs</th>
                    <th className="px-4 py-2 border-b text-left">LeadBuddy Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">New Project Leads</td>
                    <td className="px-4 py-2 border-b">Fresh & recent inquiries filtered by budget, property type</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">HNI Buyer Base</td>
                    <td className="px-4 py-2 border-b">Premium HNI data & luxury-focused campaigns</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">NRI Outreach</td>
                    <td className="px-4 py-2 border-b">WhatsApp + email campaigns for international inquiries</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Expo/Launch Event Promotion</td>
                    <td className="px-4 py-2 border-b">Audience Reach Program to promote events</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">CRM Integration</td>
                    <td className="px-4 py-2">Auto-deliver leads into builder CRM for quick follow-up</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How CPs Use LeadBuddy to Dominate the Market */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">How CPs Use LeadBuddy to Dominate the Market</h3>
            <p className="text-gray-700 leading-relaxed mb-2">As a channel partner, you need flexible lead access across:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Multiple builder projects</li>
              <li>Resale listings</li>
              <li>Location-specific demand (Noida, West Delhi, etc.)</li>
              <li>HNI buyers for big-ticket closures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2 mb-2">LeadBuddy offers CP-specific packages with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>Custom leads per project</li>
              <li>Multi-type listings (flats, villas, office, plots)</li>
              <li>Mobile/Excel-ready databases</li>
              <li>Access to resale & long-term lead inventory</li>
              <li>Bulk order discounts and repeat order plans</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2 mb-2">CPs who consistently use LeadBuddy report:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li>25–30% increase in conversion ratios</li>
              <li>Up to ₹15–₹25 lakh per month in added brokerage income</li>
              <li>Better follow-up visibility and client handling</li>
            </ul>
          </div>
        </section>

        {/* LeadBuddy vs Other Vendors – Why It Wins */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            LeadBuddy vs Other Vendors – Why It Wins
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are dozens of real estate lead vendors in India, but LeadBuddy stands apart for one major reason: quality + strategy = ROI.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Feature</th>
                  <th className="px-4 py-2 border-b text-left">LeadBuddy</th>
                  <th className="px-4 py-2 border-b text-left">Generic Vendors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Verified Mobile Leads</td>
                  <td className="px-4 py-2 border-b">Yes</td>
                  <td className="px-4 py-2 border-b">Mostly outdated</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Custom Filters</td>
                  <td className="px-4 py-2 border-b">Yes (by property type, location, price)</td>
                  <td className="px-4 py-2 border-b">No filtering</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Delivery Speed</td>
                  <td className="px-4 py-2 border-b">Real-time for fresh leads</td>
                  <td className="px-4 py-2 border-b">Delayed, bulk drops</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Support</td>
                  <td className="px-4 py-2 border-b">Dedicated account manager</td>
                  <td className="px-4 py-2 border-b">Minimal or ticket-based</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">HNI & Investor Data</td>
                  <td className="px-4 py-2 border-b">Available via acquisition service</td>
                  <td className="px-4 py-2 border-b">Not offered</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Audience Campaigns</td>
                  <td className="px-4 py-2 border-b">Done-for-you outreach</td>
                  <td className="px-4 py-2 border-b">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">CRM & WhatsApp Delivery</td>
                  <td className="px-4 py-2 border-b">Supported</td>
                  <td className="px-4 py-2 border-b">Manual lists only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Area-Specific Leads</td>
                  <td className="px-4 py-2 border-b">Yes (Delhi, Noida, Gurgaon)</td>
                  <td className="px-4 py-2 border-b">General location only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Bulk Discounts</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Rarely offered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion: The Smarter Way to Get Property Leads in Delhi */}
        <section className="py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Conclusion: The Smarter Way to Get Property Leads in Delhi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In a competitive real estate market like Delhi, working with the right lead provider can save time, reduce cost, and boost your sales pipeline.
          </p>
          <p className="text-lg font-semibold text-purple-700 mb-4">
            LeadBuddy offers verified, high-intent property leads tailored for agents, brokers, CPs, and builders. With flexible packages, filtered data, and real-time delivery, it's the smart choice for anyone serious about growing in Delhi NCR.
          </p>
          <p className="mt-4 text-gray-600">
            Visit <a href="https://LeadBuddy.in" className="text-purple-600 hover:underline">LeadBuddy.in</a> to get started today and connect with active property buyers across Delhi.
          </p>
        </section>

      </div>
    </div>
  );
};

export default DelhiPropertyLeadsPage;