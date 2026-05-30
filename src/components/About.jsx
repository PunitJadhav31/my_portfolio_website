import SectionTitle from "./SectionTitle";

function About() {
  const highlights = [
    {
      title: "Business Analytics & AI",
      description:
        "Currently pursuing my MS in Business Analytics & Artificial Intelligence at The University of Texas at Dallas.",
    },
    {
      title: "Data Analytics Experience",
      description:
        "Worked on dashboards, ETL pipelines, KPI tracking, reporting automation, and business insights across real-world datasets.",
    },
    {
      title: "Machine Learning Focus",
      description:
        "Built predictive models using Python, scikit-learn, XGBoost, Random Forest, and feature engineering techniques.",
    },
  ];

  const education = [
    {
      degree: "MS in Business Analytics & Artificial Intelligence",
      school: "The University of Texas at Dallas",
      duration: "Expected May 2027",
    },
    {
      degree: "BE in Computer Science",
      school: "Savitribai Phule Pune University",
      duration: "June 2019 – July 2023",
    },
  ];

  return (
    <section id="about" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
  label="About Me"
  title="I connect data, business, and machine learning to solve real problems."
  description="I am a Data Science and Business Analytics graduate student at UT Dallas with hands-on experience in data analysis, BI dashboards, ETL pipelines, reporting automation, and predictive modeling. I enjoy transforming messy datasets into clear insights that help teams make better decisions."
/>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl font-bold text-emerald-300">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              My Focus
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              Data Science with business impact
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              My goal is to build analytics solutions that are not only
              technically strong but also useful for business teams. I focus on
              understanding the problem first, then applying the right tools
              such as Python, SQL, Power BI, machine learning, and automation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-2xl font-bold text-white">40%</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Improved data availability
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-2xl font-bold text-white">30%</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Better decision visibility
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Education
            </p>

            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-400">
                        {item.school}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-emerald-300">
                      {item.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
              <p className="text-sm leading-7 text-zinc-300">
                Currently focused on machine learning, statistics, business
                analytics, data visualization, and practical AI applications for
                business decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;