import SectionTitle from "./SectionTitle";
import MagicBentoCard from "./MagicBento";

const skillCategories = [
  {
    title: "Programming & Data Analysis",
    description:
      "Languages and libraries I use for data cleaning, exploratory analysis, automation, and structured problem-solving.",
    icon: "⌘",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy", "Excel"],
    className: "lg:col-span-2",
  },
  {
    title: "Machine Learning",
    description:
      "Predictive modeling workflows focused on classification, feature engineering, model evaluation, and business interpretation.",
    icon: "✦",
    skills: [
      "scikit-learn",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Feature Engineering",
      "Model Evaluation",
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Business Intelligence",
    description:
      "Dashboarding and reporting tools used to turn business data into clear, actionable insights for stakeholders.",
    icon: "◈",
    skills: [
      "Power BI",
      "Tableau",
      "KPI Dashboards",
      "Data Visualization",
      "Cohort Analysis",
      "Funnel Analysis",
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Data Engineering & Tools",
    description:
      "Tools and methods used for data pipelines, API integration, version control, cloud basics, and analytics workflows.",
    icon: "◇",
    skills: [
      "ETL Pipelines",
      "REST APIs",
      "Git",
      "GitHub",
      "AWS Basics",
      "PostgreSQL",
    ],
    className: "lg:col-span-2",
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

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <MagicBentoCard
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills}
              icon={category.icon}
              className={category.className}
            />
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
                className="group flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4 text-center text-sm font-semibold text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <p className="text-3xl font-bold text-white">Python + SQL</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Used for data cleaning, EDA, feature engineering, automation, and
              querying structured datasets.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <p className="text-3xl font-bold text-white">Power BI</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Built KPI dashboards for engagement, revenue, operations, and
              business performance tracking.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
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