import React from 'react';
import { ArrowRight, ShieldCheck, Dumbbell, Flame, Sparkles } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';
import { IMAGES } from '../assets/images.ts';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07090C]">
      {/* Background Photography with High Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Inbuilt Health Club gym interior with modern equipment and dynamic lighting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in filter brightness-75 contrast-125"
        />
        {/* Measured gradient scrim to enforce WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090C] via-[#07090C]/85 to-[#07090C]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0E] via-transparent to-[#07090C]/80" />
        
        {/* Subtle green ambient atmospheric spot */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E659]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        
        {/* Editorial Sub-kicker / Category marker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/60 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00E659] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-[#00E659] uppercase">
            INBUILT HEALTH CLUB
          </span>
        </div>

        {/* Primary Gym Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] text-balance mb-6">
          <span className="text-white">INBUILT</span>{' '}
          <span className="text-[#00E659]">HEALTH CLUB</span>
        </h1>

        {/* Powerful Fitness Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-200 tracking-wide mb-4 max-w-3xl">
          &ldquo;{GYM_CONTACT.tagline}&rdquo;
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
          Premier strength training, motorized cardio deck, and elite 1-on-1 personal coaching. 
          A high-energy, supportive training ground built for real physical transformations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] rounded-xl shadow-lg shadow-[#00E659]/25 hover:shadow-[#00E659]/40 transition-all transform active:scale-95 cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl hover:border-neutral-600 transition-all cursor-pointer"
          >
            <span>View Membership Plans</span>
          </button>
        </div>

        {/* Value Prop Highlights (Zero-Pill Discipline, Quiet Typographic Layout) */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          
          <div className="p-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl font-display">
              <Sparkles className="w-4 h-4 text-[#00E659] shrink-0" />
              <span>₹100</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">One-Time Admission Fee</p>
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl font-display">
              <Dumbbell className="w-4 h-4 text-[#00E659] shrink-0" />
              <span>₹700 / mo</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Starting Membership Plan</p>
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl font-display">
              <Flame className="w-4 h-4 text-[#00E659] shrink-0" />
              <span>Cardio Deck</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Treadmills & Endurance</p>
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl font-display">
              <ShieldCheck className="w-4 h-4 text-[#00E659] shrink-0" />
              <span>100% Unisex</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Supportive Training Floor</p>
          </div>

        </div>

      </div>
    </section>
  );
};
