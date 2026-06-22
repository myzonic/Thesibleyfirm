import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-luxury-dark border-t border-brand-gold/5 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/[0.015] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Giant quote mark and titles */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-center">
            <span className="font-sans text-xs tracking-[0.3em] text-brand-gold font-bold uppercase block">
              CLIENT TESTIMONIALS
            </span>
            <div className="w-12 h-[1px] bg-brand-gold" />
            
            {/* Giant Graphic Double Quote and Text */}
            <div className="flex items-start space-x-1">
              <Quote className="w-16 h-16 text-brand-gold/25 stroke-[1.25]" />
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-brand-cream max-w-xs pt-4">
                WHAT THEIR LEADERS SAY
              </h2>
            </div>

            {/* Slider navigation buttons displayed in the layout */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-brand-gold/20 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-brand-gold/20 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Block: Interactive active sliding and grid cards */}
          <div className="lg:col-span-8">
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-black/40 border border-brand-gold/15 hover:border-brand-gold/45 p-8 flex flex-col justify-between h-80 transition-all duration-400 group"
                >
                  <p className="text-brand-cream/80 text-sm italic leading-relaxed font-light font-sans tracking-wide">
                    "{t.quote}"
                  </p>
                  
                  <div className="space-y-1.5 pt-6 border-t border-brand-gold/10 group-hover:border-brand-gold/30 transition-colors duration-450">
                    <h5 className="font-serif text-xs font-bold tracking-[0.15em] text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
                      {t.author}
                    </h5>
                    <p className="text-brand-gold/70 text-[9px] tracking-[0.1em] font-sans font-medium uppercase">
                      {t.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile testomionial layout (Interactive single viewport slider) */}
            <div className="block lg:hidden min-h-[260px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/50 border border-brand-gold/20 p-8 flex flex-col justify-between min-h-[240px]"
                >
                  <p className="text-brand-cream/80 text-sm italic leading-relaxed font-light font-sans">
                    "{TESTIMONIALS[activeIndex].quote}"
                  </p>
                  
                  <div className="space-y-1 pt-6 border-t border-brand-gold/10 mt-6">
                    <h5 className="font-serif text-xs font-semibold tracking-widest text-brand-gold">
                      {TESTIMONIALS[activeIndex].author}
                    </h5>
                    <p className="text-brand-cream/40 text-[9px] tracking-widest font-sans uppercase">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
