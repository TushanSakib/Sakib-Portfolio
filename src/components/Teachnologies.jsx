import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5 } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io5';
import { DiMysql } from 'react-icons/di';
import { SiPlaywright, SiSelenium } from 'react-icons/si';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.5, delayChildren: 0.3 } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100, rotateY: -15 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const technologies = [
  { name: "Python", icon: <FaPython className="text-4xl text-blue-400" />, description: "Scripting and automation" },
  { name: "React", icon: <RiReactjsLine className="text-4xl text-cyan-400" />, description: "UI Components" },
  { name: "Next.js", icon: <TbBrandNextjs className="text-4xl text-white" />, description: "Server-rendered apps" },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-yellow-500" />, description: "Dynamic web features" },
  { name: "MySQL", icon: <DiMysql className="text-4xl text-cyan-400" />, description: "Database management" },
  { name: "Playwright", icon: <SiPlaywright className="text-4xl text-lime-300" />, description: "End-to-end testing" },
  { name: "Selenium", icon: <SiSelenium className="text-4xl text-lime-300" />, description: "Automated web testing" },
  { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" />, description: "Semantic markup" },
];

const TechnologiesSection = () => {
  return (
    <section className="w-full py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl font-semibold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
      >
        Technologies
      </motion.h1>

      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="w-full sm:w-1/2 lg:w-1/4 relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center text-center"
          >
            {tech.icon}
            <h3 className="text-white font-semibold mt-4 text-lg">{tech.name}</h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">{tech.description}</p>

            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
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
      />
    </section>
  );
};

export default TechnologiesSection;
