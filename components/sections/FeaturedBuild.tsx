import { featuredBuild } from "@/lib/data";

export default function FeaturedBuild() {
  const hasImg = !!featuredBuild.image;
  const isExternal = hasImg && featuredBuild.image.startsWith("http");
  return (
    <section className="w-full overflow-hidden rounded-xl border border-dashed border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-ink">
      <div className="grid gap-0 sm:grid-cols-[300px_1fr] sm:items-stretch">
        <a href={featuredBuild.href} target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-black/20 overflow-hidden flex items-center justify-center group p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-dashed border-gray-200 dark:border-gray-700">
          {hasImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={isExternal ? featuredBuild.image : featuredBuild.image} alt={featuredBuild.title} className="h-28 w-28 sm:h-32 sm:w-32 object-contain rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 grid place-items-center shadow-sm group-hover:scale-105 transition-transform">
              {/* Tagpuan logo - two circles like favicon */}
              <svg viewBox="0 0 32 32" className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden>
                <rect width="32" height="32" rx="9" fill="url(#g)" />
                <circle cx="11" cy="13" r="3" fill="white" />
                <circle cx="22" cy="13" r="3" fill="white" />
                <path d="M10 20c1.6-2 4.4-2 6 0M22 20c-1.6-2-4.4-2-6 0M16 20c.9-1.1 2.4-1.1 3.3 0" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f97316" />
                    <stop offset="1" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
        </a>
        <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">{featuredBuild.label}</p>
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white">{featuredBuild.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{featuredBuild.description}</p>
          <a href={featuredBuild.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 bg-ink text-white dark:bg-white dark:text-black text-sm font-medium px-4 py-2 rounded-lg w-fit hover:scale-[1.02] transition-transform">
            {featuredBuild.ctaLabel} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
