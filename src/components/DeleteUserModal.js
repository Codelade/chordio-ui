import RoleBadge from "./RoleBadge";
import Modal from "./Modal";

const DeleteUserModal = ({ isOpen, user, onClose, onConfirm, onCancel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete User"
      footer={
        <>
          <button
            onClick={onConfirm}
            disabled={!user}
            className="w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Delete
          </button>
          <button
            onClick={onCancel || onClose}
            className="w-full py-2 bg-slate-200 text-slate-900 rounded-lg font-medium hover:bg-slate-300 transition dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            Cancel
          </button>
        </>
      }
    >
      <p className="text-slate-700 dark:text-slate-200">
        You are about to delete:
      </p>

      <div className="mt-3 p-3 bg-slate-100 dark:bg-slate-950 rounded-lg text-sm text-slate-800 dark:text-slate-100 space-y-2">
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

      <p className="mt-4 text-red-600 font-medium dark:text-red-300">
        This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteUserModal;
