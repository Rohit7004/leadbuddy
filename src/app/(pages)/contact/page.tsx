import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 font-sans max-w-6xl mx-auto">
      {/* Left Column - Contact Details */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>

        <p className="mb-3">
          Office # A2, A6 Building, Shanti Nagar Soc., Sector 5, Mira Road (East). Thane. Pin - 401107
        </p>

        <p className="mb-5 font-medium">+91-7888875553</p>

        <div className="mb-6">
          <a href="mailto:sales@leadbuddy.in" className="text-blue-600 underline">
            sales@leadbuddy.in
          </a>
          <p className="text-sm text-gray-600">For inquiries related to lead purchases and information about our packages.</p>
        </div>

        <div className="mb-6">
          <a href="mailto:billing@leadbuddy.in" className="text-blue-600 underline">
            billing@leadbuddy.in
          </a>
          <p className="text-sm text-gray-600">To address billing, invoicing, or payment-related queries.</p>
        </div>

        <div className="mb-6">
          <a href="mailto:partners@leadbuddy.in" className="text-blue-600 underline">
            partners@leadbuddy.in
          </a>
          <p className="text-sm text-gray-600">For brokers, real estate agents, and agencies interested in partnership.</p>
        </div>

        <div>
          <a href="mailto:feedback@leadbuddy.in" className="text-blue-600 underline">
            feedback@leadbuddy.in
          </a>
          <p className="text-sm text-gray-600">For receiving complaints, suggestions, and customer feedback.</p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex-1">
        <div className="w-full h-64 md:h-full bg-white rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1744029901~exp=1744033501~hmac=c375ea9618183f04b8e21956375bb7018744e9aa18ab0a4c0240696d332e88ee&w=826"
            alt="Contact Us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
