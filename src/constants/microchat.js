export const navigation = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const highlights = [
  {
    title: "Realtime by default",
    description:
      "Watch conversations update instantly with millisecond level sync across web, desktop, and mobile clients.",
  },
  {
    title: "AI assistance",
    description:
      "Let Microchat help triage repetitive questions and draft empathetic responses with GPT powered copilots.",
  },
  {
    title: "Team ready",
    description:
      "Assign conversations, mention teammates, and review message history with a unified shared inbox.",
  },
];

export const featureCards = [
  {
    title: "Unified inbox",
    description:
      "Combine email, chat, and social DMs into a single timeline with contextual customer profiles and automations.",
  },
  {
    title: "Automation studio",
    description:
      "Drag and drop workflows that greet new visitors, route VIPs, and escalate issues with zero code required.",
  },
  {
    title: "Analytics built-in",
    description:
      "Track handle time, CSAT, and agent performance with shareable dashboards refreshed in real time.",
  },
  {
    title: "Global infrastructure",
    description:
      "Edge delivered architecture keeps latency under 50ms worldwide with redundant failover for peace of mind.",
  },
];

export const metrics = [
  { label: "Avg. response time", value: "42s" },
  { label: "Customer satisfaction", value: "98%" },
  { label: "Messages handled", value: "12M+" },
  { label: "Integrations", value: "45" },
];

export const testimonials = [
  {
    quote:
      "Microchat helped us replace three different tools and ship same-day replies. Our customers noticed immediately.",
    author: "Cleo Manning",
    role: "Head of Support, Apex Labs",
  },
  {
    quote:
      "We launched proactive onboarding sequences without engineering time. Activation jumped 27% in one week.",
    author: "Jordan Vega",
    role: "Growth Lead, NovaDesk",
  },
  {
    quote:
      "The AI summarization keeps leadership in the loop. Standups finally focus on strategy instead of status updates.",
    author: "Priya Shah",
    role: "COO, Brightside",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$0",
    frequency: "forever",
    description: "Perfect for early teams getting their first live chat channel online.",
    highlights: [
      "Up to 3 teammates",
      "Shared inbox",
      "Customizable chat widget",
      "AI suggested replies",
    ],
  },
  {
    name: "Growth",
    price: "$39",
    frequency: "per agent / month",
    description: "Scale with automations, analytics, and native integrations.",
    highlighted: true,
    highlights: [
      "Unlimited teammates",
      "Workflow automations",
      "Advanced analytics",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    frequency: "custom",
    description: "Dedicated success, compliance reviews, and bespoke SLAs.",
    highlights: [
      "Dedicated success manager",
      "Audit logs",
      "SAML SSO",
      "On-premise options",
    ],
  },
];

export const faqs = [
  {
    question: "Can I migrate from my existing chat tool?",
    answer:
      "Absolutely. Our success engineers import historical conversations, users, tags, and automations so you can switch in a weekend.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Starter plan stays free forever with generous limits. Upgrade whenever you need automation or advanced analytics.",
  },
  {
    question: "Do you support mobile SDKs?",
    answer:
      "We provide native iOS and Android SDKs plus a lightweight web component for embedding the chat widget anywhere.",
  },
  {
    question: "Where are you hosted?",
    answer:
      "Microchat is deployed on Vercel's global edge network with regional data residency options in the EU, US, and APAC.",
  },
];
