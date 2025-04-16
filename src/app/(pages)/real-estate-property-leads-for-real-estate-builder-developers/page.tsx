import React from 'react';

// Define an interface for the numbered step data
interface Step {
  id: number;
  title: string;
  description: string;
}

const PropertyLeadsPage: React.FC = () => {
  // Updated steps based on the second image
  const steps: Step[] = [
    { id: 1, title: "Choose Property Inquiry Leads", description: "Select lead packages like Fresh Leads for immediate buyers or Long Term Leads for strategic follow-ups." },
    { id: 2, title: "Get Pricing & Complete Payment", description: "Review pricing based on inquiry preferences (location, budget) and make the payment." },
    { id: 3, title: "Receive Leads & Contact Property Seekers", description: "Obtain a list of leads with contact details and property interests that match your projects." },
    { id: 4, title: "Engage Buyers & Increase Sales", description: "Communicate with leads, showcase properties, and close deals." },
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
              Close Deals Faster with High-Quality Property Seeker Leads
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access high-intent leads ready for your real estate projects. Get inquiries that convert into sales for builders and developers.
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

        {/* Sell More Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sell More Projects and Units by Engaging Serious Buyers</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
             Selling additional units and advancing your real estate projects forward is your main objective as a <strong className="font-semibold">builder</strong> or <strong className="font-semibold">developer</strong>. LeadBuddy offers access to highly intended property seekers actively looking for both <strong className="font-semibold">residential</strong> and <strong className="font-semibold">business real estate</strong>. Our confirmed property leads let you get in touch with serious purchasers searching for <strong className="font-semibold">offices</strong>, <strong className="font-semibold">villas</strong>, <strong className="font-semibold">luxury homes</strong>, <strong className="font-semibold">flats</strong>, and <strong className="font-semibold">parcels of land</strong>. Stop wasting time answering inappropriate questions and concentrate on exclusive leads that will increase unit sales.
          </p>
        </section>

        {/* Lead Benefits Section */}
         <section className="mb-12">
           <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Benefits</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
              <li>From <strong className="font-semibold">first-time homebuyers</strong> to <strong className="font-semibold">HNI investors</strong>, reach property seekers at the earliest point of their path—that of <strong className="font-semibold">Early-Stage Buyer Access</strong>.</li>
              <li><strong className="font-semibold">Premium Leads</strong>: Our leads are quality verified, filtered by budget, location, and property type to ensure you're always speaking to the right buyers.</li>
              <li><strong className="font-semibold">Fresh and Live leads</strong>: Instant leads in real time let you interact with active property seekers right now.</li>
              <li><strong className="font-semibold">High-Intent Inquiries</strong>: Target buyers with the intent to purchase who are actively searching for properties.</li>
              <li>Our leads are checked, screened by location, property type, budget, and cost to guarantee you are always speaking to the correct customers.</li>
            </ul>
         </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Should You Choose Us?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            LeadBuddy is committed to providing unique leads especially for <strong className="font-semibold">builders</strong> and <strong className="font-semibold">developers</strong>. Our solutions are meant to enable you to reach greater outcomes and faster unit sales. We differentiate ourselves for the following:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Verified and Exclusive Leads</strong>: Our leads are limited to developers and builders, hence you won't have to fight other industries for the same customers.</li>
            <li><strong className="font-semibold">Strong Intent Audience</strong>: We put you in touch with buyers searching for <strong className="font-semibold">luxury homes</strong>, <strong className="font-semibold">villas</strong>, <strong className="font-semibold">business offices</strong>, and more, as well as <strong className="font-semibold">HNI investors</strong>.</li>
            <li>We offer specific <strong className="font-semibold">VIP Support</strong> to guarantee flawless and efficient lead generation process.</li>
          </ul>
        </section>

        {/* Exclusive Leads Compared Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Exclusive Leads When Compared to Other Plans</h2>
            <p className="text-gray-700 leading-relaxed">
               LeadBuddy offers you special project leads unlike <strong className="font-semibold">generic lead generating tools</strong>. Our leads are thoroughly screened and focused to assure you direct access to qualified data of property seekers eager to make a transaction. This emphasis on quality above volume means you spend more time interacting with possible clients and less time sorting through pointless leads.
            </p>
        </section>

        {/* Optimize Traffic Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimize Traffic and Site Visits</h2>
            <p className="text-gray-700 leading-relaxed">
               Using LeadBuddy's <strong className="font-semibold">exclusive leads</strong>, increase site visits and footfall to your real estate project sites. Targeting buyers who are actively looking for <strong className="font-semibold">commercial spaces</strong>, <strong className="font-semibold">villas</strong>, and <strong className="font-semibold">homes</strong> will help you to boost the general success of your marketing campaigns by increasing the volume of important inquiries. Increase footfall to maximize possibilities for sales and conversions.
            </p>
        </section>

        {/* Strategic Plan Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Suggested Strategic Plan: A Mix of Recent, Fresh & Audience Reach</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We provide a range of lead generation strategies especially for developers and builders to fit various project requirements:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li>Target consumers who have shown interest in the prior 0-3 months according to the <strong className="font-semibold">Recent Leads Plan</strong>. These leads are high-intention and ready for quick follow-up.</li>
            <li>Engage live leads created in real time for quick conversion under the <strong className="font-semibold">Fresh Leads Plan</strong>.</li>
            <li><strong className="font-semibold">Audience Reach Plan</strong>: An alternative choice devoid of lead purchasing. Rather, we handle the whole SMS, RCS, WhatsApp, email message campaigns process of getting your target audience. You pay simply for the audience reach, freeing you to concentrate on conversions without personally managing the leads.</li>
          </ul>
        </section>

        {/* Eligible for Audience Reach Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligible for Audience Reach Program</h2>
            <p className="text-gray-700 leading-relaxed">
               <strong className="font-semibold">Builders</strong> and <strong className="font-semibold">developers</strong> wishing to increase their audience without buying individual leads will find the <strong className="font-semibold">Audience Reach Plan</strong> ideal. This approach pays for the audience reach via our platform instead of buying leads. For your target demographic, we handle SMS, RCS, WhatsApp, and email distribution of your marketing communications. This lets you concentrate on your sales while we make sure the correct purchasers get your message.
            </p>
        </section>

        {/* Premium Buyers Profile Section */}
        <section className="mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Prospective Buyers: Profile</h2>
            <p className="text-gray-700 leading-relaxed">
               Our <strong className="font-semibold">Premium Potential Buyer Profiles</strong> feature comprehensive information on consumers drawn to both <strong className="font-semibold">residential</strong> and <strong className="font-semibold">business real estate</strong>. Whether you are selling commercial offices, luxury residences, flats, or bungalows, these profiles are validated and chosen to fit your project criteria. <strong className="font-semibold">LeadBuddy</strong> will provide high-value buyer profiles that let you quickly complete sales and interact with the correct clients.
            </p>
        </section>

        {/* Lead Lists by Investors Section */}
         <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lead Lists Driven by Investors</h2>
            <p className="text-gray-700 leading-relaxed">
               Get access to our <strong className="font-semibold">Investor-Focused Lead Lists</strong>, especially chosen for <strong className="font-semibold">HNI</strong> and <strong className="font-semibold">high-value buyers</strong> wishing to fund <strong className="font-semibold">luxury</strong> and <strong className="font-semibold">commercial real estate</strong>. <strong className="font-semibold">Builders</strong> and <strong className="font-semibold">developers</strong> working on high-end projects including <strong className="font-semibold">luxury villas</strong>, <strong className="font-semibold">office buildings</strong>, and <strong className="font-semibold">premium homes</strong> will find these leads perfect. We allow you to draw in serious, high-value purchase candidates.
            </p>
        </section>

        {/* VIP Support Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VIP Support Exclusively for Builders, Developers, and Big Marketing Firms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
             At LeadBuddy, we understand that the needs of <strong className="font-semibold">builders</strong>, <strong className="font-semibold">developers</strong>, and <strong className="font-semibold">big marketing firms</strong> are unique and require dedicated attention. That's why we offer <strong className="font-semibold">VIP Support</strong> exclusively for these clients. This premium service ensures that you receive personalized assistance, helping you optimize your lead generation efforts and focus on converting high-value property seekers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether it's fine-tuning your lead management strategy, providing insights on the best lead plans, or offering follow-up assistance, our <strong className="font-semibold">VIP Support</strong> is designed to help your projects succeed.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4 mb-6">
            <li><strong className="font-semibold">Dedicated Account Management</strong>: Receive one-on-one support tailored to your specific project needs.</li>
            <li><strong className="font-semibold">Priority Access to Leads</strong>: Get faster access to fresh leads and investor-focused profiles.</li>
            <li><strong className="font-semibold">Comprehensive Campaign Assistance</strong>: We help you optimize your digital marketing efforts, ensuring better conversions and deal closures.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            This service is reserved exclusively for <strong className="font-semibold">builders, developers, and large marketing firms</strong> to ensure you have the resources you need to succeed in your real estate projects.
          </p>
          <p className="text-gray-700 leading-relaxed">
             While our selection of plans guarantees you can choose the ideal solution for your project, our <strong className="font-semibold">Audience Reach Plan</strong> provides a simplified solution for those who prefer not to handle leads personally.
          </p>
        </section>

        {/* Final Concluding Remarks */}
        <section className="mb-12">
           <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="font-semibold">Premium Potential Buyer Profiles</strong>, <strong className="font-semibold">Investor-Focused Leads</strong>, and <strong className="font-semibold">VIP Support</strong> let us deliver all you need to sell your units quicker and more effectively.
           </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Let <strong className="font-semibold">LeadBuddy</strong> be your reliable partner in matching your sales targets.
            </p>
        </section>

      </div>
    </div>
  );
};

export default PropertyLeadsPage;