/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import { Mail, Phone, Clock, MapPin, ShieldCheck, Award } from 'lucide-react';
import { LogoBlock } from './BrandingLogo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-sage-900 text-sage-100 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Section 1: Brand & UKCP Accreditation */}
          <div className="space-y-4">
            <div className="cursor-pointer mb-2 block" onClick={() => navigateTo('home')}>
              <LogoBlock layout="horizontal" theme="dark" />
            </div>
            
            <p className="text-sm text-sage-300/90 leading-relaxed font-sans">
              Professional, confidential, and culturally tailored psychotherapy and clinical supervision services with Anita Gould. Accommodating individual narratives and deep attachment frameworks with over 20 years of clinical practice.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-sage-300 bg-sage-800/40 p-3 rounded-lg border border-sage-800">
              <ShieldCheck className="h-4.5 w-4.5 text-sage-400 flex-shrink-0" />
              <span className="font-medium">Registered & Accredited Member • UKCP (Accredited Therapist)</span>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-white font-accent font-semibold text-sm tracking-widest uppercase mb-6 pb-2 border-b border-sage-800">
              Quick Navigation
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  <span className="h-1 w-1 bg-sage-500 rounded-full" />
                  <span>Homepage Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  <span className="h-1 w-1 bg-sage-500 rounded-full" />
                  <span>About Anita Gould</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  <span className="h-1 w-1 bg-sage-500 rounded-full" />
                  <span>Areas of Support</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('supervision')}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  <span className="h-1 w-1 bg-sage-500 rounded-full" />
                  <span>Clinical Supervision</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('work-history')}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  <span className="h-1 w-1 bg-sage-500 rounded-full" />
                  <span>Work History & Timeline</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('testimonials')}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  <span className="h-1 w-1 bg-sage-500 rounded-full" />
                  <span>Endorsements & Reviews</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Section 3: Professional Registries & Accels */}
          <div className="space-y-5">
            <h3 className="text-white font-accent font-semibold text-sm tracking-widest uppercase mb-1 pb-2 border-b border-sage-800">
              Credentials & Accolades
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-xs bg-sage-800/20 p-2.5 rounded border border-sage-800/40">
                <Award className="h-5 w-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Award Winner</h4>
                  <p className="text-sage-300/80 mt-0.5">National Audit of Psychological Therapies Quality Improvement Award (Clinical Director at Maya Centre)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs bg-sage-800/20 p-2.5 rounded border border-sage-800/40">
                <MapPin className="h-5 w-5 text-sage-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Global Sessions</h4>
                  <p className="text-sage-300/80 mt-0.5">Secure consulting for patients and supervisees in Europe, Asia & the Americas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Contact Core */}
          <div className="space-y-4">
            <h3 className="text-white font-accent font-semibold text-sm tracking-widest uppercase mb-2 pb-2 border-b border-sage-800">
              Direct Inquiries
            </h3>
            <ul className="space-y-3.5 text-sm text-sage-300">
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-sage-400 flex-shrink-0" />
                <a href="tel:07847920094" className="hover:text-white transition-colors font-mono tracking-wider">
                  078 4792 0094
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="h-4 w-4 text-sage-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:gouldconsultancy@mail.com" className="block hover:text-white transition-colors text-xs font-mono">
                    gouldconsultancy@mail.com
                  </a>
                  <a href="mailto:anita.gould@uclmail.net" className="block hover:text-white transition-colors text-xs font-mono">
                    anita.gould@uclmail.net
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="h-4 w-4 text-sage-400 flex-shrink-0" />
                <span>By Scheduled Appointment Only</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full py-2.5 text-xs font-accent font-semibold tracking-wider text-center text-sage-900 bg-sage-100 hover:bg-white rounded-lg transition-all uppercase"
              >
                Intake Assessment
              </button>
            </div>
          </div>

        </div>

        {/* Safeguard Notice for High Crisis (Therapy standard) */}
        <div className="mt-12 pt-8 border-t border-sage-800/80 text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-sage-400 leading-relaxed font-sans italic">
            <strong>Urgent Safety Notice:</strong> Psychotherapy research and private counseling are not emergency medical services. If you are in immediate threat of self-harm, severe trauma crisis, or medical emergency, please contact 111, 999 (UK) or proceed to your nearest NHS Accident and Emergency unit. Confidential support is also available via the Samaritans at 116 123.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-sage-800 flex flex-col sm:flex-row items-center justify-between text-xs text-sage-400">
          <p>© 2026 Gould Consultancy Counselling & Psychotherapy Services. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigateTo('faqs')}>Terms & Fees</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigateTo('contact')}>Privacy Statement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
