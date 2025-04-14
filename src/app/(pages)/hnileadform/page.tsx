import React from 'react';

const LeadForm = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <form className="space-y-6 border border-gray-300 p-6 rounded-md shadow-sm">
        {/* Top Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Name" className="border-b border-gray-400 outline-none py-2" />
          <input type="text" placeholder="Mobile No*" className="border-b border-gray-400 outline-none py-2" />
          <input type="email" placeholder="Email ID" className="border-b border-gray-400 outline-none py-2" />
        </div>

        {/* Type of Business */}
        <div>
          <label className="font-semibold block mb-2">Type of Business</label>
          <div className="flex flex-wrap gap-2">
            {['Broker', 'Real Estate Marketing Firm', 'Builder', 'Developer'].map((type) => (
              <button type="button" key={type} className="border border-gray-300 px-4 py-2 rounded-full hover:bg-purple-100">
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Lead Type Required */}
        <div>
          <label className="font-semibold block mb-2">Lead Type Required <span className="text-purple-600">?</span></label>
          <div className="flex flex-wrap gap-2">
            {['Long-Term Inquiry Leads', 'Recent Inquiry Leads', 'Fresh Inquiry Leads', 'Custom Leads Solution'].map((lead) => (
              <button type="button" key={lead} className="border border-gray-300 px-4 py-2 rounded-full hover:bg-purple-100">
                {lead}
              </button>
            ))}
          </div>
        </div>

        {/* Required Lead Volume */}
        <div>
          <label className="font-semibold block mb-2">Required Lead Volume</label>
          <div className="flex flex-wrap gap-2">
            {['100 - 500 Leads', '500 - 3,000 Leads', '3,000 - 10,000 Leads', '10,000 - 25,000 Leads', '25,000+ Leads'].map((volume) => (
              <button type="button" key={volume} className="border border-gray-300 px-4 py-2 rounded-full hover:bg-purple-100">
                {volume}
              </button>
            ))}
          </div>
        </div>

        {/* Location of Leads */}
        <div>
          <label className="font-semibold block mb-2">Location of Leads</label>
          <div className="flex flex-wrap gap-2">
            {['Mumbai', 'Thane', 'Pune', 'Delhi', 'Greater Noida', 'Bangalore', 'Other Cities', 'All India'].map((city) => (
              <button type="button" key={city} className="border border-gray-300 px-4 py-2 rounded-full hover:bg-purple-100">
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Subject and Message */}
        <div>
          <input type="text" placeholder="Subject" className="w-full border-b border-gray-400 outline-none py-2" />
          <textarea placeholder="Message" rows={4} className="w-full mt-4 border border-gray-300 rounded-md p-2 resize-none"></textarea>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>My Business is Registered</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>I agree to the <a href="#" className="text-blue-600 underline">terms and conditions</a>.</span>
          </label>
        </div>

        {/* Submit */}
        <button type="submit" className="bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-purple-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
