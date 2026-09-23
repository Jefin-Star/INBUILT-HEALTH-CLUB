import React, { useState } from 'react';
import { Dumbbell, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';
import { IMAGES } from '../assets/images.ts';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080B0E]/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single Brand element */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E659]"
          aria-label="Inbuilt Health Club Home"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#00E659]/60 bg-black flex items-center justify-center shrink-0 group-hover:border-[#00E659] shadow-sm shadow-[#00E659]/10 transition-colors">
            <img
              src={IMAGES.logoBadge}
              alt="Inbuilt Gym Spartan Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white leading-none group-hover:text-[#00E659] transition-colors">
              INBUILT
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#00E659] uppercase leading-tight">
              HEALTH CLUB
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:text-[#00E659]"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('plans')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:text-[#00E659]"
          >
            Membership Plans
          </button>
          <button
            onClick={() => handleNavClick('facilities')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:text-[#00E659]"
          >
            Facilities
          </button>
          <button
            onClick={() => handleNavClick('calculator')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:text-[#00E659]"
          >
            BMI Tool
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:text-[#00E659]"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={GYM_CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/60 rounded-lg transition-colors whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#00E659]" />
            <span>Chat</span>
          </a>

          <button
            onClick={() => handleNavClick('register')}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#00E659] hover:bg-[#00c94d] rounded-lg shadow-sm hover:shadow-[#00E659]/30 hover:shadow-lg transition-all transform active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Join Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('register')}
            className="px-3 py-1.5 text-xs font-bold text-black bg-[#00E659] rounded-md uppercase tracking-wider"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#0A0E12]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-2 text-sm font-medium">
            <button
              onClick={() => handleNavClick('about')}
              className="text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-neutral-800 hover:text-white"
            >
              About Our Gym
            </button>
            <button
              onClick={() => handleNavClick('plans')}
              className="text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-neutral-800 hover:text-white"
            >
              Membership Plans & Pricing
            </button>
            <button
              onClick={() => handleNavClick('facilities')}
              className="text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-neutral-800 hover:text-white"
            >
              Gym Facilities
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-neutral-800 hover:text-white"
            >
              BMI & Goal Calculator
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-neutral-800 hover:text-white"
            >
              Contact & Location
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('register')}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-[#00E659] rounded-lg"
            >
              Register / Join Now
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={GYM_CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-neutral-900 border border-neutral-800 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#00E659]" />
                WhatsApp
              </a>
              <a
                href={`tel:${GYM_CONTACT.whatsappNumber}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-neutral-900 border border-neutral-800 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#00E659]" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
