import { motion } from 'motion/react';
import { Star, Users, Calendar, Megaphone, Globe, Play, Briefcase, MapPin, ArrowLeft, Mail } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, typeof Star> = {
  Star,
  Users,
  Calendar,
  Megaphone,
  Globe,
  Play,
  Briefcase,
  MapPin,
};

interface ServicesPageProps {
  onBackToHome: () => void;
  onOpenContact: (interest: string) => void;
}

export default function ServicesPage({ onBackToHome, onOpenContact }: ServicesPageProps) {
  return (
    <div className="pt-32 pb-24 md:pb-32 bg-[#030303] relative min-h-screen">
      {/* Aesthetic abstract visual lines / background glows */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-brand-gold/10 via-transparent to-brand-gold/5 pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-brand-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-[#53C9F6]/[0.015] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Breadcrumb & Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 mt-4"
        >
          <button 
            type="button"
            onClick={onBackToHome}
            className="group inline-flex items-center space-x-3 text-xs md:text-sm tracking-[0.25em] font-sans font-medium text-brand-gold hover:text-brand-cream transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300 stroke-[1.5]" />
            <span>BACK TO HOME</span>
          </button>
        </motion.div>

        {/* Header Section */}
        <div className="text-center md:text-left mb-20 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-xs md:text-sm tracking-[0.35em] text-brand-gold font-bold uppercase block"
          >
            OUR VISIONS & SOLUTIONS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl tracking-tight text-white uppercase font-light leading-none"
          >
            EXPERTISE <span className="font-serif italic font-normal text-brand-gold">UNRIVALED.</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-brand-gold mx-auto md:mx-0" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-brand-cream/80 text-sm md:text-base font-sans font-light leading-relaxed pt-2"
          >
            We don’t just manage accounts; we construct legacies. Explore the comprehensive suite of non-traditional campaigns and elite media capabilities designed to shape high-culture impact.
          </motion.p>
        </div>

        {/* Detailed Services Listing */}
        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Star;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
              >
                {/* Visual Accent/Numbering Column */}
                <div className={`lg:col-span-1 flex items-baseline justify-between lg:flex-col lg:justify-start lg:space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="font-serif text-3xl md:text-4xl text-brand-gold/30 font-extrabold tracking-widest font-mono">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-[1px] bg-brand-gold/20 hidden lg:block" />
                  <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center bg-black hover:border-brand-gold text-brand-gold transition-colors duration-500 shadow-md">
                    <IconComponent className="w-7 h-7 stroke-[1.25]" />
                  </div>
                </div>

                {/* Main Text & Detailed Block */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-3'}`}>
                  <h2 className="font-serif text-2xl md:text-3.5xl tracking-widest text-brand-cream font-bold uppercase">
                    {service.title}
                  </h2>
                  <div className="w-full h-[1px] bg-gradient-to-r from-brand-gold/30 to-transparent" />
                  <p className="text-brand-cream/85 font-sans text-sm md:text-base leading-relaxed tracking-wide font-light whitespace-pre-line">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenContact(service.id)}
                      className="inline-flex items-center space-x-3 border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold hover:text-luxury-dark text-brand-gold px-6 py-3 font-sans text-[11px] tracking-[0.2em] font-semibold transition-all duration-350 cursor-pointer"
                    >
                      <span>INQUIRE FOR {service.title}</span>
                      <ArrowLeft className="w-4 h-4 rotate-180 stroke-[2]" />
                    </button>
                  </div>
                </div>

                {/* Capabilities Side-Panel Column */}
                <div className={`lg:col-span-4 bg-black/60 p-8 md:p-10 border border-brand-cream/10 relative rounded-none ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                  {/* Visual Gold Corner Accent to signal supreme luxury */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold/40" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-gold/40" />
                  
                  <span className="font-serif text-xs tracking-[0.3em] text-brand-gold font-extrabold uppercase block mb-6">
                    SERVICE FOCUS
                  </span>
                  
                  {service.capabilities && service.capabilities.length > 0 ? (
                    <div className="space-y-4">
                      <span className="font-sans text-xs tracking-widest text-brand-cream/50 uppercase block font-semibold">
                        Core Competencies:
                      </span>
                      <ul className="space-y-3.5">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-start space-x-3">
                            <span className="text-brand-gold text-xs mt-1 leading-none">✦</span>
                            <span className="font-sans text-xs md:text-sm text-brand-cream/90 leading-snug tracking-wide font-normal">
                              {capability}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <span className="font-sans text-xs tracking-widest text-brand-cream/50 uppercase block font-semibold font-medium">
                        Focus Area:
                      </span>
                      <p className="font-sans text-xs md:text-sm text-brand-cream/80 leading-relaxed font-light">
                        Tailored bespoke strategies, continuous press representation, non-traditional grassroots coverage, and deep influencer integrations designed specifically for key accounts.
                      </p>
                      <div className="text-left pt-2 flex items-center space-x-2 text-brand-gold text-xs font-serif italic tracking-wide">
                        <span>⚜ Elite Client Coverage</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 p-12 md:p-16 border border-brand-gold/30 bg-gradient-to-br from-luxury-dark via-black to-[#050505] text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute -top-1/2 -right-1/3 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-1/2 -left-1/3 w-96 h-96 bg-[#53C9F6]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl tracking-widest text-brand-cream uppercase">
              READY TO SHAPE THE CULTURE?
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-cream/70 leading-relaxed font-light uppercase tracking-widest">
              LET OUR LA TEAM DESIGN A TRULY AUTHENTIC AND AFFORDABLE PUBLICITY CAMPAIGN FOR YOUR COMPANY.
            </p>
            <div className="pt-4 flex flex-col md:flex-row justify-center items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('public-relations')}
                className="w-full md:w-auto px-8 py-3.5 bg-brand-gold text-luxury-dark text-xs font-semibold tracking-[0.25em] font-sans hover:bg-brand-cream transition-colors duration-350 cursor-pointer uppercase"
              >
                BOOK CONSULTATION
              </button>
              <button
                type="button"
                onClick={onBackToHome}
                className="w-full md:w-auto px-8 py-3.5 border border-brand-gold/40 hover:border-brand-gold text-brand-cream text-xs font-semibold tracking-[0.25em] font-sans hover:bg-brand-gold/10 transition-colors duration-350 cursor-pointer uppercase"
              >
                RETURN TO HOME
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
