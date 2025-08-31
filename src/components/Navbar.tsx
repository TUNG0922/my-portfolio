import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-950 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <NavLink
            to="/"
            className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
          >
            My Portfolio
          </NavLink>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }): string =>
              `relative group transition ${
                isActive ? "text-teal-400" : "text-gray-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-teal-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }): string =>
              `relative group transition ${
                isActive ? "text-teal-400" : "text-gray-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                About
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-teal-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }): string =>
              `relative group transition ${
                isActive ? "text-teal-400" : "text-gray-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Projects
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-teal-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
