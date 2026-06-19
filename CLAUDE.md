# CLAUDE.md — Portfolio

## Project

Dan Welch's personal portfolio site. One page, two-column layout. The site itself is the portfolio artifact — built with the same stack and practices it describes.

## Key files

- `src/lib/content.ts` — all copy: bio, personalBio, experience, skills, testimonials, nav, site metadata. Edit content here, not in components.
- `src/app/page.tsx` — root layout, composes section components.
- `src/app/globals.css` — CSS custom properties (colors, fonts), base styles, `::selection` rules.
- `src/components/site/` — one file per section: `about.tsx`, `experience.tsx`, `work.tsx`, `testimonials.tsx`, `contact.tsx`, `footer.tsx`, `side-pane.tsx`, `section.tsx`.

## Colors

Two brand greens defined in `globals.css`:
- `--brand` (`#3a7d00`) — darker green, used on light backgrounds (right column eyebrows, dots, links).
- `--brand-on-dark` (`#aaee44`) — lighter lime green, used on the dark sidebar (h2, active nav line, `::selection` background).

Do not use `brand-on-dark` on light backgrounds — it fails contrast.

## Layout conventions

- Sidebar (`SidePane`): `lg:px-8 lg:py-14`, dark navy (`bg-dark`).
- Main content wrapper: `lg:px-8 lg:pt-[7.375rem] lg:pb-14`. The `pt` value was pixel-measured to baseline-align `01 · ABOUT` with the sidebar `DESIGN SYSTEMS ARCHITECT` h2.
- Section top padding is suppressed on About (`pt-0 sm:pt-0`) since the page wrapper already provides top spacing.

## Interactive components

Both are `"use client"` components:

**About toggle** (`about.tsx`): `useState<"professionally" | "personally">` swaps between `bio` and `personalBio` arrays. The toggle word is italic, `text-foreground`, `hover:text-brand`.

**Testimonials** (`testimonials.tsx`): `useState<Set<number>>` tracks which slides have been expanded. Expanded state persists per slide — once a quote is expanded it stays expanded for that slide. No animations.

## Responsive nav

`SidePane` has three nav states via container queries on `@container/header`:
1. Mobile (`< @520px`): no nav visible in header.
2. Tablet (`@[520px]` to `lg`): compact right-aligned nav in the header row, no active state.
3. Desktop (`lg+`): full sidebar nav below tagline, with scroll-spy active state.

## Fonts

- Display / headings: Bitter (`font-display`)
- Body: Outfit (`font-body` / `font-sans`)

## Content guidelines

- No em dashes anywhere in visible copy — use commas, colons, or periods instead.
- Experience descriptions: short, business-output focused. Avoid listing responsibilities; lead with the result.
- Testimonials with a `full` field show a truncated `quote` with a "Full Quote" button; slides without `full` show the full quote directly.
