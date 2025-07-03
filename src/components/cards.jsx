import React, { useRef, useEffect, useState } from 'react';

function Cards({ layout, cards }) {
  const rowStyles = {
    row1: 'mx-auto max-w-7xl px-6 lg:px-8',
    row2: 'justify-center',
    row3: 'mx-auto max-w-7xl px-6 lg:px-8',
  };

  return (
    <div
      className={`${
        layout === 'row2' ? 'w-[90%] mx-auto' : 'w-full'
      } flex flex-wrap ${rowStyles[layout]} ${
        layout === 'row2' ? '' : 'justify-between'
      }`}
    >
      {cards.map((card, index) => (
        <Card key={index} card={card} layout={layout} />
      ))}
    </div>
  );
}

function Card({ card, layout }) {
  const subtitleRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (subtitleRef.current) {
      setLineWidth(subtitleRef.current.offsetWidth);
    }
  }, []);

  return (
    <div
      className={`${
        layout === 'row2' ? 'w-[100%]' : 'w-[49.5%]'
      } bg-gray-900 text-white rounded-lg overflow-hidden shadow-md group relative`}
    >
      <div className="overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium overflow-hidden relative">
            <span
              ref={subtitleRef}
              className="block transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-full"
            >
              {card.subtitle}
            </span>
            <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              {card.subtitle}
            </span>
          </h3>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300 overflow-hidden relative"
          >
            <span className="block transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-full flex items-center">
              View Project
              <span className="ml-1 text-gray-500 transform transition-transform duration-500">
                →
              </span>
            </span>
            <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex items-center">
              View Project
              <span className="ml-1 text-gray-500 transform transition-transform duration-500">
                ↗
              </span>
            </span>
          </a>
        </div>
        <div
          className="h-[2px] bg-transparent mt-2 opacity-0 group-hover:opacity-100 overflow-hidden"
          style={{ width: `${lineWidth}px` }}
        >
          <div className="h-full bg-gray-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
        </div>
        <h2 className="text-xl font-semibold mt-2 overflow-hidden relative">
          <span className="block transform translate-y-0 transition-transform duration-500">
            {card.title}
          </span>
          <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500">
            {card.title}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Cards;