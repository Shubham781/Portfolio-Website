import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';

export default function Contact() {
  return (
    <>
      <Navbar />
      <Header page="contact" />
      {/* Add Contact Page Content */}
      <Footer />
    </>
  );
}
