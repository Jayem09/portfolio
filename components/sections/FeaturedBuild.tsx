import { featuredBuild } from "@/lib/data";
export default function FeaturedBuild() {
  const hasImg = !!featuredBuild.image;
  return (
    <section className="w-full overflow-hidden rounded-xl border border-dashed border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-ink">
      <div className="grid gap-0 sm:grid-cols-[300px_1fr] sm:items-stretch">
        <div className="bg-gray-100 dark:bg-black/30 overflow-hidden flex items-center justify-center">
          {hasImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={featuredBuild.image} alt={featuredBuild.title} className="h-40 w-full object-cover sm:h-full" />
          ) : (
            <div className="grid h-40 w-full place-items-center bg-white dark:bg-ink border-r border-dashed border-gray-200 dark:border-gray-700 sm:h-full">
              <span className="text-sm tracking-[0.35em] text-gray-400 dark:text-gray-500">COMING SOON</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">{featuredBuild.label}</p>
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white">{featuredBuild.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{featuredBuild.description}</p>
          <a href={featuredBuild.href} className="group inline-flex items-center gap-1 bg-ink text-white dark:bg-white dark:text-black text-sm font-medium px-4 py-2 rounded-lg w-fit hover:scale-[1.02] transition-transform">
            {featuredBuild.ctaLabel} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
