import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMicrosoft, 
  FaAws, 
  FaGoogle, 
  FaSalesforce, 
  FaCloudflare
} from 'react-icons/fa';
import { SiGooglecloud, SiDatadog, SiKubernetes, SiDocker, SiVercel } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi2';

const companyLogos = [
  {
    name: 'Microsoft Enterprise',
    icon: FaMicrosoft,
    color: 'text-blue-600',
    bg: 'bg-blue-50/90 border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Google Cloud Platform',
    icon: SiGooglecloud,
    color: 'text-red-500',
    bg: 'bg-red-50/90 border-red-200 hover:border-red-400',
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    name: 'AWS Infrastructure',
    icon: FaAws,
    color: 'text-amber-600',
    bg: 'bg-amber-50/90 border-amber-200 hover:border-amber-400',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    name: 'Salesforce Ecosystem',
    icon: FaSalesforce,
    color: 'text-sky-500',
    bg: 'bg-sky-50/90 border-sky-200 hover:border-sky-400',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    name: 'Cloudflare Edge',
    icon: FaCloudflare,
    color: 'text-orange-500',
    bg: 'bg-orange-50/90 border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Datadog Observability',
    icon: SiDatadog,
    color: 'text-purple-600',
    bg: 'bg-purple-50/90 border-purple-200 hover:border-purple-400',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Kubernetes Container',
    icon: SiKubernetes,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50/90 border-indigo-200 hover:border-indigo-400',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'Docker Engine',
    icon: SiDocker,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50/90 border-cyan-200 hover:border-cyan-400',
    iconBg: 'bg-cyan-100 text-cyan-600',
  },
  {
    name: 'Vercel Deployment',
    icon: SiVercel,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50/90 border-emerald-200 hover:border-emerald-400',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Colorful Ambient Glows */}
      <div className="glow-primary top-1/2 left-1/4 -translate-y-1/2 opacity-30 pointer-events-none" />
      <div className="glow-accent top-1/3 right-1/4 opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-indigo-50/30 to-purple-50/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <HiSparkles className="text-blue-600 text-sm" />
            <span>TRUSTED BY INDUSTRY TITANS &amp; FORTUNE 500 BRANDS</span>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Infinite Moving Row */}
          <motion.div
            className="flex items-center gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {[...companyLogos, ...companyLogos].map((company, index) => {
              const IconComponent = company.icon;
              return (
                <div
                  key={`${company.name}-${index}`}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${company.bg} shadow-sm backdrop-blur-md transition-all duration-300 group cursor-pointer hover:scale-105`}
                >
                  <div className={`w-9 h-9 rounded-xl ${company.iconBg} flex items-center justify-center text-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent />
                  </div>
                  <span className={`text-sm font-bold tracking-wide ${company.color}`}>
                    {company.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Quick Highlights Colorful Footer */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-50/60 to-indigo-50 border border-blue-200 shadow-sm hover:scale-[1.02] transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">500+</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Enterprise Deployments</div>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-indigo-50/60 to-purple-50 border border-indigo-200 shadow-sm hover:scale-[1.02] transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">$12B+</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Client Revenue Managed</div>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 via-cyan-50/60 to-blue-50 border border-cyan-200 shadow-sm hover:scale-[1.02] transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600">99.999%</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Infrastructure Availability</div>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-purple-50/60 to-pink-50 border border-purple-200 shadow-sm hover:scale-[1.02] transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">45+</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Countries Served</div>
          </div>
        </div>

      </div>
    </section>
  );
}

