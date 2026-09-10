import { education } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";
export default function Education() {
  return (
    <section className="w-full space-y-6">
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Education</p>
      <div className="space-y-7 sm:space-y-8">
        {education.map((e) => (
          <TimelineItem key={e.title} dates={e.dates} title={e.title} subtitle={e.institution} location={e.campus} />
        ))}
      </div>
    </section>
  );
}
