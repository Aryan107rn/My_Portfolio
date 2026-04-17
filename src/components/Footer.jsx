import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 px-8 md:px-20 py-8 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left — name */}
        <p className="text-gray-400 dark:text-gray-600 font-mono text-sm">
          Aryan<span className="text-[#7c3aed]">.</span> — built with React + Tailwind
        </p>

        {/* Center — copyright */}
        <p className="text-gray-300 dark:text-gray-700 font-mono text-xs">
          © {new Date().getFullYear()} Aryan. All rights reserved.
        </p>

        {/* Right — social icons */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-600 hover:text-[#7c3aed] transition-colors duration-200 text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-600 hover:text-[#7c3aed] transition-colors duration-200 text-xl"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  )
}