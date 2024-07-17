import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact", { state: { product } });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded w-full md:w-auto"
    >
      {text}
    </button>
  );
};

export default Button;
