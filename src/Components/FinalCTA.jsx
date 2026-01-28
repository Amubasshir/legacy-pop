'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShieldCheck, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FDFCF8] overflow-hidden text-center">
      {/* Background Texture (Optional for depth) */}
      <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        {/* --- MAIN CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge - Fixed contrast for light background */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-sans font-bold mb-8 shadow-sm">
            <Heart className="w-4 h-4 fill-current" />
            <span>Join 10,000+ families preserving memories</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-stone-900 mb-8 tracking-tight leading-tight">
            Start a Page That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 italic">
              Lives On.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Don't let the stories fade. Create a beautiful, secure tribute in
            minutes—shared with family and preserved for generations to come.
          </p>

          {/* --- ACTION BUTTONS (FIXED COLORS) --- */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Primary Button */}
            <motion.button
              initial={{ backgroundColor: '#1c1917' }} // stone-900
              whileHover={{ backgroundColor: '#ea580c' }} // orange-600
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-auto px-5 md:px-8 py-4 
  text-white rounded-full md:text-lg font-bold 
  shadow-xl shadow-stone-900/10 cursor-pointer"
            >
              <span className="flex items-center justify-center">
                Start a Legacy Page (Free)
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>

            {/* Secondary Button - Fixed to be visible on light bg */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-5 md:px-10 py-5 font-semibold text-stone-600 border-2 border-stone-200 rounded-full bg-transparent hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900 transition-all cursor-pointer"
            >
              See Example Pages
            </motion.button>
          </div>
        </motion.div>

        {/* --- TRUST SIGNALS (FIXED COLORS) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-stone-500 text-sm font-sans"
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-500" />
            <span>Secure & Private Forever</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span>No Coding Required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-orange-500" />
            <span>Free to Get Started</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
