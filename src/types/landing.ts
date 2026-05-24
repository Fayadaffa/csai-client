// ============================================================
// src/types/landing.ts — Sprint 3
// ============================================================

export type NavLink = { label: string; href: string };

export type HeroData = {
  headline: string;
  subheadline: string;
  emailPlaceholder: string;
  primaryCTA: string;
  secondaryCTA: string;
  primaryHref: string;
  secondaryHref: string;
};

export type FeatureItem = {
  label: string;
  title: string;
};

export type MetricItem = {
  label: string;
  value: string;
  context: string;
};

export type TrustItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export type TestimonialItem = {
  name: string;
  role: string;
  message: string;
};

export type CTAFormField = {
  id: string;
  label: string;
  placeholder: string;
  helper: string;
};
