import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">
      <Navbar />
      
      {/* Sections */}
      <section id="home" className=" flex items-center justify-center pt-20">
        <Home />
      </section>

<section id="about" className="flex items-center justify-center pt-20 pb-20">
  <About />
</section>


      <section id="projects" className="flex items-center justify-center pt-20">
        <Projects />
      </section>

      <section id="contact" className="flex items-center justify-center pt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
