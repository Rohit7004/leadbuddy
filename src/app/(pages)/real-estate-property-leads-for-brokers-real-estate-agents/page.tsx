import React from 'react';

const LeadBuddyPage = () => {
  return (
    // Main container - Adjusted padding and font
    <div className="font-sans leading-relaxed p-6 md:p-10 lg:p-16 bg-white text-gray-800">

      {/* Top Section with Numbered Steps */}
      <div className="flex flex-col lg:flex-row lg:gap-10 mb-10 lg:mb-16">

        {/* Left Side Content */}
        <div className="lg:w-3/5">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Expand Your Client Base <br /> with Reliable Property <br /> Inquiries!
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mb-6 text-gray-600 text-lg">
            Close deals quickly with fresh leads, nurture long-term relationships with
            strategic follow-ups, and expand your client base with reliable property
            inquiries.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 lg:mb-0">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 font-medium">
              I want Property Leads!
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 font-medium flex items-center">
              View FAQs <span className="ml-2 text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Right Side Numbered Steps - Adjusted styling to match screenshot */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 border border-gray-200 p-6 rounded-lg shadow-sm bg-gray-50/50">
          {[
            { title: "Choose Lead Package", desc: "Select from Fresh, Recent, or Long-Term leads." },
            { title: "Get Pricing & Pay", desc: "Use 'Calculate' to get pricing or contact sales and make payment." },
            { title: "Receive Leads", desc: "Get a list of Inquiry leads with full details." },
            { title: "Start Campaign", desc: "Use the leads to launch and grow your business." }
          ].map((item, i) => (
            <div key={i} className={`flex items-start ${i < 3 ? 'mb-5 pb-5 border-b border-dashed border-gray-300' : ''}`}>
              {/* Number Circle */}
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-4 font-semibold flex-shrink-0">
                {i + 1}
              </div>
              {/* Text Content */}
              <div>
                <strong className="block text-base font-semibold text-gray-800">{item.title}</strong>
                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Section Content */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-purple-600 pl-4">
          We'll Help You Close More Deals Sooner and Access Property Seeker Leads Quicker
        </h2>
        <p className="text-gray-700 leading-relaxed">
          As a <b>real estate broker</b> or <b>agent</b> or a cp : channel partner, your success is directly related to how fast and effectively you can get in touch with potential <b>buyers</b> and <b>sellers</b>. The faster you get in with quality <b>property seekers</b>, the more the likelihood of closing more <b>deals</b>. That is where we come in.
        </p>
        <p className="text-gray-700 leading-relaxed">
           We offer pre-screened and targeted <b>leads</b> concerning <b>residential</b> and <b>commercial properties</b> so that your main focus will be on what really matters - <b>closing the deal</b>. We design our process to let you acquire <b>high-intent buyer</b> and <b>seller leads</b> so that you can spend less time in <b>prospecting</b> and more in <b>closing transactions</b>.
        </p>


        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Advantages of Using LeadBuddy:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
          <li><b>Unlock a stream of fresh leads in real-time</b>, whether <b>first-time homebuyers</b> or <b>high-value investors</b>, as a trusted provider of real estate data. Our leads are refreshed in real-time so that you can be the first to respond. Certainly, outcompete other competitors in the market with confidence.</li>
          <li><b>Receive filtered leads by budget, location, and also by the time of the inquiry</b>. With options to target by <b>luxury homes</b>, <b>apartments</b>, <b>bungalows</b>, or <b>land</b>—you're always speaking to the right <b>clients</b> supported by LeadBuddy, your reliable vendor for property leads.</li>
          <li><b>Receive new and long-term inquiries</b>: Have a regular pipeline of <b>buyers</b> and <b>sellers</b>, from <b>HNI inquiries</b> to <b>resale buyers</b> for <b>flats</b>, <b>villas</b>, or <b>plots</b>.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
            Allow us to help you close more <b>deals</b> by offering serious <b>property seekers</b> across <b>India</b>. Stop chasing leads, start converting today with <b>LeadBuddy</b>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold pt-6 text-gray-900 border-l-4 border-purple-600 pl-4">
          Realtor/Agent Benefits - LeadBuddy Package
        </h2>
        <p className="text-gray-700 leading-relaxed">
            At <b>LeadBuddy</b>, we have developed a structured <b>lead generation</b> solution tailored to the dynamic needs of real estate professionals. Our package is designed to provide you with high-quality leads, flexibility, and value, ensuring you stay ahead in a competitive market.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Key Features:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>Access to fresh leads in real-time</b>: Get immediate notifications for new property inquiries, allowing you to connect with potential clients instantly.</li>
            <li><b>High-quality and verified leads</b>: We ensure that each lead is genuine and relevant, saving you time and effort in filtering out unqualified prospects.</li>
            <li><b>Custom Lead Filters</b>: Tailor your lead feed based on specific criteria such as location, budget, property type, and inquiry time to match your exact requirements.</li>
            <li>
            <b>Multiple Lead Types for Flexibility</b>: Choose from different types of leads to suit your sales strategy and pipeline needs:
            <ul className="list-[circle] list-inside ml-6 mt-2 space-y-2">
                <li><b>Long-term leads</b>: Engage prospects who showed interest 6-12 months ago, ideal for nurturing and follow-up campaigns.</li>
                <li><b>Recent Leads</b>: Connect with inquiries made within the last 0-3 months, perfect for immediate engagement.</li>
                <li><b>Fresh Leads</b>: Access leads generated in real-time for the quickest response and conversion opportunities.</li>
            </ul>
            </li>
            <li><b>Unlock Exclusive Access to Local Leads</b>: Gain a competitive edge with leads specific to your operational areas, maximizing your local market penetration.</li>
            <li><b>Value-for-Money Packages</b>: Our tiered pricing and package options provide cost-effective solutions, ensuring a high return on investment.</li>
            <li><b>Time-Saving Solutions</b>: Automate your lead generation process and focus on what you do best – closing deals and building client relationships.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold pt-6 text-gray-900 border-l-4 border-purple-600 pl-4">
          Our LeadBuddy Plan Recommendation for Real Estate Brokers/Agents
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We highly recommend combining <b>Long-Term</b> and <b>Recent Leads</b> in your LeadBuddy package to create a robust and balanced lead generation strategy. This approach ensures you have a mix of immediate opportunities and prospects for future nurturing.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Why We Recommend a Mix of Long-Term and Recent Leads:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>Long-term Leads</b>: Leads that are 6-12 months old often represent buyers or sellers who are still in the market but may have paused their search. Re-engaging them can uncover hidden opportunities.</li>
            <li><b>Recent Leads</b>: 0-3 months inquiries indicate active interest. These leads require prompt follow-up to capitalize on their current engagement level.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Gains of Having a Mixed Strategy:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>Balanced Pipeline</b>: Maintain a steady flow of leads at different stages of the buying/selling cycle.</li>
            <li><b>Consistency</b>: Ensure continuous engagement opportunities, reducing downtime between deals.</li>
            <li><b>Follow-up Activities</b>: Implement diverse follow-up strategies tailored to the lead's age and potential readiness.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold pt-6 text-gray-900 border-l-4 border-purple-600 pl-4">
          High-Volume Purchase Discounts Starting from 2,000 Leads
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We value our <b>real estate brokers</b> and <b>agents</b> who require a larger volume of leads to fuel their growth. LeadBuddy offers attractive discounts for bulk purchases, making it even more cost-effective to scale your operations.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Tiers of Discount:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>2000 - 4999 Leads</b>: Enjoy a 5% discount on your total purchase.</li>
            <li><b>5000 - 9999 Leads</b>: Get a 10% discount, significantly reducing your cost per lead.</li>
            <li><b>10,000+ Leads</b>: Benefit from our maximum discount of 15% for large-scale lead acquisition.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Advantages of Volume Purchasing:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>Value for Money</b>: Lower your overall lead acquisition costs.</li>
            <li><b>Lead Flow On Tap</b>: Ensure you always have a ready supply of leads to keep your sales team busy.</li>
            <li><b>Priority Access</b>: High-volume purchasers often receive priority updates and access to new features.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold pt-6 text-gray-900 border-l-4 border-purple-600 pl-4">
          Join Our Referral Network - Get 50 Free Long-Term Leads!
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Considering that relationships matter, we at <b>LeadBuddy</b> would like to give you the chance to grow your network while earning rewards. Introduce your colleagues to LeadBuddy and get free leads for every successful referral.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">How It Works:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>Refer a Colleague</b>: Share your unique referral link or code with fellow real estate professionals.</li>
            <li><b>They Join</b>: When your colleague signs up for a LeadBuddy package using your referral.</li>
            <li><b>Free Leads</b>: You automatically receive 50 free Long-Term leads added to your account as a thank you!</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold pt-4 text-gray-900">Our Referral Network Benefits:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
            <li><b>No Limits</b>: Refer as many colleagues as you like – there's no cap on the free leads you can earn.</li>
            <li><b>Nurture Your Pipeline</b>: Use your free Long-Term leads to build and nurture your future client base.</li>
            <li><b>Win-win</b>: Help your network succeed with quality leads while boosting your own lead pool.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed pt-4 font-medium">
          Get started referring today and watch your lead funnel grow with <b>LeadBuddy's Referral Network</b>!
        </p>
      </section>
    </div>
  );
};

export default LeadBuddyPage;