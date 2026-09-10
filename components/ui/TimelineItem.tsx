export default function TimelineItem({ dates, title, subtitle, location, description, tags, action, showLine = true }: { dates: string; title: string; subtitle: string; location?: string; description?: string; tags?: string[]; action?: React.ReactNode; showLine?: boolean }) {
  if (!showLine) {
    return (
      <div className="sm:grid sm:grid-cols-[160px_1fr] sm:gap-6">
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap mb-1 sm:mb-0 sm:pt-1">{dates}</p>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-base">{title}</h3>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{subtitle}</p>
          {location && <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>}
          {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{description}</p>}
          {tags && <div className="flex flex-wrap gap-1.5 mt-2">{tags.map((t) => <span key={t} className="text-[11px] border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5 text-gray-700 dark:text-gray-300">{t}</span>)}</div>}
          {action && <div className="mt-2">{action}</div>}
        </div>
      </div>
    );
  }
  return (
    <div className="relative sm:grid sm:grid-cols-[160px_24px_1fr] sm:gap-4 group">
      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap mb-1 sm:mb-0 sm:pt-1 sm:text-right">{dates}</p>
      <div className="hidden sm:flex relative flex flex-col items-center">
        <span className="mt-1.5 w-3 h-3 rounded-full bg-ink dark:bg-white ring-4 ring-white dark:ring-gray-900 shrink-0 z-10" aria-hidden />
        <span className="w-px flex-1 bg-gray-200 dark:bg-gray-700" aria-hidden />
      </div>
      <div className="sm:hidden flex items-center gap-2 mb-1">
        <span className="h-2 w-2 rounded-full bg-ink dark:bg-white" aria-hidden />
        <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" aria-hidden />
      </div>
      <div className="pb-1">
        <h3 className="font-semibold text-gray-900 dark:text-white text-base">{title}</h3>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{subtitle}</p>
        {location && <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>}
        {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{description}</p>}
        {tags && <div className="flex flex-wrap gap-1.5 mt-2">{tags.map((t) => <span key={t} className="text-[11px] border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5 text-gray-700 dark:text-gray-300">{t}</span>)}</div>}
        {action && <div className="mt-2">{action}</div>}
      </div>
    </div>
  );
}
