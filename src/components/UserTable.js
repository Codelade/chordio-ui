import React from "react";
import RoleBadge from "./RoleBadge";

const COLUMNS = [
  { key: "id", label: "ID" },
  { key: "email", label: "Email" },
  { key: "userName", label: "Username" },
];

const UserTable = ({ users, sortBy, direction, onSort, onEdit, onDelete }) => {
  if (!users || users.length === 0) {
    return (
      <div className="overflow-x-auto shadow border rounded-lg bg-white dark:bg-slate-900 p-8 text-center text-slate-500 dark:text-slate-300">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow border rounded-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                onClick={() => onSort(col.key)}
                className="cursor-pointer text-left font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider py-3 px-6"
              >
                {col.label}
                {sortBy === col.key && (
                  <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                    {direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
            <th className="text-left font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider py-3 px-6">
              Password
            </th>
            <th className="text-center font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider py-3 px-6">
              Role
            </th>
            <th className="text-left font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider py-3 px-6">
              Operations
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={
                index % 2 === 0
                  ? "bg-white dark:bg-slate-950"
                  : "bg-slate-50 dark:bg-slate-900"
              }
            >
              <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                {user.id}
              </td>
              <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                {user.email}
              </td>
              <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                {user.userName}
              </td>
              <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                {user.password}
              </td>
              <td className="text-center px-6 py-4">
                <RoleBadge role={user.role} />
              </td>
              <td className="px-6 py-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onEdit(user.id)}
                  className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user)}
                  className="text-red-600 hover:text-red-700 dark:text-red-300 dark:hover:text-red-200 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
