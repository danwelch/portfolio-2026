# Dan Welch — Portfolio (temporary)

A minimal one-page holding site while the full portfolio is in progress.
Light/editorial design with a short bio, experience timeline, skills,
teased case studies, testimonials placeholder, and contact links.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (radix primitives)
- [Fraunces](https://fonts.google.com/specimen/Fraunces) + Geist Sans/Mono

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Editing content

All copy lives in [`src/lib/content.ts`](src/lib/content.ts) — bio,
experience, skills, and links. Sections are composed in
[`src/app/page.tsx`](src/app/page.tsx) from `src/components/site/`.

The resume PDF is served from `public/Dan-Welch-Resume.pdf`.

## To do

- [ ] Write up case studies (The Ledger, The Treasury, Storyblok audit)
- [ ] Add testimonials from former colleagues
- [ ] Wire up a real contact form when ready (Resend / Formspree)
