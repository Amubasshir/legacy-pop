'use client';

import React from 'react';
import {
  ScrollText,
  Images,
  QrCode,
  HeartHandshake,
  ShieldCheck,
  CalendarHeart,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      title: 'Story Feed',
      description:
        'A living chronicle. Friends can post anecdotes and condolences in a beautiful chronological feed.',
      icon: <ScrollText className="w-6 h-6 text-stone-800" />,
      color: 'bg-stone-100',
      accent: 'group-hover:bg-stone-200',
      rotation: '-rotate-3',
    },
    {
      title: 'Photo & Video Gallery',
      description:
        'Unlimited space to preserve high-res images. We optimize them for viewing on any device, forever.',
      icon: <Images className="w-6 h-6 text-orange-700" />,
      color: 'bg-orange-50',
      accent: 'group-hover:bg-orange-100',
      rotation: 'rotate-3',
    },
    {
      title: 'Social Sharing + QR Codes',
      description:
        'Generate a custom QR code instantly. Print it on funeral programs so guests can upload photos right from the pews.',
      icon: <QrCode className="w-6 h-6 text-blue-700" />,
      color: 'bg-blue-50',
      accent: 'group-hover:bg-blue-100',
      rotation: '-rotate-2',
    },
    {
      title: 'Charitable Donations',
      description:
        'Optional fund linking. Direct mourners to a GoFundMe or charity of choice in your loved one’s honor.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-700" />,
      color: 'bg-rose-50',
      accent: 'group-hover:bg-rose-100',
      rotation: 'rotate-2',
    },
    {
      title: 'Privacy Controls',
      description:
        'Total control. Set pages to Public, Password-Protected, or Invite-Only for intimate family circles.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
      color: 'bg-emerald-50',
      accent: 'group-hover:bg-emerald-100',
      rotation: '-rotate-3',
    },
    {
      title: 'Anniversary Reminders',
      description:
        'We never let memories fade. Automated, gentle emails on birthdays and anniversaries invite family to visit.',
      icon: <CalendarHeart className="w-6 h-6 text-purple-700" />,
      color: 'bg-purple-50',
      accent: 'group-hover:bg-purple-100',
      rotation: 'rotate-3',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#FDFCF8] overflow-hidden">
      {/* Background Decor: Subtle grid pattern */}

      {/* Soft colored blur behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-100/40 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-stone-900 mb-6 leading-[1.1]">
            Everything you need <br />
            <span className="italic text-stone-500">to honor a life.</span>
          </h2>
          <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-xl mx-auto">
            Thoughtfully designed tools to help you celebrate their legacy,
            connect with family, and find peace.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2rem] p-8 border border-stone-100 shadow-lg shadow-stone-200/50 hover:shadow-2xl hover:shadow-stone-300/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Header: Icon & Arrow */}
              <div className="flex justify-between items-start mb-6 relative z-10 ">
                {/* Composite Icon */}
                <div className="relative w-16 h-16">
                  {/* Background Shape */}
                  <div
                    className={`absolute inset-0 ${feature.color} ${feature.accent} rounded-2xl transform ${feature.rotation} transition-transform duration-500 group-hover:rotate-0`}
                  />

                  {/* Icon Foreground */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-stone-100 rounded-2xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                </div>

                {/* Corner Action */}
                <div className="w-8 h-8 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="font-sans text-base text-stone-600 leading-relaxed group-hover:text-stone-700">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Gradient Blob on Hover */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 ${feature.color} blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
