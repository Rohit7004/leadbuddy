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


const BengaluruPropertyLeadsPage: React.FC = () => {

  // Data for the stat boxes
  const stats = [
    { value: '₹ 7', label: 'Avg. Cost/Lead', type: 'Long-Term Leads' },
    { value: '₹ 35', label: 'Avg. Cost/Lead', type: 'Recent Leads' },
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
              High-Intent Real Estate Leads - Connect with Bengaluru Property Seekers. Prospect or Active Buyers.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Property Leads in Bengaluru's Trendy Lifestyle Districts - Engage Buyers Drawn to Modern Living Spaces with Urban Amenities
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <span>Get Property Leads in Bengaluru</span>
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

        {/* Exploring Bengaluru's Booming Property Scene */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Exploring Bengaluru's Booming Property Scene
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bengaluru, popularly known as Bangalore, is the pulsating heart of India's technology revolution. As the Silicon Valley of India, the city boasts a vibrant mix of culture, innovation, and opportunity. The real estate market here is a reflection of its dynamic population, comprising tech professionals, entrepreneurs, investors, and families seeking a high-quality lifestyle. Localities like <strong className="font-semibold">Basavanagudi</strong>, <strong className="font-semibold">Indira Nagar</strong>, <strong className="font-semibold">Jayanagar</strong>, and <strong className="font-semibold">Koramangala</strong> are among the most sought-after neighborhoods, each offering a unique blend of residential and commercial prospects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With rapid infrastructure development, excellent connectivity, and a booming economy, Bengaluru's property market presents a golden opportunity for realtors, builders, and developers. From luxury villas and bungalows in <strong className="font-semibold">Sadashivanagar</strong> to modern apartments in <strong className="font-semibold">Malleshwaram</strong> and commercial office spaces in <strong className="font-semibold">Frazer Town</strong>, the city's diverse real estate landscape caters to a wide array of preferences and budgets.
          </p>
        </section>

        {/* Advantages of Choosing Our Exclusive Bengaluru Leads */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Advantages of Choosing Our Exclusive Bengaluru Leads
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our lead generation agency specializes in providing <strong className="font-semibold">exclusive</strong>, <strong className="font-semibold">high-intent</strong> property leads that are tailored to Bengaluru's real estate market. Here's why partnering with us gives you a competitive edge:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Access to Verified, Live Leads:</strong> We offer a database of <strong className="font-semibold">fresh leads</strong> comprising serious property seekers actively looking to purchase in Bengaluru. Each lead is <strong className="font-semibold">verified</strong> to ensure authenticity, saving you time and resources.</li>
            <li><strong className="font-semibold">Focus on High-Value Investors and HNIs:</strong> Our platform connects you with <strong className="font-semibold">high-net-worth individuals (HNIs)</strong> and <strong className="font-semibold">investors</strong> interested in high-value properties, including luxury homes, villas, and commercial spaces.</li>
            <li><strong className="font-semibold">Local Market Insights:</strong> Leveraging data-driven strategies and local market knowledge, we provide insights into buyer preferences in specific localities like <strong className="font-semibold">Rajaji Nagar</strong> and <strong className="font-semibold">Sadashivanagar</strong>, helping you tailor your offerings.</li>
            <li><strong className="font-semibold">Customized Lead Packages:</strong> Choose from various lead types—long-term prospects, <strong className="font-semibold">recent inquiries</strong>, or <strong className="font-semibold">fresh leads</strong>—to suit your business needs. Our packages are designed to maximize your ROI in Bengaluru's competitive market.</li>
            <li><strong className="font-semibold">Digital Marketing Expertise:</strong> Our <strong className="font-semibold">digital marketing</strong> and <strong className="font-semibold">ads</strong> strategies ensure that your properties get maximum visibility among potential buyers, enhancing the chances of closing deals quickly.</li>
          </ul>
        </section>

        {/* Ideal Clients for Our Bengaluru Property Leads */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ideal Clients for Our Bengaluru Property Leads
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our property leads are ideal for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Builders and Developers:</strong> Looking to sell new residential projects, luxury villas, or commercial properties in prime locations like <strong className="font-semibold">Indira Nagar</strong> and <strong className="font-semibold">Koramangala</strong>.</li>
            <li><strong className="font-semibold">Realtors and Real Estate Agents/Brokers:</strong> Seeking to expand their client base with verified buyers interested in <strong className="font-semibold">resale</strong> properties, <strong className="font-semibold">ready-to-move-in</strong> homes, or <strong className="font-semibold">plots</strong> of land.</li>
            <li><strong className="font-semibold">Marketing Firms:</strong> Aiming to provide their real estate clients with quality leads to boost sales and enhance market presence.</li>
            <li><strong className="font-semibold">Channel Partners (CPs):</strong> Wanting to collaborate with developers and builders to promote properties and share in the success of closed deals.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you're targeting <strong className="font-semibold">first-time homebuyers</strong> looking for affordable <strong className="font-semibold">apartments</strong> in <strong className="font-semibold">Jayanagar</strong> or HNIs interested in exclusive <strong className="font-semibold">bungalows</strong> in <strong className="font-semibold">Basavanagudi</strong>, our leads align perfectly with your target audience.
          </p>
        </section>

        {/* Success Stories: Our Impact in Bengaluru */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Success Stories: Our Impact in Bengaluru
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over the years, we have established ourselves as a trusted partner for real estate professionals in Bengaluru. Our <strong className="font-semibold">proven track record</strong> includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Successful Collaborations:</strong> Partnering with top builders and developers to market prestigious projects across the city.</li>
            <li><strong className="font-semibold">Satisfied Clients:</strong> Numerous testimonials highlight our commitment to providing quality leads that result in successful <strong className="font-semibold">purchases</strong> and long-term client relationships.</li>
            <li><strong className="font-semibold">Market Penetration:</strong> Helping clients penetrate competitive markets in localities like <strong className="font-semibold">Malleshwaram</strong> and <strong className="font-semibold">Frazer Town</strong>, leading to increased sales and brand recognition.</li>
            <li><strong className="font-semibold">Innovative Strategies:</strong> Implementing cutting-edge <strong className="font-semibold">digital marketing</strong> techniques, including targeted <strong className="font-semibold">ads</strong> and SEO, to reach active property seekers.</li>
          </ul>
        </section>

        {/* Customized Lead Options for Bengaluru Real Estate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Customized Lead Options for Bengaluru Real Estate
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding the unique demands of Bengaluru's real estate market, we offer a variety of lead types and service plans:
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Lead Types:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Fresh Leads:</strong> Newly generated leads from potential buyers who have recently expressed interest in properties.</li>
              <li><strong className="font-semibold">Recent Leads:</strong> Leads from active seekers currently Browse listings or making inquiries.</li>
              <li><strong className="font-semibold">Long-Term Prospects:</strong> Potential buyers planning to purchase in the near future, allowing you to build relationships and guide them through the process.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Packages:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              <li><strong className="font-semibold">Residential Focus:</strong> Tailored for those dealing with <strong className="font-semibold">flats</strong>, <strong className="font-semibold">apartments</strong>, <strong className="font-semibold">villas</strong>, and <strong className="font-semibold">luxury homes</strong> in areas like <strong className="font-semibold">Indira Nagar</strong> and <strong className="font-semibold">Jayanagar</strong>.</li>
              <li><strong className="font-semibold">Commercial Focus:</strong> Ideal for properties like <strong className="font-semibold">offices</strong>, <strong className="font-semibold">commercial spaces</strong>, and <strong className="font-semibold">plots</strong> in business hubs such as <strong className="font-semibold">Koramangala</strong> and <strong className="font-semibold">Frazer Town</strong>.</li>
              <li><strong className="font-semibold">Mixed Package:</strong> A combination of residential and commercial leads for a comprehensive approach.</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Each package includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Exclusive or Semi-Exclusive Access:</strong> Leads are provided exclusively to you, eliminating competition and increasing conversion chances. (Leads Exclusivity depends on the plan you choose)</li>
            <li><strong className="font-semibold">Flexible Plans:</strong> Choose from monthly, quarterly, or annual plans with the option to scale up as your business grows.</li>
            <li><strong className="font-semibold">Attractive Discounts:</strong> Benefit from special pricing and <strong className="font-semibold">discounts</strong> on bulk lead purchases or long-term commitments.</li>
          </ul>
        </section>

        {/* Understanding Bengaluru Buyers: Local Market Insights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Understanding Bengaluru Buyers: Local Market Insights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bengaluru's diverse population means varied preferences when it comes to real estate:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Tech Professionals:</strong> Often seek modern <strong className="font-semibold">apartments</strong> or <strong className="font-semibold">flats</strong> near IT corridors like Electronic City and Whitefield, valuing proximity to workplaces and amenities.</li>
            <li><strong className="font-semibold">Families:</strong> Prefer spacious homes in tranquil neighborhoods such as <strong className="font-semibold">Basavanagudi</strong> and <strong className="font-semibold">Jayanagar</strong>, with access to schools, parks, and community facilities.</li>
            <li><strong className="font-semibold">HNIs and Investors:</strong> Look for <strong className="font-semibold">luxury homes</strong>, <strong className="font-semibold">bungalows</strong>, and <strong className="font-semibold">villas</strong> in upscale areas like <strong className="font-semibold">Sadashivanagar</strong> and <strong className="font-semibold">Koramangala</strong>, focusing on exclusivity and high-end amenities.</li>
            <li><strong className="font-semibold">First-Time Homebuyers:</strong> Interested in affordable yet quality housing options, often in emerging localities that offer value for money.</li>
            <li><strong className="font-semibold">Commercial Buyers:</strong> Seek <strong className="font-semibold">office</strong> spaces and commercial properties in bustling business districts like <strong className="font-semibold">Frazer Town</strong> and <strong className="font-semibold">Rajaji Nagar</strong>.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Understanding these preferences allows you to tailor your offerings and marketing strategies to meet the specific needs of your target audience.
          </p>
        </section>

        {/* Area-Specific Lead Quality and Exclusivity */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Area-Specific Lead Quality and Exclusivity
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We prioritize the quality and exclusivity of our leads:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Quality Metrics:</strong> Each lead undergoes rigorous verification to ensure they are genuine, high-intent buyers with the capacity and readiness to purchase.</li>
            <li><strong className="font-semibold">Recentness:</strong> Leads are updated in real-time, providing you with the most current opportunities to engage with active seekers.</li>
            <li><strong className="font-semibold">Exclusivity:</strong> Our leads are exclusive to you within the agreed-upon terms, preventing overlaps with competitors and enhancing your chances of closing deals.</li>
            <li><strong className="font-semibold">Customized Vetting:</strong> Leads can be filtered based on specific criteria such as budget, property type (e.g., <strong className="font-semibold">flats</strong>, <strong className="font-semibold">villas</strong>, <strong className="font-semibold">land</strong>), and preferred localities (e.g., <strong className="font-semibold">Indira Nagar</strong>, <strong className="font-semibold">Malleshwaram</strong>).</li>
          </ul>
        </section>

        {/* Our Services and Support */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Services and Support
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer comprehensive support to maximize your success:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Dedicated Account Manager:</strong> A single point of contact to assist with your needs, from selecting the right package to optimizing your engagement strategies.</li>
            <li><strong className="font-semibold">Follow-Up Assistance:</strong> Guidance on effective follow-up techniques to nurture leads and convert them into clients.</li>
            <li><strong className="font-semibold">Marketing Support:</strong> Access to our <strong className="font-semibold">digital marketing</strong> resources, including personalized <strong className="font-semibold">ads</strong>, promotional materials, and participation in online <strong className="font-semibold">expos</strong>.</li>
            <li><strong className="font-semibold">Mobile Platform:</strong> Manage your leads on-the-go with our user-friendly mobile platform, ensuring you never miss an opportunity.</li>
            <li><strong className="font-semibold">Customer Service:</strong> Our team is available to address any queries or concerns, ensuring a smooth and productive partnership.</li>
          </ul>
        </section>

        {/* Begin Your Journey with Premium Bengaluru Property Leads */}
        <section className="py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Begin Your Journey with Premium Bengaluru Property Leads
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The time is ripe to capitalize on Bengaluru's booming real estate market. By partnering with us, you gain access to a wealth of opportunities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4 mb-4">
            <li><strong className="font-semibold">Unlock Valuable Leads in Prime Locations:</strong> Tap into a network of property seekers interested in areas like <strong className="font-semibold">Koramangala</strong>, <strong className="font-semibold">Jayanagar</strong>, and <strong className="font-semibold">Basavanagudi</strong>.</li>
            <li><strong className="font-semibold">Connect with Active Property Seekers Today:</strong> Engage with buyers who are ready to make decisions, reducing your sales cycle and increasing revenue.</li>
            <li><strong className="font-semibold">Benefit from Exclusive Discounts and Offers:</strong> Take advantage of our special <strong className="font-semibold">discounts</strong> and <strong className="font-semibold">service plans</strong> tailored to your business needs.</li>
            <li><strong className="font-semibold">Enhance Your Market Presence:</strong> Utilize our marketing expertise to boost your brand visibility and reputation in Bengaluru's competitive market.</li>
          </ul>
          <p className="text-lg font-semibold text-purple-700">
            Don't miss out on the opportunity to elevate your real estate business. <a href="#" className="text-purple-600 hover:underline">Contact us today</a> to explore how our <strong className="font-semibold">lead generation agency</strong> can drive your success in Bengaluru's vibrant property market. Let's work together to turn prospects into satisfied clients and deals into lasting partnerships.
          </p>
        </section>

      </div>
    </div>
  );
};

export default BengaluruPropertyLeadsPage;