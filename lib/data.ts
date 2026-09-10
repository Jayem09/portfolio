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
