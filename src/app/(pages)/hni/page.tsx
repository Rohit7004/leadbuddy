import React from 'react';

const HNILeads = () => {
  return (
    <div className="font-sans px-4 py-6 md:px-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Connect with Elite Audiences: HNI & UHNI Data Solutions
          </h1>
          <p className="font-semibold mt-4">
            Our data acquisition services provide you with exclusive access to HNI and UHNI clients for strategic marketing. By acquiring this exclusive data, your business can connect with high-net-worth individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md">
              I want HNI Leads
            </button>
            <button className="text-purple-700 font-semibold flex items-center gap-1">
              View FAQs →
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 bg-gray-100 p-4 rounded-md">
          <ol className="space-y-6">
            {[...Array(5)].map((_, i) => {
              const steps = [
                {
                  title: 'Submit Your Requirements',
                  desc: 'Provide specific details about the HNIs you are targeting, such as location, income, or car ownership.'
                },
                {
                  title: 'We Source Tailored HNI Data',
                  desc: 'Using our network, we acquire HNI data that matches your criteria.'
                },
                {
                  title: 'Review and Confirm',
                  desc: 'Review the gathered HNI data and confirm it meets your needs.'
                },
                {
                  title: 'Make Brokerage Payment',
                  desc: 'Once the data is confirmed, proceed with the brokerage payment.'
                },
                {
                  title: 'Receive HNI Data & Start Engaging',
                  desc: 'After payment, we deliver the data, allowing you to target and engage with high-value clients.'
                }
              ];

              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">{steps[i].title}</h4>
                    <p className="font-semibold text-sm md:text-base mt-1">{steps[i].desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Extended Content Section */}
      <div className="mt-10 space-y-6">
        <h2 className="text-2xl font-bold">How to Acquire Tailored HNI Data Leads?</h2>
        <p>
          For businesses looking to engage with high-value clients, <b>HNI data leads</b> provide a golden opportunity. By obtaining precise, high-quality HNI data, you can directly reach individuals with substantial wealth, making your outreach and engagement efforts highly efficient and impactful. In this article, we will guide you through the steps to secure tailored HNI data leads that align with your specific requirements, allowing you to connect with the right audience and maximize your business potential.
        </p>
        <h3 className="text-xl font-bold">Step-by-Step Process to Secure HNI Data Leads</h3>
        <ol className="list-decimal list-inside space-y-6">
          <li>
            <h4 className="font-bold">Submit Your Requirements</h4>
            <p>
              The first step in acquiring <b>HNI data leads</b> is understanding and clearly defining who you are targeting. Whether you're interested in high-net-worth individuals (HNIs) based on their location, income, car ownership, or other factors, it's crucial to specify these details in your submission.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <b>Why it’s important:</b> A detailed request allows us to tailor the data to your exact needs, ensuring the leads you receive are relevant and actionable.
              </li>
              <li>
                <b>Action to take:</b> Fill out the HNI requirement form with specific criteria such as location (e.g., Mumbai, Delhi), income levels, or even specific lifestyle markers like luxury car ownership.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold">We Source Tailored HNI Data</h4>
            <p>
              Once we have received your specific requirements, our network goes into action. We source <b>high-quality, verified HNI data</b> that matches the exact profile you're looking for. Using extensive databases and verified sources, we ensure that the information is accurate and up to date.
            </p>
            <p>
              <b>Our Expertise:</b> We’ve built a vast network to gather premium HNI data. Our method combines cutting-edge technology with first-hand experience in identifying and vetting high-value individuals.
            </p>
            <p>
              <b>Why it matters:</b> By receiving <b>customized data</b>, you’ll be able to target individuals more likely to engage with your product or service, leading to better conversion rates and a higher ROI.
            </p>
          </li>
          <li>
            <h4 className="font-bold">Review and Confirm</h4>
            <p>
              Once we gather the relevant data, you’ll have the opportunity to review it. This step ensures that the <b>HNI leads</b> meet your expectations and align with the specific criteria you outlined.
            </p>
            <p>
              <b>Why it’s essential:</b> Reviewing the data allows you to assess whether the HNI profiles match your target audience before making any financial commitment.
            </p>
            <p>
              <b>Expert Insight:</b> Our service ensures that only <b>qualified and accurate data</b> is presented for your review. This minimizes wasted outreach efforts and maximizes engagement with genuinely interested leads.
            </p>
          </li>
          <li>
            <h4 className="font-bold">Make Brokerage Payment</h4>
            <p>
              After confirming that the data meets your requirements, you can proceed with the brokerage payment. This straightforward step secures the data, allowing you to proceed with confidence.
            </p>
            <p>
              <b>Efficiency in Action:</b> We aim for a smooth transaction process so that you can focus on what truly matters—engaging with your newfound HNI leads.
            </p>
            <p>
              <b>Why it works:</b> Making the payment secures exclusive access to the data, giving you a competitive advantage in reaching <b>high-net-worth individuals</b> who are ready for engagement.
            </p>
          </li>
          <li>
            <h4 className="font-bold">Receive HNI Data & Start Engaging</h4>
            <p>
              Once the brokerage payment is processed, we promptly deliver the tailored HNI data to you. With this data in hand, you can start reaching out to potential clients who are primed for engagement and growth.
            </p>
            <p>
              <b>Benefits of Immediate Action:</b> Receiving the data quickly allows you to capitalize on opportunities without delay. You can start crafting personalized outreach strategies immediately.
            </p>
            <p>
              <b>Why it’s impactful:</b> HNI data gives you direct access to <b>high-value clients</b>, offering unmatched precision in targeting. These leads are more likely to convert, boosting your overall business success.
            </p>
          </li>
        </ol>
        <h2 className="text-2xl font-bold mt-10">Understanding the Service</h2>
        <p>
          Our <b>HNI data lead generation service</b> is designed with businesses in mind that want to target <b>affluent individuals</b> and decision-makers. We understand the nuances of sourcing high-net-worth leads, which is why our service is built on expertise and a proven network of data sources. Whether you're a luxury brand, a real estate developer, or a financial service provider, <b>connecting with HNIs</b> is crucial for driving significant sales and growth.
        </p>
        <p>
          <b>Key Offering:</b> Our service doesn’t rely on generic databases; we provide <b>tailored data</b> that matches your precise needs, ensuring you are reaching individuals who are more likely to engage with your offerings.
        </p>
        <p>
          <b>Experience and Expertise:</b> Having successfully sourced HNI leads for numerous clients across various industries, we combine <b>first-hand knowledge</b> with an extensive network of high-net-worth individuals to guarantee <b>quality</b> and <b>reliability</b>.
        </p>
        <h2 className="text-2xl font-bold mt-10">Evaluating the Benefits</h2>
        <ol className="list-decimal list-inside space-y-6">
          <li>
            <h4 className="font-bold">Highly Targeted and Relevant Data</h4>
            <p>
              With our service, you get <b>tailored HNI data</b> that’s precisely filtered to meet your criteria. Whether you’re looking to engage individuals based on their location, lifestyle, or purchasing power, we ensure the leads you receive are highly relevant to your goals.
            </p>
          </li>
          <li>
            <h4 className="font-bold">Save Time and Resources</h4>
            <p>
              Instead of conducting laborious research on your own, our service delivers <b>verified, up-to-date HNI leads</b> directly to you. This saves you the time and effort typically spent on data gathering and validation.
            </p>
          </li>
          <li>
            <h4 className="font-bold">Boost Conversion Rates</h4>
            <p>
              Our high-quality leads are tailored to your specific requirements, ensuring that the individuals you reach are genuinely interested in your offerings. This leads to a <b>higher likelihood of conversion</b>, helping you achieve your business goals faster.
            </p>
          </li>
          <li>
            <h4 className="font-bold">Competitive Advantage</h4>
            <p>
              By leveraging our <b>exclusive network</b> and <b>high-value leads</b>, you get a leg up on the competition. You will be engaging with clients that your competitors may not have access to, giving you the upper hand in the marketplace.
            </p>
          </li>
        </ol>
        <p className="mt-6">
          By following this guide, you’ll have a clear understanding of how our <b>HNI lead generation service</b> works, its benefits, and the steps needed to engage with high-net-worth individuals successfully. Start the process today by submitting your HNI requirements and unlock the potential for unparalleled growth and success.
        </p>
      </div>
    </div>
  );
};

export default HNILeads;
