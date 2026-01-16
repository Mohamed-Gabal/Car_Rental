import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";
import { menuLinks } from "../assets/assets";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  // MENU
  const [openMenu, setOpenMenu] = useState(false);
  // NAVIGATE
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" && "bg-light"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="logo" />
        <p className="text-black font-semibold">CarRental</p>
      </Link>
      {/* LINKS */}
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4
      max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 transition-all duration-300 z-50 ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      } ${openMenu ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
        {/* SEARCH */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            placeholder="Search Products"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          />
          <img src={Search} alt="search" />
        </div>
        {/* DASHBOARD AND LOGIN */}
        <div className="flex max-sm:flex-col items-center sm:items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin("true")}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
      {/* MENU */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="sm:hidden cursor-pointer"
        aria-label="menu"
      >
        {openMenu ? <IoMdClose className="w-6 h-6"/> : <CgMenuRightAlt className="w-6 h-6"/>}
      </button>
    </div>
  );
};

export default Navbar;
