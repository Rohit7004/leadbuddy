import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lead Quality at LeadBuddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Sets Our Leads Apart?</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong className="font-semibold">Verified and Accurate Information</strong>
                <p className="text-gray-700">Each lead is verified and validated for accuracy. Our team cross-checks information to eliminate duplicates and ensure every detail is correct, from contact information to property preferences.</p>
              </li>
              <li>
                <strong className="font-semibold">High-Intent Prospects</strong>
                <p className="text-gray-700">Our leads are sourced from individuals actively searching for properties, ensuring high intent. By focusing on buyers and investors ready to make a move, we deliver leads primed for conversion.</p>
              </li>
              <li>
                <strong className="font-semibold">Segmented Lead Types</strong>
                <p className="text-gray-700">LeadBuddy categorizes leads into Long-Term, Recent, and Fresh Leads, allowing you to select the type best suited to your needs:</p>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                  <li><span className="font-medium">Long-Term Leads:</span> For nurturing and future follow-ups.</li>
                  <li><span className="font-medium">Recent Leads:</span> For prospects in the decision-making phase.</li>
                  <li><span className="font-medium">Fresh Leads:</span> For clients ready for immediate engagement.</li>
                </ul>
              </li>
              <li>
                <strong className="font-semibold">Exclusive and Real-Time Leads</strong>
                <p className="text-gray-700">Our leads are exclusive to LeadBuddy and updated in real-time, minimizing competition and maximizing your opportunities to make timely connections.</p>
              </li>
              <li>
                <strong className="font-semibold">Targeted Audience Reach</strong>
                <p className="text-gray-700">Through our <strong className="font-semibold">Audience Reach Program</strong>, we help you access niche and targeted markets, reaching out on your behalf to convert quality prospects without overwhelming costs.</p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Quality Assurance Process</h2>
            <p className="text-gray-700">LeadBuddy employs a multi-step quality assurance process to ensure each lead is worth your time and investment:</p>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong className="font-semibold">Sourcing from Reliable Channels</strong>
                <p className="text-gray-700">Our leads come from reputable sources, including direct inquiries, partnerships, and real estate events, ensuring they are fresh, relevant, and interested.</p>
              </li>
              <li>
                <strong className="font-semibold">Data Validation & Verification</strong>
                <p className="text-gray-700">Each lead undergoes rigorous verification for completeness and accuracy, confirming essential details like contact info, budget range, and property interests.</p>
              </li>
              <li>
                <strong className="font-semibold">Intent-Based Filtering</strong>
                <p className="text-gray-700">We filter leads based on intent indicators, such as recent inquiries or active engagement with listings, to ensure you’re connecting with motivated buyers.</p>
              </li>
              <li>
                <strong className="font-semibold">Segmentation by Location and Type</strong>
                <p className="text-gray-700">Leads are categorized by prime locations across India, including Mumbai, Pune, Bengaluru, and Delhi, and organized by property type for tailored engagement.</p>
              </li>
              <li>
                <strong className="font-semibold">Feedback-Driven Improvements</strong>
                <p className="text-gray-700">We continuously refine our quality standards based on client feedback, enhancing the relevance and accuracy of leads to meet evolving market needs.</p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits of High-Quality Leads from LeadBuddy</h2>
            <ul className="list-disc list-inside space-y-4">
              <li><strong className="font-semibold">Higher Conversion Rates:</strong> <span className="text-gray-700">Verified, high-intent leads mean a higher likelihood of successful conversions, saving you time and resources.</span></li>
              <li><strong className="font-semibold">Enhanced Efficiency:</strong> <span className="text-gray-700">With segmented leads, you can focus on the prospects that best align with your sales strategy and timelines.</span></li>
              <li><strong className="font-semibold">Better ROI:</strong> <span className="text-gray-700">Quality leads reduce the cost per conversion, ensuring a better return on your investment with each engagement.</span></li>
              <li><strong className="font-semibold">Reduced Follow-Up Efforts:</strong> <span className="text-gray-700">Our exclusive, real-time leads are already engaged in the property buying process, allowing for fewer touchpoints and more productive follow-ups.</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Lead Quality Metrics We Track</h2>
            <p className="text-gray-700">LeadBuddy tracks specific metrics to maintain and improve lead quality:</p>
            <ul className="list-disc list-inside space-y-4">
              <li><strong className="font-semibold">Accuracy Rate:</strong> <span className="text-gray-700">Ensures data reliability across all lead details.</span></li>
              <li><strong className="font-semibold">Conversion Rate Potential:</strong> <span className="text-gray-700">Indicates how likely a lead is to move to the next stage.</span></li>
              <li><strong className="font-semibold">Response Rate:</strong> <span className="text-gray-700">Measures engagement levels based on our outreach and follow-up efforts.</span></li>
              <li><strong className="font-semibold">Lead Recency:</strong> <span className="text-gray-700">Freshness of each lead to optimize for immediate follow-up.</span></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}