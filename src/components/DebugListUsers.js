import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../services/DebugUserService";
import useUsersSearch from "../hooks/useUsersSearch";

import NotificationBar from "./NotificationBar";
import DeleteUserModal from "./DeleteUserModal";
import Pagination from "./Pagination";
import PageSizeSelector from "./PageSizeSelector";
import ToolBar from "./ToolBar";
import UserTable from "./UserTable";

const DebugListUsers = () => {
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
        console.error("Failed to delete user", error);
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
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading users...</p>
      </div>
    );
  }

  if (!usersPage) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Failed to load users.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex justify-center bg-gray-100 px-4 py-6">
      <div className="w-full max-w-6xl space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-800">
            Debug User List
          </h1>

          <ToolBar
            searchTerm={search}
            setSearchTerm={setSearchTerm}
            onCreate={() => navigate("/debug/createUser")}
          />
        </div>

        <NotificationBar
          type={location.state?.type}
          message={location.state?.message}
        />

        <UserTable
          users={usersPage.content}
          sortBy={sortBy}
          direction={direction}
          onSort={handleSort}
          onEdit={(id) => navigate(`/debug/editUser/${id}`)}
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
            state: {
              type: "info",
              message: "Delete operation cancelled",
            },
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

export default DebugListUsers;
