import { motion } from 'motion/react';
import { INSIGHTS } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-[#050505] border-t border-brand-gold/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <span className="font-serif text-xs md:text-sm tracking-[0.3em] text-brand-gold font-semibold uppercase block">
            INSIGHTS & PERSPECTIVES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-brand-cream">
            THE CUTTING EDGE OF CULTURE
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto md:mx-0" />
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/40 border border-brand-gold/10 hover:border-brand-gold/40 p-8 flex flex-col justify-between group cursor-pointer transition-all duration-400"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] font-sans font-medium text-brand-gold/70 uppercase">
                  <span>{insight.category}</span>
                  <span>{insight.date}</span>
                </div>
                
                <h3 className="font-serif text-lg leading-snug text-brand-cream group-hover:text-brand-gold transition-colors duration-300 font-bold">
                  {insight.title}
                </h3>
                
                <p className="text-brand-cream font-sans text-xs md:text-sm leading-relaxed font-normal line-clamp-3">
                  {insight.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-brand-gold/10 mt-6 flex justify-between items-center text-brand-cream group-hover:text-brand-gold transition-colors font-sans text-xs tracking-widest font-medium">
                <span>READ DISCUSSION</span>
                <ArrowUpRight className="w-4.5 h-4.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
