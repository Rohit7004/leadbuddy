import React from 'react';

// Define an interface for the numbered step data (optional but good practice)
interface Step {
  id: number;
  title: string;
  description: string;
}

const RealEstateMarketingPage: React.FC = () => {
  const steps: Step[] = [
    { id: 1, title: "Identify Your Client's Target Audience", description: "Understand the client's market (city, budget, property type)." },
    { id: 2, title: "Select a Lead Package", description: "Choose Leads package that align with your client's campaign strategy." },
    { id: 3, title: "Customize and Purchase Leads", description: "Filter by demographics, get pricing, and make payment." },
    { id: 4, title: "Optimize Campaigns for Your Client", description: "Use the tailored leads to launch effective marketing campaigns." },
  ];

  const renderStep = (step: Step) => (
    <div key={step.id} className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full text-white font-semibold text-sm">
        {step.id}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{step.title}</h4>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <section className="mb-16 lg:flex lg:items-start lg:space-x-12">
          {/* Left Text Block */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Supercharge Your Real Estate Marketing with Premium Property Inquiry Leads
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Unlock the potential of top-tier property leads to elevate your marketing campaigns and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
                Import Property Leads!
              </button>
              <button className="bg-white hover:bg-gray-100 text-purple-600 font-medium py-2 px-6 rounded-md border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center space-x-2">
                <span>View FAQs</span>
                {/* Simple Arrow Right Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Numbered List */}
          <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-6">
              {steps.map(renderStep)}
            </div>
          </div>
        </section>

        {/* Improve Your Campaigns Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Improve Your Campaigns with Enhanced Leads</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Real estate marketing firms must operate with the best property leads in the very competitive real estate market to provide benefits for their clients. Our specialty at LeadBuddy is offering <strong className="font-semibold">semi-exclusive property inquiry leads</strong> catered to your particular marketing requirements. From <strong className="font-semibold">first-time homeowners</strong> to <strong className="font-semibold">HNI investors</strong> searching for <strong className="font-semibold">luxury houses</strong>, <strong className="font-semibold">offices</strong>, or <strong className="font-semibold">villas</strong>, we provide access to <strong className="font-semibold">verified high-intent property seekers</strong> regardless of your focus—<strong className="font-semibold">commercial</strong> or <strong className="font-semibold">residential</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            LeadBuddy will help your agency stop squandering money on dubious or non-exclusive data. Rather, you will be able to provide your clients with a competitive edge from <strong className="font-semibold">semi-exclusive leads</strong>, so guaranteeing faster conversions and improved return on investment for your <strong className="font-semibold">digital marketing</strong> initiatives.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Benefits</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Specializing in recent leads</strong>—High-intention inquiries from the past 0-3 months—we provide semi-exclusive access to these leads. These opportunities are ready for follow-up and perfect for campaigns needing instant follow-ups.</li>
            <li>Unlike the non-exclusive leads offered to <strong className="font-semibold">agents</strong> and <strong className="font-semibold">brokers</strong>, our <strong className="font-semibold">semi-exclusive leads</strong> provide your agency a competitive advantage. These leads are distributed to a small number of other companies, so guaranteeing less competition for your clients in obtaining prospects.</li>
            <li>Find <strong className="font-semibold">verified property leads filtered</strong> by <strong className="font-semibold">location</strong>, <strong className="font-semibold">budget</strong>, <strong className="font-semibold">property type</strong> (e.g., luxury homes, apartments, bungalows, plots, etc.), and inquiry time from our <strong className="font-semibold">database list</strong>. Whether your aim is <strong className="font-semibold">HNI investors</strong> or <strong className="font-semibold">first-time homeowners</strong>, you are consistently attracting the correct <strong className="font-semibold">property seekers</strong>.</li>
            <li><strong className="font-semibold">Affordable Lead Packages</strong>: We can assure that your campaigns are not only successful but also economical by means of highly competitive prices and discounts on large purchases.</li>
          </ul>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why would you choose us?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Leading real estate lead provider in India, LeadBuddy provides <strong className="font-semibold">semi-exclusive leads</strong> meant especially for marketing companies. Here's our unique quality:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Only Recent Leads</strong>: We concentrate just on <strong className="font-semibold">recent leads</strong> fit for quick response. These leads can be interacted with when their interest is maximum since they have made inquiries throughout the last <strong className="font-semibold">0 to three months</strong>.</li>
            <li><strong className="font-semibold">Higher Conversion Rates through Targeted Marketing</strong>: Our leads are filtered by location, property type, and buyer intent, allowing you to run highly targeted marketing campaigns.</li>
            <li><strong className="font-semibold">Bulk Leads for Larger Campaigns</strong>: We provide access to <strong className="font-semibold">bulk leads</strong> for larger marketing campaigns, ensuring a constant supply of potential buyers for your properties.</li>
            <li>Our leads are carefully checked to guarantee correctness, so saving you time on pointless or incorrect searches. Our leads are high-intention and ready to interact whether your focus is on <strong className="font-semibold">land plots</strong>, <strong className="font-semibold">commercial buildings</strong>, or <strong className="font-semibold">luxury homes</strong>.</li>
            <li>Designed to fit your campaigns, our lead <strong className="font-semibold">filtering system</strong> lets you target by property type, region, and budget, thereby allowing you the freedom to design customized campaigns directly addressing your client's demands.</li>
            <li><strong className="font-semibold">Heavy Discounts for Partner Agencies</strong>: As part of our <strong className="font-semibold">Agency Partner Program</strong>, you benefit from significant discounts on <strong className="font-semibold">bulk lead purchases</strong>. This allows your agency to run more extensive campaigns with greater efficiency, driving results at a lower cost.</li>
          </ul>
        </section>

        {/* Plan Recommendation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Plan Recommendation for Property Marketing Agencies: Recent Leads</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We advise concentrating on <strong className="font-semibold">recent leads</strong> for your <strong className="font-semibold">real estate efforts</strong>. These high-intention prospects are actively looking to make a purchase and have asked during the past 0-3 months. Working with <strong className="font-semibold">fresh leads</strong> will enable your firm to guarantee quicker conversions and assist in client closing of more agreements.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Recent Leads?</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">High Intent</strong>: Property seekers that are actively looking to purchase or sell are more likely to convert fast in recent searches.</li>
            <li><strong className="font-semibold">Recent leads</strong> allow your agency to assist customers in closing agreements faster, so producing immediate results and better return on investment.</li>
            <li><strong className="font-semibold">Semi-Exclusive Advantage</strong>: Our leads are <strong className="font-semibold">semi-exclusive</strong>, hence your clients will have less rivals fighting for the same opportunities, therefore increasing their chances of success.</li>
          </ul>
        </section>

        {/* Agency Partnerships Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Join our Agency Partnerships Program</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              With special access to premium property leads, our <strong className="font-semibold">Agency Partner Program</strong> is meant to enable real estate marketing companies expand their business. You will get as a partner:
            </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li>Starting from 2,000 leads, discounted lead packages can help you benefit from special savings on sizable lead purchases.</li>
            <li>Being a partner gives you first access to our most recent and validated leads, so enabling you to keep ahead of the competition.</li>
            <li>Our staff will provide you focused help to make sure your campaigns are successful-oriented.</li>
          </ul>
        </section>

        {/* Campaign Integration Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Campaign Integration Advice</h2>
           <p className="text-gray-700 leading-relaxed mb-6">
             Use LeadBuddy's property leads according to these campaign ideas to maximize their value:
           </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li>Create tailored marketing messages for particular audiences using parameters including <strong className="font-semibold">location</strong>, <strong className="font-semibold">budget</strong>, and <strong className="font-semibold">property type</strong>—that is, <strong className="font-semibold">luxury homes</strong>, <strong className="font-semibold">apartments</strong>, <strong className="font-semibold">villas</strong>.</li>
            <li>Combine <strong className="font-semibold">PPC</strong>, <strong className="font-semibold">email marketing</strong>, and <strong className="font-semibold">SMS campaigns</strong> to follow up with actively looking for real estate. Using several channels increases your chances of properly reaching your target.</li>
            <li>Create a follow-up funnel to maintain your leads interesting. Make sure your prospects stay linked to your client's brand whether that means via <strong className="font-semibold">SMS follow-ups</strong> or tailored emails.</li>
          </ul>
        </section>

        {/* White-labeling Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">White-labeling option</h2>
          <p className="text-gray-700 leading-relaxed">
            LeadBuddy offers agencies wishing to present our services under their own branding a <strong className="font-semibold">white-labeling solution</strong>. <strong className="font-semibold">White-labeled leads</strong> allow you to show yourself as the supplier of premium property leads while we take care of all the back-end operations.
          </p>
        </section>

        {/* Co-Marketing Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Co-Marketing Opportunities</h2>
          <p className="text-gray-700 leading-relaxed">
            Join hands with us for co-branded <strong className="font-semibold">real estate marketing possibilities</strong> that increase awareness of our platform as well as your firm. We can work on marketing initiatives stressing your services as well as our premium property leads, therefore improving results for your customers.
          </p>
        </section>

        {/* Final Thought Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thought</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            LeadBuddy, a top <strong className="font-semibold">real estate lead vendor</strong> in <strong className="font-semibold">India</strong>, enables real estate marketing companies to get <strong className="font-semibold">verified</strong>, <strong className="font-semibold">semi-exclusive recent leads</strong> to fuel their <strong className="font-semibold">digital marketing</strong> efforts. Having access to a large spectrum of property leads—including <strong className="font-semibold">luxury properties</strong>, <strong className="font-semibold">business offices</strong>, and <strong className="font-semibold">residential flats</strong>—we equip you with the means to launch successful, high-converting campaigns.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            Start generating more leads, closing more transactions, and expanding your client's business now utilizing LeadBuddy's <strong className="font-semibold">semi-exclusive recent leads</strong>!
          </p>
        </section>

      </div>
    </div>
  );
};

export default RealEstateMarketingPage;