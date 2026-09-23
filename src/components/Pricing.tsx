import React, { useState } from 'react';
import { Check, Dumbbell, HeartPulse, UserCheck, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { STANDARD_PLANS, CARDIO_PLANS, PERSONAL_TRAINING_PLAN, GYM_CONTACT } from '../data/gymData.ts';
import { MembershipPlan } from '../types.ts';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'cardio'>('standard');

  const currentPlans = activeTab === 'standard' ? STANDARD_PLANS : CARDIO_PLANS;

  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#080B0E] border-t border-neutral-900 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#00E659]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E659]" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Choose Your Membership Plan
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
            Affordable, premium fitness with zero hidden charges. All new registrations include a one-time ₹100 admission fee.
          </p>

          {/* Admission Fee Notice (Anti-Slop Clean Editorial Layout) */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#00E659] shrink-0" />
            <span>
              <strong>One-Time Admission Fee:</strong> ₹{GYM_CONTACT.admissionFee} only (payable upon joining)
            </span>
          </div>
        </div>

        {/* Tab Switcher (Functional Segmented Control) */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'standard'
                  ? 'bg-[#00E659] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>Standard Strength</span>
            </button>

            <button
              onClick={() => setActiveTab('cardio')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'cardio'
                  ? 'bg-[#00E659] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HeartPulse className="w-4 h-4" />
              <span>Including Cardio</span>
            </button>
          </div>
        </div>

        {/* Grid of 4 Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentPlans.map((plan: MembershipPlan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#141A22] to-[#0D1217] border-2 border-[#00E659] shadow-xl shadow-[#00E659]/10 -translate-y-1'
                    : 'bg-[#0F141A] border border-neutral-800 hover:border-neutral-700 hover:bg-[#121820]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#00E659] text-black text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {plan.duration}
                    </span>
                    {plan.savings && (
                      <span className="text-[11px] font-semibold text-[#00E659] tracking-tight">
                        {plan.savings}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3">
                    {plan.name}
                  </h3>

                  <div className="mb-6 pb-6 border-b border-neutral-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        / {plan.billingCycle}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      + ₹{GYM_CONTACT.admissionFee} one-time admission for new members
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#00E659] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-[#00E659] text-black hover:bg-[#00c94d] shadow-md shadow-[#00E659]/20'
                      : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Dedicated Personal Training Card (Highlighted ₹5,000 Tier) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0C1217] via-[#101820] to-[#0C1217] border border-[#00E659]/40 p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#00E659]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-3">
                <UserCheck className="w-4 h-4" />
                <span>Dedicated Transformation Program</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                1-on-1 Personal Training
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Work privately with certified trainers who build customized lifting mechanics, monitor weekly body composition metrics, and provide strict dietary guidelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {PERSONAL_TRAINING_PLAN.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-[#00E659] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Investment
              </span>
              <div className="flex items-baseline gap-1 my-1">
                <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                  {PERSONAL_TRAINING_PLAN.priceFormatted}
                </span>
                <span className="text-sm text-slate-400 font-medium">/ month</span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Direct trainer accountability + custom nutrition
              </p>

              <button
                onClick={() => onSelectPlan(PERSONAL_TRAINING_PLAN.id)}
                className="w-full sm:w-auto py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] shadow-lg shadow-[#00E659]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Enroll in Personal Training</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
