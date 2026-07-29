import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiClock } from 'react-icons/fi';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-5"
        >
          <FiBookOpen className="text-sm" />
          <span>Blog</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Our Latest{' '}
          <span className="text-gradient-primary">Tech Insights</span>
        </motion.h2>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-10 sm:p-14 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-500/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
            <FiClock className="text-2xl text-blue-600" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Coming Soon
          </h3>

          <p className="text-base text-slate-500 leading-relaxed max-w-md mx-auto">
            We're crafting insightful articles on engineering, product strategy, and lessons from building real-world software. Stay tuned!
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              In Progress
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
