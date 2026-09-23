import React from 'react';
import { MessageCircle, Mail, Instagram, Phone, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#080B0E] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E659] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E659]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Contact & Gym Location
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Visit us in person or reach out directly on WhatsApp, Instagram, or Email. Our trainers and management are ready to welcome you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Contact Details & Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={GYM_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0F141A] border border-neutral-800 hover:border-[#00E659]/60 hover:bg-[#121820] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-[#00E659] group-hover:scale-110 transition-transform shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00E659] transition-colors" />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 truncate group-hover:text-[#00E659] transition-colors">
                  {GYM_CONTACT.whatsappDisplay}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Instant response for admissions, timings & queries.
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GYM_CONTACT.email}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0F141A] border border-neutral-800 hover:border-[#00E659]/60 hover:bg-[#121820] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-[#00E659] group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00E659] transition-colors" />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 truncate group-hover:text-[#00E659] transition-colors">
                  {GYM_CONTACT.email}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Official correspondence & membership inquiries.
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={GYM_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0F141A] border border-neutral-800 hover:border-[#00E659]/60 hover:bg-[#121820] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-[#00E659] group-hover:scale-110 transition-transform shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00E659] transition-colors" />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 truncate group-hover:text-[#00E659] transition-colors">
                  {GYM_CONTACT.instagramHandle}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Follow for daily workouts, member spotlights & updates.
                </p>
              </div>
            </a>

            {/* Direct Call / Phone Card */}
            <a
              href={`tel:${GYM_CONTACT.whatsappNumber}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0F141A] border border-neutral-800 hover:border-[#00E659]/60 hover:bg-[#121820] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-[#00E659] group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Support</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00E659] transition-colors" />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 truncate group-hover:text-[#00E659] transition-colors">
                  {GYM_CONTACT.whatsappDisplay}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Call directly during operating hours.
                </p>
              </div>
            </a>

            {/* Operating Hours Box */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00E659] mb-3">
                <Clock className="w-4 h-4" />
                <span>Gym Operating Hours</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monday – Friday:</span>
                  <span className="font-semibold text-white">{GYM_CONTACT.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Saturday:</span>
                  <span className="font-semibold text-white">{GYM_CONTACT.openingHours.saturday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Sunday:</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    Closed (Off)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Google Maps Embed (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-3xl bg-[#0F141A] border border-neutral-800 overflow-hidden flex-1 flex flex-col shadow-xl">
              
              <div className="p-5 border-b border-neutral-800 bg-neutral-900/50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#00E659]" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">Inbuilt Health Club</h4>
                    <p className="text-xs text-slate-400">Gym Location & Directions</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Inbuilt+health+club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[380px] sm:h-[440px] bg-neutral-950">
                <iframe
                  src={GYM_CONTACT.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Inbuilt Health Club Google Maps Location"
                  className="w-full h-full filter contrast-105"
                />
              </div>

              <div className="p-4 bg-neutral-900/60 border-t border-neutral-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Free parking available on site. Walk-ins and gym tours welcome.</span>
                {new Date().getDay() === 0 ? (
                  <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    Closed Today (Sunday)
                  </span>
                ) : (
                  <span className="text-[#00E659] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E659]" />
                    Open Today
                  </span>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
