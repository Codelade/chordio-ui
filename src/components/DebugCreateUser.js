import React, { useState } from "react";
import DebugUserService from "../services/DebugUserService";

const DebugCreateUser = () => {
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createUser = (e) => {
    e.preventDefault();
    DebugUserService.createUser(user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleClear = () => {
    setUser({
      email: "",
      userName: "",
      password: "",
      role: "USER",
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md md:max-w-lg bg-white shadow-xl rounded-xl p-6 md:p-10 border border-gray-200">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
          Create a New Debug User
        </h1>

        <form className="flex flex-col gap-6" onSubmit={createUser}>
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
              className="h-12 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={(e) => handleChange(e)}
              className="h-12 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              className="h-12 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Role Dropdown */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Role
            </label>
            <select
              name="role"
              value={user.role}
              onChange={(e) => handleChange(e)}
              className="h-12 border border-gray-300 rounded-md px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="USER">User</option>
              <option value="MODERATOR">Moderator</option>
              <option value="ADMINISTRATOR">Administrator</option>
              <option value="DEVELOPER">Developer</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-2">
            <button
              type="submit"
              className="w-full md:w-1/2 h-12 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              Create
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="w-full md:w-1/2 h-12 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DebugCreateUser;
