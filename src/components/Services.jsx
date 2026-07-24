import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap } from 'react-icons/fi';

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Scalable software solutions tailored to your specific business requirements, built with modern enterprise-grade technologies.',
    features: ['Web Applications', 'Enterprise Systems', 'API Development', 'System Integration'],
    image: '/images/services/software-dev.png',
    overlay: 'from-slate-900/90 via-blue-950/80 to-slate-900/70',
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'Responsive, fast and SEO-friendly websites with stunning designs that drive real results and business growth.',
    features: ['Corporate Websites', 'Landing Pages', 'E-Commerce Stores', 'CMS Platforms'],
    image: '/images/services/website-dev.png',
    overlay: 'from-slate-900/90 via-indigo-950/80 to-slate-900/70',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Android, iOS & cross-platform apps with seamless user experiences and native-level performance.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'PWA Apps'],
    image: '/images/services/mobile-app.png',
    overlay: 'from-slate-900/90 via-blue-950/80 to-slate-900/70',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creative and intuitive designs that enhance engagement. User-centered, conversion-optimized and beautifully crafted.',
    features: ['Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    image: '/images/services/ui-ux.png',
    overlay: 'from-slate-900/90 via-indigo-950/80 to-slate-900/70',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Result-driven marketing strategies to grow your brand and reach. SEO, social media, paid campaigns and more.',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    image: '/images/services/digital-marketing.png',
    overlay: 'from-slate-900/90 via-blue-950/80 to-slate-900/70',
  },
  {
    id: 'cloud-maintenance',
    title: 'Cloud & Maintenance',
    description: 'Secure hosting, cloud deployment and ongoing support to keep your software running at peak performance 24/7.',
    features: ['AWS & Azure', 'DevOps & CI/CD', 'Performance Monitoring', '24/7 Support'],
    image: '/images/services/cloud.png',
    overlay: 'from-slate-900/90 via-indigo-950/80 to-slate-900/70',
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
            From initial wireframes to cloud launch, we engineer high-performing software designed to win users and scale reliably.
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
              className="group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end shadow-lg hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.overlay} transition-opacity duration-500 group-hover:opacity-90`} />

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col h-full justify-end">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 drop-shadow-md">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <div className="w-4 h-4 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 backdrop-blur-sm">
                        <FiCheck className="text-white text-[9px]" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-300 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <FiArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/70 to-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-1">Have a Product Idea in Mind?</h4>
            <p className="text-sm text-slate-600">Let's build it together. Get an honest tech blueprint &amp; time estimate within 24 hours.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            Get Free Consultation
            <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
