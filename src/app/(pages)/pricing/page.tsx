import React from 'react';

const leads = [
  {
    title: 'LONG TERM LEADS',
    description: 'Old Inquiries Around 6–12 months',
    info: 'Ideal for following up on past inquiries, as these clients may still be seeking the best deals.',
    price: '₹9,999',
    cta: 'Calculate',
    color: 'purple',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    title: 'RECENT LEADS',
    description: 'Recent Inquiries within 3 months.',
    info: 'Perfect for targeting recent inquiries for faster conversions with fresh market interest.',
    price: '₹34,999',
    cta: 'Contact Sales',
    color: 'gray',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    title: 'FRESH LEADS',
    description: 'Fresh Leads Inquiries.',
    info: 'Great for securing quick sales or property bookings, turning real-time inquiries into immediate transactions.',
    price: '₹1,49,999',
    cta: 'Contact Sales',
    color: 'gray',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
  },
];

const LeadCard = ({
  title,
  description,
  info,
  price,
  cta,
  color,
  iconBg,
  iconColor,
}: typeof leads[number]) => (
  <div className="bg-white rounded-lg shadow-md p-6 w-full">
    <div className="flex justify-center mb-4">
      <div className={`${iconBg} rounded-full p-3`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${iconColor}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">{title}</h2>
    <p className="text-sm text-gray-600 text-center mb-4 underline">{description}</p>
    <p className="text-sm text-gray-600 text-center mb-4">{info}</p>
    <p className="text-2xl font-bold text-center mb-4">{price}</p>
    <p className="text-sm text-gray-600 text-center mb-4">Minimum Order Value</p>
    <button
      className={`${
        color === 'purple'
          ? 'bg-purple-600 hover:bg-purple-700'
          : 'bg-gray-800 hover:bg-gray-900'
      } text-white font-bold py-2 px-4 rounded-full w-full`}
    >
      {cta}
    </button>
  </div>
);

const LeadPricing = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((lead, index) => (
            <LeadCard key={index} {...lead} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadPricing;
