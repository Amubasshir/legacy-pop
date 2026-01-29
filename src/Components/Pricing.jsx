import React from 'react';
import { Check, Heart, Sparkles, Infinity } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Legacy',
      monthly: '5',
      lifetime: '1,500',
      description: 'Everything you need to start a beautiful, lasting tribute.',
      features: [
        'Page creation',
        'Unlimited stories & photos',
        'Secure family sharing',
        'Advanced privacy controls',
      ],
      buttonVariant: 'outline',
      highlight: false,
    },
    {
      name: 'Legacy Plus',
      monthly: '9',
      lifetime: '2,750',
      description: 'Enhanced features for families who want a unique touch.',
      features: [
        'Everything in Legacy',
        'Custom Web Address (URL)',
        'Priority Email Support',
        'High-Res Photo Downloads',
      ],
      buttonVariant: 'solid',
      highlight: true, // "Most Popular" visual style
      badge: 'Most Cherished',
    },
    {
      name: 'Legacy Premium',
      monthly: '15',
      lifetime: '4,950',
      description: 'Our comprehensive service with AI-assisted storytelling.',
      features: [
        'Everything in Plus',
        'AI Post Prompting & Ideas',
        'AI Writing Assistant (Polishing)',
        'AI Image-to-Video Maker',
      ],
      buttonVariant: 'outline',
      highlight: false,
      aiFeatures: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative  w-full py-24 lg:py-32 bg-[#FDFCF8]"
    >
      {/* Background Texture */}
      {/* <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="font-sans text-xl text-stone-600 leading-relaxed">
            Choose a plan that fits your family's needs. All plans ensure your
            memories are preserved securely and respectfully.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-[2rem] p-8 lg:p-10 border transition-all duration-300 ${
                plan.highlight
                  ? 'border-orange-200 shadow-2xl shadow-orange-100 scale-100 lg:-translate-y-4'
                  : 'border-stone-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Optional Badge for Middle Tier */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-200">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
                  {plan.aiFeatures && (
                    <Sparkles className="w-5 h-5 text-indigo-500 fill-indigo-100" />
                  )}
                  {plan.name}
                </h3>
                <p className="font-sans text-sm text-stone-500 mt-2 min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Price Display */}
              <div className="mb-8 p-6 bg-stone-50 rounded-2xl text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl text-stone-900">
                    ${plan.monthly}
                  </span>
                  <span className="font-sans text-stone-500">/mo</span>
                </div>

                {/* Lifetime Option */}
                <div className="mt-3 pt-3 border-t border-stone-200">
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">
                    Or One-time Payment
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-stone-600">
                    <Infinity className="w-4 h-4" />
                    <span className="font-serif text-lg font-medium">
                      ${plan.lifetime}
                    </span>
                    <span className="text-xs text-stone-400">Lifetime</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.aiFeatures
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'bg-green-50 text-green-600'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-sans text-stone-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 cursor-pointer ${
                  plan.buttonVariant === 'solid'
                    ? 'bg-stone-900 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-200'
                    : 'bg-white border-2 border-stone-200 text-stone-700 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Donation / Community Funding Note */}
        <div className="mt-16 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-50 rounded-full mb-4">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-100" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
            Community-Funded Option
          </h3>
          <p className="font-sans text-stone-600 mb-6">
            We believe no memory should be lost due to cost. You can enable
            <span className="font-bold text-stone-800">
              {' '}
              "Donation-Funded Hosting"
            </span>{' '}
            to allow family and friends to contribute small amounts to cover the
            page's lifetime cost.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-orange-600 font-bold hover:underline decoration-2 underline-offset-4"
          >
            Learn how community funding works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
