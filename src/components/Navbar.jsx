import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

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
          ? "bg-[#0d1b2a]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="text-white font-bold text-xl tracking-wide">
        Aryan<span className="text-[#7c3aed]">.</span>
      </a>

      {/* Nav Links */}
      <ul className="flex items-center gap-8">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#7c3aed] text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}