import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />

      <section id="projects" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-500">Projects section coming next...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-500">Experience section coming later...</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-zinc-500">Skills section coming later...</p>
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