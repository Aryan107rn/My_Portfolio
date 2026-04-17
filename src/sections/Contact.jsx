import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/xxxxxxxx", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-8 md:px-20 py-20"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#7c3aed] font-mono text-sm mb-3 tracking-widest">
            &gt; contact.sh
          </p>

          <h2 className="text-4xl font-bold text-[#0f172a] dark:text-white mb-6">
            Get In Touch
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            I&apos;m currently open to fresher opportunities in Web Development
            and DevOps. If you have a role, project, or just want to connect —
            my inbox is open.
          </p>

          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
            I typically respond within 24 hours.
          </p>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <FaEnvelope />,
                label: "aryannakade123@gmail.com",
                href: "mailto:aryannakade123@gmail.com",
              },
              {
                icon: <FaGithub />,
                label: "github.com/Aryan107rn",
                href: "https://github.com/Aryan107rn",
              },
              {
                icon: <FaLinkedin />,
                label: "linkedin.com/in/Aryan Nakade",
                href: "https://www.linkedin.com/in/aryan-nakade-046202338/",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-500 dark:text-gray-400 hover:text-[#7c3aed] transition-colors duration-200 group"
              >
                <span className="text-xl group-hover:text-[#7c3aed] transition-colors duration-200">
                  {link.icon}
                </span>
                <span className="font-mono text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Input fields */}
            <div>
              <label className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#0d1b2a] border border-gray-200 dark:border-gray-800 text-[#0f172a] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#7c3aed] transition-colors duration-200"
              />
            </div>

            <div>
              <label className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#0d1b2a] border border-gray-200 dark:border-gray-800 text-[#0f172a] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#7c3aed] transition-colors duration-200"
              />
            </div>

            <div>
              <label className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#0d1b2a] border border-gray-200 dark:border-gray-800 text-[#0f172a] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#7c3aed] transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-[#7c3aed] text-white rounded-lg font-medium hover:bg-[#6d28d9] disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 font-mono text-sm text-center">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 font-mono text-sm text-center">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  )
}