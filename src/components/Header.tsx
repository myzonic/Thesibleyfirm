/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoBlock } from './BrandingLogo';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Anita' },
    { id: 'services', label: 'Services' },
    { id: 'supervision', label: 'Clinical Supervision' },
    { id: 'work-history', label: 'Work History' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const navigateTo = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-app-header"
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-warmbeige-50/90 backdrop-blur-md shadow-sm border-b border-sage-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div
            id="brand-logo-container"
            onClick={() => navigateTo('home')}
            className="cursor-pointer group flex-shrink-0"
          >
            <LogoBlock theme="light" />
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => navigateTo(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-sage-800 font-semibold'
                      : 'text-sage-700/80 hover:text-sage-900 hover:bg-sage-100/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-sage-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:07847920094"
              className="flex items-center space-x-1.5 text-xs text-sage-700 hover:text-sage-900 font-mono tracking-wider bg-sage-100/50 hover:bg-sage-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Phone className="h-3 w-3 text-sage-500" />
              <span>078 4792 0094</span>
            </a>
            <button
              id="header-cta-button"
              onClick={() => navigateTo('contact')}
              className="px-4.5 py-2 text-xs font-accent font-semibold tracking-wider text-white bg-sage-600 hover:bg-sage-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 uppercase"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Hamburguer Icon */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:07847920094"
              className="p-1.5 bg-sage-100/60 rounded-lg text-sage-700 hover:text-sage-900"
              title="Call Anita Gould"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-sage-800 hover:text-sage-950 focus:outline-none focus:ring-2 focus:ring-sage-200 rounded-xl transition-all"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navbar-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-warmbeige-100 border-b border-sage-100 shadow-inner overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => navigateTo(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-all ${
                      isActive
                        ? 'bg-white text-sage-800 shadow-sm font-semibold border-l-4 border-sage-500'
                        : 'text-sage-700/85 hover:bg-white/40 hover:text-sage-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-sage-200/50 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07847920094"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-white border border-sage-200 text-sage-800 text-sm font-semibold font-mono"
                >
                  <Phone className="h-4 w-4 text-sage-500" />
                  <span>078 4792 0094</span>
                </a>
                <button
                  id="mobile-cta-button"
                  onClick={() => navigateTo('contact')}
                  className="w-full py-3 px-4 bg-sage-600 hover:bg-sage-700 text-white rounded-xl text-sm font-accent font-semibold tracking-wider uppercase shadow-sm"
                >
                  Initial Consultation
                </button>
              </div>
              <p className="text-[10px] text-center text-sage-500 font-medium pt-2 flex items-center justify-center gap-1">
                <Shield className="h-3 w-3" /> Accredited Psychotherapist • UKCP Registered
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
