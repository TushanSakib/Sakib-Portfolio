import React from 'react';
import aboutImg from '../assets/Sakib.jpg';
import { ABOUT_TEXT } from '../constants/data';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};

const imageCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const textCardVariants = {
  hidden: { opacity: 0, x: 100, rotateY: 15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements (behind text only) */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
      >
        About Me
      </motion.h2>

      <motion.div
        className="relative max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Glowing vertical timeline */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"
          ></motion.div>
        </div>

        {/* Image and Text Section */}
        <motion.div className="flex flex-col lg:flex-row items-center">
          {/* Image (No Card Background) */}
          <div className="flex items-center justify-center w-full lg:w-5/12 mb-6 lg:mb-0">
            <motion.div
              variants={imageCardVariants}
              className="relative lg:mr-auto lg:ml-12"
            >
              <img
                className="rounded-lg object-cover w-64 h-64 lg:w-80 lg:h-80"
                src={aboutImg}
                alt="Sakib"
              />
            </motion.div>
          </div>

          {/* Timeline center dot */}
          {/* <div className="absolute left-8 lg:left-1/2 w-6 h-6 -ml-3 z-20">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-6 h-6"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-75"></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50"></div>
              <div className="absolute inset-2 rounded-full bg-white"></div>
            </motion.div>
          </div> */}

          {/* Text Card (Sky-Space-Craft-Tech) */}
          <div className="w-full lg:w-5/12">
            <motion.div
              variants={textCardVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-xl opacity-20 group-hover:opacity-60 blur transition duration-500"></div>
              <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                  My Journey
                </h3>
                <div className="mb-4 space-y-2">
                  {ABOUT_TEXT.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1.5">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/50 transition-all duration-300"></div>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed group-hover/item:text-neutral-300 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;