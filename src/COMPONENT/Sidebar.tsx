import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BiBarChart } from "react-icons/bi";
import { FaWallet, FaUserAlt } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { FaFile } from "react-icons/fa6";
import { IoIosRocket, IoIosArrowBack } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { icon: <IoHome />, label: "Dashboard", path: "/" },
    { icon: <BiBarChart />, label: "Tables", path: "/tables" },
    { icon: <FaWallet />, label: "Billing", path: "/billing" },
    { icon: <AiFillTool />, label: "RTL", path: "/rtl" },
  ];

  const accountItems = [
    { icon: <FaUserAlt />, label: "Profile", path: "/profile" },
    { icon: <FaFile />, label: "Sign In", path: "/signin" },
    { icon: <IoIosRocket />, label: "Sign Up", path: "/signup" },
  ];

  return (
    <div
      className={`
        fixed md:static top-0 left-0 h-screen w-full z-50
        bg-[linear-gradient(111.84deg,rgba(6,11,38,0.94)_59.3%,rgba(26,31,55,0)_100%)]
        backdrop-blur-[120px] md:p-[1.75vw] p-6  text-white flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Close button for mobile */}
      <div className="flex justify-end md:hidden">
        <IoIosArrowBack
          className="text-3xl cursor-pointer hover:text-gray-300"
          onClick={() => setSidebarOpen(false)}
        />
      </div>

      {/* Menu items */}
      <div>
        <h2 className="md:text-[1.25vw] text-center text-xl font-bold">
          VISION UI FREE
        </h2>
        <div className="h-[1px] md:h-[.05vw] w-full bg-gradient-to-r from-transparent via-white to-transparent md:my-[1vw] my-3" />

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center  md:gap-[1vw] gap-3 md:py-[.75vw] py-2 md:px-[1vw] px-3 rounded-2xl md:text-[1vw] text-xs transition 
              ${isActive ? "bg-[#0F1535] font-bold" : "hover:bg-[#1a1f37]"}`
            }
          >
            <span className="bg-blue-700  md:text-[1vw]  text-base md:p-[.4vw] p-1 rounded-xl">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}

        <h2 className="md:text-[1vw] text-sm md:my-[.75vw] my-4">
          ACCOUNT PAGES
        </h2>
        {accountItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="flex items-center  md:gap-[1vw] gap-3 md:py-[.75vw] py-2 md:px-[1vw] px-3 md:text-[1vw] text-xs hover:bg-[#1a1f37] rounded-2xl"
          >
            <span className="bg-blue-700 md:text-[1vw]  text-base md:p-[.4vw] p-1  rounded-xl">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="bg-[url('/richard-horvath-_nWaeTF6qo0-unsplash%201.png')] w-full aspect-video bg-cover bg-center text-white md:p-[1.75vw] p-6  rounded-lg">
        <HiQuestionMarkCircle className="md:text-[2.5vw] text-4xl md:mb-[.75vw] mb-2 text-blue-700 bg-white md:p-[.75vw] p-2 rounded" />
        <h2 className="md:text-[1vw] text-sm font-semibold md:py-[.75vw] py-2">
          Need help?
        </h2>
        <p className="md:text-[.8vw] text-xs ">Please check our docs</p>
      </div>
    </div>
  );
};

export default Sidebar;
