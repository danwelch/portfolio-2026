export const site = {
  name: "Dan Welch",
  role: "Design Systems Architect",
  tagline: "Design Systems Architecture & Front-End Engineering",
  location: "Remote · Open to relocation",
  email: "contact@danwelch.net",
  phone: "(407) 741-3175",
  resume: "/Dan_Welch_Resume_DesignSystemsArchitect.pdf",
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
  "When I'm not working, I'm a husband and a dad to two young girls.",
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

export type Testimonial = {
  quote: string;
  full?: string;
  fullHtml?: string;
  name: string;
  title: string;
  initials: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Dan is the best front-end engineer I know... What makes Dan exceptional is how completely he bridges both sides of the design-engineering equation. He brings a designer's eye and genuine attention to detail, paired with the structural rigor and systems thinking of a strong engineer...",
    fullHtml: `<p>Dan is the best front-end engineer I know, and I've been lucky enough to work with him for over a decade across two companies.</p><p>What makes Dan exceptional is how completely he bridges both sides of the design-engineering equation. He brings a designer's eye and genuine attention to detail, paired with the structural rigor and systems thinking of a strong engineer. The result: the most sustainable, approachable, and extensible design systems I've encountered in my career.</p><p>My design teams have benefitted directly from his expertise — not just from what he builds, but from how he works. He shares technical context generously, brings people into decisions rather than making them in isolation, and treats design as a real partner, not a handoff. He's the kind of engineer design teams fight to keep close.</p>`,
    name: "Ricky Carlton",
    title: "Senior Director of Creative @ Bankrate",
    initials: "RC",
    avatar: "/avatars/ricky.jpg",
  },
  {
    quote: "Technically, Dan brought a rare level of strength, especially on the front end. He had a real grasp of how user experience, reusable components, maintainability, and business goals all connect. His work on the Design System is a good example of that. It created a cleaner, more scalable foundation for how teams built experiences across Bankrate.",
    fullHtml: `<p>I worked closely with Dan for several years, and I came to trust him deeply as both an engineer and a partner in the work. Dan was one of the people you wanted on the hard projects. When something was complex, visible, or important to the business, his involvement made the work feel more achievable. He played key roles in major efforts like Bankrate Awards, the Design System, Data Center, First-Hand Experience, the Expert Contributor Program, and several platform initiatives that shaped both customer-facing experiences and the way internal teams were able to build and maintain products.</p><p>Technically, Dan brought a rare level of strength, especially on the front end. He had a real grasp of how user experience, reusable components, maintainability, and business goals all connect. His work on the Design System is a good example of that. It was not just about making things look consistent. It created a cleaner, more scalable foundation for how teams built experiences across Bankrate. That kind of work requires taste, judgment, technical depth, and an ability to think beyond the immediate ticket.</p><p>But what I appreciated most about Dan was not only what he delivered. It was how seriously he took responsibility when his role expanded. During the period when Dan stepped into an acting management role, I saw a different side of him come forward. He was still delivering as an IC, but he was also thinking more deeply about the team, the business, and the people doing the work. He talked differently about problems. He connected technical decisions to the strategic "why." He thought about how to motivate the team, how to help people understand the purpose behind the work, and how to create the conditions for others to succeed.</p><p>That transition stood out to me because it felt genuine. Dan did not become performative or overly focused on authority. He became more intentional. He listened more closely. He thought more carefully about people. He seemed to understand that leadership is not just about unblocking work, but about creating clarity, trust, and safety for the people doing the work.</p><p>I always felt Dan cared about doing things well, but in that period I also saw how much he cared about doing right by people. He had high standards, but he did not use them to make people feel small. He brought technical credibility, but he did not make collaboration feel intimidating. He was thoughtful, steady, and considerate in a way that made him easy to trust.</p><p>What makes Dan rare is that he can be both the engineer you want on a difficult project and the leader you would feel safe working under. He has the technical judgment to deliver important work and the character to lead people well while doing it. I would work with Dan again without hesitation.</p>`,
    name: "Uchenna Ebilah",
    title: "Staff Technical Project Manager @ Red Ventures",
    initials: "UE",
    avatar: "/avatars/uchenna.jpg",
  },
  {
    quote:
      "Dan is looked to as a thought leader... and has gotten feedback like, 'Dan completely changed the way I think about the frontend.'",
    fullHtml: `<p class="disclaimer">Justin sent this to senior leadership to advocate for my promotion to Engineering Manager.</p><p>Dan is looked to as a thought leader, owning large projects like successfully migrating all pages on Bankrate to the Treasury Design System with no major issues and simplifying our yearly Bankrate Awards templates so they now take a fraction of the time to update. He has taken on mentoring several engineers and has gotten feedback like, "Dan completely changed the way I think about the frontend."</p><p>Since Dan has taken on the functional role of EM, he has shown he can be trusted in this position and is ready to lead.</p>`,
    name: "Justin Cook",
    title: "fmr. Director of Engineering @ Bankrate",
    initials: "JC",
    avatar: "/avatars/justin.jpg",
  },
  {
    quote:
      "You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work.",
    fullHtml: `<p>I wish to give my gratitude to Dan, and I will echo this to the world a thousand times over.</p><p>You've been the most influential coworker in my development from LT to RV. Observing your brilliance and high standards from a distance inspired me to replicate that in my own work.</p><p>Back at LT, the first time you reviewed my work, you asked me if I knew what semantic HTML is… hell no! But now I see how often a foundational building block is overlooked.</p><p>At RV, you mentioned container queries, and by the end of the day, I knew everything about them just to understand wtf you were talking about.</p><p>Every piece of critical feedback and every single resource you sent in Slack sent me down a rabbit hole to learn more because I wanted to be as good as you.</p><p>Also, you were the only one who could give me actual, valuable design feedback in ways that other designers just couldn't. I am incredibly lucky and grateful to have had you as my engineer.</p>`,
    name: "Saleena Beharry",
    title: "Staff Product Designer",
    initials: "SB",
    avatar: "/avatars/saleena.jpg",
  },
  {
    quote:
      "If anyone is looking for a senior front-end engineer, specifically with expertise around design systems, I would highly recommend Daniel Welch.I've worked with him at my last 2 companies, Red Ventures and Launch That, and he has been a crucial piece to success in multiple product orgs.",
    name: "Eric Rodgers",
    title: "Principal Product Designer @ CNET",
    initials: "ER",
    avatar: "/avatars/eric.jpg",
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
      "Branding",
    ],
  },
  {
    label: "Practices",
    items: [
      "Accessibility (WCAG / A11y)",
      "Core Web Vitals",
      "Progressive Enhancement",
      "Responsive Design",
      "Typography",
      "Information Architecture",
      "Figma Collaboration",
      "Design-to-Code Handoff",
      "UI/UX Consulting",
      "Technical Writing",
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
      "Cursor, Claude Code, GitHub Copilot, OpenAI Codex, MCP tooling; daily use across code generation, refactoring, documentation, rapid prototyping, and design-system development; custom rules & prompt authoring",
    ],
  },
  {
    label: "Leadership",
    items: ["Engineering Management", "Team Mentorship", "Stakeholder Alignment"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
