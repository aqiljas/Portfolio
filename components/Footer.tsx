export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050506]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
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
        </div>

        {/* Middle */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
          <span>Riyadh, Saudi Arabia</span>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-white"
          >
            LinkedIn ↗
          </a>

          <a
            href="mailto:your@email.com"
            className="transition-colors duration-200 hover:text-white"
          >
            Email ↗
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-600">© 2026 Aqil Jesoor</p>
      </div>
    </footer>
  );
}
