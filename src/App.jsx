import StellarFlux from "./components/StellarFlux"
import PageLoader from "./components/PageLoader"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <StellarFlux />

      {/* Content */}
      <PageLoader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default App