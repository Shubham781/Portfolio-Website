import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import Projects from '../components/projects.jsx';
import Services from '../components/sevices.jsx';
import Contact from '../components/contact.jsx';
import AboutMe from '../components/aboutMe.jsx';
import Divider from '../components/divider.jsx';

export default function Home() {
  return (
    /* Main wrapper MUST NOT have overflow-hidden */
    <main className="relative w-full bg-black">
      <Navbar />

      {/* STICKY WRAPPER: This pins the header */}
      <div className="sticky top-0 z-0 h-auto w-full overflow-hidden">
        <Header />
      </div>

      {/* SLIDING CONTENT: This must have a solid background to cover the header */}
      <div className="relative z-10 w-full bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        {/* The Divider is the first thing that slides OVER the Header */}
        <Divider />
        <AboutMe />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}