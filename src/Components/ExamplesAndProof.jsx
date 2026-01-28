'use client';

import React from 'react';
import {
  Quote,
  ArrowRight,
  Star,
  ExternalLink,
  Sparkles,
  Camera,
  Heart,
  BadgeCheck,
} from 'lucide-react';

const ExamplesAndProof = () => {
  const examples = [
    {
      id: 1,
      name: 'Eleanor Ray',
      dates: '1945 — 2023',
      role: 'Mother & Grandmother',
      image: 'https://i.ibb.co.com/SwF9sKS4/Mother-Grandmother.jpg',
      quote:
        'I was afraid her stories would fade with time. Now, my children can visit this page and truly know who their grandmother was.',
      author: 'Sarah J.',
      relation: 'Daughter',
      stats: { photos: 42, loves: 128 },
    },
    {
      id: 2,
      name: 'David Chen',
      dates: '1980 — 2024',
      role: 'Artist & Friend',
      image: 'https://i.ibb.co.com/j9cwk9KC/Artist-Friend.jpg',
      quote:
        'The funeral went by in a blur. This page gave us a place to pause, cry, laugh, and remember him properly.',
      author: 'Michael T.',
      relation: 'Best Friend',
      stats: { photos: 156, loves: 840 },
    },
    {
      id: 3,
      name: 'Margaret & Joe',
      dates: '50th Anniversary',
      role: 'Joint Tribute',
      image: 'https://i.ibb.co.com/MkbwG060/Anniversary.jpg',
      quote:
        "We created a joint tribute for our parents. Seeing old photos uploaded by distant cousins we'd never met was magical.",
      author: 'Emily R.',
      relation: 'Niece',
      stats: { photos: 89, loves: 312 },
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FAFAF9] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-50/30 skew-x-12 transform translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-stone-200/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-center mb-16 gap-8">
          <div className="max-w-6xl relative text-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] text-center animate-fade-in delay-100 mb-6">
              Real stories. <br />
              <span className="italic  text-stone-500 relative inline-block">
                Lasting legacies.
              </span>
            </h2>
            <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              "Join thousands of families who have chosen a more personal way to
              remember. Create a timeless tribute where memories are celebrated,
              shared, and kept safe for generations to come."
            </p>
          </div>
        </div>

        {/* --- THE GALLERY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {examples.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col group ${index === 1 ? 'md:-translate-y-12' : ''} transition-transform duration-700 cursor-pointer`} // Staggered middle card
            >
              {/* 1. VISUAL LAYER */}
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200 mb-6 border-[6px] border-white ring-1 ring-stone-100 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                {/* Main Image */}
                <img
                  src={item.image}
                  alt={`Tribute for ${item.name}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter sepia-[0.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-xs font-bold text-stone-600 uppercase tracking-wider">
                  <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                  Verified Tribute
                </div>

                {/* Floating Stats (Appear on Hover) */}
                <div className="absolute bottom-30 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 delay-100">
                  <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 border border-white/20">
                    <Camera className="w-3 h-3" /> {item.stats.photos} Photos
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 border border-white/20">
                    <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />{' '}
                    {item.stats.loves}
                  </div>
                </div>

                {/* Name & Dates */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                  <p className="font-sans text-xs font-medium tracking-widest text-orange-200 uppercase mb-2">
                    {item.role}
                  </p>
                  <h3 className="font-serif text-3xl font-medium leading-none mb-1">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-white/80">
                    {item.dates}
                  </p>
                </div>

                {/* Hover Interaction Layer */}
                <div className="absolute inset-0 bg-orange-900/0 group-hover:bg-orange-900/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* 2. TESTIMONIAL NOTE */}
              <div className="relative bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 ml-4">
                {/* Connection triangle */}
                <div className="absolute -top-3 left-0 w-6 h-6 bg-white border-l border-t border-stone-100 transform skew-y-12"></div>

                <Quote className="w-8 h-8 text-orange-200 absolute -top-4 -right-2 transform rotate-12" />

                <div className="flex gap-0.5 text-orange-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-serif italic text-stone-700 text-lg leading-relaxed mb-4">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-3 border-t border-stone-100 pt-3">
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500 text-xs">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      {item.author}
                    </p>
                    <p className="text-xs text-stone-500">{item.relation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --- CTA BUTTON --- */}
        {/* --- CTA BUTTON --- */}
        <div className="mt-20 flex justify-center">
          <div className="relative group">
            {/* Glow Effect behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <button className="relative flex items-center px-10 py-5 bg-stone-900 text-white rounded-full text-lg font-bold shadow-2xl transition-transform transform group-hover:-translate-y-1 cursor-pointer">
              View All Examples
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesAndProof;
