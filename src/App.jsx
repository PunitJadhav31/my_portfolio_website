import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider />

        <Projects />
        <SectionDivider />

        <Experience />
        <SectionDivider />

        <Skills />
        <SectionDivider />

        <Contact />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;