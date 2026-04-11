import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import adminUserService from "../services/AdminUserService";
import UserForm from "./UserForm";

const EMPTY_USER = {
  email: "",
  userName: "",
  role: "USER",
};

const AdminEditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState(EMPTY_USER);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await adminUserService.getUser(id);
        setUser({
          email: res.data.email,
          userName: res.data.userName,
          role: res.data.role,
        });
      } catch (err) {
        console.error("Failed to load user", err);
        navigate("/admin/listUsers", {
          replace: true,
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
    setUser(EMPTY_USER);
  };

  const handleCancel = () => {
    navigate("/admin/listUsers", {
      replace: true,
      state: {
        type: "info",
        message: "Update user operation cancelled",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await adminUserService.updateUser(id, user);
      navigate("/admin/listUsers", {
        replace: true,
        state: {
          type: "success",
          message: "User updated successfully",
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
      navigate("/admin/listUsers", {
        replace: true,
        state: {
          type: "error",
          message: "Failed to update user, check console for logs",
        },
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-100 dark:bg-slate-950 transition-colors duration-200">
        <p className="text-slate-600 dark:text-slate-300">Loading user...</p>
      </div>
    );
  }

  return (
    <UserForm
      user={user}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClear={handleClear}
      onCancel={handleCancel}
      formTitle="Update User"
      submitLabel="Update"
      showPassword={false}
    />
  );
};

export default AdminEditUser;
