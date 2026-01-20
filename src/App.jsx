import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
