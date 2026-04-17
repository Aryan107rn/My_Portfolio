import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { dark, setDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0d1b2a]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="text-[#0f172a] dark:text-white font-bold text-xl tracking-wide"
      >
        Aryan<span className="text-[#7c3aed]">.</span>
      </a>

      <div className="flex items-center gap-8">
        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-[#7c3aed] text-sm font-medium transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="text-gray-500 dark:text-gray-300 hover:text-[#7c3aed] transition-colors duration-200 text-lg"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.nav>
  )
}