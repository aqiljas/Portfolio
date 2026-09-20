export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-[#050506] py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section label */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">01</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>About</span>
        </div>

        <div className="max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Engineering mindset.
            <span className="block text-zinc-500">Product perspective.</span>
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-zinc-400">
            <p>
              I&apos;m a Software Engineer with experience building modern,
              responsive web applications across frontend and full-stack
              development.
            </p>

            <p>
              My experience has expanded into Product Operations, where I work
              with product workflows, Jira, documentation, research,
              prioritization, and cross-functional collaboration.
            </p>

            <p>
              This combination allows me to understand not only how digital
              products are built, but also how they are planned, managed,
              improved, and delivered to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
