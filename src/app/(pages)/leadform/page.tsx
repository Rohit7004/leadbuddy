"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  typeOfBusiness: string;
  leadType: string;
  leadVolume: string;
  location: string;
  subject: string;
  message: string;
  isRegistered: boolean;
  termsAccepted: boolean;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    typeOfBusiness: "",
    leadType: "",
    leadVolume: "",
    location: "",
    subject: "",
    message: "",
    isRegistered: false,
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;
  
    if (
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const renderOptionButtons = (
    options: string[],
    selected: string,
    onSelect: (value: string) => void
  ) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={`px-4 py-2 rounded-full border transition text-sm ${
            selected === option
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 p-3 border rounded-md"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No"
          value={formData.mobile}
          onChange={handleChange}
          className="flex-1 p-3 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 p-3 border rounded-md"
        />
      </div>

      <div>
        <label className="font-medium">Type of Business:</label>
        {renderOptionButtons(
          ["Broker", "Real Estate Marketing Firm", "Builder", "Developer"],
          formData.typeOfBusiness,
          (val) => setFormData({ ...formData, typeOfBusiness: val })
        )}
      </div>

      <div>
        <label className="font-medium">Lead Type Required:</label>
        {renderOptionButtons(
          [
            "Long-Term Inquiry Leads",
            "Recent Inquiry Leads",
            "Fresh Inquiry Leads",
            "Custom Leads Solution",
          ],
          formData.leadType,
          (val) => setFormData({ ...formData, leadType: val })
        )}
      </div>

      <div>
        <label className="font-medium">Required Lead Volume:</label>
        {renderOptionButtons(
          [
            "100 - 500 Leads",
            "500 - 3,000 Leads",
            "3,000 - 10,000 Leads",
            "10,000 - 25,000 Leads",
            "25,000+ Leads",
          ],
          formData.leadVolume,
          (val) => setFormData({ ...formData, leadVolume: val })
        )}
      </div>

      <div>
        <label className="font-medium">Location of Leads:</label>
        {renderOptionButtons(
          [
            "Mumbai",
            "Thane",
            "Pune",
            "Delhi",
            "Greater Noida",
            "Bangalore",
            "Other Cities",
            "All India",
          ],
          formData.location,
          (val) => setFormData({ ...formData, location: val })
        )}
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-3 border rounded-md"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-md min-h-[100px]"
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isRegistered"
          checked={formData.isRegistered}
          onChange={handleChange}
        />
        <label>My Business is Registered</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <label>
          I agree to the{" "}
          <a href="/terms" target="_blank" className="text-purple-600 underline">
            terms and conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold transition"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadForm;
