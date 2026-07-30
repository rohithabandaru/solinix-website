import React from 'react';
import { motion } from 'framer-motion';
import {
  FiZap, FiShield, FiUsers, FiTrendingUp, FiClock, FiAward,
  FiCheck, FiX, FiArrowRight
} from 'react-icons/fi';

const bentoItems = [
  {
    id: 'speed',
    icon: FiZap,
    title: '10x Faster Delivery',
    description: 'Rapid development sprints with CI/CD pipelines accelerate your product launch from months to weeks.',
    highlight: 'Velocity First',
    color: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
    span: 'lg:col-span-1',
  },
  {
    id: 'quality',
    icon: FiAward,
    title: 'Enterprise Quality Code',
    description: 'Every line of code goes through rigorous reviews, automated testing, and quality gates before deployment. We don\'t ship bugs.',
    highlight: 'Zero Defects',
    color: 'from-indigo-600 to-blue-600',
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    span: 'lg:col-span-2',
  },
  {
    id: 'security',
    icon: FiShield,
    title: 'Security-First Development',
    description: 'Built-in security at every layer. From code to cloud — we protect your business and your users\' data.',
    highlight: 'Bank-Grade Security',
    color: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
    span: 'lg:col-span-1',
  },
  {
    id: 'support',
    icon: FiClock,
    title: '24/7 Ongoing Support',
    description: 'We don\'t disappear after launch. Our team provides round-the-clock monitoring and maintenance.',
    highlight: 'Always Available',
    color: 'from-indigo-600 to-blue-600',
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    span: 'lg:col-span-1',
  },
  {
    id: 'team',
    icon: FiUsers,
    title: 'Dedicated Expert Team',
    description: 'Work directly with senior developers, designers and strategists who are passionate about your success.',
    highlight: 'Top 1% Talent',
    color: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
    span: 'lg:col-span-1',
  },
  {
    id: 'growth',
    icon: FiTrendingUp,
    title: 'Scalable for Your Growth',
    description: 'Our solutions grow with your business. Whether you have 100 or 1,000,000 users — we build for scale from day one.',
    highlight: 'Future-Proof',
    color: 'from-indigo-600 to-blue-600',
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  },
];

const comparison = [
  { feature: 'Engineering Team', solinix: 'Senior developers, direct access', others: 'Junior devs, high turnover' },
  { feature: 'Delivery Speed', solinix: 'Agile sprints, fast delivery', others: 'Slow, delayed timelines' },
  { feature: 'Communication', solinix: 'Daily updates, transparent reports', others: 'Infrequent, vague updates' },
  { feature: 'Code Quality', solinix: 'Reviewed, tested, documented', others: 'Inconsistent standards' },
  { feature: 'Post-Launch Support', solinix: '24/7 monitoring & maintenance', others: 'Extra charges, slow response' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/4 left-10 opacity-20 pointer-events-none" />
      <div className="glow-accent bottom-10 right-10 opacity-20 pointer-events-none" />

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
            <FiShield className="text-sm" />
            <span>WHY CHOOSE SOLINIX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            We Don't Just Build Software.{' '}
            <br className="hidden sm:inline" />
            <span className="text-gradient-primary">We Build Businesses.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Partner with a team that treats your project like their own business. We deliver quality, speed, and results that matter.
          </motion.p>
        </div>

        {/* Modern Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                className={`glass-card rounded-3xl p-7 border border-slate-200/90 group relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl bg-white ${item.span}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} opacity-8 rounded-bl-full pointer-events-none group-hover:opacity-15 transition-opacity`} />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl border border-blue-200 bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-xl text-blue-600" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-sm"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Solinix vs. The Rest
            </h3>
            <p className="text-sm text-slate-500 mt-2">See how our approach stands apart from typical software agencies.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-5">Criteria</th>
                  <th className="py-4 px-5 text-blue-600 font-bold">Solinix Software Solutions</th>
                  <th className="py-4 px-5 text-slate-400">Other Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-5">
                      <span className="flex items-center gap-2 text-slate-900 font-medium">
                        <FiCheck className="text-blue-600 shrink-0 font-bold" />
                        {row.solinix}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="flex items-center gap-2 text-slate-500">
                        <FiX className="text-rose-500 shrink-0" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              Work With Solinix
              <FiArrowRight />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
