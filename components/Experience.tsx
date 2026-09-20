const experiences = [
  {
    number: "01",
    company: "Lucidya",
    role: "Product Operations Intern",
    period: "Jul 2026 — Present",
    location: "Riyadh, Saudi Arabia",
    description:
      "Supporting product operations through Jira management, product documentation, process improvement, competitor research, product tracking, and collaboration with cross-functional teams.",
    skills: [
      "Product Operations",
      "Jira",
      "Agile",
      "CXM",
      "SaaS",
      "Documentation",
    ],
  },
  {
    number: "02",
    company: "Nexus International",
    role: "Full Stack Developer",
    period: "Jul 2025 — Dec 2025",
    location: "Sri Lanka",
    description:
      "Developed full-stack web applications, integrated REST APIs, worked with authentication and database-driven systems, and contributed to Agile development workflows.",
    skills: ["React", "JavaScript", "Node.js", "MySQL", "REST APIs"],
  },
  {
    number: "03",
    company: "DETZ Global",
    role: "Frontend Developer",
    period: "Jun 2024 — Jul 2025",
    location: "Sri Lanka",
    description:
      "Built responsive web applications using React and modern frontend technologies, translated UI/UX designs into production interfaces, integrated APIs, and improved frontend performance.",
    skills: ["React", "TypeScript", "JavaScript", "Firebase", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-white/10 bg-white/[0.015] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">02</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Experience</span>
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Where I&apos;ve worked.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            Experience across software development and product operations,
            combining technical execution with product-focused workflows.
          </p>
        </div>

        {/* Experience List */}
        <div className="border-y border-white/10">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className={`grid gap-7 py-10 lg:grid-cols-[80px_1fr_1.5fr] lg:gap-10 ${
                index !== experiences.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {/* Number */}
              <div>
                <span className="font-mono text-sm text-zinc-600">
                  {experience.number}
                </span>
              </div>

              {/* Role + Company */}
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-400">
                  {experience.company}
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-zinc-600">
                  {experience.period}
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  {experience.location}
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 transition duration-200 hover:border-blue-400/30 hover:text-zinc-200"
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
    </section>
  );
}
