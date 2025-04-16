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


const PunePropertyLeadsPage: React.FC = () => {

  // Data for the stat boxes
  const stats = [
    { value: '₹ 5', label: 'Avg. Cost/Lead', type: 'Long-Term Leads' },
    { value: '₹ 45', label: 'Avg. Cost/Lead', type: 'Recent Leads' },
    { value: '[Call Sales]', label: 'Avg. Cost/Lead', type: 'Fresh Leads' },
    { value: '92%', label: '', type: 'Avg. Quality', isCircle: true }, // Flag for special circle style
  ];

  const popularLocalities = [
    "Hinjewadi", "Baner", "Koregaon Park", "Kharadi", "Wakad", "Hadapsar", "Viman Nagar", "Kothrud", "Aundh", "Magarpatta",
    "Wagholi", "Pimpri-Chinchwad", "Undri", "NIBM Road", "Boat Club Road", "Balewadi", "Pashan", "Yerwada", "Kalyaninagar", "Mundhwa"
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <section className="mb-12 md:flex md:items-start md:space-x-12">
          {/* Left Side: Title, Subtitle, Buttons */}
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-800 mb-4 leading-tight">
              Pune Property Leads: Cost-Effective Growth with LeadBuddy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find out why LeadBuddy is the go-to source for Pune real estate leads, offering unmatched quality and flexibility.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <span>Get Property Leads in Pune</span>
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

        {/* Why Pune is a Prime Destination for Real Estate Investment */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Pune is a Prime Destination for Real Estate Investment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pune’s real estate landscape is shaped by its unique blend of modernity and tradition. The city’s rapid urbanization, driven by IT hubs like Hinjewadi and industrial zones like Chakan, has spurred demand for residential properties ranging from affordable apartments to luxury villas. Meanwhile, its proximity to Mumbai, excellent connectivity via highways and the upcoming Pune Metro, and a pleasant climate make it an attractive alternative to the bustling financial capital.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The demand for property in Pune spans multiple buyer segments:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4 mb-4">
            <li><strong className="font-semibold">Young Professionals:</strong> Drawn by IT and corporate jobs in areas like Kharadi and Magarpatta.</li>
            <li><strong className="font-semibold">Families:</strong> Seeking spacious homes in suburban locales like Baner and Wakad.</li>
            <li><strong className="font-semibold">HNIs and NRIs:</strong> Targeting premium properties in Koregaon Park and Boat Club Road for investment and lifestyle upgrades.</li>
            <li><strong className="font-semibold">Students and Academics:</strong> Fueling rental demand near educational hubs like Viman Nagar and Kothrud.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            This diversity translates into a constant need for real estate leads—leads that are not just numerous but also high-intent and ready to transact. For real estate professionals, the challenge lies in identifying and engaging these prospects efficiently. LeadBuddy addresses this challenge head-on with its specialized lead generation packages, designed to cater to different timelines, budgets, and buyer profiles.
          </p>
        </section>

        {/* 20 Popular Localities in Pune for Property Investment */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            20 Popular Localities in Pune for Property Investment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pune’s real estate market thrives across its urban and suburban neighborhoods, each offering unique advantages for buyers and investors. Below are 20 of the most sought-after localities, making them prime targets for real estate leads:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {popularLocalities.map((locality, index) => (
              <div key={index} className="bg-gray-50 rounded-md p-3 text-sm text-gray-700">
                {locality}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            These localities represent a cross-section of Pune’s real estate diversity, from budget-friendly suburbs to luxury enclaves. For real estate professionals, targeting leads in these areas requires precision and access to verified, high-intent inquiries—something LeadBuddy excels at delivering.
          </p>
        </section>

        {/* The Importance of Quality Real Estate Leads in Pune */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            The Importance of Quality Real Estate Leads in Pune
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In a city as dynamic as Pune, not all leads are created equal. Cold leads from outdated databases or generic portals often waste time and resources, while high-intent leads—those actively seeking properties—drive faster conversions and higher returns. The key is to source leads that align with your business goals, whether you’re targeting first-time buyers in Wagholi, luxury investors in Koregaon Park, or IT professionals in Hinjewadi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            LeadBuddy stands out as the preferred choice for property and real estate leads in Pune because it offers:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Verified Inquiries:</strong> Leads are sourced and vetted to ensure genuine interest.</li>
            <li><strong className="font-semibold">Segmented Packages:</strong> Options tailored to different buyer timelines and profiles.</li>
            <li><strong className="font-semibold">Localized Expertise:</strong> Coverage across Pune’s top localities, including the 20 listed above.</li>
            <li><strong className="font-semibold">Cost Efficiency:</strong> Competitive pricing that maximizes ROI compared to traditional lead sources.</li>
          </ul>
        </section>

        {/* LeadBuddy Packages: Tailored Solutions for Pune’s Real Estate Market */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            LeadBuddy Packages: Tailored Solutions for Pune’s Real Estate Market
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LeadBuddy provides four distinct packages—Long-Term Leads, Recent Leads, Fresh Leads, and HNI Leads—each designed to meet specific needs in Pune’s competitive property market. Here’s why these packages make LeadBuddy the go-to solution:
          </p>

          {/* Long-Term Leads Package */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Long-Term Leads Package</h3>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Price:</strong> ₹9,999 (Minimum Order Value)</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Inquiry Timeline:</strong> 6-12 months</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Average Cost per Lead:</strong> ₹5</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Quality:</strong> 87%</p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="font-semibold">Why It Works for Pune:</strong> Ideal for strategic follow-ups, this package targets leads who inquired 6-12 months ago. In Pune, where buyers often take time to research options in areas like Kothrud or Pimpri-Chinchwad, these leads may now be ready to act. With reduced competition and a low cost per lead, this package offers cost-efficient growth for agents nurturing prospects in suburban or emerging areas like Wagholi and Undri.
            </p>
          </div>

          {/* Recent Leads Package */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Recent Leads Package</h3>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Price:</strong> ₹34,999 (Minimum Order Value)</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Inquiry Timeline:</strong> 1-3 months</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Average Cost per Lead:</strong> ₹45</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Quality:</strong> 95%</p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="font-semibold">Why It Works for Pune:</strong> Perfect for timely engagement, Recent Leads suit Pune’s fast-moving IT hubs like Hinjewadi and Kharadi, where professionals seek quick housing solutions. The high buyer intent and shorter sales cycle make this package a favorite for agents targeting mid-range buyers in Wakad or Hadapsar, ensuring faster conversions.
            </p>
          </div>

          {/* Fresh Leads Package */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Fresh Leads Package</h3>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Price:</strong> ₹1,49,999 (Minimum Order Value)</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Inquiry Timeline:</strong> 1 Day (Live Delivery)</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Average Cost per Lead:</strong> Call Sales for Quote</p>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Quality:</strong> 97%</p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="font-semibold">Why It Works for Pune:</strong> Fresh Leads are the gold standard for quick conversions, delivering real-time inquiries from buyers ready to transact. In high-demand areas like Baner, Viman Nagar, and Magarpatta, where properties move fast, this package gives agents a competitive edge. It’s ideal for securing immediate bookings in Pune’s bustling market.
            </p>
          </div>

          {/* HNI Leads (Acquisition) */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4. HNI Leads (Acquisition)</h3>
            <p className="text-gray-700 leading-relaxed mb-1"><strong className="font-semibold">Process:</strong> Submit requirements, source tailored data, review, pay brokerage, and receive HNI data.</p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="font-semibold">Why It Works for Pune:</strong> Pune’s luxury market—think Koregaon Park, Boat Club Road, and Kalyaninagar—attracts HNIs and UHNI (Ultra-High-Net-Worth Individuals) seeking premium properties. LeadBuddy’s HNI Leads service connects agents with elite buyers based on specific criteria (e.g., location, income, or property type), making it the ultimate tool for high-value deals in Pune’s upscale neighborhoods.
            </p>
          </div>
        </section>

        {/* Why LeadBuddy is the Preferred Choice for Property/Real Estate Leads in Pune */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why LeadBuddy is the Preferred Choice for Property/Real Estate Leads in Pune
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While many lead generation platforms exist, LeadBuddy distinguishes itself as the top choice for Pune’s real estate professionals. Here’s why:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Targeted Local Coverage:</strong> LeadBuddy provides leads across Pune’s key markets, from IT-driven Hinjewadi to luxury enclaves like Koregaon Park. Unlike generic portals, it focuses on locality-specific inquiries, ensuring agents connect with buyers in their target areas.</li>
            <li><strong className="font-semibold">High-Quality, Verified Leads:</strong> With quality ratings of 87% (Long-Term), 95% (Recent), and 97% (Fresh), LeadBuddy’s leads are vetted for authenticity and intent. This minimizes wasted effort and maximizes conversion rates, a critical advantage in Pune’s competitive landscape.</li>
            <li><strong className="font-semibold">Flexible Packages for Every Need:</strong> Whether you’re a solo agent chasing quick sales in Kharadi or a developer nurturing long-term prospects in Pashan, LeadBuddy’s tiered packages cater to diverse strategies and budgets. The HNI Leads option further elevates its appeal for luxury brokers.</li>
            <li><strong className="font-semibold">Cost Efficiency and ROI:</strong> Starting at just ₹5 per lead for Long-Term packages, LeadBuddy offers unmatched value. Compare this to the time and expense of manually sourcing leads in a city as vast as Pune, and the ROI becomes clear.</li>
            <li><strong className="font-semibold">Expertise in Pune’s Market Dynamics:</strong> LeadBuddy understands Pune’s unique buyer profiles—IT professionals, HNIs, families, and NRIs—and tailors its services accordingly. This localized expertise ensures leads align with the city’s evolving trends, such as the rise of Wagholi or the luxury boom in Boat Club Road.</li>
            <li><strong className="font-semibold">Streamlined Process:</strong> From calculating lead costs (via <a href="https://leadbuddy.in/calculate-your-lead-cost" className="text-purple-600 hover:underline">leadbuddy.in/calculate-your-lead-cost</a>) to delivering live Fresh Leads, LeadBuddy simplifies the process, letting agents focus on closing deals rather than chasing prospects.</li>
          </ul>
        </section>

        {/* Leveraging LeadBuddy for Success in Pune’s Top Localities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Leveraging LeadBuddy for Success in Pune’s Top Localities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Let’s explore how LeadBuddy’s packages align with Pune’s 20 popular localities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Hinjewadi, Kharadi, Magarpatta:</strong> Use Fresh Leads to capture IT professionals needing immediate housing near workplaces.</li>
            <li><strong className="font-semibold">Baner, Wakad, Balewadi:</strong> Recent Leads suit mid-range buyers seeking timely engagement in these growing suburbs.</li>
            <li><strong className="font-semibold">Koregaon Park, Boat Club Road, Kalyaninagar:</strong> HNI Leads target affluent buyers in Pune’s luxury corridors.</li>
            <li><strong className="font-semibold">Kothrud, Aundh, Pashan:</strong> Long-Term Leads nurture families and retirees in these established residential zones.</li>
            <li><strong className="font-semibold">Wagholi, Undri, Mundhwa:</strong> Cost-efficient Long-Term Leads work for emerging areas with budget-conscious buyers.</li>
            <li><strong className="font-semibold">Viman Nagar, Yerwada, Hadapsar:</strong> Fresh or Recent Leads tap into rental and mid-range demand near airports and IT hubs.</li>
            <li><strong className="font-semibold">Pimpri-Chinchwad, NIBM Road:</strong> Recent Leads engage industrial workers and families in these mixed-use zones.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            By matching the right LeadBuddy package to each locality’s buyer profile, agents can optimize their outreach and close deals faster.
          </p>
        </section>

        {/* The Edge of HNI Leads in Pune’s Luxury Market */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            The Edge of HNI Leads in Pune’s Luxury Market
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pune’s luxury real estate segment is booming, driven by HNIs and NRIs eyeing properties in Koregaon Park, Boat Club Road, and Kalyaninagar. LeadBuddy’s HNI Leads service is a game-changer here, offering:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Custom Targeting:</strong> Specify preferences like location (e.g., riverfront homes in Boat Club Road) or budget (e.g., ₹5 crore+ properties).</li>
            <li><strong className="font-semibold">Exclusive Access:</strong> Connect with elite buyers who are hard to reach through traditional channels.</li>
            <li><strong className="font-semibold">High-Value Transactions:</strong> Close deals with higher profit margins, justifying the investment in this premium service.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            For brokers and developers in Pune’s luxury market, HNI Leads provide a direct pipeline to the city’s wealthiest prospects, making LeadBuddy indispensable.
          </p>
        </section>

        {/* Conclusion: Partner with LeadBuddy for Pune Real Estate Success */}
        <section className="py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Conclusion: Partner with LeadBuddy for Pune Real Estate Success
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pune’s real estate market offers immense potential, but success hinges on accessing the right leads at the right time. With its tailored packages—Long-Term Leads (₹9,999), Recent Leads (₹34,999), Fresh Leads (₹1,49,999), and HNI Leads—LeadBuddy delivers a comprehensive solution for agents, developers, and brokers. Its focus on quality, locality-specific targeting, and cost efficiency makes it the preferred choice over generic portals or manual lead generation.
          </p>
          <p className="text-lg font-semibold text-purple-700">
            Whether you’re targeting affordable flats in Wagholi, luxury villas in Koregaon Park, or IT-driven demand in Hinjewadi, LeadBuddy has a package to match your goals. Visit <a href="https://leadbuddy.in" className="text-purple-600 hover:underline">leadbuddy.in</a> today, calculate your lead cost, and unlock the power of Pune’s property market with the industry’s leading lead provider. In a city where opportunity knocks daily, let LeadBuddy open the door.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PunePropertyLeadsPage;