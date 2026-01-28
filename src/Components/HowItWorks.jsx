// import React from 'react';
// import { ArrowRight, PenTool, UserPlus, HeartHandshake } from 'lucide-react';

// const HowItWorks = () => {
//   const steps = [
//     {
//       id: 1,
//       title: 'Create a Page',
//       description:
//         'Set up a beautiful tribute in minutes. Simply add a photo, basic details, and a short biography to get started.',
//       icon: <PenTool className="w-8 h-8 text-stone-700" />,
//     },
//     {
//       id: 2,
//       title: 'Invite Family & Friends',
//       description:
//         'Send a private link to loved ones via email or text. No account is required for them to view the page.',
//       icon: <UserPlus className="w-8 h-8 text-stone-700" />,
//     },
//     {
//       id: 3,
//       title: 'Share Memories',
//       description:
//         'Watch the page come alive as everyone uploads their favorite photos, videos, and heartfelt stories in one safe place.',
//       icon: <HeartHandshake className="w-8 h-8 text-stone-700" />,
//     },
//   ];

//   return (
//     <section className="relative w-full py-20 lg:py-32 bg-[#FDFCF8]">
//       {/* Background Texture (Optional subtle grain) */}
//       <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-6">
//             How It Works
//           </h2>
//           <p className="font-sans text-xl sm:text-2xl text-stone-600 leading-relaxed">
//             Honoring a loved one shouldn't be complicated. Build a lasting
//             legacy in three simple steps.
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
//           {/* Connector Line (Desktop Only) - sits behind the icons */}
//           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-stone-300 z-0" />

//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               className="relative flex flex-col items-center text-center group"
//             >
//               {/* Icon Circle */}
//               <div className="relative z-10 w-24 h-24 rounded-full bg-white border border-stone-200 shadow-lg flex items-center justify-center mb-8 group-hover:scale-105 group-hover:border-orange-200 group-hover:shadow-orange-100 transition-all duration-300">
//                 {step.icon}
//                 {/* Step Number Badge */}
//                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif font-bold text-lg border-4 border-[#FDFCF8]">
//                   {step.id}
//                 </div>
//               </div>

//               {/* Text Content */}
//               <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
//                 {step.title}
//               </h3>
//               <p className="font-sans text-lg text-stone-600 leading-relaxed px-4">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 text-center">
//           <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 hover:-translate-y-1">
//             Start Your Page
//             <ArrowRight className="ml-3 w-6 h-6" />
//           </button>
//           <p className="mt-6 text-stone-500 font-sans text-base">
//             It takes less than 2 minutes to set up.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
'use client';

import React from 'react';
import {
  ArrowRight,
  PenLine,
  Sparkles,
  Send,
  Mail,
  Heart,
  Image as ImageIcon,
  Play,
} from 'lucide-react';
import { motion } from 'framer-motion';
const HowItWorks = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#FDFCF8] overflow-hidden">
      {/* 1. Header Area */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 mb-6 leading-[1.1]">
            Honoring a life <br />
            <span className="italic text-stone-400">made simple.</span>
          </h2>
          <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            We’ve stripped away the complexity. Build a lasting sanctuary in
            three simple steps, no technical skills required.
          </p>
        </div>

        {/* 2. The Steps Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* CONNECTING LINE (Desktop Only - SVG Wiggle) */}
          <div className="hidden lg:block absolute top-[20%] left-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30">
            <svg className="w-full h-20" preserveAspectRatio="none">
              <path
                d="M 150,50 C 400,0 600,100 1000,50"
                stroke="#d6d3d1"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* --- STEP 1: CREATE --- */}
          <StepCard
            step="01"
            title="Create the Page"
            description="Start with the basics. Add a hero photo, birth & passing dates, and a bio. Our design engine makes it look professional automatically."
            iconVisual={
              // Custom Composite Icon 1
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-orange-50 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-white border border-stone-100 rounded-2xl shadow-sm transform -rotate-3 flex items-center justify-center">
                  <PenLine className="w-8 h-8 text-stone-800" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            }
          />

          {/* --- STEP 2: INVITE --- */}
          <StepCard
            step="02"
            title="Invite Family & Friends"
            description="Copy the private link and text it to family, or download the QR code for the funeral program. No account sign-up is needed for them."
            iconVisual={
              // Custom Composite Icon 2
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-blue-50 rounded-full blur-xl opacity-80" />
                <div className="relative z-10 w-20 h-16 bg-white border border-stone-200 rounded-xl shadow-lg flex items-center justify-center transform -translate-x-2">
                  <Mail className="w-8 h-8 text-stone-400" />
                </div>
                <div className="absolute z-20 w-12 h-12 bg-stone-900 rounded-full border-4 border-[#FAFAF9] flex items-center justify-center shadow-xl top-1/2 -right-2 transform -translate-y-1/2">
                  <Send className="w-5 h-5 text-white ml-0.5" />
                </div>
              </div>
            }
          />

          {/* --- STEP 3: SHARE --- */}
          <StepCard
            step="03"
            title="Share Memories"
            description="The page fills up as everyone contributes. Photos, voice notes, and written stories combine to create a full picture of their life."
            iconVisual={
              // Custom Composite Icon 3
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Photo Stack Effect */}
                <div className="absolute w-16 h-20 bg-stone-200 rounded-lg transform -rotate-12 translate-x-4 border border-white" />
                <div className="absolute w-16 h-20 bg-stone-300 rounded-lg transform rotate-6 translate-x-2 border border-white" />

                {/* Main Visual */}
                <div className="relative z-10 w-20 h-20 bg-white rounded-xl shadow-xl flex items-center justify-center border border-stone-100">
                  <Heart className="w-10 h-10 text-rose-500 fill-rose-50" />
                </div>
              </div>
            }
          />
        </div>

        {/* 3. Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block relative group">
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
                Start Your Page
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium text-stone-500">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              No credit card required
            </span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span className="flex items-center gap-1.5">
              <Play className="w-3 h-3 fill-stone-400 text-stone-400" />2 min
              setup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Reusable Component for cleaner code ---
const StepCard = ({ step, title, description, iconVisual }) => {
  return (
    <div className="relative group p-8 rounded-[2rem] bg-white border border-stone-200/60 shadow-lg shadow-stone-200/40 hover:shadow-2xl hover:shadow-stone-300/50 hover:-translate-y-2 transition-all duration-500 z-10">
      {/* Step Number Background */}
      <span className="absolute top-4 right-8 text-[8rem] leading-none font-serif text-stone-50 font-bold -z-10 select-none group-hover:text-orange-50/50 transition-colors duration-500">
        {step}
      </span>

      {/* Advanced Icon Container */}
      <div className="w-24 h-24 mb-8">{iconVisual}</div>

      <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-orange-800 transition-colors">
        {title}
      </h3>

      <p className="font-sans text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default HowItWorks;
