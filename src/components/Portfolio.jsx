import React from 'react';
import { motion } from 'framer-motion';
import {
  FiExternalLink, FiArrowRight, FiZap, FiArrowUpRight
} from 'react-icons/fi';

const projects = [
  {
    id: 'pgmove',
    title: 'PGMove',
    category: 'PropTech',
    tagline: 'PG discovery platform connecting tenants with property owners across India.',
    metrics: [
      { label: 'Properties', value: '1,200+' },
      { label: 'Cities', value: '8' },
      { label: 'Users', value: '5K+' },
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-600 via-indigo-600 to-blue-900',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    accentText: 'text-blue-600',
    link: 'https://www.pgmove.in',
  },
  {
    id: 'stayzzy',
    title: 'Stayzzy',
    category: 'PropTech SaaS',
    tagline: 'Complete hostel & PG management with rent collection and occupancy tracking.',
    metrics: [
      { label: 'PGs Managed', value: '800+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Tenants', value: '3.5K+' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-cyan-600 via-teal-600 to-blue-800',
    borderColor: 'border-teal-200',
    hoverBorder: 'hover:border-teal-400',
    accentText: 'text-teal-600',
    link: 'https://www.stayzzy.in',
  },
  {
    id: 'hrms',
    title: 'HRMS',
    category: 'Enterprise SaaS',
    tagline: 'Intelligent HR automation — payroll, attendance, onboarding & performance.',
    metrics: [
      { label: 'Modules', value: '12+' },
      { label: 'Time Saved', value: '60%' },
      { label: 'Processes', value: 'Auto' },
    ],
    tech: ['React', 'Python', 'PostgreSQL'],
    gradient: 'from-purple-600 via-indigo-600 to-blue-800',
    borderColor: 'border-purple-200',
    hoverBorder: 'hover:border-purple-400',
    accentText: 'text-purple-600',
    link: null,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiZap className="text-sm" />
            <span>Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Projects That{' '}
            <span className="text-gradient-primary">Delivered Results</span>
          </motion.h2>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full rounded-2xl border ${project.borderColor} ${project.hoverBorder} bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>

                {/* Gradient Top Bar */}
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                  <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                    <span className="self-start px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold text-slate-800 shadow-sm">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black text-white drop-shadow-md">{project.title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{project.tagline}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <div className={`text-sm font-extrabold ${project.accentText}`}>{m.value}</div>
                        <div className="text-[9px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech + Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link || '#contact'}
                      target={project.link ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`${project.accentText} hover:opacity-80 transition-opacity`}
                    >
                      {project.link ? <FiExternalLink className="text-base" /> : <FiArrowRight className="text-base" />}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            Start Your Project
            <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
