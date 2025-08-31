import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Social Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/TUNG0922"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition transform"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/tungjinyou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition transform"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tung Jin You. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
