import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import Projects from '../components/projects.jsx';
import Services from '../components/sevices.jsx';
import Contact from '../components/contact.jsx';
import AboutMe from '../components/aboutMe.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
