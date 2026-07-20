# CLAUDE.md — Portfolio

## Project

Dan Welch's personal portfolio site. One page, two-column layout. The site itself is the portfolio artifact — built with the same stack and practices it describes.

## Key files

- `src/lib/content.ts` — all copy: bio, personalBio, experience, testimonials, nav, site metadata, and resume content (`resumeMeta`, `resumeExperience`, `resumeSkills`, `resumeEducation`). Edit content here, not in components.
- `src/app/page.tsx` — root layout, composes section components.
- `src/app/resume/page.tsx` — standalone `/resume` page (source for the generated PDF; see Resume PDF below).
- `src/app/globals.css` — CSS custom properties (colors, fonts), base styles, `::selection` rules.
- `src/components/site/` — one file per section: `about.tsx`, `experience.tsx`, `work.tsx`, `testimonials.tsx`, `contact.tsx`, `footer.tsx`, `side-pane.tsx`, `section.tsx`, plus smaller site pieces: `nav-link.tsx`, `project-card.tsx`, `work-logos.tsx`, `resume-print-button.tsx`.
- `src/components/ui/` — reusable primitives, all in active use: `button.tsx` (shadcn), `avatar.tsx` (`Avatar` + `Identity`), `eyebrow.tsx`, `icon-button.tsx`, `external-link.tsx`. Every component here must be used by the site; don't add speculative primitives.

## Colors

Two brand greens defined in `globals.css`:
- `--brand` (`#3a7d00`) — darker green, used on light backgrounds (right column eyebrows, dots, links).
- `--brand-on-dark` (`#aaee44`) — lighter lime green, used on the dark sidebar (h2, active nav line, `::selection` background).

Do not use `brand-on-dark` on light backgrounds — it fails contrast.

## Layout conventions

- Sidebar (`SidePane`): `lg:px-8 lg:py-14`, dark navy (`bg-dark`).
- Main content wrapper: `@container lg:px-8 lg:pt-29.5 lg:pb-14`. The `pt` value (29.5 = 7.375rem) was pixel-measured to baseline-align `01 · ABOUT` with the sidebar `DESIGN SYSTEMS ARCHITECT` h2. The `@container` is the shared query root for main-column components (SectionHeading's type ramp, Contact CTA text, footer credit stacking, all at `@xl`).
- Section top padding is suppressed on About (`pt-0 sm:pt-0`) since the page wrapper already provides top spacing.

## Interactive components

Both are `"use client"` components:

**About toggle** (`about.tsx`): `useState<"professionally" | "personally">` swaps between `bio` and `personalBio` arrays. The toggle word is italic, `text-foreground`, `hover:text-brand`.

**Testimonials** (`testimonials.tsx`): `useState<Set<number>>` tracks which slides have been expanded. Expanded state persists per slide — once a quote is expanded it stays expanded for that slide. No animations.

## Responsive nav

`SidePane` has three nav states via viewport breakpoints (media queries, not container queries: these are site-wide layout decisions; container queries are reserved for components sized by their slot, like the work grid, experience timeline, and testimonial card in the main column):
1. Mobile (below `sm`): no nav visible in header.
2. Tablet (`sm` to `lg`): compact right-aligned nav in the header row, no active state.
3. Desktop (`lg+`): full sidebar nav below tagline, with scroll-spy active state.

## Fonts

- Display / headings: Bitter (`font-display`)
- Body: Inter (`font-body` / `font-sans`)
- The `/resume` page uses Inter only (loaded in `resume/page.tsx`), no Bitter. See Resume PDF below for why.

## Content guidelines

- No em dashes anywhere in visible copy — use commas, colons, or periods instead.
- Experience descriptions: short, business-output focused. Avoid listing responsibilities; lead with the result.
- Testimonials with a `full` field show a truncated `quote` with a "Full Quote" button; slides without `full` show the full quote directly.

## Resume PDF

The `/resume` page (`src/app/resume/page.tsx`) is the source of truth for the resume; its copy lives in `content.ts` (`resumeMeta`, `resumeExperience`, `resumeSkills`, `resumeEducation`).

`public/Dan_Welch_Resume_DesignSystemsArchitect.pdf` is a **generated artifact — do not hand-edit it.** Regenerate it from the page:

- Locally: `pnpm resume:pdf` — renders `/resume` with headless Chromium via `scripts/generate-resume-pdf.mjs`. Reuses a running dev server, otherwise boots `next start`.
- In CI: the `Resume PDF` GitHub Action regenerates it on PRs that touch the resume page, `content.ts`, `globals.css`, or the script, then commits it back to the PR branch. It renders from the Vercel preview, which is auth-protected — so the job declares `environment: Preview` to read `VERCEL_AUTOMATION_BYPASS_SECRET` (stored in the **Preview** GitHub Environment) and sends it as the `x-vercel-protection-bypass` header. The PDF's timestamp is pinned so output is byte-deterministic (no commit churn).

The skills section uses two explicit flex columns, not CSS `column-count` — Chrome's print engine collapses multi-column into a single column in the PDF.

**ATS constraint:** the resume renders in a single sans-serif (Inter) with **no letter-spacing anywhere**. Tracking classes and Noto Sans's kerning both made PDF text extractors split words ("T ypeScript", "SYST EMS", "Ven tures"), which garbled ATS autofill. Do not add `tracking-*` classes or swap fonts on the resume page without re-verifying extraction (`pdftotext <pdf> -` after `pnpm resume:pdf`).

**Font must be static, not variable — `next/font/local`, not `next/font/google`.** The resume self-hosts static per-weight Inter files from `src/app/resume/fonts/` (`Inter-Regular.woff2`, `Inter-Italic.woff2`, `Inter-SemiBold.woff2`, `Inter-Bold.woff2`, sourced from the official [rsms/inter](https://github.com/rsms/inter) release's `extras/woff-hinted/`, SIL OFL licensed) instead of `next/font/google`'s Inter. `next/font/google` only offers Inter as a variable font (`font-weight: 100 900` in one file); Chromium's `page.pdf()` print path corrupts glyph runs when instancing a variable font's `wght` axis at render time, splitting and duplicating letters on copy/paste (e.g. "software" -> "sof-t-tware", digits vanishing from tabular numbers) even though on-screen rendering and `pdftotext` extraction both look completely clean. Passing an explicit `weight` array to `next/font/google`'s `Inter()` does **not** fix this: for variable-only families it just narrows the CSS `font-weight` declaration while still serving the same variable file underneath, so the corruption survives. Only genuinely separate static font files avoid the instancing step.

**`pdftotext` is not sufficient to verify ATS-safety — it's too forgiving.** Poppler's text-reconstruction heuristics silently repair the exact glyph-run corruption described above; so does `pdfminer.six`. Neither will show a regression. Apple's PDFKit (the engine behind Preview.app, Safari's PDF viewer, and Quick Look on macOS) is much stricter about malformed glyph runs and is what actually caught this bug via a user's copy/paste. On macOS, verify with a real PDFKit extraction, not just `pdftotext`:
```swift
// save as extract.swift, then: swift extract.swift path/to/resume.pdf
import PDFKit
import Foundation
let doc = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1]))!
for i in 0..<doc.pageCount { print(doc.page(at: i)!.string ?? "") }
```
Run this (or paste real copy/pasted text from Preview.app) after any change to resume fonts, weights, or `next/font` config — `pdftotext` passing is necessary but not sufficient.

**Troubleshooting — a PR push shows no `Resume PDF` run** (Vercel deploys but the Action never fires): GitHub occasionally drops the Actions trigger for a specific commit even when the workflow is valid, active, and the paths match. Push another (any) commit to re-trigger — don't go YAML-hunting. Confirmed once on commit `283aec0`: valid YAML, public repo (no quota), Actions operational, yet zero runs created for that SHA.
