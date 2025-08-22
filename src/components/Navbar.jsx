import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="hover:text-yellow-400 transition">
          <a href="#home">Shashank</a>
        </span>
      </div>

      {/* Menu Links (Laptop/Tablet) */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li>
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-yellow-400 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0f172a] flex flex-col items-center space-y-6 py-6 md:hidden shadow-md">
          <a
            href="#home"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
