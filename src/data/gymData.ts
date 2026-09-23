import { ContactInfo, MembershipPlan } from '../types.ts';

/**
 * Easily update prices, phone numbers, emails, and gym details here.
 */
export const GYM_CONTACT: ContactInfo = {
  gymName: "Inbuilt Health Club",
  subName: "UNISEX FITNESS CLUB",
  tagline: "Build Your Strength. Transform Your Life.",
  admissionFee: 100,
  whatsappNumber: "+919633538995",
  whatsappDisplay: "+91 96335 38995",
  whatsappLink: "https://wa.me/919633538995",
  email: "Vaishakhs2010@gmail.com",
  instagramUrl: "https://www.instagram.com/inbuilt.fitness?stkn=MTF5eWhoaTYyOGZvYw==",
  instagramHandle: "@inbuilt.fitness",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.0975943425624!2d76.96944940000002!3d8.5940339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9003ebfff13%3A0x6aa71b0ddcaa5d0e!2sInbuilt%20health%20club!5e1!3m2!1sen!2sin!4v1790144855419!5m2!1sen!2sin",
  addressText: "Inbuilt Health Club, Near Attingal / Thiruvananthapuram, Kerala, India",
  openingHours: {
    weekdays: "5:30 AM – 10:00 PM",
    saturday: "5:30 AM – 9:30 PM",
    sunday: "Closed (Off)",
  },
};

export const STANDARD_PLANS: MembershipPlan[] = [
  {
    id: "std-1m",
    name: "1 Month Basic",
    duration: "1 Month",
    price: 700,
    priceFormatted: "₹700",
    category: "standard",
    billingCycle: "per month",
    features: [
      "Full access to Free Weights & Machines",
      "Dumbbell & Barbell Lifting Zone",
      "Locker & Changing Room access",
      "General Workout Guidance",
      "Unisex Environment",
    ],
  },
  {
    id: "std-3m",
    name: "3 Months Strength",
    duration: "3 Months",
    price: 1888,
    priceFormatted: "₹1,888",
    category: "standard",
    billingCycle: "for 3 months",
    savings: "Save ₹212 vs monthly",
    features: [
      "Full access to Free Weights & Machines",
      "Custom Weight Training Split",
      "Posture & Form Assistance",
      "Locker & Changing Room access",
      "Beginner Orientation Routine",
    ],
  },
  {
    id: "std-6m",
    name: "6 Months Fitness",
    duration: "6 Months",
    price: 3888,
    priceFormatted: "₹3,888",
    category: "standard",
    billingCycle: "for 6 months",
    savings: "Save ₹312 vs monthly",
    popular: true,
    features: [
      "Full Gym Floor Access",
      "Monthly Fitness Assessment",
      "Diet & Nutrition Guidelines",
      "Locker & Shower Access",
      "Progressive Overload Tracking",
    ],
  },
  {
    id: "std-1y",
    name: "1 Year Champion",
    duration: "1 Year",
    price: 7888,
    priceFormatted: "₹7,888",
    category: "standard",
    billingCycle: "annual plan",
    savings: "Best Value (₹657/mo)",
    features: [
      "365 Days Unlimited Access",
      "Complimentary Goal Planning",
      "Quarterly Physique Re-assessment",
      "Priority Equipment Booking",
      "Guest Pass privilege (1/year)",
    ],
  },
];

export const CARDIO_PLANS: MembershipPlan[] = [
  {
    id: "crd-1m",
    name: "1 Month Cardio + Strength",
    duration: "1 Month",
    price: 900,
    priceFormatted: "₹900",
    category: "cardio",
    billingCycle: "per month",
    features: [
      "Full Gym + Dedicated Cardio Floor",
      "Commercial Treadmills & Cross Trainers",
      "Assault Air Bikes & Rowing",
      "Fat Burning & Stamina Guidance",
      "Locker & Changing Room access",
    ],
  },
  {
    id: "crd-3m",
    name: "3 Months Cardio + Strength",
    duration: "3 Months",
    price: 2222,
    priceFormatted: "₹2,222",
    category: "cardio",
    billingCycle: "for 3 months",
    savings: "Save ₹478 vs monthly",
    features: [
      "Full Strength & Cardio Access",
      "Target Heart-rate Cardio Plan",
      "Metabolic Conditioning Routines",
      "Locker & Changing Room access",
      "Stamina & Endurance Tracking",
    ],
  },
  {
    id: "crd-6m",
    name: "6 Months Cardio + Strength",
    duration: "6 Months",
    price: 4522,
    priceFormatted: "₹4,522",
    category: "cardio",
    billingCycle: "for 6 months",
    popular: true,
    savings: "Save ₹878 vs monthly",
    features: [
      "Full Gym & Cardio Floor Access",
      "High Intensity Interval Training (HIIT) Guidance",
      "Personalized Diet Blueprint",
      "Locker & Shower Access",
      "Body Fat & Lean Mass Metric Checks",
    ],
  },
  {
    id: "crd-1y",
    name: "1 Year Elite (Cardio + Strength)",
    duration: "1 Year",
    price: 9222,
    priceFormatted: "₹9,222",
    category: "cardio",
    billingCycle: "annual plan",
    savings: "Ultimate Transformation (₹768/mo)",
    features: [
      "365 Days Total Club Access",
      "Full Cardio & Strength Facilities",
      "Complete Body Transformation Blueprint",
      "Custom Macro & Nutrition Guide",
      "Exclusive Club Member Perks",
    ],
  },
];

export const PERSONAL_TRAINING_PLAN: MembershipPlan = {
  id: "pt-monthly",
  name: "1-on-1 Personal Training",
  duration: "Monthly Coaching",
  price: 5000,
  priceFormatted: "₹5,000",
  category: "pt",
  billingCycle: "per month",
  popular: true,
  features: [
    "Dedicated Certified Fitness Coach",
    "Tailored 1-on-1 Training Sessions",
    "Personalized Meal & Calorie Nutrition Plan",
    "Weekly Body Composition & Weight Analysis",
    "Continuous Form Correction & Injury Prevention",
    "Direct Trainer WhatsApp Support",
  ],
};

export const ALL_MEMBERSHIP_OPTIONS = [
  ...STANDARD_PLANS.map((p) => ({ id: p.id, label: `${p.name} — ${p.priceFormatted} (${p.duration})` })),
  ...CARDIO_PLANS.map((p) => ({ id: p.id, label: `${p.name} — ${p.priceFormatted} (${p.duration})` })),
  { id: PERSONAL_TRAINING_PLAN.id, label: `${PERSONAL_TRAINING_PLAN.name} — ${PERSONAL_TRAINING_PLAN.priceFormatted} (${PERSONAL_TRAINING_PLAN.duration})` },
];

export const FAQS = [
  {
    question: "Is there an admission fee for new members?",
    answer: "Yes, there is a minimal one-time admission fee of ₹100 for all newly registered gym members, which covers initial registration and member onboarding.",
  },
  {
    question: "Is Inbuilt Health Club unisex and beginner friendly?",
    answer: "Yes! Inbuilt Health Club is 100% unisex and designed to welcome everyone — from absolute beginners stepping into a gym for the first time to experienced powerlifters and athletes.",
  },
  {
    question: "What is the difference between the standard plan and the cardio plan?",
    answer: "The Standard plan covers our complete weight training zone, free weights, dumbbells, barbells, power racks, and resistance machines. The Cardio plan adds unrestricted access to commercial motorized treadmills, cross-trainers, assault bikes, and stamina training equipment.",
  },
  {
    question: "How does the Personal Training (₹5,000) program work?",
    answer: "Our Personal Training package gives you dedicated 1-on-1 training with certified coaches. Your trainer will assess your physical baseline, create custom strength & conditioning protocols, build a target nutrition guide, monitor daily form, and ensure you achieve your target body goals safely.",
  },
  {
    question: "What should I bring for my first workout session?",
    answer: "Please bring clean indoor athletic shoes, comfortable workout clothes, a water bottle, and a small hand towel. Lockers and clean changing areas are provided for your convenience.",
  },
  {
    question: "What are the gym operating hours, and is Sunday open?",
    answer: "Inbuilt Health Club is open Monday through Friday from 5:30 AM to 10:00 PM, and Saturdays from 5:30 AM to 9:30 PM. Sundays are completely OFF (Closed).",
  },
  {
    question: "Can I register online and start later?",
    answer: "Yes! When submitting the registration form, you can select your preferred start date. Once submitted, our team will confirm your slot via WhatsApp or call.",
  },
];
