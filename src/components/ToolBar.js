import React from "react";

const ToolBar = ({ searchTerm, setSearchTerm, onCreate }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onCreate}
        className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
      >
        Add User
      </button>

      <input
        type="text"
        placeholder="Search User..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 w-36 sm:w-48 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ToolBar;
