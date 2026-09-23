import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, MessageCircle, Mail, Send, Calendar, User, Phone, Dumbbell, ShieldCheck, Sparkles } from 'lucide-react';
import { GYM_CONTACT, ALL_MEMBERSHIP_OPTIONS } from '../data/gymData.ts';
import { RegistrationFormData } from '../types.ts';

interface RegistrationFormProps {
  selectedPlanId?: string;
  onClearSelectedPlan?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedPlanId,
  onClearSelectedPlan,
}) => {
  // Tomorrow as default start date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = new Date().toISOString().split('T')[0];
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    membershipPlan: selectedPlanId || 'std-1m',
    preferredStartDate: tomorrowStr,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    data: RegistrationFormData;
    regId: string;
    timestamp: string;
  } | null>(null);

  // Sync selectedPlanId if changed externally
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, membershipPlan: selectedPlanId }));
    }
  }, [selectedPlanId]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    // Phone validation
    const phoneClean = formData.phoneNumber.replace(/[\s\-()]/g, '');
    if (!phoneClean) {
      errs.phoneNumber = 'Phone number is required';
    } else if (phoneClean.length < 8 || phoneClean.length > 15) {
      errs.phoneNumber = 'Please enter a valid phone number (8-15 digits)';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.membershipPlan) {
      errs.membershipPlan = 'Please select a membership plan';
    }

    if (!formData.preferredStartDate) {
      errs.preferredStartDate = 'Please select a preferred start date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate professional processing
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const regId = `INB-${new Date().getFullYear()}-${randomNum}`;
      const now = new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      setSubmittedData({
        data: { ...formData },
        regId,
        timestamp: now,
      });

      setIsSubmitting(false);
    }, 600);
  };

  const getPlanLabel = (id: string) => {
    const found = ALL_MEMBERSHIP_OPTIONS.find((p) => p.id === id);
    return found ? found.label : id;
  };

  // WhatsApp deep link formatting
  const getWhatsAppMessageUrl = () => {
    if (!submittedData) return GYM_CONTACT.whatsappLink;
    const text = `*New Gym Registration - ${GYM_CONTACT.gymName}*
Reference ID: ${submittedData.regId}
Name: ${submittedData.data.fullName}
Phone: ${submittedData.data.phoneNumber}
Email: ${submittedData.data.email}
Plan: ${getPlanLabel(submittedData.data.membershipPlan)}
Admission Fee: ₹${GYM_CONTACT.admissionFee} (one-time)
Start Date: ${submittedData.data.preferredStartDate}
Fitness Goals / Note: ${submittedData.data.message || 'General fitness & transformation'}`;

    return `https://wa.me/${GYM_CONTACT.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  // Mailto link formatting
  const getMailtoUrl = () => {
    if (!submittedData) return `mailto:${GYM_CONTACT.email}`;
    const subject = `New Gym Registration: ${submittedData.data.fullName} (${submittedData.regId})`;
    const body = `Hello Inbuilt Health Club Team,

I have submitted a membership registration:

- Registration ID: ${submittedData.regId}
- Full Name: ${submittedData.data.fullName}
- Phone: ${submittedData.data.phoneNumber}
- Email: ${submittedData.data.email}
- Selected Plan: ${getPlanLabel(submittedData.data.membershipPlan)}
- One-time Admission: ₹${GYM_CONTACT.admissionFee}
- Preferred Start Date: ${submittedData.data.preferredStartDate}
- Fitness Goals / Notes: ${submittedData.data.message || 'None provided'}

Looking forward to hearing from you.`;

    return `mailto:${GYM_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      membershipPlan: 'std-1m',
      preferredStartDate: tomorrowStr,
      message: '',
    });
    setErrors({});
    if (onClearSelectedPlan) onClearSelectedPlan();
  };

  return (
    <section id="register" className="py-20 lg:py-28 bg-[#07090C] border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E659]" />
            <span>Join The Club</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Membership Registration
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Fill in your details below to reserve your membership slot. Our team will verify your admission and welcome you to the gym.
          </p>
        </div>

        {/* Confirmation State */}
        {submittedData ? (
          <div className="rounded-3xl bg-[#0F141A] border-2 border-[#00E659] p-8 sm:p-10 shadow-2xl text-center motion-safe:animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#00E659]/10 border border-[#00E659] flex items-center justify-center mx-auto mb-5 text-[#00E659]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#00E659]">Registration Received</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1 mb-2">
              Welcome to {GYM_CONTACT.gymName}!
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Your registration has been created successfully. Your unique member reference ID is:
            </p>

            <div className="my-5 inline-block py-2 px-6 rounded-xl bg-neutral-900 border border-neutral-700 font-mono text-xl sm:text-2xl font-bold text-[#00E659] tracking-wider">
              {submittedData.regId}
            </div>

            {/* Summary Details */}
            <div className="text-left bg-black/60 rounded-2xl p-5 sm:p-6 border border-neutral-800 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto space-y-2 mb-8">
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-slate-400">Member Name:</span>
                <span className="font-semibold text-white">{submittedData.data.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-slate-400">Phone Number:</span>
                <span className="font-semibold text-white">{submittedData.data.phoneNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-slate-400">Email:</span>
                <span className="font-semibold text-white">{submittedData.data.email}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-slate-400">Selected Plan:</span>
                <span className="font-semibold text-[#00E659]">{getPlanLabel(submittedData.data.membershipPlan)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-slate-400">Admission Fee:</span>
                <span className="font-semibold text-white">₹{GYM_CONTACT.admissionFee} (One-time)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Preferred Start Date:</span>
                <span className="font-semibold text-white">{submittedData.data.preferredStartDate}</span>
              </div>
            </div>

            {/* Direct Connect Actions */}
            <div className="space-y-3 max-w-xl mx-auto">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] shadow-lg shadow-[#00E659]/20 flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getMailtoUrl()}
                  className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#00E659]" />
                  <span>Send via Email</span>
                </a>

                <button
                  onClick={resetForm}
                  className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 cursor-pointer"
                >
                  Register Another Member
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Main Input Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl bg-[#0F141A] border border-neutral-800 p-6 sm:p-10 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#00E659]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-white text-sm focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-neutral-700/80 focus:border-[#00E659]'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00E659]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 96335 38995"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, phoneNumber: e.target.value });
                    if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-white text-sm focus:outline-none transition-colors ${
                    errors.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-neutral-700/80 focus:border-[#00E659]'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00E659]" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-white text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-700/80 focus:border-[#00E659]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Preferred Start Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#00E659]" />
                  <span>Preferred Start Date *</span>
                </label>
                <input
                  type="date"
                  required
                  min={minDateStr}
                  value={formData.preferredStartDate}
                  onChange={(e) => {
                    setFormData({ ...formData, preferredStartDate: e.target.value });
                    if (errors.preferredStartDate) setErrors({ ...errors, preferredStartDate: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-white text-sm focus:outline-none transition-colors ${
                    errors.preferredStartDate ? 'border-red-500 focus:border-red-500' : 'border-neutral-700/80 focus:border-[#00E659]'
                  }`}
                />
                {errors.preferredStartDate && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.preferredStartDate}</span>
                  </p>
                )}
              </div>

              {/* Membership Plan Dropdown */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <Dumbbell className="w-3.5 h-3.5 text-[#00E659]" />
                  <span>Membership Plan *</span>
                </label>
                <select
                  value={formData.membershipPlan}
                  onChange={(e) => {
                    setFormData({ ...formData, membershipPlan: e.target.value });
                    if (errors.membershipPlan) setErrors({ ...errors, membershipPlan: undefined });
                  }}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-[#00E659] transition-colors"
                >
                  <optgroup label="Standard Strength Plans">
                    <option value="std-1m">1 Month Basic — ₹700 (1 Month)</option>
                    <option value="std-3m">3 Months Strength — ₹1,888 (3 Months)</option>
                    <option value="std-6m">6 Months Fitness — ₹3,888 (6 Months)</option>
                    <option value="std-1y">1 Year Champion — ₹7,888 (1 Year)</option>
                  </optgroup>
                  <optgroup label="Including Cardio Plans">
                    <option value="crd-1m">1 Month Cardio + Strength — ₹900 (1 Month)</option>
                    <option value="crd-3m">3 Months Cardio + Strength — ₹2,222 (3 Months)</option>
                    <option value="crd-6m">6 Months Cardio + Strength — ₹4,522 (6 Months)</option>
                    <option value="crd-1y">1 Year Elite Cardio + Strength — ₹9,222 (1 Year)</option>
                  </optgroup>
                  <optgroup label="Personal Coaching">
                    <option value="pt-monthly">1-on-1 Personal Training — ₹5,000 (Monthly Coaching)</option>
                  </optgroup>
                </select>
                <p className="mt-1.5 text-xs text-slate-400">
                  Note: A one-time ₹{GYM_CONTACT.admissionFee} admission fee applies for all newly joining members.
                </p>
              </div>

              {/* Message / Fitness Goals */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Message / Fitness Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Weight loss of 8kg, muscle gain, stamina improvement, or preferred morning/evening training hours..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white text-sm focus:outline-none focus:border-[#00E659] transition-colors"
                />
              </div>

            </div>

            {/* Submission CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00E659] shrink-0" />
                <span>Zero spam. Direct WhatsApp & phone confirmation with gym staff.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] shadow-lg shadow-[#00E659]/25 hover:shadow-[#00E659]/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Processing Registration...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
