import React, { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";
import useTheme from "../hooks/useTheme";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Help", href: "#help" },
];

const AdminNavbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/20">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-3 items-center px-6 py-4 sm:px-8">
          <div className="flex items-center gap-4 min-w-0">
            <a href="#home" className="flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
                C
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-white">Chordio</p>
                <p className="text-xs text-slate-400">Chords made easy.</p>
              </div>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="col-start-3 ml-auto inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 shadow-sm shadow-slate-950/40 transition hover:bg-slate-800 md:hidden"
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>

          <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-slate-300 md:flex">
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

          <div className="hidden items-center justify-end gap-3 md:flex">
            {user ? (
              <div className="flex items-center gap-3 min-w-0">
                <div className="hidden lg:flex flex-col min-w-0 items-end">
                  <p className="text-sm font-medium text-white truncate max-w-[160px]">
                    {user.userName}
                  </p>
                  <p className="text-xs text-slate-400 truncate max-w-[160px]">
                    {user.email}
                  </p>
                </div>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-lg transition focus:outline-none ${
                      user.role?.toLowerCase() === "admin"
                        ? "bg-indigo-600 shadow-indigo-500/20 hover:bg-indigo-500"
                        : "bg-slate-600 shadow-slate-500/20 hover:bg-slate-500"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-label="User menu"
                  >
                    {user.role?.toLowerCase() === "admin" ? "A" : "U"}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl shadow-slate-950/40">
                      <div className="py-1">
                        <button
                          onClick={toggleTheme}
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-slate-700"
                        >
                          <span>{theme === "dark" ? "☀︎" : "⏾"}</span>
                          {theme === "dark" ? "Day Theme" : "Night Theme"}
                        </button>
                        <button
                          onClick={() => {
                            logout();
                            setDropdownOpen(false);
                          }}
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-400 transition hover:bg-slate-700"
                        >
                          <span>↪</span>
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <ThemeToggle />
                <a
                  href="#login"
                  className="rounded-full border border-indigo-500 bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  Sign in
                </a>
              </>
            )}
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} border-t border-slate-800 bg-slate-900 px-6 py-4 sm:px-8 md:hidden`}
        >
          <div className="mb-4">
            {user ? (
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-lg ${
                      user.role?.toLowerCase() === "admin"
                        ? "bg-indigo-600 shadow-indigo-500/20"
                        : "bg-slate-600 shadow-slate-500/20"
                    }`}
                  >
                    {user.role?.toLowerCase() === "admin" ? "A" : "U"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {user.userName}
                    </p>
                    <p className="text-xs text-slate-400 leading-tight">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="mx-4 border-t border-slate-700" />
                <button
                  onClick={toggleTheme}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
                >
                  <span>{theme === "dark" ? "☀︎" : "⏾"}</span>
                  {theme === "dark" ? "Day Theme" : "Night Theme"}
                </button>
                <div className="mx-4 border-t border-slate-700" />
                <button
                  onClick={logout}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 transition hover:bg-slate-800"
                >
                  <span>↪</span>
                  Sign out
                </button>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60">
                <button
                  onClick={toggleTheme}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
                >
                  <span>{theme === "dark" ? "☀︎" : "⏾"}</span>
                  {theme === "dark" ? "Day Theme" : "Night Theme"}
                </button>
                <div className="mx-4 border-t border-slate-700" />
                <a
                  href="#login"
                  className="block px-4 py-3 text-center text-sm font-semibold text-indigo-400 transition hover:bg-slate-800"
                >
                  Sign in
                </a>
              </div>
            )}
          </div>
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
        </div>
      </header>
    </div>
  );
};

export default AdminNavbar;
