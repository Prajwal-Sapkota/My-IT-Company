"use client";
import React, { useState } from "react";

const Accordion = ({ title, content,image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="text-xl font-bold mb-2">
        {title}
      </button>
      {isOpen && <div className="text-gray-600">{content}</div>}
    </div>
  );
};

export default Accordion;
