import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowRight, FiStar, FiPhone } from 'react-icons/fi';


const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-sm border-b border-slate-200/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#" className="flex items-center group">
            <img
              src="/images/solinix-logo.png"
              alt="Solinix Software Solutions"
              className="h-10 sm:h-14 w-auto object-contain mix-blend-multiply contrast-125 group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveItem(link.name)}
                  className={`relative px-4 py-2 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-white border border-slate-200/80 shadow-sm'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs xl:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95 group"
            >
              <FiStar className="text-blue-200 group-hover:rotate-12 transition-transform" />
              <span>Get Free Consultation</span>
              <FiArrowRight className="text-blue-200 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-700 hover:text-blue-600 rounded-xl bg-white border border-slate-200 focus:outline-none backdrop-blur-md shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX className="text-2xl text-blue-600" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden glass-nav border-t border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveItem(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2.5 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <FiArrowRight className="text-slate-400 text-xs" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 text-sm"
                >
                  <FiPhone />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

