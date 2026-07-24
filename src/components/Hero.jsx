import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp, FiZap, FiLayers, FiActivity } from 'react-icons/fi';
import { FaReact, FaAws, FaDocker, FaBrain, FaCloud } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Stayzzy');

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="glow-primary top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none" />
      <div className="glow-accent top-1/3 right-1/4 opacity-50 pointer-events-none" />
      
      {/* Abstract Tech Graphic Background Elements */}
      <svg className="absolute top-10 right-10 w-96 h-96 opacity-15 pointer-events-none text-blue-600" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="30" fill="currentColor" fillOpacity="0.05" />
      </svg>
      <svg className="absolute bottom-10 left-5 w-72 h-72 opacity-10 pointer-events-none text-indigo-600" viewBox="0 0 200 200" fill="none">
        <polygon points="100,20 170,160 30,160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Enterprise Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <HiSparkles className="text-blue-600 text-sm" />
              <span className="text-slate-700 font-semibold">Building Next-Gen Software &amp; SaaS</span>
              <span className="text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              We Build Software People{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Love to Use.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              From high-growth mobile apps and custom web platforms to revenue-generating SaaS products — Solinix turns complex ideas into sleek, scalable software that actually moves the needle.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Explore Services</span>
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-700 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                <span>Our Products</span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  3 Platforms
                </span>
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-blue-600 text-base" />
                <span>Fast 2-Week Sprints</span>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="text-indigo-600 text-base" />
                <span>Production-Grade Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <FiZap className="text-blue-600 text-base" />
                <span>100% Client Satisfaction</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D Laptop, Dashboard Mockup, Floating Mobile & Floating Tech Badges */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            
            {/* Floating Technology Badges */}
            {/* 1. React Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 left-4 sm:left-8 z-30 glass-card px-3.5 py-2 rounded-xl border border-slate-200/90 flex items-center gap-2.5 shadow-lg backdrop-blur-xl bg-white/95"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-lg">
                <FaReact className="animate-spin-slow" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Frontend</div>
                <div className="text-xs font-bold text-slate-900">React 19</div>
              </div>
            </motion.div>

            {/* 2. AWS Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-12 -right-2 sm:-right-4 z-30 glass-card px-3.5 py-2 rounded-xl border border-slate-200/90 flex items-center gap-2.5 shadow-lg backdrop-blur-xl bg-white/95"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 text-lg">
                <FaAws />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Infrastructure</div>
                <div className="text-xs font-bold text-slate-900">AWS Cloud</div>
              </div>
            </motion.div>

            {/* 3. Docker Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-28 -left-4 z-30 glass-card px-3.5 py-2 rounded-xl border border-slate-200/90 flex items-center gap-2.5 shadow-lg backdrop-blur-xl hidden sm:flex bg-white/95"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-lg">
                <FaDocker />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">DevOps</div>
                <div className="text-xs font-bold text-slate-900">Docker</div>
              </div>
            </motion.div>

            {/* 4. AI Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-6 left-1/3 z-30 glass-card px-3.5 py-2 rounded-xl border border-slate-200/90 flex items-center gap-2.5 shadow-lg backdrop-blur-xl bg-white/95"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 text-lg">
                <FaBrain />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Intelligence</div>
                <div className="text-xs font-bold text-slate-900">AI Engine</div>
              </div>
            </motion.div>

            {/* 5. Cloud Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-4 right-6 z-30 glass-card px-3.5 py-2 rounded-xl border border-slate-200/90 flex items-center gap-2.5 shadow-lg backdrop-blur-xl hidden sm:flex bg-white/95"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-lg">
                <FaCloud />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Scale</div>
                <div className="text-xs font-bold text-slate-900">Cloud Native</div>
              </div>
            </motion.div>

            {/* MAIN 3D LAPTOP MOCKUP CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-lg lg:max-w-none perspective-1000"
            >
              {/* Laptop Outer Frame */}
              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-3 sm:p-4 shadow-2xl shadow-slate-300/60 backdrop-blur-2xl ring-1 ring-slate-900/5 group transform transition-all duration-500 hover:rotate-x-1">
                
                {/* Laptop Top Bezel & Web Camera */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                    <div className="w-3 h-3 rounded-full bg-indigo-600" />
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-slate-300 ring-2 ring-slate-200" />
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="font-semibold text-slate-700">STAYZZY Dashboard v2.4</span>
                  </div>
                </div>

                {/* Dashboard Screen Content */}
                <div className="mt-3 bg-[#F8FAFC] rounded-xl p-4 sm:p-5 border border-slate-200/90">
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">SOLINIX PLATFORM</div>
                      <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                        Stayzzy Dashboard
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold border border-blue-200">LIVE</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {['Stayzzy', 'PGMove', 'HRMS'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                            activeTab === tab
                              ? 'bg-blue-600 text-white font-semibold shadow-sm'
                              : 'bg-slate-200/80 text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard Metrics Grid */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 my-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="text-[10px] text-slate-500 font-medium">Total Revenue</div>
                      <div className="text-xs sm:text-sm font-extrabold text-blue-600 mt-0.5">₹75,40,000</div>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="text-[10px] text-slate-500 font-medium">New Leads</div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">1,250</div>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="text-[10px] text-slate-500 font-medium">Total Users</div>
                      <div className="text-xs sm:text-sm font-extrabold text-indigo-600 mt-0.5">8,340</div>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="text-[10px] text-slate-500 font-medium">Active Properties</div>
                      <div className="text-xs sm:text-sm font-extrabold text-blue-700 mt-0.5">320</div>
                    </div>
                  </div>

                  {/* Analytics Chart & Source breakdown mockup */}
                  <div className="grid grid-cols-12 gap-3 mt-4">
                    {/* Simulated Wave Line Chart */}
                    <div className="col-span-8 p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-slate-700">
                        <span className="font-semibold">Revenue Growth Overview</span>
                        <span className="text-[10px] text-blue-700 font-bold bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">+48.2%</span>
                      </div>
                      <div className="h-24 sm:h-28 w-full mt-2 flex items-end gap-1.5 sm:gap-2">
                        {[35, 45, 60, 50, 75, 65, 90, 85, 100, 95, 110, 125].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                            <div
                              style={{ height: `${h * 0.7}%` }}
                              className={`w-full rounded-t-sm transition-all duration-500 group-hover/bar:brightness-110 ${
                                i % 2 === 0
                                  ? 'bg-gradient-to-t from-blue-600 to-indigo-600'
                                  : 'bg-gradient-to-t from-indigo-600 to-blue-500'
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Donut Chart / Leads breakdown */}
                    <div className="col-span-4 p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="text-xs font-semibold text-slate-700">Leads Source</div>
                      <div className="my-auto flex items-center justify-center relative py-2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-blue-600 border-t-indigo-600 border-r-blue-400 border-b-indigo-500 flex items-center justify-center">
                          <span className="text-[10px] sm:text-xs font-bold text-slate-900">92%</span>
                        </div>
                      </div>
                      <div className="text-[9px] text-slate-500 text-center font-mono font-medium">Organic &amp; Direct</div>
                    </div>
                  </div>

                </div>

              </div>

              {/* FLOATING MOBILE APP MOCKUP OVERLAY */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 sm:-right-8 -bottom-10 w-44 sm:w-52 rounded-3xl bg-slate-900 p-2.5 border-2 border-slate-800 shadow-2xl z-20 backdrop-blur-2xl ring-1 ring-slate-900/10"
              >
                {/* Phone Notch */}
                <div className="w-20 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>

                {/* Mobile UI Screen Content */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                      <FiActivity className="text-blue-600" /> STAYZZY MOBILE
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="mt-3 p-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                    <div className="text-[9px] text-slate-500 font-medium">Owner Score</div>
                    <div className="text-xs font-bold text-blue-700">92% Growth</div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 mt-2 text-[9px]">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <div className="text-blue-600 font-bold">120</div>
                      <div className="text-slate-500 text-[8px]">Tenants</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <div className="text-emerald-600 font-bold">100%</div>
                      <div className="text-slate-500 text-[8px]">Paid</div>
                    </div>
                  </div>

                  <div className="mt-2.5 py-1.5 px-2 rounded-lg bg-blue-600 text-white font-semibold text-[9px] text-center shadow-md shadow-blue-500/20">
                    Instant Mobile Sync
                  </div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

