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
  "I'm a Design Systems Architect with 17+ years as a front-of-the-front-end engineer, most at home in the space where design and engineering meet. I build the component libraries, design tokens, and tooling that help product teams ship interfaces that are consistent, fast, and accessible by default, with a deep focus on accessibility and Core Web Vitals performance.",
  "I'm also comfortable across the full stack: headless CMS integrations, end-to-end testing, and CI/CD pipelines with GitHub Actions. I like to stay framework-agnostic and reach for the right tool for the job, whether that's Next.js, Astro, or plain HTML and CSS, paired with a strong Figma-to-code handoff practice and an AI-assisted workflow I'm always refining.",
];

export type TimelineSubRole = { period: string; title: string };

export type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
  bottomLine?: string;
  subRoles?: TimelineSubRole[];
  current?: boolean;
  earlyCareer?: boolean;
};

export const experience: TimelineEntry[] = [
  {
    period: "2021–2026",
    role: "Senior Software Engineer | Design Systems Architect",
    company: "Red Ventures / Bankrate",
    current: true,
    description:
      "Shipped two successive design systems that became the foundation for product delivery across Bankrate, moving teams off a legacy CSS framework onto a consistent, maintainable platform with zero production incidents."
  },
  {
    period: "2025",
    role: "Engineering Manager | Interim",
    company: "Red Ventures / Bankrate",
    description:
      "Stepped into a management role for 6 months, improving team velocity and co-leading an AI hackathon whose results directly shaped the team's migration strategy.",
  },
  {
    period: "2016–2021",
    role: "Senior Front-End Developer",
    company: "Launch That",
    description:
      "Built the design system that unified front-end development across every Launch That property. Trained directly with Brad Frost on Atomic Design methodology, the systems-thinking approach I've carried forward ever since."
  },
  {
    period: "2014–2016",
    role: "Lead Front-End / Senior Web Developer",
    company: "Studio Birdsall",
    earlyCareer: true,
    description:
      "Led front-end across 10+ client projects: Magento and Shopify e-commerce and custom WordPress builds.",
  },
  {
    period: "2008–2014",
    role: "Senior Web Developer",
    company: "Full Sail University",
    earlyCareer: true,
    description:
      "Led front-end for the university's marketing sites, blog, and its first online store and online school.",
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
      "Dan is looked to as a thought leader... and has gotten feedback like, 'Dan completely changed the way I think about the frontend.'",
    full: "Dan is looked to as a thought leader, owning large projects like successfully migrating all pages on Bankrate to the Treasury Design System with no major issues... He has taken on mentoring several engineers... and has gotten feedback like, 'Dan completely changed the way I think about the frontend.'",
    name: "Justin Cook",
    title: "fmr. Director of Engineering @ Bankrate",
    initials: "JC",
  },
  {
    quote:
      "You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work.",
    full: "You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work. Back at LT, the first time you reviewed my work, you asked me if I knew what semantic HTML is… hell no! But now I see how often that foundational building block is overlooked. At RV, you mentioned container queries and by the end of the day I knew everything about them just to understand what you were talking about. Every piece of critical feedback and every single resource you sent in Slack sent me down a rabbit hole to learn more because I wanted to be as good as you. Also, you were the only one who could give me actual valuable design feedback in ways that other designers just couldn't. I am incredibly lucky and grateful to have had you as my engineer.",
    name: "Saleena Beharry",
    title: "Staff Product Designer | Design Systems",
    initials: "SB",
  },
  {
    quote:
      "If anyone is looking for a senior front-end engineer, specifically with expertise around design systems, I would highly recommend Daniel Welch.",
    full: "If anyone is looking for a senior front-end engineer, specifically with expertise around design systems, I would highly recommend Daniel Welch.I've worked with him at my last 2 companies, Red Ventures and Launch That, and he has been a crucial piece to success in multiple product orgs.",
    name: "Eric Rodgers",
    title: "Principal Product Designer @ CNET",
    initials: "ER",
  },
  // {
  //   quote: "Snatch this guy up while you can. He is top shelf.",
  //   name: "Chris Arter",
  //   title: "Engineering Manager & Laravel Core Contributor",
  //   initials: "CA",
  // },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
