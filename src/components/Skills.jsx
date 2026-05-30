import SectionTitle from "./SectionTitle";

const skillCategories = [
  {
    title: "Programming & Data Analysis",
    description: "Languages and libraries I use for analysis, automation, and modeling.",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy", "Excel"],
  },
  {
    title: "Machine Learning",
    description: "Modeling techniques and ML workflows used in predictive analytics projects.",
    skills: [
      "scikit-learn",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Decision Trees",
      "Feature Engineering",
    ],
  },
  {
    title: "Business Intelligence",
    description: "Tools and methods for dashboards, KPI tracking, and stakeholder reporting.",
    skills: [
      "Power BI",
      "Tableau",
      "KPI Dashboards",
      "Data Visualization",
      "Cohort Analysis",
      "Funnel Analysis",
    ],
  },
  {
    title: "Data Engineering & Tools",
    description: "Tools used for data pipelines, integrations, version control, and cloud basics.",
    skills: [
      "ETL Pipelines",
      "REST APIs",
      "Git",
      "GitHub",
      "AWS Basics",
      "Spark/Hadoop Familiar",
    ],
  },
];

const tools = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Excel",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "XGBoost",
  "Git",
  "GitHub",
  "REST APIs",
  "AWS",
  "VS Code",
];

function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
  label="Skills"
  title="Technical toolkit for data science, analytics, and business intelligence."
  description="I work across the data workflow, from cleaning and transforming data to building dashboards, automating reporting, and developing machine learning models."
/>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/40 hover:bg-white/[0.06] lg:p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Tech Stack
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Tools I use to build data solutions
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              My stack is focused on practical business analytics, machine
              learning, dashboarding, data automation, and project deployment.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {tools.map((tool) => (
              <div
                key={tool}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4 text-center text-sm font-semibold text-zinc-300 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-3xl font-bold text-white">Python + SQL</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Used for data cleaning, EDA, feature engineering, automation, and
              querying structured datasets.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-3xl font-bold text-white">Power BI</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Built KPI dashboards for engagement, revenue, operations, and
              business performance tracking.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-3xl font-bold text-white">ML Models</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Applied classification models such as Logistic Regression, Random
              Forest, and XGBoost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;