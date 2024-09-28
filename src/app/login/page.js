"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

const Login = () => {
  // const [form, setForm] = useState({ username: "user", password: "user" });
  const [btnDisabled, setBtnDisabled] = useState(false);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      setBtnDisabled(true);
      notifySuccess();
      setTimeout(() => {
        router.push("/order/dashboard");
      }, 1000);
    } else {
      notifyFailed();
    }
  };

  const notifyFailed = () =>
    toast.error("Username or Password is wrong!", {
      position: "top-left",
      autoClose: 2000, // Auto-close dalam 2 detik
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const notifySuccess = () =>
    toast.success("Success Login!", {
      position: "top-right",
      autoClose: 2000,
    });

  return (
    <div className="flex">
      <div className="flex-1 bg-white h-screen">
        <div className="p-20 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-center my-8">Login</h2>
          <form onSubmit={handleSubmit} className="w-full" autoComplete="off">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                // onChange={handleChange}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                // onChange={handleChange}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                name="login"
                disabled={btnDisabled}
                className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 h-screen bg-red-400">
        <div className="w-full h-full relative">
          <Image
            src="/image/login.jpg"
            alt="login-img"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
