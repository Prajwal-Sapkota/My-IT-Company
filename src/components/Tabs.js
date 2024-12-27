"use client";
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 ${activeTab === tab.label ? "border-b-2 border-blue-500" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.find((tab) => tab.label === activeTab).content}
      </div>
    </div>
  );
};

export default Tabs;