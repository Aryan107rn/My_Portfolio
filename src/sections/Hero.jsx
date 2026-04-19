import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const roles = ["Full Stack Developer", "DSA Learner", "DevOps & Cloud Learner"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayed(role.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1500)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, currentRole])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-between px-8 md:px-20 pt-24"
    >
      {/* Left */}
      <div className="max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#7c3aed] font-mono text-sm mb-4 tracking-widest"
        >
          &gt; Hello, world. I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-4"
        >
          Aryan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-mono text-gray-600 dark:text-gray-300 mb-6 h-10"
        >
          <span className="text-[#7c3aed]">&gt;</span>{" "}
          {displayed}
          <span className="animate-pulse text-[#7c3aed]">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed"
        >
          Building fast, scalable web applications with clean UI and solid backend systems.
          Currently focused on React, Node.js, and PostgreSQL.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 flex-wrap"
        >
          {/* View Projects */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-target px-6 py-3 bg-[#7c3aed] text-white rounded-lg font-medium hover:bg-[#6d28d9] transition-colors duration-200"
          >
            View Projects
          </motion.a>

          {/* Contact */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-target px-6 py-3 border border-[#7c3aed] text-[#7c3aed] rounded-lg font-medium hover:bg-[#7c3aed]/10 transition-colors duration-200"
          >
            Contact Me
          </motion.a>

          {/* Resume */}
          <motion.a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="cursor-target px-6 py-3 border border-[#7c3aed] text-[#7c3aed] rounded-lg font-medium hover:bg-[#7c3aed]/10 transition-all duration-200"
>
  Resume
</motion.a>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block font-mono text-sm text-gray-400 dark:text-gray-600 leading-relaxed select-none"
      >
        <p>
          <span className="text-[#7c3aed]">const</span>{" "}
          <span className="text-blue-400">developer</span> = {"{"}
        </p>

        <p>
          &nbsp;&nbsp;name:{" "}
          <span className="text-green-400">"Aryan"</span>,
        </p>

        <p>
          &nbsp;&nbsp;role:{" "}
          <span className="text-green-400">"Full Stack Developer"</span>,
        </p>

        <p>
          &nbsp;&nbsp;focus:{" "}
          <span className="text-green-400">"React + Backend APIs"</span>,
        </p>

        <p>&nbsp;&nbsp;stack: [</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;"React",</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;"Tailwind",</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;"Node.js",</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;"PostgreSQL",</p>
        <p>&nbsp;&nbsp;],</p>

        <p>
          &nbsp;&nbsp;available:{" "}
          <span className="text-orange-400">true</span>,
        </p>

        <p>{"}"}</p>
      </motion.div>
    </section>
  )
}