import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

interface FloatingMobileBarProps {
  onJoinClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onJoinClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0D11]/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={`tel:${GYM_CONTACT.whatsappNumber}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-xs font-bold active:bg-neutral-800"
        aria-label="Call Gym"
      >
        <Phone className="w-3.5 h-3.5 text-[#00E659]" />
        <span>Call</span>
      </a>

      <a
        href={GYM_CONTACT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white text-xs font-bold active:bg-neutral-800"
        aria-label="WhatsApp Gym"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#00E659]" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onJoinClick}
        className="flex-1.5 flex items-center justify-center gap-1 py-2.5 rounded-lg bg-[#00E659] text-black text-xs font-extrabold uppercase tracking-wider active:bg-[#00c94d]"
      >
        <span>Join Now</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};
