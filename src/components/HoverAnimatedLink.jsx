import React from 'react';
import { Link } from 'react-router-dom';

const HoverAnimatedLink = ({ href, children }) => {
  return (
    <Link to={href} className="relative group text-white text-sm font-medium">
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
};

export default HoverAnimatedLink;
