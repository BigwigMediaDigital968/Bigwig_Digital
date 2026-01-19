"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "harsh@gmail.com" && password === "Harsh@0502") {
      sessionStorage.setItem("login", "true");
      await Swal.fire("Success", "Welcome, Admin!", "success");
      router.push("/admin");
    } else {
      Swal.fire("Error", "Incorrect email or password!", "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0]">
      <Nav />

      <div className="flex flex-1">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://img.freepik.com/premium-photo/happy-freelancer-working-with-computer-home-illustration_979520-23760.jpg"
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
              Admin Login
            </h2>

            <form onSubmit={handleLogin} className="space-y-10">
              {/* Email Field */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer text-lg text-gray-800"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0 text-gray-500 text-sm transform -translate-y-6 scale-90 origin-left transition-all peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600"
                >
                  Email Address
                </label>
              </div>

              {/* Password Field */}
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer text-lg text-gray-800 pr-10"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-0 text-gray-500 text-sm transform -translate-y-6 scale-90 origin-left transition-all peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
