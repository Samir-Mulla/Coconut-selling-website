import React from "react";

const Input = ({ id, name, type, label, value, onChange, error, pattern }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 font-bold mb-2 text-lg"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded focus:outline-none focus:border-lime-600`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
