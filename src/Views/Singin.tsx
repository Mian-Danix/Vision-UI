import React, { useState } from "react";
import Header from "../Navbar/Header";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Side (Banner) */}
      <div className="hidden lg:flex items-center flex-col justify-center bg-[url('Group122.png')] h-full w-full bg-cover bg-center md:p-[1.75vw] p-6 ">
        <p className="text-white font-bold text-center  md:text-[1.1vw] text-sm md:text-base">
          INSPIRED BY THE FUTURE:
        </p>
        <h2 className="text-white  md:text-[1.5vw] text-2xl md:text-3xl font-bold text-center leading-snug">
          THE VISION UI DASHBOARD
        </h2>
      </div>

      {/* Navbar (absolute, floating on top for all screens) */}
      <Header />

      {/* Right Side (Form) */}
      <div className="flex items-center justify-center bg-[#0B0F29] p-4">
        <div className="w-full max-w-sm rounded-2xl bg-[#0B0F29] md:p-[1.75vw] p-6  text-white">
          <h2 className="text-2xl font-bold">Nice to see you!</h2>
          <p className="md:mt-[.4vw] mt-1  md:text-[1.1vw] text-sm text-gray-400">
            Enter your email and password to sign in
          </p>

          <form
            onSubmit={handleSubmit}
            className="md:mt-[1.75vw] mt-6 space-y-4"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block  md:text-[1.1vw] text-sm text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="md:mt-[.4vw] mt-1 w-full rounded-xl border border-gray-700 bg-transparent md:px-[1.25vw] px-4 md:py-[1vw] py-3  md:text-[1.1vw] text-sm text-white placeholder-gray-500 focus:border-blue-500 md:shadow shadow-[#c5c4c4c4] focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block  md:text-[1.1vw] text-sm text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="md:mt-[.4vw] mt-1 w-full rounded-xl border border-gray-700 bg-transparent md:px-[1.25vw] px-4 md:py-[1vw] py-3  md:text-[1.1vw] text-sm text-white placeholder-gray-500 focus:border-blue-500 md:shadow shadow-[#c5c4c4c4] focus:outline-none"
                required
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="h-4 w-4 rounded border-gray-600 bg-transparent text-blue-500 focus:ring-0"
              />
              <label htmlFor="remember" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 md:py-[1vw] py-3  md:text-[1.1vw] text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              SIGN IN
            </button>
          </form>

          {/* Link */}
          <p className="md:mt-[1.25vw] mt-4 text-center  md:text-[1.1vw] text-sm text-gray-400">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-white hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
