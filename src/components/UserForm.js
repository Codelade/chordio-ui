import React from "react";

const ROLE_OPTIONS = [
  { value: "USER", label: "User" },
  { value: "MODERATOR", label: "Moderator" },
  { value: "ADMINISTRATOR", label: "Administrator" },
  { value: "DEVELOPER", label: "Developer" },
];

const UserForm = ({
  user,
  onChange,
  onSubmit,
  onClear,
  onCancel,
  submitLabel,
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-6">
          {submitLabel}
        </h1>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              className="h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Username</label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={onChange}
              className="h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              className="h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Role</label>
            <select
              name="role"
              value={user.role}
              onChange={onChange}
              className="h-10 border border-gray-300 rounded-md px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {ROLE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <button
              type="button"
              onClick={onCancel}
              className="w-full py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={onClear}
              className="w-full py-2 bg-gray-300 text-gray-800 rounded-md font-semibold hover:bg-gray-400 transition"
            >
              Clear
            </button>

            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
