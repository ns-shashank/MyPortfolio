import React from "react";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#0f172a] px-6 py-16">
  <div className="flex-shrink-0 mb-8 md:mb-0">
    <img
      src={profile}
      alt="Profile"
      className="w-48 h-48 md:w-[26rem] md:h-[26rem] object-cover rounded"
    />
  </div>
<div className="flex flex-col gap-6 text-white text-center md:text-left">
    <h1 className="text-2xl md:text-3xl font-bold">Web Developer</h1>
          <p className="text-sm md:text-base">
            I am <span className="font-semibold">N.S. Shashank</span>, a passionate web developer with a keen interest in creating innovative and user-friendly web and software projects. Skilled in Python, JavaScript, React, Node.js, Django, Flask, and UI/UX design, I strive to bridge the gap between functionality and design. I enjoy exploring new technologies and implementing them to solve real-world problems efficiently. My approach is detail-oriented, creative, and focused on delivering seamless experiences.
          </p>
          <p className="text-sm md:text-base">
            I thrive in collaborative environments and love turning ideas into functional products. Beyond coding, I am curious about blockchain, AI, and full-stack development, continuously learning to stay ahead in the tech world. I take pride in my problem-solving skills and the ability to adapt to challenging projects. My goal is to craft impactful digital experiences that resonate with users globally.
          </p>

          {/* Button */}
<div>
  <a href="/resume.pdf" download="N S Shashank Resume.pdf">
    <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded shadow hover:bg-yellow-500 transition">
      DOWNLOAD C.V
    </button>
  </a>
</div>
      </div>
    </div>
  );
};

export default About;
