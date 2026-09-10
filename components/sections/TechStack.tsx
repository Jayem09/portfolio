import { techStack } from "@/lib/data";
export default function TechStack() {
  return (
    <section className="w-full space-y-4">
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((t) => (
          <span key={t} className="border border-dashed border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-ink">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
