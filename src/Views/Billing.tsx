import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { PiBuildingsDuotone } from "react-icons/pi";
import InvoicesCard from "../COMPONENT/Invoices";
import PaymentMethod from "../COMPONENT/InvoiceCard";
import BillingInformation from "../COMPONENT/BillingInformation";
import Transactions from "../COMPONENT/YourTransactions";

const Billing = () => {
  return (
    <section className="grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 w-full  md:gap-[1.75vw] gap-6 md:px-[1.25vw] px-4 md:my-[1.75vw] my-6">
      <div className="grid grid-cols-4 col-span-4 w-full md:gap-[1.75vw] gap-6">
        <div className="lg:col-span-2 col-span-4  bg-[url('/Background.png')] aspect-video w-full bg-cover bg-center rounded-2xl shadow-xl md:p-[1.75vw] p-6  flex flex-col justify-between  ">
          <div className="space-y-2 md:space-y-[.75vw] flex justify-between">
            <h2 className="text-white  md:text-[1.3vw] text-base">Vision UI</h2>
            <img
              src="Circles.png"
              alt=""
              className=" md:w-[3vw] w-12 md:h-[2vw] h-8 "
            />
          </div>
          <div>
            <h1 className="text-white  md:text-[1.1vw] text-sm font-bold md:mt-[1.75vw] mt-6 md:mb-[.75vw] mb-2">
              7812 2139 0823 XXXX
            </h1>
            <div className="flex items-center  md:gap-[.4vw] gap-12 text-white hover:text-white transition">
              <p className="text-white  md:text-[.75vw] text-sm md:text-base">
                VALID THRU <br />
                <span className="font-bold  md:text-[1vw] text-xs"> 05/24</span>
              </p>

              <p className="md:text-[1vw] text-xs md:ml-[1vw] ml-3 ">
                CVV <br />
                <span className="font-bold ">09X</span>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 col-span-4 bg-[linear-gradient(127.09deg,rgba(6,11,40,0.94)_19.41%,rgba(10,14,35,0.49)_76.65%)]  rounded-2xl shadow-xl md:aspect-video w-full md:px-[.75vw] px-2 md:py-[.75vw] py-2  ">
          <div className=" bg-[#ffffff0f] rounded-2xl md:p-[1vw] p-3 flex flex-col  md:gap-[.75vw] gap-2">
            <div className="text-white flex justify-between ">
              <p className="md:text-[1.1vw] text-sm">Credit Balance</p>

              <IoEllipsisVerticalOutline className="md:text-[1vw] text-xs" />
            </div>

            <div className="flex justify-between items-center text-white ">
              <h1 className="font-bold  md:text-[1.75vw] text-3xl ">$25,215</h1>
              <img src="Graph.png" alt="" className="md:h-[1.25vw] h-4 " />
            </div>
          </div>
          <p className=" text-gray-400 md:my-[.75vw] my-2  md:text-[.75vw] text-xs">
            NEWEST
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center  md:gap-[.75vw] gap-2">
              <PiBuildingsDuotone className="text-white   md:text-[2.2vw] text-4xl bg-blue-950 md:p-[.75vw] p-2 rounded-xl" />
              <div className="text-white ">
                <h2 className="md:text-[1vw] text-xs">Bill & Taxes</h2>
                <p className="text-gray-400 md:text-[.75vw] text-xs">
                  Today, 16:36
                </p>
              </div>
            </div>
            <p className="text-white md:text-[.75vw] text-xs">-$154.50</p>
          </div>
        </div>
        <div className="col-span-4 h-auto">
          <PaymentMethod />
        </div>
      </div>
      <InvoicesCard />
      <BillingInformation />
      <Transactions />
    </section>
  );
};

export default Billing;
