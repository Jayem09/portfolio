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
            {["Travel", "Gym", "Muay Thai", "Dance"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Travel", "Gym", "Muay Thai", "Dance"].map((label) => (
            <div key={label} className="h-24 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 dark:bg-ink bg-white grid place-items-center text-xs tracking-widest text-gray-400 dark:text-gray-500">
              {label.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
