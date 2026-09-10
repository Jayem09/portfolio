export default function Hero() {
  return (
    <section className="w-full pt-8 sm:pt-12">
      <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 sm:items-center">
        <div className="flex-1 space-y-4">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">John Mark Dinglasan</h1>
            <p className="text-xl sm:text-2xl font-light tracking-tight text-gray-500 dark:text-gray-400">— Full-Stack Web Developer</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">React</span>
              <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">Flask</span>
              <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">PostgreSQL</span>
              <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-ink px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">MySQL</span>
            </div>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              I&apos;m a full-stack web developer building websites and backend systems with React, Flask, and PostgreSQL/MySQL — with SEO and PayMongo experience from real client work. I&apos;m currently shipping <a href="https://www.tagpuan.online" target="_blank" className="underline decoration-dashed underline-offset-4 hover:text-gray-900 dark:hover:text-white">Tagpuan</a> (anonymous WebRTC chat), an e-commerce platform for SMS Tyre Depot (Docker/AWS), and a Python automation tool that saves hours of manual Instagram work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="bg-ink text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-[1.03] transition-transform">
              Let&apos;s Talk
            </a>
            <a href="#projects" className="border border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1 py-2.5 transition-colors">
              View Resume →
            </a>
          </div>
        </div>
        <div className="shrink-0 flex justify-start sm:justify-end">
          <div className="relative group h-32 w-32 sm:h-40 sm:w-40">
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-gray-700 scale-[1.08] opacity-60 group-hover:rotate-12 transition-transform duration-700" aria-hidden />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] scale-[1.05]" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image.png" alt="Toji Fushiguro" className="absolute inset-0 h-full w-full rounded-full object-cover object-top border-2 border-white dark:border-ink shadow-lg animate-float group-hover:opacity-0 group-hover:scale-110 group-hover:blur-[1px] transition-all duration-500" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me.jpeg" alt="John Mark Dinglasan" className="absolute inset-0 h-full w-full rounded-full object-cover border-2 border-white dark:border-ink shadow-lg opacity-0 scale-90 [clip-path:circle(0%_at_50%_50%)] group-hover:opacity-100 group-hover:scale-100 group-hover:[clip-path:circle(150%_at_50%_50%)] transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]" />
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden>
              <div className="absolute top-1/2 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_white,0_0_20px_#3b82f6] hidden group-hover:block" style={{ animation: 'jjk-slash 0.55s cubic-bezier(0.7,0,0.3,1) forwards' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-1.5 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full shadow-lg border border-white/50 hidden group-hover:block" style={{ animation: 'jjk-tool-spin 0.55s ease-out forwards' }} />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-blue-400/20 opacity-0 pointer-events-none hidden group-hover:block" style={{ animation: 'jjk-flash 0.6s ease-out 0.15s' }} aria-hidden />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ink text-white dark:bg-white dark:text-black text-[9px] tracking-[0.2em] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">INVERTED SPEAR · DOMAIN EXPANSION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
