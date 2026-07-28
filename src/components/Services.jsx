import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiCpu, FiCode, FiLayers, FiPenTool } from 'react-icons/fi';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaAndroid, FaFigma, FaWordpress, FaApple, FaGoogle, FaCloud
} from 'react-icons/fa';
import {
  SiNextdotjs, SiPostgresql, SiMysql, SiMongodb, SiTailwindcss, SiTypescript,
  SiFlutter, SiKubernetes, SiRedis, SiGoogleanalytics, SiFirebase
} from 'react-icons/si';

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Scalable software solutions tailored to your specific business requirements, built with modern enterprise-grade technologies.',
    features: ['Web Applications', 'Enterprise Systems', 'API Development', 'System Integration'],
    technologies: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400' },
      { name: 'Python', icon: FaPython, color: 'text-amber-400' },
      { name: 'Java', icon: FaJava, color: 'text-orange-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'Docker', icon: FaDocker, color: 'text-cyan-300' },
    ],
    image: '/images/services/software-dev.webp',
    overlay: 'from-slate-900/95 via-blue-950/85 to-slate-900/75',
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'Responsive, fast and SEO-friendly websites with stunning designs that drive real results and business growth.',
    features: ['Corporate Websites', 'Landing Pages', 'E-Commerce Stores', 'CMS Platforms'],
    technologies: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
      { name: 'WordPress', icon: FaWordpress, color: 'text-blue-400' },
    ],
    image: '/images/services/website-dev.webp',
    overlay: 'from-slate-900/95 via-indigo-950/85 to-slate-900/75',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Android, iOS & cross-platform apps with seamless user experiences and native-level performance.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'PWA Apps'],
    technologies: [
      { name: 'React Native', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
      { name: 'Android', icon: FaAndroid, color: 'text-emerald-400' },
      { name: 'iOS', icon: FaApple, color: 'text-white' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400' },
    ],
    image: '/images/services/mobile-app.webp',
    overlay: 'from-slate-900/95 via-blue-950/85 to-slate-900/75',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creative and intuitive designs that enhance engagement. User-centered, conversion-optimized and beautifully crafted.',
    features: ['Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    technologies: [
      { name: 'Figma', icon: FaFigma, color: 'text-purple-400' },
      { name: 'Wireframing', icon: FiLayers, color: 'text-pink-400' },
      { name: 'Design Systems', icon: FiPenTool, color: 'text-cyan-300' },
      { name: 'Prototyping', icon: FiCode, color: 'text-amber-300' },
    ],
    image: '/images/services/ui-ux.webp',
    overlay: 'from-slate-900/95 via-indigo-950/85 to-slate-900/75',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Result-driven marketing strategies to grow your brand and reach. SEO, social media, paid campaigns and more.',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    technologies: [
      { name: 'Google Analytics', icon: SiGoogleanalytics, color: 'text-amber-400' },
      { name: 'Google Ads', icon: FaGoogle, color: 'text-blue-400' },
      { name: 'SEO Suite', icon: FiZap, color: 'text-emerald-400' },
      { name: 'Meta Ads', icon: FiCode, color: 'text-cyan-300' },
    ],
    image: '/images/services/digital-marketing.webp',
    overlay: 'from-slate-900/95 via-blue-950/85 to-slate-900/75',
  },
  {
    id: 'cloud-maintenance',
    title: 'Cloud & Maintenance',
    description: 'Secure hosting, cloud deployment and ongoing support to keep your software running at peak performance 24/7.',
    features: ['AWS & Azure', 'DevOps & CI/CD', 'Performance Monitoring', '24/7 Support'],
    technologies: [
      { name: 'AWS', icon: FaAws, color: 'text-amber-400' },
      { name: 'Docker', icon: FaDocker, color: 'text-cyan-400' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-400' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-400' },
    ],
    image: '/images/services/cloud.webp',
    overlay: 'from-slate-900/95 via-indigo-950/85 to-slate-900/75',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/3 right-0 opacity-20 pointer-events-none" />
      <div className="glow-accent bottom-20 left-10 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiZap className="text-sm" />
            <span>OUR SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            End-to-End Engineering.{' '}
            <span className="text-gradient-primary">Zero Fluff.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From initial wireframes to cloud launch, we engineer high-performing software powered by cutting-edge technologies.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden min-h-[460px] flex flex-col justify-end shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-slate-200/60"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.overlay} transition-opacity duration-500 group-hover:opacity-95`} />

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col h-full justify-end">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <div className="w-4 h-4 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 backdrop-blur-sm">
                        <FiCheck className="text-white text-[9px]" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used Section */}
                <div className="mb-5 pt-3.5 border-t border-white/15">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300 mb-2.5">
                    <FiCpu className="text-xs" />
                    <span>Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech, idx) => {
                      const IconComponent = tech.icon;
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-xs font-semibold text-white transition-all hover:scale-105"
                        >
                          <IconComponent className={`text-xs ${tech.color}`} />
                          <span>{tech.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-300 transition-colors group/link"
                  >
                    <span>Explore Service</span>
                    <FiArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300 text-cyan-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

