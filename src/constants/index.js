import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  blockchain,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Product Engineering",
    icon: web,
  },
  {
    title: "Cloud & DevOps Automation",
    icon: backend,
  },
  {
    title: "Blockchain & Web3 Development",
    icon: creator,
  },
  {
    title: "UI Engineering & DX Mentorship",
    icon: mobile,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Python", icon: python },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Three.js", icon: threejs },
  { name: "Blockchain", icon: blockchain },
];

const experiences = [
  {
    title: "Lead Full-Stack Engineer",
    company_name: "Independent Consultant",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Ship resilient web applications with TypeScript, React, Next.js, and Django to production.",
      "Design API-first architectures that balance developer velocity with long-term maintainability.",
      "Partner with founders and product teams to translate ideas into measurable outcomes.",
      "Coach engineering teams on testing strategies, performance budgets, and accessibility-first UX.",
    ],
  },
  {
    title: "Blockchain Consultant",
    company_name: "Web3 Startups & DAOs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Prototype and audit Solidity smart contracts for DeFi and NFT platforms.",
      "Integrate on-chain data pipelines with Web3.js, Ethers.js, and event-driven backends.",
      "Educate teams on wallet UX, security best practices, and sustainable tokenomics.",
      "Automate smart contract deployment pipelines across testnet and mainnet environments.",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    company_name: "AWS & Vercel Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2021 - Present",
    points: [
      "Roll out infrastructure-as-code blueprints across AWS, Docker, and Kubernetes stacks.",
      "Implement observability, cost-optimisation, and autoscaling guardrails for modern workloads.",
      "Lead migrations of legacy monoliths into modular, event-driven services.",
      "Champion sustainable DevOps workflows with CI/CD, preview environments, and canary releases.",
    ],
  },
  {
    title: "Community Mentor",
    company_name: "Open Source & Tech Meetups",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Host workshops on full-stack best practices, TypeScript ergonomics, and clean architecture.",
      "Support early-career engineers through code reviews, pairing sessions, and roadmap planning.",
      "Publish deep dives on system design, database optimisation, and developer experience.",
      "Advocate for inclusive, community-driven learning that keeps curiosity at the core.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yusuf helped us refactor a legacy Django platform into a modern Next.js experience without downtime. Our shipping cadence doubled and performance budgets are finally under control.",
    name: "Omar Faruk",
    designation: "Founder",
    company: "Adventure Co",
    image: "./src/assets/omar.jpg",
  },
  {
    testimonial:
      "From infrastructure to UI polish, Yusuf is the rare engineer who sees the entire product surface. Their guidance on AWS automation and observability has been transformative.",
    name: "Lee Brown",
    designation: "Head of Engineering",
    company: "Agro Corp",
    image: "./src/assets/lee.jpg",
  },
  {
    testimonial:
      "Our Web3 launch succeeded because Yusuf cared about developer experience as much as decentralisation. They balanced velocity, security, and education at every turn.",
    name: "ABD Ali",
    designation: "CTO",
    company: "DeFi Collective",
    image: "./src/assets/abed.jpg",
  },
];

const projects = [
  {
    name: "DevFlow Knowledge Hub",
    description:
      "Community-driven platform for sharing engineering insights with AI-assisted search, content moderation, and rich editor workflows.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/yusufdupsc1/jsmasterypro_devflow",
  },
  {
    name: "Full-Stack School",
    description:
      "Learning management system with role-based dashboards, real-time progress tracking, and Stripe-powered enrolments.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "postgres", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/yusufdupsc1/full-stack-school",
  },
  {
    name: "Crawl4AI",
    description:
      "Autonomous data ingestion toolkit that transforms raw web content into structured, LLM-ready knowledge graphs.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/yusufdupsc1/crawl4ai",
  },
];

export { services, technologies, experiences, testimonials, projects };
