const capabilities = [
  {
    number: "01",
    title: "Product Workflows",
    description:
      "Supporting epics, stories, prioritization, ownership, status tracking, and structured product processes.",
  },
  {
    number: "02",
    title: "Jira Operations",
    description:
      "Working with saved filters, issue hygiene, missing fields, ownership, target dates, and release tracking.",
  },
  {
    number: "03",
    title: "Product Research",
    description:
      "Analyzing competitors, SaaS products, CXM platforms, market positioning, and product capabilities.",
  },
  {
    number: "04",
    title: "Documentation",
    description:
      "Creating structured product updates, meeting notes, action items, internal documentation, and product trackers.",
  },
];

export default function ProductOperations() {
  return (
    <section id="product-operations" className="bg-[#050506] py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span className="text-blue-400">05</span>

          <span className="h-px w-8 bg-zinc-800" />

          <span>Product Operations</span>
        </div>

        {/* Heading */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Beyond writing code.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
              I also work across product processes, research, documentation, and
              operational workflows that help teams ship better products.
            </p>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 lg:justify-self-end">
            Bringing together technical knowledge and product operations gives
            me a broader understanding of how digital products move from idea to
            execution.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04] sm:p-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-sm text-blue-400">
                  {item.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
