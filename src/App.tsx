import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServicesPage from './components/ServicesPage';
import FeaturedInSection from './components/FeaturedInSection';
import CampaignsSection from './components/CampaignsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

// Modals
import CaseStudyModal from './components/CaseStudyModal';
import PressModal from './components/PressModal';
import ContactFormModal from './components/ContactFormModal';

import { CampaignItem, PressItem } from './data';

export default function App() {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignItem | null>(null);
  const [selectedPress, setSelectedPress] = useState<PressItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('public-relations');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync back/forward standard browser navigation with the state
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global anchor-tag click interceptor for seamless client-side SPA routing
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      // Ignore external or empty links
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.match(/^https?:\/\//)) {
        return;
      }

      // Handle relative paths starting with /
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        
        const [path, hash] = href.split('#');
        const targetHash = hash ? `#${hash}` : '';
        const wasOnServices = window.location.pathname === '/services';

        // Check if destination is /services
        if (path === '/services') {
          window.history.pushState(null, '', href);
          setCurrentPath('/services');
          if (hash) {
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 250); // Small delay to let page mount and render completely
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else if (path === '/' || path === '') {
          // Destination is Home (/)
          window.history.pushState(null, '', href);
          setCurrentPath('/');
          
          if (hash) {
            // If we came from another page, let the homepage render first
            const scrollDelay = wasOnServices ? 250 : 0;
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, scrollDelay);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } else if (href.startsWith('#')) {
        // Pure hash link within same page context
        e.preventDefault();
        const id = href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Handle immediate hash scrolling on page load/direct link access
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [currentPath]);

  const handleOpenContact = (interest = 'public-relations') => {
    setSelectedInterest(interest);
    setIsContactOpen(true);
  };

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCampaigns = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-brand-cream selection:bg-brand-gold selection:text-luxury-dark w-full overflow-hidden">
      {/* High-end photographic noise texture overlay to feel like luxurious matte paper/magazine print */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.015] bg-[#999]/30 mix-blend-overlay" />

      {/* Global Navigation Header */}
      <Header onOpenContact={() => handleOpenContact('public-relations')} />

      {/* Main Pages with AnimatePresence Page Transition Effects */}
      <AnimatePresence mode="wait">
        {currentPath === '/services' ? (
          <motion.div
            key="services-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ServicesPage 
              onBackToHome={navigateToHome} 
              onOpenContact={handleOpenContact} 
            />
          </motion.div>
        ) : (
          <motion.div
            key="home-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Hero Section */}
            <Hero onDiscoverClick={scrollToCampaigns} />

            {/* About Section */}
            <AboutSection />

            {/* Services Minimal Visual Grid (Displaying logo animations ONLY) */}
            <ServicesSection />

            {/* Portfolio Sections */}
            <div id="portfolio">
              {/* Featured In Logos & Magazine Covers Section */}
              <FeaturedInSection onPressSelect={setSelectedPress} />

              {/* Recent Campaigns Showcase */}
              <CampaignsSection
                onCampaignSelect={setSelectedCampaign}
                onOpenContact={() => handleOpenContact('public-relations')}
              />
            </div>

            {/* Testimonials Slider */}
            <TestimonialsSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer and Call To Action */}
      <Footer onOpenContact={() => handleOpenContact('public-relations')} />

      {/* Interactive Lightbox / Modal Overlays */}
      <AnimatePresence>
        {selectedCampaign && (
          <CaseStudyModal
            campaign={selectedCampaign}
            onClose={() => setSelectedCampaign(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPress && (
          <PressModal
            press={selectedPress}
            onClose={() => setSelectedPress(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <ContactFormModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            interest={selectedInterest}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
