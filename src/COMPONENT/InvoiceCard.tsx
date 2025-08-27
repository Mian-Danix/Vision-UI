import React from "react";

import { MdModeEdit } from "react-icons/md";
import { RiMastercardFill } from "react-icons/ri";
import { SiVisa } from "react-icons/si";

const PaymentMethod: React.FC = () => {
  return (
    <div className="bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:p-[1.25vw] p-4 md:mt-[.4vw] mt-1 rounded-lg text-white">
      <div className="flex justify-between items-center md:mb-[1.25vw] mb-4">
        <h2 className="md:text-[1.4vw] text-lg font-semibold">
          Payment Method
        </h2>
        <button className="bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50  text-white md:text-[1.2vw] text-base font-semibold md:py-[.75vw] py-2 md:px-[1.25vw] px-4 rounded">
          ADD A NEW CARD
        </button>
      </div>
      <div className="md:flex items-center  md:gap-[2.5vw] gap-8">
        <div className="flex w-full items-center justify-between bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:p-[1vw] p-3 rounded-lg">
          <div className="flex items-center md:my-[1.25vw] my-4">
            <RiMastercardFill className="text-white  md:text-[1.8vw] text-4xl md:mr-[.75vw] mr-2" />
            <span className="md:text-[1.1vw] text-sm">
              {" "}
              7812 2139 0823 XXXX
            </span>
          </div>
          <MdModeEdit className="md:mt-[.4vw] mt-1 md:text-[1.1vw] text-sm" />
        </div>
        <div className="flex w-full items-center justify-between bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:p-[1vw] p-3 rounded-lg">
          <div className="flex items-center md:my-[1.25vw] my-4">
            <SiVisa className="md:text-[2vw] text-4xl  md:mr-[1.25vw] mr-4 " />{" "}
            <span className="md:text-[1.1vw] text-sm">
              {" "}
              7812 2139 0823 XXXX
            </span>
          </div>
          <MdModeEdit className="md:mt-[.4vw] mt-1 md:text-[1.1vw] text-sm" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
