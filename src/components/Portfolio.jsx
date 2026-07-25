import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink, FiArrowRight, FiArrowUpRight, FiZap, FiTrendingUp, FiTarget, FiAward, FiLayers
} from 'react-icons/fi';

const projects = [
  {
    id: 'pgmove-project',
    title: 'PGMove',
    subtitle: 'PG Discovery Platform',
    category: 'PropTech',
    description: 'A smart rental and PG discovery platform that connects tenants with property owners across India. Built with modern web tech for speed and scale.',
    problem: 'Finding PGs was unorganized and trust-deficient for students and young professionals.',
    outcome: 'Onboarded 1,200+ properties in 8 cities within the first 3 months.',
    metrics: [
      { label: 'Properties', value: '1,200+', icon: FiLayers },
      { label: 'Cities', value: '8', icon: FiTarget },
      { label: 'Users', value: '5K+', icon: FiTrendingUp },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS'],
    accentColor: 'blue',
    gradient: 'from-blue-600 via-indigo-600 to-blue-900',
    lightGradient: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    link: 'https://www.pgmove.in',
    featured: true,
  },
  {
    id: 'stayzzy-project',
    title: 'Stayzzy',
    subtitle: 'Hostel Management SaaS',
    category: 'PropTech SaaS',
    description: 'A complete hostel and PG management platform with rent collection, digital agreements, and occupancy tracking for property owners.',
    problem: 'PG owners lacked digital tools to manage tenants, collect rents, and track vacancies.',
    outcome: 'Processed 3,500+ tenant records with 99.9% uptime in the first year.',
    metrics: [
      { label: 'PGs Managed', value: '800+', icon: FiLayers },
      { label: 'Uptime', value: '99.9%', icon: FiAward },
      { label: 'Tenants', value: '3.5K+', icon: FiTrendingUp },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    accentColor: 'teal',
    gradient: 'from-cyan-600 via-teal-600 to-blue-800',
    lightGradient: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200',
    hoverBorder: 'hover:border-teal-400',
    link: 'https://www.stayzzy.in',
    featured: false,
  },
  {
    id: 'hrms-project',
    title: 'HRMS',
    subtitle: 'HR Automation Platform',
    category: 'Enterprise SaaS',
    description: 'An intelligent Human Resource Management System for businesses of all sizes — handling payroll, attendance, onboarding and performance.',
    problem: 'SMBs relied on spreadsheets and manual HR processes causing errors and inefficiencies.',
    outcome: '12+ core HR modules built with role-based access and real-time reporting.',
    metrics: [
      { label: 'HR Modules', value: '12+', icon: FiLayers },
      { label: 'Time Saved', value: '60%', icon: FiTrendingUp },
      { label: 'Processes', value: 'Auto', icon: FiZap },
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'AWS', 'Redis'],
    accentColor: 'purple',
    gradient: 'from-purple-600 via-indigo-600 to-blue-800',
    lightGradient: 'from-purple-50 to-indigo-50',
    borderColor: 'border-purple-200',
    hoverBorder: 'hover:border-purple-400',
    link: null,
    featured: false,
  },
];

const categories = ['All', 'PropTech', 'PropTech SaaS', 'Enterprise SaaS'];

/* ─── Accent color map for dynamic Tailwind classes ─── */
const accentMap = {
  blue: {
    metricValue: 'text-blue-600',
    metricIconBg: 'bg-blue-100',
    metricIcon: 'text-blue-600',
    tagBg: 'bg-blue-50',
    tagBorder: 'border-blue-200',
    tagText: 'text-blue-700',
    linkText: 'text-blue-600 hover:text-blue-700',
    problemBg: 'bg-rose-50',
    problemBorder: 'border-rose-200',
    outcomeBg: 'bg-emerald-50',
    outcomeBorder: 'border-emerald-200',
  },
  teal: {
    metricValue: 'text-teal-600',
    metricIconBg: 'bg-teal-100',
    metricIcon: 'text-teal-600',
    tagBg: 'bg-teal-50',
    tagBorder: 'border-teal-200',
    tagText: 'text-teal-700',
    linkText: 'text-teal-600 hover:text-teal-700',
    problemBg: 'bg-rose-50',
    problemBorder: 'border-rose-200',
    outcomeBg: 'bg-emerald-50',
    outcomeBorder: 'border-emerald-200',
  },
  purple: {
    metricValue: 'text-purple-600',
    metricIconBg: 'bg-purple-100',
    metricIcon: 'text-purple-600',
    tagBg: 'bg-purple-50',
    tagBorder: 'border-purple-200',
    tagText: 'text-purple-700',
    linkText: 'text-purple-600 hover:text-purple-700',
    problemBg: 'bg-rose-50',
    problemBorder: 'border-rose-200',
    outcomeBg: 'bg-emerald-50',
    outcomeBorder: 'border-emerald-200',
  },
  amber: {
    metricValue: 'text-amber-600',
    metricIconBg: 'bg-amber-100',
    metricIcon: 'text-amber-600',
    tagBg: 'bg-amber-50',
    tagBorder: 'border-amber-200',
    tagText: 'text-amber-700',
    linkText: 'text-amber-600 hover:text-amber-700',
    problemBg: 'bg-rose-50',
    problemBorder: 'border-rose-200',
    outcomeBg: 'bg-emerald-50',
    outcomeBorder: 'border-emerald-200',
  },
};

/* ─── Featured Project Card (full-width spotlight) ─── */
function FeaturedCard({ project, index }) {
  const a = accentMap[project.accentColor];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="col-span-full group"
    >
      <div className={`rounded-3xl border ${project.borderColor} ${project.hoverBorder} bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/8 hover:-translate-y-1`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — Visual / Gradient */}
          <div className={`relative bg-gradient-to-br ${project.gradient} min-h-[280px] lg:min-h-[400px] overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10" />
            {/* Abstract decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-12 left-8 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
            <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-10 text-white" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="20" fill="currentColor" fillOpacity="0.15" />
            </svg>

            <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-xs font-bold text-slate-900 shadow-sm inline-flex items-center gap-1.5">
                  <FiAward className="text-amber-500" />
                  Featured · {project.category}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200"
                  >
                    <FiExternalLink className="text-sm" />
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-1 drop-shadow-lg">{project.title}</h3>
                <p className="text-base text-white/80 font-medium">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-base text-slate-600 leading-relaxed mb-6">{project.description}</p>

              {/* Problem → Outcome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className={`p-4 rounded-2xl ${a.problemBg} border ${a.problemBorder}`}>
                  <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <FiTarget className="text-xs" /> The Problem
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{project.problem}</p>
                </div>
                <div className={`p-4 rounded-2xl ${a.outcomeBg} border ${a.outcomeBorder}`}>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <FiTrendingUp className="text-xs" /> The Outcome
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {project.metrics.map((m) => {
                  const MetricIcon = m.icon;
                  return (
                    <div key={m.label} className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className={`w-8 h-8 rounded-lg ${a.metricIconBg} flex items-center justify-center mx-auto mb-2`}>
                        <MetricIcon className={`text-sm ${a.metricIcon}`} />
                      </div>
                      <div className={`text-lg font-extrabold ${a.metricValue}`}>{m.value}</div>
                      <div className="text-[10px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech + CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-lg ${a.tagBg} border ${a.tagBorder} text-[11px] font-mono ${a.tagText} font-semibold`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link || '#contact'}
                target={project.link ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] transition-all duration-200`}
              >
                {project.link ? 'Visit Live' : 'Learn More'}
                <FiArrowUpRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({ project, index }) {
  const a = accentMap[project.accentColor];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className={`h-full rounded-3xl border ${project.borderColor} ${project.hoverBorder} bg-white overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-slate-500/5 hover:-translate-y-2`}>
        {/* Gradient Header */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5 blur-2xl" />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between">
              <span className="px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-slate-900 shadow-sm">
                {project.category}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200"
                >
                  <FiExternalLink className="text-xs" />
                </a>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-black text-white drop-shadow-md">{project.title}</h3>
              <p className="text-sm text-white/75 font-medium mt-0.5">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-5">{project.description}</p>

          {/* Problem → Outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
            <div className={`p-3 rounded-xl ${a.problemBg} border ${a.problemBorder}`}>
              <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <FiTarget className="text-[10px]" /> Problem
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">{project.problem}</p>
            </div>
            <div className={`p-3 rounded-xl ${a.outcomeBg} border ${a.outcomeBorder}`}>
              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <FiTrendingUp className="text-[10px]" /> Outcome
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {project.metrics.map((m) => {
              const MetricIcon = m.icon;
              return (
                <div key={m.label} className="text-center p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-slate-50 transition-colors duration-300">
                  <div className={`text-base font-extrabold ${a.metricValue}`}>{m.value}</div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                </div>
              );
            })}
          </div>

          {/* Tech Tags + Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`px-2 py-0.5 rounded-md ${a.tagBg} border ${a.tagBorder} text-[10px] font-mono ${a.tagText} font-semibold`}
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link || '#contact'}
              target={project.link ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-bold ${a.linkText} transition-colors group/link`}
            >
              <span>{project.link ? 'Visit' : 'Details'}</span>
              <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Portfolio Section ─── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      {/* Background decor */}
      <div className="glow-primary top-1/4 left-1/3 opacity-30 pointer-events-none" />
      <div className="glow-accent bottom-1/4 right-1/4 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <FiZap className="text-sm" />
            <span>Portfolio & Case Studies</span>
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
            className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            From SaaS platforms to enterprise applications — explore our work and the measurable business impact we created for our clients.
          </motion.p>
        </div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'bg-white text-slate-500 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) =>
              project.featured && activeFilter === 'All' ? (
                <FeaturedCard key={project.id} project={project} index={index} />
              ) : (
                <ProjectCard key={project.id} project={project} index={index} />
              )
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-500/5">
            <div className="text-left">
              <h4 className="text-lg font-bold text-slate-900">Have a project in mind?</h4>
              <p className="text-sm text-slate-500 mt-0.5">Let's discuss how we can bring your idea to life.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-2 transition-all duration-200 hover:scale-[1.03]"
            >
              Start a Project
              <FiArrowRight />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
