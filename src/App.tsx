/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHandler from './components/SEOHandler';
import {
  HomePage,
  AboutPage,
  ServicesPage,
  SupervisionPage,
  WorkHistoryPage,
  TestimonialsPage,
  FaqsPage,
  ContactPage,
} from './components/Pages';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // URL Hash Sync for Clean SEO Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'supervision',
        'work-history',
        'testimonials',
        'faqs',
        'contact',
      ];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Trigger on mount and change
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Setter wrapper that updates clean URL structures
  const handlePageChange = (page: PageId) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={handlePageChange} />;
      case 'about':
        return <AboutPage setCurrentPage={handlePageChange} />;
      case 'services':
        return <ServicesPage setCurrentPage={handlePageChange} />;
      case 'supervision':
        return <SupervisionPage setCurrentPage={handlePageChange} />;
      case 'work-history':
        return <WorkHistoryPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'faqs':
        return <FaqsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div id="full-app-root" className="min-h-screen flex flex-col bg-warmbeige-50 selection:bg-sage-200 selection:text-sage-900">
      
      {/* 1. Technical SEO Metadata handler */}
      <SEOHandler pageId={currentPage} />

      {/* 2. Sticky backdrop-blur Header */}
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* 3. Smooth Staggered Animation canvas containing current page */}
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Grounding bottom Footer */}
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}
