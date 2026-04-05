import React, { useState } from "react";
import DebugUserService from "../services/DebugUserService";
import { useNavigate } from "react-router-dom";

const DebugCreateUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createUser = (e) => {
    e.preventDefault();

    DebugUserService.createUser(user)
      .then(() => {
        navigate("/debug/listUsers", {
          state: {
            type: "success",
            message: "User created successfully",
          },
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);

        navigate("/debug/listUsers", {
          state: {
            type: "error",
            message: "Failed to create user, check console for logs",
          },
        });
      });
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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-200 px-4 py-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-5 border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Create Debug User
        </h1>

        <form className="flex flex-col gap-4" onSubmit={createUser}>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="h-9 border border-gray-300 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Username</label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              className="h-9 border border-gray-300 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="h-9 border border-gray-300 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Role</label>
            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="h-9 border border-gray-300 rounded-md px-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="USER">User</option>
              <option value="MODERATOR">Moderator</option>
              <option value="ADMINISTRATOR">Administrator</option>
              <option value="DEVELOPER">Developer</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-3 pt-1">
            <button
              type="submit"
              className="w-full md:w-1/2 h-10 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              Create
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="w-full md:w-1/2 h-10 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
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
