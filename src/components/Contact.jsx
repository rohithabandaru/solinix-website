import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiGlobe,
  FiCheckCircle, FiSend, FiMessageSquare
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email Us',
    value: 'hello@solinix.com',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@solinix.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: FiPhone,
    label: 'Call Us',
    value: '+91 12345 67890',
    sub: 'Mon–Sat, 9am–7pm IST',
    href: 'tel:+911234567890',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+91 12345 67890',
    sub: 'Quick support on chat',
    href: 'https://wa.me/911234567890',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: FiMapPin,
    label: 'Visit Us',
    value: 'Bengaluru, India',
    sub: 'Registered office location',
    href: 'https://maps.google.com/?q=Bengaluru,India',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: FiGlobe,
    label: 'Website',
    value: 'www.solinix.com',
    sub: 'Visit our full website',
    href: 'https://www.solinix.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20',
  },
];

const services = [
  'Custom Software Development',
  'Website Development',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Cloud & Maintenance',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/4 left-10 opacity-25 pointer-events-none" />
      <div className="glow-accent bottom-10 right-10 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiMessageSquare className="text-sm" />
            <span>CONTACT US</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Let's Discuss{' '}
            <span className="text-gradient-primary">Your Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Have an idea or a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you shortly.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>

            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 group bg-white"
                >
                  <div className="w-11 h-11 rounded-xl border border-blue-200 bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-lg text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">{info.label}</div>
                    <div className="text-sm font-bold text-slate-900">{info.value}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{info.sub}</div>
                  </div>
                </a>
              );
            })}

            {/* Google Map Placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 h-48 relative shadow-sm">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-600">
                <FiMapPin className="text-3xl text-blue-600" />
                <span className="text-sm font-semibold text-slate-900">Bengaluru, Karnataka, India</span>
                <a
                  href="https://maps.google.com/?q=Bengaluru,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold transition-colors underline"
                >
                  Open in Google Maps →
                </a>
              </div>
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl border border-slate-200/90 p-8 sm:p-10 bg-white shadow-md">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-3xl mx-auto shadow-sm">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-blue-600 font-semibold">{formData.name}</span>! We'll get back to you at{' '}
                    <span className="text-blue-600 font-semibold">{formData.email}</span> within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold border border-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h3>
                    <p className="text-xs text-slate-500">Fill in the details below and we'll be in touch.</p>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your project"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
