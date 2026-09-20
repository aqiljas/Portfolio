import Navbar from "../components/Navbar";
import CredibilityStrip from "../components/CredibilityStrip";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ProductOperations from "../components/ProductOperations";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12">
          {/* LEFT SIDE */}
          <div>
            {/* Status */}
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
              Software Engineer · Product Operations · Riyadh
            </div>

            {/* Name */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
              Aqil Jesoor
            </p>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Building digital products
              <span className="block text-zinc-500">
                from code to operations.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Software Engineer with experience across frontend development,
              full-stack applications, and product operations. I build
              user-focused digital products while understanding the workflows,
              systems, and decisions behind them.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
              >
                View My Work →
              </a>

              <a
                href="/aqil_jesoor_resume.pdf"
                download
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
              >
                Download CV ↓
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6 text-sm text-zinc-500">
              <a
                href="https://github.com/aqiljas"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/aqil-jasoor-482390385/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              {/* Card Header */}
              <div className="mb-10 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Engineering / Product
                </p>

                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                  Available
                </div>
              </div>

              {/* Experience */}
              <div className="mb-10">
                <p className="text-5xl font-medium tracking-[-0.05em] text-white">
                  02+
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Years across development and product
                </p>
              </div>

              {/* Technologies */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Jira",
                  "Firebase",
                  "Product Ops",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition duration-200 hover:border-blue-400/30 hover:bg-blue-500/5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <Reveal>
        <CredibilityStrip />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <ProductOperations />
      </Reveal>

      <Reveal>
        <Education />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
      <Footer />
    </main>
  );
}
