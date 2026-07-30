import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiUsers, FiAward } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Dr. Alex Vance',
    role: 'Chief Executive Officer & Founder',
    credentials: 'Ex-Google Cloud Principal Architect • PhD Stanford',
    bio: 'Pioneered distributed systems scaling for multi-billion dollar tech platforms. 18+ years leading enterprise engineering teams.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    github: '#',
    twitter: '#'
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    credentials: 'Ex-OpenAI Staff AI Scientist • MIT Alum',
    bio: 'Specializes in autonomous agentic AI models, RAG vector architectures, and high-performance neural inference pipelines.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    github: '#',
    twitter: '#'
  },
  {
    name: 'Marcus Sterling',
    role: 'VP of Cloud Infrastructure',
    credentials: 'Ex-AWS Kubernetes Lead • CKA & CISSP Certified',
    bio: 'Architected multi-region failover clusters for Fortune 500 banks handling 10M+ daily concurrent microservice requests.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    github: '#',
    twitter: '#'
  },
  {
    name: 'Sophia Chen',
    role: 'Head of Product Design & UX',
    credentials: 'Ex-Stripe Senior Design Lead • RISD Alum',
    bio: 'Passionate about crafting ultra-intuitive SaaS interfaces, glassmorphism design systems, and friction-free user journeys.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    github: '#',
    twitter: '#'
  },
  {
    name: 'David Miller',
    role: 'Director of Cyber Defense',
    credentials: 'Ex-NSA Security Specialist • CISSP',
    bio: 'Ensures bank-grade Zero-Trust network security, automated vulnerability penetration testing, and SOC2 / ISO compliance.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    github: '#',
    twitter: '#'
  },
  {
    name: 'Priya Sharma',
    role: 'Principal Data Engineering Lead',
    credentials: 'Ex-Meta Big Data Lead • M.S. Carnegie Mellon',
    bio: 'Expert in Apache Kafka event streaming, Snowflake data warehouses, and sub-second business intelligence pipelines.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    github: '#',
    twitter: '#'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Radial Background Light */}
      <div className="glow-primary top-1/3 left-10 opacity-20 pointer-events-none" />
      <div className="glow-accent bottom-10 right-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiUsers className="text-sm" />
            <span>LEADERSHIP & ENGINEERING ARCHITECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Our Team — Meet the Visionaries Driving <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Engineering Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Our core team brings decades of combined experience from Silicon Valley tech giants, AI labs, and high-security defense networks.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between group relative bg-white shadow-sm"
            >
              <div>
                {/* Profile Image with Glowing Border */}
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-xl bg-white/90 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 transition-colors backdrop-blur-md shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="text-sm" />
                    </a>
                    <a
                      href={member.github}
                      className="p-2 rounded-xl bg-white/90 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200 transition-colors backdrop-blur-md shadow-sm"
                      aria-label="GitHub"
                    >
                      <FiGithub className="text-sm" />
                    </a>
                    <a
                      href={member.twitter}
                      className="p-2 rounded-xl bg-white/90 hover:bg-blue-500 text-slate-700 hover:text-white border border-slate-200 transition-colors backdrop-blur-md shadow-sm"
                      aria-label="Twitter"
                    >
                      <FiTwitter className="text-sm" />
                    </a>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-semibold text-blue-700 font-mono mb-2">
                  {member.role}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {member.credentials}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <FiAward className="text-blue-600" /> Solinix Core Executive
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
