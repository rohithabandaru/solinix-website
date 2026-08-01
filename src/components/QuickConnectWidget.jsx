import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMessageSquare, FiX, FiPhone, FiMail,
  FiCalendar, FiArrowRight, FiCheckCircle
} from 'react-icons/fi';
import { BsCalculator } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

export default function QuickConnectWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-[320px] sm:w-[360px] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden text-slate-900"
          >
            {/* Popover Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white relative">
              <button
                type="button"
                onClick={toggleWidget}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <FiX className="text-sm" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-100">Live Tech Support</span>
              </div>
              <h4 className="text-lg font-extrabold">How can we help?</h4>
              <p className="text-xs text-blue-100 mt-0.5">Connect with Solinix engineers directly.</p>
            </div>

            {/* Quick Actions List */}
            <div className="p-4 space-y-2.5">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/911234567890?text=Hi%20Solinix!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Chat on WhatsApp</div>
                    <div className="text-[10px] text-emerald-700 font-medium">Instant reply within mins</div>
                  </div>
                </div>
                <FiArrowRight className="text-xs text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Book Call */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full text-left flex items-center justify-between p-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-base group-hover:scale-110 transition-transform">
                    <FiCalendar />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Book Free 15-Min Call</div>
                    <div className="text-[10px] text-blue-700 font-medium">Direct consultation &amp; quote</div>
                  </div>
                </div>
                <FiArrowRight className="text-xs text-blue-600 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Project Estimator */}
              <button
                type="button"
                onClick={() => scrollToSection('estimator')}
                className="w-full text-left flex items-center justify-between p-3.5 rounded-2xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center text-base group-hover:scale-110 transition-transform">
                    <BsCalculator />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Calculate Project Cost</div>
                    <div className="text-[10px] text-purple-700 font-medium">Get instant cost &amp; timeline</div>
                  </div>
                </div>
                <FiArrowRight className="text-xs text-purple-600 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct Phone & Email */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-colors"
                >
                  <FiPhone className="text-blue-600 text-xs" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:hello@solinix.com"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-colors"
                >
                  <FiMail className="text-blue-600 text-xs" />
                  <span>Email Us</span>
                </a>
              </div>

            </div>

            {/* Footer */}
            <div className="bg-slate-50 border-t border-slate-100 p-3 text-center text-[10px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
              <FiCheckCircle className="text-emerald-500 text-xs" />
              <span>Available Mon–Sat, 9:00 AM – 7:00 PM IST</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        type="button"
        onClick={toggleWidget}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm text-white transition-all duration-300 ${
          isOpen
            ? 'bg-slate-900 text-white'
            : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-blue-500/35 hover:shadow-blue-500/50'
        }`}
        aria-label="Quick Connect"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        {isOpen ? (
          <>
            <FiX className="text-lg" />
            <span>Close</span>
          </>
        ) : (
          <>
            <FiMessageSquare className="text-lg" />
            <span>Quick Connect</span>
          </>
        )}
      </motion.button>

    </div>
  );
}
