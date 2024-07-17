import React from "react";
import NavItem from "./NavItem";
import { FaHome, FaBox, FaStoreAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="hidden md:flex space-x-10">
      <NavItem to="/" text="Home" icon={<FaHome size={24} />} />
      <NavItem to="/products" text="Products" icon={<FaBox size={24} />} />
      <NavItem to="/store" text="Store" icon={<FaStoreAlt size={24} />} />
      <NavItem to="/contact" text="Contact" icon={<FaEnvelope size={24} />} />
    </div>
  );
};

export default Navbar;
