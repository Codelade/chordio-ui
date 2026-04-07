import React from "react";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-50 w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-900/20 p-6 border border-slate-200 dark:border-slate-800">
        {title && (
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
            {title}
          </h2>
        )}

        <div className="text-slate-700 dark:text-slate-200 mb-4">
          {children}
        </div>

        {footer && <div className="flex flex-col gap-2">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
