import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiClock, FiCalendar, FiTag, FiBookOpen, FiTrendingUp, FiExternalLink
} from 'react-icons/fi';

const blogPosts = [
  {
    id: 'blog-1',
    title: 'Why Startups Should Invest in Custom Software Over Templates',
    excerpt: 'Off-the-shelf solutions seem cheaper upfront, but custom-built software delivers 3x better ROI in the long run. Here\'s a data-driven breakdown of why.',
    category: 'Business',
    date: 'Jul 20, 2025',
    readTime: '6 min read',
    author: 'Solinix Team',
    featured: true,
    gradient: 'from-blue-600 via-indigo-600 to-blue-800',
    tags: ['Startups', 'ROI', 'Strategy'],
  },
  {
    id: 'blog-2',
    title: 'React 19 + Next.js 15: What\'s New for Enterprise Apps',
    excerpt: 'A deep dive into Server Components, Actions, and the new compiler — and how we\'re leveraging them at Solinix to build faster apps.',
    category: 'Engineering',
    date: 'Jul 15, 2025',
    readTime: '8 min read',
    author: 'Solinix Team',
    featured: false,
    gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    tags: ['React', 'Next.js', 'Frontend'],
  },
  {
    id: 'blog-3',
    title: 'How We Achieved 99.9% Uptime for Stayzzy\'s Platform',
    excerpt: 'A behind-the-scenes look at our infrastructure setup — from Docker containers to AWS auto-scaling and zero-downtime deployments.',
    category: 'DevOps',
    date: 'Jul 10, 2025',
    readTime: '7 min read',
    author: 'Solinix Team',
    featured: false,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    tags: ['AWS', 'Docker', 'Uptime'],
  },
  {
    id: 'blog-4',
    title: 'The Complete Guide to Building a SaaS MVP in 2025',
    excerpt: 'From idea validation to launch — a step-by-step playbook we use internally to take SaaS products from zero to market in under 8 weeks.',
    category: 'Product',
    date: 'Jul 5, 2025',
    readTime: '10 min read',
    author: 'Solinix Team',
    featured: false,
    gradient: 'from-purple-600 via-indigo-600 to-blue-700',
    tags: ['SaaS', 'MVP', 'Product'],
  },
  {
    id: 'blog-5',
    title: 'UI/UX Design Principles That Increase User Retention by 40%',
    excerpt: 'Real examples from our client projects showing how micro-interactions, loading states, and layout tweaks dramatically improved engagement.',
    category: 'Design',
    date: 'Jun 28, 2025',
    readTime: '5 min read',
    author: 'Solinix Team',
    featured: false,
    gradient: 'from-rose-600 via-pink-600 to-purple-700',
    tags: ['UI/UX', 'Design', 'Retention'],
  },
  {
    id: 'blog-6',
    title: 'PostgreSQL vs MongoDB: Choosing the Right Database for Your App',
    excerpt: 'A practical comparison based on real-world use cases — when to use SQL, when to go NoSQL, and how to architect for both.',
    category: 'Engineering',
    date: 'Jun 22, 2025',
    readTime: '9 min read',
    author: 'Solinix Team',
    featured: false,
    gradient: 'from-amber-600 via-orange-600 to-red-700',
    tags: ['Database', 'PostgreSQL', 'MongoDB'],
  },
];

const categories = ['All', 'Business', 'Engineering', 'DevOps', 'Product', 'Design'];

const categoryColors = {
  Business: 'bg-blue-50 text-blue-700 border-blue-200',
  Engineering: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  DevOps: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Product: 'bg-purple-50 text-purple-700 border-purple-200',
  Design: 'bg-rose-50 text-rose-700 border-rose-200',
};

/* ─── Featured Blog Card (Full Width) ─── */
function FeaturedPost({ post }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5 }}
      className="col-span-full group"
    >
      <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — Gradient Visual */}
          <div className={`relative bg-gradient-to-br ${post.gradient} min-h-[260px] lg:min-h-[380px] overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10" />
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-12 left-8 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
            <svg className="absolute bottom-0 right-0 w-56 h-56 opacity-10 text-white" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-slate-900 shadow-sm inline-flex items-center gap-1.5">
                  <FiTrendingUp className="text-blue-600" />
                  Featured Post
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-white border border-white/30">
                  {post.category}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-white/70 text-xs mb-3">
                  <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white leading-snug drop-shadow-lg">
                  {post.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-600 flex items-center gap-1"
                  >
                    <FiTag className="text-[10px]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                  S
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{post.author}</div>
                  <div className="text-[11px] text-slate-500">{post.date}</div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] transition-all duration-200"
              >
                Read Article
                <FiArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Standard Blog Card ─── */
function BlogCard({ post, index }) {
  const catColor = categoryColors[post.category] || 'bg-slate-50 text-slate-700 border-slate-200';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group"
    >
      <div className="h-full rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-500/5 hover:-translate-y-2 transition-all duration-400">
        {/* Gradient Header */}
        <div className={`relative h-44 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5 blur-2xl" />

          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full border text-[11px] font-bold ${catColor}`}>
                {post.category}
              </span>
              <span className="text-white/60 text-[11px] flex items-center gap-1">
                <FiClock className="text-[10px]" />
                {post.readTime}
              </span>
            </div>
            <div className="text-white/70 text-[11px] flex items-center gap-1">
              <FiCalendar className="text-[10px]" />
              {post.date}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-[10px]">
                S
              </div>
              <span className="text-xs font-semibold text-slate-700">{post.author}</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
            >
              <span>Read</span>
              <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Blog Section ─── */
export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeFilter);

  return (
    <section id="blog" className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      {/* Background decor */}
      <div className="glow-primary top-1/4 right-1/4 opacity-25 pointer-events-none" />
      <div className="glow-accent bottom-1/3 left-1/4 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

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
            <FiBookOpen className="text-sm" />
            <span>Insights & Articles</span>
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            Engineering deep dives, product strategy tips, and lessons learned from building real-world software at Solinix.
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

        {/* ── Blog Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) =>
              post.featured && activeFilter === 'All' ? (
                <FeaturedPost key={post.id} post={post} />
              ) : (
                <BlogCard key={post.id} post={post} index={index} />
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
              <h4 className="text-lg font-bold text-slate-900">Want more insights?</h4>
              <p className="text-sm text-slate-500 mt-0.5">Subscribe to get the latest articles delivered to your inbox.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-2 transition-all duration-200 hover:scale-[1.03]"
            >
              Subscribe
              <FiArrowRight />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
