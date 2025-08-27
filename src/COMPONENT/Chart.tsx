import { FaCartShopping, FaRocket } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import Lines from "./Lines";
import Graph from "./Graph";

const Chart = () => {
  const stats = [
    { icon: IoWallet, label: "Users", value: "32,984", progress: 80 },
    { icon: FaRocket, label: "Clicks", value: "2,42m", progress: 65 },
    { icon: FaCartShopping, label: "Sales", value: "2,400$", progress: 50 },
    { icon: TiSpanner, label: "Items", value: "320", progress: 90 },
  ];

  return (
    <div className="md:col-span-3 col-span-7 bg-[linear-gradient(126.97deg,rgba(6,11,40,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)] rounded-2xl  md:p-[1.25vw] p-4 shadow-xl">
      <Graph />
      <h2 className="font-semibold text-white md:text-[1.1vw]  text-sm">
        Active Users
      </h2>
      <p className="text-green-400 md:text-[1vw]  text-xs md:mb-[1.25vw] mb-4">
        (+15%) more in 2025
      </p>

      <div className="grid grid-cols-4   md:gap-[.75vw] gap-2">
        {stats.map(({ icon: Icon, label, value, progress }, index) => (
          <div
            key={index}
            className="bg-[#0000003b] text-white  md:p-[.75vw] p-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(0,117,255,0.6)]"
          >
            <div className="flex items-center  md:gap-[.75vw] gap-2">
              <Icon className="  bg-primary  md:text-[1.5vw] text-2xl rounded-md" />
              <p className="text-secondary   md:text-[1vw] text-xs">{label}</p>
            </div>
            <h2 className="font-semibold   md:text-[1.1vw] text-sm md:mt-[.4vw] mt-1">
              {value}
            </h2>
            <Lines width={progress} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
