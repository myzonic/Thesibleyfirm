import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import Logo from './Logo';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-luxury-dark/95 backdrop-blur-md border-b border-brand-gold/10 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center animate-fade-in">
          {/* Logo */}
          <a href="#" className="flex transition-transform duration-300 hover:scale-[1.02]">
            <Logo size="md" />
          </a>

          {/* Nav Items - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-xs tracking-[0.2em] font-medium text-brand-cream/70 hover:text-brand-gold transition-colors duration-350 relative py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Menu Toggle */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex border border-brand-gold/40 hover:border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark font-sans text-xs tracking-[0.2em] font-medium px-6 py-2.5 transition-all duration-350 cursor-pointer"
            >
              WORK WITH US
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand-cream hover:text-brand-gold transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-luxury-dark flex flex-col justify-center items-center lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8 text-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl tracking-[0.1em] text-brand-cream hover:text-brand-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <hr className="w-12 border-brand-gold/30" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact();
                }}
                className="border border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-luxury-dark font-sans text-xs tracking-[0.2em] font-medium px-8 py-3 transition-colors duration-350"
              >
                WORK WITH US
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
