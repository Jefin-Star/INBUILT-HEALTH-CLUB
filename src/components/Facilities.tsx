import React from 'react';
import { Dumbbell, Activity, ShieldCheck, Clock, Users, Flame } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

export const Facilities: React.FC = () => {
  const facilityItems = [
    {
      icon: Dumbbell,
      title: "Olympic Free Weights & Racks",
      desc: "Comprehensive dumbbell range, Olympic barbells, flat/incline/decline benches, and heavy-duty squat cages.",
    },
    {
      icon: Activity,
      title: "Advanced Cardio Deck",
      desc: "Commercial motor treadmills, cross trainers, spin cycles, and rowing units to elevate cardiovascular fitness.",
    },
    {
      icon: Flame,
      title: "Pin-Loaded & Cable Stations",
      desc: "Smooth biomechanical cable crossovers, lat pulldowns, seated rows, leg press, and chest press machines.",
    },
    {
      icon: Users,
      title: "100% Unisex & Beginner Friendly",
      desc: "Safe, respectful, and encouraging environment for men, women, students, and seniors of all fitness levels.",
    },
    {
      icon: Clock,
      title: "Convenient Flexible Hours",
      desc: `Open early morning till late night (${GYM_CONTACT.openingHours.weekdays}) to fit busy modern schedules.`,
    },
    {
      icon: ShieldCheck,
      title: "Locker & Changing Rooms",
      desc: "Spacious, well-ventilated changing areas and secure lockers to keep your personal items safe during workouts.",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#070A0D] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E659]" />
            <span>Modern Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Gym Amenities & Equipment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Every square foot of Inbuilt Health Club is purpose-built to give you an uncompromising workout experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-[#00E659] mb-4 group-hover:scale-110 group-hover:border-[#00E659]/50 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
