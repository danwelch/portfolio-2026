# Dan Welch — Portfolio

A one-page portfolio site for a Design Systems Architect with 17+ years of front-end engineering experience. Clean two-column layout with sticky sidebar, interactive sections, and a focus on legibility over flash.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- [Bitter](https://fonts.google.com/specimen/Bitter) (display) + [Outfit](https://fonts.google.com/specimen/Outfit) (body)

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Editing content

All copy lives in [`src/lib/content.ts`](src/lib/content.ts): bio, personal bio, experience, skills, testimonials, and nav. Sections are composed in [`src/app/page.tsx`](src/app/page.tsx) from components in `src/components/site/`.

The resume PDF is served from `public/Dan-Welch-Resume.pdf`.

## Layout

- **Left column** (`SidePane`) — sticky on desktop, stacked on mobile. Dark navy (`bg-dark`), lime-green accents (`brand-on-dark`).
- **Right column** — scrollable content: About, Experience, Work, Testimonials, Contact.
- Baseline-aligned at `lg` breakpoint: `01 · ABOUT` eyebrow aligns with the `DESIGN SYSTEMS ARCHITECT` h2 baseline via `lg:pt-[7.375rem]`.

## Interactive features

- **About toggle** — "professionally / personally" button in the heading swaps bio content between `bio` and `personalBio` arrays in `content.ts`.
- **Testimonials carousel** — per-slide expanded state via `Set<number>`; "Full Quote" button persists per slide across navigation.
- **Active nav** — scroll spy highlights the current section in the sidebar nav.

## To do

- [ ] Write up case studies (The Ledger, The Treasury)
- [ ] Wire up a real contact form (Resend / Formspree)
- [ ] Add OG image / meta tags
