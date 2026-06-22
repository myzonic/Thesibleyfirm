import { motion } from 'motion/react';
import { Star, Users, Calendar, Megaphone, Globe, Play, Briefcase, MapPin } from 'lucide-react';
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

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#050505] relative border-t border-brand-gold/5">
      {/* Background lights reflecting Hollywood glam */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-brand-gold/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-gold/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-4">
          <span className="font-serif text-xs md:text-sm tracking-[0.35em] text-brand-gold font-bold uppercase block">
            OUR CAPABILITIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white uppercase font-light">
            OUR <span className="font-serif italic font-normal text-brand-gold">SERVICES</span>
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto md:mx-0" />
        </div>

        {/* Services Grid displaying ONLY the logos/icons and titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Star;
            return (
              <motion.a
                key={service.id}
                href={`/services#${service.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ scale: 1.025, y: -6, borderColor: 'rgba(197, 168, 128, 0.7)' }}
                transition={{ 
                  y: { type: 'spring', stiffness: 300, damping: 20 },
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.5, delay: index * 0.05 }
                }}
                className="group relative border border-brand-gold/15 hover:border-brand-gold/65 bg-black/50 p-8 md:p-10 flex flex-col items-center text-center cursor-pointer transition-colors duration-450 rounded-none w-full outline-none"
              >
                {/* Thin top accent light that expands on card hover */}
                <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent scale-x-0 group-hover:scale-x-110 transition-transform duration-500" />
                
                {/* Gold corner visual accents */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-gold/15 group-hover:border-brand-gold/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-gold/15 group-hover:border-brand-gold/40 transition-colors duration-300" />

                <div className="flex flex-col items-center space-y-6 w-full py-4">
                  
                  {/* Icon Outer Ring Frame (The iconic element mentioned by user) */}
                  <div className="w-16 h-16 rounded-full border border-brand-gold/20 group-hover:border-brand-gold/60 flex items-center justify-center bg-[#070707] text-brand-gold text-brand-gold/90 group-hover:text-brand-gold transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                    <IconComponent className="w-7 h-7 stroke-[1.25]" />
                  </div>

                  {/* Title Label */}
                  <h3 className="font-serif text-base md:text-lg tracking-[0.18em] text-brand-cream group-hover:text-brand-gold transition-colors duration-300 font-bold uppercase leading-tight min-h-[40px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  {/* Premium divider */}
                  <div className="w-6 h-[1px] bg-brand-gold/25 group-hover:w-16 transition-all duration-400" />
                </div>
 
                {/* Call-to-action button */}
                <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold/60 group-hover:text-brand-gold mt-4 inline-flex items-center space-x-2 transition-colors duration-300 uppercase font-bold">
                  <span>EXPLORE SERVICE</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Global separate page navigation teaser */}
        <div className="mt-16 text-center">
          <motion.a
            href="/services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] font-sans text-brand-gold hover:text-brand-cream border-b border-brand-gold/30 hover:border-brand-cream/60 pb-2 transition-all duration-300 font-bold uppercase"
          >
            <span>VIEW ALL IN-DEPTH SERVICES</span>
            <span className="text-sm">→</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
