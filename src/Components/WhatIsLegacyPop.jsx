import React from 'react';
import { Image, Users, Heart, Quote } from 'lucide-react';

const WhatIsLegacyPop = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FDFCF8]">
      {/* Background Texture: Subtle grain/noise for a paper feel */}

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* 1. Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-stone-900 mb-6 leading-tight">
            What Is <span className="italic text-stone-500">LegacyPop?</span>
          </h2>
          <p className="font-sans text-xl text-stone-600 leading-relaxed">
            LegacyPop (Pages of Praise) helps families preserve the memories
            that matter most. Friends and family can share stories, photos, and
            moments in one beautiful place—so nothing meaningful is ever lost.
          </p>
        </div>

        {/* 2. The Feature Grid (Bento Layout) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* CARD A: Photo & Story Wall */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden border border-stone-200 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            {/* Text Content */}
            <div className="relative z-10 mb-10">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <Image className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900 mb-3">
                Photo & Story Wall
              </h3>
              <p className="font-sans text-lg text-stone-600">
                A timeline of a life well-lived. Upload cherished photos and
                write the stories behind them, preserved forever.
              </p>
            </div>

            {/* Visual: Floating Polaroids */}
            <div className="relative h-64 w-full mt-8">
              {/* Photo 1 */}
              <div className="absolute left-0 bottom-0 w-48 bg-stone-50 p-3 pb-8 shadow-lg transform -rotate-6 group-hover:-rotate-3 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="w-full h-32 object-cover grayscale-[10%]"
                  alt="Memory"
                />
                <div className="mt-3 h-2 w-2/3 bg-stone-200 rounded-full"></div>
              </div>

              {/* Photo 2 (Overlapping) */}
              <div className="absolute right-4 bottom-8 w-56 bg-stone-50 p-3 pb-8 shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700 z-10">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="w-full h-40 object-cover grayscale-[10%]"
                  alt="Memory"
                />
                <div className="mt-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400 fill-current" />
                  <div className="h-2 w-1/2 bg-stone-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD B: Community Tribute Feed */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden border border-stone-200 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            {/* Text Content */}
            <div className="relative z-10 mb-10">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900 mb-3">
                Community Tribute Feed
              </h3>
              <p className="font-sans text-lg text-stone-600">
                A shared space for love. Friends and distant relatives can visit
                to leave condolences and share their own anecdotes.
              </p>
            </div>

            {/* Visual: Message Bubbles */}
            <div className="relative h-64 w-full flex flex-col gap-4 mt-4">
              {/* Message 1 */}
              <div className="bg-stone-50 p-4 rounded-2xl rounded-tl-none border border-stone-100 max-w-[85%] self-start transform translate-x-2 group-hover:translate-x-4 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                  <span className="text-xs font-bold text-stone-800">
                    Uncle Joe
                  </span>
                </div>
                <p className="text-sm font-serif italic text-stone-600">
                  "He always knew how to make the whole room laugh..."
                </p>
              </div>

              {/* Message 2 */}
              <div className="bg-orange-50 p-4 rounded-2xl rounded-tr-none border border-orange-100 max-w-[85%] self-end transform -translate-x-2 group-hover:-translate-x-4 transition-transform duration-700 delay-100">
                <div className="flex items-center justify-end gap-2 mb-2">
                  <span className="text-xs font-bold text-stone-800">
                    Sarah M.
                  </span>
                  <div className="w-6 h-6 rounded-full bg-orange-200"></div>
                </div>
                <p className="text-sm font-serif italic text-stone-600">
                  "Sending all my love to the family. What a beautiful soul."
                </p>
                <div className="mt-2 flex justify-end">
                  <Heart className="w-3 h-3 text-rose-500 fill-current" />
                </div>
              </div>
            </div>

            {/* Decorative Background Icon */}
            <Quote className="absolute -bottom-4 -right-4 w-48 h-48 text-stone-50 rotate-12 -z-0 hidden md:flex" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLegacyPop;
