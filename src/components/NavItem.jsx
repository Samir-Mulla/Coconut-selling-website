import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, text, icon, onClick }) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center space-y-1 hover:text-lime-600"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm">{text}</span>
    </Link>
  );
};

export default NavItem;
