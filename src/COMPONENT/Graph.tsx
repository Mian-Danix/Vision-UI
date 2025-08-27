import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cardGradient =
  "linear-gradient(111.84deg, rgba(6,11,38,0.94) 59.3%, rgba(26,31,55,0) 100%)";

const Graph = () => {
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      label: "Users",
      value: "32,984",
      color: "text-red-500",
      barColor: "bg-red-500",
      progress: 80,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M9 13l-4 4-4-4M16 13l4 4 4-4"></path>
          <path d="M20 17L4 17"></path>
          <path d="M12 2L12 17"></path>
        </svg>
      ),
      label: "Clicks",
      value: "2,42m",
      color: "text-blue-500",
      barColor: "bg-blue-500",
      progress: 65,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
      label: "Sales",
      value: "2,400$",
      color: "text-green-500",
      barColor: "bg-green-500",
      progress: 50,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z"></path>
          <polyline points="12 2 12 8"></polyline>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <path d="M7 16h10"></path>
        </svg>
      ),
      label: "Items",
      value: "320",
      color: "text-yellow-500",
      barColor: "bg-yellow-500",
      progress: 90,
    },
  ];

  return (
    <div
      className="w-full flex flex-col rounded-2xl shadow-md md:p-[.75vw] p-2 sm:p-4"
      style={{ background: cardGradient }}
    >
      <div className="w-full h-[200px] md:h-[12vw] bg-[#060C29] rounded-2xl shadow-md md:p-[.75vw] p-2 sm:p-4 md:mt-[1vw] mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stats}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#2D3A5F"
              vertical={false}
            />
            <XAxis dataKey="label" stroke="#68739C" />
            <YAxis stroke="#68739C" orientation="right" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "none",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            {stats.map(() => (
              <Bar dataKey="progress" fill="#fff" />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
