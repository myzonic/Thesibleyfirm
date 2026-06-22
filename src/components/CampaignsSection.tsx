import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAMPAIGNS, CampaignItem } from '../data';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CampaignsSectionProps {
  onCampaignSelect: (campaign: CampaignItem) => void;
  onOpenContact: () => void;
}

export default function CampaignsSection({ onCampaignSelect, onOpenContact }: CampaignsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  // Divide the campaigns: first 8 are shown initially, the rest are shown when 'showAll' is true.
  const displayedCampaigns = showAll ? CAMPAIGNS : CAMPAIGNS.slice(0, 8);

  return (
    <section id="campaigns" className="py-24 md:py-32 bg-[#050505] border-t border-brand-gold/5 relative">
      {/* Decorative side lights */}
      <div className="absolute top-0 left-0 w-80 h-full bg-brand-gold/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block inline: Titles and View All */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-3">
            <span className="font-serif text-xs md:text-sm tracking-[0.3em] text-brand-gold font-semibold uppercase block">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-brand-cream">
              RECENT CAMPAIGNS
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold" />
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center space-x-2 text-brand-gold font-sans text-xs tracking-[0.2em] font-medium transition-colors hover:text-brand-cream cursor-pointer"
          >
            <span>{showAll ? 'SHOW LESS' : 'VIEW ALL WORK'}</span>
            <ArrowRight className={`w-4.5 h-4.5 transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'} transition-transform duration-300`} />
          </button>
        </div>

        {/* 8 (initially) / 16 (expanded) Campaigns Layout - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCampaigns.map((campaign, index) => {
              return (
                <motion.div
                  key={campaign.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ 
                    layout: { type: 'spring', stiffness: 250, damping: 28 },
                    opacity: { duration: 0.4, delay: showAll && index >= 8 ? (index - 8) * 0.05 : index * 0.05 },
                    y: { type: 'spring', stiffness: 350, damping: 25 }
                  }}
                  whileHover={{ y: -6 }}
                  onClick={() => onCampaignSelect(campaign)}
                  className="group relative cursor-pointer flex flex-col justify-between"
                  id={`portfolio-item-${campaign.id}`}
                >
                  {/* Image Wrapper */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-gold/10 group-hover:border-brand-gold/50 transition-all duration-450 bg-black">
                    <img
                      src={campaign.imageUrl}
                      alt={campaign.title}
                      className="w-full h-full object-cover grayscale-0 brightness-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
                    
                    {/* Hover Sparkle Badge */}
                    <div className="absolute top-3 right-3 bg-black/95 border border-brand-gold/30 p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-none">
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                  </div>

                  {/* Text Content Below Image */}
                  <div className="pt-5 flex flex-col space-y-1.5">
                    <h4 className="font-serif text-xs md:text-sm tracking-widest text-brand-cream font-bold uppercase group-hover:text-brand-gold transition-colors duration-300 line-clamp-1">
                      {campaign.title}
                    </h4>
                    <span className="font-sans text-[9px] tracking-[0.2em] text-brand-gold font-medium uppercase">
                      {campaign.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More Central Button */}
        {!showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-luxury-dark hover:bg-brand-gold font-sans text-xs tracking-[0.3em] font-semibold uppercase transition-all duration-300 cursor-pointer"
              id="btn-view-more-portfolio"
            >
              VIEW MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
