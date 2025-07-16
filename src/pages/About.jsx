import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import AboutMe from '../components/aboutMe.jsx';
import WorkProcess from '../components/workProcess.jsx';
export default function About() {
  return (
    <>
      <Navbar />
      <Header page="about"/>
      <AboutMe />
      <WorkProcess />
      <Footer />
    </>
  );
}
