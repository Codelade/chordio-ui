import React from "react";

const PageSizeSelector = ({ size, onChange }) => {
  const options = [5, 10, 15, 30];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={`px-3 py-1.5 rounded-md text-sm border transition ${
            size === s
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default PageSizeSelector;
