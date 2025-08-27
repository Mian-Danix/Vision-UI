import React from "react";
import { MdVerified } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import { SiAdobexd, SiLinkedin } from "react-icons/si";
import { FaAtlassian, FaSpotify } from "react-icons/fa";
import { AiOutlineSlack, AiTwotoneAppstore } from "react-icons/ai";
import OrderOverview from "./Orders";
import Lines from "./Lines";

interface ProjectRowProps {
  icon: React.ReactNode;
  title: string;
  members: string;
  budget: string;
  completion: string;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  icon,
  title,
  members,
  budget,
  completion,
}) => {
  return (
    <div className="grid grid-cols-5 md:py-[.4vw] py-1 text-[10px] sm:text-sm md:text-base text-white items-center">
      <div className="flex items-center md:text-[1.1vw]  md:gap-[.75vw] gap-2 col-span-2">
        {icon}
        <span className="truncate">{title}</span>
      </div>
      <div className="flex md:h-[2vw] ">
        <img
          src={members}
          alt="members"
          className=" object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <h2 className="md:text-[1vw] text-base">{budget}</h2>
      <div className="w-[80%]">
        <h2 className="md:text-[1vw] text-base">{completion}</h2>
        <Lines width={60} />
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  const projectData: ProjectRowProps[] = [
    {
      icon: <SiAdobexd className="text-[#FF61F6]" />,
      title: "Chakra Soft UI Version",
      members: "/Members.png",
      budget: "$14,000",
      completion: "60%",
    },
    {
      icon: <FaAtlassian className="text-[#2684FF]" />,
      title: "Add Progress Track",
      members: "/Avatars Group 3 (Horizontal).png",
      budget: "$3,000",
      completion: "10%",
    },
    {
      icon: <AiOutlineSlack className="text-[#E01E5A]" />,
      title: "Fix Platform Errors",
      members: "/Avatars Group 3 (Horizontal).png",
      budget: "Not set",
      completion: "100%",
    },
    {
      icon: <FaSpotify className="text-green-700" />,
      title: "Launch our Mobile App",
      members: "/Members.png",
      budget: "$32,000",
      completion: "100%",
    },
    {
      icon: <AiTwotoneAppstore className="text-[#2684FF]" />,
      title: "Add the New Pricing Page",
      members: "/Members.png",
      budget: "$400",
      completion: "25%",
    },
    {
      icon: <SiLinkedin className="text-[#DC395F]" />,
      title: "Redesign New Online Shop",
      members: "/Avatars Group 3 (Horizontal).png",
      budget: "$7,600",
      completion: "40%",
    },
  ];

  return (
    <section className="flex flex-col md:grid md:grid-cols-9  md:gap-[1.25vw] gap-4 md:m-[1.25vw] m-4">
      <div className="md:col-span-6 bg-[linear-gradient(126.97deg,rgba(6,11,40,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)] md:p-[1.25vw] p-4 sm:p-6 rounded-2xl shadow-md">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center  md:gap-[.75vw] gap-2">
          <div>
            <h2 className="text-white  md:text-[1.4vw] text-lg sm:text-xl font-semibold">
              Projects
            </h2>
            <div className="flex items-center  md:gap-[.75vw] gap-2 text-gray-300  md:text-[1vw] text-xs sm:text-sm">
              <MdVerified className="text-green-600" />
              <p>30 done this month</p>
            </div>
          </div>
          <IoEllipsisVertical className="text-xl sm:text-2xl text-gray-300 cursor-pointer" />
        </header>

        <div className="md:mt-[1.25vw] mt-4 w-full">
          <div className="grid grid-cols-5 md:text-[1vw] sm:text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wide">
            <h2 className="col-span-2 text-left">Companies</h2>
            <h2>Members</h2>
            <h2>Budget</h2>
            <h2>Completion</h2>
          </div>
          <hr className="border-gray-600 md:my-[1vw] my-3" />

          {projectData.map((proj, i) => (
            <React.Fragment key={i}>
              <ProjectRow {...proj} />
              {i !== projectData.length - 1 && (
                <hr className="border-gray-600 md:my-[.4vw] my-1" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="md:col-span-3 w-full">
        <OrderOverview />
      </div>
    </section>
  );
};

export default Project;
