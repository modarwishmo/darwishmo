import React, { useEffect } from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Services from './components/services/services'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import AudioTest from './components/AudioTest'

const App = () => {
  return (
    <>
    <AudioTest />
    <Header/>
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    

    </>
  )
}

export default App