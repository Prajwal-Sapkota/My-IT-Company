"use client";
import React from "react";

const PricingPlans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border p-6 rounded-lg">
        <h3 className="text-2xl mb-4">Basic Plan</h3>
        <p className="mb-4">Perfect for small businesses.</p>
        <p className="text-lg font-bold">$19/month</p>
        <button className="btn-primary mt-4">Get Started</button>
      </div>
      <div className="border p-6 rounded-lg bg-blue-100">
        <h3 className="text-2xl mb-4">Standard Plan</h3>
        <p className="mb-4">Ideal for growing companies.</p>
        <p className="text-lg font-bold">$49/month</p>
        <button className="btn-primary mt-4">Get Started</button>
      </div>
      <div className="border p-6 rounded-lg">
        <h3 className="text-2xl mb-4">Premium Plan</h3>
        <p className="mb-4">For enterprises with high demands.</p>
        <p className="text-lg font-bold">$99/month</p>
        <button className="btn-primary mt-4">Get Started</button>
      </div>
    </div>
  );
};

export default PricingPlans;
