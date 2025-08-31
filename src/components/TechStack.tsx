"use client";

import { FaGit, FaJava, FaMobileAlt, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiFirebase, SiFlask, SiFlutter, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiSpringboot, SiTailwindcss, SiVuetify } from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
  { name: "React Native", icon: <FaMobileAlt className="text-blue-400 w-8 h-8" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-400 w-8 h-8" /> },
  { name: "Vuetify", icon: <SiVuetify className="text-teal-400 w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-8 h-8" /> },
  { name: "Java", icon: <FaJava className="text-red-400 w-8 h-8" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 w-8 h-8" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 w-8 h-8" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-8 h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 w-8 h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-8 h-8" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 w-8 h-8" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-400 w-8 h-8" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-8 h-8" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 w-8 h-8" /> },
  { name: "Git", icon: <FaGit className="text-orange-400 w-8 h-8" /> },
  { name: "Machine Learning", icon: <FaPython className="text-yellow-400 w-8 h-8" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 w-8 h-8" /> },
  { name: "API Testing", icon: <SiPostman className="text-red-400 w-8 h-8" /> },
  { name: "API Integration", icon: <SiPostman className="text-pink-400 w-8 h-8" /> },
];

export default function TechStack() {
  return (
    <div className="mt-16 max-w-4xl w-full text-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="bg-gray-800/70 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            {tech.icon}
            <p className="text-gray-200 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
