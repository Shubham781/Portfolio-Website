import React from 'react';
import { motion } from 'framer-motion';
import Divider from './divider';

const stats = [
  { name: 'Projects Worked on', value: '10+' },
  { name: 'Experience as Freelancer', value: '3 Years' },
  { name: 'Hours per week', value: '40' },
  { name: 'Tech Stack', value: 'React JS' },
];

// Variants for staggered animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
    },
  },
};

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-fit lg:mx-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={item} className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            HI, I'M SHUBHAM KUKRETI
          </motion.h2>

          <motion.h2 variants={item} className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            WEB DESIGNER & WEB DEVELOPER
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8"
          >
            Passionate Designer and Developer Crafting Visually Captivating Websites With Code and No-Code Solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.dl
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.name}
                variants={item}
                className="flex flex-col-reverse gap-1 group cursor-default"
              >
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                
                <motion.dd
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.3 }}
                  className="inline-block text-4xl font-semibold tracking-tight text-white relative overflow-hidden h-[1.1em]"
                >
                  <motion.span
                    className="block transition-transform duration-500 group-hover:-translate-y-full"
                  >
                    {stat.value}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0"
                  >
                    {stat.value}
                  </motion.span>
                </motion.dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
        <Divider />
        <motion.div
          className="mt-4 flex flex-col lg:flex-row justify-between items-center text-gray-300 space-y-4 lg:space-y-0 lg:space-x-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="text-center lg:text-left">
            <p className="text-lg font-medium">Based in India</p>
            <p className="text-lg font-medium">and Working Worldwide.</p>
          </motion.div>
          <motion.div variants={item} className="text-center lg:text-left">
            <p className="text-lg font-medium">Blending creativity with technology for impactful results.</p>
            <p className="text-lg text-right font-medium">Turning ideas into engaging digital experiences.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
