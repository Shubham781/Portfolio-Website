import React from 'react'
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import './index.css'
import Projects from './components/projects.jsx'
import Footer from './components/footer.jsx'
import Services from './components/sevices.jsx'
import Contact from './components/contact.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Projects/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App