import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { FaUserAlt, FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Page titles for breadcrumb / heading
  const routeTitles: Record<string, { parent: string; title: string }> = {
    "/": { parent: "Pages", title: "Dashboard" },
    "/tables": { parent: "Pages", title: "Tables" },
    "/profile": { parent: "Pages", title: "Profile" },
    "/billing": { parent: "Pages", title: "Billing" },
    "/signin": { parent: "Auth", title: "Sign In" },
    "/signup": { parent: "Auth", title: "Sign Up" },
  };

  const current = routeTitles[location.pathname] || {
    parent: "Pages",
    title: "Unknown",
  };

  const routes = [
    { name: "Dashboard", path: "/" },
    { name: "Table", path: "/tables" },
    { name: "Billing", path: "/billing" },
    { name: "Profile", path: "/profile" },
    { name: "Sign In", path: "/signin" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className="flex items-center justify-between w-full md:h-[5vw] h-[10vh] 
        md:px-[1.75vw] px-6 md:py-[1.25vw] py-4  
        bg-[linear-gradient(126.97deg,rgba(6,11,38,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)]
        backdrop-blur-md shadow-md"
      >
        {/* Breadcrumb + Title */}
        <div>
          <h2 className="text-gray-400 md:text-[1.1vw] text-sm sm:text-base">
            <span className="text-gray-500">{current.parent}</span> /{" "}
            {current.title}
          </h2>
          <h3 className="text-white font-bold md:text-[1.4vw] text-lg sm:text-xl">
            {current.title}
          </h3>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center md:gap-[1.75vw] gap-6 text-gray-400 md:text-[1.4vw] text-lg">
          {/* Search Box */}
          <div
            className="bg-[#0F1535] flex items-center md:gap-[.75vw] gap-2 rounded-xl 
          md:px-[1vw] px-3 sm:px-4 md:py-[.4vw] py-1"
          >
            <LiaSearchSolid className="text-gray-400 md:text-[1.3vw] text-xl" />
            <input
              type="text"
              placeholder="Type here..."
              className="bg-transparent md:text-[1vw] text-sm sm:text-base 
              text-white placeholder-gray-400 outline-none md:w-[10vw] w-20 sm:w-40"
            />
          </div>

          {/* Icons (hidden on small) */}
          <div className="hidden sm:flex items-center md:gap-[1.25vw] gap-4">
            <FaUserAlt className="cursor-pointer hover:text-white transition md:text-[1vw] text-sm sm:text-base" />
            <h3 className="cursor-pointer hover:text-white md:text-[1vw] text-sm sm:text-base">
              Sign In
            </h3>
            <IoSettingsSharp className="cursor-pointer hover:text-white transition md:text-[1vw] text-sm sm:text-base" />
            <FaBell className="cursor-pointer hover:text-white transition md:text-[1vw] text-sm sm:text-base" />
          </div>

          {/* Mobile Menu Button */}
          <HiMenuAlt3
            className="text-white md:text-[1.75vw] text-3xl sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </nav>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0F1535] text-white z-50 
        md:p-[1.75vw] p-6 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-gray-400 hover:text-white md:mb-[1.75vw] mb-6"
        >
          ✕ Close
        </button>

        <ul className="space-y-4">
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                to={route.path}
                onClick={() => setSidebarOpen(false)} // close sidebar on link click
                className={`cursor-pointer hover:text-blue-400 ${
                  location.pathname === route.path
                    ? "text-blue-400 font-semibold"
                    : ""
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
