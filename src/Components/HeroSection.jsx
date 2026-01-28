'use client';

import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#FDFCF8]">
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop"
          alt="Sunlight filtering through trees"
          className="w-full h-full object-cover object-center opacity-60 animate-pan-slow"
        />
        {/* Stronger gradient on mobile for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-[#FDFCF8]" />
      </div>

      <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 pt-25 pb-16 sm:px-8 md:text-center">
        <div className="flex flex-col items-center">
          {/* Top Tagline */}
          <div className=" items-center gap-2 mb-6 opacity-0 animate-fade-in-down hidden md:flex">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 shadow-sm">
              <Heart className="w-4 h-4 fill-current" />
            </span>
            <span className="text-xs font-bold tracking-widest text-stone-600 uppercase">
              Forever in our hearts
            </span>
          </div>

          {/* Main Headline 
              - text-4xl: Base size for mobile (readable, not overwhelming)
              - sm:text-6xl: Tablet size
              - lg:text-8xl: Desktop size
          */}
          <h1 className="font-serif text-4xl font-bold sm:text-6xl lg:text-8xl text-stone-900 leading-[1.15] tracking-tight mb-6 text-center drop-shadow-sm opacity-0 animate-fade-in-up delay-100">
            Create a Living Tribute
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 italic px-1">
              That Lasts Forever{' '}
            </span>
          </h1>

          {/* Subheadline 
              - text-base: Base size for mobile
              - md:text-xl: Larger on desktop
          */}
          <p className="font-sans text-base sm:text-lg md:text-2xl text-stone-700 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center opacity-0 animate-fade-in-up delay-200">
            A digital remembrance page where stories, photos, and love live
            on—shared with family and preserved for generations.
          </p>

          {/* Action Buttons 
              - flex-col: Stack buttons vertically on mobile (full width)
              - sm:flex-row: Side-by-side on tablet+
          */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
            {/* Primary Button */}
            <button className="w-full sm:w-auto group relative px-5 md:px-8 py-4 bg-stone-900 text-white rounded-full md:text-lg font-bold shadow-xl shadow-stone-900/10 active:scale-95 hover:bg-orange-600 transition-all duration-300 cursor-pointer">
              <span className="flex items-center justify-center">
                Start a Legacy Page (Free)
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary Button */}
            <button className="w-full sm:w-auto px-8 py-4 text-stone-700 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full text-lg font-medium active:bg-stone-100 hover:bg-white hover:border-stone-300 transition-all shadow-sm cursor-pointer">
              See Example Pages
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 opacity-0 animate-fade-in-up delay-500">
            <div className="flex text-orange-400">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-medium text-stone-500">
              Loved by 10,000+ families
            </p>
          </div>
        </div>
      </div>

      {/* Animations remain the same */}
      <style jsx>{`
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pan-slow {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.2);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-pan-slow {
          animation: pan-slow 25s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
