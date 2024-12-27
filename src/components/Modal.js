"use client";
import React from "react";

const Modal = ({ showModal, toggleModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-11/12 sm:w-96">
        <h3 className="text-xl mb-4">Sign Up for Updates</h3>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="input mb-4 w-full"
          />
          <button type="submit" className="btn-primary w-full">
            Subscribe
          </button>
        </form>
        <button onClick={toggleModal} className="mt-4 text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
