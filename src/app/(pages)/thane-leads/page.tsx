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


const ThaneRealEstatePage: React.FC = () => {

  // Data for the stat boxes - Updated for Thane Image
  const stats = [
    { value: '₹ 7', label: 'Avg. Cost/Lead', type: 'Long-Term Leads' },
    { value: '₹ 35', label: 'Avg. Cost/Lead', type: 'Recent Leads' },
    { value: '[Call Sales]', label: 'Avg. Cost/Lead', type: 'Fresh Leads' },
    { value: '95%', label: '', type: 'Avg. Quality', isCircle: true },
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <section className="mb-12 md:flex md:items-start md:space-x-12">
          {/* Left Side: Title, Subtitle, Buttons */}
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-800 mb-4 leading-tight">
              Get Started with High-Quality Property Seeker Leads in Thane
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Unlock exclusive buyer inquiries today and take the first step toward growing your real estate business to new heights.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                 {/* Text updated based on image */}
                <span>Get Property Leads in Mira Bhayandar</span>
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
                  // Using slightly lighter background as per Thane image hints
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

        {/* Discover Thane's Booming Real Estate Opportunities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Discover Thane's Booming Real Estate Opportunities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thane, often referred to as the "City of Lakes," has rapidly transformed into a prime real estate hub adjacent to Mumbai. With its blend of urban amenities and natural beauty, Thane attracts a diverse range of property seekers—from first-time homebuyers to high net-worth investors. Popular areas such as <strong className="font-semibold">Ghodbunder Road</strong>, <strong className="font-semibold">Pokhran Road</strong>, <strong className="font-semibold">Majiwada</strong>, <strong className="font-semibold">Kolshet Road</strong>, <strong className="font-semibold">Vartak Nagar</strong>, <strong className="font-semibold">Kasarvadavali</strong>, <strong className="font-semibold">Hiranandani Estate</strong>, <strong className="font-semibold">Manpada</strong>, <strong className="font-semibold">Balkum</strong>, and <strong className="font-semibold">Kopri</strong> are witnessing unprecedented demand for both residential and commercial properties.
          </p>
        </section>

        {/* Unlock Exclusive Property Leads in Thane's Hottest Locations */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Unlock Exclusive Property Leads in Thane's Hottest Locations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our lead generation agency specializes in providing you with high-intent, verified property buyer inquiries across Thane's most sought-after localities:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Ghodbunder Road</strong>: Ideal for luxury apartments and villas with scenic views.</li>
              <li><strong className="font-semibold">Pokhran Road</strong>: Popular among professionals seeking premium flats.</li>
              <li><strong className="font-semibold">Majiwada</strong>: A hotspot for commercial spaces like offices and retail outlets.</li>
              <li><strong className="font-semibold">Kolshet Road</strong>: Attracts families looking for spacious residential flats.</li>
              <li><strong className="font-semibold">Vartak Nagar</strong>: Preferred by first-time homebuyers for affordable housing.</li>
              <li><strong className="font-semibold">Kasarvadavali</strong>: Growing demand for land plots and investment properties.</li>
              <li><strong className="font-semibold">Hiranandani Estate</strong>: Known for luxury homes and high-value investments.</li>
              <li><strong className="font-semibold">Manpada</strong>: In demand for both residential and commercial developments.</li>
              <li><strong className="font-semibold">Balkum</strong>: Offers a mix of ready-to-move-in apartments and resale properties.</li>
              <li><strong className="font-semibold">Kopri</strong>: Emerging area with opportunities for builders and developers.</li>
          </ul>
        </section>

        {/* Tailored Leads for Thane's Diverse Real Estate Market */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Tailored Leads for Thane's Diverse Real Estate Market</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Our Leads Are Perfect for Your Business</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We provide <strong className="font-semibold">fresh leads</strong> and <strong className="font-semibold">live leads</strong> that match your specific property offerings:
          </p>
           <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Residential Properties</strong>: Flats, apartments, villas, bungalows in areas like <strong className="font-semibold">Kolshet Road</strong> and <strong className="font-semibold">Manpada</strong>.</li>
              <li><strong className="font-semibold">Commercial Spaces</strong>: Offices and shops in bustling hubs like <strong className="font-semibold">Majiwada</strong> and <strong className="font-semibold">Balkum</strong>.</li>
              <li><strong className="font-semibold">Land and Plots</strong>: Investment opportunities in <strong className="font-semibold">Kasarvadavali</strong> and <strong className="font-semibold">Ghodbunder Road</strong>.</li>
              <li><strong className="font-semibold">Luxury Homes</strong>: High-value properties in <strong className="font-semibold">Hiranandani Estate</strong> and <strong className="font-semibold">Pokhran Road</strong>.</li>
          </ul>
           <p className="text-gray-700 leading-relaxed mt-4">
            Our data-driven approach ensures you connect with <strong className="font-semibold">active seekers</strong> who are ready to purchase, reducing your follow-up time and increasing conversion rates.
          </p>
        </section>

        {/* Who Benefits from Our Thane Property Leads? */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">Who Benefits from Our Thane Property Leads?</h2>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">Ideal for Industry Professionals Aiming for Success</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
            Our services are tailored for:
           </p>
           <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Builders and Developers</strong>: Looking to sell new projects in areas like <strong className="font-semibold">Vartak Nagar</strong> and <strong className="font-semibold">Kopri</strong>.</li>
              <li><strong className="font-semibold">Realtors and Channel Partners (CPs)</strong>: Seeking to expand their client base in Thane's competitive market.</li>
              <li><strong className="font-semibold">Marketing Firms</strong>: Aiming to enhance their property marketing strategies with high-quality data.</li>
           </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
             By leveraging our platform, you gain access to <strong className="font-semibold">exclusive leads</strong> that give you an edge in Thane's real estate landscape.
           </p>
        </section>

         {/* Our Proven Success in Thane's Real Estate Market */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">Our Proven Success in Thane's Real Estate Market</h2>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">A Track Record of Delivering Results</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
            We have a history of helping clients achieve their sales targets in Thane:
           </p>
           <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
             <li><strong className="font-semibold">Verified Inquiries</strong>: Each lead is thoroughly vetted to ensure authenticity.</li>
             <li><strong className="font-semibold">High Conversion Rates</strong>: Success stories from areas like <strong className="font-semibold">Ghodbunder Road</strong> and <strong className="font-semibold">Hiranandani Estate</strong>.</li>
             <li><strong className="font-semibold">Satisfied Clients</strong>: Testimonials from builders, developers, and realtors who have benefited from our services.</li>
           </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
             Our expertise in <strong className="font-semibold">digital marketing</strong>, including targeted <strong className="font-semibold">ads</strong> and <strong className="font-semibold">online expos</strong>, amplifies your reach to potential buyers.
           </p>
        </section>

         {/* Customized Lead Packages and Discounted Plans */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">Customized Lead Packages and Discounted Plans</h2>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Options to Suit Your Needs</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
            We offer various plans to match your business goals:
           </p>
           <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
             <li><strong className="font-semibold">Fresh Leads</strong>: Newly generated inquiries for immediate action.</li>
             <li><strong className="font-semibold">Long-Term Prospects</strong>: Data on buyers planning future investments.</li>
             <li><strong className="font-semibold">Discounted Packages</strong>: Special deals for specific areas like <strong className="font-semibold">Pokhran Road</strong> and <strong className="font-semibold">Kasarvadavali</strong>.</li>
           </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
             Our pricing is competitive, ensuring you get the best value for your investment.
           </p>
        </section>

        {/* Insights into Buyer Preferences in Thane */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">Insights into Buyer Preferences in Thane</h2>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">Stay Ahead with Local Market Trends</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
             Understanding what buyers want is key to closing deals:
           </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Affordable Housing</strong>: High demand in <strong className="font-semibold">Vartak Nagar</strong> and <strong className="font-semibold">Kopri</strong> among first-time homebuyers.</li>
              <li><strong className="font-semibold">Luxury Amenities</strong>: Interest in premium facilities in <strong className="font-semibold">Hiranandani Estate</strong> and <strong className="font-semibold">Ghodbunder Road</strong>.</li>
              <li><strong className="font-semibold">Commercial Growth</strong>: Increased need for office spaces in <strong className="font-semibold">Majiwada</strong> and <strong className="font-semibold">Balkum</strong> due to business expansions.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
             We provide you with actionable insights to tailor your offerings effectively.
           </p>
        </section>

         {/* Superior Lead Quality and Exclusivity in Thane */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">Superior Lead Quality and Exclusivity in Thane</h2>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">High-Quality Leads You Can Rely On</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
             Our commitment to quality ensures:
           </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
               <li><strong className="font-semibold">Exclusivity</strong>: Leads are shared with a limited number of clients to maximize your chances of closing.</li>
               <li><strong className="font-semibold">Recentness</strong>: All leads are up-to-date, ensuring you're connecting with buyers actively seeking properties.</li>
               <li><strong className="font-semibold">Verification</strong>: Each inquiry is cross-checked for accuracy and intent.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
             This focus on quality reduces your acquisition costs and boosts your return on investment.
           </p>
        </section>

         {/* Get Started with Premium Property Leads in Thane Today */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">Get Started with Premium Property Leads in Thane Today</h2>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">Seize the Opportunity in Thane's Real Estate Boom</h3>
           <p className="text-gray-700 leading-relaxed mb-4">
             Don't let your competitors get ahead. With our help, you can:
           </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Connect with High-Intent Buyers</strong>: Engage with clients ready to make a purchase in areas like <strong className="font-semibold">Manpada</strong> and <strong className="font-semibold">Kolshet Road</strong>.</li>
              <li><strong className="font-semibold">Leverage Mobile Accessibility</strong>: Our platform is optimized for mobile, allowing you to access leads on the go.</li>
              {/* Added the missing "Receive Active Support" point based on image structure inference */}
              <li><strong className="font-semibold">Receive Active Support</strong>: Our team is dedicated to assisting you every step of the way.</li>
            </ul>
             {/* Added the missing concluding paragraph based on image structure inference */}
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                Your Partner in Thane's Dynamic Real Estate Market
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
                Join hands with us to unlock the full potential of Thane's real estate opportunities. With our verified data, personalized service, and exclusive leads, you can take your business to new heights. Contact us now to start connecting with Thane's most active property seekers.
            </p>
        </section>

      </div>
    </div>
  );
};

export default ThaneRealEstatePage;