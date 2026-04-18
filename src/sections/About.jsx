import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-8 md:px-20 py-20"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 rounded-2xl border-2 border-[#7c3aed] flex items-center justify-center text-gray-400 dark:text-gray-600 font-mono text-sm">
            your photo here
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 tracking-widest">
            &gt; about_me.txt
          </p>

          <h2 className="text-4xl font-bold text-[#0f172a] dark:text-white mb-6">
            About Me
          </h2>

          {/* Updated paragraphs */}
          <p className="text-gray-400 leading-relaxed mb-4">
  Hey! I&apos;m Aryan, a self-taught developer based in Nagpur, India.
  I focus on building clean, fast, and functional web applications that solve real-world problems.
</p>

          <p className="text-gray-400 leading-relaxed mb-4">
            Currently levelling up in React, DSA, and exploring the world of
            DevOps and Cloud — learning how modern systems are built,
            deployed, and scaled.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            When I&apos;m not coding, I&apos;m deep into LeetCode problems,
            tweaking my Linux setup (EndeavourOS), or exploring new tools
            and technologies.
          </p>

          {/* Updated quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Based in", value: "Nagpur, India" },
              { label: "Focus", value: "Full Stack Dev" },
              { label: "Exploring", value: "DevOps & Cloud" },
              { label: "Status", value: "Open to work" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-transparent"
              >
                <p className="text-[#7c3aed] font-mono text-xs mb-1">
                  {item.label}
                </p>
                <p className="text-[#0f172a] dark:text-white font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}