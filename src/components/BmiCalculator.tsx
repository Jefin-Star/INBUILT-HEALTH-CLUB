import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Flame, Dumbbell, UserCheck } from 'lucide-react';

interface BmiCalculatorProps {
  onSelectRecommendedPlan: (planId: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onSelectRecommendedPlan }) => {
  const [height, setHeight] = useState<number | ''>(172);
  const [weight, setWeight] = useState<number | ''>(74);
  const [goal, setGoal] = useState<'fatloss' | 'muscle' | 'stamina'>('muscle');

  // Compute BMI
  const numHeight = typeof height === 'number' ? height : 0;
  const numWeight = typeof weight === 'number' ? weight : 0;

  let bmi = 0;
  let category = '';
  let color = '';
  let recommendedPlanId = 'std-3m';
  let recommendationTitle = '3 Months Strength Plan';
  let recommendationReason = 'Ideal for structured hypertrophy and progressive weight lifting.';

  if (numHeight > 0 && numWeight > 0) {
    const heightInMeters = numHeight / 100;
    bmi = parseFloat((numWeight / (heightInMeters * heightInMeters)).toFixed(1));

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-amber-400';
      recommendedPlanId = 'std-3m';
      recommendationTitle = '3 Months Strength Plan';
      recommendationReason = 'High-calorie intake paired with compound resistance training to build clean muscle mass.';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal Healthy Weight';
      color = 'text-[#00E659]';
      if (goal === 'muscle') {
        recommendedPlanId = 'std-6m';
        recommendationTitle = '6 Months Fitness Plan';
        recommendationReason = 'Optimal foundation to build lean athletic muscle and structural density.';
      } else if (goal === 'stamina') {
        recommendedPlanId = 'crd-3m';
        recommendationTitle = '3 Months Cardio + Strength';
        recommendationReason = 'Elevate functional cardiovascular fitness, metabolic endurance, and core vitality.';
      } else {
        recommendedPlanId = 'crd-6m';
        recommendationTitle = '6 Months Cardio + Strength';
        recommendationReason = 'Targeted recomposition to burn residual body fat while preserving lean tissue.';
      }
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = 'text-amber-400';
      recommendedPlanId = 'crd-6m';
      recommendationTitle = '6 Months Cardio + Strength (Recommended)';
      recommendationReason = 'Combine steady-state & interval cardio on treadmills with compound lifts to trigger rapid fat burn.';
    } else {
      category = 'Obese Range';
      color = 'text-red-400';
      recommendedPlanId = 'pt-monthly';
      recommendationTitle = '1-on-1 Personal Training Coaching';
      recommendationReason = 'Professional trainer guidance is highly recommended for safe joint mechanics and strict nutrition control.';
    }
  }

  return (
    <section id="calculator" className="py-20 bg-[#080B0E] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-3">
            <Calculator className="w-4 h-4" />
            <span>Interactive Fitness Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            BMI & Fitness Plan Recommender
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Discover your Body Mass Index (BMI) and find the optimal training split tailored to your body metrics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0F141A] border border-neutral-800 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  <span>Height (cm)</span>
                  <span className="text-[#00E659] font-mono">{numHeight} cm</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="220"
                  value={numHeight}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#00E659]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  <span>Weight (kg)</span>
                  <span className="text-[#00E659] font-mono">{numWeight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={numWeight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#00E659]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Primary Fitness Goal
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('fatloss')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                      goal === 'fatloss'
                        ? 'bg-[#00E659] text-black shadow'
                        : 'bg-neutral-800 text-slate-300 hover:bg-neutral-700'
                    }`}
                  >
                    Fat Loss
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('muscle')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                      goal === 'muscle'
                        ? 'bg-[#00E659] text-black shadow'
                        : 'bg-neutral-800 text-slate-300 hover:bg-neutral-700'
                    }`}
                  >
                    Muscle Gain
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('stamina')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                      goal === 'stamina'
                        ? 'bg-[#00E659] text-black shadow'
                        : 'bg-neutral-800 text-slate-300 hover:bg-neutral-700'
                    }`}
                  >
                    Stamina
                  </button>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-black/60 rounded-2xl p-6 border border-neutral-800 text-center flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Calculated BMI</span>
                <div className="text-5xl font-display font-extrabold text-white my-2 tabular-nums">
                  {bmi > 0 ? bmi : '--'}
                </div>
                <p className={`text-sm font-semibold ${color}`}>
                  {category || 'Enter valid measurements'}
                </p>
              </div>

              <div className="my-5 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E659]">Recommended Program</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{recommendationTitle}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{recommendationReason}</p>
              </div>

              <button
                onClick={() => onSelectRecommendedPlan(recommendedPlanId)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Recommended Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
