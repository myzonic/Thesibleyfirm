import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { PRESS_ITEMS, PressItem } from '../data';

interface FeaturedInSectionProps {
  onPressSelect: (press: PressItem) => void;
}

export default function FeaturedInSection({ onPressSelect }: FeaturedInSectionProps) {
  return (
    <section id="press" className="py-24 md:py-32 bg-luxury-dark border-t border-brand-gold/5 relative">
      {/* Decorative center light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/2 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12 space-y-2">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-gold font-bold uppercase block">
            FEATURED IN
          </span>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
        </div>

        {/* Publication Logos Row - High Contrast, custom typographic representation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center mb-16 opacity-95 hover:opacity-100 transition-opacity duration-500">
          <span className="font-serif text-lg md:text-xl font-bold tracking-[0.25em] text-brand-cream hover:text-brand-gold transition-colors duration-300">
            VOGUE
          </span>
          <span className="font-serif text-lg md:text-xl font-black italic tracking-[0.1em] text-brand-cream hover:text-brand-gold transition-colors duration-300">
            VARIETY
          </span>
          <span className="font-sans text-sm md:text-base font-extrabold tracking-[0.05em] uppercase text-brand-cream hover:text-brand-gold transition-colors duration-300 antialiased">
            The Hollywood Reporter
          </span>
          <span className="font-serif text-lg md:text-xl font-black tracking-normal text-brand-cream hover:text-brand-gold transition-colors duration-300">
            Forbes
          </span>
          <span className="font-sans text-lg md:text-xl font-black tracking-[0.15em] text-brand-cream hover:text-brand-gold transition-colors duration-300">
            ESSENCE
          </span>
          <span className="font-sans text-md md:text-lg font-black tracking-tight text-brand-cream hover:text-brand-gold transition-colors duration-300 italic">
            billboard
          </span>
          <span className="font-serif text-[10px] md:text-xs tracking-[0.2em] font-medium text-brand-cream hover:text-brand-gold transition-colors duration-300 uppercase">
            Rolling Stone
          </span>
        </div>

        {/* Magazine Covers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {PRESS_ITEMS.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -12, scale: 1.04, boxShadow: '0 20px 40px rgba(197,168,128,0.15)' }}
                transition={{ 
                  y: { type: 'spring', stiffness: 300, damping: 20 },
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.6, delay: index * 0.05 }
                }}
                onClick={() => onPressSelect(item)}
                className="group relative h-[380px] bg-black overflow-hidden border border-brand-cream/20 hover:border-brand-gold cursor-pointer transition-all duration-450"
              >
                {/* Magazine Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.fullImage}
                    alt={item.coverTitle}
                    className="w-full h-full object-cover grayscale-0 brightness-100 contrast-100 group-hover:scale-105 group-hover:brightness-75 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                </div>

                {/* Magazine Branding Overlay Header (Top) */}
                <div className="absolute top-0 inset-x-0 p-4 z-20 flex flex-col justify-start items-center border-b border-white/10 bg-gradient-to-b from-black/90 to-transparent">
                  <span className="font-serif text-[12px] font-bold tracking-[0.3em] text-white select-none">
                    {item.logo}
                  </span>
                  <span className="text-[7px] text-brand-gold tracking-widest mt-1 uppercase font-bold">SPECIAL ISSUE</span>
                </div>

                {/* Magazine Content Overlay (Bottom/Center) */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end h-3/5 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <span className="text-brand-gold text-[9px] font-bold tracking-[0.2em] font-sans block mb-1 uppercase">
                    {item.featuredTitle}
                  </span>
                  
                  <h4 className="font-serif text-sm leading-snug text-white tracking-wide group-hover:text-brand-gold transition-colors duration-300 font-bold max-h-16 overflow-hidden">
                    {item.coverTitle}
                  </h4>
                  
                  <p className="text-brand-cream/90 text-[10px] font-sans font-normal tracking-wide mt-2 line-clamp-2">
                    {item.coverSubtitle}
                  </p>

                  {/* Micro action */}
                  <div className="mt-4 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-gold text-[9px] tracking-widest">
                    <BookOpen className="w-3 h-3 stroke-[1.5]" />
                    <span>READ ARTICLE</span>
                  </div>
                </div>

                {/* Cover Outer Aesthetic Outline Overlay on hovered */}
                <div className="absolute inset-2 border border-brand-gold/0 group-hover:border-brand-gold/30 pointer-events-none transition-all duration-500 z-30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
