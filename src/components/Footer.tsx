import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-luxury-dark border-t border-brand-gold/10 overflow-hidden pt-24 pb-12">
      {/* Absolute faint background text TSF */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.02] transform translate-y-12 translate-x-12">
        <span className="font-serif text-[24vw] leading-none text-brand-gold font-bold uppercase tracking-tighter">
          TSF
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Part: Majestic CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-brand-gold/10">
          
          {/* Left Column: Big typography */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-brand-cream">
              LET'S CREATE <br />
              <span className="text-brand-gold italic font-light">WHAT'S NEXT.</span>
            </h2>
          </div>

          {/* Right Column: CTA Description & Button */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            <p className="text-brand-cream/80 font-sans text-sm md:text-base leading-relaxed font-light tracking-wide">
              Partner with a team that understands culture, connects brands with influential worlds, and delivers extraordinary news-breaking results. Contact us to schedule a private consultation.
            </p>

            <div>
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center space-x-3 bg-brand-gold hover:bg-brand-cream text-luxury-dark font-sans text-xs tracking-[0.25em] font-semibold px-8 py-4 uppercase transition-all duration-350 cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Part: Contact Info & Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-b border-brand-gold/5 text-sm">
          
          {/* LA Office info */}
          <div className="space-y-4 flex flex-col">
            <div className="flex items-center space-x-2 text-brand-gold">
              <MapPin className="w-4 h-4 stroke-[1.5]" />
              <span className="font-sans text-xs tracking-[0.2em] font-bold">LOS ANGELES OFFICE</span>
            </div>
            <p className="text-brand-cream/60 font-sans font-light tracking-wide leading-relaxed">
              9000 Sunset Boulevard, Suite 1200<br />
              West Hollywood, CA 90069<br />
              United States
            </p>
          </div>

          {/* Electronic Contact details */}
          <div className="space-y-4 flex flex-col">
            <div className="flex items-center space-x-2 text-brand-gold">
              <Mail className="w-4 h-4 stroke-[1.5]" />
              <span className="font-sans text-xs tracking-[0.2em] font-bold">INQUIRIES</span>
            </div>
            <div className="flex flex-col space-y-1.5 font-sans font-light tracking-wide text-brand-cream/60">
              <a href="mailto:inquiries@thesibleyfirm.la" className="hover:text-brand-gold transition-colors duration-300">
                inquiries@thesibleyfirm.la
              </a>
              <a href="mailto:booking@thesibleyfirm.la" className="hover:text-brand-gold transition-colors duration-300">
                booking@thesibleyfirm.la
              </a>
            </div>
          </div>

          {/* Social media details */}
          <div className="space-y-4 flex flex-col">
            <div className="flex items-center space-x-2 text-brand-gold">
              <Globe className="w-4 h-4 stroke-[1.5]" />
              <span className="font-sans text-xs tracking-[0.2em] font-bold">FOLLOW US</span>
            </div>
            <div className="flex flex-wrap gap-4 font-sans font-light tracking-[0.15em] text-xs text-brand-cream/60">
              <a href="#" className="hover:text-brand-gold transition-colors duration-300">INSTAGRAM</a>
              <a href="#" className="hover:text-brand-gold transition-colors duration-300 font-bold">LINKEDIN</a>
              <a href="#" className="hover:text-brand-gold transition-colors duration-300">TWITTER</a>
            </div>
          </div>

        </div>

        {/* Bottom Part: Copyright and Local Time */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] sm:text-xs text-brand-cream/40 font-sans font-light tracking-widest gap-6 border-t border-brand-gold/5 mt-8">
          <div className="flex items-center space-x-3">
            <Logo size="sm" className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
            <span>• © {currentYear} ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase">LOS ANGELES, CA • LOCAL TIME: PST</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
