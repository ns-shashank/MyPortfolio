import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] py-6">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/n-s-shashank-582264349/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/ns-shashank"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-center text-gray-400 text-sm mt-4">
        © 2025 N.S. Shashank. All rights reserved.
      </p>
    </footer>
  );
}
