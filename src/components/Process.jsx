import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCompass, FiLayout, FiCode, FiCheckSquare, FiGlobe, FiSettings, FiHeadphones,
  FiCheckCircle, FiArrowRight, FiZap
} from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: FiCompass,
    phase: 'Discovery',
    title: 'Discovery & Requirements',
    description: 'We dive deep into your business goals, target audience, and technical requirements to craft a comprehensive project blueprint.',
    deliverables: ['Business requirements analysis', 'Technical feasibility study', 'Project scope & timeline', 'Budget planning'],
    color: 'from-blue-600 to-cyan-500',
    iconColor: 'text-blue-400',
    dotColor: 'bg-blue-500',
  },
  {
    number: '02',
    icon: FiLayout,
    phase: 'Planning',
    title: 'Strategic Planning',
    description: 'Turning your requirements into a detailed roadmap with milestones, sprint plans, and resource allocation for smooth execution.',
    deliverables: ['Project roadmap', 'Sprint planning', 'Technology stack selection', 'Team allocation'],
    color: 'from-indigo-600 to-blue-500',
    iconColor: 'text-indigo-400',
    dotColor: 'bg-indigo-500',
  },
  {
    number: '03',
    icon: FiLayout,
    phase: 'Design',
    title: 'UI/UX Design',
    description: 'Creating stunning, intuitive interfaces that users love. Every pixel is purposeful, every interaction is seamless.',
    deliverables: ['Wireframes & mockups', 'UI design system', 'Interactive prototypes', 'User experience flows'],
    color: 'from-purple-600 to-indigo-500',
    iconColor: 'text-purple-400',
    dotColor: 'bg-purple-500',
  },
  {
    number: '04',
    icon: FiCode,
    phase: 'Development',
    title: 'Agile Development',
    description: 'Our engineers build your solution in iterative sprints with clean code, continuous integration, and regular demos.',
    deliverables: ['Frontend & backend development', 'API integration', 'Database architecture', 'Bi-weekly demos'],
    color: 'from-cyan-600 to-blue-500',
    iconColor: 'text-cyan-400',
    dotColor: 'bg-cyan-500',
  },
  {
    number: '05',
    icon: FiCheckSquare,
    phase: 'Testing',
    title: 'Quality Assurance',
    description: 'Rigorous testing across devices and scenarios to ensure your product is bug-free, secure, and performs at its best.',
    deliverables: ['Unit & integration testing', 'Performance testing', 'Security audits', 'User acceptance testing'],
    color: 'from-emerald-600 to-cyan-500',
    iconColor: 'text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  {
    number: '06',
    icon: FiGlobe,
    phase: 'Deployment',
    title: 'Launch & Deployment',
    description: 'Seamless deployment to production with zero-downtime releases, server configuration, and go-live support.',
    deliverables: ['Cloud server setup', 'CI/CD pipeline', 'Domain & SSL configuration', 'Go-live monitoring'],
    color: 'from-amber-600 to-orange-500',
    iconColor: 'text-amber-400',
    dotColor: 'bg-amber-500',
  },
  {
    number: '07',
    icon: FiHeadphones,
    phase: 'Support',
    title: 'Ongoing Support',
    description: 'Post-launch, we remain your technology partner. Monitoring, updates, feature additions — we keep your product thriving.',
    deliverables: ['24/7 monitoring', 'Bug fixes & updates', 'Feature enhancements', 'Performance optimization'],
    color: 'from-blue-600 to-indigo-600',
    iconColor: 'text-blue-400',
    dotColor: 'bg-blue-500',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section id="process" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none" />
      <div className="glow-accent bottom-0 right-0 opacity-20 pointer-events-none" />

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
            <FiZap className="text-sm" />
            <span>DEVELOPMENT PROCESS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            How We Turn Your Idea{' '}
            <span className="text-gradient-primary">Into Reality</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Our proven 7-step development methodology ensures transparent, on-time delivery with exceptional quality at every phase.
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Step Selector Sidebar */}
          <div className="lg:col-span-4">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-400 to-blue-200 opacity-40" />

              <div className="space-y-2">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = activeStep === index;
                  return (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group relative ${
                        isActive
                          ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10'
                          : 'bg-white/60 border-slate-200/90 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center border-2 transition-colors ${
                        isActive ? 'bg-blue-600 border-transparent text-white' : 'bg-slate-100 border-slate-300 text-slate-500 group-hover:border-blue-400'
                      }`}>
                        <StepIcon className="text-sm" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Phase {step.number}</div>
                        <div className={`text-sm font-bold truncate transition-colors ${isActive ? 'text-blue-600' : 'text-slate-700 group-hover:text-blue-600'}`}>
                          {step.phase}
                        </div>
                      </div>

                      <div className={`ml-auto text-xs font-mono shrink-0 font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                        {step.number}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Step Detail Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="glass-card rounded-3xl border border-slate-200 bg-white shadow-md overflow-hidden"
              >
                {/* Card Header */}
                <div className={`p-8 bg-gradient-to-r ${active.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="text-xs font-mono text-white/80 uppercase tracking-widest mb-1 font-semibold">Phase {active.number} — {active.phase}</div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{active.title}</h3>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/40 flex items-center justify-center shrink-0 shadow-inner">
                      <ActiveIcon className="text-white text-2xl" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed text-base mb-8">{active.description}</p>

                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Key Deliverables</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {active.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                          <FiCheckCircle className="text-blue-600 shrink-0" />
                          <span className="text-sm font-medium text-slate-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                    >
                      Start Your Project
                      <FiArrowRight />
                    </a>
                    {activeStep < steps.length - 1 && (
                      <button
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-sm transition-all"
                      >
                        Next Phase
                        <FiArrowRight />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
