/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS, FAQS } from '../data';

interface SEOHandlerProps {
  pageId: PageId;
}

export default function SEOHandler({ pageId }: SEOHandlerProps) {
  useEffect(() => {
    // 1. Dynamic Meta Titles and Descriptions
    let title = "Gould Consultancy | Psychotherapy & Counselling Services London & Online";
    let desc = "Compassionate, professional psychoanalytic psychotherapy and clinical supervision by Anita Gould (UKCP Accredited). Over 20 years of clinical experience in NHS, Mind, and private practice.";
    
    switch (pageId) {
      case 'home':
        title = "Gould Consultancy | Psychotherapy & Counselling London & Online";
        desc = "Compassionate psychoanalytic psychotherapy and counselling by Anita Gould, UKCP registered. Over 20 years of NHS & private practice experience helping with anxiety, depression, trauma, and relationships.";
        break;
      case 'about':
        title = "About Anita Gould | UKCP Accredited Psychoanalytic Psychotherapist";
        desc = "Discover Anita Gould's professional clinical background, UCL anthropology credentials, MSc in Intercultural Therapy, and 20+ years of high-trust therapy leadership.";
        break;
      case 'services':
        title = "Therapeutic Services & Areas of Support | Gould Consultancy";
        desc = "Professional therapy for relationship difficulties, panic attacks, depression, developmental trauma and anxiety. Customized long-term and short-term counselling.";
        break;
      case 'supervision':
        title = "Clinical Supervision for Therapists & Counsellors | Anita Gould";
        desc = "Accredited psychodynamic and intercultural clinical supervision for qualified therapists, students, charities, and healthcare groups. Secure online consultations.";
        break;
      case 'work-history':
        title = "Professional Work History & Timeline | Anita Gould UKCP";
        desc = "Explore Anita Gould's career timeline as Clinical Director at The Maya Centre, Head of Therapy at Mind, and Head of Psychological Therapy at Royal Academy of Music.";
        break;
      case 'testimonials':
        title = "Client Testimonials & Professional Endorsements | Anita Gould";
        desc = "Read verified colleague reviews, clinical feedback, and student testimonials praising Anita Gould's clinical depth, compassion, and intercultural expertise.";
        break;
      case 'faqs':
        title = "Counselling & Psychotherapy FAQs | Gould Consultancy";
        desc = "Questions and answers about psychoanalytic psychotherapy, rates, online security, therapy duration, and UKCP accreditations.";
        break;
      case 'contact':
        title = "Contact Anita Gould | Psychotherapy Consultations London & Online";
        desc = "Call 078 4792 0094 or email gouldconsultancy@mail.com to arrange your initial psychotherapy assessment or clinical supervision session.";
        break;
    }

    // Update index metadata
    document.title = title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);

    // Update Open Graph tags for premium social linking
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', desc);

    // 2. Generate and Inject Structured Rich JSON-LD Schemas
    const schemas: any[] = [];

    // Base Person / Therapist schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anita Gould",
      "jobTitle": "Psychoanalytic Psychotherapist & Clinical Supervisor",
      "description": "UKCP Accredited Psychotherapist with over 20 years of clinical experience in the NHS, voluntary sectors, and high-performance arts settings.",
      "telephone": "+44-78-4792-0094",
      "email": "gouldconsultancy@mail.com",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "University College London",
          "award": "BSc (Hons) Anthropology, MSc Intercultural Therapy"
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "United Kingdom Council for Psychotherapy (UKCP)"
        }
      ]
    };
    schemas.push(personSchema);

    // LocalBusiness & ProfessionalService schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Gould Consultancy Counselling & Psychotherapy Services",
      "alternateName": "Gould Consultancy",
      "image": "https://picsum.photos/seed/gould/600/400",
      "telephon": "+44-78-4792-0094",
      "email": "gouldconsultancy@mail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.5074",
        "longitude": "-0.1278"
      },
      "url": "https://gould-consultancy-therapy.com",
      "areaServed": ["GB", "Europe", "Asia", "Americas"],
      "knowsAbout": [
        "Psychoanalytic Psychotherapy",
        "Clinical Supervision",
        "Intercultural Therapy",
        "Trauma Recovery",
        "Anxiety and Panic Counselling",
        "Depression Therapy",
        "Relationship DIFFICULTIES"
      ]
    };
    schemas.push(serviceSchema);

    // FAQ schema for FAQ page
    if (pageId === 'faqs') {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
      schemas.push(faqSchema);
    }

    // Review/Testimonial schema
    if (pageId === 'testimonials' || pageId === 'home') {
      const reviews = TESTIMONIALS.map(t => ({
        "@type": "Review",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Gould Consultancy"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": t.author
        },
        "reviewBody": t.content
      }));
      schemas.push(...reviews);
    }

    // Inject Schemas to page
    let scriptTag = document.getElementById('ld-json-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'ld-json-schema');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas, null, 2);

    return () => {
      // cleanups can occur here if needed, but keeping them registered helps persistent crawls
    };
  }, [pageId]);

  return null; // Side-effect only
}
