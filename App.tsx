import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UrgencySection from './components/UrgencySection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full bg-navy-950 min-h-screen font-sans antialiased selection:bg-gold-500 selection:text-white">
      <Header />
      <Hero />
      <UrgencySection />
      <TeamSection />
      <ServicesSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default App;
