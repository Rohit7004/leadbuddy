import React from 'react';

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


const NaviMumbaiLeadsPage: React.FC = () => {

  // Data for the stat boxes - Updated for Navi Mumbai Image
  const stats = [
    { value: '₹ 7', label: 'Avg. Cost/Lead', type: 'Long-Term Leads' },
    { value: '₹ 55', label: 'Avg. Cost/Lead', type: 'Recent Leads' }, // Updated value
    { value: '[Call Sales]', label: 'Avg. Cost/Lead', type: 'Fresh Leads' },
    { value: '92%', label: '', type: 'Avg. Quality', isCircle: true }, // Updated value
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <section className="mb-12 md:flex md:items-start md:space-x-12">
          {/* Left Side: Title, Subtitle, Buttons */}
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-800 mb-4 leading-tight">
              Cost-Effective Navi Mumbai Property Leads
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Verified Property Seekers in Navi Mumbai Target genuine inquiries. Connect confidently with validated property seekers and close more real estate deals efficiently.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                {/* Text updated based on image */}
                <span>Get Property Leads in Navi-Mumbai</span>
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
                  // Using slightly lighter background as per image hints
                  className={`bg-gray-100/70 p-4 rounded-lg text-center border border-gray-200 flex flex-col items-center justify-center ${stat.isCircle ? 'aspect-square' : 'min-h-[110px]'}`}
                >
                  {stat.isCircle ? (
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                      {stat.value}
                    </div>
                  ) : (
                    <div className={`text-3xl font-bold ${stat.value === '[Call Sales]' ? 'text-blue-600' : 'text-slate-800'}`}>
                      {stat.value}
                    </div>
                  )}
                  {stat.label && (
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  )}
                   {/* Lighter background for type labels */}
                   <div className="text-sm font-medium text-purple-800/90 mt-1 px-2 py-0.5 bg-purple-100 rounded-full">{stat.type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Navi Mumbai is a Hot Market Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Why Navi Mumbai is a Hot Market for Real Estate Leads, Especially for Real Estate Agents
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Navi Mumbai's Growing Real Estate Appeal
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Navi Mumbai, strategically positioned near Mumbai—the financial capital of India—is fast emerging as a prime hub for real estate development. Known for well-planned infrastructure, affordable pricing, and connectivity, Navi Mumbai has become an ideal choice for real estate seekers, agents, and brokers.
          </p>
        </section>

        {/* Strategic Location and Enhanced Connectivity Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Strategic Location and Enhanced Connectivity
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Navi Mumbai’s strategic location close to India's financial capital, Mumbai, significantly boosts its real estate appeal. The city is connected via an extensive network of roads, highways, and suburban railways to Mumbai, Pune, and other major commercial centers. Such seamless connectivity enhances its appeal, attracting a continuous influx of property seekers, enabling real estate agents and brokers to secure high-quality leads consistently.
          </p>
        </section>

        {/* Diverse Property Options Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Diverse Property Options for All Buyer Segments
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Navi Mumbai's property market provides extensive choices, ensuring opportunities for diverse buyer segments, including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
            <li>Affordable residential flats and apartments</li>
            <li>Premium luxury villas and bungalows</li>
            <li>Commercial office spaces and plots for high-value investors</li>
            <li>Land parcels suitable for immediate purchase or future resale</li>
          </ul>
        </section>

        {/* Major Infrastructure Developments Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Major Infrastructure Developments Driving Market Growth
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Infrastructure projects like the upcoming Navi Mumbai International Airport, metro rail lines, and new bridges significantly enhance market attractiveness. Real estate agents leverage these developments to attract more <strong className="font-semibold">verified leads</strong> and emphasize long-term property investment potential.
            </p>
        </section>

        {/* Demand from First-Time Homebuyers Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Demand from First-Time Homebuyers
            </h3>
            <p className="text-gray-700 leading-relaxed">
                The affordability and quality lifestyle offered by Navi Mumbai attract <strong className="font-semibold">first-time homebuyers</strong>. Real estate agents benefit from targeting this segment, generating <strong className="font-semibold">active inquiries</strong> ready for <strong className="font-semibold">quick conversions</strong> and <strong className="font-semibold">immediate purchase</strong>.
            </p>
        </section>

        {/* Popular Navi Mumbai Localities Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Popular Navi Mumbai Localities Generating Active Leads
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                Popular neighborhoods boosting real estate inquiries include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
                <li><strong className="font-semibold">Kharghar</strong> – Educational and residential hub</li>
                <li><strong className="font-semibold">Vashi</strong> – High-demand commercial and residential locality</li>
                <li><strong className="font-semibold">Nerul</strong> – Preferred by families for residential investments</li>
                <li><strong className="font-semibold">CBD Belapur</strong> and <strong className="font-semibold">Seawoods</strong> – Prime commercial and residential zones</li>
                <li><strong className="font-semibold">Panvel</strong> and <strong className="font-semibold">Ulwe</strong> – Rapidly developing areas with future growth potential</li>
                <li><strong className="font-semibold">Airoli, Ghansoli, Kopar Khairane</strong> – Preferred by commercial investors</li>
            </ul>
        </section>

        {/* Powerful Digital Marketing Presence Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Powerful Digital Marketing Presence
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Navi Mumbai's property market is driven by a robust digital ecosystem. Property seekers frequently perform <strong className="font-semibold">online searches</strong>, engage via <strong className="font-semibold">mobile devices</strong>, and respond positively to targeted <strong className="font-semibold">PPC ads</strong>, <strong className="font-semibold">digital marketing campaigns</strong>, and <strong className="font-semibold">online expos</strong>, significantly increasing the availability of verified <strong className="font-semibold">live leads</strong> for agents.
            </p>
        </section>

        {/* Growing Interest Among High-Value Investors Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Growing Interest Among High-Value Investors and HNIs
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Navi Mumbai's rising property values and luxury amenities attract significant attention from <strong className="font-semibold">high-value investors</strong> and <strong className="font-semibold">HNIs</strong>, actively seeking <strong className="font-semibold">luxury homes</strong>, <strong className="font-semibold">villas</strong>, <strong className="font-semibold">bungalows</strong>, and <strong className="font-semibold">commercial office spaces</strong>. Agents benefit by targeting these <strong className="font-semibold">exclusive leads</strong> for profitable transactions.
            </p>
        </section>

        {/* Exclusive, Verified Lead Databases Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Exclusive, Verified Lead Databases Available
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Real estate agents require reliable, <strong className="font-semibold">verified data</strong> to succeed. Our platform provides <strong className="font-semibold">exclusive, verified, and high-intent inquiries</strong> generated through <strong className="font-semibold">digital marketing</strong>, <strong className="font-semibold">PPC ads</strong>, <strong className="font-semibold">online expos</strong>, and strategic <strong className="font-semibold">mobile searches</strong>. The <strong className="font-semibold">exclusive database</strong> enhances agent efficiency, reducing marketing costs while increasing conversion rates.
            </p>
        </section>

        {/* Rapid Urbanization Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Rapid Urbanization Attracting Active Buyers
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Navi Mumbai’s accelerated urban growth attracts <strong className="font-semibold">active buyers</strong> seeking quick purchases. Real estate agents, brokers, and channel partners (CP) who engage these <strong className="font-semibold">fresh live leads</strong> enjoy quicker deal closures and higher profitability due to buyers’ readiness to invest promptly.
            </p>
        </section>

        {/* Competitive Pricing Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Competitive Pricing and Discounts Boosting Demand
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Competitive property prices, combined with attractive <strong className="font-semibold">discounts</strong> and tailored <strong className="font-semibold">service plans</strong>, enhance Navi Mumbai's appeal. Agents leveraging <strong className="font-semibold">discounted lead packages</strong> can strategically attract and retain property seekers, ensuring robust business growth.
            </p>
        </section>

        {/* Effective Utilization Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Effective Utilization of Real Estate Leads in Navi Mumbai
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                Agents and brokers can maximize success by:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
                <li>Strategically following up on <strong className="font-semibold">long-term</strong>, <strong className="font-semibold">recent</strong>, and <strong className="font-semibold">fresh leads</strong>.</li>
                <li>Targeting buyer preferences through <strong className="font-semibold">targeted marketing strategies</strong>.</li>
                <li>Engaging prospects promptly, utilizing <strong className="font-semibold">digital marketing</strong> and <strong className="font-semibold">mobile platforms</strong>.</li>
                <li>Highlighting local <strong className="font-semibold">infrastructure</strong> and <strong className="font-semibold">connectivity</strong> advantages.</li>
            </ul>
        </section>

        {/* Start Engaging Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Start Engaging with Exclusive Navi Mumbai Real Estate Leads Today
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Now is the ideal time to harness Navi Mumbai’s real estate potential. Gain access to our <strong className="font-semibold">verified, exclusive, high-intent property seekers database</strong> tailored for residential, commercial, and luxury property deals. Contact us today, unlock the immense potential of Navi Mumbai real estate, and elevate your real estate success.
            </p>
        </section>

        {/* Who Should Leverage Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Who Should Leverage Navi Mumbai Property Leads?
            </h3>
             <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
                <li><strong className="font-semibold">Real estate agents and brokers:</strong> Engage residential and commercial buyers efficiently.</li>
                <li><strong className="font-semibold">Builders and Developers:</strong> Connect with high-value investors and first-time homebuyers seeking immediate purchases.</li>
                <li><strong className="font-semibold">Marketing Firms and Vendors:</strong> Access live, fresh leads for targeted marketing.</li>
                <li><strong className="font-semibold">Channel Partners (CP):</strong> Exclusive leads for fast-tracked real estate deals.</li>
            </ul>
        </section>

        {/* Proven Track Record Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Proven Track Record in Navi Mumbai
            </h3>
             <p className="text-gray-700 leading-relaxed">
                We consistently provide real estate agents, brokers, and developers with <strong className="font-semibold">high-intent, verified inquiries</strong>. Realtors, builders, and marketing firms in Navi Mumbai successfully leverage our data-driven approach, enjoying higher conversions, shorter sales cycles, and optimized marketing expenditures.
            </p>
        </section>

        {/* Property Lead Types Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Property Lead Types & Custom Packages Offered in Navi Mumbai
            </h3>
             <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
                <li><strong className="font-semibold">Long-Term Leads:</strong> Cost-effective inquiries ideal for strategic follow-ups, primarily for resale residential properties.</li>
                <li><strong className="font-semibold">Recent Leads:</strong> High-intent, recently verified inquiries ideal for quicker conversion in residential and commercial sectors.</li>
                <li><strong className="font-semibold">Fresh Live Leads:</strong> Exclusive real-time inquiries suitable for immediate purchase decisions, particularly luxury homes, commercial offices, and investment plots.</li>
            </ul>
        </section>

         {/* Local Insights Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Local Insights into Buyer Preferences in Navi Mumbai
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Property seekers in Navi Mumbai commonly favor residential apartments (2BHK and 3BHK) in localities like Kharghar, Vashi, and Nerul. Increasingly, there is high demand for luxury villas and bungalows in areas like Panvel, Belapur, and Ulwe. Commercial buyers prefer office spaces near transportation hubs and plots in high-value zones.
            </p>
        </section>

         {/* FAQs Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                FAQs: Common Questions about Navi Mumbai Property Leads
            </h3>
             <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
                <li><strong className="font-semibold">What's the average price of a 2BHK apartment in Navi Mumbai?</strong><br/>Typically ₹70 lakh to ₹1.2 crore depending on locality and builder reputation.</li>
                <li><strong className="font-semibold">Are bulk purchase discounts available for property leads?</strong><br/>Yes, exclusive discounts are available for bulk purchases. Contact our team for detailed pricing.</li>
            </ul>
        </section>

         {/* Assuring High Lead Quality Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Assuring High Lead Quality & Exclusivity
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Our property leads undergo thorough <strong className="font-semibold">verification processes</strong>. By leveraging strategic <strong className="font-semibold">digital marketing</strong>, <strong className="font-semibold">PPC ads</strong>, <strong className="font-semibold">online platforms</strong>, and <strong className="font-semibold">mobile searches</strong>, we ensure that realtors, agents, brokers, and developers receive <strong className="font-semibold">exclusive, active, and fresh leads</strong>. This targeted approach enhances client interactions, streamlines follow-ups, and increases conversion rates.
            </p>
        </section>

        {/* Effective Strategies Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Effective Strategies to Utilize Navi Mumbai Real Estate Leads
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Realtors and brokers can capitalize on our <strong className="font-semibold">exclusive leads</strong> by adopting strategic follow-up methods, actively engaging clients, and tailoring their marketing plans based on buyer preferences. Real estate agents and developers should utilize these <strong className="font-semibold">high-intent leads</strong> to expedite transactions, optimize service delivery, and close deals faster.
            </p>
        </section>

        {/* Start Engaging Today Section */}
        <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Start Engaging Navi Mumbai Property Seekers Today
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Don't miss the opportunity to revolutionize your real estate business. Connect with our comprehensive database of <strong className="font-semibold">exclusive Navi Mumbai real estate leads</strong> tailored specifically for residential, commercial, and luxury segments. Engage active buyers, high-value investors, and first-time homebuyers effectively through our targeted <strong className="font-semibold">service plans</strong> and <strong className="font-semibold">cost-effective lead generation methods</strong>.
            </p>
        </section>

        {/* Final Contact Section */}
        <section>
             <p className="text-gray-700 leading-relaxed font-medium">
                Contact us now and accelerate your real estate endeavors with premium Navi Mumbai property leads
            </p>
        </section>

      </div>
    </div>
  );
};

export default NaviMumbaiLeadsPage;