import { motion } from 'motion/react';
import { X, Calendar, User, AlignLeft, Bookmark } from 'lucide-react';
import { PressItem } from '../data';

interface PressModalProps {
  press: PressItem | null;
  onClose: () => void;
}

export default function PressModal({ press, onClose }: PressModalProps) {
  if (!press) return null;

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

      {/* Editorial Content Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="relative bg-[#0b0b0b] border border-brand-gold/30 rounded-none w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-[0_0_50px_rgba(197,168,128,0.1)] flex flex-col md:flex-row"
      >
        {/* Absolute Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 border border-brand-gold/20 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark rounded-full p-2.5 transition-all duration-300 cursor-pointer z-30 bg-black/50 backdrop-blur-sm"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Magazine Cover representation */}
        <div className="md:w-5/12 relative aspect-[3/4] md:aspect-auto overflow-hidden bg-black p-4 border-r border-brand-gold/10">
          <img
            src={press.fullImage}
            alt={press.coverTitle}
            className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Cover vignette layer to pop text inside it */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80 z-10" />

          {/* Decorative graphic outlines representing design layout */}
          <div className="absolute inset-4 border border-white/5 pointer-events-none z-20" />

          {/* Header */}
          <div className="absolute top-8 inset-x-0 mx-auto text-center z-20 flex flex-col items-center">
            <h4 className="font-serif text-[18px] font-extrabold tracking-[0.35em] text-brand-cream leading-none">
              {press.logo}
            </h4>
            <hr className="w-8 border-brand-gold/40 mt-2" />
          </div>

          {/* Bottom title */}
          <div className="absolute bottom-8 left-8 right-8 z-20 space-y-2">
            <span className="text-brand-gold text-[8px] font-bold tracking-[0.2em] font-sans block uppercase">
              {press.featuredTitle}
            </span>
            <h3 className="font-serif text-xl font-bold leading-tight text-brand-cream tracking-wide">
              {press.coverTitle}
            </h3>
          </div>
        </div>

        {/* Right Column: Clean, spacious readable magazine article content */}
        <div className="md:w-7/12 p-8 md:p-12 space-y-6 overflow-y-auto">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-[9px] tracking-[0.15em] text-brand-gold font-sans font-medium uppercase border-b border-brand-gold/10 pb-4">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>PUBLISHED ISSUE 2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>WRITTEN BY CULTURE STAFF</span>
            </div>
          </div>

          {/* Large display article subheader */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-light text-brand-cream tracking-wide leading-tight">
              Redefining Influence in high society Los Angeles circles.
            </h3>
            <p className="text-brand-cream/80 text-sm font-sans font-light leading-relaxed tracking-wide italic">
              "{press.articleSummary}"
            </p>
          </div>

          <div className="space-y-4 font-sans text-xs md:text-sm font-light leading-relaxed text-brand-cream/60 tracking-wide">
            <p>
              In this exclusive interview, Christopher Sibley sits down to detail the inner mechanics behind some of the agency’s historical entertainment partnerships. Building a public relations narrative, Sibley notes, isn’t about generating basic chatter on social feeds; it is about architectural control over brand legacy.
            </p>
            <p className="border-l-2 border-brand-gold pl-4 text-brand-gold italic py-1 bg-brand-gold/[0.02]">
              "We maintain a hyper-curated circle values model. It isn’t about sending our clients to every talk show or photoshoot; it is about matching them with the cultural institutions, series, and collaborations that guarantee their legacy is written permanently."
            </p>
            <p>
              By aligning high-end luxury fashion models, world-famous directors, and digital streamers together under one holistic storytelling blueprint, the sibley team has engineered some of the biggest entertainment rollouts in modern history. The Sibley Firm continues to prove why it remains the premier choice for major Hollywood titans.
            </p>
          </div>

          {/* Bottom sign-off decoration */}
          <div className="pt-6 border-t border-brand-gold/10 flex justify-between items-center text-[10px] tracking-[0.2em] font-sans text-brand-gold font-bold">
            <div className="flex items-center space-x-1.5">
              <Bookmark className="w-4 h-4 stroke-[1.5]" />
              <span>THE SIBLEY ARCHIVE</span>
            </div>
            
            <button
              onClick={onClose}
              className="hover:text-brand-cream transition-colors duration-300"
            >
              CLOSE READING
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
