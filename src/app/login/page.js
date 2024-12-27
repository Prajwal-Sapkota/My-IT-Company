"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === data.email && user.password === data.password) {
      alert("Login successful!");
      router.push("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
