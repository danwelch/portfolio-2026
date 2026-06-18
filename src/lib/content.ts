export const site = {
  name: "Dan Welch",
  role: "Design Systems Architect",
  tagline: "Design Systems Architecture & Front-End Engineering",
  location: "Remote · Open to relocation",
  email: "contact@danwelch.net",
  resume: "/Dan-Welch-Resume.pdf",
  currentSite: "https://danwelch.net",
  socials: {
    github: "https://github.com/danwelch",
    linkedin: "https://linkedin.com/in/danieldwelch",
  },
} as const;

export const bio = [
  "I'm a Design Systems Architect with 17+ years as a front-of-the-front-end engineer — most at home in the space where design and engineering meet. I build the component libraries, design tokens, and tooling that help product teams ship interfaces that are consistent, fast, and accessible by default, with a deep focus on accessibility and Core Web Vitals performance.",
  "I'm also comfortable across the full stack: headless CMS integrations, end-to-end testing, and CI/CD pipelines with GitHub Actions. I stay framework-agnostic and reach for the right tool for the job, whether that's Astro, Next.js, or plain React — paired with a strong Figma-to-code handoff practice and an AI-assisted workflow I'm always refining.",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Design Systems Architect · Senior Software Engineer",
    company: "Red Ventures / Bankrate",
    period: "2021 — 2026",
    location: "Remote",
    current: true,
    summary:
      "Primary architect of Bankrate's design systems, building React/Next.js component platforms adopted across product teams.",
    highlights: [
      "Architected and led The Ledger, Bankrate's React/Next.js design system — 65+ reusable TypeScript + Tailwind components with token-based white-label theming.",
      "Launched The Treasury, Bankrate's first formal design system, adopted across a dozen-plus projects with zero production incidents, replacing a legacy CSS framework.",
      "Led a Storyblok component audit that eliminated ~30% of components (289), with a custom dashboard to track progress for stakeholders.",
      "Authored Playwright E2E suites in GitHub Actions that cut CI execution time ~76% and caught pre-release regressions.",
      "Served on Bankrate's Accessibility and Performance task forces, consulting on WCAG compliance and Core Web Vitals.",
    ],
  },
  {
    role: "Engineering Manager (Interim)",
    company: "Red Ventures / Bankrate",
    period: "2025",
    location: "Remote",
    summary:
      "Managed a team of 7 (4 FTEs + 3 contractors) for 6 months alongside design-systems work.",
    highlights: [
      "Drove a ~10% increase in sprint velocity through process improvements and ran mid-cycle performance reviews.",
      "Co-led an AI-assisted hackathon to accelerate migrating legacy JavaScript calculators to React and the new design system.",
    ],
  },
  {
    role: "Senior Front-End Developer",
    company: "Launch That",
    period: "2016 — 2021",
    location: "Orlando, FL",
    summary:
      "Architected the shared front-end foundation powering all company properties.",
    highlights: [
      "Built the Ares Framework — a custom component library and WordPress parent theme — and used it to ship 6 multi-page sites in a single month.",
      "Trained directly with Brad Frost (creator of Atomic Design) in a hands-on design-systems workshop.",
      "Built ReportaRoo and DisavOwl, two in-house Vue.js tools automating marketing reporting and the SEO link-disavow process.",
    ],
  },
  {
    role: "Lead Front-End / Senior Web Developer",
    company: "Studio Birdsall",
    period: "2014 — 2016",
    location: "Winter Park, FL",
    summary: "Led front-end across 10+ client projects.",
    highlights: [
      "Delivered Magento and Shopify e-commerce builds and custom WordPress sites on schedule.",
    ],
  },
  {
    role: "Senior Web Developer",
    company: "Full Sail University",
    period: "2008 — 2014",
    location: "Winter Park, FL",
    summary:
      "Led front-end for the university's marketing sites, blog, and first online store and online school.",
    highlights: [
      "Built hundreds of landing pages and email campaigns; advanced from Web Developer to Senior within three years.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "PHP"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue.js", "Astro", "Node.js", "Tailwind CSS v4", "Laravel"],
  },
  {
    label: "Design Systems",
    items: [
      "Component Architecture",
      "Storybook",
      "Design Tokens (DTCG)",
      "shadcn Registry",
      "Multi-Brand Theming",
    ],
  },
  {
    label: "Testing & CI/CD",
    items: [
      "Playwright",
      "Vitest",
      "Jest",
      "axe-core",
      "Biome",
      "GitHub Actions",
      "Semantic Release",
    ],
  },
  {
    label: "CMS & Platforms",
    items: ["Storyblok", "WordPress (ACF, Gutenberg)", "Shopify"],
  },
  {
    label: "AI & Modern Workflow",
    items: ["Claude Code", "Cursor", "GitHub Copilot", "OpenAI Codex", "MCP tooling"],
  },
  {
    label: "Practices",
    items: [
      "Accessibility (WCAG)",
      "Core Web Vitals",
      "Responsive Design",
      "Figma Collaboration",
      "Design-to-Code Handoff",
    ],
  },
];

export type Testimonial = {
  quote: string;
  full?: string;
  name: string;
  title: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "You've been the most influential coworker in my development from LT to RV. Every piece of critical feedback and every single resource you sent me sent me down a rabbit hole to learn more — I wanted to be as good as you. You were the only one who could give me actual valuable design feedback in ways that other designers just couldn't.",
    full: "I do wish to give my gratitude to Dan, and I will echo this to the world a thousand times over. You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work. Back at LT, the first time you reviewed my work, you asked me if I knew what semantic HTML is… hell no! But now I see how often that foundational building block is overlooked. At RV, you mentioned container queries and by the end of the day I knew everything about them just to understand what you were talking about. Every piece of critical feedback and every single resource you sent in Slack sent me down a rabbit hole to learn more because I wanted to be as good as you. Also, you were the only one who could give me actual valuable design feedback in ways that other designers just couldn't. I am incredibly lucky and grateful to have had you as my engineer.",
    name: "Saleena Beharry",
    title: "Designer · Launch That & Red Ventures",
    initials: "SB",
  },
  {
    quote:
      "If anyone is looking for a senior front-end engineer, specifically with expertise around design systems, I would highly recommend Daniel Welch. I've worked with him at my last 2 companies, Red Ventures and Launch That, and he has been a crucial piece to success in multiple product orgs — whoever picks him up will be very lucky!",
    name: "Eric Rodgers",
    title: "Former colleague · Red Ventures & Launch That",
    initials: "ER",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
