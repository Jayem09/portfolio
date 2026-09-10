import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — John Mark Dinglasan",
  description: "All projects by John Mark Dinglasan — Tagpuan, LeadBoost AI, Coduxa, Eunoia, SMS Tyre Depot and more.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 sm:gap-10 px-4 sm:px-6 pb-10 sm:pb-16 pt-8 sm:pt-12">
      <div className="space-y-3">
        <a href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
          ← Back to home
        </a>
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">Projects</h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">{projects.length} projects</span>
        </div>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">All builds — live previews on Vercel and custom domains. Click any card to visit the live site or GitHub.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <a href="/#projects" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white border border-dashed rounded-full px-4 py-2">← Back to home</a>
      </div>
    </main>
  );
}
