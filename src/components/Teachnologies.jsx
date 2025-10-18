import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiSelenium } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPython } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiMysql } from 'react-icons/di';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const technologies = [
  {
    name: 'React',
    icon: <RiReactjsLine className="text-5xl text-cyan-400" aria-label="React icon" />,
    description: 'Built dynamic, responsive UI components for web applications, enhancing user experiences.',
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs className="text-5xl text-white" aria-label="Next.js icon" />,
    description: 'Developed server-rendered, SEO-friendly web applications with optimized performance.',
  },
  {
    name: 'Selenium',
    icon: <SiSelenium className="text-5xl text-lime-300" aria-label="Selenium icon" />,
    description: 'Automated web testing to ensure functionality and reliability across applications.',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-5xl text-orange-500" aria-label="HTML5 icon" />,
    description: 'Structured semantic, accessible web content for robust front-end development.',
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript className="text-5xl text-yellow-500" aria-label="JavaScript icon" />,
    description: 'Implemented interactive features and logic for dynamic web applications.',
  },
  {
    name: 'Python',
    icon: <FaPython className="text-5xl text-blue-400" aria-label="Python icon" />,
    description: 'Utilized for scripting and automation, including testing with Playwright.',
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill className="text-5xl text-cyan-400" aria-label="Tailwind CSS icon" />,
    description: 'Designed responsive, utility-first styles for modern, consistent UI.',
  },
  {
    name: 'MySQL',
    icon: <DiMysql className="text-5xl text-cyan-400" aria-label="MySQL icon" />,
    description: 'Managed relational databases for efficient data storage and retrieval.',
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
        >
          Technologies
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          role="list"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full max-w-xs group"
              role="listitem"
            >
              <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

                {tech.icon}
                <h3 className="mt-4 text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 text-center leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Glowing accent bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        ></motion.div>
      </div>
    </div>
  );
};

export default Technologies;