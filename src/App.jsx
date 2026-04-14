import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App