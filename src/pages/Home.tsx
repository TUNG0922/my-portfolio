"use client";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 bg-gray-900 text-gray-200">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6 whitespace-nowrap">
        Hi, I’m Tung Jin You 👋
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
        I’m a passionate{" "}
        <span className="font-semibold text-white whitespace-nowrap">
          Full-Stack Developer
        </span>{" "}
        who enjoys building modern web applications and exploring the world of{" "}
        <span className="text-pink-400 font-semibold whitespace-nowrap">AI</span>.
      </p>

      {/* CTA Buttons */}
      <div className="space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          View My Projects
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
        >
          About Me
        </Link>
      </div>

      {/* Profile Avatars (GitHub + LinkedIn + Download Resume) */}
      <div className="mt-12 flex space-x-6">
        {/* GitHub Avatar */}
        <a
          href="https://github.com/TUNG0922"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/000000?v=4" // replace with your GitHub avatar
            alt="GitHub Profile"
            className="w-20 h-20 rounded-full border-4 border-teal-400 shadow-lg hover:scale-105 transition-transform"
          />
        </a>

        {/* LinkedIn Avatar */}
        <a
          href="https://linkedin.com/in/tungjinyou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" // LinkedIn icon
            alt="LinkedIn Profile"
            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform bg-white p-2"
          />
        </a>

        {/* Download Resume Avatar */}
        <a
          href="/Resume_TungJinYou.pdf" // place your resume file in the public/ folder
          download
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991110.png" // Download icon
            alt="Download Resume"
            className="w-20 h-20 rounded-full border-4 border-green-500 shadow-lg hover:scale-105 transition-transform bg-white p-3"
          />
        </a>
      </div>
    </section>
  );
}
