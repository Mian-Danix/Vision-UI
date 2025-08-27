import React from "react";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import Chart from "./Chart";

interface ChartData {
  name: string;
  sales: number;
  profit: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: ValueType;
    color?: string;
  }>;
  label?: NameType;
}

const data: ChartData[] = [
  { name: "Jan", sales: 320, profit: 180 },
  { name: "Feb", sales: 450, profit: 270 },
  { name: "Mar", sales: 280, profit: 360 },
  { name: "Apr", sales: 500, profit: 210 },
  { name: "May", sales: 370, profit: 330 },
  { name: "Jun", sales: 220, profit: 410 },
  { name: "Jul", sales: 430, profit: 260 },
  { name: "Aug", sales: 310, profit: 340 },
  { name: "Sep", sales: 480, profit: 190 },
  { name: "Oct", sales: 260, profit: 420 },
  { name: "Nov", sales: 390, profit: 280 },
  { name: "Dec", sales: 340, profit: 460 },
];

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-[150px] h-[120px] bg-black/70 rounded-sm border-none text-white flex flex-col justify-center md:p-[.75vw] p-2.5">
        <div className="text-center font-bold md:mb-[.75vw] mb-2">{label}</div>
        <div className="text-left">
          {payload.map((entry, index) => (
            <div key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
const Sales = () => {
  return (
    <section className="grid grid-cols-7 md:m-[1.25vw] m-4  md:gap-[1.25vw] gap-4">
      <section className="md:col-span-4 col-span-7  bg-[linear-gradient(126.97deg,rgba(6,11,40,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)] text-white md:p-[1.50vw] p-5 rounded-2xl shadow-md">
        <h2 className="font-semibold text-white md:text-[1.1vw]  text-sm">
          Sales overview
        </h2>
        <p className="text-green-400 md:text-[1vw]  text-xs md:mb-[1.25vw] mb-4">
          (+5) more in 2021
        </p>
        <div className="md:h-[20vw] h-[200px] ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#00f" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ff" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#0ff" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" stroke="#ccc" fontSize={12} />
              <YAxis stroke="#ccc" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="sales"
                stroke="#0066ff"
                fill="url(#colorSales)"
                strokeWidth={3}
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#00ffff"
                fill="url(#colorProfit)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
      <Chart />
    </section>
  );
};

export default Sales;
