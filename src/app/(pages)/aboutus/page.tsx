"use client";

export default function LeadBuddyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-purple-800 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Connecting Real Estate Professionals with High-Quality Property Buyer Leads Across India
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to LeadBuddy – your dedicated platform for high-quality, targeted property buyer leads. Designed to support real estate professionals, including brokers, agents, developers, and marketing firms.
        </p>
      </section>

      <hr className="border-t border-gray-300" />

      {/* Our Story */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Story</h2>
        <p className="text-base sm:text-lg text-gray-700">
          Founded to address the challenges of traditional lead generation, LeadBuddy emerged as a response to the high costs and inefficiencies many real estate professionals face. We provide a streamlined, data-driven approach to connect with verified, high-intention buyers.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "HNI Leads (Acquisition)",
              desc: "Target high-net-worth individuals (HNIs) actively seeking premium real estate options.",
            },
            {
              title: "Long-Term Leads",
              desc: "Build relationships with future-ready buyers, ideal for agents and firms planning ahead.",
            },
            {
              title: "Recent Leads",
              desc: "Engage buyers from the last few months and stay ahead of market trends.",
            },
            {
              title: "Fresh Leads",
              desc: "Get real-time access to new property inquiries for faster conversions.",
            },
            {
              title: "Audience Reach Program",
              desc: "Save over 50% with managed outreach, reaching high-intent buyers directly.",
            },
            {
              title: "Sell Your Leads",
              desc: "Monetize unused leads by selling them through our verified platform.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-gray-800 border border-purple-100"
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-base sm:text-lg text-gray-700">
          We offer <strong>residential</strong>, <strong>commercial</strong>, and <strong>land</strong> leads, ensuring your outreach matches specific buyer needs for maximum success.
        </p>
      </section>

      {/* Market Coverage */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Prime Coverage Across India’s Key Markets</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 text-base sm:text-lg list-disc list-inside">
          {[
            "Mumbai", "Mumbai Suburbs", "Thane", "Navi Mumbai", "Mira-Bhayandar", 
            "Pune", "Bengaluru (Bangalore)", "Noida/Greater Noida", "Delhi"
          ].map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Why Choose LeadBuddy?</h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside text-base sm:text-lg">
          <li><strong>Comprehensive Lead Solutions</strong> – Find the right leads for your goals.</li>
          <li><strong>Affordable Outreach</strong> – Save costs while maximizing impact.</li>
          <li><strong>Data-Driven Targeting</strong> – Match buyers based on location, budget, and profile.</li>
          <li><strong>Monetize Unused Leads</strong> – Generate extra revenue effortlessly.</li>
        </ul>
      </section>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Mission</h2>
        <p className="text-base sm:text-lg text-gray-700">
          At LeadBuddy, we empower real estate professionals by delivering high-quality leads. Our mission is rooted in transparency, precision, and adaptability to help you succeed with confidence.
        </p>
      </section>

      {/* Contact */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Contact Us</h2>
        <p className="text-base sm:text-lg text-gray-700">
          Ready to reach high-quality property seekers? <br />
          <span className="font-semibold">Get in touch</span> with LeadBuddy and unlock your full potential.
        </p>
      </section>
    </div>
  );
}
