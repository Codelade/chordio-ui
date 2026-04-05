import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../services/DebugUserService";
import NotificationBar from "../components/NotificationBar";

const DebugListUsers = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await userService.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const RoleBadge = ({ role }) => {
    const base =
      "inline-flex items-center justify-center w-20 px-2 py-1 rounded text-xs font-semibold";

    const styles = {
      USER: "bg-blue-100 text-blue-700",
      MODERATOR: "bg-yellow-100 text-yellow-700",
      ADMINISTRATOR: "bg-red-100 text-red-700",
      DEVELOPER: "bg-purple-100 text-purple-700",
    };

    const labels = {
      USER: "User",
      MODERATOR: "Mod",
      ADMINISTRATOR: "Admin",
      DEVELOPER: "Dev",
    };

    return (
      <span
        className={`${base} ${styles[role] || "bg-gray-100 text-gray-700"}`}
      >
        {labels[role] || role}
      </span>
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex justify-center bg-gray-100 px-6 py-8">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Debug User List
          </h1>

          <button
            onClick={() => navigate("/debug/createUser")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </div>

        <NotificationBar
          type={location.state?.type}
          message={location.state?.message}
        />

        <div className="overflow-x-auto shadow border rounded-lg bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                  Email
                </th>
                <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                  Username
                </th>
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

            {!loading && (
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {user.userName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {user.password}
                    </td>

                    <td className="text-center px-6 py-4 whitespace-nowrap">
                      <RoleBadge role={user.role} />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Show
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 font-medium">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DebugListUsers;
