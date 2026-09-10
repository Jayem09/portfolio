import { Project } from "@/lib/data";
export default function ProjectCard({ project }: { project: Project }) {
  const hasImg = !!project.image;
  const href = project.detailsUrl || project.liveUrl || "#";
  return (
    <div className="flex h-full flex-col gap-2 bg-white dark:bg-ink border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded-xl">
      <a href={href} className="block overflow-hidden rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
        {hasImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/images/projects/${project.image}`} alt={project.title} className="h-40 w-full object-cover" />
        ) : (
          <div className="grid h-40 w-full place-items-center bg-white dark:bg-ink">
            <span className="text-sm tracking-[0.35em] text-gray-400 dark:text-gray-500">COMING SOON</span>
          </div>
        )}
      </a>
      <div className="px-2 pb-2 space-y-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <span key={t} className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5 text-gray-700 dark:text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2 text-sm">
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-gray-900 dark:text-white font-medium hover:underline">
              Visit Site →
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
