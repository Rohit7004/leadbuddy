import React from 'react';

const Audience = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 font-sans">
      {/* Left Side */}
      <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Audience Reach<br />
          Program: Reach Active<br />
          Property Seekers at Half<br />
          the Cost
        </h1>
        <p className="text-base text-gray-600 mb-6">
          Connect with property seekers without the high costs—LeadBuddy's Audience Reach Program makes it easy.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-transparent border-2 border-purple-700 text-purple-700 rounded px-4 py-2 hover:bg-purple-50 transition">
            Get Your Free Consultation Today!
          </button>
          <button className="flex items-center text-purple-700 hover:underline transition">
            View FAQs <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg space-y-6">
        <div className="flex items-start">
          <div className="w-8 text-purple-700 font-bold mr-4">1</div>
          <div>
            <h3 className="font-bold mb-1">Book Your Free Consultation</h3>
            <p>
              Connect with our team to identify your goals, target audience, and outreach needs, ensuring a customized approach from the start.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-8 text-purple-700 font-bold mr-4">2</div>
          <div>
            <h3 className="font-bold mb-1">Define Your Targeting Preferences</h3>
            <p>
              Our team of experts will review the details and arrange a consultation to understand your budget and specific negotiation goals.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-8 text-purple-700 font-bold mr-4">3</div>
          <div>
            <h3 className="font-bold mb-1">Activate Your Campaign</h3>
            <p>
              LeadBuddy takes care of outreach, sending tailored messages to potential buyers and ensuring maximum exposure for your listings.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-8 text-purple-700 font-bold mr-4">4</div>
          <div>
            <h3 className="font-bold mb-1">Monitor Campaign Performance</h3>
            <p>
              Get regular reports with metrics on reach, engagement, and audience interest to measure effectiveness and fine-tune the strategy.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-8 text-purple-700 font-bold mr-4">5</div>
          <div>
            <h3 className="font-bold mb-1">Adjust & Expand for Optimal Results</h3>
            <p>
              Based on results, adjust targeting, increase frequency, or expand reach, allowing your campaign to grow and improve continuously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
