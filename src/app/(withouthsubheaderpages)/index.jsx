import React from 'react';
import Header from '../components/Header';
import LeadSection from './components/LeadSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />:root {
        --spacing-sm: 0.5rem;
        --spacing-md: 1rem;
        --spacing-lg: 2rem;
        
        --breakpoint-sm: 480px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 1024px;
      }
      
      <LeadSection />
      <Footer />
    </div>
  );
};

export default HomePage;