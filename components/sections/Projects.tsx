"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const initialCount = 2;
  const visible = expanded ? projects : projects.slice(0, initialCount);
  const remaining = projects.length - initialCount;

  return (
    <section id="projects" className="w-full space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Projects</p>
        <span className="text-xs text-gray-400 dark:text-gray-500">{projects.length} projects</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {projects.length > initialCount && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group inline-flex items-center gap-1.5 bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:scale-[1.03] transition-transform dark:bg-white dark:text-black"
          >
            {expanded ? (
              <>Show Less <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span></>
            ) : (
              <>View More ({remaining} more) <span className="group-hover:translate-x-1 transition-transform inline-block">→</span></>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
