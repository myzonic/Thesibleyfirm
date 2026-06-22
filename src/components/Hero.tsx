import { motion } from 'motion/react';
import { heroImage } from '../data';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-luxury-dark overflow-hidden flex items-center pt-20">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury LA Penthouse"
          className="w-full h-full object-cover object-center opacity-65 brightness-[0.9] transform scale-100 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/95 via-luxury-dark/60 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-luxury-dark to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
          {/* Subtitle Accent */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-gold text-xs md:text-sm font-bold tracking-[0.3em] font-sans"
          >
            PUBLIC RELATIONS. TALENT BOOKING. CULTURAL IMPACT.
          </motion.p>

          {/* Majestic Typography Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            ELEVATING <br />
            <span className="text-brand-gold italic font-light">CULTURE.</span> <br />
            AMPLIFYING <br />
            <span className="text-brand-gold italic font-light">LEGACIES.</span>
          </motion.h1>

          {/* Subheading / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-brand-cream max-w-xl font-sans text-sm md:text-base leading-relaxed font-normal tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            The Sibley Firm is a premier entertainment public relations company based in Los Angeles, shaping stories, building brands, and creating unforgettable moments.
          </motion.p>

          {/* Discover Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex"
          >
            <button
              onClick={onDiscoverClick}
              className="group border border-brand-cream/20 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark font-sans text-xs tracking-[0.25em] font-medium px-8 py-4 transition-all duration-350 flex items-center space-x-3 cursor-pointer"
            >
              <span>DISCOVER OUR WORK</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Circular Seal - Interactive & CSS Animated */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
        className="absolute bottom-12 right-6 md:right-16 z-20 group cursor-pointer"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-full border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300">
          {/* Inner circle logo */}
          <div className="text-center flex flex-col justify-center items-center">
            <span className="font-serif text-[10px] tracking-[0.2em] text-brand-gold/60">THE SIBLEY FIRM</span>
            <span className="font-serif text-lg md:text-xl font-bold tracking-[0.1em] text-brand-gold">TSF</span>
            <span className="font-sans text-[8px] tracking-wider text-brand-gold/40 mt-0.5">EST. 1998</span>
          </div>

          {/* Outer Rotating Text SVG */}
          <div className="absolute inset-2 pointer-events-none animate-[spin_20s_linear_infinite] group-hover:animate-[spin_10s_linear_infinite] transition-all duration-550">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="seal-path"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                className="fill-none stroke-none"
              />
              <text className="font-sans text-[6px] tracking-[0.43em] fill-brand-cream/35 select-none">
                <textPath href="#seal-path" startOffset="0%">
                  ELEVATING CULTURE • AMPLIFYING LEGACIES —
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
