import React from 'react';

// Define an interface for the numbered step data
interface Step {
  id: number;
  title: string;
  description: string;
}

const HniUhniDataPage: React.FC = () => {
  // Updated steps based on the HNI/UHNI image
  const steps: Step[] = [
    { id: 1, title: "Submit Your Requirements", description: "Provide specific details about the HNIs you are targeting, such as location, income, or car ownership." },
    { id: 2, title: "We Source Tailored HNI Data", description: "Using our network, we acquire HNI data that matches your criteria." },
    { id: 3, title: "Review and Confirm", description: "Review the gathered HNI data and confirm it meets your needs." },
    { id: 4, title: "Make Brokerage Payment", description: "Once the data is confirmed, proceed with the brokerage payment." },
    { id: 5, title: "Receive HNI Data & Start Engaging", description: "After payment, we deliver the data, allowing you to target and engage with high-value clients." },
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
              Connect with Elite Audiences: HNI & UHNI Data Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our data acquisition services provide you with exclusive access to HNI and UHNI clients for strategic marketing. By acquiring this exclusive data, your business can connect with high-net-worth individuals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
                I want HNI Leads
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

        {/* How to Acquire Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Acquire Tailored HNI Data Leads?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
             For businesses looking to engage with high-value clients, <strong className="font-semibold">HNI data leads</strong> provide a golden opportunity. By obtaining precise, high-quality HNI data, you can directly reach individuals with substantial wealth, making your outreach and engagement efforts highly efficient and impactful. In this article, we will guide you through the steps to secure tailored HNI data leads that align with your specific requirements, allowing you to connect with the right audience and maximize your business potential.
          </p>
        </section>

        {/* Step-by-Step Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process to Secure HNI Data Leads</h2>

          {/* Step 1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Submit Your Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
               The first step in acquiring <strong className="font-semibold">HNI data leads</strong> is understanding and clearly defining who you are targeting. Whether you're interested in <strong className="font-semibold">high-net-worth individuals (HNIs)</strong> based on their location, income, car ownership, or other factors, it's crucial to specify these details in your submission.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                <li><strong className="font-semibold">Why it's important</strong>: A detailed request allows us to tailor the data to your exact needs, ensuring the leads you receive are relevant and actionable.</li>
                <li><strong className="font-semibold">Action to take</strong>: Fill out the HNI requirement form with specific criteria such as location (e.g., Mumbai, Delhi), income levels, or even specific lifestyle markers like luxury car ownership.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">2. We Source Tailored HNI Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
               Once we have received your specific requirements, our network goes into action. We source <strong className="font-semibold">high-quality, verified HNI data</strong> that matches the exact profile you're looking for. Using extensive databases and verified sources, we ensure that the information is accurate and up to date.
            </p>
             <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                <li><strong className="font-semibold">Our Expertise</strong>: We've built a vast network to gather premium HNI data. Our method combines cutting-edge technology with first-hand experience in identifying and vetting high-value individuals.</li>
                <li><strong className="font-semibold">Why it matters</strong>: By receiving <strong className="font-semibold">customized data</strong>, you'll be able to target individuals more likely to engage with your product or service, leading to better conversion rates and a higher ROI.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Review and Confirm</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
               Once we gather the relevant data, you'll have the opportunity to review it. This step ensures that the <strong className="font-semibold">HNI leads</strong> meet your expectations and align with the specific criteria you outlined.
            </p>
             <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                 <li><strong className="font-semibold">Why it's essential</strong>: Reviewing the data allows you to assess whether the HNI profiles match your target audience before making any financial commitment.</li>
                <li><strong className="font-semibold">Expert Insight</strong>: Our service ensures that only <strong className="font-semibold">qualified and accurate data</strong> is presented for your review. This minimizes wasted outreach efforts and maximizes engagement with genuinely interested leads.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Make Brokerage Payment</h3>
             <p className="text-gray-700 leading-relaxed mb-4">
               After confirming that the data meets your requirements, you can proceed with the brokerage payment. This straightforward step secures the data, allowing you to proceed with confidence.
             </p>
             <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                 <li><strong className="font-semibold">Efficiency in Action</strong>: We aim for a smooth transaction process so that you can focus on what truly matters—engaging with your newfound HNI leads.</li>
                <li><strong className="font-semibold">Why it works</strong>: Making the payment secures exclusive access to the data, giving you a competitive advantage in reaching <strong className="font-semibold">high-net-worth individuals</strong> who are ready for engagement.</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Receive HNI Data & Start Engaging</h3>
             <p className="text-gray-700 leading-relaxed mb-4">
               Once the brokerage payment is processed, we promptly deliver the tailored HNI data to you. With this data in hand, you can start reaching out to potential clients who are primed for engagement and growth.
             </p>
             <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                 <li><strong className="font-semibold">Benefits of Immediate Action</strong>: Receiving the data quickly allows you to capitalize on opportunities without delay. You can start crafting personalized outreach strategies immediately.</li>
                <li><strong className="font-semibold">Why it's impactful</strong>: HNI data gives you direct access to <strong className="font-semibold">high-value clients</strong>, offering unmatched precision in targeting. These leads are more likely to convert, boosting your overall business success.</li>
            </ul>
          </div>
        </section>

         {/* Understanding the Service Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding the Service</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our HNI data lead generation service is designed with businesses in mind that want to target <strong className="font-semibold">affluent individuals</strong> and decision-makers. We understand the nuances of sourcing high-net-worth leads, which is why our service is built on expertise and a proven network of data sources. Whether you're a luxury brand, a real estate developer, or a financial service provider, connecting with HNIs is crucial for driving significant sales and growth.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed pl-4">
            <li><strong className="font-semibold">Key Offering</strong>: Our service doesn't rely on generic databases; we provide <strong className="font-semibold">tailored data</strong> that matches your precise needs, ensuring you are reaching individuals who are more likely to engage with your offerings.</li>
            <li><strong className="font-semibold">Experience and Expertise</strong>: Having successfully sourced HNI leads for numerous clients across various industries, we combine <strong className="font-semibold">first-hand knowledge</strong> with an extensive network of high-net-worth individuals to guarantee <strong className="font-semibold">quality and reliability</strong>.</li>
          </ul>
        </section>

        {/* Evaluating Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Evaluating the Benefits</h2>

           {/* Benefit 1 */}
          <div className="mb-6">
            <p className="text-xl font-bold text-gray-900 mb-2">1. Highly Targeted and Relevant Data</p>
            <p className="text-gray-700 leading-relaxed">
              With our service, you get <strong className="font-semibold">tailored HNI data</strong> that's precisely filtered to meet your criteria. Whether you're looking to engage individuals based on their location, lifestyle, or purchasing power, we ensure the leads you receive are highly relevant to your goals.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="mb-6">
             <p className="text-xl font-bold text-gray-900 mb-2">2. Save Time and Resources</p>
             <p className="text-gray-700 leading-relaxed">
               Instead of conducting laborious research on your own, our service delivers <strong className="font-semibold">verified, up-to-date HNI leads</strong> directly to you. This saves you the time and effort typically spent on data gathering and validation.
             </p>
          </div>

          {/* Benefit 3 */}
           <div className="mb-6">
             <p className="text-xl font-bold text-gray-900 mb-2">3. Boost Conversion Rates</p>
             <p className="text-gray-700 leading-relaxed">
               Our high-quality leads are tailored to your specific requirements, ensuring that the individuals you reach are genuinely interested in your offerings. This leads to a <strong className="font-semibold">higher likelihood of conversion</strong>, helping you achieve your business goals faster.
             </p>
          </div>

           {/* Benefit 4 */}
          <div className="mb-6">
             <p className="text-xl font-bold text-gray-900 mb-2">4. Competitive Advantage</p>
             <p className="text-gray-700 leading-relaxed">
               By leveraging our <strong className="font-semibold">exclusive network</strong> and <strong className="font-semibold">high-value leads</strong>, you get a leg up on the competition. You will be engaging with clients that your competitors may not have access to, giving you the upper hand in the marketplace.
             </p>
          </div>
        </section>

        {/* Final Concluding Paragraph */}
        <section>
             <p className="text-gray-700 leading-relaxed font-medium">
               By following this guide, you'll have a clear understanding of how our HNI lead generation service works, its benefits, and the steps needed to engage with high-net-worth individuals successfully. Start the process today by submitting your HNI requirements and unlock the potential for unparalleled growth and success.
            </p>
        </section>

      </div>
    </div>
  );
};

export default HniUhniDataPage;