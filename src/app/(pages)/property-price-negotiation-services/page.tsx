import React from 'react';

// Define an interface for the numbered step data
interface Step {
  id: number;
  title: string;
  description: string;
}

const NegotiationPage: React.FC = () => {
  const steps: Step[] = [
    { id: 1, title: "Submit Property Details", description: "Share key info (location, type, budget) via our website or form." },
    { id: 2, title: "Consult with Our Negotiation Experts", description: "Our team of experts will review the details and arrange a consultation to understand your budget and specific negotiation goals." },
    { id: 3, title: "We Negotiate on Your Behalf", description: "We handle the entire negotiation process with the seller or developer, ensuring the best possible price for your desired property." },
    { id: 4, title: "Finalize the Deal & Save", description: "Once we secure the best price, we guide you through finalizing the deal, helping you save on your property purchase." },
  ];

  // Function to render a single step - includes number circle and text
  const renderStep = (step: Step, isLast: boolean) => (
    <div key={step.id} className="relative pl-12 pb-8"> {/* Padding left for number, padding bottom for line */}
      {/* Number Circle - Positioned absolutely */}
      <div className="absolute left-0 top-0 transform -translate-x-1/2">
        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full text-purple-700 font-semibold text-lg">
          {step.id}
        </div>
      </div>
      {/* Step Text Content */}
      <div className="ml-4"> {/* Margin left to align text correctly */}
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{step.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
      </div>
      {/* Connecting line (only if not the last step) */}
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200"></div>
      )}
    </div>
  );


  return (
    <div className="font-sans antialiased text-gray-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="md:flex md:items-start md:space-x-12 lg:space-x-16">

          {/* Left Column: Text and Buttons */}
          <div className="md:w-1/2 lg:w-3/5 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Effortless Property Price Negotiation<span className="text-slate-600">—</span>We Do the Work, You Save
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              You shouldn't have to overpay for your property. Our professional negotiators make sure you don't. We help you secure the lowest possible price.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-150 ease-in-out shadow-sm">
                Get Your Free Consultation Today!
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-md border border-gray-300 transition duration-150 ease-in-out flex items-center justify-center space-x-2 shadow-sm">
                <span>View FAQs</span>
                {/* Arrow Right Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Numbered Steps */}
          <div className="md:w-1/2 lg:w-2/5 bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
            {/* Container for steps to manage relative positioning for the line */}
             <div className="relative">
               {/* Render all steps */}
               {steps.map((step, index) => renderStep(step, index === steps.length - 1))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NegotiationPage;