import React from 'react';
import { Dumbbell, HeartPulse, UserCheck, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images.ts';
import { GYM_CONTACT } from '../data/gymData.ts';

interface AboutProps {
  onExplorePlans: () => void;
}

export const About: React.FC<AboutProps> = ({ onExplorePlans }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#080B0E] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E659]" />
            <span>About Our Health Club</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance leading-tight">
            Built for Power, Endurance, & Lifelong Transformation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            <strong className="text-white font-semibold">{GYM_CONTACT.gymName}</strong> was established to bridge the gap between commercial cookie-cutter gyms and raw, results-driven strength training. 
            Whether you are lifting for the first time or breaking personal records, our club provides the environment, equipment, 
            and coaching you need to succeed.
          </p>
        </div>

        {/* 3 Major Facility Pillars with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Strength Training */}
          <div className="group rounded-2xl bg-[#0F141A] border border-neutral-800 overflow-hidden hover:border-[#00E659]/50 transition-all flex flex-col">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
              <img
                src={IMAGES.strengthZone}
                alt="Strength Training Zone at Inbuilt Health Club"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141A] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-700/50">
                <Dumbbell className="w-5 h-5 text-[#00E659]" />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00E659] tracking-wider uppercase">Pillar 01</span>
                <h3 className="text-xl font-display font-bold text-white mt-1 mb-2">Heavy Strength & Free Weights</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Engineered for hypertrophy, functional power, and structural durability. Equipped with Olympic barbells, squat cages, heavy dumbbell racks, and biomechanically aligned isolation machines.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E659] shrink-0" />
                  <span>Olympic barbell lifting platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E659] shrink-0" />
                  <span>Dumbbells up to heavy commercial tiers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cardio Floor */}
          <div className="group rounded-2xl bg-[#0F141A] border border-neutral-800 overflow-hidden hover:border-[#00E659]/50 transition-all flex flex-col">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
              <img
                src={IMAGES.cardioZone}
                alt="Cardio and Endurance Deck at Inbuilt Health Club"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141A] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-700/50">
                <HeartPulse className="w-5 h-5 text-[#00E659]" />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00E659] tracking-wider uppercase">Pillar 02</span>
                <h3 className="text-xl font-display font-bold text-white mt-1 mb-2">Cardio & Metabolic Conditioning</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Burn fat, elevate VO2 max, and build tireless stamina. High-grade commercial motorized treadmills, elliptical cross trainers, and stamina stations calibrated for peak heart-rate training.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E659] shrink-0" />
                  <span>Commercial treadmills & incline trainers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E659] shrink-0" />
                  <span>Dedicated aerobic & HIIT intervals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Personal Training */}
          <div className="group rounded-2xl bg-[#0F141A] border border-neutral-800 overflow-hidden hover:border-[#00E659]/50 transition-all flex flex-col">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
              <img
                src={IMAGES.personalTraining}
                alt="1-on-1 Personal Training Session at Inbuilt Health Club"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141A] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-700/50">
                <UserCheck className="w-5 h-5 text-[#00E659]" />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00E659] tracking-wider uppercase">Pillar 03</span>
                <h3 className="text-xl font-display font-bold text-white mt-1 mb-2">Elite 1-on-1 Personal Coaching</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Accelerate results safely with individualized coaching. Dedicated attention to biomechanical form, progressive workout programming, nutritional discipline, and ongoing accountability.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E659] shrink-0" />
                  <span>Tailored workout & dietary roadmaps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E659] shrink-0" />
                  <span>Real-time posture and safety correction</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Why Choose Inbuilt Health Club - Proof & Standards */}
        <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00E659] uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>The Inbuilt Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                A Respectful, Unisex Environment Designed for Everyone
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We believe a gym must inspire focus rather than intimidation. Inbuilt Health Club brings together passionate fitness enthusiasts, working professionals, students, and beginners in a clean, motivating space with zero judgment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[#00E659]/10 text-[#00E659] mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Minimal ₹100 Admission</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Transparent, honest pricing with no hidden facility charges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[#00E659]/10 text-[#00E659] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Clean & Sanitized Floor</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Regular hygiene rounds, tidy locker bays, and maintained gear.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-neutral-800 text-center">
              <div className="w-16 h-16 rounded-full bg-[#00E659]/10 border border-[#00E659]/30 flex items-center justify-center mb-4">
                <Dumbbell className="w-8 h-8 text-[#00E659]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#00E659] font-bold">Ready to take the first step?</p>
              <h4 className="text-xl font-display font-bold text-white mt-1 mb-2">Transform Your Physique Today</h4>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                Flexible memberships starting from just ₹700/month. Join our community of achievers.
              </p>
              <button
                onClick={onExplorePlans}
                className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] rounded-xl transition-all cursor-pointer shadow-md hover:shadow-[#00E659]/20"
              >
                Explore Membership Plans
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
