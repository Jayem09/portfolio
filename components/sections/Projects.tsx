import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
export default function Projects() {
  return (
    <section id="projects" className="w-full space-y-5">
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {projects.length >= 3 && (
        <div className="flex justify-center pt-2">
          <a href="#" className="group inline-flex items-center gap-1.5 bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:scale-[1.03] transition-transform dark:bg-white dark:text-black">
            Explore More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      )}
    </section>
  );
}
