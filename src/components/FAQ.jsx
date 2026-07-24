import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiMessageCircle, FiArrowRight } from 'react-icons/fi';

const faqItems = [
  {
    question: 'How fast can Solinix Technologies onboard and initialize a new project?',
    answer: 'Our rapid onboarding protocol allows us to initialize architectural blueprinting within 48 hours of project alignment. Dedicated senior engineering teams assemble and begin sprint executions immediately.'
  },
  {
    question: 'What security standards and regulatory compliance certifications do you support?',
    answer: 'Security is engineered into every line of code. We specialize in Zero-Trust architecture, ISO 27001, SOC2 Type II, HIPAA, GDPR, and PCI-DSS compliance readiness with automated vulnerability SAST/DAST testing.'
  },
  {
    question: 'Do you provide 24/7 post-launch cloud monitoring and SLA uptime support?',
    answer: 'Yes. Our global SRE (Site Reliability Engineering) teams monitor system telemetry 24/7/365 with a guaranteed 99.999% SLA uptime and under 15-minute emergency incident response times.'
  },
  {
    question: 'How does your milestone pricing model work for enterprise engagements?',
    answer: 'We offer fixed milestone pricing and dedicated team capacity arrangements. Every engagement includes transparent bi-weekly sprint reviews, itemized deliverables, and zero hidden operational costs.'
  },
  {
    question: 'Can Solinix modernize our existing legacy monolithic software into microservices?',
    answer: 'Extensively. We specialize in zero-downtime legacy refactoring, decomposing monoliths into containerized Kubernetes microservices using canary traffic routing to prevent service disruptions.'
  },
  {
    question: 'Who retains intellectual property (IP) and codebase ownership?',
    answer: 'You own 100% of all intellectual property, source code repositories, automated Terraform scripts, and design assets upon milestone completion. No vendor lock-in, ever.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Radial Background Glow */}
      <div className="glow-primary top-1/4 right-10 opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FiHelpCircle className="text-sm" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Everything You Need to Know <br className="hidden sm:inline" />
            About <span className="text-gradient-primary">Partnering with Solinix</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Clear answers to common questions regarding engineering workflows, security compliance, pricing models, and IP ownership.
          </motion.p>
        </div>

        {/* Accordion Container */}
        <div className="mt-16 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-blue-600 shadow-md shadow-blue-500/10'
                    : 'border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
                    <span className="text-blue-600 font-mono text-sm font-semibold">0{index + 1}.</span>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600 border-blue-300' : ''}`}>
                    <FiChevronDown className="text-lg" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-slate-100 pt-4"
                    >
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-7">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Unanswered Questions Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200 text-center max-w-xl mx-auto shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center text-xl mx-auto mb-4">
            <FiMessageCircle />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Have a Specific Custom Architecture Question?</h4>
          <p className="text-sm text-slate-600 mt-2 mb-6">Our Principal Solution Architects are available to answer your technical questions directly.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105"
          >
            <span>Ask an Architect</span>
            <FiArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}
