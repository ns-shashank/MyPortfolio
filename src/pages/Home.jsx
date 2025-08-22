// src/pages/Home.jsx
import React from "react";
import mountainBg from "../images/mountain-bg.jpg"; // Adjust path if needed

const Home = () => {
  return (
    <section
      className="h-screen    w-full flex flex-col justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: `url(${mountainBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a] bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
  Hi, I am <span className="text-yellow-400">N.S. Shashank</span>
</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          I craft clean, efficient, and visually appealing web projects.
          <br />
          I focus on creating seamless and engaging digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Home;
