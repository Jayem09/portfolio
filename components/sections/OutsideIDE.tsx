export default function OutsideIDE() {
  return (
    <section className="w-full space-y-5">
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Outside the IDE</p>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            When I step away from code, I recharge through movement and travel — returning with fresh perspective.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Travel", "Gym"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/travel.jpg" alt="Travel" className="h-36 w-full object-cover sm:h-40" />
            <div className="absolute inset-0 pointer-events-none ring-0 border-0" />
            <span className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[10px] tracking-widest px-2 py-0.5 rounded-full backdrop-blur">TRAVEL</span>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gym.JPG" alt="Gym" className="h-36 w-full object-cover sm:h-40 object-center" />
            <span className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[10px] tracking-widest px-2 py-0.5 rounded-full backdrop-blur">GYM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
