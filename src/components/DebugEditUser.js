import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import debugUserService from "../services/DebugUserService";

const DebugEditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
    role: "USER",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await debugUserService.getUser(id);
        setUser({
          email: res.data.email,
          userName: res.data.userName,
          password: res.data.password,
          role: res.data.role,
        });
      } catch (err) {
        console.error("Failed to load user", err);
        navigate("/debug/listUsers", {
          state: {
            type: "error",
            message: "Failed to load user for editing",
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setUser({
      email: "",
      userName: "",
      password: "",
      role: "USER",
    });
  };

  const handleCancel = () => {
    navigate("/debug/listUsers", {
      state: {
        type: "info",
        message: "Update user operation cancelled",
      },
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await debugUserService.updateUser(id, user);
      navigate("/debug/listUsers", {
        state: {
          type: "success",
          message: "User updated successfully",
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
      navigate("/debug/listUsers", {
        state: {
          type: "error",
          message: "Failed to update user, check console for logs",
        },
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading user...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Edit Debug User
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleUpdate}>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Username</label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              className="h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Role</label>
            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="h-10 border border-gray-300 rounded-md px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="USER">User</option>
              <option value="MODERATOR">Moderator</option>
              <option value="ADMINISTRATOR">Administrator</option>
              <option value="DEVELOPER">Developer</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="w-full py-2 bg-gray-300 text-gray-800 rounded-md font-semibold hover:bg-gray-400 transition"
            >
              Clear
            </button>

            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DebugEditUser;
