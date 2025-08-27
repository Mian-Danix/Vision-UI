import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Welcome = () => {
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);

  const score = 9.3;
  const maxScore = 10;

  useEffect(() => {
    let start = 0;
    const end = 95;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = (score / maxScore) * 100;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setProgress1(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  md:gap-[1.75vw] gap-6 md:mx-[1.25vw] mx-4 md:my-[1.75vw] my-6">
      <div className="lg:col-span-2 md:col-span-1 bg-[url('/Annotation.png')] bg-cover bg-center rounded-2xl shadow-xl md:p-[1.75vw] p-6  flex flex-col justify-between aspect-video">
        <div className="space-y-2 md:space-y-[.75vw]">
          <h2 className="text-gray-300  md:text-[1.3vw] text-base">
            Welcome back,
          </h2>
          <h1 className="text-white  md:text-[1.5vw] text-2xl  font-bold">
            Mark Johnson
          </h1>
          <p className="text-gray-400  md:text-[1.1vw] text-sm ">
            Glad to see you again! <br /> Ask me anything.
          </p>
        </div>
        <div className="flex items-center md:text-[1.25vw]  text-base  md:gap-[.75vw] gap-2 text-gray-300 hover:text-white transition">
          <p>Tap to record</p>
          <FaArrowRight />
        </div>
      </div>

      <div className="bg-[#0B1831] text-white md:p-[.75vw] p-2  rounded-2xl shadow-xl flex flex-col items-center">
        <h2 className="md:text-[1.25vw] text-base font-semibold">
          Satisfaction Rate
        </h2>
        <p className="text-gray-400  md:text-[1.1vw] text-sm">
          From all projects
        </p>

        <div className="relative md:w-full w-44 md:h-[6vw]  h-24 ">
          <svg className="w-full h-full" viewBox="0 0 100 50">
            <path
              d="M10 50 A40 40 0 0 1 90 50"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="10"
            />
            <path
              d="M10 50 A40 40 0 0 1 90 50"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="10"
              strokeDasharray="126"
              strokeDashoffset={126 - (progress / 100) * 126}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E90FF" />
                <stop offset="100%" stopColor="#00BFFF" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 bg-[#1C2A4A] md:p-[1.25vw] p-4 rounded-full shadow-md">
            <span className="md:text-[1.5vw] text-2xl text-blue-400">
              <MdOutlineEmojiEmotions />
            </span>
          </div>
        </div>

        <div className=" flex bg-[#060B28BD] rounded-xl w-full md:px-[1.25vw] px-4 md:py-[.4vw] py-1 justify-between items-center">
          <p className="text-gray-400  md:text-[1.1vw] text-sm">0%</p>

          <div className="text-center">
            <h3 className="md:text-[1.5vw] text-2xl font-bold">{progress}%</h3>
            <p className="text-gray-400  md:text-[1vw] text-xs">
              Based on likes
            </p>
          </div>

          <p className="text-gray-400  md:text-[1.1vw] text-sm">100%</p>
        </div>
      </div>

      <div className="lg:col-span-2 md:col-span-1 bg-[#0B1831] text-white md:p-[.75vw] p-2  rounded-2xl shadow-xl flex flex-col">
        <div className="flex items-center justify-between md:mb-[1.25vw] mb-4">
          <h2 className="md:text-[1.5vw] text-lg font-semibold">
            Referral Tracking
          </h2>
          <button className="text-gray-400 hover:text-white transition">
            <BsThreeDots className="md:text-[1.25vw] text-base" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center  md:gap-[1.75vw] gap-6">
          <div className="space-y-4 md:space-y-[1.25vw] w-full md:w-auto">
            <div className="bg-[#132345] md:px-[1.75vw] px-6 md:py-[1vw] py-3 rounded-lg shadow">
              <p className="text-gray-400  md:text-[1.1vw] text-sm">Invited</p>
              <h3 className="md:text-[1.25vw] text-base font-semibold">
                145 people
              </h3>
            </div>
            <div className="bg-[#132345] md:px-[1.75vw] px-6 md:py-[1vw] py-3 rounded-lg shadow">
              <p className="text-gray-400  md:text-[1.1vw] text-sm">Bonus</p>
              <h3 className="md:text-[1.25vw] text-base font-semibold">
                1,465
              </h3>
            </div>
          </div>

          <div className="relative md:w-[16vw] w-40 md:h-[11vw] h-40 flex items-center justify-center">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient2)"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (progress1 / 100) * 283}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00FFB3" />
                  <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute text-center">
              <p className="text-gray-300  md:text-[1.1vw] text-sm">Safety</p>
              <h3 className="md:text-[1.8vw] text-3xl font-bold">{score}</h3>
              <p className="text-gray-400  md:text-[1vw] text-xs">
                Total Score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
