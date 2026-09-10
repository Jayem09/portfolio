import { certifications } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";
export default function Certifications() {
  if (!certifications.length) return null;
  return (
    <section className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Certifications</p>
        <a href="#" className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          View All <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </a>
      </div>
      <div className="space-y-7">
        {certifications.map((c, idx) => (
          <TimelineItem
            key={c.title}
            dates={c.dates}
            title={c.title}
            subtitle={c.issuer}
            isLast={idx === certifications.length - 1}
            action={c.credentialUrl ? <a href={c.credentialUrl} className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1">Show credential →</a> : undefined}
          />
        ))}
      </div>
    </section>
  );
}
