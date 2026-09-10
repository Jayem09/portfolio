# Portfolio Design — Personal Software Engineer Portfolio (renlenon-inspired)

**Date:** 2026-09-10
**Author:** Muse Spark + John Mark
**Status:** Draft — awaiting approval
**Inspiration:** https://renlenon.vercel.app/

## 1. Overview

Build a personal portfolio for a Software Engineer targeting hiring (recruiters + hiring managers). Goal: pass the 6-second scan, then allow deep dive.

This is **Architectural** (new project from scratch). Empty workspace `/Users/johnmarkdinglasan/Desktop/portfolio` — no existing flow to modify. Approved approach: **Option B Ultra-minimal static** (single page, no DB, no MDX routes) but **cloning the structure/aesthetic of renlenon.vercel.app**.

### Goals
- One scrollable page at `/` that sells the candidate for jobs.
- Clean & Minimal, editorial, centered feed — directly cloned from inspiration.
- Fast, SEO-friendly, static-friendly, dark-mode capable.
- Placeholder content in `lib/data.ts` for easy swap to real projects/experience.

### Non-Goals (v1)
- No blog post pages or MDX (blog preview cards only if needed).
- No backend, no DB, no auth.
- No CMS.
- No multi-language.
- KeepR-style chat widget deferred to v2.

## 2. Architecture

### Stack
- **Next.js 14+ App Router** + **TypeScript** + **Tailwind CSS**
- **next/font** (Inter) — matching inspiration's typographic system
- **Static export ready** — all data is local TS arrays, no `fetch`, no API routes in v1
- Deployed to **Vercel**

### File Structure
```
app/
  layout.tsx      // <html>, metadata, dark-mode script, font, PageLayout shell
  page.tsx        // single page composing all sections (max-w-3xl feed)
  globals.css     // tailwind base + custom ink color
components/
  layout/
    Header.tsx    // top nav (name, links, dark toggle — dashed border if matching inspo)
    Footer.tsx
    Section.tsx   // wrapper: E_ equivalent — spacing, border semantics
  sections/
    Hero.tsx         // name — role (e.g. “— Software Engineer”), View Resume CTA
    FeaturedBuild.tsx // highlighted project (image left, copy right, like KeepR)
    Experience.tsx    // timeline: dates left (160px col) + role/company/desc right
    Projects.tsx      // 2-col grid of project cards (dashed border, COMING SOON fallback)
    TechStack.tsx     // (optional, inspiration has GitHub Activity + Technologies tags)
    GithubActivity.tsx // placeholder card: “No recent public activity” fallback
    Certifications.tsx // timeline similar to Experience
    Education.tsx     // timeline: school, dates, campus
    OutsideIDE.tsx    // personal interests + image cards grid (Travel/Gym/etc → placeholder)
    Contact.tsx       // “Let’s work together.” + Email/Calendly/LinkedIn/GitHub grid
  ui/
    ProjectCard.tsx
    TimelineItem.tsx
lib/
  data.ts         // all placeholder content: featuredBuild, experiences, projects, certs, education
```

### Inspiration Mapping (renlenon → ours)
| RenLenon Section | Our Clone | Notes |
|---|---|---|
| `mx-auto max-w-3xl gap-14/16 px-4 sm:px-6` | Same container | Centered editorial feed, not full-width |
| Featured Build (KeepR gif left + text right, dashed border) | FeaturedBuild | Swap KeepR → user’s best project, gif → image |
| Experience (sm:grid [160px_1fr], dates muted) | Experience | Timeline, light headings `text-2xl sm:text-3xl font-light tracking-tight` |
| Projects (2-col grid, dashed cards, “Explore N+ Projects” pill) | Projects | Cards with `border-dashed`, `COMING SOON` if no image |
| Certifications (View All) | Certifications | Same timeline |
| Education | Education | Same |
| Outside the IDE (text left, 4 image cards right) | OutsideIDE | Generic hobbies placeholder |
| Let’s work together (2-col contact grid) | Contact | Email + socials |
| Dark mode via `localStorage theme` + `dark:` | Same | `document.documentElement.classList.toggle('dark')` |
| Headings: `font-light tracking-tight text-gray-900 dark:text-white` + label `text-[11px] uppercase tracking-[0.22em]` | Same | Exact typography |

## 3. Components Detail

### Layout & Aesthetics (Critical to clone)
- **Palette:** `bg-white text-gray-900 dark:bg-ink dark:text-white` where `ink = #121212` (from meta theme-color). Accent not saturated blue — use `bg-ink text-white dark:bg-white dark:text-black` for primary pill buttons.
- **Borders:** `border border-dashed border-gray-300 dark:border-gray-700` + `rounded-xl`
- **Headings:** `text-2xl sm:text-3xl font-light tracking-tight`
- **Labels:** `text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500`
- **Dates:** `text-xs font-medium text-gray-400 dark:text-gray-500`
- **Pill Button:** `bg-ink text-white dark:bg-white dark:text-black rounded-lg px-5 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform`
- **View All / View Details links:** `text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white` with chevron.

### Data Model (`lib/data.ts`)
```ts
export const featuredBuild = { title, description, image, href, ctaLabel }
export const experiences: { dates, title, company, location, description, tags? }[]
export const projects: { slug, title, description, image?, liveUrl?, githubUrl?, tags[] }[]
export const certifications: { dates, title, issuer, credentialUrl? }[]
export const education: { dates, title, institution, campus }[]
export const contact = { email, calendly?, linkedin?, github?, headline }
```

All rendered via `.map` — no data fetching.

## 4. Page Composition (app/page.tsx)

Order cloned from inspiration (adjusted for hiring):
```
<main className="mx-auto flex w-full max-w-3xl flex-col gap-14 sm:gap-16 px-4 sm:px-6 pb-10 sm:pb-16">
  <Hero />
  <FeaturedBuild />
  <Experience />
  <Projects />
  <TechStack />        // Skills as tag pills (e.g. React, TS, Node) — single section, no duplicate grid
  <GithubActivity />   // optional placeholder — hidden if no data
  <Certifications />   // if empty array, hide section
  <Education />
  <OutsideIDE />
  <Contact />
</main>
```

Hero specifics (from partial JS extract): top section not fully recovered, but inferred as name + “— Software Engineer” + `View Resume` button + social icons. We’ll replicate: big name, role subtitle, 2 CTAs (View Resume + Contact), location tag.

## 5. SEO & Metadata (mirroring inspo)

- `app/layout.tsx` metadata: title, description, og:image, canonical, json-ld `Person` schema similar to renlenon’s.
- Theme color `#121212`, favicon, apple-touch-icon placeholder.
- No `site.webmanifest` required for v1.

## 6. Dark Mode

- Inline script in `<head>` (before hydration) reading `localStorage.theme` else `prefers-color-scheme`, toggling `dark` class.
- Toggle button in Header.
- All sections use `dark:` variants (`dark:bg-ink`, `dark:text-white`, `dark:border-gray-700`).

## 7. Error Handling & Edge Cases

- Missing project image → show `COMING SOON` dashed placeholder (exact clone behavior).
- Empty arrays → section hidden (e.g., no certifications).
- Images use `next/image` with `unoptimized` if static or local `/public`.
- Smooth scroll for nav anchors, no broken anchor links.

## 8. Testing & Verification

- Manual: `npm run dev` → visual check against https://renlenon.vercel.app/ (screenshot compare: spacing, borders, typography).
- `npm run build` must pass (no TS errors).
- Lighthouse spot-check: ensure dark mode persists, links work, responsive at 375px and 1024px.
- No unit tests for v1 (static content).

## 9. Deployment

- `npm run build` → `next build` (static capable).
- Push to GitHub, import to Vercel. No env vars.
- Domain placeholder.

## 10. Future (Not in v1)

- ` /projects`, `/experience`, `/certifications` detail pages (renlenon has these).
- Chat widget (`Chat with Ren` floating button + `/api/chat-status`).
- MDX blog.
- GitHub Activity live fetch.

## 11. Open Questions (resolved)

- Role: Software Engineer ✓
- Goal: Get hired ✓
- Style: Clean & Minimal ✓
- Stack: Next.js + Tailwind ✓
- Content: Placeholders ✓
- Layout: Clone renlenon structure ✓

---

**Approval gate:** Please approve this spec before scaffolding. After approval, next step is `writing-plans` → implementation.
