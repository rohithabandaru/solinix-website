import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Products from './components/Products';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
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

        {/* 5. Technologies */}
        <Technologies />

        {/* 6. Products */}
        <Products />

        {/* 7. Statistics */}
        <Stats />

        {/* 8. Why Choose Solinix */}
        <WhyChooseUs />

        {/* 9. Development Process */}
        <Process />

        {/* 10. Portfolio */}
        <Portfolio />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. Team */}
        <Team />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Blog */}
        <Blog />

        {/* 15. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
