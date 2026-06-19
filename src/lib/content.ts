export const site = {
  name: "Dan Welch",
  role: "Design Systems Architect",
  tagline: "Design Systems Architecture & Front-End Engineering",
  location: "Remote · Open to relocation",
  email: "contact@danwelch.net",
  phone: "(407) 741-3175",
  resume: "/dan-welch-resume-06-2026.pdf",
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

export const personalBio = [
  "When I'm not working, I'm a husband to an amazing mom and a dad to two young girls.",
  "I grew up in Central Maine, then moved to Florida for school. I stayed there for work and the sunshine, met my wife, and we started our family. When COVID made remote work possible, we decided to move back to Maine to be closer to my family.",
  "I've always loved Lego, a passion that I’ve passed on to my daughters. The structured, modular creativity probably explains why I enjoy design systems. We lived in Orlando for years and went to Disney so many times we lost count. Now, we enjoy visiting Disney as a family. I've surfed in Florida, hiked trails all over Maine, and I still find time for video games after the girls are asleep.",
  "I like to think I'm pretty handy around the house, even if my projects sometimes put that to the test. I usually take on more than I should, but I've managed to fix every major appliance, including the AC. Maybe that's why I feel confident tackling new challenges head-on.",
  "Family always comes first for me. Work-life balance isn't just a goal; it's my top priority.",
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
    quote: "Dan is the best front-end engineer I know... What makes Dan exceptional is how completely he bridges both sides of the design-engineering equation. He brings a designer's eye and genuine attention to detail, paired with the structural rigor and systems thinking of a strong engineer...",
    full: "Dan is the best front-end engineer I know, and I've been lucky enough to work with him for over a decade across two companies. What makes Dan exceptional is how completely he bridges both sides of the design-engineering equation. He brings a designer's eye and genuine attention to detail, paired with the structural rigor and systems thinking of a strong engineer. The result: the most sustainable, approachable, and extensible design systems I've encountered in my career. My design teams have benefitted directly from his expertise — not just from what he builds, but from how he works. He shares technical context generously, brings people into decisions rather than making them in isolation, and treats design as a real partner, not a handoff. He's the kind of engineer design teams fight to keep close.",
    name: "Rickey Carlton",
    title: "Senior Director of Creative @ Bankrate",
    initials: "RC",
  },
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
    // full: "You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work. Back at LT, the first time you reviewed my work, you asked me if I knew what semantic HTML is… hell no! But now I see how often that foundational building block is overlooked. At RV, you mentioned container queries and by the end of the day I knew everything about them just to understand what you were talking about. Every piece of critical feedback and every single resource you sent in Slack sent me down a rabbit hole to learn more because I wanted to be as good as you. Also, you were the only one who could give me actual valuable design feedback in ways that other designers just couldn't. I am incredibly lucky and grateful to have had you as my engineer.",
    full: "You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work... You were the only one who could give me actual valuable design feedback in ways that other designers just couldn't. I am incredibly lucky and grateful to have had you as my engineer.",
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
];

export const resumeMeta = {
  summary:
    "Senior Software Engineer with 17+ years of experience building scalable front-end platforms and design systems. Primary architect of enterprise design systems at Bankrate and Launch That, including React/Next.js component platforms and design token pipelines adopted across product teams. Strong in TypeScript, React, Tailwind, Storybook, and AI-assisted engineering workflows.",
  leadershipHighlights: [
    "Architected and launched enterprise design systems supporting multiple product teams.",
    "Partnered with design leadership to define system direction and scalable UI patterns.",
    "Established automated testing and release workflows, improving developer confidence and adoption.",
    "Served as Engineering Manager, partnering with stakeholders and PMs to align roadmap priorities with company goals.",
  ],
};

export type ResumeEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: { bold: string; rest: string }[];
};

export const resumeExperience: ResumeEntry[] = [
  {
    role: "Senior Software Engineer | Design Systems Architect",
    company: "Red Ventures / Bankrate",
    period: "09/2021—06/2026",
    location: "Remote",
    bullets: [
      {
        bold: "Architected and led the implementation of The Ledger",
        rest: ", Bankrate's React/Next.js design system, creating a scalable component platform adopted across product teams. Built 65+ reusable components with TypeScript and Tailwind, supporting white-label theming through a token-based architecture.",
      },
      {
        bold: "Built the operational foundation for Ledger",
        rest: ", including automated testing, accessibility validation, CI workflows, token compilation, and versioned releases to support reliable adoption across engineering teams.",
      },
      {
        bold: "Architected and led the implementation of The Treasury",
        rest: ", Bankrate's first formal design system. Launched Jan 2025 and adopted across a dozen-plus projects with zero production incidents, replacing a legacy CSS framework. Later succeeded by The Ledger following a leadership-directed shift to React/Next.js-native delivery.",
      },
      {
        bold: "Led a Storyblok component audit",
        rest: " that eliminated 289 components (~30%), improving maintainability and simplifying content workflows for product teams. Built a custom internal dashboard to track and report progress for stakeholders.",
      },
      {
        bold: "Authored Playwright E2E suites",
        rest: " integrated into GitHub Actions. Cut CI execution time by ~76% and caught pre-release regressions before they entered production.",
      },
      {
        bold: "Served on Bankrate's A11y and Performance task forces",
        rest: ", resolving WCAG compliance issues and conducting performance audits across product teams, and acting as an internal consultant on Core Web Vitals best practices and front-end performance optimization.",
      },
      {
        bold: "Integrated AI tools",
        rest: " (Claude Code, Cursor, GitHub Copilot, Codex) into daily workflow for component generation, documentation, and code review. Shared practices in bi-weekly team meetings and co-led a hackathon focused on AI-assisted development.",
      },
      {
        bold: "Drove design system education and adoption company-wide",
        rest: ", facilitating lunch-and-learns for cross-functional groups of engineers, designers, and product managers. One-on-one mentoring with developers on component architecture, advanced CSS, Tailwind optimization, and design system standards.",
      },
    ],
  },
  {
    role: "Engineering Manager | Interim",
    company: "Red Ventures / Bankrate",
    period: "03/2025 – 09/2025",
    location: "Remote",
    bullets: [
      {
        bold: "Managed a team of 7 (4 FTEs + 3 contractors) over 6 months",
        rest: ", driving a ~10% increase in sprint velocity through process improvements and conducting mid-cycle performance reviews.",
      },
      {
        bold: "Co-led an internal team hackathon using AI",
        rest: " to accelerate the migration of legacy JavaScript calculators to React and the new design system; the results directly shaped the team's future migration approach.",
      },
    ],
  },
  {
    role: "Senior Front-End Developer",
    company: "Launch That",
    period: "09/2016—09/2021",
    location: "Orlando, FL",
    bullets: [
      {
        bold: "Architected the Ares Framework",
        rest: ", a custom component library and WordPress parent theme powering all Launch That properties, establishing the shared design system foundation that now defines my career. Leveraged it to ship 6 multi-page WordPress sites in a single month.",
      },
      {
        bold: "Trained directly with Brad Frost",
        rest: " (creator of the Atomic Design methodology, which focuses on modular interface design) in a hands-on two-day design system workshop, laying the groundwork for the approaches used in Ares and later at Bankrate.",
      },
      {
        bold: "Built ReportaRoo and DisavOwl",
        rest: ", two in-house Vue.js tools automating marketing reporting and streamlining the SEO link-disavow process, a task previously done manually by analysts.",
      },
    ],
  },
  {
    role: "Lead Front-End / Senior Web Developer",
    company: "Studio Birdsall",
    period: "08/2014—09/2016",
    location: "Winter Park, FL",
    bullets: [
      {
        bold: "Led front-end development across 10+ client projects",
        rest: ", including Magento and Shopify e-commerce builds and custom WordPress sites, delivering production-ready websites on schedule.",
      },
    ],
  },
  {
    role: "Senior Web Developer",
    company: "Full Sail University",
    period: "10/2008—08/2014",
    location: "Winter Park, FL",
    bullets: [
      {
        bold: "Led front-end development for Full Sail University",
        rest: ", including the main marketing sites, blog, hundreds of landing pages & email campaigns, and the interfaces for the university's first online store and online school. Advanced from Web Developer to Senior within three years.",
      },
    ],
  },
];

export type ResumeEducation = {
  degree: string;
  school: string;
  award?: string;
  period: string;
  location: string;
};

export const resumeEducation: ResumeEducation[] = [
  {
    degree: "B.S. Digital Arts & Design",
    school: "Full Sail University",
    award: "Valedictorian",
    period: "09/2006—08/2008",
    location: "Winter Park, FL",
  },
  {
    degree: "Digital Media",
    school: "University of Maine",
    period: "09/2005—05/2006",
    location: "Orono, ME",
  },
];

export const resumeSkills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "PHP"] },
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
      "ShadCN Registry",
      "Multi-Brand Theming / White-Labeling",
    ],
  },
  {
    label: "Practices",
    items: [
      "Accessibility (WCAG / A11y)",
      "Core Web Vitals",
      "Responsive Design",
      "Figma Collaboration",
      "Design-to-Code Handoff",
      "UI/UX Consulting",
    ],
  },
  {
    label: "CMS & Platforms",
    items: ["Storyblok (Headless CMS)", "WordPress (Blade or Twig templating, ACF, Gutenberg)", "Shopify"],
  },
  {
    label: "Testing & CI/CD",
    items: [
      "Playwright (E2E)",
      "Vitest",
      "Jest",
      "axe-core",
      "Biome",
      "GitHub Actions",
      "Semantic Release (semver / conventional commits)",
    ],
  },
  {
    label: "AI & Modern Workflow",
    items: [
      "Cursor, Claude Code, GitHub Copilot, OpenAI Codex, MCP tooling; daily use across code generation, refactoring, documentation, and design-system development; custom rules & prompt authoring",
    ],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
