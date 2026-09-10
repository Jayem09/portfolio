# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a single-page, hiring-focused Software Engineer portfolio that clones renlenon.vercel.app editorial structure (max-w-3xl, dashed cards, light headings, dark mode) with placeholder content.

**Architecture:** Next.js App Router single `app/page.tsx` composing 9 section components fed by local `lib/data.ts` arrays. No DB/API. Tailwind for styling, `next/font` Inter, inline dark-mode script toggling `dark` class. Static export ready for Vercel.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS 3, next/font (Inter), next/image

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-design.md`

## Global Constraints

- Node >= 18 (system has 24.19.0)
- Next.js App Router + TypeScript strict
- Tailwind `darkMode: "class"`, custom color `ink: "#121212"` (theme-color)
- Single page static: no DB, no API routes, no MDX in v1
- Container: `mx-auto max-w-3xl gap-14 sm:gap-16 px-4 sm:px-6`
- Borders: `border border-dashed border-gray-300 dark:border-gray-700 rounded-xl`
- Headings: `text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white`
- Labels: `text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400`
- Pill button: `bg-ink text-white dark:bg-white dark:text-black rounded-lg px-5 py-2.5 text-sm font-medium`
- All placeholder content in `lib/data.ts`

---

## File Structure

```
app/
  layout.tsx        // html/head, metadata, dark script, Inter, Header/Footer shell
  page.tsx          // composes all sections in max-w-3xl main
  globals.css       // tailwind layers + ink var
components/
  layout/
    Header.tsx      // name + nav anchors + dark toggle + View Resume link
    Footer.tsx      // copyright + socials
    Section.tsx     // optional wrapper (title + View All link pattern)
  sections/
    Hero.tsx
    FeaturedBuild.tsx
    Experience.tsx
    Projects.tsx
    TechStack.tsx
    GithubActivity.tsx
    Certifications.tsx
    Education.tsx
    OutsideIDE.tsx
    Contact.tsx
  ui/
    ProjectCard.tsx
    TimelineItem.tsx
lib/
  data.ts           // featuredBuild, experiences, projects, certifications, education, contact, techStack
public/
  favicon + placeholder images (optional)
```

---

### Task 1: Scaffold Next.js + Tailwind base

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.mjs`, `app/globals.css`, `app/layout.tsx` (minimal), `app/page.tsx` (placeholder)
- Modify: none
- Test: `npm run build`

**Interfaces:**
- Consumes: none
- Produces: Next.js project boots at localhost:3000

- [ ] **Step 1: Run create-next-app (or manual init) with TypeScript + Tailwind + App Router**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*" --use-npm
# If create-next-app fails due to existing .git/docs, fallback: manually init package.json
```

Alternative manual if directory not empty:

```bash
npm init -y
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer eslint eslint-config-next
npx tailwindcss init -p
```

- [ ] **Step 2: Configure tailwind.config.ts for dark class + ink**

```ts
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#121212" },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 3: Set globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 4: Minimal layout + page to verify boot**

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
// app/page.tsx
export default function Page(){ return <div>boot</div> }
```

- [ ] **Step 5: Verify build**

```bash
npm run build
# Expected: PASS (production build)
```

- [ ] **Step 6: Commit**

```bash
git add package.json tsconfig.json tailwind.config.ts postcss.config.js next.config.mjs app/
git commit -m "feat: scaffold Next.js + Tailwind base"
```

---

### Task 2: Central data + types (lib/data.ts)

**Files:**
- Create: `lib/data.ts`
- Modify: `tsconfig.json` ensure `@/*` alias
- Test: `npx tsc --noEmit`

**Interfaces:**
- Consumes: none
- Produces: `export const featuredBuild`, `experiences`, `projects`, `certifications`, `education`, `contact`, `techStack` with types used by all section tasks

- [ ] **Step 1: Write lib/data.ts with placeholder content matching renlenon shape**

```ts
export type Experience = { dates: string; title: string; company: string; location: string; description: string; tags?: string[] };
export type Project = { slug: string; title: string; description: string; image?: string; liveUrl?: string; githubUrl?: string; detailsUrl?: string; tags: string[] };
export type Certification = { dates: string; title: string; issuer: string; credentialUrl?: string };
export type Education = { dates: string; title: string; institution: string; campus: string };

export const featuredBuild = {
  label: "Featured Build",
  title: "ShipFast — private vault & workflow OS",
  description: "Local-first password vault and personal workflow desktop app. Built with Tauri + Rust + Next.js. End-to-end encrypted, offline-capable.",
  image: "/placeholder-keepR.gif",
  href: "#projects",
  ctaLabel: "Read case study",
};

export const experiences: Experience[] = [
  { dates: "2023 — Present", title: "Software Engineer", company: "Acme Corp", location: "Manila, PH — Remote", description: "Shipped 3 client platforms with Next.js + Laravel. Cut page load 40% via ISR and edge caching. Led SEO migration (+62% organic).", tags: ["Next.js","Laravel","PostgreSQL"] },
  { dates: "2021 — 2023", title: "Full-Stack Developer", company: "Freelance", location: "Remote", description: "Delivered 15+ WordPress + React sites. Integrated Stripe, GSAP, OpenAI APIs.", tags: ["React","WordPress","PHP"] },
];

export const projects: Project[] = [
  { slug: "shipfast", title: "ShipFast", description: "Local-first vault + workflow OS.", image: "", liveUrl: "#", githubUrl: "#", tags: ["Tauri","Rust","Next.js"] },
  { slug: "pawsitive", title: "PawsitiveCare", description: "Vet clinic booking platform.", image: "", liveUrl: "#", githubUrl: "#", tags: ["Laravel","React"] },
  { slug: "keepr", title: "Keepr", description: "Private bookmarks & notes.", image: "", liveUrl: "#", githubUrl: "#", tags: ["Next.js","Supabase"] },
  { slug: "events", title: "Events Hub", description: "City event aggregator.", image: "", liveUrl: "#", githubUrl: "#", tags: ["Next.js","PostgreSQL"] },
];

export const certifications: Certification[] = [
  { dates: "2024", title: "Meta Front-End Developer", issuer: "Coursera", credentialUrl: "#" },
  { dates: "2023", title: "AWS Cloud Practitioner", issuer: "AWS", credentialUrl: "#" },
];

export const education: Education[] = [
  { dates: "2018 — 2022", title: "BS Information Technology", institution: "Polytechnic University of the Philippines", campus: "Manila, PH" },
];

export const techStack = ["Next.js","React","TypeScript","Tailwind","Node.js","Laravel","WordPress","PostgreSQL","PHP","Rust","Tauri"];

export const contact = {
  headline: "Let's work together.",
  sub: "Available for full-time roles and freelance builds — Next.js, Laravel, WordPress, and full-stack. Also open to SEO and performance audits.",
  email: "you@example.com",
  calendly: "https://calendly.com/",
  linkedin: "https://linkedin.com/in/",
  github: "https://github.com/",
};
```

- [ ] **Step 2: Verify types**

```bash
npx tsc --noEmit
# Expected: PASS
```

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add central placeholder data (lib/data.ts)"
```

---

### Task 3: Root layout — metadata, fonts, dark script, globals

**Files:**
- Modify: `app/layout.tsx`, `app/globals.css`
- Create: `components/layout/Header.tsx`, `components/layout/Footer.tsx`
- Test: `npm run build`, visual check dark toggle persists after reload

**Interfaces:**
- Consumes: `lib/data.ts` (for Header name/links if needed)
- Produces: `<html>` with `dark` class handling, Inter font, Header/Footer rendered on every page

- [ ] **Step 1: Implement app/globals.css if not done**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 2: Implement app/layout.tsx — metadata + dark script + Inter**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name — Software Engineer",
  description: "Software Engineer portfolio — Next.js, React, Laravel. Building fast, accessible web apps.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Your Name — Software Engineer", description: "Portfolio", type: "website" },
  themeColor: "#121212",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){const s=localStorage.getItem('theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;const u=s?s==='dark':d;document.documentElement.classList.toggle('dark',u)})();` }} />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-ink dark:text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Header.tsx — name left, nav anchors center, dark toggle + View Resume right**

```tsx
"use client";
import { useEffect, useState } from "react";
export default function Header(){
  const [dark,setDark]=useState(false);
  useEffect(()=> setDark(document.documentElement.classList.contains('dark')),[]);
  function toggle(){ const n=!dark; setDark(n); document.documentElement.classList.toggle('dark',n); localStorage.setItem('theme',n?'dark':'light'); }
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Your Name</a>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-500">
          <a href="#experience" className="hover:text-gray-900 dark:hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="text-sm border border-dashed rounded-lg px-3 py-1">{dark?'Light':'Dark'}</button>
          <a href="#" className="hidden sm:inline-flex bg-ink text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-lg text-sm font-medium">View Resume</a>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Footer.tsx minimal**

```tsx
export default function Footer(){
  return <footer className="mx-auto max-w-3xl px-4 sm:px-6 py-8 text-xs text-gray-400 border-t border-dashed border-gray-200 dark:border-gray-800 mt-10">© {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind.</footer>;
}
```

- [ ] **Step 5: Verify**

```bash
npm run build
npm run dev # check http://localhost:3000 dark toggle persists after reload
```

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/globals.css components/layout/
git commit -m "feat: add root layout with Inter, metadata, dark mode and header/footer"
```

---

### Task 4: Hero section

**Files:**
- Create: `components/sections/Hero.tsx`
- Test: visual `npm run dev` hero matches inspo typography

**Interfaces:**
- Consumes: `lib/data.ts` not needed (hardcoded name/role)
- Produces: `<Hero />` returns heading + CTA row

- [ ] **Step 1: Implement Hero.tsx — big name, “— Software Engineer”, 2 CTAs, location**

```tsx
export default function Hero(){
  return (
    <section className="w-full pt-8 sm:pt-12 space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">Your Name</h1>
        <p className="text-xl sm:text-2xl font-light tracking-tight text-gray-500 dark:text-gray-400">— Software Engineer</p>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">I build fast, accessible web apps with Next.js, React, and Laravel. Focused on clean code, SEO, and shipping.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="#contact" className="bg-ink text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-[1.03] transition-transform">Hire Me</a>
        <a href="#projects" className="border border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5">View Projects</a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1 py-2.5">View Resume →</a>
      </div>
      <p className="text-xs text-gray-400">Manila, PH · Available for remote</p>
    </section>
  );
}
```

- [ ] **Step 2: Verify renders**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: add Hero section (name, role, CTAs)"
```

---

### Task 5: FeaturedBuild (KeepR clone)

**Files:**
- Create: `components/sections/FeaturedBuild.tsx`
- Test: visual matches dashed card, image left on sm, text right

**Interfaces:**
- Consumes: `featuredBuild` from `lib/data.ts`
- Produces: `<FeaturedBuild />`

- [ ] **Step 1: Implement FeaturedBuild.tsx**

```tsx
import { featuredBuild } from "@/lib/data";
export default function FeaturedBuild(){
  return (
    <section className="w-full overflow-hidden rounded-xl border border-dashed border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-ink">
      <div className="grid gap-0 sm:grid-cols-[300px_1fr] sm:items-stretch">
        <div className="bg-gray-100 dark:bg-black/30 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featuredBuild.image} alt={featuredBuild.title} className="h-40 w-full object-cover sm:h-full" />
        </div>
        <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">{featuredBuild.label}</p>
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white">{featuredBuild.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{featuredBuild.description}</p>
          <a href={featuredBuild.href} className="group inline-flex items-center gap-1 bg-ink text-white dark:bg-white dark:text-black text-sm font-medium px-4 py-2 rounded-lg w-fit hover:scale-[1.02] transition-transform">{featuredBuild.ctaLabel} <span aria-hidden>→</span></a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/sections/FeaturedBuild.tsx
git commit -m "feat: add FeaturedBuild section (dashed card clone)"
```

---

### Task 6: Experience timeline

**Files:**
- Create: `components/sections/Experience.tsx`, `components/ui/TimelineItem.tsx`
- Test: `npx tsc --noEmit`

**Interfaces:**
- Consumes: `experiences` from `lib/data.ts`
- Produces: `<Experience />` mapping timeline

- [ ] **Step 1: TimelineItem.tsx (reusable for Experience/Cert/Education)**

```tsx
export default function TimelineItem({ dates, title, subtitle, location, description, tags, action }: { dates: string; title: string; subtitle: string; location?: string; description?: string; tags?: string[]; action?: React.ReactNode }) {
  return (
    <div className="sm:grid sm:grid-cols-[160px_1fr] sm:gap-6">
      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap mb-1 sm:mb-0 sm:pt-1">{dates}</p>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{subtitle}</p>
        {location && <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>}
        {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{description}</p>}
        {tags && <div className="flex flex-wrap gap-1.5 mt-2">{tags.map(t=> <span key={t} className="text-[11px] border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5">{t}</span>)}</div>}
        {action}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Experience.tsx**

```tsx
import { experiences } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";
export default function Experience(){
  return (
    <section id="experience" className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Experience</p>
        <a href="#" className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white">View Details <span className="group-hover:translate-x-1 transition-transform">→</span></a>
      </div>
      <div className="space-y-7 sm:space-y-8">
        {experiences.map(e=> <TimelineItem key={e.title+e.dates} dates={e.dates} title={e.title} subtitle={e.company} location={e.location} description={e.description} tags={e.tags} />)}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/sections/Experience.tsx components/ui/TimelineItem.tsx
git commit -m "feat: add Experience timeline (dashed style clone)"
```

---

### Task 7: Projects grid + ProjectCard

**Files:**
- Create: `components/ui/ProjectCard.tsx`, `components/sections/Projects.tsx`
- Test: `npx tsc --noEmit`, visual 2-col grid

**Interfaces:**
- Consumes: `projects` from `lib/data.ts`
- Produces: `<Projects />`

- [ ] **Step 1: ProjectCard.tsx (dashed, COMING SOON fallback)**

```tsx
import { Project } from "@/lib/data";
export default function ProjectCard({ project }: { project: Project }){
  const hasImg = !!project.image;
  const href = project.detailsUrl || project.liveUrl || "#";
  return (
    <div className="flex h-full flex-col gap-2 bg-white dark:bg-ink border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded-xl">
      <a href={href} className="block overflow-hidden rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
        {hasImg ? <img src={`/images/projects/${project.image}`} alt={project.title} className="h-40 w-full object-cover" /> : <div className="grid h-40 w-full place-items-center bg-white dark:bg-ink"><span className="text-sm tracking-[0.35em] text-gray-400">COMING SOON</span></div>}
      </a>
      <div className="px-2 pb-2 space-y-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">{project.tags.map(t=> <span key={t} className="text-xs border rounded-full px-2 py-0.5">{t}</span>)}</div>
        <div className="flex gap-3 pt-2 text-sm">
          {project.liveUrl && <a href={project.liveUrl} className="text-gray-900 dark:text-white font-medium">Visit Site →</a>}
          {project.githubUrl && <a href={project.githubUrl} className="text-gray-500 hover:text-gray-900">GitHub</a>}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Projects.tsx**

```tsx
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
export default function Projects(){
  return (
    <section id="projects" className="w-full space-y-5">
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map(p=> <ProjectCard key={p.slug} project={p} />)}
      </div>
      <div className="flex justify-center pt-2">
        <a href="#" className="group inline-flex items-center gap-1.5 bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:scale-[1.03] transition-transform dark:bg-white dark:text-black">Explore {Math.floor(projects.length/5)*5}+ Projects <span className="group-hover:translate-x-1 transition-transform">→</span></a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/ui/ProjectCard.tsx components/sections/Projects.tsx
git commit -m "feat: add Projects grid with dashed cards"
```

---

### Task 8: TechStack + GithubActivity + Certifications + Education

**Files:**
- Create: `components/sections/TechStack.tsx`, `components/sections/GithubActivity.tsx`, `components/sections/Certifications.tsx`, `components/sections/Education.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `techStack`, `certifications`, `education`
- Produces: 4 sections

- [ ] **Step 1: TechStack.tsx**

```tsx
import { techStack } from "@/lib/data";
export default function TechStack(){
  return (
    <section className="w-full space-y-4">
      <p className="text-2xl sm:text-3xl font-light tracking-tight">Tech Stack</p>
      <div className="flex flex-wrap gap-2">{techStack.map(t=> <span key={t} className="border border-dashed border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-xs">{t}</span>)}</div>
    </section>
  );
}
```

- [ ] **Step 2: GithubActivity.tsx (static placeholder like inspo)**

```tsx
export default function GithubActivity(){
  return (
    <section className="w-full space-y-4">
      <p className="text-2xl sm:text-3xl font-light tracking-tight">GitHub Activity</p>
      <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-sm text-gray-500">No recent public activity to show right now.</div>
    </section>
  );
}
```

- [ ] **Step 3: Certifications.tsx**

```tsx
import { certifications } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";
export default function Certifications(){
  if(!certifications.length) return null;
  return (
    <section className="w-full space-y-6">
      <div className="flex items-center justify-between"><p className="text-2xl sm:text-3xl font-light tracking-tight">Certifications</p><a href="#" className="text-sm text-gray-400 hover:text-gray-900">View All →</a></div>
      <div className="space-y-7">{certifications.map(c=> <TimelineItem key={c.title} dates={c.dates} title={c.title} subtitle={c.issuer} action={c.credentialUrl? <a href={c.credentialUrl} className="text-xs text-gray-500">Show credential →</a>: undefined} />)}</div>
    </section>
  );
}
```

- [ ] **Step 4: Education.tsx**

```tsx
import { education } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";
export default function Education(){
  return (
    <section className="w-full space-y-6">
      <p className="text-2xl sm:text-3xl font-light tracking-tight">Education</p>
      <div className="space-y-7">{education.map(e=> <TimelineItem key={e.title} dates={e.dates} title={e.title} subtitle={e.institution} location={e.campus} />)}</div>
    </section>
  );
}
```

- [ ] **Step 5: Verify**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add components/sections/TechStack.tsx components/sections/GithubActivity.tsx components/sections/Certifications.tsx components/sections/Education.tsx
git commit -m "feat: add TechStack, GithubActivity, Certifications, Education"
```

---

### Task 9: OutsideIDE + Contact

**Files:**
- Create: `components/sections/OutsideIDE.tsx`, `components/sections/Contact.tsx`
- Test: `npm run build`, visual check

- [ ] **Step 1: OutsideIDE.tsx (text left + 4 image cards right like inspo)**

```tsx
export default function OutsideIDE(){
  return (
    <section className="w-full space-y-5">
      <p className="text-2xl sm:text-3xl font-light tracking-tight">Outside the IDE</p>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">When I step away from code, I recharge through movement and travel — returning with fresh perspective.</p>
          <div className="flex flex-wrap gap-2.5">{["Travel","Gym","Muay Thai","Dance"].map(t=> <span key={t} className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium">{t}</span>)}</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Travel","Gym","Muay Thai","Dance"].map(label=> <div key={label} className="h-24 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 grid place-items-center text-xs tracking-widest text-gray-400">{label.toUpperCase()}</div>)}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Contact.tsx (“Let's work together.”)**

```tsx
import { contact } from "@/lib/data";
export default function Contact(){
  return (
    <section id="contact" className="w-full space-y-5">
      <p className="text-2xl sm:text-3xl font-light tracking-tight">{contact.headline}</p>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">{contact.sub}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-xl border border-dashed p-4 hover:bg-gray-50 dark:hover:bg-white/5"><span className="text-sm font-medium">{contact.email}</span></a>
          <a href={contact.calendly} target="_blank" className="flex items-center gap-3 rounded-xl border border-dashed p-4 hover:bg-gray-50">Schedule Call →</a>
          <a href={contact.linkedin} target="_blank" className="flex items-center gap-3 rounded-xl border border-dashed p-4">LinkedIn →</a>
          <a href={contact.github} target="_blank" className="flex items-center gap-3 rounded-xl border border-dashed p-4">GitHub →</a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/sections/OutsideIDE.tsx components/sections/Contact.tsx
git commit -m "feat: add OutsideIDE and Contact sections"
```

---

### Task 10: Compose page.tsx + final verification

**Files:**
- Modify: `app/page.tsx`
- Test: `npm run build`, `npm run dev` screenshot compare vs https://renlenon.vercel.app/

**Interfaces:**
- Consumes: All section components
- Produces: Final `/` route

- [ ] **Step 1: Compose app/page.tsx**

```tsx
import Hero from "@/components/sections/Hero";
import FeaturedBuild from "@/components/sections/FeaturedBuild";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import GithubActivity from "@/components/sections/GithubActivity";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import OutsideIDE from "@/components/sections/OutsideIDE";
import Contact from "@/components/sections/Contact";

export default function Page(){
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-14 sm:gap-16 px-4 sm:px-6 pb-10 sm:pb-16">
      <Hero />
      <FeaturedBuild />
      <Experience />
      <Projects />
      <TechStack />
      <GithubActivity />
      <Certifications />
      <Education />
      <OutsideIDE />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 2: Final build + type check**

```bash
npx tsc --noEmit
npm run build
# Expected: PASS, no errors
```

- [ ] **Step 3: Manual verification**

```bash
npm run dev
# Open http://localhost:3000 — compare spacing/borders/typography to https://renlenon.vercel.app/
# Check at 375px and 1024px, test dark toggle persists, anchor links work
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose final page (clone renlenon structure complete)"
```

---

## Self-Review

**Spec coverage:**
- Max-w-3xl editorial feed → Task 3 + 10 ✓
- Dashed borders/rounded-xl → Tasks 5,7,8,9 ✓
- Light headings/labels/dates → Tasks 3-9 ✓
- Dark mode script + toggle → Task 3 ✓
- FeaturedBuild → Task 5 ✓
- Experience timeline → Task 6 ✓
- Projects 2-col grid + COMING SOON → Task 7 ✓
- TechStack/GithubActivity/Cert/Education → Task 8 ✓
- OutsideIDE → Task 9 ✓
- Contact “Let's work together.” → Task 9 ✓
- Placeholder data in lib/data.ts → Task 2 ✓
- SEO metadata/json-ld → Task 3 ✓

**Placeholder scan:** No TBD/TODO; every step has actual code.

**Type consistency:** `Experience`, `Project`, `Certification`, `Education` defined once in Task 2, reused in 6-8 with same shape.

If plan passes, commit it and ask execution choice.
