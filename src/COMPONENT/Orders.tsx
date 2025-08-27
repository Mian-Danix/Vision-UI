import { MdVerified } from "react-icons/md";

const OrderOverview = () => {
  return (
    <section className="col-span-3 bg-[linear-gradient(126.97deg,rgba(6,11,40,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)] text-white md:p-[1.50vw] p-5 rounded-lg shadow-md">
      <h2 className="md:text-[1.25vw] text-base font-bold  ">
        Orders overview
      </h2>
      <div className="flex items-center md:mb-[1.25vw] mb-4 md:text-[1vw]   md:gap-[.75vw] gap-2">
        <MdVerified className="text-green-700 " />
        <p className="text-green-400  ">+30% this month</p>
      </div>

      <div className="flex flex-col text-[1.15vw] md:gap-[.75vw] gap-2">
        <div className="flex flex-col">
          <div>
            <span className="text-blue-300 md:mr-[.75vw] mr-2 text-base">
              💰
            </span>
            <span className="text-base md:text-[1.25vw]">
              $2400, Design changes
            </span>
          </div>
          <span className=" text-gray-300 md:ml-[2.5vw] ml-8 text-xs md:text-[1vw]">
            22 DEC 7:20 PM
          </span>
        </div>

        <div className="flex flex-col ">
          <div>
            <span className="text-red-400 md:mr-[.75vw] mr-2 text-base">
              🔔
            </span>
            <span className="text-base md:text-[1.25vw]">
              New order #4219423
            </span>
          </div>
          <span className=" text-gray-300 md:ml-[2.5vw] ml-8 text-xs md:text-[1vw]">
            21 DEC 11:21 PM
          </span>
        </div>

        <div className="flex flex-col">
          <div>
            <span className="text-blue-300 md:mr-[.75vw] mr-2 text-base">
              🛒
            </span>
            <span className="text-base md:text-[1.25vw]">
              Server Payments for April
            </span>
          </div>
          <span className=" text-gray-300 md:ml-[2.5vw] ml-8 text-xs md:text-[1vw]">
            21 DEC 9:28 PM
          </span>
        </div>

        <div className="flex flex-col">
          <div>
            <span className="text-yellow-400 md:mr-[.75vw] mr-2 text-base">
              💳
            </span>
            <span className="text-base md:text-[1.25vw]">
              New card added for order{" "}
            </span>
          </div>
          <span className="md:ml-[2.5vw] md:text-[1vw] text-xs ml-8 text-gray-300">
            20 DEC 3:52 PM
          </span>
        </div>

        <div className="flex flex-col">
          <div>
            <span className="text-blue-300 md:mr-[.75vw] mr-2 text-base">
              🔓
            </span>
            <span className="text-base md:text-[1.25vw]">
              Unlock packages for Development
            </span>
          </div>
          <span className="md:ml-[2.5vw] md:text-[1vw] text-xs ml-8 text-gray-300">
            19 DEC 11:35 PM
          </span>
        </div>

        <div className="flex flex-col">
          <div>
            <span className="text-red-400 md:mr-[.75vw] mr-2 text-base">
              📦
            </span>
            <span className="text-base md:text-[1.25vw]">
              {" "}
              New order #9851258
            </span>
          </div>
          <span className="md:ml-[2.5vw] md:text-[1vw] text-xs ml-8 text-gray-300">
            18 DEC 4:41 PM
          </span>
        </div>
      </div>
    </section>
  );
};

export default OrderOverview;
