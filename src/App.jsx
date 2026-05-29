import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />

      <section id="skills" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-500">Skills section coming next...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-500">Contact section coming later...</p>
        </div>
      </section>
    </div>
  );
}

export default App;