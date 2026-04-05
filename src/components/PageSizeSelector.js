import React from "react";

const PageSizeSelector = ({ size, onChange }) => {
  const options = [5, 10, 15, 30];

  return (
    <div className="flex items-center gap-2">
      {options.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={`px-3 py-1.5 rounded-md text-sm border ${
            size === s
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default PageSizeSelector;
