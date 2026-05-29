import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />

      <section id="contact" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-500">Contact section coming next...</p>
        </div>
      </section>
    </div>
  );
}

export default App;