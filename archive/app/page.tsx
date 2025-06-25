import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#091717] text-[#A1A16A]">
      <Hero />
      <Experience id="experience" />
{/*       <Research id="research" />
      <Projects id="projects" /> */}
      <Skills id="skills" />
      <Contact id="contact" />
    </main>
  );
}
