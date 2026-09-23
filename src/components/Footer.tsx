import React from 'react';
import { Dumbbell, MessageCircle, Mail, Instagram, ArrowUp } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';
import { IMAGES } from '../assets/images.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050709] border-t border-neutral-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#00E659]/60 bg-black flex items-center justify-center shrink-0 p-0.5">
                <img
                  src={IMAGES.logoBadge}
                  alt="Inbuilt Gym Spartan Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg tracking-wider text-white block leading-none">
                  INBUILT HEALTH CLUB
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-[#00E659] uppercase">
                  {GYM_CONTACT.subName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              &ldquo;{GYM_CONTACT.tagline}&rdquo;
              <br />
              Premier unisex fitness facility providing Olympic strength training, high-end cardio, and certified 1-on-1 personal coaching.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#00E659] flex items-center justify-center text-slate-300 hover:text-[#00E659] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#00E659] flex items-center justify-center text-slate-300 hover:text-[#00E659] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${GYM_CONTACT.email}`}
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#00E659] flex items-center justify-center text-slate-300 hover:text-[#00E659] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Gym
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plans')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Membership Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('facilities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gym Facilities & Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  BMI & Goal Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('register')}
                  className="hover:text-white transition-colors cursor-pointer text-[#00E659]"
                >
                  Join / Register Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Timings</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <strong className="text-slate-300">WhatsApp / Call:</strong> {GYM_CONTACT.whatsappDisplay}
              </p>
              <p>
                <strong className="text-slate-300">Email:</strong> {GYM_CONTACT.email}
              </p>
              <p>
                <strong className="text-slate-300">Instagram:</strong> {GYM_CONTACT.instagramHandle}
              </p>
              <p>
                <strong className="text-slate-300">Hours:</strong> Mon–Sat {GYM_CONTACT.openingHours.weekdays}
              </p>
              <p className="text-slate-400">
                <strong className="text-slate-300">Sunday:</strong> <span className="text-rose-400 font-medium">Closed (Off)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {GYM_CONTACT.gymName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
