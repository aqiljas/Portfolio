const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Java", "Spring Boot"],
  },
  {
    title: "Data & Services",
    skills: ["MySQL", "Firebase", "Firebase Authentication", "REST APIs"],
  },
  {
    title: "Product & Workflow",
    skills: ["Jira", "Git", "GitHub", "Figma", "Agile", "Scrum", "Kanban"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/10 bg-white/[0.015] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">04</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Capabilities</span>
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Tools I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            Technologies, tools, and workflows I use across software development
            and product operations.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#08080a] p-7 transition-all duration-300 hover:border-blue-400/25 hover:bg-white/[0.025] sm:p-8"
            >
              <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 transition duration-200 hover:border-blue-400/30 hover:bg-blue-500/5 hover:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
