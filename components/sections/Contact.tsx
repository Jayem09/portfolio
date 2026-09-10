import { contact } from "@/lib/data";
export default function Contact() {
  return (
    <section id="contact" className="w-full space-y-5">
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">{contact.headline}</p>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">{contact.sub}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors bg-white dark:bg-ink">
            <span className="text-sm font-medium text-gray-900 dark:text-white">{contact.email}</span>
          </a>
          <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors bg-white dark:bg-ink text-sm font-medium text-gray-900 dark:text-white">
            Let&apos;s Talk — Schedule Call <span aria-hidden>→</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors bg-white dark:bg-ink text-sm font-medium text-gray-700 dark:text-gray-300">
            LinkedIn <span aria-hidden>→</span>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors bg-white dark:bg-ink text-sm font-medium text-gray-700 dark:text-gray-300">
            GitHub <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
