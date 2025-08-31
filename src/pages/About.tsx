"use client";
import { useState } from "react";
import MyStory from "../components/MyStory";
import PreUniversity from "../components/PreUniversity";
import TechStack from "../components/TechStack";
import University from "../components/University";
import WorkingExperiences from "../components/WorkingExperiences";

export default function About() {
  const [openStory, setOpenStory] = useState(false);
  const [activeTab, setActiveTab] = useState("preuniversity");

  const tabs = [
    { key: "preuniversity", title: "Pre-University", component: <PreUniversity /> },
    { key: "university", title: "University", component: <University /> },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-gray-900 text-gray-200">
      {/* Header Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Hi, I’m <span className="font-semibold text-white">Tung Jin You</span>.  
          I’m a developer passionate about building modern web apps and exploring AI. 🚀
        </p>

        <button
          onClick={() => setOpenStory(true)}
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          My Story
        </button>
      </div>

      {/* Modal */}
      <MyStory isOpen={openStory} onClose={() => setOpenStory(false)} />

      {/* Learning Journey */}
      <div className="mt-16 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Learning Journey
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-purple-500 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Render Selected Tab */}
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>

      {/* Working Experiences Section */}
      <div className="mt-16 max-w-4xl w-full">
        <WorkingExperiences />
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16 max-w-4xl w-full">
        <TechStack />
      </div>
    </section>
  );
}
