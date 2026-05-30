import BlurText from "./BlurText";
import GlassSurface from "./GlassSurface";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-28"
    >
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
  Open to Summer 2026 Data Science & Analytics Internships
</div>

<h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
  <span className="block">
    <BlurText text="Hi, I’m" delay={130} animateBy="words" />
  </span>

  <span className="group mt-2 inline-block transition duration-300 hover:scale-[1.03]">
    <BlurText
      text="Punit Jadhav"
      delay={160}
      animateBy="words"
      wordClassName="bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent transition duration-300 group-hover:from-blue-400 group-hover:to-emerald-300 group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.45)]"
    />
  </span>
</h1>

<h2 className="mt-5 max-w-3xl text-2xl font-medium text-zinc-300 sm:text-3xl">
  <BlurText
    text="Data Scientist | Business Analytics & AI Graduate Student"
    delay={70}
    animateBy="words"
  />
</h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build data-driven solutions using Python, SQL, Power BI, and
            machine learning to turn complex datasets into actionable business
            insights. My work focuses on predictive modeling, business
            intelligence dashboards, data pipelines, and analytics automation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/punit-jadhav/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/PunitJadhav31"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-white">1.5+</p>
              <p className="mt-1 text-sm text-zinc-400">Years Experience</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="mt-1 text-sm text-zinc-400">Dashboards Built</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-white">500K+</p>
              <p className="mt-1 text-sm text-zinc-400">Records Processed</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-white">0.88</p>
              <p className="mt-1 text-sm text-zinc-400">ROC-AUC Model</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <GlassSurface className="p-6">
            <div className="flex h-80 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
              <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-4xl font-bold text-emerald-300">
                  PJ
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  Data Science Portfolio
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-400">
                  Python • SQL • Power BI • Machine Learning • Analytics
                  Automation
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-zinc-400">Location</p>
                <p className="mt-1 font-medium text-white">Dallas, TX</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-zinc-400">Focus</p>
                <p className="mt-1 font-medium text-white">Data Science</p>
              </div>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}

export default Hero;