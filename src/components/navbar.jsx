'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const leftLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const rightLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
];

function HoverAnimatedLink({ to, children }) {
  return (
    <Link to={to} className="relative group text-white text-sm font-medium">
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
    </Link>
  );
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center sm:hidden">
            <Disclosure.Button className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden size-6 group-data-open:block" aria-hidden="true" />
            </Disclosure.Button>
          </div>

          <div className="hidden sm:flex space-x-6">
            {leftLinks.map((link) => (
              <HoverAnimatedLink key={link.name} to={link.href}>
                {link.name}
              </HoverAnimatedLink>
            ))}
          </div>

          <div className="relative group inline-block text-white text-2xl font-semibold tracking-wide">
            <HoverAnimatedLink to="/shubham-kukreti">
              Shubham Kukreti
            </HoverAnimatedLink>
          </div>

          <div className="hidden sm:flex space-x-6">
            {rightLinks.map((link) => (
              <HoverAnimatedLink key={link.name} to={link.href}>
                {link.name}
              </HoverAnimatedLink>
            ))}
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden bg-gray-800">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Disclosure.Button
              key={link.name}
              as={Link}
              to={link.href}
              className="block text-white rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              {link.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
