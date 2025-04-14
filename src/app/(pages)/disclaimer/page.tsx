// pages/disclaimer.tsx OR app/disclaimer/page.tsx
import React from 'react';
import Head from 'next/head'; // Optional: for page title


export default function DisclaimerPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Disclaimer - LeadBuddy</title>
        <meta name="description" content="LeadBuddy Disclaimer and terms of service." />
      </Head>

      {/* Main container: Centered, max-width, padding responsive */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
          Disclaimer
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-base text-gray-700 mb-6">
          The information provided by LeadBuddy ("we," "us," or "our") on our website and through our property lead services is for general informational purposes only. By using our services, you agree to the disclaimer and acknowledge the following limitations and responsibilities. LeadBuddy reserves the right to make changes to this disclaimer as needed, and we encourage users to review it periodically.
        </p>

        {/* Sections Container */}
        <div className="space-y-6 sm:space-y-8"> {/* Adds space between sections */}

          {/* Section 1: Accuracy of Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              1. Accuracy of Information
            </h2>
            <p className="text-base text-gray-700 mb-3">
              We make every effort to ensure that the information and leads we provide are accurate, reliable, and up to date. However, LeadBuddy does not guarantee the completeness or accuracy of all information, and we disclaim all liability for any errors or omissions.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 text-sm sm:text-base">
              <li>
                <strong className="font-medium">Verification Responsibility:</strong> Users of LeadBuddy's services are responsible for verifying the accuracy of any lead or data they receive before making business decisions.
              </li>
              <li>
                <strong className="font-medium">Lead Authenticity:</strong> While we strive to deliver high-quality leads, LeadBuddy cannot guarantee that all leads are genuine or that they will result in a sale or business opportunity.
              </li>
            </ul>
          </section>

          {/* Section 2: Not a Real Estate Agent */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              2. Not a Real Estate Agent
            </h2>
            <p className="text-base text-gray-700">
              LeadBuddy is a lead generation service for real estate professionals and does not operate as a real estate agent or broker. We do not buy, sell, lease, or rent properties. Our role is limited to providing information and connecting you with potential clients.
            </p>
          </section>

          {/* Section 3: Data Use and Limitations */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              3. Data Use and Limitations
            </h2>
             <p className="text-base text-gray-700 mb-3">
              The data we provide is intended solely for legitimate business purposes by real estate professionals, including agents, brokers, developers, and marketers. Any misuse or unauthorized sharing of LeadBuddy data may result in immediate termination of access to our services.
            </p>
             <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 text-sm sm:text-base">
                <li>
                    <strong className="font-medium">No Guarantee of Success:</strong> LeadBuddy does not guarantee any specific outcomes from using our leads, including sales, revenue, or client conversions. Success depends on individual follow-up, engagement, and marketing efforts.
                </li>
                 <li>
                    <strong className="font-medium">Data Sale Disclosure:</strong> LeadBuddy reserves the right to sell or share data as necessary to support its business. By using our services, you agree to our data sharing practices as outlined in our Privacy Policy.
                </li>
             </ul>
          </section>

          {/* Section 4: Limitation of Liability */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              4. Limitation of Liability
            </h2>
             <p className="text-base text-gray-700 mb-3">
              In no event shall LeadBuddy be held liable for any damages, including direct, indirect, incidental, or consequential damages, arising out of or related to the use of our services, leads, or website content.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 text-sm sm:text-base">
                <li>
                    <strong className="font-medium">No Responsibility for External Links:</strong> Our website may contain links to third-party sites for your convenience. LeadBuddy is not responsible for the content, privacy policies, or practices of any third-party websites.
                </li>
                 <li>
                    <strong className="font-medium">Service Availability:</strong> We strive to keep our services operational and accessible; however, LeadBuddy is not liable for any interruptions or downtime that may affect access to our services.
                </li>
             </ul>
          </section>

          {/* Section 5: End-User Responsibility */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              5. End-User Responsibility
            </h2>
             <p className="text-base text-gray-700 mb-3">
              By using our services, you acknowledge that you are responsible for how you use the information provided. LeadBuddy is not responsible for any business, financial, or legal outcomes based on your actions or decisions made from using our leads.
            </p>
             <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 text-sm sm:text-base">
                <li>
                    <strong className="font-medium">Compliance with Laws:</strong> Users agree to comply with all relevant local and federal laws, including data privacy regulations, when using our services.
                </li>
                 <li>
                    <strong className="font-medium">Contact for Concerns:</strong> If you have questions about the accuracy or use of a specific lead, please contact us at <a href="mailto:support@leadbuddy.io" className="text-indigo-600 hover:text-indigo-800">support@leadbuddy.io</a> for assistance.
                </li>
             </ul>
          </section>

          {/* Section 6: Contact Us */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              6. Contact Us
            </h2>
             <p className="text-base text-gray-700 mb-3">
              For further clarification on this disclaimer, please feel free to reach out to us:
            </p>
             <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 text-sm sm:text-base">
                <li>
                    <strong className="font-medium">Email:</strong> <a href="mailto:support@leadbuddy.io" className="text-indigo-600 hover:text-indigo-800">support@leadbuddy.io</a>
                </li>
             </ul>
          </section>

        </div> {/* End of sections container */}

        {/* Final Statement */}
        <p className="mt-8 sm:mt-10 text-sm text-gray-500 border-t pt-4"> {/* Added border-top */}
          This disclaimer is designed to inform users of the limitations and responsibilities associated with using LeadBuddy's services. By accessing our services, you accept and agree to the terms outlined in this disclaimer.
        </p>

      </div>
    </>
  );
}