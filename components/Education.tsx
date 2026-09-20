const educations = [
  {
    number: "01",
    title: "BSc (Hons) Software Engineering",
    organization: "Cardiff Metropolitan University (ICBT Campus)",
  },
  {
    number: "02",
    title: "HND in Computing & Software Engineering",
    organization: "Cardiff Metropolitan University (ICBT Campus)",
  },
];

const certifications = [
  {
    number: "01",
    title: "Cyber Security & Network Administration",
  },
  {
    number: "02",
    title: "Diploma in Graphic Design",
  },
  {
    number: "03",
    title: "Diploma in English",
  },
  {
    number: "04",
    title: "Diploma in Web Development",
  },
  {
    number: "05",
    title: "Diploma in AI Fundamentals",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-white/10 bg-white/[0.015] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION LABEL */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">06</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Educations</span>
        </div>

        {/* EDUCATION HEADING */}
        <div className="mb-14">
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Educations.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            Academic qualifications that have built my foundation in software
            engineering and technology.
          </p>
        </div>

        {/* EDUCATION LIST */}
        <div className="border-y border-white/10">
          {educations.map((item, index) => (
            <article
              key={item.title}
              className={`grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center ${
                index !== educations.length - 1
                  ? "border-b border-white/10"
                  : ""
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

        {/* CERTIFICATIONS */}
        <div className="mt-24">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Professional Development
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Certifications.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
              Additional qualifications that strengthen my technical, creative,
              and professional capabilities.
            </p>
          </div>

          {/* CERTIFICATION LIST */}
          <div className="border-y border-white/10">
            {certifications.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-4 py-7 sm:grid-cols-[70px_1fr] sm:items-center ${
                  index !== certifications.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="font-mono text-sm text-zinc-600">
                  {item.number}
                </span>

                <h3 className="text-base font-medium text-zinc-200 sm:text-lg">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
