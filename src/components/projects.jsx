import React from 'react';
import Cards from './cards';
import Divider from './divider.jsx';

function Projects() {
  const row1Cards = [
    { image: '/image-1.png', subtitle: 'Subtitle 1', title: 'Title 1' },
    { image: '/image-1.png', subtitle: 'Subtitle 2', title: 'Title 2' },
  ];

  const row2Cards = [
    { image: '/image-1.png', subtitle: 'Subtitle 3', title: 'Title 3' },
  ];

  const row3Cards = [
    { image: '/image-1.png', subtitle: 'Subtitle 4', title: 'Title 4' },
    { image: '/image-1.png', subtitle: 'Subtitle 5', title: 'Title 5' },
  ];

  return (
    <>
      <div className="h-full w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-4">
          <div className="mx-auto max-w-fit text-white lg:mx-0 py-12">
            <ul>
              <li>Portfolio</li>
            </ul>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">FEATURED WORK</h1>
          </div>
        </div>
        <div className="space-y-12"> {/* Adjusted spacing between rows */}
          <Cards layout="row1" cards={row1Cards} />
          <Cards layout="row2" cards={row2Cards} />
          <Cards layout="row3" cards={row3Cards} />
        </div>
      </div>
    </>
  );
}

export default Projects;