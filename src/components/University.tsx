"use client";

import { FaGraduationCap, FaTrophy, FaUsers } from "react-icons/fa";

export default function University() {
  return (
    <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 text-left transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:border-teal-500">
      <h3 className="text-3xl font-bold text-teal-400 mb-1 flex items-center gap-2">
        <FaGraduationCap /> Bachelor of Computer Science
      </h3>
      <p className="text-lg text-gray-400 mb-2">Software Engineer</p>
      <p className="text-lg text-gray-400 mb-2">Universiti Putra Malaysia (UPM)</p>
      <p className="text-lg text-gray-400 mb-4">2021-2025</p>

      <p className="text-lg text-gray-200 font-semibold mb-2">CGPA: 3.76 / 4.00</p>

      <h4 className="text-xl font-semibold text-purple-400 mb-2">Key Achievements:</h4>
      <ul className="list-inside text-lg text-gray-300 space-y-2 mb-4">
        <li className="flex items-center gap-2">
          <FaGraduationCap className="text-teal-400" /> Graduated with First Class Honours
        </li>
        <li className="flex items-center gap-2">
          <FaTrophy className="text-yellow-400" /> Represented UPM in MASUM & SUKIPT badminton tournaments
        </li>
        <li className="flex items-center gap-2">
          <FaUsers className="text-purple-400" /> College Representative of Kolej Empat Belas
        </li>
      </ul>
    </div>
  );
}
