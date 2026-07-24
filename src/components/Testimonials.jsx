import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Aakash Verma',
    role: 'Founder & CEO',
    company: 'TechRetail India',
    rating: 5,
    quote: 'Solinix built our entire e-commerce platform from scratch. The quality of code and attention to detail was exceptional. We saw a 2x improvement in conversion within the first month after launch.',
    initials: 'AV',
    color: 'from-blue-600 to-cyan-500',
    result: '2x Conversion',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'HostelChain PG',
    rating: 5,
    quote: 'We partnered with Solinix to build Stayzzy, our hostel management SaaS. Their team was professional, delivered on time, and the product was rock-solid from day one. Highly recommend!',
    initials: 'PS',
    color: 'from-cyan-600 to-blue-600',
    result: '99.9% Uptime',
  },
  {
    name: 'Rahul Mishra',
    role: 'CTO',
    company: 'PropSolutions Pvt Ltd',
    rating: 5,
    quote: 'The mobile app Solinix developed for PGMove is outstanding. The UI/UX is clean, the backend is fast, and they were available every step of the way. True technology partners.',
    initials: 'RM',
    color: 'from-indigo-600 to-purple-600',
    result: '5,000+ Users',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Operations Director',
    company: 'BuildNest Developers',
    rating: 5,
    quote: 'We needed a custom CRM and project management tool. Solinix delivered exactly what we imagined — and more. The team was responsive, transparent, and the final product exceeded expectations.',
    initials: 'SK',
    color: 'from-emerald-600 to-cyan-500',
    result: '60% Time Saved',
  },
  {
    name: 'Mohammed Ali',
    role: 'Co-Founder',
    company: 'ServiceFlow SaaS',
    rating: 5,
    quote: 'From UI/UX design to full-stack development and deployment — Solinix handled everything seamlessly. They are not just developers, they think like product owners and care about your success.',
    initials: 'MA',
    color: 'from-amber-600 to-orange-500',
    result: 'On-Time Delivery',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

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
            <FiMessageSquare className="text-sm" />
            <span>CLIENT TESTIMONIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Clients Love{' '}
            <span className="text-gradient-primary">Working with Solinix</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Don't take our word for it. Here's what our clients say about building with Solinix.
          </motion.p>

          {/* Rating Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-amber-500 fill-current text-sm" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">5.0</span>
            <span className="text-xs text-slate-500 font-medium">• 100% Client Satisfaction</span>
          </motion.div>
        </div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-12"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="pb-4">
                <div className="glass-card glass-card-hover rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between min-h-[320px] group bg-white shadow-sm">

                  {/* Top Row: Stars + Result Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <FiStar key={i} className="fill-current text-sm" />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <FiCheckCircle className="text-xs text-emerald-600" />
                      {item.result}
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-blue-200 text-3xl mb-3" />

                  {/* Quote Text */}
                  <p className="text-slate-700 text-sm leading-relaxed flex-1">
                    "{item.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.role} •{' '}
                        <span className="text-blue-600 font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
