import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Help", href: "#help" },
];

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/20">
        <div className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
              C
            </div>
            <div>
              <p className="text-base font-semibold text-white">Chordio</p>
              <p className="text-xs text-slate-400">Chords made easy.</p>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 shadow-sm shadow-slate-950/40 transition hover:bg-slate-800 md:hidden"
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#login"
              className="rounded-full border border-indigo-500 bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              Sign in
            </a>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} border-t border-slate-800 bg-slate-900 px-4 py-4 md:hidden`}
        >
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <ThemeToggle />
            <a
              href="#login"
              className="block rounded-full bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Sign in
            </a>
          </div>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-4rem)] flex-1 w-full flex-col justify-between">
        {children}
      </main>
    </div>
  );
};

export default Navbar;
