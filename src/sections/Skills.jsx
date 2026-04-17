import { motion } from "framer-motion"
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaDocker
} from "react-icons/fa"
import {
  SiTailwindcss, SiJavascript, SiTypescript,
  SiVite, SiCplusplus, SiPython
} from "react-icons/si"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
            &gt; skills.json
          </p>

          <h2 className="text-4xl font-bold text-[#0f172a] dark:text-white">
            Skills & Stack
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category */}
              <p className="text-gray-400 dark:text-gray-500 font-mono text-xs mb-6 tracking-widest uppercase">
                {group.category}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-target flex items-center gap-3 px-5 py-3 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#0d1b2a] hover:border-[#7c3aed] transition-colors duration-200"
                  >
                    <span style={{ color: skill.color }} className="text-2xl">
                      {skill.icon}
                    </span>

                    <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}