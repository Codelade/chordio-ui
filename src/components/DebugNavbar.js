import React from "react";
import ThemeToggle from "./ThemeToggle";

const DebugNavbar = () => {
  return (
    <div className="bg-white border-b border-slate-200 dark:bg-slate-950 dark:border-slate-800">
      <div className="h-16 px-4 sm:px-8 flex items-center justify-between">
        <p className="text-slate-900 font-semibold dark:text-slate-100">
          Chordio - Admin
        </p>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DebugNavbar;
