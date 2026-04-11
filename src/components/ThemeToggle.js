import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to day theme" : "Switch to night theme"
      }
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:shadow-slate-950/40 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? "Day Theme" : "Night Theme"}
    </button>
  );
};

export default ThemeToggle;
