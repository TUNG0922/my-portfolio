"use client";

import { FaBriefcase, FaCode, FaTools } from "react-icons/fa";

export default function WorkingExperiences() {
  const experience = {
    role: "Software Engineer Intern",
    company: "Seagate Technology",
    period: "Mar 2025 - Aug 2025",
    details: [
      "Upgraded legacy Java web applications by migrating from JDK 1.8 → JDK 21 and WildFly 9 → WildFly 26, improving performance, security, and maintainability.",
      "Developed and integrated RESTful APIs for efficient data handling and visualization, using PostgreSQL and Node.js.",
      "Enhanced user interfaces by cleaning up charts, adding median trend lines, and integrating training window controls, supported by SQL queries to fetch and visualize sensor data more effectively.",
      "Migrated application from Vue 2 to Vue 3, resolving compatibility issues, upgrading dependencies (Vuetify 3), and documenting migration changes.",
      "Strengthened technical skills in Java, Node.js, SQL, Vue.js, and version control with Git/GitLab.",
      "Improved soft skills through team collaboration, cross-site communication, technical presentations, and team bonding event planning.",
    ],
    technologies: ["Java", "Node JS", "Express JS", "PostgreSQL", "Postman API", "Vue", "Vuetify", "Git/GitLab"],
  };

  return (
    <div className="mt-16 max-w-4xl w-full text-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
        Working Experiences
      </h2>

      <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 text-left transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:border-teal-500">
        <h3 className="text-2xl font-bold text-teal-400 mb-1 flex items-center gap-2">
          <FaBriefcase /> {experience.role}
        </h3>
        <p className="text-lg text-gray-400 mb-1">{experience.company}</p>
        <p className="text-gray-400 mb-4">{experience.period}</p>

        <ul className="list-inside list-disc text-lg text-gray-300 space-y-2 mb-4">
          {experience.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCode className="text-purple-400 mt-1" /> {detail}
            </li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-purple-400 flex items-center gap-2 mb-2">
          <FaTools /> Technologies Used:
        </p>
        <ul className="list-inside list-disc text-lg text-gray-300 space-y-1">
          {experience.technologies.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
