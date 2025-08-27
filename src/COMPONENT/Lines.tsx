import React from "react";

interface ProgressBarProps {
  width: number;
}

const Lines: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <section className="relative w-full md:h-[.35vw] h-1 md:mt-[.35vw] md:mt-[.4vw] mt-1 bg-gray-500 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-[#0075FF] rounded-full transition-all duration-300"
        style={{ width: `${width}%` }}
      ></div>
    </section>
  );
};

export default Lines;
