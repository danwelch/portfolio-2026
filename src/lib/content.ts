export const site = {
  name: "Dan Welch",
  role: "Senior Software Engineer",
  tagline: "Design Systems & Front-End Architecture",
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
  "I'm a senior software engineer with 17+ years building scalable front-end platforms, design systems, and the developer experiences around them.",
  "Most recently I was the primary architect of enterprise design systems at Bankrate (Red Ventures) — React/Next.js component platforms, design-token pipelines, and the testing and release tooling that lets product teams actually adopt them. I care about consistency, accessibility, and the kind of architecture that makes teams faster.",
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
    role: "Senior Software Engineer · Design Systems Architect",
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

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
