import React from "react";

const ROLE_STYLES = {
  USER: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  MODERATOR:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  ADMINISTRATOR: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  DEVELOPER:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
};

const ROLE_LABELS = {
  USER: "User",
  MODERATOR: "Mod",
  ADMINISTRATOR: "Admin",
  DEVELOPER: "Dev",
};

const RoleBadge = ({ role }) => {
  const base =
    "inline-flex items-center justify-center w-14 px-2 py-1 rounded text-xs font-semibold";

  return (
    <span
      className={`${base} ${ROLE_STYLES[role] || "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"}`}
    >
      {ROLE_LABELS[role] || role}
    </span>
  );
};

export default RoleBadge;
