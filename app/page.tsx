import Hero from "@/components/sections/Hero";
import FeaturedBuild from "@/components/sections/FeaturedBuild";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import GithubActivity from "@/components/sections/GithubActivity";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import OutsideIDE from "@/components/sections/OutsideIDE";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-14 sm:gap-16 px-4 sm:px-6 pb-10 sm:pb-16">
      <Hero />
      <FeaturedBuild />
      <Experience />
      <Projects />
      <TechStack />
      <GithubActivity />
      <Certifications />
      <Education />
      <OutsideIDE />
      <Contact />
    </main>
  );
}
