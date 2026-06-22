import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CornerDownRight, CheckCircle, Award, Hourglass } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  interest?: string;
}

type FormStage = 'idle' | 'submitting' | 'success';

export default function ContactFormModal({ isOpen, onClose, interest = 'public-relations' }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: interest,
    message: '',
  });

  const [stage, setStage] = useState<FormStage>('idle');
  const [loadingText, setLoadingText] = useState('Initiating connection...');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStage('submitting');
    
    // Simulate luxury onboarding sequence
    setTimeout(() => {
      setLoadingText('Routing to Beverly Hills office...');
      setTimeout(() => {
        setLoadingText('Assigning legacy advisor...');
        setTimeout(() => {
          setStage('success');
        }, 800);
      }, 800);
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: 'public-relations',
      message: '',
    });
    setStage('idle');
  };

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

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="relative bg-black border border-brand-gold/30 rounded-none w-full max-w-2xl overflow-hidden z-10 p-8 md:p-12 shadow-[0_0_60px_rgba(197,168,128,0.2)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 border border-brand-gold/20 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark rounded-full p-2 transition-all duration-300 cursor-pointer z-20"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          
          {/* STAGE IDLE: The Form */}
          {stage === 'idle' && (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold font-bold uppercase block">
                  PRIVATE INTAKE FORM
                </span>
                <h3 className="font-serif text-3xl font-light text-brand-cream tracking-wide uppercase">
                  INITIATE CONNECTION
                </h3>
                <div className="w-12 h-[1px] bg-brand-gold" />
                <p className="text-brand-cream/60 font-sans text-xs md:text-sm font-light">
                  Complete the fields below to schedule a highly confidential strategy consultation with our LA executive representitives.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Visual grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-brand-gold text-[10px] tracking-[0.15em] font-sans font-bold uppercase">
                      NAME / PRINCIPAL
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Katherine Sterling"
                      className="bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-cream placeholder-brand-cream/25 py-2.5 outline-none font-sans text-xs md:text-sm tracking-wide transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-brand-gold text-[10px] tracking-[0.15em] font-sans font-bold uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sterling@management.com"
                      className="bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-cream placeholder-brand-cream/25 py-2.5 outline-none font-sans text-xs md:text-sm tracking-wide transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Represented */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-brand-gold text-[10px] tracking-[0.15em] font-sans font-bold uppercase">
                      ORGANIZATION / TALENT
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g., Sterling Luxury Group"
                      className="bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-cream placeholder-brand-cream/25 py-2.5 outline-none font-sans text-xs md:text-sm tracking-wide transition-colors"
                    />
                  </div>

                  {/* Area of interest dropdown */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-brand-gold text-[10px] tracking-[0.15em] font-sans font-bold uppercase">
                      SERVICE OF INTEREST
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="bg-black border-b border-brand-gold/20 focus:border-brand-gold text-brand-cream py-2.5 outline-none font-sans text-xs md:text-sm tracking-wide cursor-pointer transition-colors"
                    >
                      <option value="public-relations">PUBLIC RELATIONS</option>
                      <option value="talent-booking">TALENT BOOKING</option>
                      <option value="event-management">EVENT MANAGEMENT</option>
                      <option value="entertainment-marketing">ENTERTAINMENT MARKETING</option>
                      <option value="street-team">STREET TEAM</option>
                      <option value="event-planning">EVENT PLANNING</option>
                    </select>
                  </div>
                </div>

                {/* Brief Message */}
                <div className="flex flex-col space-y-1">
                  <label className="text-brand-gold text-[10px] tracking-[0.15em] font-sans font-bold uppercase">
                    BRIEF INQUIRY DESCRIPTION
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your brand's core needs or upcoming campaigns..."
                    className="bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-cream placeholder-brand-cream/25 py-2.5 outline-none font-sans text-xs md:text-sm tracking-wide transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="group w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-brand-gold hover:bg-brand-cream text-luxury-dark font-sans text-xs tracking-[0.25em] font-bold px-8 py-3.5 uppercase transition-all duration-350 cursor-pointer"
                  >
                    <span>SUBMIT SECURE DOSSIER</span>
                    <CornerDownRight className="w-4 h-4 transform group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STAGE SUBMITTING */}
          {stage === 'submitting' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 flex flex-col justify-center items-center text-center space-y-6"
            >
              <div className="relative flex items-center justify-center">
                <Hourglass className="w-12 h-12 text-brand-gold animate-[spin_3s_linear_infinite]" />
              </div>
              <h4 className="font-serif text-lg tracking-[0.1em] text-brand-cream uppercase animate-pulse">
                {loadingText}
              </h4>
              <p className="text-brand-cream/40 font-sans text-[10px] tracking-widest uppercase">
                CONFIDENTIAL • LOCAL SECURE PROTOCOL
              </p>
            </motion.div>
          )}

          {/* STAGE SUCCESS */}
          {stage === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 flex flex-col justify-center items-center text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-gold/5 text-brand-gold">
                <CheckCircle className="w-8 h-8 stroke-[1.25]" />
              </div>

              <div className="space-y-2">
                <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold font-bold uppercase block">
                  SUBMISSION ACCEPTED
                </span>
                <h4 className="font-serif text-2xl text-brand-cream font-light tracking-wide uppercase">
                  DOSSIER SUCCESSFULLY ROUTED
                </h4>
                <p className="text-brand-cream/70 font-sans text-xs md:text-sm max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <span className="text-brand-gold font-bold">{formData.name}</span>. Your consultation request is registered. A senior representative from our Los Angeles partner team will reach out within 24 business hours.
                </p>
              </div>

              <div className="border border-brand-gold/15 p-4 bg-luxury-dark max-w-sm flex items-center space-x-3.5">
                <Award className="w-8 h-8 text-brand-gold shrink-0" />
                <span className="font-sans text-[10px] text-brand-cream/60 text-left leading-relaxed font-light">
                  Your profile has been marked with high priority. All correspondence is held under strict NDA standards.
                </span>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="border border-brand-gold/30 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark font-sans text-xs tracking-[0.2em] font-medium px-8 py-3 transition-all duration-350"
                >
                  RETURN TO HOME
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>
    </div>
  );
}
