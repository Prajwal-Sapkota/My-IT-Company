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
        <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16 px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold leading-tight">
                Welcome to Our IT Company
              </h1>
              <p className="mt-4 text-lg">
                We provide innovative solutions to help businesses grow and thrive in the digital age.
              </p>
              <div className="mt-6 flex flex-col lg:flex-row gap-4">
                <button
                  onClick={toggleModal}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg shadow-md transform transition duration-300"
                >
                  Subscribe for Updates
                </button>
                <button className="bg-transparent border border-white hover:bg-white hover:text-blue-600 text-white py-3 px-8 rounded-lg transition duration-300">
                  Explore More
                </button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/assets/hero.jpg"
                alt="Hero"
                className="w-full max-w-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </header>
        
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
        
        <section id="services" className="py-16 px-8 bg-gray-50">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Our Services</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Accordion title="Web Development" content="We offer full-stack web development to build modern, responsive websites and web applications." image={"/assets/webdev.jpg"} />
            <Accordion title="Mobile App Development" content="We build mobile apps for iOS and Android with seamless user experiences and powerful functionality." image="/assets/mobappdev.jpg" />
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="pricing" className="py-16 px-8 bg-gray-300">
          <div className="max-w-7xl mx-auto text-center">
           
              <h3 className="text-3xl font-semibold text-gray-800 mb-12">
                Choose the Best Plan
              </h3>
            </div>
          
          <Tabs tabs={tabs} />
          
        </section>
        <section id="contact" className="py-16 px-8 bg-gray-500 text-white">
          <h2 className="text-4xl font-semibold text-center mb-12 text-yellow-400">Contact Us</h2>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Contact Information */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-500">We'd love to hear from you!</h3>
              <p className="text-lg mb-6 text-gray-300">
                Reach out to us with any questions, feedback, or inquiries. We are here to help!
              </p>
              <ul>
                <li className="mb-4 flex items-center justify-center lg:justify-start">
                  <span className="mr-2 text-yellow-500">📍</span>
                  Kathmandu,Nepal
                </li>
                <li className="mb-4 flex items-center justify-center lg:justify-start">
                  <span className="mr-2 text-yellow-500">📧</span>
                  abc@gmail.com
                </li>
                <li className="mb-4 flex items-center justify-center lg:justify-start">
                  <span className="mr-2 text-yellow-500">📞</span>
                  +977- 9808678956
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modal */}
        <Modal showModal={showModal} toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default LandingPage;
