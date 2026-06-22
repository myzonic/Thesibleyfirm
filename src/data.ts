/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AreaOfSupport, WorkHistoryItem, TestimonialItem, FaqItem } from './types';

export const AREAS_OF_SUPPORT: AreaOfSupport[] = [
  {
    id: 'relationships',
    title: 'Relationship Difficulties',
    description: 'Whether navigating individual difficulties within relationships, family configurations, clinical dynamics, or repetitive conflicts, we work together to uncover deep relational patterns and restore healthy communication and connection.',
    keywords: ['Conflict resolution', 'Intimacy blocks', 'Attachment patterns', 'Family conflicts', 'Relational trauma']
  },
  {
    id: 'depression',
    title: 'Depression & Emptiness',
    description: 'Working gently to understand the roots of systemic sadness, existential fatigue, lack of motivation, and emotional isolation. Psychoanalytic therapy helps bring underlying subconscious drivers into light.',
    keywords: ['Persistent sadness', 'Lethargy', 'Loss of meaning', 'Low motivation', 'Melancholia']
  },
  {
    id: 'anxiety',
    title: 'Anxiety & Panic Attacks',
    description: 'Helping clients decode the physical and mental alarms of panic, generalized anxiety, and social discomfort. Together we look beyond immediate symptom relief toward understanding the underlying message of anxiety.',
    keywords: ['Panic attacks', 'Chronic worry', 'Somatic alarm', 'Social anxiety', 'Hypervigilance']
  },
  {
    id: 'stress',
    title: 'Stress-Related Problems',
    description: 'Navigating professional burn-out, intense corporate pressure, or overwhelming life demands. We address both practical pacing and deeper emotional patterns of perfectionism.',
    keywords: ['Burn-out', 'Chronic stress', 'Work-life boundaries', 'Somatic tension', 'Overwhelm']
  },
  {
    id: 'trauma',
    title: 'PTSD & Trauma Recovery',
    description: 'Processing complex trauma and developmental stress securely. Utilizing an integrated somatic and psychoanalytic framework to restore physical safety, agency, and self-integration.',
    keywords: ['Complex Trauma', 'Hyperarousal', 'Developmental trauma', 'Flashbacks', 'Somatic recovery']
  },
  {
    id: 'domestic-abuse',
    title: 'Domestic Abuse & Violence',
    description: 'A compassionate, secure harbor to process coercive control, emotional abuse, or physical violence. Focusing on validating your experience, boundary building, and re-establishing safe agency.',
    keywords: ['Coercive control', 'Psychological recovery', 'Safety boundaries', 'Empowerment', 'Healing trauma']
  },
  {
    id: 'sexual-abuse',
    title: 'Sexual Abuse Recovery',
    description: 'Dedicated trauma-informed support to process experiences of past or recent abuse. We pace therapy strictly around your comfort, healing boundaries, and restoring body-ownership.',
    keywords: ['Trauma-informed care', 'Body agency', 'Shame reduction', 'Somatic processing', 'Boundary healing']
  },
  {
    id: 'bereavement',
    title: 'Bereavement & Complicated Loss',
    description: 'Processing acute grief, sudden endings, and the destabilizing nature of loss. Giving place, voice, and time to the complex layers of mourning.',
    keywords: ['Grief counseling', 'Sudden bereavement', 'Complex mourning', 'Life after loss', 'Meaning-making']
  },
  {
    id: 'transitions',
    title: 'Life Transitions',
    description: 'Providing active psychological scaffolding during monumental life shifts: redundancies, career pivots, retirement, marriage, divorce, relocation, or structural changes to identity.',
    keywords: ['Identity transition', 'Pivots', 'Relocation stress', 'Divorce recovery', 'Aging & life stages']
  },
  {
    id: 'self-esteem',
    title: 'Confidence & Self-Esteem Issues',
    description: 'Deconstructing intense internal self-criticism, imposter syndrome, and deep-seated insecurities. Cultivating a compassionate, sustainable relationship with oneself.',
    keywords: ['Imposter syndrome', 'Self-criticism', 'Insecurity', 'Healthy assertiveness', 'Self-compassion']
  },
  {
    id: 'eating-disorders',
    title: 'Mild Eating Disorders',
    description: 'Exploring the symbolic role of food, body image conflicts, and control mechanisms. Helping restore a healthier, peaceful dialogues between mind and body.',
    keywords: ['Body dysmorphia', 'Emotional eating', 'Relationship with food', 'Somatic healing', 'Control behaviors']
  },
  {
    id: 'anger',
    title: 'Anger Management & Expression',
    description: 'Looking beneath destructive anger responses to find underlying grief, frustration, or unmet needs. Learning healthy integration, boundaries, and emotional expression.',
    keywords: ['Frustration tolerance', 'Healthy boundaries', 'Grief processing', 'Triggers', 'Emotional expression']
  },
  {
    id: 'personal-growth',
    title: 'Personal Growth & Self-Exploration',
    description: 'For clients not experiencing critical crises but seeking deep self-knowledge, exploration of cultural background, ancestral threads, existential reflection, and enrichment of creative flow.',
    keywords: ['Self-discovery', 'Intercultural identity', 'Ancestral exploration', 'Creative blocks', 'Meaning-making']
  }
];

export const WORK_HISTORY: WorkHistoryItem[] = [
  {
    id: 'ram',
    period: '2016 - 2024',
    role: 'Head of Psychological Therapy Services',
    organization: 'The Royal Academy of Music',
    description: 'Directed clinical therapy services for world-class musicians, artists, and educators. Tailored therapy approaches to high-performance anxiety, creative blocks, cultural integration during international studies, existential stress, and trauma. Developed specialized institutional guidelines for psychological safety and pastoral care.',
    achievements: [
      'Engineered a comprehensive proactive mental health curriculum for elite international performers.',
      'Established high-trust crisis-consultation systems and interdisciplinary pastoral networks.',
      'Pioneered specialized workshops addressing creative blockages, performance anxiety, and identity shifts.'
    ],
    category: 'leadership'
  },
  {
    id: 'maya-centre',
    period: '2012 - 2017',
    role: 'Clinical Director',
    organization: 'The Maya Centre',
    description: 'Chambered as Clinical Director for a renowned women\'s psychotherapy charity specializing in multi-lingual, intercultural counseling and processing complex trauma (domestic abuse, sexual assault, and modern slavery). Managed multi-disciplinary therapists, researchers, and clinical supervisors.',
    achievements: [
      'Secured national recognition and honors including the National Audit of Psychological Therapies (NAPT) Quality Improvement Awards.',
      'Expanded bilingual psychological offerings to cater to diaspora from active conflict zones globally.',
      'Authored rigorous clinical safety framework policies and standards for trauma-informed care.'
    ],
    category: 'leadership'
  },
  {
    id: 'mind-barnet',
    period: '2008 - 2013',
    role: 'Head of Therapy Services',
    organization: 'Mind in Barnet',
    description: 'Overlooked the clinical architecture of adult psychotherapy, counseling, and peer support systems. Mentored junior therapists and clinical trainees, reinforcing ethical, psychotherapeutic boundaries.',
    achievements: [
      'Expanded community outreach and service availability, decreasing clinical waitlists by 40%.',
      'Unified primary therapist networks to provide streamlined intake assessments.'
    ],
    category: 'clinical'
  },
  {
    id: 'women-health',
    period: '2005 - 2011',
    role: 'Clinical Supervisor',
    organization: 'Women and Health',
    description: 'Provided specialized clinical supervision to therapists, counsellors, and practitioners working in intensive trauma care, high-deprivation sectors, and domestic hazard support schemes.',
    achievements: [
      'Fostered highly reflexive workspace practices to mitigate secondary traumatic stress and team burnout.',
      'Sustained long-term supervision modules incorporating intercultural clinical perspectives.'
    ],
    category: 'supervision'
  },
  {
    id: 'mind-enfield',
    period: '2004 - 2008',
    role: 'Counselling Service Manager',
    organization: 'Mind in Enfield',
    description: 'Spearheaded counseling schedules, supervised clinical teams, handled client intake processing, and streamlined psychiatric referrals for major local populations.',
    category: 'clinical'
  },
  {
    id: 'nafsiyat',
    period: '2001 - 2006',
    role: 'Specialist Intercultural Psychotherapist',
    organization: 'Nafsiyat Inter-Cultural Therapy Centre',
    description: 'Delivered critical culturally adaptive clinical psychotherapy to refugee families, second-generation diaspora, and clients facing systemic discrimination. Investigated the complex intersection between Western diagnostic models and varied cultural structures.',
    category: 'nhs'
  },
  {
    id: 'nhs-psych',
    period: '1999 - 2005',
    role: 'NHS Clinical Specialist Psychotherapist',
    organization: 'NHS Trust Mental Health Units',
    description: 'Served within primary care and secondary psychological wards. Handled diagnostic appraisals, group therapy dynamics, psychiatric follow-ups, and long-term psychoanalytic therapy cases.',
    category: 'nhs'
  },
  {
    id: 'westminster',
    period: '1997 - 2002',
    role: 'Specialist Psychotherapy Consultant',
    organization: 'Westminster Pastoral Foundation (WPF)',
    description: 'Supported psychodynamic training operations, handled client counseling schedules, and contributed to clinical study groups exploring early life developmental traumas.',
    category: 'clinical'
  },
  {
    id: 'refugee-support',
    period: '1995 - 1999',
    role: 'Crisis Psychotherapeutic Practitioner',
    organization: 'Refugee Support Centre',
    description: 'Delivered acute, interlingual diagnostic assistance, psychological first-aid, and non-verbal trauma support systems to individuals relocating from active global war zones and refugee setups.',
    category: 'nhs'
  },
  {
    id: 'academics',
    period: 'Credentials & Studies',
    role: 'Academic Credentials and Accreditations',
    organization: 'Professional Status',
    description: 'Anita\'s rich anthropological background underpins her sensitive intercultural framework, providing a highly comprehensive clinical toolkit.',
    achievements: [
      'BSc (Hons) Anthropology (University College London - UCL)',
      'MSc Intercultural Therapy (University College London - UCL)',
      'Registered Member & Accredited Psychotherapist - UKCP (United Kingdom Council for Psychotherapy)',
      'Postgraduate Diploma in Psychoanalytic Psychotherapy & Clinical Supervision Certificates'
    ],
    category: 'academic'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'witney',
    author: 'Whitney Shaw-Dale',
    role: 'Senior Clinical Colleague & Supervisor',
    relation: 'colleague',
    content: 'Anita Gould possesses an extraordinary capacity to synthesize profound psychoanalytic theory with immediate, grounded human empathy. Having witnessed her clinical leadership first-hand at The Maya Centre, her dedication to intercultural accessibility and robust ethical boundaries makes her an exceptional clinician and clinical supervisor of the highest order.',
    initials: 'WS'
  },
  {
    id: 'martina',
    author: 'Martina Jean-Jacques',
    role: 'Somatic Trauma Practitioner & Psychotherapist',
    relation: 'colleague',
    content: 'Working under Anita\'s Clinical Direction was a defining moment in my development. She brings an anthropological curiosity that breaks down sterile diagnostic labels, leaving space for the unique narrative of the individual. Her insight, compassion, and commitment to multi-lingual care are highly transformative.',
    initials: 'MJ'
  },
  {
    id: 'peter',
    author: 'Peter K.',
    role: 'Former Individual Psychotherapy Client',
    relation: 'client',
    content: 'I came to Anita at a time of profound professional burnout and a lifetime of unprocessed panic. Her calm, unshakeable guidance provided an incredibly safe space. She did not just offer quick fixes; she helped me understand the structural blueprint of my anxiety. I have regained a quiet, authentic confidence in both life and relationships.',
    initials: 'PK'
  },
  {
    id: 'asalet',
    author: 'Asalet Tulaz',
    role: 'Clinical Academic & Intercultural Counselor',
    relation: 'colleague',
    content: 'Anita\'s anthropological scholarship coupled with extensive clinical practice allows her to engage with diaspora and traumatized individuals with stunning precision. She understands the somatic weight of displacement, marginalization, and cultural collision. An invaluable specialist.',
    initials: 'AT'
  },
  {
    id: 'beth',
    author: 'Beth Stevens',
    role: 'Former Supervisee & Creative Psychotherapist',
    relation: 'supervisee',
    content: 'As a supervisee, I felt deeply met and safely challenged. Anita has a stellar skill for recognizing where the therapist’s shadow is active in client dynamics. Her supervision certificates and extensive NHS expertise create a rich learning background filled with warmth, absolute clarity, and deep professionalism.',
    initials: 'BS'
  },
  {
    id: 'aura',
    author: 'Aura Rico',
    role: 'Refugee Support Coordinator & Social Care Consultant',
    relation: 'colleague',
    content: 'Anita Gould’s work during National Trauma initiatives has set standard procedures for intercultural crisis care. Her dedication won praise throughout NAPT Quality Improvement assessments. Her presence brings emotional containment to chaotic scenarios.',
    initials: 'AR'
  },
  {
    id: 'emma',
    author: 'Emma Craig',
    role: 'Professional Musician & Educator',
    relation: 'client',
    content: 'At the Royal Academy of Music, Anita’s therapeutic intervention was a lifeline. She uniquely understands the psychological costs of creative high-performance, stage anxiety, and intense self-criticism. Her presence is grounding, intellectual, and deeply comforting.',
    initials: 'EC'
  },
  {
    id: 'thais',
    author: 'Thais Clemente Roscia',
    role: 'Systemic Family Therapist',
    relation: 'colleague',
    content: 'Anita is exceptionally skilled at detecting structural family patterns. She blends systemic ideas with deep psychoanalytic inquiry. She brings a serene authority and highly refined clinical vision to all complex consultations.',
    initials: 'TR'
  },
  {
    id: 'sima',
    author: 'Sima S.',
    role: 'Former Online Psychotherapy Client',
    relation: 'client',
    content: 'Finding Anita for online psychotherapy while living abroad in Asia was a godsend. Despite the distance, our weekly secure video sessions felt as connected and holding as being in a cozy physical consulting room. Her approach to my cultural transition was highly validating.',
    initials: 'SS'
  },
  {
    id: 'nandu',
    author: 'Nandu Menon',
    role: 'Therapist & Research Fellow',
    relation: 'colleague',
    content: 'Among clinical supervisors, Anita is revered for her analytical depth and intercultural focus. She offers superb navigation of the complex relational pathways, making her a crucial sounding board for senior and trainee practitioners alike.',
    initials: 'NM'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What is psychoanalytic psychotherapy and how does it work?',
    answer: 'Unlike cognitive-behavioral therapies that focus on immediate symptom management or modifying conscious thoughts, psychoanalytic psychotherapy aims to uncover the deep-rooted subconscious drivers that shape our feelings, behaviors, and relationships. By exploring childhood memories, dreams, patterns of attachment, and defense mechanisms, you develop a fundamental self-awareness that brings sustainable, long-term relief from psychological distress and triggers.',
    category: 'therapy'
  },
  {
    id: 'faq2',
    question: 'How is therapy structured? What is the difference between counselling and psychotherapy?',
    answer: 'Counselling is typically shorter-term (e.g., 6 to 12 weekly sessions) and centers on resolving immediate problems, life adjustments, or specific stressors (like redundancy or relationship conflict). Psychotherapy is an open-ended, deeper exploration of lifelong, persistent struggles, severe emotional cycles, trauma, or a persistent lack of self-worth. In our initial consultation, we will assess your current situation and decide together which pathway is most appropriate for you.',
    category: 'therapy'
  },
  {
    id: 'faq3',
    question: 'Is online psychotherapy effective and is it completely secure?',
    answer: 'Yes, clinical research confirms online psychotherapy is highly effective for anxiety, depression, trauma, and transition distress. I provide secure, encryted virtual video consultations for clients across Europe, Asia, and the Americas. Sessions are conducted over a premium, GDPR-compliant healthcare platform to ensure absolute confidentiality, and I provide full setup support so your virtual space feels safe and holding.',
    category: 'online'
  },
  {
    id: 'faq4',
    question: 'Who do you provide Clinical Supervision for and what is your model?',
    answer: 'I provide individual and group clinical supervision to qualified psychotherapists, counsellors, trainees, and social care professionals. My supervision model is psychodynamic, systemic, and heavily clinical, with a specialized focus on intercultural dynamics and trauma containment. I hold dedicated supervision certificates and have supervised in major charity, NHS, and academic institutes (such as Mind and Women and Health).',
    category: 'supervision'
  },
  {
    id: 'faq5',
    question: 'What are your session frequencies, fees, and cancellation policies?',
    answer: 'Sessions are scheduled weekly (usually at the same day and time each week) to maintain continuity and psychological momentum. Individual sessions and supervision are 50 minutes. Fees vary based on psychotherapy versus supervision formats and geographical locations. I provide tailored fee quotes during our initial telephone or email contact. Cancellations must be made at least 48 hours in advance to avoid incurring the standard session fee.',
    category: 'general'
  },
  {
    id: 'faq6',
    question: 'What professional bodies are you accredited with?',
    answer: 'I am a fully registered and accredited psychotherapist with the United Kingdom Council for Psychotherapy (UKCP) and adhere rigorously to their strict Code of Ethics. I am also an experienced clinical leader with over 20 years of practice in psychiatric wards, local mental health organizations (Mind), universities, and charities, meaning you are backed by verified professional credentials.',
    category: 'general'
  }
];
