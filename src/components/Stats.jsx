import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiBriefcase, FiPackage, FiStar } from 'react-icons/fi';

const stats = [
  {
    icon: FiUsers,
    number: 10,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses trust us to deliver results',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-600',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: FiBriefcase,
    number: 25,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'On time, on budget, every time',
    color: 'from-indigo-600 to-blue-600',
    textColor: 'text-indigo-600',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: FiPackage,
    number: 5,
    suffix: '+',
    label: 'Products Built',
    description: 'Real-world SaaS products in production',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-600',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: FiStar,
    number: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    description: "We don't stop until you're delighted",
    color: 'from-indigo-600 to-blue-600',
    textColor: 'text-indigo-600',
    glow: 'shadow-indigo-500/20',
  },
];

function CountUp({ target, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200" ref={ref}>
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiStar className="text-sm" />
            <span>BY THE NUMBERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Numbers That{' '}
            <span className="text-gradient-primary">Speak for Themselves</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border border-slate-200/90 flex flex-col items-center text-center group relative overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
              >
                {/* Accent BG */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 p-[1px] shadow-sm mb-5 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <Icon className="text-xl text-blue-600" />
                </div>

                {/* Number */}
                <div className="text-5xl sm:text-6xl font-black text-blue-600 tracking-tight">
                  <CountUp target={stat.number} suffix={stat.suffix} isInView={isInView} />
                </div>

                {/* Label */}
                <h3 className="text-base font-bold text-slate-900 mt-3">{stat.label}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/70 to-blue-50 border border-blue-200 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Be Our Next Success Story?</h3>
          <p className="text-slate-600 text-sm mb-6 max-w-lg mx-auto">Join our growing list of happy clients and take your business to the next level with Solinix.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            Start Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}
