import React, { useState } from "react";

const AuthMenu = () => {
  const [mode, setMode] = useState("login"); // <-- FIXED: define mode + setMode

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-100 dark:bg-slate-950 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/40 max-h-[calc(100vh-4rem)] overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-4">
            <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
              Welcome to{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Chordio
              </span>
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {mode === "login"
                ? "Sign in to continue."
                : "Create a new account."}
            </p>
          </div>

          {/* Tabs */}
          <div className="px-2">
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 mx-6">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                  mode === "login"
                    ? "bg-white text-slate-900 shadow-sm shadow-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:shadow-slate-950/40"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setMode("register")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                  mode === "register"
                    ? "bg-white text-slate-900 shadow-sm shadow-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:shadow-slate-950/40"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                Register
              </button>
            </div>
          </div>

          {/* Forms */}
          <div className="px-8 pb-8 pt-4 overflow-y-auto max-h-[calc(100vh-4rem-10rem)]">
            {mode === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Chordio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

/* ---------------- LOGIN FORM ---------------- */

function LoginForm() {
  return (
    <form className="space-y-5">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Password
        </label>
        <input
          type="password"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition"
      >
        Sign in
      </button>
    </form>
  );
}

/* ---------------- REGISTER FORM ---------------- */

function RegisterForm() {
  return (
    <form className="space-y-5">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Username
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
          placeholder="yourusername"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Password
        </label>
        <input
          type="password"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
          placeholder="At least 8 characters"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Confirm password
        </label>
        <input
          type="password"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
          placeholder="Repeat your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition"
      >
        Create account
      </button>
    </form>
  );
}

export default AuthMenu;
