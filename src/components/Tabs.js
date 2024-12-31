"use client";
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center mb-12">
      </div>
      <div className="w-full">
        <div className="flex border-b border-gray-200 mb-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-6 py-3 text-lg font-medium transition duration-300 ease-in-out 
                        ${activeTab === tab.label ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-600 hover:text-blue-500"}
                        focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 p-4">
          {tabs.find((tab) => tab.label === activeTab).content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
