import React from 'react';
import { HERO_CONTENT } from '../constants/data';
import profileImage from '../assets/Sakib.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-8 text-4xl sm:text-5xl font-bold tracking-tight lg:mt-16 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300"
              >
                Mohammad Abdul Aziz Sakib
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-2xl sm:text-3xl font-semibold tracking-tight text-transparent"
              >
                Front-End Developer & QA Engineer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-6 max-w-xl text-base sm:text-lg font-light text-neutral-300 leading-relaxed tracking-tight"
              >
                {HERO_CONTENT}
              </motion.p>
              {/* Glowing accent bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              ></motion.div>
            </div>
          </div>

          {/* Image Section (No Card) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full lg:w-1/2 flex justify-center p-8"
          >
            <img
              src={profileImage}
              alt="Mohammad Abdul Aziz Sakib"
              className="rounded-lg object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;