import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = ({ title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="text-black p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center">
        <Logo />
        <h1 className="text-xl font-extrabold">{title}</h1>
      </div>

      <button
        onClick={toggleSidebar}
        aria-label="Toggle menu"
        className="md:hidden"
      >
        <FaBars className="text-2xl" />
      </button>

      <Navbar />

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
