import React from "react";
import { BsLightningFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";

const CarInformation: React.FC = () => {
  return (
    <div className="md:col-span-2 col-span-4 bg-gradient-to-br from-[rgb(2,6,28)] via-transparent to-[rgba(8,12,32,0.74)] backdrop-blur-[120px] transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)] md:p-[.75vw] p-2 rounded-lg text-white">
      <h2 className="md:text-[1.3vw] text-lg font-semibold ">
        Car Informations
      </h2>
      <p className="md:text-[1vw] text-sm text-gray-300 md:mb-[.75vw] mb-2">
        Hello, Mark Johnson! Your Car is ready.
      </p>
      <div className="flex flex-wrap  md:gap-[1.25vw] gap-4 ">
        <div>
          <div className="relative md:w-[12vw] w-48 md:h-[12vw] h-48 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 120">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#4B5563"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#10B981"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="80.384"
                transform="rotate(-90 50 50)"
              />
              <text
                x="50%"
                y="25%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="md:text-[90%] text-xs  fill-white"
              >
                ⚡
              </text>
              <text
                x="50%"
                y="45%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="md:text-[120%] text-2xl font-bold fill-white"
              >
                68%
              </text>

              <text
                x="50%"
                y="60%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="md:text-[50%] text-[8px]  fill-white"
              >
                Current load
              </text>
            </svg>
          </div>
          <p className="text-center md:-mt-[.75vw] -mt-6 md:text-[1vw] text-xs text-gray-400">
            0h 58min
          </p>
          <p className="text-center  md:text-[1vw] text-xs text-gray-400">
            Time to full charge
          </p>
        </div>
        <div className="flex-1  md:space-y-[.75vw] space-y-2 my-auto">
          <div className="bg-black/20  md:p-[1vw] p-3rounded-lg flex items-center justify-between ">
            <div>
              <p className="md:text-[.9vw] text-sm ">Battery Health</p>
              <p className="md:text-[.9vw] text-sm  font-medium">76%</p>
            </div>
            <span className="md:p-[.75vw] p-2 bg-blue-500 rounded-md flex items-center justify-center">
              <FaCar className="md:text-[1.3vw] text-lg" />
            </span>
          </div>
          <div className="bg-black/20  md:p-[1vw] p-3 rounded-lg flex items-center justify-between ">
            <div>
              <p className="md:text-[.9vw] text-sm ">Consumption</p>
              <p className="md:text-[.9vw] text-sm  font-medium">163W/km</p>
            </div>
            <span className="md:p-[.75vw] p-2 bg-blue-500 rounded-md flex items-center justify-center">
              <BsLightningFill className="md:text-[1.3vw] text-lg" />
            </span>
          </div>
        </div>
        <div className="flex-1  md:space-y-[.75vw] space-y-2 my-auto ">
          <div className="bg-black/20  md:p-[1vw] p-3rounded-lg flex items-center justify-between ">
            <div>
              <p className="md:text-[.9vw] text-sm">Battery Health</p>
              <p className="md:text-[.9vw] text-sm font-medium">76%</p>
            </div>
            <img src="green.png" className="md:h-[2.5vw] h-10" alt="" />
          </div>
          <div className="bg-black/20  md:p-[1vw] p-3 rounded-lg flex items-center justify-between ">
            <div>
              <p className="md:text-[.9vw] text-sm">Consumption</p>
              <p className="md:text-[.9vw] text-sm font-medium">163W/km</p>
            </div>
            <img src="Blue-Line.png" className="md:h-[3vw] h-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInformation;
