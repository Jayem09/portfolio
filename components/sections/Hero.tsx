export default function Hero() {
  return (
    <section className="w-full pt-8 sm:pt-12">
      <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 sm:items-center">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">John Mark Dinglasan</h1>
            <p className="text-xl sm:text-2xl font-light tracking-tight text-gray-500 dark:text-gray-400">— Software Engineer</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Final-year BSIT at University of Batangas — Lipa. I help students turn their thesis ideas into real, working sites, and I ship my own stuff too — like an e-commerce platform that handles real PayMongo orders and a small Python tool that automates Instagram work my client used to do by hand.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="bg-ink text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-[1.03] transition-transform">
              Hire Me
            </a>
            <a href="#projects" className="border border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              View Projects
            </a>
            <a href="https://calendly.com/johndinglasan12/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1 py-2.5 transition-colors">
              Let&apos;s Talk →
            </a>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">Lipa, Philippines · +63 961 167 8278 · johndinglasan12@gmail.com · Available for remote</p>
        </div>
        <div className="shrink-0 flex justify-start sm:justify-end">
          <div className="relative group h-32 w-32 sm:h-40 sm:w-40">
            {/* dashed outer ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-gray-700 scale-[1.08] opacity-60 group-hover:rotate-12 transition-transform duration-700" aria-hidden />
            {/* glow aura - blue for JJK */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] scale-[1.05]" aria-hidden />
            {/* Toji - default */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Toji Fushiguro"
              className="absolute inset-0 h-full w-full rounded-full object-cover object-top border-2 border-white dark:border-ink shadow-lg animate-float group-hover:opacity-0 group-hover:scale-110 group-hover:blur-[1px] transition-all duration-500"
            />
            {/* You - on hover with JJK ink reveal */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.jpeg"
              alt="John Mark Dinglasan"
              className="absolute inset-0 h-full w-full rounded-full object-cover border-2 border-white dark:border-ink shadow-lg opacity-0 scale-90 [clip-path:circle(0%_at_50%_50%)] group-hover:opacity-100 group-hover:scale-100 group-hover:[clip-path:circle(150%_at_50%_50%)] transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]"
            />
            {/* Cursed Tool slash - Inverted Spear wipe */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden>
              <div className="absolute top-1/2 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_white,0_0_20px_#3b82f6] hidden group-hover:block" style={{ animation: 'jjk-slash 0.55s cubic-bezier(0.7,0,0.3,1) forwards' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-1.5 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full shadow-lg border border-white/50 hidden group-hover:block" style={{ animation: 'jjk-tool-spin 0.55s ease-out forwards' }} />
            </div>
            {/* flash burst */}
            <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-blue-400/20 opacity-0 pointer-events-none hidden group-hover:block" style={{ animation: 'jjk-flash 0.6s ease-out 0.15s' }} aria-hidden />
            {/* domain text - alternates between Domain and Cursed Tool */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ink text-white dark:bg-white dark:text-black text-[9px] tracking-[0.2em] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
              INVERTED SPEAR · DOMAIN EXPANSION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
