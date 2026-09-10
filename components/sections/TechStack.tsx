import { techStack } from "@/lib/data";
import {
  SiJavascript, SiPython, SiNodedotjs, SiReact, SiFlask, SiTauri, SiDocker, SiKubernetes, SiGradle, SiNpm, SiGit, SiGitlab, SiPostgresql, SiMysql, SiDigitalocean, SiCentos, SiApple, SiOpenjdk
} from "react-icons/si";
import { FaSpider, FaAndroid, FaRobot, FaCreditCard, FaSearch, FaShoppingCart, FaAws, FaWindows, FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  "Java": SiOpenjdk,
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  "Flask": SiFlask,
  "Tauri": SiTauri,
  "Web Scraping": FaSpider,
  "ADB": FaAndroid,
  "UIAutomator": FaRobot,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Gradle": SiGradle,
  "NPM": SiNpm,
  "Git": SiGit,
  "GitLab Pipeline": SiGitlab,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "MSSQL": FaDatabase,
  "AWS": FaAws,
  "DigitalOcean": SiDigitalocean,
  "PayMongo": FaCreditCard,
  "SEO": FaSearch,
  "E-commerce SEO": FaShoppingCart,
  "CentOS": SiCentos,
  "Windows": FaWindows,
  "macOS": SiApple,
};

function TechPill({ label }: { label: string }) {
  const Icon = iconMap[label];
  return (
    <span className="shrink-0 inline-flex items-center gap-1.5 border border-dashed border-gray-300 dark:border-gray-700 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-ink hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-400 dark:hover:border-gray-600 hover:scale-[1.07] hover:shadow-sm transition-all duration-200 cursor-default select-none">
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />}
      {label}
    </span>
  );
}

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const duplicated = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className={`flex w-max gap-2 py-1.5 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {duplicated.map((t, i) => (
          <TechPill key={`${t}-${i}`} label={t} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-ink to-transparent" />
    </div>
  );
}

export default function TechStack() {
  const mid = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, mid);
  const row2 = techStack.slice(mid);

  return (
    <section className="w-full space-y-4 group">
      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">Tech Stack</p>
        <span className="hidden sm:inline text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">hover to pause · hover pill to pop</span>
      </div>
      <div className="space-y-2.5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-3 sm:p-4 overflow-hidden">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500">24 technologies · Infinite marquee · Icons + hover scale · Pauses on hover</p>
    </section>
  );
}
