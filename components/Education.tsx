const education = [
  {
    number: "01",
    title: "BSc (Hons) Software Engineering",
    organization: "Cardiff Metropolitan University",
  },
  {
    number: "02",
    title: "Higher National Diploma in Software Engineering",
    organization: "Software Engineering",
  },
  {
    number: "03",
    title: "Cyber Security & Network Administration",
    organization: "Distinction",
  },
  {
    number: "04",
    title: "Diploma in Graphic Design",
    organization: "Professional Qualification",
  },
  {
    number: "05",
    title: "Diploma in English",
    organization: "Professional Qualification",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-white/10 bg-white/[0.015] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">06</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Certifications</span>
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Certifications.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            Academic and professional qualifications that support my work across
            software engineering, technology, and digital products.
          </p>
        </div>

        {/* List */}
        <div className="border-y border-white/10">
          {education.map((item, index) => (
            <article
              key={item.title}
              className={`grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center ${
                index !== education.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="font-mono text-sm text-zinc-600">
                {item.number}
              </span>

              <h3 className="text-base font-medium text-zinc-200 sm:text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-500">{item.organization}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
