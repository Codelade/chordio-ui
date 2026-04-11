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
  formTitle,
  submitLabel,
  showPassword = true,
}) => {
  return (
    <div className="flex items-center justify-center px-6 sm:px-8">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-950/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100 text-center mb-6">
          {formTitle || submitLabel}
        </h1>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              placeholder="Email address"
              className="h-10 border border-slate-300 dark:border-slate-700 rounded-md px-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Username
            </label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={onChange}
              placeholder="Username"
              className="h-10 border border-slate-300 dark:border-slate-700 rounded-md px-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          {showPassword && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                placeholder="Password"
                className="h-10 border border-slate-300 dark:border-slate-700 rounded-md px-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Role
            </label>
            <select
              name="role"
              value={user.role}
              onChange={onChange}
              className="h-10 border border-slate-300 dark:border-slate-700 rounded-md px-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
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
              className="w-full py-2 bg-slate-200 text-slate-900 rounded-md font-semibold hover:bg-slate-300 transition dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Clear
            </button>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700 transition"
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
