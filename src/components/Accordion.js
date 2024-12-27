"use client";
import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-4 bg-gray-100">
        {title}
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
