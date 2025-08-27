import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path ? "text-white font-bold" : "text-[#ffffffb1]";

  return (
    <header className="absolute top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] md:p-[1.25vw] p-4 border backdrop-blur-[80px] rounded-2xl bg-[#ffffff0d] border-[#ffffff40] shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-white  md:text-[1.5vw] text-xl md:text-2xl font-bold">
          VISION UI FREE
        </h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex  md:gap-[2.5vw] gap-8 items-center">
          <Link
            to="/"
            className={`flex  md:gap-[.75vw] gap-2 items-center hover:text-white ${isActive(
              "/"
            )}`}
          >
            <AiOutlineCodeSandbox />
            DASHBOARD
          </Link>

          <Link
            to="/profile"
            className={`flex  md:gap-[.75vw] gap-2 items-center hover:text-white ${isActive(
              "/profile"
            )}`}
          >
            <FaUser />
            PROFILE
          </Link>

          <Link
            to="/signup"
            className={`flex  md:gap-[.75vw] gap-2 items-center hover:text-white ${isActive(
              "/signup"
            )}`}
          >
            <FaUserCircle />
            SIGN UP
          </Link>

          <Link
            to="/signin"
            className={`flex  md:gap-[.75vw] gap-2 items-center hover:text-white ${isActive(
              "/signin"
            )}`}
          >
            <IoKey />
            SIGN IN
          </Link>
        </nav>

        {/* Download Button (Desktop only) */}
        <button className="hidden md:block bg-blue-500 text-white md:px-[1.5vw] px-5 md:py-[.75vw] py-2 rounded-2xl hover:font-bold hover:bg-blue-600">
          Free Download
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white  md:text-[1.5vw] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:mt-[1.25vw] mt-4 flex flex-col  md:gap-[1.25vw] gap-4 md:hidden text-white">
          <Link
            to="/"
            className={`flex  md:gap-[.75vw] gap-2 items-center ${isActive(
              "/"
            )}`}
            onClick={() => setMenuOpen(false)}
          >
            <AiOutlineCodeSandbox />
            DASHBOARD
          </Link>

          <Link
            to="/profile"
            className={`flex  md:gap-[.75vw] gap-2 items-center ${isActive(
              "/profile"
            )}`}
            onClick={() => setMenuOpen(false)}
          >
            <FaUser />
            PROFILE
          </Link>

          <Link
            to="/signup"
            className={`flex  md:gap-[.75vw] gap-2 items-center ${isActive(
              "/signup"
            )}`}
            onClick={() => setMenuOpen(false)}
          >
            <FaUserCircle />
            SIGN UP
          </Link>

          <Link
            to="/signin"
            className={`flex  md:gap-[.75vw] gap-2 items-center ${isActive(
              "/signin"
            )}`}
            onClick={() => setMenuOpen(false)}
          >
            <IoKey />
            SIGN IN
          </Link>

          <button className="bg-blue-500 text-white md:px-[1.25vw] px-4 md:py-[.75vw] py-2 rounded-2xl hover:bg-blue-600">
            Free Download
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
