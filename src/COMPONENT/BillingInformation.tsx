import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";

const BillingInformation: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b1437] to-[#092052] col-span-4 md:p-[1.25vw]  p-4 w-full rounded-lg text-white">
      <h2 className="md:text-[1.2vw] text-lg font-semibold md:mb-[1.25vw] mb-4">
        Billing Information
      </h2>
      <div className="space-y-4 md:space-y-[1.25vw]">
        <div className="flex justify-between bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:p-[1.25vw] p-4 rounded-lg">
          <div>
            <h3 className="md:text-[.8vw] text-base font-medium md:mb-[.75vw] mb-2">
              Oliver Liam
            </h3>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              Company Name: Viking Burrito
            </p>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              Email Address: oliver@burrito.com
            </p>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              VAT Number: FRB1235476
            </p>
          </div>
          <div className="flex justify-end md:mt-[.75vw] mt-2 space-x-2">
            <div className="text-red-500 cursor-pointer flex  md:gap-[.4vw] gap-1 ">
              <MdDelete className=" md:mt-[.25vw] md:text-[1vw] text-base" />
              <span className="md:text-[1vw] text-xs ">DELETE</span>
            </div>
            <div className="text-gray-300 cursor-pointer flex  md:gap-[.4vw] gap-1 ">
              <MdModeEdit className=" md:text-[1vw] text-sm md:mt-[.25vw]" />
              <span className="md:text-[1vw] text-xs ">EDIT</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:p-[1.25vw] p-4 rounded-lg">
          <div>
            <h3 className="md:text-[.8vw] text-base font-medium md:mb-[.75vw] mb-2">
              Oliver Liam
            </h3>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              Company Name: Viking Burrito
            </p>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              Email Address: oliver@burrito.com
            </p>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              VAT Number: FRB1235476
            </p>
          </div>
          <div className="flex justify-end md:mt-[.75vw] mt-2 space-x-2">
            <div className="text-red-500 cursor-pointer flex  md:gap-[.4vw] gap-1 ">
              <MdDelete className=" md:mt-[.25vw] md:text-[1vw] text-base" />
              <span className="md:text-[1vw] text-xs ">DELETE</span>
            </div>
            <div className="text-gray-300 cursor-pointer flex  md:gap-[.4vw] gap-1 ">
              <MdModeEdit className=" md:text-[1vw] text-sm md:mt-[.25vw]" />
              <span className="md:text-[1vw] text-xs ">EDIT</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:p-[1.25vw] p-4 rounded-lg">
          <div>
            <h3 className="md:text-[.8vw] text-base font-medium md:mb-[.75vw] mb-2">
              Oliver Liam
            </h3>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              Company Name: Viking Burrito
            </p>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              Email Address: oliver@burrito.com
            </p>
            <p className="md:text-[.75vw] text-sm text-gray-400 ">
              VAT Number: FRB1235476
            </p>
          </div>
          <div className="flex justify-end md:mt-[.75vw] mt-2 space-x-2">
            <div className="text-red-500 cursor-pointer flex  md:gap-[.4vw] gap-1 ">
              <MdDelete className=" md:mt-[.25vw] md:text-[1vw] text-base" />
              <span className="md:text-[1vw] text-xs ">DELETE</span>
            </div>
            <div className="text-gray-300 cursor-pointer flex  md:gap-[.4vw] gap-1 ">
              <MdModeEdit className=" md:text-[1vw] text-sm md:mt-[.25vw]" />
              <span className="md:text-[1vw] text-xs ">EDIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInformation;
