import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiLinkedin, FiGithub, FiTwitter, FiInstagram,
  FiArrowRight, FiCheckCircle, FiMail, FiMapPin, FiPhone
} from 'react-icons/fi';


const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Custom Software Development', href: '#services' },
    { name: 'Website Development', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Cloud & Maintenance', href: '#services' },
  ],
  products: [
    { name: 'PGMove.in', href: 'https://www.pgmove.in' },
    { name: 'Stayzzy.in', href: 'https://www.stayzzy.in' },
    { name: 'HRMS (Coming Soon)', href: '#products' },
  ],
};

const socials = [
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50 text-slate-700 border-t border-slate-200 relative overflow-hidden">
      <div className="glow-primary bottom-0 left-1/2 -translate-x-1/2 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top CTA Banner */}
        <div className="py-12 border-b border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-200/60 shadow-xl shadow-blue-500/5">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Ready to Turn Your Idea into Reality?</h3>
              <p className="text-slate-500 text-sm">Let's hop on a quick call. No pushy sales pitches — just real tech advice &amp; honest estimates.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              Get Free Consultation
              <FiArrowRight />
            </a>
          </div>
        </div>

        {/* Footer Main Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="flex items-center group inline-flex">
              <img
                src="/images/solinix-logo.svg"
                alt="Solinix Software Solutions"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/solinix-logo-white.svg'; }}
              />
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Building digital solutions that drive business growth. We help startups and enterprises transform their ideas into powerful digital products.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 text-sm">
              <a href="mailto:hello@solinix.com" className="flex items-center gap-2.5 text-slate-500 hover:text-blue-600 transition-colors">
                <FiMail className="text-blue-600 shrink-0" />
                hello@solinix.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2.5 text-slate-500 hover:text-blue-600 transition-colors">
                <FiPhone className="text-blue-600 shrink-0" />
                +91 12345 67890
              </a>
              <div className="flex items-center gap-2.5 text-slate-500">
                <FiMapPin className="text-blue-600 shrink-0" />
                Bengaluru, India
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-600 border border-slate-200 hover:border-blue-500 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">Quick Links</h5>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group">
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">Services</h5>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group">
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Newsletter */}
          <div className="space-y-8">
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">Products</h5>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
                    >
                      <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Newsletter</h5>
              <p className="text-xs text-slate-500 mb-3">Get updates and tech insights.</p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <FiCheckCircle />
                  Subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all"
                  >
                    Subscribe <FiArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center">
            © {new Date().getFullYear()} Solinix Software Solutions Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
