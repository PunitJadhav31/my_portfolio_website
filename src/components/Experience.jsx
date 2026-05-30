import SectionTitle from "./SectionTitle";
import AnimatedList from "./AnimatedList";

const experiences = [
  {
    company: "Embed Square Solutions Pvt. Ltd.",
    role: "Data Analyst",
    location: "Pune, India",
    duration: "Feb 2024 – Jun 2025",
    type: "Full-time",
    description:
      "Worked on data analysis, BI dashboards, ETL pipelines, KPI reporting, and automation to support product and business decision-making.",
    points: [
      "Analyzed user behavior trends to support product planning and identify opportunities for feature improvements, contributing to 3+ strategic decisions.",
      "Built 10+ Power BI dashboards tracking engagement, revenue, and operational KPIs, improving business visibility by 30%.",
      "Designed ETL pipelines using Python and SQL, improving data availability and reporting efficiency by 40%.",
      "Automated recurring reporting workflows to reduce manual effort and improve insight consistency for stakeholders.",
    ],
    skills: ["Python", "SQL", "Power BI", "ETL", "KPI Reporting", "Automation"],
  },
  {
    company: "HighRadius Corporation",
    role: "Data Analyst Intern",
    location: "Hyderabad, India",
    duration: "Aug 2023 – Jan 2024",
    type: "Internship",
    description:
      "Supported analytics and reporting workflows by working with large datasets, identifying trends, and presenting insights to business stakeholders.",
    points: [
      "Analyzed multi-million-row datasets using SQL and Excel to identify trends, anomalies, and performance gaps.",
      "Improved data quality by 20% through validation, cleaning, and structured analysis of business datasets.",
      "Conducted exploratory data analysis and presented insights that helped reduce turnaround time by 15–20%.",
      "Built dashboards and reports to communicate business findings clearly to cross-functional teams.",
    ],
    skills: ["SQL", "Excel", "EDA", "Data Cleaning", "Dashboards", "Reporting"],
  },
  {
    company: "The University of Texas at Dallas",
    role: "Student Assistant – University Library",
    location: "Richardson, TX",
    duration: "Jan 2025 – Present",
    type: "Part-time",
    description:
      "Support library operations while applying data tracking, reporting, inventory management, and process improvement skills.",
    points: [
      "Managed and tracked 10K+ library assets using RFID systems and database records, improving inventory accuracy and retrieval efficiency.",
      "Automated patron account and circulation reporting in Excel, reducing manual effort and improving reporting consistency.",
      "Maintained and validated inventory and supply datasets to streamline tracking and reduce discrepancies.",
      "Supported front-line operations in a high-traffic academic environment while ensuring accurate data handling.",
    ],
    skills: ["Excel", "Data Tracking", "RFID", "Reporting", "Operations", "Data Validation"],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
  label="Experience"
  title="Real-world analytics experience across dashboards, pipelines, and business insights."
  description="My professional work combines data analysis, BI reporting, automation, stakeholder communication, and hands-on technical implementation using Python, SQL, Power BI, and Excel."
/>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="relative grid gap-6 lg:grid-cols-[220px_1fr]"
              >
                <div className="hidden lg:block">
                  <div className="sticky top-28">
                    <div className="relative">
                      <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
                    </div>

                    <p className="ml-8 text-sm font-medium text-emerald-300">
                      {experience.duration}
                    </p>

                    <p className="ml-8 mt-2 text-sm text-zinc-500">
                      {experience.type}
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/40 hover:bg-white/[0.06] lg:p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-medium text-emerald-300 lg:hidden">
                        {experience.duration} • {experience.type}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white lg:mt-0">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base font-medium text-zinc-300">
                        {experience.company}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {experience.location}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-lg font-bold text-zinc-300">
                      0{index + 1}
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  <AnimatedList items={experience.points} title="Key Contributions" />

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;