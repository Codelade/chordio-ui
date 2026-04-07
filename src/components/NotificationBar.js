import React from "react";

const NotificationBar = ({ type, message }) => {
  const styles = {
    success:
      "bg-emerald-100 border-emerald-300 text-emerald-800 dark:bg-emerald-900 dark:border-emerald-700 dark:text-emerald-200",
    error:
      "bg-red-100 border-red-300 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-200",
    warning:
      "bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-200",
    info: "bg-sky-100 border-sky-300 text-sky-800 dark:bg-sky-900 dark:border-sky-700 dark:text-sky-200",
  };

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  if (!message) {
    return (
      <div className="h-12 mb-4 rounded-md border border-slate-200 bg-white px-4 flex items-center text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        <span className="text-base mr-2">Notifications:</span>
        <span className="text-base text-slate-600 dark:text-slate-400 opacity-80">
          Operation Status...
        </span>
      </div>
    );
  }

  return (
    <div
      className={`h-12 mb-4 rounded-md border px-4 flex items-center ${styles[type]}`}
    >
      <span className="text-base mr-2">Notifications:</span>
      <span className="text-base mr-1 opacity-80">{icons[type]}</span>
      <span className="text-base opacity-80">{message}</span>
    </div>
  );
};

export default NotificationBar;
