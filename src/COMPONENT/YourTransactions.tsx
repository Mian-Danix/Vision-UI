import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";

const Transactions: React.FC = () => {
  return (
    <div className="bg-gradient-to-b  from-[#0b1437] to-[#092052] bg-opacity-50 md:col-span-3 col-span-4 md:p-[1.25vw] p-4 rounded-lg text-white">
      <div className="flex justify-between items-center md:mb-[1.25vw] mb-4">
        <h2 className="md:text-[1.2vw] text-lg font-semibold">
          Your Transactions
        </h2>
        <span className="md:text-[1vw] text-sm text-gray-300">
          🕒 23 - 30 March 2020
        </span>
      </div>
      <div className="space-y-6 md:space-y-[1.5vw]">
        <div className="flex justify-between items-center md:mt-[1.25vw] mt-4">
          <div className="flex items-center ">
            <MdOutlineArrowCircleDown className="md:text-[2.2vw] text-4xl md:mr-[.75vw] mr-2 text-red-500" />

            <div>
              <p className="md:text-[1vw] text-sm">Netflix</p>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                27 March 2020 at 12:30 PM
              </p>
            </div>
          </div>
          <span className="text-red-500  md:text-[1.1vw] text-sm">-$2500</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MdOutlineArrowCircleUp className="md:text-[2.2vw] text-4xl md:mr-[.75vw] mr-2 text-green-500" />
            <div>
              <p className="md:text-[1vw] text-sm">Apple</p>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                27 March 2020 at 12:30 PM
              </p>
            </div>
          </div>
          <span className="text-green-500  md:text-[1.1vw] text-sm">
            +$2500
          </span>
        </div>
        <h3 className="md:text-[1vw] text-sm font-medium md:mt-[1.25vw] mt-4">
          YESTERDAY
        </h3>
        <div className="flex justify-between items-center md:py-[.4vw] py-1">
          <div className="flex items-center ">
            <MdOutlineArrowCircleUp className="md:text-[2.2vw] text-4xl md:mr-[.75vw] mr-2 text-green-500" />
            <div>
              <p className="md:text-[1vw] text-sm">Stripe</p>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                26 March 2020 at 13:45 PM
              </p>
            </div>
          </div>
          <span className="text-green-500  md:text-[1.1vw] text-sm">+$800</span>
        </div>
        <div className="flex justify-between items-center md:py-[.4vw] py-1">
          <div className="flex items-center ">
            <MdOutlineArrowCircleUp className="md:text-[2.2vw] text-4xl md:mr-[.75vw] mr-2 text-green-500" />
            <div>
              <p className="md:text-[1vw] text-sm">HubSpot</p>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                26 March 2020 at 12:30 PM
              </p>
            </div>
          </div>
          <span className="text-green-500  md:text-[1.1vw] text-sm">
            +$1700
          </span>
        </div>
        <div className="flex justify-between items-center md:py-[.4vw] py-1">
          <div className="flex items-center">
            <BsExclamationCircle className="md:text-[2.2vw] text-4xl md:mr-[.75vw] mr-2 text-white" />
            <div>
              <p className="md:text-[1vw] text-sm">Webflow</p>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                26 March 2020 at 05:00 AM
              </p>
            </div>
          </div>
          <span className="text-yellow-500  md:text-[1.1vw] text-sm">
            Pending
          </span>
        </div>
        <div className="flex justify-between items-center md:py-[.4vw] py-1">
          <div className="flex items-center">
            <MdOutlineArrowCircleDown className="md:text-[2.2vw] text-4xl md:mr-[.75vw] mr-2 text-red-500" />
            <div>
              <p className="md:text-[1vw] text-sm">Microsoft</p>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                25 March 2020 at 16:30 PM
              </p>
            </div>
          </div>
          <span className="text-red-500  md:text-[1.1vw] text-sm">-$987</span>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
