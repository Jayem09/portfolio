export type Experience = { dates: string; title: string; company: string; location: string; description: string; tags?: string[] };
export type Project = { slug: string; title: string; description: string; image?: string; liveUrl?: string; githubUrl?: string; detailsUrl?: string; tags: string[] };
export type Certification = { dates: string; title: string; issuer: string; credentialUrl?: string };
export type Education = { dates: string; title: string; institution: string; campus: string };

export const featuredBuild = {
  label: "Featured Build",
  title: "Tagpuan — Random Chat Worldwide",
  description: "Free anonymous random video & text chat — where the world meets. No sign-up, instant matching, WebRTC-powered. Live at tagpuan.online with 100% free worldwide access, moderation, and PWA support.",
  image: "",
  href: "https://www.tagpuan.online",
  ctaLabel: "Visit Live Site",
  tags: ["React","Vite","WebRTC","Tailwind","Vercel","PWA"] as string[],
};

export const experiences: Experience[] = [
  {
    dates: "Feb 2026 — Mar 2026",
    title: "Software Engineer Intern",
    company: "SMS Tyre Depot",
    location: "Lipa, Philippines",
    description: "Contributed to an e-commerce platform with React.js and MySQL. Supported cloud infra and deployment with Docker and AWS, assisted PayMongo gateway integration, and improved SEO / e-commerce SEO. Exposure to Tauri for desktop apps.",
    tags: ["React.js","MySQL","Docker","AWS","PayMongo","SEO","Tauri"],
  },
  {
    dates: "Sep 2025 — Present",
    title: "Freelance Developer",
    company: "Student Clients / Thesis Projects",
    location: "Remote — Freelance Academic & Web Development",
    description: "Design and develop websites and web systems for thesis/capstone projects. Create SRS, ERD, DFD, and Use Case Diagrams, assist with requirement analysis and feature planning, and support optimization, debugging, deployment, and final revisions.",
    tags: ["React.js","Node.js","MySQL","PostgreSQL","Documentation"],
  },
  {
    dates: "Aug 2024 — Feb 2025",
    title: "Full Stack Web Developer",
    company: "Edar CMT",
    location: "Philippines — E-Commerce Website",
    description: "Designed and built an end-to-end e-commerce platform: frontend UI, backend services, and DB architecture. Implemented product catalog, cart, checkout, auth, and order management; integrated payments, auth providers, and notifications; authored API contracts and system architecture docs; deployed and maintained in production.",
    tags: ["React.js","Node.js","PostgreSQL","MySQL","Docker","AWS"],
  },
  {
    dates: "Nov 2023 — May 2024",
    title: "IT Consultant",
    company: "Edar CMT",
    location: "Calamba, Philippines",
    description: "Managed business website and internal IT systems. Built e-commerce pages, booking forms, and inventory tools; handled troubleshooting, system setup, data security/backups, and staff support.",
    tags: ["WordPress","MySQL","IT Support","Inventory Systems"],
  },
];

export const projects: Project[] = [
  {
    slug: "tagpuan",
    title: "Tagpuan",
    description: "Random video & text chat worldwide — free, anonymous, no sign-up. Instant WebRTC matching, moderation, and PWA. Where the world meets.",
    image: "",
    liveUrl: "https://www.tagpuan.online",
    githubUrl: "https://github.com/Jayem09/tagpuan",
    tags: ["React","Vite","WebRTC","Tailwind","Vercel","PWA"],
  },
  {
    slug: "leadboost-ai",
    title: "LeadBoost AI",
    description: "Never lose a lead again — capture, qualify, and convert leads faster with intelligent automation.",
    image: "",
    liveUrl: "https://lead-boost-ai.vercel.app",
    githubUrl: "https://github.com/Jayem09/LeadBoost-AI",
    tags: ["TypeScript","Next.js","AI","Tailwind","Vercel"],
  },
  {
    slug: "coduxa",
    title: "Coduxa",
    description: "Online Programming Certification Platform — take coding exams, earn certificates, and showcase expertise to employers.",
    image: "https://coduxa.vercel.app/og-image.jpg",
    liveUrl: "https://coduxa.vercel.app",
    githubUrl: "https://github.com/Jayem09/coduxa",
    tags: ["TypeScript","Next.js","Tailwind","Certification"],
  },
  {
    slug: "eunoia",
    title: "Eunoia",
    description: "Thoughtful web experience — curated for focus and clarity. Built with TypeScript on Vercel (live preview behind checkpoint).",
    image: "",
    liveUrl: "https://eunoia-proj.vercel.app",
    githubUrl: "https://github.com/Jayem09/eunoia",
    tags: ["TypeScript","Next.js","Vercel"],
  },
  {
    slug: "smstyredepot",
    title: "SMS Tyre Depot",
    description: "E-commerce web platform for SMS Tyre Depot — React.js frontend, MySQL, Docker/AWS deployment, PayMongo integration, and SEO.",
    image: "",
    liveUrl: "https://smstyredepot.com",
    githubUrl: "https://github.com/Jayem09/SMStyreDepot",
    tags: ["React.js","MySQL","Docker","AWS","PayMongo","SEO"],
  },
  {
    slug: "instagram-scraper",
    title: "Instagram Business Email Scraper",
    description: "ADB + UIAutomator automation that extracts emails from Instagram business profiles via a real Android emulator. Flask UI + Windows/Mac launchers for non-technical clients.",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/Jayem09",
    tags: ["Python","ADB","UIAutomator","Flask","Automation"],
  },
  {
    slug: "edar-ecommerce",
    title: "Edar CMT E-Commerce Platform",
    description: "End-to-end e-commerce platform: catalog, cart, checkout, auth, orders, payments, and notifications. Full frontend, backend, and DB architecture with production deployment and monitoring.",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/Jayem09",
    tags: ["React.js","Node.js","MySQL","PostgreSQL","Docker","AWS"],
  },
];

export const certifications: Certification[] = [
  { dates: "2025", title: "The Web Developer Bootcamp 2025", issuer: "Udemy", credentialUrl: "" },
  { dates: "2024", title: "CISCO Networking Basics", issuer: "Cisco", credentialUrl: "" },
  { dates: "2024", title: "IT Specialist: HTML, CSS, JavaScript", issuer: "Certiport", credentialUrl: "" },
];

export const education: Education[] = [
  { dates: "Aug 2022 — Aug 2026", title: "Bachelor of Science in Information Technology", institution: "University of Batangas", campus: "Lipa Campus, Philippines" },
];

export const techStack = [
  "Java","JavaScript","Python","Node.js","React.js","Flask","Tauri",
  "Web Scraping","ADB","UIAutomator",
  "Docker","Kubernetes","Gradle","NPM","Git","GitLab Pipeline",
  "PostgreSQL","MySQL","MSSQL",
  "AWS","DigitalOcean",
  "PayMongo","SEO","E-commerce SEO",
  "CentOS","Windows","macOS",
];

export const contact = {
  headline: "Let's work together.",
  sub: "Open to full-time Software Engineer roles and freelance builds — React, Python, Flask, Node.js, and full-stack web systems. Based in Lipa, Philippines (remote-friendly). Let's ship something useful.",
  email: "johndinglasan12@gmail.com",
  phone: "+63 961 167 8278",
  calendly: "mailto:johndinglasan12@gmail.com",
  linkedin: "mailto:johndinglasan12@gmail.com",
  github: "https://github.com/Jayem09",
  resume: "/resume.pdf",
  githubUsername: "Jayem09",
};
