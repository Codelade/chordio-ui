const ToolBar = ({ searchTerm, setSearchTerm, onCreate }) => {
  return (
    <div className="flex flex-row items-center gap-2 sm:justify-between">
      <button
        onClick={onCreate}
        className="px-4 py-2 min-w-[96px] whitespace-nowrap bg-emerald-600 text-white rounded-md shadow-sm hover:bg-emerald-700 transition"
      >
        Add User
      </button>

      <input
        type="text"
        placeholder="Search User..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 w-full sm:w-64 sm:ml-auto rounded-md border border-slate-300 bg-white text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-indigo-500"
      />
    </div>
  );
};

export default ToolBar;
