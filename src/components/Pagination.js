import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages === 0) return null;

  const windowSize = 5;
  const windowStart = Math.floor(page / windowSize) * windowSize;
  const windowEnd = Math.min(windowStart + windowSize - 1, totalPages - 1);

  const pages = [];
  for (let i = windowStart; i <= windowEnd; i++) pages.push(i);

  const buttonBase =
    "px-3 py-1.5 rounded-md text-sm border transition disabled:cursor-not-allowed";

  return (
    <div className="flex flex-wrap items-center gap-1">
      <button
        disabled={page === 0}
        onClick={() => onPageChange(0)}
        className={`${buttonBase} ${
          page === 0
            ? "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300"
            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        }`}
      >
        ⏮
      </button>

      <button
        disabled={page === 0}
        onClick={() => onPageChange(page - 1)}
        className={`${buttonBase} ${
          page === 0
            ? "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300"
            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        }`}
      >
        ◀
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`${buttonBase} ${
            p === page
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          {p + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages - 1}
        onClick={() => onPageChange(page + 1)}
        className={`${buttonBase} ${
          page === totalPages - 1
            ? "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300"
            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        }`}
      >
        ▶
      </button>

      <button
        disabled={page === totalPages - 1}
        onClick={() => onPageChange(totalPages - 1)}
        className={`${buttonBase} ${
          page === totalPages - 1
            ? "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300"
            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        }`}
      >
        ⏭
      </button>
    </div>
  );
};

export default Pagination;
