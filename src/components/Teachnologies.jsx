<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiSelenium } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPython } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiMysql } from 'react-icons/di';
=======
import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb";
import { SiSelenium } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import {motion} from 'framer-motion';
const iconVariants = (duration)=>({
   initial: {y:-10},
   animate:{
      y:[10,-10],
      transition: {
         duration:duration,
         ease:"linear",
         repeat:Infinity,
         repeatType:"reverse",
      },
   },
   
})
const Teachnologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
         className='flex flex-wrap items-center justify-center
         gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <TbBrandNextjs className='text-7xl text-white'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <SiSelenium className='text-7xl text-lime-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <FaPython className='text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <DiMysql className='text-7xl text-cyan-400'/>
            </motion.div>
         </motion.div>
      
    </div>
  )
}
>>>>>>> be723b25df86503837098a6fe72c6a1cf27d10e0

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
  hidden: { opacity: 0, x: -50, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
const technologies = [
  {
    name: 'React',
    icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
    description: 'Built dynamic, responsive UI components for web applications, enhancing user experiences.',
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs className="text-5xl text-white" />,
    description: 'Developed server-rendered, SEO-friendly web applications with optimized performance.',
  },
  {
    name: 'Selenium',
    icon: <SiSelenium className="text-5xl text-lime-300" />,
    description: 'Automated web testing to ensure functionality and reliability across applications.',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    description: 'Structured semantic, accessible web content for robust front-end development.',
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript className="text-5xl text-yellow-500" />,
    description: 'Implemented interactive features and logic for dynamic web applications.',
  },
  {
    name: 'Python',
    icon: <FaPython className="text-5xl text-blue-400" />,
    description: 'Utilized for scripting and automation, including testing with Playwright.',
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill className="text-5xl text-cyan-400" />,
    description: 'Designed responsive, utility-first styles for modern, consistent UI.',
  },
  {
    name: 'MySQL',
    icon: <DiMysql className="text-5xl text-cyan-400" />,
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

      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
      >
        Technologies
      </motion.h2>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full"
          >
            <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

              {tech.icon}
              <h3 className="mt-4 text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
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
        className="mt-12 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      ></motion.div>
    </div>
  );
};

export default Technologies;