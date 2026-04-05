import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages === 0) return null;

  const windowSize = 5;
  const windowStart = Math.floor(page / windowSize) * windowSize;
  const windowEnd = Math.min(windowStart + windowSize - 1, totalPages - 1);

  const pages = [];
  for (let i = windowStart; i <= windowEnd; i++) pages.push(i);

  return (
    <div className="flex items-center gap-1">
      {/* First */}
      <button
        disabled={page === 0}
        onClick={() => onPageChange(0)}
        className={`px-3 py-1.5 rounded-md text-sm border ${
          page === 0
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-gray-700"
        }`}
      >
        ⏮
      </button>

      {/* Prev */}
      <button
        disabled={page === 0}
        onClick={() => onPageChange(page - 1)}
        className={`px-3 py-1.5 rounded-md text-sm border ${
          page === 0
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-gray-700"
        }`}
      >
        ◀
      </button>

      {/* Page numbers */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1.5 rounded-md text-sm border ${
            p === page
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {p + 1}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={page === totalPages - 1}
        onClick={() => onPageChange(page + 1)}
        className={`px-3 py-1.5 rounded-md text-sm border ${
          page === totalPages - 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-gray-700"
        }`}
      >
        ▶
      </button>

      {/* Last */}
      <button
        disabled={page === totalPages - 1}
        onClick={() => onPageChange(totalPages - 1)}
        className={`px-3 py-1.5 rounded-md text-sm border ${
          page === totalPages - 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-gray-700"
        }`}
      >
        ⏭
      </button>
    </div>
  );
};

export default Pagination;
