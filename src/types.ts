/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'supervision'
  | 'work-history'
  | 'testimonials'
  | 'faqs'
  | 'contact';

export interface AreaOfSupport {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface WorkHistoryItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  achievements?: string[];
  category: 'leadership' | 'nhs' | 'clinical' | 'academic' | 'supervision';
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  relation: 'client' | 'colleague' | 'supervisee';
  content: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'therapy' | 'supervision' | 'online';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  message: string;
}

export interface ContactSubmission {
  id: string;
  timestamp: string;
  formData: ContactFormData;
  status: 'new' | 'read' | 'replied';
}
