import { FaWallet, FaGlobe, FaFile, FaCartShopping } from "react-icons/fa6";

const Activity = [
  {
    title: "Today’s Money",
    rating: "$53,000",
    performance: "+55%",
    icon: <FaWallet />,
  },
  {
    title: "Today’s Users",
    rating: "2,300",
    performance: "+5%",
    icon: <FaGlobe />,
  },
  {
    title: "New Clients",
    rating: "+3,052",
    performance: "-14%",
    icon: <FaFile />,
  },
  {
    title: "Total Sales",
    rating: "$173,000",
    performance: "+8%",
    icon: <FaCartShopping />,
  },
];

const Dailyactive = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  md:gap-[1.25vw] gap-4 w-full md:p-[.75vw] p-2">
      {Activity.map((item, index) => (
        <div
          key={index}
          className="bg-[linear-gradient(126.97deg,rgba(6,11,38,0.74)_28.26%,rgba(26,31,55,0.5)_91.2%)]
          md:p-[.75vw] p-2 flex justify-between items-center rounded-2xl shadow-lg 
          transition transform  hover:shadow-xl"
        >
          <div>
            <h3 className="text-gray-400  md:text-[1.1vw] text-sm md:text-base font-medium">
              {item.title}
            </h3>
            <h3 className="text-white  md:text-[1.5vw] text-xl md:text-2xl font-bold flex items-center  md:gap-[.75vw] gap-2 ">
              {item.rating}
              <span
                className={`md:text-[1.1vw] text-sm font-semibold ${
                  item.performance.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {item.performance}
              </span>
            </h3>
          </div>

          <div className="text-white  md:text-[1.25vw] text-3xl md:text-4xl bg-blue-700/90 md:p-[.75vw] p-2 rounded-2xl shadow-md">
            {item.icon}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dailyactive;
