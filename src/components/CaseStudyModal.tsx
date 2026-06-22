import { motion } from 'motion/react';
import { X, Trophy, CheckCircle, Lightbulb } from 'lucide-react';
import { CampaignItem } from '../data';

interface CaseStudyModalProps {
  campaign: CampaignItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ campaign, onClose }: CaseStudyModalProps) {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-luxury-dark/95 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        className="relative bg-black border border-brand-gold/30 rounded-none w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 p-6 md:p-12 shadow-[0_0_50px_rgba(197,168,128,0.15)] flex flex-col md:flex-row gap-8 align-stretch"
      >
        {/* Close Button Inside Container */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 border border-brand-gold/20 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark rounded-full p-2 transition-all duration-300 cursor-pointer z-20"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left column: Visuals & Header details */}
        <div className="md:w-5/12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold font-bold uppercase block">
              {campaign.category}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl leading-snug text-brand-cream font-semibold uppercase">
              {campaign.title}
            </h3>
            <div className="w-16 h-[2px] bg-brand-gold" />
            <p className="text-brand-cream/80 text-sm font-light leading-relaxed font-sans mt-4">
              {campaign.description}
            </p>
          </div>

          <div className="border border-brand-gold/15 p-1 bg-luxury-dark/50">
            <img
              src={campaign.imageUrl}
              alt={campaign.title}
              className="w-full h-auto object-cover grayscale max-h-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right column: Study information (Challenge, Strategy, Results) */}
        <div className="md:w-7/12 space-y-8 flex flex-col justify-start">
          
          {/* Challenge Box */}
          <div className="space-y-2">
            <h4 className="flex items-center space-x-2 text-brand-gold font-sans text-xs tracking-[0.2em] font-bold uppercase">
              <Trophy className="w-4 h-4 stroke-[1.5]" />
              <span>THE CHALLENGE</span>
            </h4>
            <p className="text-brand-cream/70 font-sans text-xs md:text-sm leading-relaxed font-light">
              {campaign.challenge}
            </p>
          </div>

          {/* Strategy Box */}
          <div className="space-y-2">
            <h4 className="flex items-center space-x-2 text-brand-gold font-sans text-xs tracking-[0.2em] font-bold uppercase">
              <Lightbulb className="w-4 h-4 stroke-[1.5]" />
              <span>STRATEGIC RESPONSE</span>
            </h4>
            <p className="text-brand-cream/70 font-sans text-xs md:text-sm leading-relaxed font-light">
              {campaign.strategy}
            </p>
          </div>

          {/* Results Block */}
          <div className="space-y-3 bg-luxury-dark p-6 border border-brand-gold/10">
            <h4 className="flex items-center space-x-2 text-brand-gold font-sans text-xs tracking-[0.2em] font-bold uppercase mb-2">
              <CheckCircle className="w-4 h-4 stroke-[1.5]" />
              <span>MEASURABLE RESULTS</span>
            </h4>
            <ul className="space-y-2.5">
              {campaign.results.map((result, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-brand-cream/90 text-xs md:text-sm font-light">
                  <span className="text-brand-gold font-serif text-[11px] font-bold border border-brand-gold/20 rounded-full w-4.5 h-4.5 shrink-0 flex items-center justify-center mt-0.5 select-none bg-black">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-sans">{result}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
