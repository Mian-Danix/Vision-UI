import React, { useState } from "react";
import Header from "../Navbar/Header";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, password, remember });
  };

  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left side (hidden on mobile) */}
      <div className="hidden md:flex flex-col items-center justify-center bg-[url('Group122.png')] h-full w-full bg-cover bg-center md:p-[1.75vw] p-6 ">
        <p className="text-white font-bold  md:text-[1vw] text-xs sm:text-sm md:text-base">
          INSPIRED BY THE FUTURE:
        </p>
        <h2 className="text-white  md:text-[1.5vw] text-xl sm:text-2xl md:text-3xl font-bold md:mt-[.75vw] mt-2 text-center">
          THE VISION UI DASHBOARD
        </h2>
      </div>

      {/* Right side (form) */}
      <div className="flex flex-col min-h-screen bg-[#0B0F29] md:pt-[2.5vw] pt-8  md:pt-[12vh]">
        <Header />

        <div className="flex flex-1 items-center justify-center md:px-[1.25vw] px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-md rounded-2xl bg-[#11142D] md:p-[1.75vw] p-6  sm:p-8 text-white shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-center">
              Welcome!
            </h2>
            <p className="md:mt-[.75vw] mt-2  md:text-[1vw] text-xs sm:text-sm text-gray-400 text-center">
              Use these awesome forms to login or create a new account in your
              project for free.
            </p>

            {/* Social Buttons */}
            <div className="flex justify-center  md:gap-[1vw] gap-3 sm:gap-4 md:mt-[1.25vw] mt-4">
              <button className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg border border-gray-600 hover:bg-gray-700 transition">
                <FaFacebookF />
              </button>
              <button className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg border border-gray-600 hover:bg-gray-700 transition">
                <FaApple />
              </button>
              <button className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg border border-gray-600 hover:bg-gray-700 transition">
                <FaGoogle />
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center md:my-[1.25vw] my-4">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="mx-2 sm:mx-4  md:text-[1vw] text-xs sm:text-sm text-gray-400">
                or
              </span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="fullname"
                  className="block  md:text-[1vw] text-xs sm:text-sm text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="md:mt-[.4vw] mt-1 w-full rounded-xl border border-gray-700 bg-transparent md:px-[1vw] px-3 sm:px-4 md:py-[.75vw] py-2 sm:py-3  md:text-[1.1vw] text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block  md:text-[1vw] text-xs sm:text-sm text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="md:mt-[.4vw] mt-1 w-full rounded-xl border border-gray-700 bg-transparent md:px-[1vw] px-3 sm:px-4 md:py-[.75vw] py-2 sm:py-3  md:text-[1.1vw] text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block  md:text-[1vw] text-xs sm:text-sm text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="md:mt-[.4vw] mt-1 w-full rounded-xl border border-gray-700 bg-transparent md:px-[1vw] px-3 sm:px-4 md:py-[.75vw] py-2 sm:py-3  md:text-[1.1vw] text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="h-4 w-4 rounded border-gray-600 bg-transparent text-blue-500 focus:ring-0"
                />
                <label
                  htmlFor="remember"
                  className="text-xs sm:text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 md:py-[.75vw] py-2 sm:py-3  md:text-[1.1vw] text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                SIGN UP
              </button>
            </form>

            <p className="md:mt-[1.25vw] mt-4 text-center  md:text-[1vw] text-xs sm:text-sm text-gray-400">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-white hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
