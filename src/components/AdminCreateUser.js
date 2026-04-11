import { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminUserService from "../services/AdminUserService";
import UserForm from "./UserForm";

const INITIAL_USER = {
  email: "",
  userName: "",
  password: "",
  role: "USER",
};

const AdminCreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(INITIAL_USER);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setUser(INITIAL_USER);
  };

  const handleCancel = () => {
    navigate("/admin/listUsers", {
      replace: true,
      state: {
        type: "info",
        message: "Create user operation cancelled",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await adminUserService.createUser(user);
      navigate("/admin/listUsers", {
        replace: true,
        state: {
          type: "success",
          message: "User created successfully",
        },
      });
    } catch (error) {
      console.error("Error creating user:", error);
      navigate("/admin/listUsers", {
        replace: true,
        state: {
          type: "error",
          message: "Failed to create user, check console for logs",
        },
      });
    }
  };

  return (
    <UserForm
      user={user}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClear={handleClear}
      onCancel={handleCancel}
      formTitle="Create New User"
      submitLabel="Create"
    />
  );
};

export default AdminCreateUser;
