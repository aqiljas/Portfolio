export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050506]">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-lg font-black tracking-[-0.04em] text-white"
            >
              AQIL<span className="text-blue-400">.</span>
            </a>

            <p className="mt-2 text-xs text-zinc-600">
              Software Engineer · Product Operations
            </p>

            <p className="mt-1 text-xs text-zinc-600">Riyadh, Saudi Arabia</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
            <a
              href="tel:+966535906815"
              className="transition-colors duration-200 hover:text-blue-400"
            >
              +966 535 906 815
            </a>

            <a
              href="mailto:jasooraaqil@gmail.com"
              className="transition-colors duration-200 hover:text-blue-400"
            >
              Email ↗
            </a>

            <a
              href="https://github.com/aqiljas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/aqil-jasoor-482390385/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-600">© 2026 Aqil Jesoor</p>
        </div>
      </div>
    </footer>
  );
}
