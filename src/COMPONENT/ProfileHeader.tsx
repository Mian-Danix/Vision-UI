import React from "react";
import { FiEdit2 } from "react-icons/fi";
interface UserProfileHeaderProps {
  avatarUrl?: string;
  userName: string;
  userEmail: string;
}
const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  avatarUrl = "https://placehold.co/80x80/2C5282/ffffff?text=U",
  userName,
  userEmail,
}) => {
  return (
    <div className="col-span-4 md:flex hidden items-center justify-between bg-gradient-to-br from-[rgb(2,6,28)] via-transparent to-[rgba(8,12,32,0.74)] backdrop-blur-[120px] transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)] rounded-xl shadow-lg md:p-[1.25vw] p-4  w-full ">
      <div className="flex items-center space-x-4 md:space-x-[1.25vw]">
        <div className="relative md:w-[5vw] w-20 md:h-[5vw] h-20 rounded-xl overflow-hidden border-2 border-blue-500">
          <img
            src={avatarUrl}
            alt={`${userName}'s avatar`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/80x80/2C5282/ffffff?text=U";
            }}
          />
          <div className="absolute bottom-0 right-0 bg-blue-600 md:p-[.4vw] p-1  rounded-tl-lg cursor-pointer hover:bg-blue-700 transition-colors">
            <FiEdit2 className="md:text-[1.3vw] text-base text-white" />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl md:text-[1.4vw] font-bold text-white">
            {userName}
          </h2>
          <p className="text-sm md:text-[1vw] text-gray-400">{userEmail}</p>
        </div>
      </div>

      <div className="flex space-x-2 md:space-x-4">
        <button className="md:px-[1.25vw] px-4 md:py-[.75vw] py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors  md:text-[1.1vw] text-sm md:text-base">
          OVERVIEW
        </button>
        <button className="md:px-[1.25vw] px-4 md:py-[.75vw] py-2 text-gray-300 font-semibold rounded-lg hover:text-white hover:bg-gray-700 transition-colors  md:text-[1.1vw] text-sm md:text-base">
          TEAMS
        </button>
        <button className="md:px-[1.25vw] px-4 md:py-[.75vw] py-2 text-gray-300 font-semibold rounded-lg hover:text-white hover:bg-gray-700 transition-colors  md:text-[1.1vw] text-sm md:text-base">
          PROJECTS
        </button>
      </div>
    </div>
  );
};

export default UserProfileHeader;
