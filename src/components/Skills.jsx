import skills from "../data/skills";

export default function Skills() {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">
        My <span className="text-yellow-400">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#1e293b] text-yellow-400 px-4 py-2 rounded-md shadow hover:bg-yellow-500 hover:text-black transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
