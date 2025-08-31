"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCloudSun, FaGithub, FaLaptopCode, FaTasks, FaTools } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects, skills, and experience.",
    icon: <FaLaptopCode className="text-teal-400 w-8 h-8" />,
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/TUNG0922/portfolio",
  },
  {
    title: "Todo App",
    description: "A task management application with backend integration, built using a microservice architecture.",
    icon: <FaTasks className="text-purple-400 w-8 h-8" />,
    technologies: ["Vue.js", "Vuetify", "Spring Boot", "PostgreSQL", "Postman API", "API Development", "API Testing", "API Integration"],
    github: [
      { label: "Main App", url: "https://github.com/TUNG0922/ToDoApplication" },
      { label: "Microservice", url: "https://github.com/TUNG0922/ToDoApplication_microservice" },
    ],
  },
  {
    title: "Weather Dashboard",
    description: "A weather prediction dashboard built as a learning project in machine learning.",
    icon: <FaCloudSun className="text-yellow-400 w-8 h-8" />,
    technologies: ["Python", "Machine Learning"],
    github: "https://github.com/TUNG0922/simple_learning_weather-prediction-model",
  },
  {
    title: "VolunteerLinks",
    description: "My Final Year Project: a mobile application that manages volunteer events, enhanced with machine learning.",
    icon: <FaLaptopCode className="text-green-400 w-8 h-8" />,
    technologies: ["React Native", "Machine Learning", "Python", "Flask", "MongoDB"],
    github: "https://github.com/TUNG0922/fyp",
  },
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = page * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-gray-200 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="relative w-full max-w-6xl flex items-center">
        {/* Previous Arrow */}
        {totalPages > 1 && (
          <button
            onClick={() => setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))}
            className="mr-4 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition flex-shrink-0"
          >
            <FaArrowLeft />
          </button>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-gray-700 transition-all duration-300 ease-in-out transform hover:scale-[1.04] hover:shadow-2xl hover:border-teal-500"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-4 mb-4">
                {project.icon}
                <h3 className="text-2xl font-bold text-teal-400">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Technologies Used */}
              <div className="mb-4">
                <p className="text-lg font-semibold text-purple-400 flex items-center gap-2 mb-2">
                  <FaTools /> Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200 font-medium hover:bg-teal-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Links */}
              <div className="flex flex-col gap-2 mt-2">
                {Array.isArray(project.github) ? (
                  project.github.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
                    >
                      <FaGithub /> {repo.label}
                    </a>
                  ))
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        {totalPages > 1 && (
          <button
            onClick={() => setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))}
            className="ml-4 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition flex-shrink-0"
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </section>
  );
}
