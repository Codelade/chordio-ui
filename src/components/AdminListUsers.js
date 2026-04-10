import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../services/AdminUserService";
import useUsersSearch from "../hooks/useUsersSearch";

import NotificationBar from "./NotificationBar";
import DeleteUserModal from "./DeleteUserModal";
import Pagination from "./Pagination";
import PageSizeSelector from "./PageSizeSelector";
import ToolBar from "./ToolBar";
import UserTable from "./UserTable";

const AdminListUsers = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const {
    search,
    setSearchTerm,
    page,
    setPage,
    size,
    setPageSize,
    sortBy,
    direction,
    usersPage,
    loading,
    handleSort,
    refresh,
  } = useUsersSearch();

  const handleDelete = useCallback(
    async (id) => {
      try {
        await userService.deleteUser(id);

        navigate(location.pathname, {
          replace: true,
          state: { type: "success", message: "User deleted successfully" },
        });

        refresh();
      } catch (error) {
        navigate(location.pathname, {
          replace: true,
          state: { type: "error", message: "Failed to delete user" },
        });
      }
    },
    [navigate, location.pathname, refresh],
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-slate-600 dark:text-slate-300">Loading users...</p>
      </div>
    );
  }

  if (!usersPage) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-slate-600 dark:text-slate-300">
          Failed to load users.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 space-y-4">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Admin User List
        </h1>

        <NotificationBar
          type={location.state?.type}
          message={location.state?.message}
        />

        <ToolBar
          searchTerm={search}
          setSearchTerm={setSearchTerm}
          onCreate={() => navigate("/admin/createUser")}
        />

        <UserTable
          users={usersPage.content}
          sortBy={sortBy}
          direction={direction}
          onSort={handleSort}
          onEdit={(id) => navigate(`/admin/editUser/${id}`)}
          onDelete={(user) => {
            setSelectedUser(user);
            setIsDeleteOpen(true);
          }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
          <PageSizeSelector size={size} onChange={setPageSize} />

          <Pagination
            page={page}
            totalPages={usersPage.totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>

      <DeleteUserModal
        isOpen={isDeleteOpen}
        user={selectedUser}
        onClose={() => setIsDeleteOpen(false)}
        onCancel={() => {
          setIsDeleteOpen(false);
          navigate(location.pathname, {
            replace: true,
            state: { type: "info", message: "Delete operation cancelled" },
          });
        }}
        onConfirm={() => {
          if (selectedUser) {
            handleDelete(selectedUser.id);
            setIsDeleteOpen(false);
          }
        }}
      />
    </div>
  );
};

export default AdminListUsers;
