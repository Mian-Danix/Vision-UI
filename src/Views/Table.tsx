import React from "react";
import { AiOutlineSlack, AiTwotoneAppstore } from "react-icons/ai";
import { FaAtlassian, FaSpotify } from "react-icons/fa6";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { SiAdobexd } from "react-icons/si";

interface ProjectRowProps {
  icon: React.ReactNode;
  title: string;
  budget: string;
  status: string;
  completion: string;
  button: React.ReactNode;
}
interface ProjectRowProps2 {
  src: string;
  name: string;
  gmail: string;
  role: string;
  dept: string;

  status: React.ReactNode;
  employed: string;
  button: React.ReactNode;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  icon,
  title,
  budget,
  status,
  completion,
  button,
}) => {
  return (
    <div className="grid grid-cols-6 md:py-[1vw] py-3 md:text-[1vw] text-[10px]  text-white items-center">
      <div className="flex items-center md:text-[1.5vw] text-xl  md:gap-[.75vw] gap-2 col-span-2">
        {icon}
        <span className="truncate  md:text-[1vw] text-[10px]">{title}</span>
      </div>
      <h2 className="text-center">{budget}</h2>
      <h2 className="text-center">{status}</h2>
      <h2 className="text-center">{completion}</h2>
      <div className="flex justify-center">{button}</div>
    </div>
  );
};
const ProjectRow2: React.FC<ProjectRowProps2> = ({
  src,
  name,
  gmail,
  role,
  dept,
  status,
  employed,
  button,
}) => {
  return (
    <div className="grid grid-cols-6 md:py-[1vw] py-3 md:text-[1vw] text-[10px] text-white items-center">
      <div className="flex items-center  md:gap-[.75vw] gap-2 col-span-2">
        <img
          src={src}
          alt=""
          className="md:h-[3vw] h-10  md:w-[3vw] w-10  rounded-md object-cover"
        />
        <div>
          <h2 className="truncate">{name}</h2>
          <h2 className="truncate">{gmail}</h2>
        </div>
      </div>
      <div className="flex flex-col ">
        <h2 className="">{role}</h2>
        <h2 className="  md:text-[1.1vw] text-sm text-gray-400">{dept}</h2>
      </div>
      <h2>{status}</h2>
      <h2>{employed}</h2>

      <div className="flex justify-center">{button}</div>
    </div>
  );
};
const Table = () => {
  const projectData: ProjectRowProps[] = [
    {
      icon: <SiAdobexd className="text-[#FF61F6]" />,
      title: "Chakra Soft UI Version",
      budget: "$14,000",
      status: "Working",
      completion: "60%",
      button: (
        <IoEllipsisVerticalOutline className="text-xl sm:text-2xl text-gray-300 cursor-pointer" />
      ),
    },
    {
      icon: <FaAtlassian className="text-[#2684FF]" />,
      title: "Add Progress Track",
      budget: "$3,000",
      status: "Canceled",
      completion: "10%",
      button: (
        <IoEllipsisVerticalOutline className="text-xl sm:text-2xl text-gray-300 cursor-pointer" />
      ),
    },
    {
      icon: <AiOutlineSlack className="text-[#E01E5A]" />,
      title: "Fix Platform Errors",
      budget: "Not set",
      status: "Done",
      completion: "100%",
      button: (
        <IoEllipsisVerticalOutline className="text-xl sm:text-2xl text-gray-300 cursor-pointer" />
      ),
    },
    {
      icon: <FaSpotify className="text-green-700" />,
      title: "Launch our Mobile App",
      budget: "$32,000",
      status: "Done",
      completion: "100%",
      button: (
        <IoEllipsisVerticalOutline className="text-xl sm:text-2xl text-gray-300 cursor-pointer" />
      ),
    },
    {
      icon: <AiTwotoneAppstore className="text-[#2684FF]" />,
      title: "Add the New Pricing Page",
      budget: "$400",
      status: "Working",
      completion: "25%",
      button: (
        <IoEllipsisVerticalOutline className="text-xl sm:text-2xl text-gray-300 cursor-pointer" />
      ),
    },
  ];
  const projectData2: ProjectRowProps2[] = [
    {
      src: "female.png",
      name: "Esthera Jackson",
      gmail: "esthera@simmmple.com",
      role: "Manager",
      dept: "Organization",
      status: (
        <button
          type="button"
          className="md:px-[.75vw] px-2  md:py-[.4vw] py-1 rounded bg-green-600"
        >
          Online
        </button>
      ),
      employed: "14/06/21",
      button: <button type="button">Edit</button>,
    },
    {
      src: "alexa.png",
      gmail: "alexa@simmmple.com",
      name: "Alexa Liras",
      role: "Programmer",
      dept: "Developer",

      status: (
        <button
          type="button"
          className="md:px-[.75vw] px-2  md:py-[.4vw] py-1 rounded outline-1"
        >
          Offline
        </button>
      ),

      employed: "14/06/21",
      button: <button type="button">Edit</button>,
    },

    {
      src: "micheal.png",
      gmail: "laurent@simmmple.com",
      name: "Laurent Michael",
      dept: "Projects",
      role: "Executive",
      status: (
        <button
          type="button"
          className="md:px-[.75vw] px-2  md:py-[.4vw] py-1 rounded bg-green-600"
        >
          Online
        </button>
      ),
      employed: "14/06/21",
      button: <button type="button">Edit</button>,
    },
    {
      src: "hill.png",
      gmail: "freduardo@simmmple.com",
      name: "Freduardo Hill",
      dept: "Organization",
      role: "Manager",
      status: (
        <button
          type="button"
          className="md:px-[.75vw] px-2  md:py-[.4vw] py-1 rounded bg-green-600"
        >
          Online
        </button>
      ),
      employed: "14/06/21",
      button: <button type="button">Edit</button>,
    },
    {
      src: "mark.png",
      gmail: "mark@simmmple.com",
      name: "Mark Wilson",
      dept: "UI/UX Design",
      role: "Designer",
      status: (
        <button
          type="button"
          className="md:px-[.75vw] px-2  md:py-[.4vw] py-1 rounded outline-1"
        >
          Offline
        </button>
      ),
      employed: "14/06/21",
      button: <button type="button"> Edit</button>,
    },
  ];

  return (
    <section>
      <div className="md:mt-[1.25vw] mb-4 md:col-span-6 bg-[linear-gradient(126.97deg,rgba(6,11,40,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)] md:p-[1.25vw] p-4 sm:p-6 rounded-2xl shadow-md">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center  md:gap-[.75vw] gap-2">
          <div>
            <h2 className="text-white  md:text-[1.4vw] text-lg sm:text-xl font-semibold">
              Authors Table
            </h2>
            <div className="flex items-center  md:gap-[.75vw] gap-2 text-gray-300  md:text-[1vw] text-xs sm:text-sm"></div>
          </div>
        </header>

        <div className="md:mt-[1.25vw] mt-4 w-full">
          <div className="grid grid-cols-6 md:text-[1vw] sm:text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wide">
            <h2 className="col-span-2 text-left">AUTHOR</h2>
            <h2>Function</h2>
            <h2>Status</h2>
            <h2>Employed</h2>
          </div>{" "}
          <hr className="border-gray-600 md:my-[1vw] my-3" />
          {projectData2.map((proj, i) => (
            <React.Fragment key={i}>
              <ProjectRow2 {...proj} />
              {i !== projectData.length - 1 && (
                <hr className="border-gray-600 md:my-[1vw] my-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

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
        </header>

        <div className="md:mt-[1.25vw] mt-4 w-full">
          <div className="grid grid-cols-6 md:text-[1vw] sm:text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wide">
            <h2 className="col-span-2 text-left">Companies</h2>
            <h2 className="text-center">Budget</h2>
            <h2 className="text-center">Status</h2>
            <h2 className="text-center">Completion</h2>
            <h2 className="text-center"></h2>
          </div>
          <hr className="border-gray-600 md:my-[1vw] my-3" />

          {projectData.map((proj, i) => (
            <React.Fragment key={i}>
              <ProjectRow {...proj} />
              {i !== projectData.length - 1 && (
                <hr className="border-gray-600 md:my-[1vw] my-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Table;
