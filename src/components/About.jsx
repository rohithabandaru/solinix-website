import React from 'react';
import { motion } from 'framer-motion';
import {
  FiZap, FiShield, FiUsers, FiCheckCircle, FiArrowRight, FiLayers, FiEye, FiTarget, FiCompass, FiCpu, FiCheck
} from 'react-icons/fi';
import { FaBolt, FaMedal, FaHandshake, FaAws, FaDocker, FaFigma } from 'react-icons/fa';

const visionMission = [
  {
    id: 'vision',
    badge: 'FUTURE-FORWARD',
    icon: FiEye,
    title: 'Our Vision',
    subtitle: 'Where We Are Heading',
    description:
      'To be the global technology engine that transforms ambitious software ideas into scalable, high-impact digital products — setting new benchmarks for engineering quality, user experience, and technical innovation.',
    features: [
      'Empowering Global Founders & Enterprise SMBs',
      'Pioneering Modern AI & Cloud Architecture',
      'Infinite Scalability Designed From Day One',
      'Human-Centric & High-Performance UX',
    ],
    pillars: [
      { name: 'AI Integration', icon: FiZap, color: 'text-cyan-400' },
      { name: 'Cloud Native', icon: FaAws, color: 'text-amber-400' },
      { name: 'Enterprise UX', icon: FaFigma, color: 'text-purple-400' },
      { name: 'Global Scale', icon: FiCompass, color: 'text-blue-400' },
    ],
    image: '/images/services/software-dev.webp',
    overlay: 'from-slate-950/95 via-blue-950/90 to-slate-900/80',
    accentColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    iconBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'mission',
    badge: 'ACTION-DRIVEN',
    icon: FiTarget,
    title: 'Our Mission',
    subtitle: 'What Drives Us Daily',
    description:
      'To deliver end-to-end technical mastery, transparent collaboration, and continuous execution so our clients can innovate rapidly, eliminate tech bottlenecks, and achieve sustainable digital success.',
    features: [
      '100% Technical Ownership & Strategy',
      'Zero-Defect Enterprise Code Quality',
      'Agile Sprints & Accelerated Delivery',
      '24/7 Long-Term Support & Partnership',
    ],
    pillars: [
      { name: 'Agile Execution', icon: FiZap, color: 'text-emerald-400' },
      { name: 'Bank-Grade Security', icon: FiShield, color: 'text-blue-400' },
      { name: 'DevOps & CI/CD', icon: FaDocker, color: 'text-cyan-300' },
      { name: 'Transparent Growth', icon: FiCheckCircle, color: 'text-indigo-400' },
    ],
    image: '/images/services/cloud.webp',
    overlay: 'from-slate-950/95 via-indigo-950/90 to-slate-900/80',
    accentColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    iconBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  },
];

const values = [
  {
    icon: FaBolt,
    title: 'Innovation',
    description: 'We leverage the latest technologies to build future-ready solutions that keep your business ahead of the curve.',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: FaMedal,
    title: 'Quality',
    description: 'We follow best practices to deliver secure, scalable and reliable products that stand the test of time.',
    color: 'from-indigo-600 to-blue-500',
    textColor: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: FaHandshake,
    title: 'Partnership',
    description: 'We believe in long-term partnerships and shared success. Your growth is our mission.',
    color: 'from-purple-600 to-indigo-500',
    textColor: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
];

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Happy Clients' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Team Members' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="glow-primary top-1/3 left-0 opacity-30 pointer-events-none" />
      <div className="glow-accent bottom-10 right-0 opacity-20 pointer-events-none" />

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
            <span>WHO WE ARE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Not Just Coders — Your{' '}
            <span className="text-gradient-primary">Tech Growth Partner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            We're a team of engineers, designers, and product builders who hate clunky software. We build fast, clean, and bulletproof digital products so you can scale without tech headaches.
          </motion.p>
        </div>

        {/* Main 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-5">
              We turn ambitious ideas into products that users love &amp; markets buy.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base mb-6">
              Whether you're an early-stage founder building an MVP or an established business modernizing legacy systems — we take complete technical ownership from day one. Design, code, cloud setup, and growth strategy under one roof.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Full-stack web & mobile app engineering',
                'Custom SaaS product development',
                'AWS/Azure cloud setup & CI/CD automation',
                'High-converting UI/UX & growth marketing',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <FiCheckCircle className="text-blue-600 text-base shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              Let's Talk About Your Project
              <FiArrowRight />
            </a>
          </motion.div>

          {/* Right: Team Image & Floating Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Team Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl group">
              <img
                src="/images/about-team.webp"
                alt="Solinix Software Engineering Team"
                loading="lazy"
                decoding="async"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Image Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Engineering Excellence</div>
                <div className="text-base font-bold text-white">Our Senior Engineering &amp; Product Team</div>
              </div>
            </div>

            {/* Floating Badge 1: Happy Clients */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-extrabold text-lg">
                50+
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Happy Clients</div>
                <div className="text-[10px] text-slate-500 font-medium">Enterprise &amp; SMBs</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Years Experience */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-extrabold text-lg">
                5+
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Years Experience</div>
                <div className="text-[10px] text-slate-500 font-medium">Domain Expertise</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision & Mission Section (Services Container Style) */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
            >
              <FiCompass className="text-sm text-blue-600" />
              <span>OUR PURPOSE</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Driven by Vision.{' '}
              <span className="text-gradient-primary">Guided by Mission.</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              The foundational pillars that power every line of code we write and every product we ship.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {visionMission.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="group relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-500 hover:-translate-y-2 border border-slate-200/60 cursor-pointer"
                >
                  {/* Background Image with Hover Zoom */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.overlay} transition-opacity duration-500 group-hover:opacity-95`} />

                  {/* Card Content Container */}
                  <div className="relative z-10 p-7 sm:p-9 flex flex-col h-full justify-between">
                    
                    {/* Card Header (Icon & Badge) */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border backdrop-blur-md flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 drop-shadow-md">
                        {item.title}
                      </h4>
                      <p className={`text-xs font-bold uppercase tracking-wider ${item.accentColor} mb-4`}>
                        {item.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Features & Execution Pillars */}
                    <div>
                      {/* Feature Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {item.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                            <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shrink-0 backdrop-blur-sm">
                              <FiCheck className="text-white text-[10px]" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pillars / Core Focus Section */}
                      <div className="mb-6 pt-4 border-t border-white/15">
                        <div className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${item.accentColor} mb-3`}>
                          <FiCpu className="text-xs" />
                          <span>Core Execution Pillars</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.pillars.map((pillar, idx) => {
                            const PillarIcon = pillar.icon;
                            return (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-xs font-semibold text-white transition-all hover:scale-105"
                              >
                                <PillarIcon className={`text-xs ${pillar.color}`} />
                                <span>{pillar.name}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Card Footer Link */}
                      <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-300 transition-colors group/link"
                        >
                          <span>Explore Our Engineering Focus</span>
                          <FiArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300 text-cyan-400" />
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values Row */}
        <div className="mt-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">WHAT WE STAND FOR</h4>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Core Values</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={cardVariants}
                  className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-200/90 relative overflow-hidden group bg-white shadow-sm"
                >
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${v.color} opacity-10 rounded-bl-full pointer-events-none group-hover:opacity-20 transition-opacity`} />
                  <div className={`w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-2xl text-blue-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

