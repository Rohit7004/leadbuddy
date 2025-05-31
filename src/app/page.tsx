import React from 'react';
import LeadSection from './Components/LeadSection';

const HomePage = () => {
  return (
    <main role="main" className="homepage-container">
      {/* Lead Section with Accessible Role */}
      <section role="region" aria-labelledby="lead-title">
        <LeadSection />
      </section>
    </main>
  );
};

export default HomePage;
