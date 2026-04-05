import React from "react";
import RoleBadge from "./RoleBadge";
import Modal from "./Modal";

const DeleteUserModal = ({ isOpen, user, onClose, onConfirm, onCancel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete User?"
      footer={
        <>
          <button
            onClick={onConfirm}
            disabled={!user}
            className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Confirm Delete
          </button>
          <button
            onClick={onCancel || onClose}
            className="w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
          >
            Cancel
          </button>
        </>
      }
    >
      <p className="text-gray-700">You are about to delete:</p>

      <div className="mt-3 p-3 bg-gray-100 rounded-lg text-sm text-gray-800 space-y-2">
        <p>
          <span className="font-semibold">ID:</span> {user?.id}
        </p>
        <p>
          <span className="font-semibold">Username:</span> {user?.userName}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Role:</span>
          <RoleBadge role={user?.role} />
        </p>
      </div>

      <p className="mt-4 text-red-600 font-medium">
        This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteUserModal;
