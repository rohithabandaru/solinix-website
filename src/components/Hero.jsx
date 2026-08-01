import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiCheckCircle, FiShield, FiZap, FiActivity, FiGitBranch,
  FiServer, FiTrendingUp, FiCpu, FiGlobe, FiLock, FiTerminal
} from 'react-icons/fi';
import { FaReact, FaAws, FaDocker, FaBrain, FaCloud } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export default function Hero() {
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
              <span className="text-blue-600 font-bold">&rarr;</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              We Build Software People{' '}
              <span className="text-blue-600">
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
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
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

          {/* RIGHT COLUMN: Ultra-Sleek Engineering & SaaS Control Dashboard */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            
            {/* Floating Technology Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 left-4 sm:left-6 z-30 px-4 py-2.5 rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-xl text-white shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg">
                <FaReact className="animate-spin-slow" />
              </div>
              <div>
                <div className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider">Frontend</div>
                <div className="text-xs font-bold text-white">React 19 &amp; Next.js</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-10 -right-2 sm:-right-4 z-30 px-4 py-2.5 rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-xl text-white shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg">
                <FaAws />
              </div>
              <div>
                <div className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">Infrastructure</div>
                <div className="text-xs font-bold text-white">AWS Cloud Multi-Region</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-28 -left-4 z-30 px-4 py-2.5 rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-xl text-white shadow-2xl hidden sm:flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-lg">
                <FaBrain />
              </div>
              <div>
                <div className="text-[10px] text-indigo-300 font-semibold uppercase tracking-wider">Intelligence</div>
                <div className="text-xs font-bold text-white">Autonomous AI Agent</div>
              </div>
            </motion.div>

            {/* MAIN HIGH-TECH CONTROL DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-lg lg:max-w-none shadow-2xl shadow-blue-900/30 rounded-3xl overflow-hidden border border-slate-800 bg-slate-950"
            >
              {/* Top Browser / Window Control Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Simulated URL Bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xs truncate">
                  <FiLock className="text-emerald-400 text-xs shrink-0" />
                  <span className="text-slate-200 font-medium">console.solinix.io</span>
                  <span className="text-slate-500 text-[9px] ml-auto">v2.4.0</span>
                </div>

                {/* Live Status Pill */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">LIVE DASHBOARD</span>
                </div>
              </div>

              {/* Dashboard Internal Workspace */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                      <FiTerminal />
                      <span>SOLINIX CLOUD CONSOLE</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                      Production Engineering Overview
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold">
                      Region: Global Edge
                    </span>
                  </div>
                </div>

                {/* Top Metrics Grid Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-1">
                      <span>Uptime</span>
                      <FiTrendingUp className="text-emerald-400" />
                    </div>
                    <div className="text-lg font-extrabold text-emerald-400">99.99%</div>
                    <div className="text-[10px] text-slate-500 mt-1">Zero Downtime SLA</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-1">
                      <span>API Throughput</span>
                      <FiServer className="text-cyan-400" />
                    </div>
                    <div className="text-lg font-extrabold text-cyan-400">84.2K <span className="text-xs font-normal text-slate-400">req/s</span></div>
                    <div className="text-[10px] text-emerald-400 mt-1">↑ 14.2% peak load</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-1">
                      <span>AI Latency</span>
                      <FiZap className="text-amber-400" />
                    </div>
                    <div className="text-lg font-extrabold text-amber-400">18ms</div>
                    <div className="text-[10px] text-slate-500 mt-1">Sub-second response</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-1">
                      <span>Cyber Defense</span>
                      <FiShield className="text-indigo-400" />
                    </div>
                    <div className="text-lg font-extrabold text-indigo-400">Protected</div>
                    <div className="text-[10px] text-indigo-300 mt-1">Zero Threats Found</div>
                  </div>
                </div>

                {/* Central Panel: Performance Chart & Live Terminal Logs */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  
                  {/* Live Activity Chart */}
                  <div className="sm:col-span-7 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <FiActivity className="text-blue-400" />
                        Microservices Traffic Stream
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        HEALTHY
                      </span>
                    </div>

                    {/* Animated Bar Chart */}
                    <div className="h-28 w-full flex items-end gap-1.5 pt-2">
                      {[40, 55, 65, 50, 75, 85, 70, 90, 80, 95, 88, 100, 92, 98].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div
                            style={{ height: `${val}%` }}
                            className={`w-full rounded-t-md transition-all duration-500 group-hover/bar:brightness-125 ${
                              idx % 3 === 0
                                ? 'bg-gradient-to-t from-blue-600 to-cyan-400'
                                : idx % 3 === 1
                                ? 'bg-gradient-to-t from-indigo-600 to-blue-500'
                                : 'bg-gradient-to-t from-purple-600 to-indigo-400'
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-3 border-t border-slate-800/80 mt-3 font-mono">
                      <span>00:00 UTC</span>
                      <span>12:00 UTC</span>
                      <span className="text-cyan-400 font-bold">23:59 REALTIME</span>
                    </div>
                  </div>

                  {/* Live Terminal Log Stream */}
                  <div className="sm:col-span-5 p-4 rounded-2xl bg-slate-950 border border-slate-800/90 font-mono text-[11px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[10px]">
                        <span className="font-bold text-slate-200">Deployment Log</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      <div className="space-y-2 mt-3 text-slate-300">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <span className="text-blue-400">&gt;</span>
                          <span className="text-emerald-400 font-bold">Deploy #8492</span>
                          <span className="text-[10px] text-slate-500">us-east-1</span>
                        </div>
                        <div className="text-[10px] text-cyan-300 pl-3">
                          ✓ CI/CD Pipeline Passed
                        </div>
                        <div className="text-[10px] text-indigo-300 pl-3">
                          ⚡ AI Engine Model Loaded
                        </div>
                        <div className="text-[10px] text-emerald-400 pl-3">
                          🔒 Zero Security Flaws
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Cluster Status</span>
                      <span className="text-emerald-400 font-bold">Active Grid</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* FLOATING MOBILE PREVIEW OVERLAY */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 sm:-right-6 -bottom-8 w-44 sm:w-52 rounded-3xl bg-slate-900 p-2.5 border-2 border-slate-700 shadow-2xl z-30 backdrop-blur-2xl ring-1 ring-white/10"
              >
                {/* Phone Top Speaker */}
                <div className="w-16 h-3.5 bg-slate-800 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>

                {/* Mobile App Screen */}
                <div className="bg-slate-950 rounded-2xl p-3 border border-slate-800 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-extrabold text-white flex items-center gap-1">
                      <FiGlobe className="text-cyan-400" /> SOLINIX APP
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="mt-2.5 p-2 rounded-xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30">
                    <div className="text-[9px] text-slate-300 font-medium">Client Rating</div>
                    <div className="text-xs font-bold text-cyan-300 flex items-center justify-between">
                      <span>5.0 / 5.0 ⭐</span>
                      <span className="text-[8px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Verified</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 mt-2 text-[9px]">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <div className="text-cyan-400 font-extrabold">50+</div>
                      <div className="text-slate-400 text-[8px]">Projects</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <div className="text-emerald-400 font-extrabold">24/7</div>
                      <div className="text-slate-400 text-[8px]">DevOps</div>
                    </div>
                  </div>

                  <div className="mt-2.5 py-1.5 px-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[9px] text-center shadow-lg shadow-blue-500/20">
                    Realtime Monitoring
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

