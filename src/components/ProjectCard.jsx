export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#1e293b] rounded-xl shadow-md overflow-hidden hover:scale-105 transition transform">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
