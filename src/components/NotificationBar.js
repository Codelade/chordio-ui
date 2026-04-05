import React from "react";

const NotificationBar = ({ type, message }) => {
  const styles = {
    success: "bg-green-100 border-green-300 text-green-800",
    error: "bg-red-100 border-red-300 text-red-800",
    warning: "bg-yellow-100 border-yellow-300 text-yellow-800",
    info: "bg-blue-100 border-blue-300 text-blue-800",
  };

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  // Default
  if (!message) {
    return (
      <div className="h-12 mb-4 rounded-md border border-gray-300 bg-gray-100 px-4 flex items-center">
        <span className="text-base text-gray-700 mr-2">Notifications:</span>
        <span className="text-base text-gray-600 opacity-80">
          The status of your create, update, read or delete operation will
          display here
        </span>
      </div>
    );
  }

  // Active
  return (
    <div
      className={`h-12 mb-4 rounded-md border px-4 flex items-center ${styles[type]}`}
    >
      <span className="text-base mr-2">Notifications:</span>
      <span className="text-base mr-1 opacity-80">{icons[type]}</span>
      <span className="text-base opacity-80">{message}</span>
    </div>
  );
};

export default NotificationBar;
