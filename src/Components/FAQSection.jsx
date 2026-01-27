'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion, Sparkles } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'Is it easy to build a legacy page?',
      answer:
        'Absolutely. We designed LegacyPop specifically for non-technical users. It uses a simple drag-and-drop interface—much like making a digital photo album. If you can send an email, you can build a beautiful tribute.',
    },
    {
      id: 2,
      question: 'How do I create a page?',
      answer:
        "It takes just three steps: 1) Click 'Start a Legacy Page' and enter your loved one's basic details. 2) Upload a profile photo and write a short bio (or use our AI helper). 3) Share the private link with family so they can add their own photos.",
    },
    {
      id: 3,
      question: 'How long does it take to build a page?',
      answer:
        'You can have a basic page live in under 5 minutes. From there, you can take your time curating the timeline, adding galleries, and inviting others to contribute whenever you feel ready.',
    },
    {
      id: 4,
      question: 'Does my legacy page come with lifetime hosting?',
      answer:
        "Yes. If you choose our Lifetime Plan, the page is secured forever with no further payments. We also offer a 'Community Fund' feature to help families cover lifetime costs together.",
    },
    {
      id: 5,
      question: 'Can I connect a custom domain?',
      answer:
        "Custom domains (e.g., www.grandpa-bob.com) are available on our 'Legacy Plus' and 'Premium' plans. You can claim your domain directly inside your dashboard.",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FDFCF8] overflow-hidden">
      {/* --- ADVANCED BACKGROUND ANIMATION --- */}

      <div className="relative z-10 container mx-auto px-6 sm:px-8">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-6xl font-medium text-stone-900 mb-6"
          >
            Questions?{' '}
            <span className="italic text-stone-500">We have answers.</span>
          </motion.h2>
        </div>

        {/* --- INTERACTIVE LIST --- */}
        <motion.div layout className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* --- FOOTER CTA --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-stone-500 font-sans">
            Need more help?{' '}
            <a
              href="#"
              className="text-stone-900 font-bold underline decoration-orange-400 decoration-2 underline-offset-4 hover:text-orange-600 transition-colors"
            >
              Chat with Support
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT FOR SMOOTH ANIMATION ISOLATION ---
const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div
      layout // KEY: Enables smooth height resizing
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      onClick={onClick}
      className={`relative group cursor-pointer border rounded-3xl overflow-hidden transition-colors duration-500 ${
        isOpen
          ? 'bg-white border-orange-200 shadow-2xl shadow-orange-900/5'
          : 'bg-white/60 border-stone-200/60 hover:bg-white hover:border-stone-300'
      }`}
    >
      {/* Active Indicator Bar */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? '100%' : '0%' }}
        className="absolute left-0 top-0 w-1 bg-orange-500 h-full"
      />

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-6">
          <h3
            className={`font-serif text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isOpen
                ? 'text-stone-900'
                : 'text-stone-600 group-hover:text-stone-800'
            }`}
          >
            {faq.question}
          </h3>

          {/* Icon Animation */}
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
              isOpen
                ? 'bg-orange-500 border-orange-500 text-white rotate-180'
                : 'bg-stone-100 border-stone-200 text-stone-500 group-hover:scale-110'
            }`}
          >
            {isOpen ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* AnimatePresence handles the Unmounting Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className="font-sans text-lg text-stone-600 leading-relaxed max-w-3xl border-t border-dashed border-stone-100 pt-6">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FAQSection;
