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


const MumbaiRealEstatePage: React.FC = () => {

  // Data for the stat boxes (optional, makes it easier to manage)
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
              Mumbai's Real Estate Goldmine: Tap Into Fresh, Recent and Long-Term Leads!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access high-quality, comprehensive leads of property seekers in Mumbai, the heart of India's commercial landscape, to accelerate your real estate endeavors.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-purple-600 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <CalculatorIcon />
                <span>Calculate Your Lead Cost</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-purple-700 font-medium py-2.5 px-5 rounded border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center shadow-sm">
                <span>Get Property Leads in Mumbai</span>
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

        {/* Property Types & Buyer Segments Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Property Types & Buyer Segments in Mumbai: How These Leads Are Beneficial for Brokers, Marketing Firms, CP: Channel Partner and Developers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mumbai's <strong className="font-semibold">real estate market</strong> offers a range of <strong className="font-semibold">property types</strong> and <strong className="font-semibold">buyer classifications</strong> that make choosing the appropriate property seeker leads essential for <strong className="font-semibold">developers</strong>, <strong className="font-semibold">marketers</strong>, and <strong className="font-semibold">brokers</strong> as well as for several other realtors. Here's how these leads are beneficial:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
            <li>Highly sought for by <strong className="font-semibold">HNI investors</strong> and <strong className="font-semibold">affluent purchasers</strong> are leads for <strong className="font-semibold">luxury houses</strong>, including <strong className="font-semibold">villas</strong>, <strong className="font-semibold">bungalows</strong>, and <strong className="font-semibold">residential apartments</strong> in prominent locales such as Worli Sea Face, Bandra, and Juhu. These leads provide brokers and developers direct access to <strong className="font-semibold">high-net-worth individuals (HNIs)</strong> who are looking for exclusive properties, making it easier to close <strong className="font-semibold">high-value deals</strong>.</li>
            <li>For <strong className="font-semibold">brokers</strong> and <strong className="font-semibold">marketing firms</strong> targeting young families and working professionals, <strong className="font-semibold">mid-range residential properties</strong> in Andheri, Chembur, and Powai benefit leads. These leads are valuable for developers as they target a large segment of the population looking for <strong className="font-semibold">affordability</strong> paired with <strong className="font-semibold">connectivity</strong> and <strong className="font-semibold">amenities</strong>.</li>
            <li><strong className="font-semibold">Affordable Housing</strong>: Developers focused on reasonably priced house projects particularly rely on leads from Thane, Navi Mumbai, and Mira Road. As these markets indicate growing demand, verified leads let brokers and marketing organizations target <strong className="font-semibold">first-time homeowners</strong> and budget-conscious individuals looking for a suitable investment.</li>
            <li>Mumbai's <strong className="font-semibold">business centers</strong>—<strong className="font-semibold">BKC</strong>, <strong className="font-semibold">Nariman Point</strong>, and <strong className="font-semibold">Lower Parel</strong>—have regularly strong demand for <strong className="font-semibold">commercial real estate</strong>. Targeting these companies or customers looking for <strong className="font-semibold">office space</strong> will help to get quick conversions.</li>
          </ul>
           <p className="text-gray-700 leading-relaxed mt-4">
            Using <strong className="font-semibold">verified property leads</strong> for <strong className="font-semibold">high-intention buyers</strong> and <strong className="font-semibold">investors</strong> allows real estate professionals to directly target these groups, therefore saving the time spent on cold inquiries and increasing the likelihood of closing deals faster.
          </p>
        </section>

        {/* Mumbai's Real Estate Market Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Mumbai's Real Estate Market: Current Developments</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
             Mumbai is well-known for its dynamic nature; ongoing projects of growth drive change. These current trends are shaping the market:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
             <li>Mumbai is still a hub for increasing <strong className="font-semibold">price trend</strong>, especially in important regions like Worli, Bandra, and South Mumbai. Property values in such sectors have drawn <strong className="font-semibold">investors</strong> looking for long-term gains from <strong className="font-semibold">apartment buildings</strong> and <strong className="font-semibold">residences</strong> over time.</li>
             <li>Mumbai's real estate scene is changing thanks to many building projects under development. The extension of the <strong className="font-semibold">Mumbai Metro</strong> and the construction of the <strong className="font-semibold">Mumbai Trans-Harbour Link</strong> constitute two major projects improving connectivity and access—especially in Thane, Navi Mumbai, and Mira-Bhayandar. This has increased demand for <strong className="font-semibold">real estate</strong> in numerous newly created neighborhoods.</li>
             <li>Future developments: The city is building multiple <strong className="font-semibold">luxury houses</strong> and <strong className="font-semibold">mixed-use developments</strong> to serve a spectrum of buyer groups. From <strong className="font-semibold">commercial office towers</strong> in Lower Parel to <strong className="font-semibold">residential townships</strong> in Andheri and Powai, these projects are supposed to attract local as well as international investors.</li>
          </ul>
           <p className="text-gray-700 leading-relaxed mt-4">
            Realtors rely on absolute awareness of these traits. It helps them to better position themselves in the market and generate leads to buyers dependent on the most fascinating and fast-increasing locations.
          </p>
        </section>

        {/* Popular Neighborhoods Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How Popular Neighborhoods, Landmarks, or Real Estate Hotspots Like Worli Sea Face for Mumbai Help You Pitch to Property Seeker Leads
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The well-known landmarks and sites of Mumbai, including Worli Sea Face, will help you appeal much more to possible <strong className="font-semibold">real estate buyers</strong>. Here's how you could gain from them:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
             <li><strong className="font-semibold">Worli Sea Face</strong> is connected with notoriety and distinctiveness since it is well-known for its luxurious <strong className="font-semibold">sea-facing mansions</strong> and perfect location for <strong className="font-semibold">HNIs</strong> and <strong className="font-semibold">rich buyers</strong>. You can sell leads for properties in this area stressing the <strong className="font-semibold">lifestyle benefits</strong>—such as amazing beach views, near proximity to business districts, and upscale facilities appealing to <strong className="font-semibold">luxury purchasers</strong>.</li>
             <li>As a <strong className="font-semibold">cultural and social center</strong>, <strong className="font-semibold">Bandra</strong> attracts patrons looking for a mix of <strong className="font-semibold">luxury</strong> and <strong className="font-semibold">convenience</strong>. Emphasize Bandra's lively nightlife, well-known residences, and close proximity to <strong className="font-semibold">BKC</strong> while you're pitching. This location appeals to professionals as well as investors looking for large rental yields.</li>
             <li>Combining <strong className="font-semibold">luxurious residential towers</strong> with <strong className="font-semibold">commercial office spaces</strong>, Lower Parel attracts corporate leaders and business investors. When showing potential property searches, stress the prime business location, access to luxury restaurants and retail areas, and proximity to key business hubs like <strong className="font-semibold">BKC</strong>.</li>
             <li>Growing IT center <strong className="font-semibold">Powai</strong> features many experts housed in nearby corporate buildings and IT parks. When concentrating on leads in this location, stress the green areas, lakefront views, and modern convenience appealing to families and young professionals.</li>
          </ul>
           <p className="text-gray-700 leading-relaxed mt-4">
            Presenting well-known neighborhoods and landmarks helps consumers to perceive location prestige, probable lifestyle advantages, and access to <strong className="font-semibold">premium real estate</strong>, therefore enabling the conversion of leads into customers.
          </p>
        </section>

        {/* Why Mumbai is Hot Market Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Mumbai is a Hot Market for Real Estate Leads</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4 mb-4">
            <li>From middle-class families searching for moderately priced homes to <strong className="font-semibold">luxury buyers</strong> and <strong className="font-semibold">HNIs</strong> searching for distinctive homes, Mumbai attracts a wide spectrum of <strong className="font-semibold">property hunters</strong>. This large buyer base helps to sustain demand; brokers can effectively reach every group using targeted leads.</li>
            <li>Mumbai's rapid construction of new <strong className="font-semibold">metro lines</strong>, expressways, and the <strong className="font-semibold">Trans-Harbour Link</strong> is transforming once less accessible areas like Thane and Navi Mumbai into attractive <strong className="font-semibold">real estate markets</strong>. As these sites grow, the demand for both <strong className="font-semibold">residential</strong> and <strong className="font-semibold">commercial real estate</strong> is growing, providing developers and brokers plenty of opportunity to make money.</li>
            <li>Given continuous <strong className="font-semibold">price increase</strong> and Mumbai's reputation as India's financial capital, <strong className="font-semibold">real estate investors</strong> view the city as a consistent market for long-term investments. Whether they are <strong className="font-semibold">luxury residences</strong> or <strong className="font-semibold">commercial structures</strong>, property values in key locations keep rising, therefore guaranteeing a great return on investment (ROI).</li>
            <li>Mumbai's real estate sector still draws both local and international investors with local as well as worldwide interests. The city's standing as a global financial hub and growing number of premium developments ensure a constant flow of interest from <strong className="font-semibold">high-net-worth buyers</strong> looking for <strong className="font-semibold">outstanding commercial sites</strong> or <strong className="font-semibold">luxury houses</strong>.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Leveraging these trends and concentrating on <strong className="font-semibold">verified real estate leads list</strong> will help real estate agents/brokers, marketing companies, developers, and <strong className="font-semibold">real estate agents/brokers</strong> maximize their prospects in Mumbai's explosive market and to guarantee faster conversions and higher return on investment for their clients and projects.
          </p>
           <p className="text-gray-700 leading-relaxed">
            In the end, Mumbai's <strong className="font-semibold">real estate industry</strong> offers great opportunities for those with access to the suitable <strong className="font-semibold">property seeker leads</strong>; we as <strong className="font-semibold">suppliers</strong> help to make these possibilities feasible. Using the many buyer categories, infrastructure development, and well-known areas of the city, real estate experts can set themselves for success in this very competitive market.
          </p>
        </section>

      </div>
    </div>
  );
};

export default MumbaiRealEstatePage;