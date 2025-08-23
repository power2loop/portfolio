import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skill from './component/Skill'
import MyWork from './component/MyWork'
import Contact from './component/Contact'
import Footer from './component/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App