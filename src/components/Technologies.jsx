import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaAndroid, FaCloud
} from 'react-icons/fa';
import {
  SiNextdotjs, SiPostgresql, SiMysql, SiMongodb,
  SiTailwindcss, SiTypescript, SiFlutter, SiKubernetes, SiRedis
} from 'react-icons/si';
import { FiLayers, FiArrowRight } from 'react-icons/fi';

const techGroups = [
  {
    category: 'Frontend',
    color: 'from-cyan-600 to-blue-600',
    items: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', bg: 'bg-white/5 border-white/10' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300', bg: 'bg-cyan-400/10 border-cyan-400/20' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-emerald-600 to-cyan-600',
    items: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
      { name: 'Python', icon: FaPython, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
      { name: 'Java', icon: FaJava, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
    ],
  },
  {
    category: 'Mobile',
    color: 'from-purple-600 to-indigo-600',
    items: [
      { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { name: 'Android', icon: FaAndroid, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-amber-600 to-orange-500',
    items: [
      { name: 'AWS', icon: FaAws, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
      { name: 'Azure', icon: FaCloud, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { name: 'Docker', icon: FaDocker, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500', bg: 'bg-blue-600/10 border-blue-600/20' },
    ],
  },
  {
    category: 'Databases',
    color: 'from-blue-600 to-indigo-600',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { name: 'MySQL', icon: SiMysql, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
    ],
  },
];

// Flat list for the animated logo strip
const allTech = [
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400' },
  { name: 'Python', icon: FaPython, color: 'text-amber-400' },
  { name: 'Java', icon: FaJava, color: 'text-orange-400' },
  { name: 'AWS', icon: FaAws, color: 'text-amber-400' },
  { name: 'Azure', icon: FaCloud, color: 'text-blue-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-cyan-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-amber-400' },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

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
            <FiLayers className="text-sm" />
            <span>TECHNOLOGIES WE USE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Powered by{' '}
            <span className="text-gradient-primary">Modern Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            We leverage industry-leading tools and frameworks to build solutions that are fast, scalable, and future-proof.
          </motion.p>
        </div>

        {/* Animated Logo Marquee Strip */}
        <div className="overflow-hidden mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...allTech, ...allTech].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="glass-card border border-slate-200/90 rounded-2xl px-6 py-4 flex items-center gap-3 shrink-0 hover:border-blue-500/40 bg-white shadow-sm transition-colors"
                >
                  <Icon className={`text-2xl ${tech.color === 'text-white' ? 'text-slate-900' : tech.color}`} />
                  <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, gIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIndex * 0.1 }}
              className="glass-card rounded-3xl border border-slate-200/90 p-6 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 bg-white shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{group.category}</h3>
              </div>

              {/* Tech Items */}
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-white hover:border-blue-300 hover:shadow-sm hover:scale-105 transition-all cursor-default"
                    >
                      <TechIcon className={`text-xl ${tech.color === 'text-white' ? 'text-slate-900' : tech.color} shrink-0`} />
                      <span className="text-xs font-semibold text-slate-800 truncate">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/70 to-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-1">Using a different tech stack?</h4>
            <p className="text-sm text-slate-600">We adapt to your existing technology. Let's discuss your requirements.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            Talk to Us
            <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
