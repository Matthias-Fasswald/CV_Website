
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      <NavBar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <ScrollToTop />
    </main>
  );
}
