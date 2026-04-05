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
      <div className="overflow-x-auto shadow border rounded-lg bg-white p-8 text-center text-gray-600">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow border rounded-lg bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                onClick={() => onSort(col.key)}
                className="cursor-pointer text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6"
              >
                {col.label}
                {sortBy === col.key && (
                  <span className="ml-1 text-xs">
                    {direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
              Password
            </th>
            <th className="text-center font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
              Role
            </th>
            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
              Operations
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4">{user.id}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.userName}</td>
              <td className="px-6 py-4">{user.password}</td>
              <td className="text-center px-6 py-4">
                <RoleBadge role={user.role} />
              </td>
              <td className="px-6 py-4 flex gap-3">
                <button
                  onClick={() => onEdit(user.id)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user)}
                  className="text-red-600 hover:text-red-700 font-medium"
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
