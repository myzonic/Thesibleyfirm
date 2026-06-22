import heroImage from './assets/images/sibley_luxury_penthouse_1782083808030.jpg';
import founderImage from './assets/images/christopher_sibley_1782083828931.jpg';
import hboPremiereImage from './assets/images/campaign_hbo_premiere_1782083849847.jpg';
import blackGalaImage from './assets/images/campaign_black_gala_1782083871963.jpg';
import brandPartnershipImage from './assets/images/campaign_brand_partnership_1782083893337.jpg';

export {
  heroImage,
  founderImage,
  hboPremiereImage,
  blackGalaImage,
  brandPartnershipImage
};

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities?: string[];
}

export interface PressItem {
  id: string;
  logo: string;
  coverTitle: string;
  coverSubtitle: string;
  featuredTitle: string;
  category: string;
  fullImage: string;
  articleSummary: string;
}

export interface CampaignItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  challenge: string;
  strategy: string;
  results: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'PORTFOLIO', href: '/#portfolio' },
  { label: 'SERVICES', href: '/services' },
  { label: 'TESTIMONIALS', href: '/#testimonials' },
  { label: 'CONTACT US', href: '/#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'public-relations',
    title: 'PUBLIC RELATIONS',
    description: 'The Sibley Firm can offer you a full-service campaign at a cost that fits your company’s budget. We will work with you to design an affordable plan that will benefit your current company marketing plans. What sets us apart from other public relations firms is the use of non-traditional publicity campaigns. We work until the job is done and tirelessly campaign for your visibility in the press. In addition to our marketing know-how, The Sibley Firm has relationships with contacts in many media types, including short and long-lead print, broadcast, online, and new media, and understands how to uniquely position brands in a way that garners attention from these individuals.',
    iconName: 'Megaphone',
  },
  {
    id: 'talent-booking',
    title: 'TALENT BOOKING',
    description: 'With our exceptional personal connections within the entertainment industry, The Sibley Firm is known for securing high-profile talent for events, showcases, venue openings, or any other event. From hosts to live music performances, we can handle all the talent at your event and make all necessary arrangements to grant your brand the best possible level of exposure.',
    iconName: 'Users',
  },
  {
    id: 'event-management',
    title: 'EVENT MANAGEMENT',
    description: 'Effective event management goes beyond hosting a gathering or producing a trade show exhibit. At the Sibley Firm, we strongly emphasize the importance of expert project management skills, robust vendor relationships, expansive industry knowledge and connections, and marketing acumen, all of which are crucial for achieving results on budget and schedule. To ensure success, it is essential to begin with the establishment of clear objectives, followed by the development and execution of a strategic plan to meet those goals. This process involves articulating your company’s narrative and highlighting the distinctive value of your brand. In addition, it is vital to integrate various public relations (PR) and marketing strategies into a cohesive event approach, encompassing both social and traditional media, content creation, messaging, and more. This method can be further enriched through direct stakeholder engagement during events, fostering meaningful connections that enhance the overall experience.',
    iconName: 'Briefcase',
  },
  {
    id: 'entertainment-marketing',
    title: 'ENTERTAINMENT MARKETING',
    description: 'When getting consumers to relate to brands on a global scale, we run into one of our most interesting challenges: trying to find actors who aren’t acting. With nearly 10 combined years of expertise managing Hollywood relationships, The Sibley Firm is skilled at navigating the integration of celebrities with brands and issues. We understand the challenge of finding celebrities that resonate with your cause or issue authentically and credibly. We also excel at maximizing exposure by developing the most impactful program while capitalizing on the celebrity’s brand and network.',
    iconName: 'Star',
    capabilities: [
      'Spokesperson Identification and Negotiation',
      'Celebrity Events',
      'Media Relations',
      'Content Integration',
      'Risk Management and Mitigation'
    ]
  },
  {
    id: 'street-team',
    title: 'STREET TEAM',
    description: 'The Sibley Firm’s street teams in Los Angeles serve as your dedicated on-the-ground solution for building excitement and raising awareness for your brand. Our teams are highly skilled professionals who excel in direct public engagement. They are trained to connect with diverse audiences, using a mix of enthusiasm and professionalism to ensure that your brand message resonates powerfully. With a focus on creating memorable interactions, our street teams work tirelessly to craft a lasting impact that captures attention and fosters genuine connections with potential customers. By selecting strategic locations and employing innovative outreach techniques, we ensure your brand stands out in the bustling city environment, ultimately driving interest and boosting visibility.',
    iconName: 'MapPin',
  },
  {
    id: 'event-planning',
    title: 'EVENT PLANNING',
    description: 'With years of combined experience planning any and every type of event, the Sibley Firm team is an asset when it comes to event planning and execution. Capable of everything from pre-planning to day-of execution and post-event follow-up, the Sibley Firm accompanies clients every step to ensure that all press, logistics, and attendance (if need be) are handled accordingly to make for flawless events.',
    iconName: 'Calendar',
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: 'p1',
    logo: 'VOGUE',
    coverTitle: 'The Power Broker',
    coverSubtitle: 'Leading PR Innovation',
    featuredTitle: 'VOGUE EXCLUSIVE',
    category: 'VOGUE',
    fullImage: 'https://picsum.photos/seed/voguecover/800/1000',
    articleSummary: 'An intimate look at how The Sibley Firm bridges the gap between elite luxury fashion, high society, and the entertainment elite. Christopher Sibley explains the golden rules of visual storytelling.'
  },
  {
    id: 'p2',
    logo: 'VARIETY',
    coverTitle: 'The Culture Architect',
    coverSubtitle: 'Shaping Entertainment News',
    featuredTitle: 'CULTURE LEADERS',
    category: 'VARIETY',
    fullImage: 'https://picsum.photos/seed/varietycover/800/1000',
    articleSummary: 'Our feature in Variety breaks down how modern public relations has evolved. Featuring key insights into Christopher Sibley’s strategic vision for Black Excellence and cultural impact.'
  },
  {
    id: 'p3',
    logo: 'HOLLYWOOD REPORTER',
    coverTitle: 'NEXT GENERATION LEADERS',
    coverSubtitle: 'The Hollywood Heavyweights list',
    featuredTitle: 'ANNUAL A-LIST REPORT',
    category: 'THE HOLLYWOOD REPORTER',
    fullImage: 'https://picsum.photos/seed/thrcover/800/1000',
    articleSummary: 'Recognizing Christopher Sibley and his talented team as the heavyweights pushing cultural boundaries and managing high-stakes media campaigns for global series and blockbusters.'
  },
  {
    id: 'p4',
    logo: 'FORBES',
    coverTitle: 'Building Influence. Creating Impact.',
    coverSubtitle: 'How Sibley redefines return on influence',
    featuredTitle: 'FORBES BUSINESS FOCUS',
    category: 'FORBES',
    fullImage: 'https://picsum.photos/seed/forbescover/800/1000',
    articleSummary: 'A major business profiles study focusing on Sibley’s calculated brand equity amplification strategies. Learn how a premier public relations campaign yields a 300% increase in tier-1 media placements.'
  },
  {
    id: 'p5',
    logo: 'ESSENCE',
    coverTitle: '100 MOST INFLUENTIAL',
    coverSubtitle: 'Defining the cultural zeitgeist',
    featuredTitle: 'ESSENCE EXCELLENCE',
    category: 'ESSENCE',
    fullImage: 'https://picsum.photos/seed/essencecover/800/1000',
    articleSummary: 'Celebrating representation and standard-setting work. This cover feature highlights Sibley’s decades of commitment to bringing authentic narratives of minority talent into global major networks.'
  },
  {
    id: 'p6',
    logo: 'BILLBOARD',
    coverTitle: 'ICONIC MOMENTS LAST FOREVER',
    coverSubtitle: 'The soundtracks of success',
    featuredTitle: 'BILLBOARD SPECIAL COVER',
    category: 'BILLBOARD / ROLLING STONE',
    fullImage: 'https://picsum.photos/seed/billboardcover/800/1000',
    articleSummary: 'Breaking down Sibley’s high-impact music artist brand partnerships, from historical award show red carpet integrations to legendary streaming launches that changed Billboard records.'
  }
];

export const CAMPAIGNS: CampaignItem[] = [
  {
    id: 'c1',
    title: 'THE BLACK EXCELLENCE GALA',
    category: 'RED CARPET & EVENT PRODUCTION',
    imageUrl: blackGalaImage,
    description: 'An elite red carpet event celebrating pioneering visionaries in media and fine art.',
    challenge: 'Establish a pristine, heavy-news-cycle evening that highlights trailblazing cultural leaders with elite aesthetics, attracting A-list talent and major media outlets simultaneously.',
    strategy: 'Leveraged key media partnerships, designed an immersive high-contrast black-and-gold visual exhibition, and coordinated a streamlined step-and-repeat red carpet live flow.',
    results: [
      'Over 45 Tier-1 press publication features including Vogue, THR, and Essence.',
      'Secured attendance of 120+ top-tier celebrities and industry executives.',
      'Generated over 1.2 Billion total digital media impressions within 48 hours.'
    ]
  },
  {
    id: 'c2',
    title: 'HBO ORIGINAL SERIES PREMIERE TOUR',
    category: 'PUBLIC RELATIONS CAMPAIGN',
    imageUrl: hboPremiereImage,
    description: 'Multi-city press rollout positioning the series at the pinnacle of cultural dialogue.',
    challenge: 'Generate high-impact buzz across key demographic hubs for a highly-anticipated, historical drama drama series amidst intense seasonal network competition.',
    strategy: 'Coordinated bespoke VIP tastemaker preview screenings in Los Angeles, Atlanta, and New York. Managed local panels, talk-show loops, and local culture editor roundtables.',
    results: [
      'Reached #1 trending topic on social media during premiere night.',
      '100% positive critical review placement rate across mainstream portals.',
      'Secured 4 exclusive talk-show slots for lead actors in premiere week.'
    ]
  },
  {
    id: 'c3',
    title: 'GLOBAL BRAND PARTNERSHIP',
    category: 'INFLUENCER & TALENT COLLABORATION',
    imageUrl: brandPartnershipImage,
    description: 'A transformative multi-million dollar co-branded lifestyle campaign.',
    challenge: 'Broker and execute a highly authentic long-term partnership bridging a major luxury fashion house and an iconic Hollywood talent, maintaining creative authority.',
    strategy: 'Engineered a highly curated social-first storytelling campaign, combining high-fashion editorial imagery with custom authentic lifestyle docu-style short videos.',
    results: [
      'Sold out the collaborative product capsule collection within 4 hours of launch.',
      'Achieved a 4.8% organic social engagement rate (industry average is 1.2%).',
      'Earned organic amplification from other high-profile creators.'
    ]
  },
  {
    id: 'c4',
    title: 'TRUTH AWARDS RECORD-BREAKING NATIONAL CAMPAIGN',
    category: 'ENTERTAINMENT PR & REPRESENTATION',
    imageUrl: 'https://images.unsplash.com/photo-1513829096999-4978602297af?auto=format&fit=crop&q=80&w=800',
    description: 'Elevating and securing major features for prime-time honors celebrating leading names like Niecy Nash-Betts, Lena Waithe, Raven-Symoné, and Ava DuVernay.',
    challenge: 'Establish national press presence for a boutique, culturally rich annual awards ceremony, cutting through the heavy Hollywood awards season noise.',
    strategy: 'Crafted exclusive story pitches with Variety, The Hollywood Reporter, and Billboard. Managed red carpet media operations and coordinated live KTLA+ television syndication.',
    results: [
      'Secured exclusive Variety TV features celebrating Niecy Nash-Betts, Lena Waithe, and Raven-Symoné.',
      'Produced a KTLA+ special broadcast on-air reaching millions of regional homes.',
      'Earned over 50 mainstream placements across LA Times, Billboard, and Essence.'
    ]
  },
  {
    id: 'c5',
    title: "FOX COMEDY 'THE COOL KIDS' PREMIERE DRIVE",
    category: 'TELEVISION PUBLICITY',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
    description: "Multi-channel media campaign launching Fox's hit retirement-home sitcom starring David Alan Grier, Martin Mull, Leslie Jordan, and Vicki Lawrence.",
    challenge: 'Drive critical buzz and solid prime-time premiere numbers for a sitcom centered on elderly, senior-demographic themes.',
    strategy: 'Organized localized senior center pre-screenings and coordinated an elite nostalgia-focused media roundtable with Los Angeles Times and Hollywood trade critics.',
    results: [
      'Paced highest-rated pilot premiere in Fox comedy history with over 10.1 million views.',
      'Garnered favorable, highly publicized reviews across Los Angeles Times and Variety.',
      'Placed stars on major daytime shows including Kelly Clarkson and Jimmy Kimmel Live.'
    ]
  },
  {
    id: 'c6',
    title: "NETFLIX'S 'HAPPY GILMORE 2' CAMPAIGN",
    category: 'TALENT BOOKING & MEDIA CAMPAIGN',
    imageUrl: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?auto=format&fit=crop&q=80&w=800',
    description: "Strategic casting announcement and buzz build for Kym Whitley opposite Adam Sandler in Netflix's highly anticipated sequel.",
    challenge: 'Maximize fan excitement for the filming start after decades of anticipation while ensuring strict on-set confidentiality guidelines are followed.',
    strategy: 'Coordinated prominent Hollywood trades exclusives including People Magazine and The Hollywood Reporter highlighting Kym Whitley’s role and the comedy pressure.',
    results: [
      'Generated over 600 Million digital impressions within 48 hours of trade release.',
      'Captured global #1 trending entertainment news topic on Google Trends and Twitter.',
      'Established a continuous social narrative from initial casting through active filming.'
    ]
  },
  {
    id: 'c7',
    title: 'FOX SUCCESS: RENEWALS FOR "9-1-1" & "THE RESIDENT"',
    category: 'NETWORK BRAND POSITIONING',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    description: 'Positioning core Fox networks dramas ahead of seasonal upfront presentations and renewal commitments.',
    challenge: 'Direct active media dialogue during critical seasonal negotiations to secure prime-time network upfront priorities.',
    strategy: 'Coordinated ratings highlights, finale exclusive reviews, and personal cast perspectives directly to trades like Deadline and Hollywood Reporter.',
    results: [
      'Constructed highly-visible Deadline exclusives highlighting critical audience loyalty.',
      'Assisted in securing high-profile prime-time season 6 renewals in record timing.',
      'Maintained consistent positive dialogue with critics through pivotal upfronts.'
    ]
  },
  {
    id: 'c8',
    title: 'CECE WINANS ROLLING OUT COVER BRAND LAUNCH',
    category: 'COVER ARTICLE & TALENT CAMPAIGN',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive lifestyle coverage and cover story celebrate outstanding faith and tour features.',
    challenge: 'Position a legendary gospel voice with high-fashion, high-concept visual editorial elements to capture modern multi-generational audiences.',
    strategy: 'Engineered an custom-styled editorial shoot and cover feature in Rolling Out Magazine, highlighting current music projects and philanthropic tours.',
    results: [
      'Sold out special print edition of Rolling Out Magazine inside 48 hours.',
      'Achieved over 18 Million organic social reach and blog discussions in faith regions.',
      'Secured live performance slot and honors recognition at the Stellar Gospel Awards.'
    ]
  },
  {
    id: 'c9',
    title: "BOUNCE TV'S 'JOHNSON' WORLD PREMIERE",
    category: 'ENTERTAINMENT MARKETING',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    description: "Launch of the hit comedy-drama series produced by Cedric the Entertainer, starring DL Hughley and a stellar lead ensemble cast.",
    challenge: 'Position the newly-launched original Bounce TV show as a must-watch program in a crowded evening streaming market.',
    strategy: 'Placed exclusive press reveals in The Wrap, designed VIP red carpet screenings, and arranged extensive TALK TV loops for star DL Hughley.',
    results: [
      'Delivered the most-watched original series premiere in Bounce TV history.',
      'Secured prominent cover stories and reviews praising the series for its cultural authenticity.'
    ]
  },
  {
    id: 'c10',
    title: "TAMERA MOWRY TRAILBLAZER RECOVER CAMPAIGN",
    category: 'CELEBRITY PLACEMENT & PUBLIC RELATION',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    description: "Securing national magazine coverage for Tamera Mowry-Housley's receipt of the Trailblazer Award at the Pink Pump Affair.",
    challenge: 'Elevate awareness for the high-end philanthropic banquet while crafting a beautiful celebrity honor profile.',
    strategy: 'Managed exclusive red-carpet placements including Black Enterprise, highlighting both the celebrity tribute and the charitable contribution.',
    results: [
      'Generated a 35% increase in annual gala donations through heightened media spotlight.',
      'Featured prominently in multi-page profile in Black Enterprise, praising her global contribution.'
    ]
  },
  {
    id: 'c11',
    title: "NLE CHOPPA EXCLUSIVE TMZ HIP HOP DIALOGUE",
    category: 'ARTIST ADVOCACY & SOCIAL PR',
    imageUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=800',
    description: "Directing public relations and organic messaging strategy surrounding artist allyship and live video statements.",
    challenge: 'Successfully advocate NLE Choppa’s authentic community support while dispelling negative social and media commentary.',
    strategy: 'Arranged an exclusive video focus on TMZ Hip Hop, allowing the artist to address community questions directly and transparently.',
    results: [
      'Achieved over 22 Million video views in 48 hours, receiving overwhelming praise.',
      'Positioned the artist as an authentic, respected modern ally across modern hip-hop culture.'
    ]
  },
  {
    id: 'c12',
    title: "FILMGOOD FESTIVAL 2024 DEBUT",
    category: 'FESTIVAL PUBLICITY & PR',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    description: "Launching the FilmGood Festival founded by Etienne Maurice, showcasing indie filmmakers in LA.",
    challenge: 'Generate substantial buzz for a new independent film festival, ensuring high RSVP counts and media attendance.',
    strategy: 'Secured exclusive lineup announcement in Ebony Magazine, framing the festival’s noble mission and elite curation.',
    results: [
      'Achieved 100% ticket sell-out across all screening venues.',
      'Featured in an Ebony media exclusive, driving regional indie film industry momentum.'
    ]
  },
  {
    id: 'c13',
    title: "SISTER SISTER RED CARPET REUNION",
    category: 'CELEBRITY EVENT PLACEMENT',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    description: "Tamera Mowry-Housley and Jackée Harry reunite at a Beverly Hills gala, driving nationwide nostalgic entertainment talk.",
    challenge: 'Capture high-speed viral media attention from a spontaneous, high-profile celebrity reunion.',
    strategy: 'Pitched high-speed red carpet photography and joint interviews directly to Daily Mail, People, and Us Weekly.',
    results: [
      'Ranked #2 trending topic on Twitter and TikTok within hours of publication.',
      'Secured extensive, heartwarming features reaching over 45 Million readers.'
    ]
  },
  {
    id: 'c14',
    title: "BRYON JAVAR SPECIAL PROFILE IN ESSENCE",
    category: 'FASHION PR CAMPAIGN',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    description: "Promoting elite celebrity stylist Bryon Javar on receiving the André Leon Talley Award alongside styling Janelle Monáe.",
    challenge: 'Build deep mainstream understanding and recognition for the designer behind some of Hollywood’s most iconic fashion moments.',
    strategy: 'Placed a double-page spreads, photo essay, and exclusive career recap interview in Essence Magazine.',
    results: [
      'Amplified Javar’s brand value, leading to three major commercial campaign bookings.',
      'Pitted as one of the definitive styling highlights of the season in global fashion columns.'
    ]
  },
  {
    id: 'c15',
    title: "BOUNCE TV'S 'SAINTS & SINNERS' LAUNCH",
    category: 'DRAMA SERIES PUBLICITY',
    imageUrl: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&q=80&w=800',
    description: "Press rollout and critical positioning for Bounce TV's breakout prime-time soap opera drama.",
    challenge: 'Elevate critical respect and viewing numbers for a southern soap opera on an emerging digital network.',
    strategy: 'Pitched Los Angeles Times a comprehensive feature analyzing the classic prime-time formulas and talented cast ensemble.',
    results: [
      'Secured a highly-favorable critical review in the LA Times.',
      'Increased regional live viewership indices by 38% for the launch season.'
    ]
  },
  {
    id: 'c16',
    title: "TYE TRIBBETT'S FORBES FEATURE LAUNCH",
    category: 'ALBUM PRESS INFLUENCE',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
    description: "Positioning the 'All Things New' album release in high-profile secular business media.",
    challenge: 'Capture mainstream attention for a gospel masterpiece, showcasing it as a business and cultural force.',
    strategy: 'Secured an exclusive in Forbes Business to analyze Tribbett’s influence and career trajectory leading into the Stellar Awards.',
    results: [
      'Landed Billboard #1 Gospel Album debut.',
      'Cited in Forbes as a masterclass in modern creative artist entrepreneurship.'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'The Sibley Firm is a true extension of our team. Their expertise, strategic relationships, and cultural precision are absolutely unmatched.',
    author: 'TARA DUNCAN',
    role: 'HEAD OF ORIGINALS, MAJOR STREAMER',
  },
  {
    id: 't2',
    quote: 'They don’t just open doors—they create major authentic opportunities we never thought possible. They protect and build our legacy.',
    author: 'JAMAL EDWARDS',
    role: 'ENTREPRENEUR & EXECUTIVE',
  },
  {
    id: 't3',
    quote: 'Professional, highly strategic, and deeply passionate about every single detail. They are top-tier in every sense of the word.',
    author: 'LENA WAITHE',
    role: 'WRITER, PRODUCER, ACTOR',
  },
];

export const INSIGHTS = [
  {
    id: 'i1',
    date: 'June 18, 2026',
    category: 'MEDIA STRATEGY',
    title: 'The New Rules of Entertainment PR: Elevating Digital Legacies',
    excerpt: 'How public relations has moved beyond standard press releases to focus on premium digital ecosystem placements and authentic personal narratives.'
  },
  {
    id: 'i2',
    date: 'May 24, 2026',
    category: 'CULTURAL IMPACT',
    title: 'Bridging Representation and Corporate Brand Equity',
    excerpt: 'Insights into designing brand collaborations that honor diverse voices while driving record-breaking corporate results.'
  },
  {
    id: 'i3',
    date: 'April 12, 2026',
    category: 'EVENT PRODUCTION',
    title: 'The Art of the Red Carpet: Creating Viral Physical Moments',
    excerpt: 'A masterclass in logistics, VIP hospitality, and lightning-fast media distribution that keeps your event at the top of the cultural conversation.'
  }
];
