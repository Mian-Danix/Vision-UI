import React from "react";
import { FaFilePdf } from "react-icons/fa";

interface Invoice {
  date: string;
  id: string;
  amount: string;
}

const invoices: Invoice[] = [
  { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
  { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
  { date: "April, 05, 2020", id: "#FB-212562", amount: "$560" },
  { date: "June, 25, 2019", id: "#QW-103578", amount: "$120" },
  { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" },
];

const InvoicesCard: React.FC = () => {
  return (
    <section className="md:col-span-3 col-span-4 bg-gradient-to-b from-[#0b1437] to-[#092052] rounded-2xl md:p-[1.25vw] p-4  shadow-lg text-white w-full ">
      <div className="flex items-center justify-between md:mb-[1.75vw] mb-6 w-full">
        <h2 className="md:text-[1.1vw] text-sm font-bold tracking-wide">
          Invoices
        </h2>
        <button className="bg-blue-600 md:px-[1.25vw] px-4 md:py-[.75vw] py-2  md:text-[.8vw] text-xs font-bold rounded-xl hover:bg-blue-700 transition">
          VIEW ALL
        </button>
      </div>

      <div className="flex flex-col  md:gap-[1vw] gap-5">
        {invoices.map((invoice, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-white/10 md:pb-[1vw] pb-3  last:border-b-0"
          >
            <div>
              <h3 className="md:text-[.8vw] text-xs font-semibold">
                {invoice.date}
              </h3>
              <p className="md:text-[.75vw] text-xs text-gray-400">
                {invoice.id}
              </p>
            </div>

            <div className="flex items-center  md:gap-[1.25vw] gap-4">
              <span className="md:text-[.75vw] text-sm font-semibold">
                {invoice.amount}
              </span>
              <FaFilePdf className="text-gray-300  md:text-[1.4vw] text-lg" />
              <span className="md:text-[.75vw] text-xs">PDF</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvoicesCard;
