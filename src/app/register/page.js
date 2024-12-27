"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Register = () => {
  const [step, setStep] = useState(1); 
  const [generatedOtp, setGeneratedOtp] = useState("");
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const { otp } = watch(); // Watch OTP input value
  const router = useRouter(); // Next.js router for navigation

  const handleRegister = (data) => {
    // Generate a random OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    // Simulate OTP
    alert(`Your OTP is: ${otp}`);

    // Temporarily store the user data
    localStorage.setItem("tempUser", JSON.stringify(data));
    setStep(2); 
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      const tempUser = JSON.parse(localStorage.getItem("tempUser"));
      localStorage.setItem("user", JSON.stringify(tempUser));
      alert("Registration successful!");
      router.push("/login"); // Or "/dashboard"
    } else {
      
      setError("otp", { message: "Invalid OTP. Please try again." });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          {step === 1 ? "Register" : "Verify OTP"}
        </h2>
        {step === 1 ? (
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <input
                type="date"
                {...register("dob", { required: "Date of Birth is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
            </div>
            <div>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
            </div>
            <div>
              <select
                {...register("countryCode", { required: "Country code is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="+1">+1 (US)</option>
                <option value="+91">+91 (India)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+977">+977 (Nepal)</option>
              </select>
              {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </form>
        ) : (
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerifyOtp();
            }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                {...register("otp", { required: "OTP is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
