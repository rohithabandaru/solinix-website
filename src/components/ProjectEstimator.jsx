import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSmartphone, FiGlobe, FiCpu, FiShoppingCart,
  FiShield, FiCreditCard, FiMessageSquare, FiTrendingUp,
  FiClock, FiCheckCircle, FiArrowRight, FiRotateCcw, FiSend, FiUsers
} from 'react-icons/fi';
import { BsCalculator } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

const projectTypes = [
  {
    id: 'web',
    name: 'Web Application',
    desc: 'SaaS, Portals, Custom Web Platforms',
    basePriceMin: 1500,
    basePriceMax: 3000,
    baseWeeks: 3,
    icon: FiGlobe,
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS & Android)',
    desc: 'Native or Cross-platform Flutter/React Native',
    basePriceMin: 2500,
    basePriceMax: 5000,
    baseWeeks: 5,
    icon: FiSmartphone,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    desc: 'Custom store, multi-vendor marketplaces',
    basePriceMin: 2000,
    basePriceMax: 4000,
    baseWeeks: 4,
    icon: FiShoppingCart,
  },
  {
    id: 'ai-cloud',
    name: 'AI & Enterprise Solution',
    desc: 'LLM integration, automation, cloud architecture',
    basePriceMin: 3500,
    basePriceMax: 7000,
    baseWeeks: 6,
    icon: FiCpu,
  },
];

const featureAddons = [
  { id: 'auth', name: 'User Auth & Role Management', cost: 400, weeks: 0.5, icon: FiShield },
  { id: 'payments', name: 'Payment Gateway & Invoicing', cost: 500, weeks: 0.5, icon: FiCreditCard },
  { id: 'chat', name: 'Live Chat & Notifications', cost: 600, weeks: 1, icon: FiMessageSquare },
  { id: 'analytics', name: 'Analytics & Admin Dashboard', cost: 700, weeks: 1, icon: FiTrendingUp },
  { id: 'ai', name: 'AI / ChatGPT Bot Integration', cost: 900, weeks: 1.5, icon: FiCpu },
];

const timelineOptions = [
  { id: 'urgent', label: 'Express (2-3 Weeks)', multiplier: 1.25 },
  { id: 'standard', label: 'Standard Timeline (Recommended)', multiplier: 1.0 },
  { id: 'flexible', label: 'Flexible / Phased Rollout', multiplier: 0.9 },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payments']);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[1]);
  const [submitted, setSubmitted] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');

  const toggleFeature = (featureId) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  // Calculate totals
  const totalFeatureCost = featureAddons
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);

  const totalFeatureWeeks = featureAddons
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.weeks, 0);

  const rawMin = (selectedType.basePriceMin + totalFeatureCost) * selectedTimeline.multiplier;
  const rawMax = (selectedType.basePriceMax + totalFeatureCost * 1.3) * selectedTimeline.multiplier;
  
  const estimatedMin = Math.round(rawMin / 50) * 50;
  const estimatedMax = Math.round(rawMax / 50) * 50;
  const totalWeeks = Math.max(2, Math.round(selectedType.baseWeeks + totalFeatureWeeks));

  const handleReset = () => {
    setSelectedType(projectTypes[0]);
    setSelectedFeatures(['auth', 'payments']);
    setSelectedTimeline(timelineOptions[1]);
    setSubmitted(false);
    setLeadEmail('');
  };

  const handleClaimEstimate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-10 right-10 opacity-25 pointer-events-none" />
      <div className="glow-accent bottom-10 left-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <BsCalculator className="text-sm" />
            <span>INTERACTIVE CALCULATOR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Estimate Your Project{' '}
            <span className="text-gradient-primary">In Seconds</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Select your requirements below to get an instant cost range and realistic delivery timeline for your software.
          </motion.p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Options (8 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            
            {/* Step 1: Project Type */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">1</span>
                  Select Project Type
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                          : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="text-lg" />
                        </div>
                        {isSelected && <FiCheckCircle className="text-blue-600 text-lg shrink-0" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{type.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{type.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Features */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">2</span>
                Select Required Features
              </h3>

              <div className="space-y-2.5">
                {featureAddons.map((feature) => {
                  const Icon = feature.icon;
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-blue-50/60 border-blue-400 text-slate-900'
                          : 'bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isChecked ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-500'}`}>
                          <Icon className="text-sm" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{feature.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-medium">+${feature.cost}</span>
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                          {isChecked && <FiCheckCircle className="text-xs" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline Speed */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">3</span>
                Preferred Delivery Speed
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineOptions.map((timeline) => {
                  const isSelected = selectedTimeline.id === timeline.id;
                  return (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => setSelectedTimeline(timeline)}
                      className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {timeline.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors"
              >
                <FiRotateCcw /> Reset Selection
              </button>
            </div>

          </div>

          {/* Right Column: Live Breakdown Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    Live Calculation
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2">Project Estimate</h4>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl">
                  <BsCalculator />
                </div>
              </div>

              {/* Estimate Numbers */}
              <div className="mb-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estimated Investment</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
                  ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-2">USD</span>
                </div>
                <div className="text-[11px] text-blue-300 mt-1 font-medium">
                  Approx. ₹{(estimatedMin * 83).toLocaleString('en-IN')} – ₹{(estimatedMax * 83).toLocaleString('en-IN')} INR
                </div>
              </div>

              {/* Specs List */}
              <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2 text-slate-400">
                    <FiClock className="text-blue-400" /> Delivery Time:
                  </span>
                  <span className="font-bold text-white">{totalWeeks} – {totalWeeks + 2} Weeks</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2 text-slate-400">
                    <FiUsers className="text-blue-400" /> Dedicated Team:
                  </span>
                  <span className="font-bold text-white">Full-Stack Dev + UI + QA</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2 text-slate-400">
                    <FiShield className="text-blue-400" /> Warranty:
                  </span>
                  <span className="font-bold text-white">90 Days Post-Launch Support</span>
                </div>
              </div>

              {/* Action Form or Success */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-center"
                >
                  <FiCheckCircle className="text-emerald-400 text-3xl mx-auto mb-2" />
                  <div className="text-sm font-bold text-white">Estimate Saved & Sent!</div>
                  <p className="text-xs text-slate-300 mt-1">Our technical lead will review your specs and email you a full proposal within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleClaimEstimate} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="Enter your email for full breakdown..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <span>Get Detailed Proposal</span>
                    <FiArrowRight className="text-sm" />
                  </button>
                  <a
                    href={`https://wa.me/911234567890?text=Hi%20Solinix!%20I%20just%20estimated%20my%20${encodeURIComponent(selectedType.name)}%20project%20($${estimatedMin}-$${estimatedMax}).%20Can%20we%20discuss?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaWhatsapp className="text-sm" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
