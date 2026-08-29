export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge?: string;
  topics: string[];
  sampleSheetId?: string;
}

export interface MaterialSheet {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  tags: string[];
  color: string;
  aspect: 'portrait' | 'landscape';
  details: {
    structures: string[];
    clinicalRelevance: string;
    format: string;
  };
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  highlights: string[];
  badge: string;
}

export interface BenefitItem {
  number: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarInitials: string;
  isExample: boolean;
}

export interface PricingPlan {
  id: 'essencial' | 'completo';
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  originalPrice: string;
  price: string;
  cents: string;
  installmentsText?: string;
  billingNote: string;
  features: { text: string; included: boolean }[];
  bonusesText?: string;
  ctaText: string;
}
