const projects = [
  {
    title: "Customer Churn Prediction & Retention Analytics",
    category: "Machine Learning",
    description:
      "Built a machine learning pipeline to predict customer churn and identify high-risk customer segments using behavioral and subscription data.",
    impact: [
      "Trained Logistic Regression, Random Forest, and XGBoost models on 100K+ customer records.",
      "Achieved ROC-AUC score of 0.88 for churn prediction.",
      "Identified churn drivers and projected retention improvement of 18%.",
    ],
    tools: ["Python", "SQL", "Pandas", "scikit-learn", "XGBoost", "Power BI"],
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    demo: "#",
  },
  {
    title: "Loan Default Prediction Using XGBoost",
    category: "Predictive Modeling",
    description:
      "Developed an XGBoost classification model to predict loan default risk and compared performance before and after feature selection.",
    impact: [
      "Improved test ROC-AUC from 0.7525 to 0.7628 after feature selection.",
      "Improved test F1 score from 0.3362 to 0.3465.",
      "Performed feature engineering, model evaluation, and business-focused interpretation.",
    ],
    tools: ["Python", "XGBoost", "scikit-learn", "Feature Selection", "EDA"],
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    demo: "#",
  },
  {
    title: "Customer Intelligence Dashboard",
    category: "Business Intelligence",
    description:
      "Designed an end-to-end customer analytics dashboard to track acquisition, retention, engagement, and behavior trends for business teams.",
    impact: [
      "Processed and analyzed 500K+ customer records.",
      "Performed funnel and cohort analysis to identify drop-off patterns.",
      "Improved targeting efficiency by 30% through actionable segmentation insights.",
    ],
    tools: ["Python", "SQL", "Power BI", "ETL", "Cohort Analysis"],
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    demo: "#",
  },
  {
    title: "KPI Reporting & Analytics Automation",
    category: "Analytics Automation",
    description:
      "Built automated reporting workflows and Power BI dashboards to improve visibility into engagement, revenue, and operational KPIs.",
    impact: [
      "Created 10+ Power BI dashboards for business stakeholders.",
      "Improved KPI visibility and decision-making efficiency by 30%.",
      "Reduced manual reporting work through automated Excel and SQL-based workflows.",
    ],
    tools: ["Power BI", "SQL", "Excel", "Python", "Reporting Automation"],
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Featured Projects
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Practical data projects built around business impact.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              These projects highlight my work across machine learning,
              business intelligence, predictive modeling, ETL pipelines, and
              analytics automation.
            </p>
          </div>

          <a
            href="https://github.com/PunitJadhav31"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
          >
            View GitHub
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-emerald-300">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-lg font-bold text-zinc-300 transition group-hover:border-emerald-400/40 group-hover:text-emerald-300">
                  0{index + 1}
                </div>
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="mb-4 text-sm font-semibold text-white">
                  Key Impact
                </p>

                <ul className="space-y-3">
                  {project.impact.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;