import React from "react";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal Container */}
      <div
        className="
        relative z-50 w-full max-w-md 
        bg-white rounded-xl shadow-lg 
        p-5
      "
      >
        {/* Title */}
        {title && (
          <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
        )}

        {/* Content */}
        <div className="text-gray-700 mb-4">{children}</div>

        {/* Footer */}
        {footer && <div className="flex flex-col gap-2">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
