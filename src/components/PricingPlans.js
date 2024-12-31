"use client";
import React from "react";

const PricingPlans = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16 px-8">
      <div className="bg-white shadow-lg p-6 rounded-xl text-center">
        <h3 className="text-2xl mb-4">Basic Plan</h3>
        <p className="mb-4 text-gray-600">Perfect for small businesses.</p>
        <p className="text-lg font-bold text-gray-800">$19/month</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg mt-4 transform transition duration-300">
          Get Started
        </button>
      </div>
      <div className="bg-blue-100 shadow-lg p-6 rounded-xl text-center">
        <h3 className="text-2xl mb-4">Standard Plan</h3>
        <p className="mb-4 text-gray-600">Ideal for growing companies.</p>
        <p className="text-lg font-bold text-gray-800">$49/month</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg mt-4 transform transition duration-300">
          Get Started
        </button>
      </div>
      <div className="bg-blue-200 shadow-lg p-6 rounded-xl text-center">
        <h3 className="text-2xl mb-4">Premium Plan</h3>
        <p className="mb-4 text-gray-600">For enterprises with high demands.</p>
        <p className="text-lg font-bold text-gray-800">$99/month</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg mt-4 transform transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;
