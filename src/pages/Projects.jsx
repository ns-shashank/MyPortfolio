import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiDjango } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Flask", icon: <SiFlask size={40} /> },
  { name: "Django", icon: <SiDjango size={40} /> },
];


export default function Projects() {
  return (
    <section className="bg-[#0f172a] text-white px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Projects Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Skills Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-yellow-400">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#0f172a] border border-gray-700 rounded-xl shadow-md p-6 hover:bg-yellow-400 hover:text-black transition"
            >
              <div className="text-#0f172a mb-3">{skill.icon}</div>
              <p className="text-#0f172a">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
