"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  return (
    <>
      {/* Sidebar: Shown only when isOpen is true on mobile */}
      <div className={`lg:w-64 w-full bg-gray-800 text-white p-4 ${isOpen ? "block" : "hidden"} lg:block`}>
        <h2 className="text-xl mb-4">IT Company</h2>
        <ul>
          <li><a href="#" onClick={() => router.push("/landing")} className="block py-2 hover:bg-gray-600">Home</a></li>
          <li><a href="#services" className="block py-2 hover:bg-gray-600">Services</a></li>
          <li><a href="#pricing" className="block py-2 hover:bg-gray-600">Pricing</a></li>
          <li><a href="#contact" className="block py-2 hover:bg-gray-600">Contact</a></li>
        </ul>

        {/* Close sidebar button for mobile */}
        
      </div>
    </>
  );
};

export default Sidebar;
