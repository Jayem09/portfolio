import { Project } from "@/lib/data";
export default function ProjectCard({ project }: { project: Project }) {
  const hasImg = !!project.image;
  const isExternal = hasImg && (project.image!.startsWith("http") || project.image!.startsWith("https://"));
  const imgSrc = isExternal ? project.image! : hasImg ? `/images/projects/${project.image}` : "";
  const href = project.detailsUrl || project.liveUrl || project.githubUrl || "#";
  const showLive = !!project.liveUrl;
  const showGithub = !!project.githubUrl;

  return (
    <div className="flex h-full flex-col gap-2 bg-white dark:bg-ink border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded-xl hover:shadow-sm hover:border-gray-400 dark:hover:border-gray-600 transition-all">
      <a href={href} target={showLive ? "_blank" : undefined} rel={showLive ? "noopener noreferrer" : undefined} className="block overflow-hidden rounded-lg border border-dashed border-gray-200 dark:border-gray-700 group">
        {hasImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgSrc} alt={project.title} className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="grid h-40 w-full place-items-center bg-white dark:bg-ink">
            <span className="text-sm tracking-[0.35em] text-gray-400 dark:text-gray-500">COMING SOON</span>
          </div>
        )}
      </a>
      <div className="px-2 pb-2 space-y-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <span key={t} className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5 text-gray-700 dark:text-gray-300 bg-white dark:bg-ink">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2 text-sm">
          {showLive && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-ink text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-xs font-medium hover:scale-105 transition-transform">
              Live Preview →
            </a>
          )}
          {showGithub && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:hover:text-white border border-dashed rounded-full px-3 py-1 text-xs">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
