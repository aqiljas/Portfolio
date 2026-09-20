const specialties = [
  "Frontend Development",
  "Full-Stack Development",
  "Product Operations",
  "Cyber Security",
];

export default function CredibilityStrip() {
  return (
    <section className="border-y border-white/10 bg-[#050506]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {specialties.map((specialty) => (
            <div
              key={specialty}
              className="flex items-center justify-center px-4 py-6 text-center"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-200 hover:text-zinc-300">
                {specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
