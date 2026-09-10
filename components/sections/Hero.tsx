export default function Hero() {
  return (
    <section className="w-full pt-8 sm:pt-12">
      <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 sm:items-center">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">John Mark Dinglasan</h1>
            <p className="text-xl sm:text-2xl font-light tracking-tight text-gray-500 dark:text-gray-400">— Software Engineer</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              BSIT @ University of Batangas (Lipa) — I build e-commerce platforms and automation tools with React.js, Python, Flask, Node.js, and Tauri. Shipped production e-commerce systems, PayMongo integrations, and a Flask-based Instagram automation tool used by freelance clients.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="bg-ink text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-[1.03] transition-transform">
              Hire Me
            </a>
            <a href="#projects" className="border border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1 py-2.5 transition-colors">
              View Resume →
            </a>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">Lipa, Philippines · +63 961 167 8278 · johndinglasan12@gmail.com · Available for remote</p>
        </div>
        <div className="shrink-0 flex justify-start sm:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-gray-700 scale-[1.08] opacity-60 group-hover:rotate-6 transition-transform duration-700" aria-hidden />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 blur-[1px] scale-[1.02]" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.jpeg"
              alt="John Mark Dinglasan"
              className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-2 border-white dark:border-ink shadow-lg animate-float group-hover:scale-[1.03] transition-transform duration-500"
            />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-ink shadow" aria-hidden title="Available for work" />
          </div>
        </div>
      </div>
    </section>
  );
}
