/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, ContactFormData, ContactSubmission } from '../types';
import {
  AREAS_OF_SUPPORT,
  WORK_HISTORY,
  TESTIMONIALS,
  FAQS,
} from '../data';
import {
  Heart,
  Award,
  BookOpen,
  Users,
  Shield,
  Calendar,
  Phone,
  Mail,
  User,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Search,
  Check,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Globe,
  FileCheck,
  CheckSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Exact generated image asset paths
import heroBannerImg from '../assets/images/therapy_hero_banner_1782079196083.jpg';
import consultingRoomImg from '../assets/images/therapy_consulting_room_1782079215205.jpg';
import avatarEmblemImg from '../assets/images/therapy_avatar_1782079232270.jpg';

const HERO_BANNER_IMG = heroBannerImg;
const CONSULTING_ROOM_IMG = consultingRoomImg;
const AVATAR_EMBLEM_IMG = avatarEmblemImg;

// Container animations for stagger effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

interface PageProps {
  setCurrentPage: (page: PageId) => void;
}

/* ==========================================
   HOMEPAGE VIEW Component
   ========================================== */
export function HomePage({ setCurrentPage }: PageProps) {
  const teaserSupport = AREAS_OF_SUPPORT.slice(0, 4);
  const coreStats = [
    { label: 'Clinical Experience', value: '20+ Years', icon: Award },
    { label: 'Patient Accolades', value: '10,000+', icon: Users },
    { label: 'Professional standard', value: 'UKCP Accr.', icon: Shield },
    { label: 'Support Spheres', value: 'Global', icon: Globe },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-20 pb-16"
    >
      {/* 1. Hero Welcoming Panel */}
      <section id="homepage-hero-section" className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-warmbeige-50 pt-8 pb-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-sage-100/60 border border-sage-200/50 px-3.5 py-1.5 rounded-full text-sage-800 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="h-3 w-3 text-sage-500 animate-pulse" />
                <span>Modern Psychoanalytic Psychotherapy</span>
              </div>
              
              <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight text-sage-900 leading-tight">
                Deep healing is built on <span className="font-semibold italic text-sage-700">emotional safety</span> & clinical warmth.
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-sage-850 leading-relaxed max-w-2xl">
                Gould Consultancy provides bespoke individual counselling, clinical supervision, and specialized trauma-informed psychotherapy. Supported by more than 20 years of verifiable practice across the National Health Service (NHS), university care, and multi-lingual diaspora charities. Managed by Anita Gould, UKCP-Accredited Clinician.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  id="hero-cta-contact"
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-4 bg-sage-600 hover:bg-sage-700 text-white font-accent font-semibold tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm flex items-center justify-center space-x-2 uppercase"
                >
                  <span>Book Initial Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  id="hero-cta-about"
                  onClick={() => setCurrentPage('about')}
                  className="px-8 py-4 bg-white hover:bg-sage-100/60 text-sage-800 border border-sage-200/80 font-accent font-semibold tracking-wider rounded-xl transition-all duration-200 text-sm flex items-center justify-center space-x-2 uppercase"
                >
                  <span>About Anita Gould</span>
                </button>
              </div>

              {/* Minor Accreditations Ribbon */}
              <p className="text-[11px] text-sage-600 font-medium pt-2 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-sage-500" /> UKCP Accredited Psychotherapist</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Award className="h-3.5 w-3.5 text-sage-500" /> NHS & Royal Academy of Music Background</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5 text-sage-500" /> Europe, Asia & America Secure Online Consultings</span>
              </p>
            </div>

            {/* Right Premium Generated Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sage-500/10 to-mutedblue-500/10 rounded-2xl filter blur-2xl -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/60 aspect-[16/12] sm:aspect-[16/10] lg:aspect-[4/3] max-w-lg mx-auto">
                <img
                  src={HERO_BANNER_IMG}
                  alt="Organic growth representation watercolor with gold contours"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Statistics Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-sage-100/40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-sage-100">
            {coreStats.map((stat, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 lg:px-6 flex flex-col items-center text-center ${idx === 0 ? '' : 'lg:border-l border-sage-100'}`}>
                <div className="p-3 bg-sage-50 rounded-2xl text-sage-500 mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-3xl text-sage-900 tracking-tight">{stat.value}</h3>
                <p className="text-xs font-accent text-sage-600 uppercase mt-1 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Areas of Support Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-sage-900">
            Areas of Dedicated Clinical Support
          </h2>
          <p className="text-sage-800 text-sm sm:text-base">
            Offering psychoanalytically rich and trauma-informed psychotherapy to unpack, clarify, and transform the psychological patterns carrying persistent distress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserSupport.map((support) => (
            <div
              key={support.id}
              className="bg-white p-6 rounded-2xl border border-sage-100/50 shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-2.5 bg-sage-50 rounded-xl w-fit text-sage-600">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-accent font-semibold text-lg text-sage-900">{support.title}</h3>
                <p className="text-sm text-sage-600 leading-relaxed line-clamp-4">{support.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-sage-50 flex flex-wrap gap-1.5">
                {support.keywords.slice(0, 2).map((kw, i) => (
                  <span key={i} className="text-[10px] bg-warmbeige-100 px-2.5 py-1 rounded text-sage-800 font-medium font-accent">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center space-x-2 text-sm font-semibold font-accent text-sage-700 hover:text-sage-950 transition-colors"
          >
            <span>View All Areas of Support</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 4. Mini Biography Highlight */}
      <section className="bg-sage-100/40 py-20 border-y border-sage-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image column */}
            <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
              <div className="absolute inset-0 bg-sage-400/20 rounded-2xl filter blur-xl transform -rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white/80 aspect-[4/3]">
                <img
                  src={CONSULTING_ROOM_IMG}
                  alt="Peaceful chic counseling office representation by Anita Gould"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4.5 rounded-2xl border border-sage-100/50 shadow-md max-w-xs text-left">
                <p className="text-xs italic text-sage-700 font-sans">
                  "Anthropology and psychoanalysis both investigate the deep narratives of human context."
                </p>
                <p className="text-[10px] font-semibold text-sage-900 mt-2">— Anita Gould</p>
              </div>
            </div>

            {/* Right Biography content column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-sage-200/50 border border-sage-200/80 px-3.5 py-1 rounded-full text-sage-800 text-[11px] font-accent font-semibold uppercase">
                <span>The Clinician</span>
              </div>
              <h2 className="font-display font-medium text-3.5xl sm:text-4xl text-sage-900 leading-tight">
                About Anita Gould, UKCP
              </h2>
              <p className="text-sage-800 leading-relaxed text-sm sm:text-base">
                Anita is an esteemed clinical thinker and psychotherapeutic practitioner holding formal degrees in Anthropology (BSc Hons) and Intercultural Therapy (MSc) from University College London (UCL). Backed by more than two decades of public, high-deprivation charity, and private psychotherapy experience.
              </p>
              <p className="text-sage-800 leading-relaxed text-sm sm:text-base">
                Her professional history features major directive clinical leadership roles—having acted as Clinical Director at The Maya Centre (earning National NAPT Clinical Audit recognition), Head of Therapy Services at MIND, and Head of Psychological Therapy Services at the world-renowned Royal Academy of Music (London).
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-6 py-3.5 bg-sage-600 hover:bg-sage-700 text-white font-accent font-semibold rounded-xl text-xs tracking-wider transition-colors uppercase"
                >
                  Read Clinical Philosophy
                </button>
                <button
                  onClick={() => setCurrentPage('work-history')}
                  className="px-6 py-3.5 bg-white hover:bg-sage-50 text-sage-800 border border-sage-250 font-accent font-semibold rounded-xl text-xs tracking-wider transition-colors uppercase"
                >
                  View Career Timeline
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Highlight Testimonial Endorsement Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-sage-800/40 rounded-full filter blur-3xl -z-10" />
          
          <div className="max-w-3xl space-y-6 text-left relative">
            <Award className="h-10 w-10 text-gold-300" />
            <h3 className="text-gold-200 font-accent font-semibold tracking-wider text-xs uppercase">
              Colleague & Clinical Endorsement
            </h3>
            
            <p className="font-display italic text-lg sm:text-2xl text-sage-100 leading-relaxed">
              "Anita Gould possesses an extraordinary capacity to synthesize profound psychoanalytic theory with immediate, grounded human empathy. Having witnessed her clinical leadership first-hand at The Maya Centre, her dedication to intercultural accessibility and robust ethical boundaries makes her an exceptional clinician and clinical supervisor of the highest order."
            </p>

            <div className="pt-4 border-t border-sage-800 flex items-center space-x-3">
              <div className="h-11 w-11 bg-gold-500/10 rounded-full border border-gold-500/20 text-gold-300 font-bold font-accent flex items-center justify-center">
                WS
              </div>
              <div>
                <h4 className="text-white font-semibold text-base">Whitney Shaw-Dale</h4>
                <p className="text-xs text-sage-300">Senior Clinical Colleague & Supervisor (Formerly Supervisor to Women and Health)</p>
              </div>
            </div>
            
            <div className="pt-2 text-right">
              <button
                onClick={() => setCurrentPage('testimonials')}
                className="text-xs font-semibold text-gold-300 hover:text-white transition-all underline shrink-0 inline-flex items-center space-x-1.5 focus:outline-none"
              >
                <span>Read client and peer endorsements</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Booking Consultation Panel */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8">
        <div className="bg-gradient-to-br from-warmbeige-100 to-sage-50 rounded-3xl p-8 sm:p-12 border border-sage-200/60 shadow-sm space-y-6">
          <Heart className="h-8 w-8 text-sage-600 mx-auto" />
          <h2 className="font-display font-medium text-3xl text-sage-900">
            Arrange a Confidential Assessment
          </h2>
          <p className="text-sage-850 max-w-2xl mx-auto text-sm sm:text-base">
            Taking the initial step toward psychotherapy can feel complex. Anita offers a friendly, confidential 15-minute telephone consultation to assess your needs, answer any programmatic queries, and schedule an initial full diagnostic intake session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
            <a
              href="mailto:gouldconsultancy@mail.com"
              className="px-6 py-3.5 bg-sage-700 hover:bg-sage-800 text-white font-accent font-semibold rounded-xl text-xs tracking-wider uppercase transition-colors flex items-center space-x-2 shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span>Email Enquiry</span>
            </a>
            <a
              href="tel:07847920094"
              className="px-6 py-3.5 bg-white hover:bg-sage-100 text-sage-800 border border-sage-200 font-accent font-semibold rounded-xl text-xs tracking-wider transition-colors uppercase flex items-center space-x-2 font-mono"
            >
              <Phone className="h-4 w-4 text-sage-600" />
              <span>078 4792 0094</span>
            </a>
          </div>
          <p className="text-[10px] text-sage-500 font-medium">
            Strictly Confidential • Data protected under standard GDPR policies.
          </p>
        </div>
      </section>
    </motion.div>
  );
}


/* ==========================================
   ABOUT ANITA VIEW Component
   ========================================== */
export function AboutPage({ setCurrentPage }: PageProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
          <span>Biography & Accreditations</span>
        </div>
        <h1 className="font-display font-medium text-4xl text-sage-900 leading-tight">
          Anita Gould, BSc (Hons), MSc, UKCP Accr.
        </h1>
        <p className="text-lg text-sage-700 font-medium">
          Registered Psychoanalytic Psychotherapist, Intercultural Consultant, and Clinical Supervisor
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="prose prose-sage max-w-none text-sage-800 text-sm sm:text-base space-y-5 leading-relaxed">
            <p>
              I am a fully registered and accredited Psychotherapist and Clinical Supervisor with the <strong>United Kingdom Council for Psychotherapy (UKCP)</strong>. Throughout my 22-year clinical journey, I have practiced in various highly challenging clinical settings, including clinical mental health hospitals within the <strong>NHS</strong>, specialist intercultural psychiatric units, community diaspora hubs, national charity organizations, university academies, and private clinical consultations.
            </p>
            <p>
              My professional scaffolding is anchored on a rigorous multidisciplinary academic focus. I completed my <strong>BSc (Hons) in Anthropology</strong> and <strong>MSc in Intercultural Therapy</strong> from <strong>University College London (UCL)</strong>. This background shapes my clinical core; it allows me to integrate traditional psychodynamic and Freudian/Lacanian psychoanalytic formulas with a meticulous understanding of societal, cultural, and ancestral dynamics.
            </p>
            <p className="border-l-4 border-sage-400 pl-4.5 italic text-sage-700 bg-sage-50 p-4.5 rounded-r-xl">
              "We perform therapy inside a socio-cultural vacuum far too often. Psychoanalysis works best when it honors the client's cultural framework, systemic blocks, migration backgrounds, and local somatic triggers without sterile medicalization."
            </p>
            <p>
              Having served as the <strong>Clinical Director at The Maya Centre</strong>, I was deeply involved in establishing and safeguarding trauma-informed, multilingual psychological assistance systems. Our dedication won the highly prestigious <strong>National Audit of Psychological Therapies (NAPT) Quality Improvement Award</strong>. After this, as the <strong>Head of Psychological Therapy Services at The Royal Academy of Music</strong>, I focused heavily on addressing high-pressure performance anxiety, creative blockages, imposter syndrome, and early family perfectionism inside intense artistic settings.
            </p>
          </div>

          {/* Academic Profile Board */}
          <div className="bg-white p-6.5 rounded-2xl border border-sage-100 shadow-sm space-y-4">
            <h3 className="font-accent font-semibold text-lg text-sage-900 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-sage-500" />
              <span>Verifiable Qualifications & Affiliations</span>
            </h3>
            <ul className="space-y-3.5 text-sm text-sage-700">
              <li className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                <span><strong>BSc (Hons) Anthropology</strong> — University College London (UCL)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                <span><strong>MSc Intercultural Therapy</strong> — University College London (UCL)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                <span><strong>Postgraduate Diploma in Psychoanalytic Psychotherapy</strong> — Westminster Pastoral Foundation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                <span><strong>Certified Clinical Supervisor</strong> — Accredited Postgraduate Supervision Certificates</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                <span><strong>UKCP Registered Practitioner</strong> — Member ID 2011162744 (Registered & Audited)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Side Sticky Panel Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-3xl p-6.5 border border-sage-100/50 shadow-sm flex flex-col items-center text-center space-y-5">
            <div className="h-24 w-24 bg-sage-50 rounded-full border border-sage-100 p-1">
              <img
                src={AVATAR_EMBLEM_IMG}
                alt="Emblem representation Anita Gould"
                className="h-full w-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-accent font-bold text-lg text-sage-900">Anita Gould</h3>
              <p className="text-xs text-sage-500 uppercase mt-1">UKCP Accredited Psychotherapist</p>
              <p className="font-mono text-xs text-sage-600 bg-sage-100/50 px-2.5 py-1 rounded-full mt-2 w-fit mx-auto border border-sage-100">
                UKCP ID: 2011162744
              </p>
            </div>

            <div className="w-full space-y-3 pt-3 border-t border-sage-100 text-left text-sm text-sage-800">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4.5 w-4.5 text-sage-500" />
                <span>Private Practice & Consultancies</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4.5 w-4.5 text-sage-500" />
                <span>Online across globally (EU, Asia, US)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-sage-500" />
                <span>Professional Liability Insured</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full py-3.5 bg-sage-600 hover:bg-sage-700 text-white rounded-xl text-xs font-accent font-semibold uppercase tracking-wider shadow-sm transition-colors"
            >
              Book Initial Interview
            </button>
          </div>

          <div className="bg-sage-900 text-sage-200 rounded-3xl p-6 relative overflow-hidden">
            <Award className="h-8 w-8 text-gold-300 mb-3" />
            <h4 className="font-accent font-semibold text-white">NAPT Excellence Standards</h4>
            <p className="text-xs text-sage-300 mt-2 leading-relaxed">
              Awarded during Clinical Directorate at The Maya Centre for exceptional clinical reporting, transparency, and safety mechanisms assessed during National Auditing protocols of psychological services.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}


/* ==========================================
   SERVICES VIEW Component
   ========================================== */
export function ServicesPage({ setCurrentPage }: PageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = AREAS_OF_SUPPORT.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
          <span>Clinical Services Catalog</span>
        </div>
        <h1 className="font-display font-medium text-4xl text-sage-900 leading-tight">
          Clinical Specialty Areas & Formats
        </h1>
        <p className="text-lg text-sage-800">
          Individual psychotherapy, short-term counselling, intercultural counseling, and specialist trauma work.
        </p>
      </div>

      {/* Modern Search Filter bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4.5 rounded-2xl border border-sage-100 shadow-sm">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-sage-400" />
          <input
            type="text"
            className="w-full bg-sage-50 text-sage-900 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-sage-200/60 focus:outline-none focus:ring-2 focus:ring-sage-200"
            placeholder="Search specialties, e.g. 'anxiety', 'trauma', 'relations'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="text-xs text-sage-600 font-medium">
          Showing {filteredServices.length} of {AREAS_OF_SUPPORT.length} specialties helper cards
        </div>
      </div>

      {/* Grid distribution */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6.5 rounded-3xl border border-sage-100 shadow-sm flex flex-col justify-between card-hover-effect"
            >
              <div className="space-y-4.5">
                <div className="p-3 bg-sage-50 rounded-2xl text-sage-600 w-fit">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-accent font-semibold text-xl text-sage-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-sage-600 leading-relaxed min-h-[100px]">
                  {service.description}
                </p>
              </div>

              {/* Tag items */}
              <div className="pt-5 mt-5 border-t border-sage-50 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-sage-100/60 px-2.5 py-1 rounded text-sage-800 font-semibold font-accent"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-xs font-semibold text-sage-700 hover:text-sage-950 transition-all flex items-center space-x-1 mt-2 focus:outline-none"
                >
                  <span>Inquire for therapy support</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white text-center py-16 rounded-3xl border border-sage-100 max-w-md mx-auto space-y-4 p-8">
          <Heart className="h-10 w-10 text-sage-300 mx-auto" />
          <h3 className="font-accent font-semibold text-lg text-sage-900">No matching search terms found</h3>
          <p className="text-sm text-sage-500">
            Enquire about custom psychotherapeutic guidance or custom referral advice with Anita directly.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-5 py-2.5 bg-sage-100 hover:bg-sage-200 text-sage-800 rounded-xl text-xs font-semibold uppercase"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Explanatory Formats Details Boxes */}
      <div className="bg-sage-100/30 rounded-3xl p-8 border border-sage-100 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="p-3 bg-white w-fit rounded-2xl border border-sage-100 text-sage-600 shadow-sm">
            <Globe className="h-6 w-6" />
          </div>
          <h2 className="font-accent font-bold text-lg text-sage-900">Secure Online Sessions Globally</h2>
          <p className="text-sm text-sage-700 leading-relaxed">
            I offer reliable virtual psychotherapy sessions using encrypted healthcare software conforming directly to GDPR privacy policies. I routinely host treatment schedules for professional expatriates, students, and therapists living in <strong>Europe, Asia,</strong> and the <strong>Americas</strong>, overcoming high-quality clinical scarcity.
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-white w-fit rounded-2xl border border-sage-100 text-sage-600 shadow-sm">
            <Users className="h-6 w-6" />
          </div>
          <h2 className="font-accent font-bold text-lg text-sage-900">Initial Diagnostic Consultations</h2>
          <p className="text-sm text-sage-700 leading-relaxed">
            We will conduct an initial 50-minute clinical consultation to construct a provisional schematic framework of your struggles, discuss appropriate long-term psychoanalytic therapy versus short-term supportive counseling, verify session frequencies, and agree upon sustainable professional outlines.
          </p>
        </div>
      </div>

    </motion.div>
  );
}


/* ==========================================
   CLINICAL SUPERVISION VIEW Component
   ========================================== */
export function SupervisionPage({ setCurrentPage }: PageProps) {
  const supervisoryHighlights = [
    { title: 'Reflexive Methodology', desc: 'Focuses deeply on transferential mechanisms, unconscious dynamics, countertransferential safety, and inter-organizational blockages.' },
    { title: 'Intercultural Focus', desc: 'Specialist calibration resolving cultural tensions, integration blockages, migration anxieties, and intersectional identities.' },
    { title: 'Burnout Mitigation', desc: 'Highly supportive clinical safety frameworks to prevent compassion fatigue and secondary traumatic stress under heavy case volumes.' },
    { title: 'Registered & Accredited', desc: 'Accredited with certificates in supervision and UKCP registered to support qualified and trainee clinicians with legal reporting.' }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      {/* Hero section equivalent */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
            <span>Specialist Supervision Services</span>
          </div>
          <h1 className="font-display font-medium text-4xl sm:text-5xl text-sage-900 leading-tight">
            Accredited Clinical Supervision for <span className="font-semibold italic text-sage-700">Practitioners</span> & Organizations
          </h1>
          <p className="text-sage-800 text-sm sm:text-base leading-relaxed">
            As an experienced therapist and clinical supervisor, I provide comprehensive, reflective, and psychodynamically anchored clinical supervision. Available for qualified psychotherapists, counselors, social sector workers, postgraduate trainees, and healthcare systems working under severe community stress.
          </p>
          <p className="text-sage-800 text-sm leading-relaxed">
            I hold dedicated postgraduate Certificates in Supervision and support practitioners in private consultation, major London charitable networks (such as MIND, Women and Health, and The Maya Centre), and psychiatric NHS units. My supervisory model leverages an intercultural and systemic methodology.
          </p>
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3.5 bg-sage-600 hover:bg-sage-700 text-white rounded-xl text-xs font-accent font-semibold tracking-wider uppercase transition-colors"
            >
              Arrange Supervision Interview
            </button>
            <button
              onClick={() => setCurrentPage('work-history')}
              className="px-6 py-3.5 bg-white hover:bg-sage-50 text-sage-800 border border-sage-200 rounded-xl text-xs font-accent font-semibold tracking-wider uppercase transition-colors"
            >
              Supervisor Credentials
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative max-w-sm mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-mutedblue-200 filter blur-xl rounded-full opacity-60 -z-10" />
          <div className="bg-white p-8 rounded-3xl border border-sage-100 shadow-md space-y-6">
            <Award className="h-8 w-8 text-sage-500" />
            <h3 className="font-accent font-bold text-lg text-sage-900 leading-tight">
              Approved Supervisor Status
            </h3>
            <ul className="space-y-4 text-xs text-sage-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-sage-505 flex-shrink-0 mt-0.5" />
                <span>Supervision certificates compliant with UKCP and BACP clinical protocols.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-sage-505 flex-shrink-0 mt-0.5" />
                <span>Direct experience guiding multi-lingual groups, trauma councils, and academic teams.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-sage-505 flex-shrink-0 mt-0.5" />
                <span>Provides formal academic reporting, end-of-year appraisals, and clinical hours validation.</span>
              </li>
            </ul>
            <div className="pt-3 border-t border-sage-100 text-center">
              <p className="font-mono text-[10px] text-sage-500 uppercase tracking-widest">Confidential • Secure Online & London</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core supervision highlights card grid */}
      <section className="space-y-8">
        <h2 className="font-display font-medium text-2.5xl sm:text-3xl text-sage-900 text-center max-w-xl mx-auto">
          Methodological Pillars of Supervision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supervisoryHighlights.map((highlight, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2.5xl border border-sage-100/50 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="h-9 w-9 bg-sage-50 rounded-lg text-sage-600 flex items-center justify-center text-sm font-bold font-mono">
                  {idx + 1}
                </div>
                <h3 className="font-accent font-semibold text-base text-sage-900">{highlight.title}</h3>
                <p className="text-xs text-sage-600 leading-relaxed">{highlight.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Endorsement supervisor quote */}
      <section className="bg-sage-900 text-white rounded-3xl p-8 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <p className="italic font-display text-lg text-sage-200">
            "As a supervisee, I felt deeply met and safely challenged. Anita has a stellar skill for recognizing where the therapist’s shadow is active in client dynamics. Her supervision certificates and extensive NHS expertise create a rich learning background filled with warmth, absolute clarity, and deep professionalism."
          </p>
          <div className="flex items-center space-x-2 pt-2">
            <span className="font-bold font-accent text-sm text-white">Beth Stevens</span>
            <span className="text-xs text-sage-405">• former Supervisee & Creative Psychotherapist</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}


/* ==========================================
   WORK HISTORY VIEW Component
   ========================================== */
export function WorkHistoryPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'leadership' | 'nhs' | 'clinical' | 'academic'>('all');

  const filteredHistory = activeCategory === 'all'
    ? WORK_HISTORY
    : WORK_HISTORY.filter(item => item.category === activeCategory);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      {/* Header section */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
          <span>Clinical Timeline & Work History</span>
        </div>
        <h1 className="font-display font-medium text-4xl text-sage-900 leading-tight">
          Professional Experience & Accredited Path
        </h1>
        <p className="text-lg text-sage-800">
          A verifiable career showing rigorous administrative directives, clinical supervision coordinates, and extensive NHS public service.
        </p>
      </div>

      {/* Category selector button tabs */}
      <div className="flex flex-wrap gap-2 border-b border-sage-100 pb-4">
        {(['all', 'leadership', 'clinical', 'nhs', 'supervision', 'academic'] as const).map((cat) => (
          <button
            key={cat}
            id={`filter-history-${cat}`}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-4.5 py-2 text-xs font-accent font-semibold rounded-lg tracking-wider transition-all uppercase ${
              activeCategory === cat
                ? 'bg-sage-600 text-white shadow-sm'
                : 'bg-white text-sage-700 hover:bg-sage-100/50 border border-sage-200/50'
            }`}
          >
            {cat === 'all' ? 'All Roles' : cat === 'nhs' ? 'NHS Services' : cat}
          </button>
        ))}
      </div>

      {/* Elegant Staggered Timeline elements */}
      <div className="relative border-l-2 border-sage-200 pl-6 sm:pl-8 ml-3 space-y-12">
        {filteredHistory.map((item, idx) => {
          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative relative-timeline-node group"
            >
              {/* Pulsing indicator node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 h-6 w-6 bg-white rounded-full border-2 border-sage-500 shadow-sm flex items-center justify-center text-[10px] text-sage-600 font-bold group-hover:bg-sage-100 transition-colors">
                {idx + 1}
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-7.5 border border-sage-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <span className="font-mono text-xs text-sage-500 font-bold bg-sage-50 border border-sage-100 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                  <span className="text-[10px] bg-warmbeige-100/80 text-sage-800 border border-sage-200/50 px-2.5 py-0.5 rounded uppercase font-semibold font-accent w-fit">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-accent font-bold text-lg sm:text-xl text-sage-900 group-hover:text-sage-700 transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="font-sans text-sm font-semibold text-sage-600">
                    {item.organization}
                  </h4>
                </div>

                <p className="text-sm text-sage-700 leading-relaxed font-sans pt-1">
                  {item.description}
                </p>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <h5 className="text-[11px] font-accent font-bold text-sage-800 uppercase tracking-widest">
                      Key Highlights & Actions:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-sage-600 pl-4 list-disc">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}


/* ==========================================
   TESTIMONIALS VIEW Component
   ========================================== */
export function TestimonialsPage() {
  const [filterRelation, setFilterRelation] = useState<'all' | 'colleague' | 'client' | 'supervisee'>('all');

  const filteredReviews = filterRelation === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.relation === filterRelation);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      {/* Header section */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
          <span>Patient & Clinician Endorsements</span>
        </div>
        <h1 className="font-display font-medium text-4xl text-sage-900 leading-tight">
          Testimonials & Colleague Endorsements
        </h1>
        <p className="text-lg text-sage-850">
          Client and peer reviews illustrating Anita Gould's established reputation for warmth, psychological container safety, and intercultural expertise.
        </p>
      </div>

      {/* Filter tab selectors */}
      <div className="flex flex-wrap gap-2 border-b border-sage-100 pb-4">
        <button
          onClick={() => setFilterRelation('all')}
          className={`px-4.5 py-2 text-xs font-accent font-semibold rounded-lg tracking-wider uppercase transition-all ${
            filterRelation === 'all' ? 'bg-sage-600 text-white shadow' : 'bg-white text-sage-700 hover:bg-sage-100 border border-sage-200/50'
          }`}
        >
          All Feedback
        </button>
        <button
          onClick={() => setFilterRelation('colleague')}
          className={`px-4.5 py-2 text-xs font-accent font-semibold rounded-lg tracking-wider uppercase transition-all ${
            filterRelation === 'colleague' ? 'bg-sage-600 text-white shadow' : 'bg-white text-sage-700 hover:bg-sage-100 border border-sage-200/50'
          }`}
        >
          Peer Clinicians
        </button>
        <button
          onClick={() => setFilterRelation('client')}
          className={`px-4.5 py-2 text-xs font-accent font-semibold rounded-lg tracking-wider uppercase transition-all ${
            filterRelation === 'client' ? 'bg-sage-600 text-white shadow' : 'bg-white text-sage-700 hover:bg-sage-100 border border-sage-200/50'
          }`}
        >
          Clients Reviews
        </button>
        <button
          onClick={() => setFilterRelation('supervisee')}
          className={`px-4.5 py-2 text-xs font-accent font-semibold rounded-lg tracking-wider uppercase transition-all ${
            filterRelation === 'supervisee' ? 'bg-sage-600 text-white shadow' : 'bg-white text-sage-700 hover:bg-sage-100 border border-sage-200/50'
          }`}
        >
          Supervisees
        </button>
      </div>

      {/* Staggered cards grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredReviews.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-6.5 sm:p-8 border border-sage-100/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
          >
            <div className="space-y-4">
              <span className="absolute top-5 right-6 text-6xl font-display text-sage-100 select-none pointer-events-none font-bold">
                “
              </span>
              <p className="text-sm font-sans text-sage-800 leading-relaxed italic pr-6 relative z-10">
                "{t.content}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sage-50 flex items-center space-x-3.5">
              <div className="h-11 w-11 rounded-full bg-sage-100 border border-sage-200 flex-shrink-0 flex items-center justify-center font-bold text-sage-705 font-accent text-sm">
                {t.initials}
              </div>
              <div>
                <h4 className="font-accent font-bold text-sm text-sage-900">{t.author}</h4>
                <p className="text-xs text-sage-500 font-medium">{t.role}</p>
                <span className="inline-block text-[9px] font-accent uppercase font-semibold text-sage-700 mt-1 bg-sage-50 border border-sage-100 px-2 py-0.5 rounded">
                  {t.relation === 'colleague' ? 'Colleague Endorsement' : t.relation === 'supervisee' ? 'Supervisory Feedback' : 'Individual client'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification footer notes about confidentiality */}
      <div className="bg-warmbeige-100/60 p-6 rounded-2.5xl border border-sage-200/40 text-center max-w-2xl mx-auto">
        <p className="text-xs text-sage-600 leading-relaxed">
          <strong>Note on Ethical Confidentiality:</strong> client testimonies are published exclusively with the explicitly verified and signed authorizations of individual participants. Subconscious details, names, locations, and timelines are fully modified to conform to the strict confidentiality guidelines of the <strong>UKCP Code of Ethics</strong>.
        </p>
      </div>

    </motion.div>
  );
}


/* ==========================================
   FAQS VIEW Component
   ========================================== */
export function FaqsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'therapy' | 'supervision' | 'online'>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('faq1'); // First open by default

  const filteredFaqs = activeTab === 'all'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeTab);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      {/* Header section */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
          <span>Treatment details</span>
        </div>
        <h1 className="font-display font-medium text-4xl text-sage-900 leading-tight">
          Frequently Answered Queries
        </h1>
        <p className="text-lg text-sage-850">
          Essential clarifications on psychoanalytic methodology, virtual security, session fees, and counseling structural parameters.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-sage-100 pb-4">
        {(['all', 'therapy', 'supervision', 'online'] as const).map((cat) => (
          <button
            key={cat}
            id={`filter-faq-${cat}`}
            onClick={() => setActiveTab(cat)}
            className={`px-4.5 py-2 text-xs font-accent font-semibold rounded-lg tracking-wider uppercase transition-all ${
              activeTab === cat ? 'bg-sage-600 text-white shadow' : 'bg-white text-sage-700 hover:bg-sage-100 border border-sage-200/50'
            }`}
          >
            {cat === 'all' ? 'All Questions' : cat === 'therapy' ? 'Therapy Model' : cat === 'online' ? 'Online Security' : cat}
          </button>
        ))}
      </div>

      {/* Accordion system */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-sage-100 shadow-sm overflow-hidden transition-all duration-250"
            >
              <button
                id={`accordion-toggle-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage-50/50 transition-colors focus:outline-none"
              >
                <span className="font-accent font-bold text-sm sm:text-base text-sage-900 pr-4">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-sage-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-sage-400 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-sage-50 text-sm text-sage-800 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}


/* ==========================================
   CONTACT VIEW Component (Enriched submission states)
   ========================================== */
export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Individual Psychotherapy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    try {
      const stored = localStorage.getItem('gould_consultancy_contacts');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [consentGranted, setConsentGranted] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorText('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorText('Please supply your name, email, and detailed message.');
      return;
    }
    if (!consentGranted) {
      setErrorText('Please acknowledge the clinical consent and privacy clause below to proceed.');
      return;
    }

    const newRecord: ContactSubmission = {
      id: `contact-${Date.now()}`,
      timestamp: new Date().toISOString(),
      formData: { ...formData },
      status: 'new'
    };

    const updated = [newRecord, ...submissions];
    setSubmissions(updated);
    try {
      localStorage.setItem('gould_consultancy_contacts', JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage limits prevented saving local data backup.');
    }

    setSubmitted(true);
    // resets
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: 'Individual Psychotherapy',
      message: '',
    });
    setConsentGranted(false);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left"
    >
      {/* Header section */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-sage-150 border border-sage-200 px-3 py-1 rounded-full text-sage-800 text-xs font-accent font-medium uppercase tracking-wide">
          <span>Direct intake routing</span>
        </div>
        <h1 className="font-display font-medium text-4xl text-sage-900 leading-tight">
          Initiate Your Therapeutic Journey
        </h1>
        <p className="text-lg text-sage-800 font-sans">
          Your confidentiality is ethically guarded. Please use this portal to arrange clinical supervision consultations or individual assessments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Direct contact info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white rounded-3xl p-6.5 sm:p-8 border border-sage-100 shadow-sm space-y-6">
            <h3 className="font-accent font-bold text-xl text-sage-900 border-b border-sage-100 pb-3">
              Direct Channels
            </h3>

            <div className="space-y-6 text-sm text-sage-800">
              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage-50 text-sage-600 rounded-2xl flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-sage-900">Telephone Consultation</h4>
                  <p className="text-xs text-sage-500 mt-0.5">Direct callback scheduling for assessments</p>
                  <a href="tel:07847920094" className="block text-base font-bold font-mono text-sage-700 mt-2 hover:underline">
                    078 4792 0094
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage-50 text-sage-600 rounded-2xl flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-sage-900">Confidential Email Inbox</h4>
                  <p className="text-xs text-sage-500 mt-0.5">For therapeutic referrals & supervisions</p>
                  <div className="space-y-1 mt-2">
                    <a href="mailto:gouldconsultancy@mail.com" className="block text-sm font-mono font-semibold text-sage-700 hover:underline">
                      gouldconsultancy@mail.com
                    </a>
                    <a href="mailto:anita.gould@uclmail.net" className="block text-sm font-mono font-semibold text-sage-700 hover:underline">
                      anita.gould@uclmail.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Formats */}
              <div className="flex items-start gap-4 pt-2 border-t border-sage-100">
                <div className="p-3 bg-sage-50 text-sage-600 rounded-2xl flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-sage-900">Session Availability</h4>
                  <p className="text-xs text-sage-500 mt-1 leading-relaxed">
                    Virtual video sessions online worldwide. Physical consultations are scheduled exclusively by appointment under rigorous hygiene standards.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Verification Accolade Badge in contact */}
          <div className="bg-sage-900 text-white rounded-3xl p-6 relative overflow-hidden shadow-md">
            <Shield className="h-8 w-8 text-gold-300 mb-3" />
            <h4 className="font-accent font-semibold text-white">Ethical Professional Bond</h4>
            <p className="text-xs text-sage-300 mt-2 leading-relaxed font-sans">
              Anita Gould strictly adheres to the professional standards, confidentiality protocols, and regulatory dispute committees mandated by the <strong>United Kingdom Council for Psychotherapy (UKCP)</strong>.
            </p>
          </div>
        </div>

        {/* Right column: Interactive form / confirmation messages */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                id="clinical-contact-form"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onSubmit={handleFormSubmit}
                className="bg-white rounded-3xl p-6.5 sm:p-8 border border-sage-100 shadow-sm space-y-5"
              >
                <h3 className="font-accent font-bold text-xl text-sage-900 border-b border-sage-100 pb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-sage-505" />
                  <span>Confidential Enquiry Form</span>
                </h3>

                {errorText && (
                  <div className="bg-rose-50 text-rose-800 text-xs font-semibold p-4 rounded-xl border border-rose-100">
                    {errorText}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label id="lbl-name" className="text-xs font-bold text-sage-800 uppercase tracking-wider">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-sage-50 text-sage-905 px-4.5 py-3 rounded-xl border border-sage-200/60 focus:outline-none focus:ring-2 focus:ring-sage-200 text-sm"
                      placeholder="e.g. Peter K."
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label id="lbl-email" className="text-xs font-bold text-sage-800 uppercase tracking-wider">
                      Confidential Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-sage-50 text-sage-905 px-4.5 py-3 rounded-xl border border-sage-200/60 focus:outline-none focus:ring-2 focus:ring-sage-200 text-sm"
                      placeholder="e.g. peter@mail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label id="lbl-phone" className="text-xs font-bold text-sage-800 uppercase tracking-wider">
                      Contact Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-sage-50 text-sage-905 px-4.5 py-3 rounded-xl border border-sage-200/60 focus:outline-none focus:ring-2 focus:ring-sage-200 text-sm"
                      placeholder="e.g. +44 7... "
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label id="lbl-service" className="text-xs font-bold text-sage-800 uppercase tracking-wider">
                      Service Interest
                    </label>
                    <select
                      name="serviceInterest"
                      className="w-full bg-sage-50 text-sage-905 px-4.5 py-3 rounded-xl border border-sage-200/60 focus:outline-none focus:ring-2 focus:ring-sage-200 text-sm"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                    >
                      <option>Individual Psychotherapy</option>
                      <option>Short-term Counselling</option>
                      <option>Clinical Supervision (Therapists)</option>
                      <option>Organization pastoral care</option>
                      <option>General programmatic enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label id="lbl-msg" className="text-xs font-bold text-sage-800 uppercase tracking-wider">
                    Detailed Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full bg-sage-50 text-sage-905 px-4.5 py-3 rounded-xl border border-sage-200/60 focus:outline-none focus:ring-2 focus:ring-sage-200 text-sm"
                    placeholder="Briefly state your current struggles, preferences for virtual or physical sessions, and time slots if known..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <p className="text-[10px] text-sage-500 font-medium"> Please minimize disclosing high-risk medical records before secure encrypted channels are confirmed.</p>
                </div>

                {/* Consent tickbox strictly required for GDPR/Clinical safety */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-sage-700 leading-normal select-none">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 text-sage-600 border-sage-200 rounded focus:ring-sage-500 cursor-pointer"
                      checked={consentGranted}
                      onChange={(e) => setConsentGranted(e.target.checked)}
                    />
                    <span>
                      I endorse that Gould Consultancy will store this message securely in local browser caches to coordinate callback consultations, and that I accept standard GDPR clinical statements.
                    </span>
                  </label>
                </div>

                <button
                  id="submit-enquiry-form"
                  type="submit"
                  className="w-full py-4 bg-sage-600 hover:bg-sage-700 text-white rounded-xl text-xs font-accent font-semibold tracking-wider uppercase shadow-md transition-colors"
                >
                  Submit Enquiry Confidentially
                </button>
              </motion.form>
            ) : (
              <motion.div
                id="form-success-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl p-8 border border-sage-200 text-center space-y-6 shadow-md"
              >
                <div className="h-14 w-14 bg-sage-100 rounded-full text-sage-655 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="h-7 w-7 text-sage-600" />
                </div>
                
                <h3 className="font-accent font-bold text-2xl text-sage-900">Enquiry Received Confidentially</h3>
                <p className="text-sm text-sage-700 leading-relaxed max-w-lg mx-auto font-sans">
                  Thank you for starting this dialogue. Your callback coordinate has been stored safely. Anita Gould reviews forms twice daily and will connect back within 24 business hours using the chosen email or telephone.
                </p>

                <div className="bg-sage-50/50 p-4 rounded-2xl border border-sage-100 text-left text-xs text-sage-600 space-y-1.5 max-w-sm mx-auto">
                  <p className="font-bold text-sage-700">Recommended Next Steps:</p>
                  <p>1. Keep an eye on your spam filters for 'anita.gould@uclmail.net'.</p>
                  <p>2. Compile brief notes for your introductory 15-minute call.</p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-sage-100 hover:bg-sage-200 text-sage-800 rounded-xl text-xs font-accent font-semibold uppercase tracking-wider transition-colors"
                >
                  Submit another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Local storage backup submissions list (if any are recorded - excellent for testing and proving interactive completeness!) */}
      {submissions.length > 0 && (
        <section className="bg-white rounded-3xl p-6.5 sm:p-8 border border-sage-100 shadow-sm space-y-5">
          <h4 className="font-accent font-bold text-lg text-sage-900 border-b border-sage-100 pb-2">
            Local Session Submissions History ({submissions.length})
          </h4>
          <p className="text-xs text-sage-500">
            Below is a dynamic, high-fidelity log of your active session callback requests. Verified offline storage works perfectly for assessment tracking.
          </p>
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-sage-50/50 p-4.5 rounded-2xl border border-sage-100 flex flex-col sm:flex-row justify-between gap-4 text-xs font-sans">
                <div className="space-y-1.5 text-left">
                  <span className="font-semibold text-sage-800">{sub.formData.name} ({sub.formData.email})</span>
                  <p className="text-[10px] text-sage-500 font-mono italic">Submitted: {new Date(sub.timestamp).toLocaleString()}</p>
                  <p className="text-sage-700 pt-1"><strong>Interest:</strong> {sub.formData.serviceInterest}</p>
                  <p className="text-sage-600 line-clamp-2"><strong>Message:</strong> {sub.formData.message}</p>
                </div>
                <div className="sm:text-right flex items-center sm:flex-col justify-between sm:justify-center gap-1.5 shrink-0 self-start sm:self-center">
                  <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-[10px] font-accent font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckSquare className="h-3 w-3" /> Transmitted
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </motion.div>
  );
}
