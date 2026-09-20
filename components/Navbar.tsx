"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050506]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-black tracking-[-0.04em] text-white"
        >
          AQIL<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:border-blue-400/40 hover:bg-blue-500/10 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-blue-400/40 hover:bg-blue-500/10 md:hidden"
        >
          {menuOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-white/10 bg-[#070708]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-5 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/5 py-4 text-base font-medium text-zinc-300 transition-colors hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Let&apos;s Talk →
          </a>
        </nav>
      </div>
    </header>
  );
}
