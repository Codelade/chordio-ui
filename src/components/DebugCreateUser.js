import React from "react";

const DebugCreateUser = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md md:max-w-lg bg-white shadow-xl rounded-xl p-6 md:p-10 border border-gray-200">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
          Create a New Account
        </h1>

        <form className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="h-12 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Username
            </label>
            <input
              name="userName"
              type="text"
              className="h-12 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="h-12 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-2">
            <button className="w-full md:w-1/2 flex-none h-12 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
              Create
            </button>
            <button className="w-full md:w-1/2 flex-none h-12 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DebugCreateUser;
