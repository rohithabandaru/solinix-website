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

const companyLogos = [
  { name: 'Microsoft Enterprise', icon: FaMicrosoft },
  { name: 'Google Cloud Platform', icon: SiGooglecloud },
  { name: 'AWS Infrastructure', icon: FaAws },
  { name: 'Salesforce Ecosystem', icon: FaSalesforce },
  { name: 'Cloudflare Edge', icon: FaCloudflare },
  { name: 'Datadog Observability', icon: SiDatadog },
  { name: 'Kubernetes Container', icon: SiKubernetes },
  { name: 'Docker Engine', icon: SiDocker },
  { name: 'Vercel Deployment', icon: SiVercel },
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-white border-y border-slate-200 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-indigo-50/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-bold">
            TRUSTED BY INDUSTRY TITANS & FORTUNE 500 LEADING BRANDS
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Infinite Moving Row */}
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
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
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                >
                  <IconComponent className="text-2xl text-slate-500 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300" />
                  <span className="text-sm font-semibold tracking-wide text-slate-800 group-hover:text-blue-600">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Quick Highlights Footer */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xl font-bold text-slate-900">500+</div>
            <div className="text-xs text-slate-500 font-medium">Enterprise Deployments</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xl font-bold text-blue-600">$12B+</div>
            <div className="text-xs text-slate-500 font-medium">Client Revenue Managed</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xl font-bold text-indigo-600">99.999%</div>
            <div className="text-xs text-slate-500 font-medium">Infrastructure Availability</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xl font-bold text-slate-900">45+</div>
            <div className="text-xs text-slate-500 font-medium">Countries Served</div>
          </div>
        </div>

      </div>
    </section>
  );
}
