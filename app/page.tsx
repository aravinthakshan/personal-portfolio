import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SpiderWebAnimation from "./components/SpiderWebAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <Hero />
      <SpiderWebAnimation />
      <Experience id="experience" />
      <Research id="research" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
