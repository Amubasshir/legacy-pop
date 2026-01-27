'use client';

import React from 'react';
import {
  Infinity,
  Fingerprint,
  Sparkles,
  ShieldCheck,
  Cloud,
} from 'lucide-react';

const WhyItMatters = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* --- HEADER --- */}
        <div className="max-w-full mb-16 lg:mb-20 text-center">
          <h2 className="font-serif text-5xl sm:text-6xl font-medium text-stone-900 leading-[1.05] text-center mb-6">
            Preserving the past, <br />
            <span className="italic  text-stone-500 relative inline-block">
              protecting the future.
            </span>
          </h2>
          <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            We’ve stripped away the complexity. Build a lasting sanctuary in
            three simple steps, no technical skills required.
          </p>
        </div>

        {/* --- THE BENTO VAULT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[600px]">
          {/* COLUMN 1: The Emotional Core (Large Image Card) */}
          <div className="lg:col-span-7 h-[500px] lg:h-full relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Family generation"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />

            {/* Content overlaid on image */}
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
              <div className="flex items-center gap-3 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/20">
                  <Infinity className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 font-medium tracking-wide text-sm">
                  Permanent Storage
                </span>
              </div>
              <p className="font-serif text-2xl sm:text-4xl text-white leading-tight mb-2">
                "It's the digital equivalent of a fireproof safe for your family
                history."
              </p>
            </div>
          </div>

          {/* COLUMN 2: The Logic (Vertical Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 h-full">
            {/* Card A: The Problem (Dark Theme) */}
            <div className="flex-1 bg-stone-900 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-center shadow-xl shadow-stone-400/20 relative overflow-hidden group">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-stone-800 rounded-full group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-stone-500 font-serif text-6xl opacity-20">
                    01
                  </span>
                  <Cloud className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">
                  Stop the Fade
                </h3>
                <p className="text-stone-400 text-lg leading-relaxed">
                  Physical photos yellow, hard drives fail, and social media
                  accounts get deleted. We provide an independent sanctuary.
                </p>
              </div>
            </div>

            {/* Card B: The Solution (Light/Glass Theme) */}
            <div className="flex-1 bg-white border border-stone-200 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-center shadow-lg relative overflow-hidden hover:border-orange-200 transition-colors duration-300">
              {/* Advanced Composite Icon */}
              <div className="absolute top-8 right-8 w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center transform rotate-3">
                <Fingerprint className="w-7 h-7 text-orange-600/80" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center border-2 border-white">
                  <ShieldCheck className="w-3 h-3 text-white" />
                </div>
              </div>

              <span className="text-stone-200 font-serif text-6xl mb-6 block">
                02
              </span>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-stone-900 mb-4">
                  Total Ownership
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  No ads. No data selling. You own the content, and you control
                  who sees it. Private, secure, and respectful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
