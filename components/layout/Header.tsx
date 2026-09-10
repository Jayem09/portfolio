"use client";
import { useEffect, useState } from "react";
export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  function toggle() {
    const n = !dark;
    setDark(n);
    document.documentElement.classList.toggle("dark", n);
    localStorage.setItem("theme", n ? "dark" : "light");
  }
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-ink/80 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900 dark:text-white text-sm sm:text-base">John Mark Dinglasan</a>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-500 dark:text-gray-400">
          <a href="#experience" className="hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="text-sm border border-dashed border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            {dark ? "Light" : "Dark"}
          </button>
          <a href="/resume.pdf" target="_blank" className="hidden sm:inline-flex bg-ink text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:scale-[1.02] transition-transform">View Resume</a>
        </div>
      </div>
    </header>
  );
}
