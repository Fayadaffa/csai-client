import type {
  NavLink, HeroData, FeatureItem,
  MetricItem, TrustItem, TestimonialItem, CTAFormField,
} from "@/types/landing";

export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing",  href: "/pricing"  },
  { label: "About",    href: "/about"    },
];

export const heroData: HeroData = {
  headline:         "CS AI — Ship Customer Success with AI",
  subheadline:      "Automate ticket triage, draft replies, and uncover churn risk with a secure AI assistant built for SaaS teams.",
  emailPlaceholder: "Work email",
  primaryCTA:       "Get Started",
  secondaryCTA:     "Book a demo",
  primaryHref:      "#cta",
  secondaryHref:    "#cta",
};

export const features: FeatureItem[] = [
  { label: "Auto-Triage",    title: "Routes tickets by intent, urgency, and sentiment."              },
  { label: "Reply Drafts",   title: "Generates on-brand answers with citations to your AI Based."    },
  { label: "Churn Signals",  title: "Detects adoption drop-offs and predicts churn risk."            },
  { label: "AI Workflows",   title: "Creates tasks, escalations, and follow-ups automatically."      },
  { label: "AI Summary",     title: "Finds the right docs and summarizes them instantly."            },
  { label: "Team Analytics", title: "Tracks deflection, SLA, and agent productivity trends."         },
];

export const metrics: MetricItem[] = [
  { label: "Avg. First Response Time", value: "−41%",  context: "last 30 days"           },
  { label: "Ticket Deflection",        value: "+28%",  context: "KB-assisted replies"    },
  { label: "CSAT Lift",                value: "+0.6",  context: "post-implementation"    },
];

export const trustItems: TrustItem[] = [
  {
    title:       "Citations & AI grounded answers",
    category:    "Explainable outputs",
    description: "Every suggestion references your knowledge base so agents can verify quickly.",
    tags:        ["Grounded answers", "Audit trail"],
  },
  {
    title:       "Privacy-first data handling",
    category:    "Enterprise ready",
    description: "Configurable retention, role-based access, and encrypted connections for sensitive customer data.",
    tags:        ["RBAC", "Encryption"],
  },
  {
    title:       "Workflow approvals",
    category:    "Human-in-the-loop",
    description: "Route high-risk cases for review while letting low-risk tickets auto-draft and auto-escalate.",
    tags:        ["Approvals", "Escalations"],
  },
  {
    title:       "Agent assist, not replacement",
    category:    "Stay in control",
    description: "AI drafts that match your tone and policy, with easy edits and feedback loops.",
    tags:        ["Policy-aware", "Editable drafts"],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name:    "Maya R.",
    role:    "Head of Support, Loopform",
    message: "Our triage is dramatically faster. Agents triage 3× more tickets per shift and CSAT went from 78% to 91% within the first month.",
  },
  {
    name:    "Jordan K.",
    role:    "CS Team Lead, Stackly",
    message: "The workflows are the killer feature—auto-escalations and follow-ups keep customers from slipping through the cracks.",
  },
  {
    name:    "Elena S.",
    role:    "VP Customer Success, Orbit HQ",
    message: "Churn signals helped us intervene earlier. We turned three about-to-cancel enterprise accounts into expansions.",
  },
];

export const ctaFormFields: CTAFormField[] = [
  { id: "email",   label: "Work email",    placeholder: "name@company.com",             helper: "We'll send a scheduling link."          },
  { id: "size",    label: "Team size",     placeholder: "",                              helper: "Select your current support volume."    },
  { id: "goal",    label: "Primary goal",  placeholder: "",                              helper: "Choose what you want to improve first." },
  { id: "usecase", label: "Use case",      placeholder: "",                              helper: "Optional—helps us tailor the demo."     },
];
