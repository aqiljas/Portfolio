const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Cab Booking",
    description:
      "A web-based cab booking system designed to manage customer bookings, vehicle information, and transportation-related operations through a structured digital platform.",
    technologies: ["Java", "Web Development", "Database", "REST APIs"],
    github: "https://github.com/aqiljas/Cab-Booking",
  },
  {
    number: "02",
    category: "IOT / AUTOMATION",
    title: "Automated Railway Gate",
    description:
      "An IoT-based railway safety system using ultrasonic sensing and servo-controlled barriers to automatically detect approaching objects and control the railway gate.",
    technologies: ["Arduino", "IoT", "HC-SR04", "Servo Motors", "Automation"],
    github:
      "https://github.com/aqiljas/IoT-Based-Automated-Railway-Gate-Barrier",
  },
  {
    number: "03",
    category: "WEB APPLICATION",
    title: "ToDo Application",
    description:
      "A responsive task management application that allows users to create, manage, filter, and persist daily tasks with a clean and simple user experience.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Local Storage",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/aqiljas/ToDo-Application",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050506] py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">03</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Selected Work</span>
        </div>

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Projects that solve
              <span className="block text-zinc-500">real problems.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
            Selected projects across web development, IoT automation,
            application development, and problem solving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04] sm:p-10"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-blue-500/5 blur-[100px] transition duration-300 group-hover:bg-blue-500/10" />

              <div className="relative">
                {/* Top */}
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-zinc-600">
                      {project.number}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                  >
                    ↗
                  </a>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400 transition duration-200 hover:border-blue-400/30 hover:text-zinc-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <div className="mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-blue-400"
                    >
                      View on GitHub
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
