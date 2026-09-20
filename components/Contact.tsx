const contactDetails = [
  {
    label: "Email",
    value: "jasooraaqil@gmail.com",
    href: "mailto:jasooraaqil@gmail.com",
  },
  {
    label: "Phone",
    value: "+966 535 906 815",
    href: "tel:+966535906815",
  },
  {
    label: "GitHub",
    value: "github.com/aqiljas",
    href: "https://github.com/aqiljas",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aqil-jasoor",
    href: "https://www.linkedin.com/in/aqil-jasoor-482390385/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050506] py-32 sm:py-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">07</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Contact</span>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Have a project or opportunity?
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s build something
            <span className="block text-zinc-500">worth shipping.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-zinc-400">
            I&apos;m open to software engineering, frontend, full-stack, product
            operations, and product-focused opportunities.
          </p>

          {/* Main Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jasooraaqil@gmail.com"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
            >
              Send Email →
            </a>

            <a
              href="tel:+966535906815"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              Call Me →
            </a>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2">
          {contactDetails.map((item) => {
            const external =
              item.label === "GitHub" || item.label === "LinkedIn";

            return (
              <a
                key={item.label}
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  {item.label}
                </p>

                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="break-all text-sm text-zinc-300 sm:text-base">
                    {item.value}
                  </p>

                  <span className="text-zinc-600 transition group-hover:text-blue-400">
                    ↗
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-600">
          Riyadh, Saudi Arabia
        </p>
      </div>
    </section>
  );
}
