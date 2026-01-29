'use client';
import React from 'react';
import {
  Play,
  Heart,
  Star,
  Image as ImageIcon,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-[#FDFCF8] text-stone-900 overflow-hidden py-20 lg:py-28">
      {/* Background Lighting Effects (Adjusted for Light Mode) */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co.com/FkYGCy8T/banner.jpg"
          alt="Background Texture"
          className="w-full h-full object-cover opacity-5" // Keep opacity low (5%) for a "watermark" feel
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-bg-[#FDFCF8] via-transparent to-bg-[#FDFCF8]"></div>
      </div> */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <div className="max-w-2xl">
            <div className="md:inline-flex hidden items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm text-stone-600 text-sm font-medium mb-8 ">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-stone-300 border border-white"></div>
                <div className="w-5 h-5 rounded-full bg-stone-400 border border-white"></div>
                <div className="w-5 h-5 rounded-full bg-stone-500 border border-white"></div>
              </div>
              <span className="pl-1 ">Trusted by 10,000+ families</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              Create a Living Tribute That{' '}
              <span className="italic text-stone-500">Lasts Forever</span>
            </h1>

            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              A digital remembrance page where stories, photos, and love live
              on—shared with family and preserved for generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* FIXED BUTTON */}
              <motion.button
                initial={{ backgroundColor: '#1c1917' }} // stone-900
                whileHover={{ backgroundColor: '#ea580c' }} // orange-600
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-auto px-8 py-4 text-white rounded-full md:text-lg font-bold shadow-xl shadow-stone-900/10 cursor-pointer group"
              >
                <span className="flex items-center justify-center gap-2">
                  Start a Legacy Page (Free)
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>

              <button className="inline-flex justify-center items-center px-8 py-4 bg-white border border-stone-300 text-stone-800 rounded-full font-medium text-lg transition-colors hover:bg-stone-100 group">
                See Example Pages
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-stone-500 font-medium">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />{' '}
                4.9/5 Rating
              </span>
              <span>•</span>
              <span>No credit card required</span>
            </div>
          </div>

          {/* RIGHT: Visual Component (Dark Contrast Card) */}
          <div className="relative group perspective-1000 mt-10 lg:mt-0">
            {/* Glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* MAIN CARD CONTAINER */}
            <div className="relative bg-[#FAFAF9] border border-stone-200 rounded-2xl shadow-2xl overflow-hidden min-h-[550px] transform transition-transform md:rotate-y-12 md:group-hover:rotate-y-0 duration-700">
              {/* 1. HERO IMAGE AREA */}
              <div className="h-52 relative">
                <img
                  src="https://i.ibb.co.com/JWmSCwLj/cover.jpg"
                  className="w-full h-full object-cover opacity-90"
                  alt="Background"
                />
                {/* Gradient blends into the light background now */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-transparent"></div>

                {/* Navbar simulation */}
                <div className="absolute top-4 left-6 right-6 flex justify-between items-center">
                  <div className="text-white font-serif italic text-lg drop-shadow-md">
                    In Loving Memory
                  </div>
                  <button className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded border border-white/30 hover:bg-white/30 transition">
                    Share
                  </button>
                </div>
              </div>

              {/* 2. PROFILE SECTION */}
              <div className="relative px-8 -mt-26 text-center">
                <div className="inline-block relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl bg-stone-200 mx-auto">
                    <img
                      src="https://i.ibb.co.com/qM3Dw92f/Profile.jpg"
                      className="w-full h-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  {/* Heart Icon Badge */}
                  <div className="absolute bottom-1 right-1 bg-amber-500 rounded-full p-1.5 border-4 border-white shadow-sm">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                <div className="mt-3 mb-8">
                  {/* Text changed to Dark Stone for visibility */}
                  <h2 className="text-3xl font-serif text-stone-900 mb-1">
                    James "Jim" Sullivan
                  </h2>
                  <p className="text-amber-600 font-medium tracking-widest text-xs uppercase">
                    1945 — 2024
                  </p>
                </div>
              </div>

              {/* 3. CONTENT GRID (Inside the Card) */}
              <div className="px-4 pb-6 space-y-4">
                {/* Story Card */}
                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-3 h-3 text-orange-400" />
                    <span className="text-xs font-bold text-orange-800 uppercase">
                      Recent Story
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 italic font-serif leading-relaxed">
                    "Grandpa always had the warmest smile. I remember the
                    summers we spent in her garden..."
                  </p>
                </div>

                {/* Gallery & Video Row */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Gallery */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-3 h-3 text-stone-400" />
                      <span className="text-[10px] font-bold text-stone-400 uppercase">
                        Gallery
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square h-25 w-40 bg-stone-200 rounded-lg overflow-hidden">
                        <img
                          src="https://i.ibb.co.com/21wGfVq5/Image-3.jpg"
                          className="w-full h-full object-cover"
                          alt="mem1"
                        />
                      </div>
                      <div className="aspect-square h-25 w-40 bg-stone-200 rounded-lg overflow-hidden">
                        <img
                          src="https://i.ibb.co.com/5wZscjG/Image-2.jpg"
                          className="w-full h-full object-cover"
                          alt="mem2"
                        />
                      </div>
                      <div className="aspect-square h-25 w-40 bg-stone-200 rounded-lg overflow-hidden">
                        <img
                          src="https://i.ibb.co.com/bTYpBCL/Whats-Apjfj.jpg"
                          className="h-25 w-40 object-cover"
                          alt="mem2"
                        />
                      </div>
                      <div className="h-25 w-40 relative bg-stone-200 rounded-lg border border-stone-200 overflow-hidden flex items-center justify-center shadow-sm cursor-pointer hover:opacity-90 transition">
                        {/* Background Image */}
                        <img
                          src="https://i.ibb.co.com/FkLzjZF2/ehrh.jpg" // You can change this image
                          className="absolute inset-0 w-full h-full object-cover"
                          alt="More"
                        />

                        {/* Dark Overlay (to make text readable) */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* The Number Text */}
                        <span className="relative z-10 text-white text-md font-bold">
                          +24
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Video */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Play className="w-3 h-3 text-stone-400" />
                      <span className="text-[10px] font-bold text-stone-400 uppercase">
                        Tribute Video
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-stone-900 rounded-lg overflow-hidden relative group cursor-pointer h-25 w-40">
                        <img
                          src="https://i.ibb.co.com/xKBJqJfj/Image-1.jpg"
                          className="w-full h-full object-cover opacity-60"
                          alt="video thumb"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="aspect-video bg-stone-900 rounded-lg overflow-hidden relative group cursor-pointer h-25 w-40">
                        <img
                          src="https://i.ibb.co.com/CsMNjgpH/Whats.jpg"
                          className="w-full h-full object-cover opacity-60"
                          alt="video thumb"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="aspect-video bg-stone-900 rounded-lg overflow-hidden relative group cursor-pointer h-25 w-40">
                        <img
                          src="https://i.ibb.co.com/99F1cZVg/th.jpg"
                          className="w-full h-full object-cover opacity-60"
                          alt="video thumb"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="h-25 w-40 relative bg-stone-200 rounded-lg border border-stone-200 overflow-hidden flex items-center justify-center shadow-sm cursor-pointer hover:opacity-90 transition">
                        {/* Background Image */}
                        <img
                          src="https://i.ibb.co.com/B5Bc5MMR/htr.jpg" // You can change this image
                          className="absolute inset-0 w-full h-full object-cover"
                          alt="video thumb"
                        />

                        {/* Dark Overlay (to make text readable) */}
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                        {/* The Number Text */}
                        <span className="relative z-10 text-black text-md font-bold">
                          +15
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
