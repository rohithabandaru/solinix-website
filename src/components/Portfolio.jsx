import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink, FiArrowRight, FiZap, FiTrendingUp
} from 'react-icons/fi';

const projects = [
  {
    id: 'pgmove-project',
    title: 'PGMove – PG Discovery Platform',
    category: 'PropTech',
    description: 'A smart rental and PG discovery platform that connects tenants with property owners across India. Built with modern web tech for speed and scale.',
    problem: 'Finding PGs was unorganized and trust-deficient for students and young professionals.',
    outcome: 'Onboarded 1,200+ properties in 8 cities within the first 3 months.',
    metrics: [
      { label: 'Properties', value: '1,200+' },
      { label: 'Cities', value: '8' },
      { label: 'Users', value: '5K+' },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS'],
    gradient: 'from-blue-600 via-indigo-600 to-blue-900',
    link: 'https://www.pgmove.in',
  },
  {
    id: 'stayzzy-project',
    title: 'Stayzzy – Hostel Management SaaS',
    category: 'PropTech SaaS',
    description: 'A complete hostel and PG management platform with rent collection, digital agreements, and occupancy tracking for property owners.',
    problem: 'PG owners lacked digital tools to manage tenants, collect rents, and track vacancies.',
    outcome: 'Processed 3,500+ tenant records with 99.9% uptime in the first year.',
    metrics: [
      { label: 'PGs Managed', value: '800+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Tenants', value: '3.5K+' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    gradient: 'from-cyan-600 via-teal-600 to-blue-800',
    link: 'https://www.stayzzy.in',
  },
  {
    id: 'hrms-project',
    title: 'HRMS – HR Automation Platform',
    category: 'Enterprise SaaS',
    description: 'An intelligent Human Resource Management System for businesses of all sizes — handling payroll, attendance, onboarding and performance.',
    problem: 'SMBs relied on spreadsheets and manual HR processes causing errors and inefficiencies.',
    outcome: '12+ core HR modules built with role-based access and real-time reporting.',
    metrics: [
      { label: 'HR Modules', value: '12+' },
      { label: 'Time Saved', value: '60%' },
      { label: 'Processes', value: 'Automated' },
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'AWS', 'Redis'],
    gradient: 'from-purple-600 via-indigo-600 to-blue-800',
    link: null,
  },
  {
    id: 'ecommerce-project',
    title: 'Enterprise E-Commerce Platform',
    category: 'E-Commerce',
    description: 'A high-performance headless e-commerce solution with seamless checkout, inventory management, and real-time analytics dashboard.',
    problem: 'Legacy platforms were slow, unscalable, and couldn\'t handle seasonal traffic spikes.',
    outcome: 'Delivered 40% faster page loads and 2x increase in checkout conversion rate.',
    metrics: [
      { label: 'Load Time', value: '-40%' },
      { label: 'Conversion', value: '+2x' },
      { label: 'Peak Load', value: '50K RPM' },
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Cloudflare', 'Stripe'],
    gradient: 'from-orange-600 via-amber-600 to-yellow-700',
    link: null,
  },
];

const categories = ['All', 'PropTech', 'PropTech SaaS', 'Enterprise SaaS', 'E-Commerce'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/3 left-1/4 opacity-20 pointer-events-none" />
      <div className="glow-accent bottom-1/4 right-1/4 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiZap className="text-sm" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Projects That{' '}
            <span className="text-gradient-primary">Delivered Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From SaaS platforms to enterprise applications — explore our work and the business impact we created.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-3xl border border-slate-200/90 overflow-hidden group hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
              >
                {/* Visual Header */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div className="flex items-start justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/95 border border-white/60 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-sm">
                        {project.category}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-sm"
                        >
                          <FiExternalLink className="text-sm" />
                        </a>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white drop-shadow-md">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{project.description}</p>

                  {/* Problem → Outcome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                      <div className="text-[10px] font-bold text-rose-700 uppercase tracking-wider mb-1">The Problem</div>
                      <p className="text-xs text-slate-700 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">Our Outcome</div>
                      <p className="text-xs text-slate-700 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-base font-extrabold text-blue-600">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono text-blue-700 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                    >
                      <span>Case Study</span>
                      <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
