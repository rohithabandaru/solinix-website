import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* 1. Premium Sticky Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Products */}
        <Products />

        {/* 6. Statistics */}
        <Stats />

        {/* 7. Why Choose Solinix */}
        <WhyChooseUs />

        {/* 8. Development Process */}
        <Process />

        {/* 9. Technologies */}
        <Technologies />

        {/* 10. Portfolio */}
        <Portfolio />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
