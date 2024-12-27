"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";
import Accordion from "../../components/Accordion";
import Tabs from "../../components/Tabs";
import PricingPlans from "../../components/PricingPlans";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for sidebar toggle

  const toggleModal = () => setShowModal(!showModal);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const tabs = [
    {
      label: "Features",
      content: <p>Details about features offered by the IT company...</p>
    },
    {
      label: "Pricing",
      content: <PricingPlans />
    },
    {
      label: "Testimonials",
      content: <p>Customer testimonials here...</p>
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar: Visible on desktop and conditionally on mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 p-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-16 rounded-xl shadow-xl mb-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our IT Company</h1>
            <p className="text-xl mb-6">We provide innovative solutions to help businesses grow and thrive in the digital age.</p>
            <button
              onClick={toggleModal}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-md transform transition duration-300"
            >
              Subscribe for Updates
            </button>
          </div>
        </section>

        {/* Mobile Sidebar Button */}
        <div className="lg:hidden mb-8">
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>

        {/* Our Services Section */}
        <section id="services" className="my-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <div className="space-y-6">
            <Accordion title="Web Development" content="We offer full-stack web development to build modern, responsive websites and web applications." />
            <Accordion title="Mobile App Development" content="We build mobile apps for iOS and Android with seamless user experiences and powerful functionality." />
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="pricing" className="my-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pricing Plans</h2>
          <Tabs tabs={tabs} />
        </section>

        {/* Modal */}
        <Modal showModal={showModal} toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default LandingPage;
