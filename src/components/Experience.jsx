import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants/data';

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

const cardVariants = {
  hidden: { opacity: 0, x: -100, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
      >
        Professional Journey
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

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`mb-16 flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline center dot */}
            <div className="absolute left-8 lg:left-1/2 w-6 h-6 -ml-3 z-20">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="relative w-6 h-6"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-75"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50"></div>
                <div className="absolute inset-2 rounded-full bg-white"></div>
              </motion.div>
            </div>

            {/* Content card with year, role, company, location, description, and technologies */}
            <div className="w-full lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className={`group relative ${index % 2 === 0 ? 'lg:ml-auto lg:mr-12' : 'lg:mr-auto lg:ml-12'}`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-xl opacity-20 group-hover:opacity-60 blur transition duration-500"></div>
                <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

                  {/* Year */}
                  <p className="text-sm text-neutral-400 mb-2 group-hover:text-neutral-300 transition-colors duration-300">
                    {exp.year}
                  </p>

                  {/* Role title */}
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                    {exp.role}
                  </h3>

                  {/* Company info */}
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <span className="text-cyan-400 font-medium">{exp.company}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-500">{exp.location}</span>
                  </div>

                  {/* Description points */}
                  <div className="mb-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + i * 0.1 }}
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

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.6 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 text-cyan-300 hover:bg-cyan-950/30 hover:border-cyan-500/60 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;