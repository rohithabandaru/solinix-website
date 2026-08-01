import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-loaded below-the-fold section components for optimal initial paint performance
const TrustedCompanies = lazy(() => import('./components/TrustedCompanies'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Technologies = lazy(() => import('./components/Technologies'));
const Products = lazy(() => import('./components/Products'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Process = lazy(() => import('./components/Process'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectEstimator = lazy(() => import('./components/ProjectEstimator'));
const QuickConnectWidget = lazy(() => import('./components/QuickConnectWidget'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* 1. Premium Sticky Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section (Above the fold, synchronous) */}
        <Hero />

        {/* Below-the-fold sections loaded dynamically */}
        <Suspense fallback={<SectionLoader />}>
          <TrustedCompanies />
          <About />
          <Services />
          <Technologies />
          <Products />
          <WhyChooseUs />
          <Process />
          <ProjectEstimator />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
        <QuickConnectWidget />
      </Suspense>
    </div>
  );
}
