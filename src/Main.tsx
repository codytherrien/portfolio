import React from "react"
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact source="home" />
    </div>
  )
}

export default Main