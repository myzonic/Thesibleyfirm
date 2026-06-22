import { motion } from 'motion/react';
import { founderImage } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-luxury-dark border-t border-brand-gold/5 relative overflow-hidden">
      {/* Decorative background subtle gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-brand-cream font-medium block">
              FOUNDED ON RELATIONSHIPS.
            </span>
            <div className="flex items-center space-x-4">
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-brand-gold font-bold">
                DRIVEN BY RESULTS.
              </span>
            </div>
            <div className="w-20 h-[2px] bg-brand-gold mt-6" />
          </div>

          <p className="text-brand-cream font-sans text-sm md:text-base leading-relaxed font-normal tracking-wide max-w-xl">
            For over two decades, Christopher Sibley and The Sibley Firm have delivered excellence at the intersection of entertainment, media, and culture. We don’t just generate public relations buzz—we build enduring, generational legacies that withstand the test of time.
          </p>
          
          <p className="text-brand-cream/90 font-sans text-sm md:text-base leading-relaxed font-normal tracking-wide max-w-xl">
            Our deep Los Angeles relationships enable us to navigate high-society networks, broker unprecedented corporate brand deals, and craft elegant narratives that resonate on a global scale. We elevate culture because we live it.
          </p>

          {/* Calligraphic Signature Block */}
          <div className="pt-6 flex flex-col space-y-3">
            <span className="font-script text-5xl text-brand-gold italic select-none transform -rotate-2 origin-left">
              Christopher Sibley
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-xs tracking-[0.25em] font-bold text-brand-cream">
                CHRISTOPHER SIBLEY
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] text-brand-gold/70 font-medium">
                FOUNDER & CEO
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Premium Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-6 flex justify-center relative"
        >
          <div className="relative w-full max-w-md">
            {/* Background layered collage elements resembling LA */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/10 rounded-lg pointer-events-none border border-brand-gold/10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/5 rounded-lg pointer-events-none border border-brand-gold/5" />

            {/* Main Founder Image Container with high contrast border */}
            <div className="relative z-10 border border-brand-gold/40 p-2 bg-black/60 backdrop-blur-sm rounded-none overflow-hidden group hover:border-brand-gold transition-colors duration-500">
              <img
                src={founderImage}
                alt="Christopher Sibley - Founder & CEO"
                className="w-full h-auto object-cover grayscale-0 brightness-100 transition-all duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
              />

              {/* Hollywood Hollywood/Palm background overlay texture */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* "25+ Years of Industry Excellence" Accent Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 md:-right-12 z-20 bg-black/90 border border-brand-gold/35 px-6 py-8 shadow-2xl max-w-[180px]"
            >
              <div className="text-center">
                <span className="font-serif text-5xl md:text-6xl font-normal text-brand-gold block tracking-tighter">
                  25+
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-brand-cream/80 block mt-2 leading-relaxed">
                  YEARS OF INDUSTRY EXCELLENCE
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
