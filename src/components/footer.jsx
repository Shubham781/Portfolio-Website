import React from 'react';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { VscGithubInverted } from 'react-icons/vsc';

function HoverAnimatedLink({ href, children }) {
  return (
    <a href={href} className="relative group  text-white text-sm font-medium">
      <span className="relative block overflow-hidden h-[1.2em]">
        <span className="block transition-transform duration-500 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <span className="relative block h-[2px] bg-transparent mt-1 overflow-hidden">
        <span className="block h-full bg-white scale-x-0 origin-center transition-transform duration-700 ease-in-out group-hover:scale-x-100 group-hover:opacity-100 opacity-0" />
      </span>
    </a>
  );
}

function HoverAnimatedIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group transition"
    >
      <span className="relative block overflow-hidden h-[2em]">
        <span className="block transition-transform duration-500 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <>
    <div className="mx-auto max-w-[77rem] px-8 lg:px-8 border-b-2 border-white"></div>
    <footer className="bg-gray-900 text-white py-8 ">
      <div
        className="container mx-auto flex justify-between items-center px-8 "
        style={{ minHeight: '40px' }} // Ensure minimum height of 40px
      >
        <div className="relative group text-3xl font-semibold overflow-hidden ">
          <span className="block transition-transform duration-500 group-hover:-translate-y-full">
            SHUBHAM KUKRETI
          </span>
          <span className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
            SHUBHAM KUKRETI
          </span>
        </div>

        {/* Center Section */}
        <nav className="flex space-x-8">
          <HoverAnimatedLink href="#">HOME</HoverAnimatedLink>
          <HoverAnimatedLink href="#about">ABOUT</HoverAnimatedLink>
          <HoverAnimatedLink href="#contact">CONTACT</HoverAnimatedLink>
          <HoverAnimatedLink href="#work">WORK</HoverAnimatedLink>
        </nav>

        <div className="flex space-x-6">
          <HoverAnimatedIcon href="https://linkedin.com">
            <PiLinkedinLogoLight className="h-8 w-8" />
          </HoverAnimatedIcon>
          <HoverAnimatedIcon href="https://github.com">
            <VscGithubInverted className="h-8 w-8" />
          </HoverAnimatedIcon>
        </div>
      </div>
    </footer>
    <div className="mx-auto max-w-[77rem] px-8 lg:px-8 border-b-2 border-white"></div>
    <p className="text-center text-sm text-gray-400 mt-4">
      Inspired by Zenify - Portfolio Website Template by Rizal Yustriadi. Check it out at <a href="https://www.framer.com/marketplace/templates/zenify-portfolio-template/" className="text-blue-400 hover:underline">Framer Marketplace</a>.
    </p>
    </>
  );
}
