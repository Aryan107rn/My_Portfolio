import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React, Tailwind CSS and Framer Motion. Features dark/light mode, smooth animations and fully responsive design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Describe your second project here. What does it do, what problem does it solve, what did you learn building it?",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-two",
    live: "#",
    featured: false,
  },
  {
    title: "Project Three",
    description:
      "Describe your third project here. Keep it concise — two to three sentences is enough. Focus on what makes it interesting.",
    tags: ["JavaScript", "CSS", "API"],
    github: "https://github.com/yourusername/project-three",
    live: "#",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-8 md:px-20 py-20"
    >
      <div className="max-w-6xl w-full mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 tracking-widest">
            &gt; projects.exe
          </p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col p-6 rounded-2xl border transition-colors duration-300
                ${
                  project.featured
                    ? "border-[#7c3aed] bg-[#7c3aed]/5"
                    : "border-gray-800 bg-[#0d1b2a] hover:border-[#7c3aed]/50"
                }`}
            >
              {/* Featured */}
              {project.featured && (
                <span className="absolute top-4 right-4 text-xs font-mono text-[#7c3aed] border border-[#7c3aed] rounded-full px-3 py-1">
                  featured
                </span>
              )}

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-3 pr-20">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#7c3aed] bg-[#7c3aed]/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-2 text-gray-400 hover:text-[#7c3aed] text-sm transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}