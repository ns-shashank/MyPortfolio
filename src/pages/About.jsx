import React from "react";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-[#0f172a] px-6 py-16"
    >
      <div className="flex flex-col md:flex-row max-w-5xl items-center gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[26rem] md:h-[26rem] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 text-white text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Web Developer
          </h1>

          <p className="text-sm sm:text-base leading-relaxed">
            I am <span className="font-semibold">N.S. Shashank</span>, a
            passionate web developer with a keen interest in creating
            innovative and user-friendly web and software projects. Skilled in
            Python, JavaScript, React, Node.js, Django, Flask, and UI/UX
            design, I strive to bridge the gap between functionality and
            design. I enjoy exploring new technologies and implementing them to
            solve real-world problems efficiently. My approach is
            detail-oriented, creative, and focused on delivering seamless
            experiences.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            I thrive in collaborative environments and love turning ideas into
            functional products. Beyond coding, I am curious about blockchain,
            AI, and full-stack development, continuously learning to stay ahead
            in the tech world. I take pride in my problem-solving skills and
            the ability to adapt to challenging projects. My goal is to craft
            impactful digital experiences that resonate with users globally.
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
    </section>
  );
};

export default About;
