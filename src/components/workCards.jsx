import React, { useRef, useEffect, useState } from 'react';

const WorkCard = () => {
  const containerRef = useRef(null);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);
  const scrollStopTimerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const workSteps = [
    {
      number: '01',
      title: 'REQUEST PROJECT',
      description: 'It all starts with your project request. I listen carefully to understand what you need and your ideas. Your ideas are my inspiration, and understanding your goals is my top priority.'
    },
    {
      number: '02', 
      title: 'STRATEGY SESSION',
      description: 'In this step, creativity takes center stage. I delve into brainstorming sessions to conceptualize your project. This is where I explore innovative solutions and artistic approaches to bring your vision to life.'
    },
    {
      number: '03',
      title: 'DESIGN & DEVELOPMENT', 
      description: 'With a clear concept in mind, we move to the design phase. This is where I weave together visual elements, user-friendly interfaces, and all the creative components that will make your project stand out.'
    },
    {
      number: '04',
      title: 'FEEDBACK',
      description: 'Your feedback is invaluable. I present the design work to you for your input. I\'m dedicated to collaboration and will make revisions as necessary to ensure the final product aligns perfectly with your artistic vision.'
    },
    {
      number: '05',
      title: 'LAUNCH',
      description: 'After your approval, it\'s time to release your project to the world. I handle all the technical details, ensuring a seamless launch. Your project is introduced to the public, where it will inspire and engage.'
    }
  ];
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const EDGE_EPSILON = 2;
    const REQUIRED_RATIO = 0.7; // 70% visibility threshold

    const animate = () => {
      const el = containerRef.current;
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) {
        rafRef.current = null;
        return;
      }

      if (Math.abs(velocityRef.current) < 0.2) {
        velocityRef.current = 0;
        rafRef.current = null;
        return;
      }

      const next = Math.max(
        0,
        Math.min(maxScroll, el.scrollLeft + velocityRef.current)
      );

      // Stop pushing at edges so vertical page scroll can resume naturally.
      if (next === 0 || next === maxScroll) {
        velocityRef.current = 0;
      }

      el.scrollLeft = next;
      velocityRef.current *= 0.88;
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      const el = containerRef.current;
      if (!el) return;

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const rect = el.getBoundingClientRect();
      const cardsOverlap = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
      const cardsVisibleRatio = rect.height > 0 ? cardsOverlap / Math.min(rect.height, viewportHeight) : 0;
      const cardsFullyVisible = cardsVisibleRatio >= REQUIRED_RATIO;
      const headingEl = document.getElementById('work-process-heading');
      if (!headingEl) return;
      const headingRect = headingEl.getBoundingClientRect();
      const headingOverlap = Math.max(0, Math.min(headingRect.bottom, viewportHeight) - Math.max(headingRect.top, 0));
      const headingVisibleRatio = headingRect.height > 0 ? headingOverlap / Math.min(headingRect.height, viewportHeight) : 0;
      const headingFullyVisible = headingVisibleRatio >= REQUIRED_RATIO;
      const activeZone = cardsFullyVisible && headingFullyVisible;
      if (!activeZone) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      const atStart = el.scrollLeft <= EDGE_EPSILON;
      const atEnd = el.scrollLeft >= maxScroll - EDGE_EPSILON;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // While heading + cards are visible, lock vertical wheel to horizontal travel
      // until the relevant edge is reached.
      if ((scrollingDown && !atEnd) || (scrollingUp && !atStart)) {
        e.preventDefault();
      } else {
        return;
      }

      velocityRef.current += e.deltaY * 0.35;
      velocityRef.current = Math.max(-60, Math.min(60, velocityRef.current));

      setIsScrolling(true);
      clearTimeout(scrollStopTimerRef.current);
      scrollStopTimerRef.current = setTimeout(() => setIsScrolling(false), 120);

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const handleNativeScroll = () => {
      if (!containerRef.current) return;
      setScrollPosition(containerRef.current.scrollLeft);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleNativeScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleNativeScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
    };
  }, []);

  return (
    <div className="w-full py-16 overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-8 px-6 lg:px-8 overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'auto'
        }}
      >
        {workSteps.map((step, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-80 lg:w-96 bg-transparent border border-gray-700 rounded-lg p-8 text-white transition-all duration-300 hover:border-white group ${
              isScrolling ? 'scale-95' : 'scale-100'
            }`}
          >
            {/* Step Number */}
            <div className="mb-6">
              <span className="text-6xl lg:text-8xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 tracking-wide overflow-hidden relative">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                {step.title}
              </span>
              <span className="block absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                {step.title}
              </span>
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base group-hover:text-white transition-colors duration-300">
              {step.description}
            </p>

            {/* Animated underline */}
            <div className="mt-6 h-[2px] bg-transparent overflow-hidden">
              <div className="h-full bg-white scale-x-0 origin-left transition-transform duration-700 ease-in-out group-hover:scale-x-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {workSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(scrollPosition / 320) === index 
                  ? 'bg-white scale-125' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div> */}

      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Scroll to navigate through the work process
        </p>
      </div>
    </div>
  );
};

export default WorkCard;