import { experiences } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";
export default function Experience() {
  return (
    <section id="experience" className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Experience</p>
        <a href="#" className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          View Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </a>
      </div>
      <div className="relative space-y-7 sm:space-y-8">
        {experiences.map((e, idx) => (
          <TimelineItem key={e.title + e.dates} dates={e.dates} title={e.title} subtitle={e.company} location={e.location} description={e.description} tags={e.tags} isLast={idx === experiences.length - 1} />
        ))}
      </div>
    </section>
  );
}
