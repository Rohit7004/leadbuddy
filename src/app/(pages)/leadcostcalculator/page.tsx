'use client';

import React, { useState } from 'react';

const LeadCostCalculator = () => {
  const [contactGroup, setContactGroup] = useState({ mobile: true, email: false });
  const [locationGroup, setLocationGroup] = useState({ mumbai: true, thane: false });
  const [budgetGroup, setBudgetGroup] = useState({ b1: true, b2: false, b3: false, b4: false });
  const [enquiryGroup, setEnquiryGroup] = useState({ e1: true, e2: false, e3: false });
  const [numLeads, setNumLeads] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const toggleSelection = <T extends Record<string, boolean>>(group: T, key: keyof T): T => {
    const newGroup = {
      ...Object.fromEntries(Object.keys(group).map(k => [k, false])),
      [key]: !group[key],
    } as T;
    return newGroup;
  };

  const calculateCost = () => {
    let costPerLead = 100;
    setTotalCost(numLeads * costPerLead);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Long Term Lead - Cost Calculator</h2>

          {/* Contact Group */}
          <div className="mb-6">
            <p className="font-medium mb-2">Contact Group</p>
            <div className="flex gap-3">
              {(Object.keys(contactGroup) as Array<keyof typeof contactGroup>).map(type => (
                <button
                  key={type}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                    contactGroup[type] ? 'bg-white border-gray-400 shadow-md' : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setContactGroup(toggleSelection(contactGroup, type))}
                >
                  {type === 'mobile' ? 'Mobile Number' : 'Email'}
                </button>
              ))}
            </div>
          </div>

          {/* Location Group */}
          <div className="mb-6">
            <p className="font-medium mb-2">Location Group</p>
            <div className="flex gap-3">
              {(Object.keys(locationGroup) as Array<keyof typeof locationGroup>).map(loc => (
                <button
                  key={loc}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                    locationGroup[loc] ? 'bg-white border-gray-400 shadow-md' : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setLocationGroup(toggleSelection(locationGroup, loc))}
                >
                  {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Group */}
          <div className="mb-6">
            <p className="font-medium mb-2">Budget Range Group</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'b1', label: '15-30 lacs' },
                { key: 'b2', label: '31-75 lacs' },
                { key: 'b3', label: '75-120 lacs' },
                { key: 'b4', label: '121 lacs+' },
              ].map(b => (
                <button
                  key={b.key}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                    budgetGroup[b.key as keyof typeof budgetGroup] ? 'bg-white border-gray-400 shadow-md' : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setBudgetGroup(toggleSelection(budgetGroup, b.key as keyof typeof budgetGroup))}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Enquiry Group */}
          <div className="mb-6">
            <p className="font-medium mb-2">Enquiry Range Group</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { key: 'e1', label: '6-8 months' },
                { key: 'e2', label: '8-10 months' },
                { key: 'e3', label: 'Within 12 months' },
              ].map(e => (
                <button
                  key={e.key}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                    enquiryGroup[e.key as keyof typeof enquiryGroup] ? 'bg-white border-gray-400 shadow-md' : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setEnquiryGroup(toggleSelection(enquiryGroup, e.key as keyof typeof enquiryGroup))}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          {/* Leads Input */}
          <div className="mb-6">
            <p className="font-medium mb-2">Number of leads:</p>
            <input
              type="number"
              min={1}
              value={numLeads}
              onChange={(e) => setNumLeads(parseInt(e.target.value))}
              className="border p-2 rounded w-32"
            />
          </div>

          <button
            onClick={calculateCost}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90"
          >
            Calculate Total Cost
          </button>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 bg-purple-800 text-white p-8 flex flex-col justify-between">
          <div>
            <div className="text-center mb-8">
              <p className="text-5xl font-bold">₹{totalCost}</p>
            </div>

            {['Name', 'Mobile No', 'Email ID', 'Location'].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="w-full mb-4 p-3 rounded bg-white text-black placeholder-gray-500 text-sm"
              />
            ))}

            <div className="flex items-center mb-4">
              <input type="checkbox" id="businessReg" className="mr-2" />
              <label htmlFor="businessReg" className="text-sm">My Business is Registered</label>
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I agree to the <a href="#" className="underline text-blue-300">terms and conditions</a>.
              </label>
            </div>
          </div>

          <button className="bg-white text-purple-800 font-bold text-sm px-6 py-2 rounded-md hover:bg-gray-100 transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadCostCalculator;
