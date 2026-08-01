import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowRight, FiCheckCircle, FiZap, FiMonitor, FiUsers, FiHome } from 'react-icons/fi';

const products = [
  {
    id: 'pgmove',
    name: 'PGMove.in',
    tagline: 'Smart PG & Rental Management Platform',
    description: 'A smart platform connecting tenants with PGs, hostels and rental accommodations while empowering property owners to manage listings and automate leads.',
    website: 'www.pgmove.in',
    icon: FiHome,
    badge: 'Live Platform',
    badgeDot: 'bg-emerald-500',
    image: '/images/product-pgmove.webp',
    features: [
      'Smart Property Search & Filters',
      'Property Owner Dashboard',
      'Digital Rental Agreements',
      'Occupancy & Lead Automation',
      'Tenant Verification Portal',
    ],
    stats: [
      { label: 'Properties', value: '1,200+' },
      { label: 'Cities', value: '8' },
      { label: 'Active Users', value: '5,000+' },
    ],
  },
  {
    id: 'stayzzy',
    name: 'Stayzzy.in',
    tagline: 'Complete PG & Hostel Management System',
    description: 'End-to-end management platform built for property owners and tenants. Automate rent collections, digital agreements, maintenance, and occupancy growth.',
    website: 'www.stayzzy.in',
    icon: FiMonitor,
    badge: 'Live Platform',
    badgeDot: 'bg-emerald-500',
    image: '/images/product-stayzzy.webp',
    features: [
      'Automated Rent Collections',
      'Maintenance Ticket System',
      'Tenant Onboarding Portal',
      'Analytics & Financial Reports',
      'Mobile Owner App',
    ],
    stats: [
      { label: 'PGs Listed', value: '800+' },
      { label: 'Tenants Onboarded', value: '3,500+' },
      { label: 'Platform Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'hrms',
    name: 'HRMS Engine',
    tagline: 'Intelligent Human Resource Automation',
    description: 'An intelligent HR management suite designed to automate workforce management, biometric attendance, payroll processing, and employee lifecycle for enterprises.',
    website: null,
    icon: FiUsers,
    badge: 'In Beta / Private Access',
    badgeDot: 'bg-indigo-600',
    image: null,
    features: [
      'Employee Directory & Roles',
      'Biometric & Cloud Attendance',
      'Automated Payroll Processing',
      'Leave & Performance Analytics',
      '15+ Enterprise Integrations',
    ],
    stats: [
      { label: 'HR Modules', value: '12+' },
      { label: 'User Roles', value: 'Unlimited' },
      { label: 'Integrations', value: '15+' },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/4 left-1/4 opacity-25 pointer-events-none" />
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
            <FiZap className="text-sm" />
            <span>OUR FLAGSHIP PRODUCTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            We Don't Just Talk.{' '}
            <span className="text-gradient-primary">We Build &amp; Run Products.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Proof is in the code. Beside building custom software for clients, we engineer and operate high-traffic platforms used by thousands every day.
          </motion.p>
        </div>

        {/* Products Showcase List */}
        <div className="space-y-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Left (or Right): Text & Details */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 text-slate-700 border border-slate-200">
                          <span className={`w-1.5 h-1.5 rounded-full ${product.badgeDot}`} />
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
                      {product.tagline}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center mb-6">
                      {product.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-base font-extrabold text-blue-600">{s.value}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-0.5 uppercase tracking-wide">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Feature Checkmarks */}
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-8">
                      {product.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <FiCheckCircle className="text-blue-500 shrink-0 text-sm" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      {product.website ? (
                        <a
                          href={`https://${product.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95"
                        >
                          <span>Visit {product.name}</span>
                          <FiExternalLink className="text-xs" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 font-semibold text-sm cursor-not-allowed">
                          <span>Coming Soon</span>
                          <FiArrowRight className="text-xs" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right (or Left): Screenshot Mockup */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-[320px] sm:h-[380px] object-cover"
                        />
                      ) : (
                        <div className="w-full h-[320px] sm:h-[380px] flex flex-col items-center justify-center p-8 text-center bg-slate-50 border-2 border-dashed border-slate-200">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-3xl mb-4">
                            <FiUsers />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Coming Soon</h4>
                          <p className="text-xs text-slate-500 max-w-xs">Private enterprise beta in progress.</p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
