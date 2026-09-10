export default function Hero() {
  return (
    <section className="w-full pt-8 sm:pt-12 space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">Your Name</h1>
        <p className="text-xl sm:text-2xl font-light tracking-tight text-gray-500 dark:text-gray-400">— Software Engineer</p>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
          I build fast, accessible web apps with Next.js, React, and Laravel. Focused on clean code, SEO, and shipping.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="#contact" className="bg-ink text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-[1.03] transition-transform">
          Hire Me
        </a>
        <a href="#projects" className="border border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          View Projects
        </a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1 py-2.5 transition-colors">
          View Resume →
        </a>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500">Manila, PH · Available for remote</p>
    </section>
  );
}
