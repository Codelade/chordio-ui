import React from "react";

const ROLE_STYLES = {
  USER: "bg-blue-100 text-blue-700",
  MODERATOR: "bg-yellow-100 text-yellow-700",
  ADMINISTRATOR: "bg-red-100 text-red-700",
  DEVELOPER: "bg-purple-100 text-purple-700",
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
      className={`${base} ${ROLE_STYLES[role] || "bg-gray-100 text-gray-700"}`}
    >
      {ROLE_LABELS[role] || role}
    </span>
  );
};

export default RoleBadge;
