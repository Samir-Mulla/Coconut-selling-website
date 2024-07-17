import React from "react";
import NavItem from "./NavItem";
import {
  FaHome,
  FaBox,
  FaStoreAlt,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={toggleSidebar}
        aria-label="Close menu"
        className="absolute top-4 right-4 text-black text-2xl"
      >
        <FaTimes size={24} />
      </button>
      <div className="flex flex-col mt-8 space-y-8 p-8">
        <NavItem
          to="/"
          text="Home"
          icon={<FaHome size={24} />}
          onClick={toggleSidebar}
        />
        <NavItem
          to="/products"
          text="Products"
          icon={<FaBox size={24} />}
          onClick={toggleSidebar}
        />
        <NavItem
          to="/store"
          text="Store"
          icon={<FaStoreAlt size={24} />}
          onClick={toggleSidebar}
        />
        <NavItem
          to="/contact"
          text="Contact"
          icon={<FaEnvelope size={24} />}
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default Sidebar;
